import fs from "node:fs";
import vm from "node:vm";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(fileURLToPath(import.meta.url));
const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
const failures = [];

const bankMatch = html.match(/const questionBank = (\{[\s\S]*?\n\});\nwindow\.questionBank/);
if (!bankMatch) throw new Error("Could not locate questionBank in index.html");

const context = { console };
vm.createContext(context);
vm.runInContext(`var questionBank = ${bankMatch[1]};`, context);

const scriptNames = [...html.matchAll(/<script src="\.\/([^"?]+)(?:\?[^"]*)?"><\/script>/g)]
  .map(match => match[1]);

for (const scriptName of scriptNames) {
  const scriptPath = path.join(root, scriptName);
  if (!fs.existsSync(scriptPath)) failures.push(`missing script referenced by index.html: ${scriptName}`);
  else vm.runInContext(fs.readFileSync(scriptPath, "utf8"), context);
}

const bank = context.questionBank;
const lessonKeys = Object.keys(bank).filter(key => /^lesson\d+$/.test(key)).sort((a, b) => Number(a.replace("lesson", "")) - Number(b.replace("lesson", "")));
const expectedCounts = { clinicalIntegration: 30, brainRegionImages: 24 };
const expectedLessonIds = Array.from({ length: 33 }, (_, index) => index + 1);

function localizedQuestion(question, language) {
  const localized = language === "en" && question.i18n?.en ? question.i18n.en : {};
  return {
    ...question,
    topic: localized.topic || question.topic,
    question: localized.question || question.question,
    explanation: localized.explanation || question.explanation,
    options: localized.options || question.options,
    correctAnswer: Number.isInteger(localized.correctAnswer) ? localized.correctAnswer : question.correctAnswer
  };
}

function normalize(text) {
  return String(text || "").trim().replace(/\s+/g, " ").toLowerCase();
}

function assertQuestionShape(bankKey, question, language) {
  const label = `${bankKey}:${question.id}:${language}`;
  const item = localizedQuestion(question, language);
  if (!Number.isInteger(question.id)) failures.push(`${bankKey}: missing or invalid id`);
  if (!["easy", "medium", "hard"].includes(question.difficulty)) failures.push(`${bankKey}:${question.id}: invalid difficulty`);
  if (!item.topic?.trim()) failures.push(`${label}: empty topic`);
  if (!item.question?.trim()) failures.push(`${label}: empty question`);
  if (!item.explanation?.trim()) failures.push(`${label}: empty explanation`);
  if (!Array.isArray(item.options) || item.options.length !== 4) failures.push(`${label}: expected exactly 4 options`);
  if (!Number.isInteger(item.correctAnswer) || item.correctAnswer < 0 || item.correctAnswer > 3) failures.push(`${label}: invalid localized correctAnswer`);
  const optionTexts = (item.options || []).map(normalize);
  if (new Set(optionTexts).size !== optionTexts.length) failures.push(`${label}: duplicate options`);
  if (language === "en" && (!question.i18n?.en?.question || !question.i18n?.en?.explanation || question.i18n.en.options?.length !== 4)) {
    failures.push(`${bankKey}:${question.id}: incomplete English translation`);
  }
  if (language === "en" && question.i18n?.en && !Number.isInteger(question.i18n.en.correctAnswer)) {
    failures.push(`${bankKey}:${question.id}: missing explicit English correctAnswer`);
  }
}

function answerType(text) {
  if (/^where\b|located/i.test(text)) return "location";
  if (/which neurotransmitter|what neurotransmitter/i.test(text)) return "neurotransmitter";
  if (/which pathway|what pathway/i.test(text)) return "pathway";
  if (/which region|what region|which structure|what structure/i.test(text)) return "region";
  if (/which mechanism|what mechanism|how |why /i.test(text)) return "mechanism";
  return "general";
}

const neurotransmitters = /\b(glutamate|gaba|dopamine|serotonin|acetylcholine|glycine)\b/i;
const hormones = /\b(cortisol|acth|crh|leptin|ghrelin|glp-1|oxytocin|vasopressin)\b/i;
const locations = /\b(lobe|cortex|gyrus|sulcus|fissure|thalamus|hypothalamus|brainstem|temporal|frontal|parietal|occipital|insula|pfc|tpj|sts|mPFC|VMH|LHA|SCN)\b/i;
const pathways = /\b(pathway|tract|fasciculus|fornix|cingulum|loop|circuit|axis|network)\b/i;

function heuristicAnswerTypeCheck(bankKey, question) {
  const item = localizedQuestion(question, "en");
  const type = answerType(item.question);
  const options = item.options || [];
  if (type === "location" && options.some(option => neurotransmitters.test(option) || /^pyramidal$/i.test(option))) {
    failures.push(`${bankKey}:${question.id}: English location question has non-location distractor`);
  }
  if (type === "neurotransmitter" && options.some(option => locations.test(option) || pathways.test(option))) {
    failures.push(`${bankKey}:${question.id}: English neurotransmitter question has region/pathway distractor`);
  }
  if (type === "pathway" && options.some(option => hormones.test(option) && !pathways.test(option))) {
    failures.push(`${bankKey}:${question.id}: English pathway question has hormone distractor`);
  }
}

for (const key of lessonKeys) {
  const questions = bank[key] || [];
  if (questions.length !== 33) failures.push(`${key}: expected 33 reachable questions, found ${questions.length}`);
  const ids = questions.map(question => question.id).sort((a, b) => a - b);
  if (ids.join(",") !== expectedLessonIds.join(",")) failures.push(`${key}: expected ids 1 through 33 exactly once, found ${ids.join(",")}`);
  for (const question of questions) {
    assertQuestionShape(key, question, "he");
    assertQuestionShape(key, question, "en");
    heuristicAnswerTypeCheck(key, question);
  }
}

for (const [key, count] of Object.entries(expectedCounts)) {
  const questions = bank[key] || [];
  if (questions.length !== count) failures.push(`${key}: expected ${count} questions, found ${questions.length}`);
  const seen = new Set();
  for (const question of questions) {
    if (seen.has(question.id)) failures.push(`${key}: duplicate id ${question.id}`);
    seen.add(question.id);
    assertQuestionShape(key, question, "he");
    assertQuestionShape(key, question, "en");
    heuristicAnswerTypeCheck(key, question);
  }
}

const regressionExpectations = {
  2: "connections between regions matter",
  6: "above the midbrain",
  7: "frontal and parietal lobes",
  8: "anterior to the central sulcus",
  10: "longitudinal fissure",
  12: "nissl"
};

for (const [idText, expected] of Object.entries(regressionExpectations)) {
  const id = Number(idText);
  const question = bank.lesson1.find(item => item.id === id);
  const item = localizedQuestion(question, "en");
  const correct = normalize(item.options[item.correctAnswer]);
  if (!correct.includes(expected)) failures.push(`lesson1:${id}: English regression expected correct answer containing "${expected}", got "${item.options[item.correctAnswer]}"`);
}

for (const key of lessonKeys) {
  for (const id of [31, 32, 33]) {
    const question = bank[key].find(item => item.id === id);
    if (!question) failures.push(`${key}:${id}: q31-q33 is not reachable`);
    else {
      assertQuestionShape(key, question, "he");
      assertQuestionShape(key, question, "en");
    }
  }
}

const imageFiles = new Set(fs.readdirSync(path.join(root, "brain-region-images")).filter(name => name.endsWith(".webp")));
if (imageFiles.size !== 24) failures.push(`expected 24 brain-region images, found ${imageFiles.size}`);
for (const question of bank.brainRegionImages || []) {
  const match = String(question.visualSvg || "").match(/brain-region-images\/([^"]+\.webp)/);
  if (!match) failures.push(`brainRegionImages:${question.id}: missing visualSvg image path`);
  else if (!imageFiles.has(match[1])) failures.push(`brainRegionImages:${question.id}: missing image file ${match[1]}`);
}

if (/questions-review-fixes\.js/.test(html)) failures.push("index.html still references questions-review-fixes.js");
if (/slice\(0,\s*30\)/.test(fs.readFileSync(path.join(root, "questions-quality.js"), "utf8"))) failures.push("questions-quality.js still contains silent slice(0, 30)");
if (/Keep the former 31–33 candidates out|intentionally exposes exactly 30/.test(fs.readFileSync(path.join(root, "questions-new.js"), "utf8"))) failures.push("questions-new.js still contains stale q31-q33 exclusion comment");

if (failures.length) {
  console.error(failures.join("\n"));
  process.exitCode = 1;
} else {
  const total = Object.values(bank).flat().length;
  console.log(`Validated final Hebrew and English runtime banks: ${lessonKeys.length} lessons, 33 questions per lesson, ${total} total questions.`);
}
