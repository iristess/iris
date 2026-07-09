import fs from "node:fs";
import vm from "node:vm";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(fileURLToPath(import.meta.url));
const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
const bankMatch = html.match(/const questionBank = (\{[\s\S]*?\n\});\nwindow\.questionBank/);
if (!bankMatch) throw new Error("Could not locate questionBank in index.html");

const context = { console };
vm.createContext(context);
vm.runInContext(`var questionBank = ${bankMatch[1]};`, context);

const scriptNames = [...html.matchAll(/<script src="\.\/([^"?]+)(?:\?[^"]*)?"><\/script>/g)]
  .map(match => match[1]);
for (const scriptName of scriptNames) {
  vm.runInContext(fs.readFileSync(path.join(root, scriptName), "utf8"), context);
}

const failures = [];
const lessonKeys = Object.keys(context.questionBank).filter(key => /^lesson\d+$/.test(key));
const expectedCounts = { clinicalIntegration: 30, brainRegionImages: 24 };

for (const key of lessonKeys) {
  if (context.questionBank[key].length !== 30) failures.push(`${key}: expected 30 questions`);
}
for (const [key, count] of Object.entries(expectedCounts)) {
  if (context.questionBank[key]?.length !== count) failures.push(`${key}: expected ${count} questions`);
}

for (const [bankKey, questions] of Object.entries(context.questionBank)) {
  const ids = new Set();
  const levelCounts = { easy: 0, medium: 0, hard: 0 };
  for (const question of questions) {
    if (ids.has(question.id)) failures.push(`${bankKey}: duplicate id ${question.id}`);
    ids.add(question.id);
    if (question.options?.length !== 4) failures.push(`${bankKey}:${question.id}: expected 4 options`);
    if (!Number.isInteger(question.correctAnswer) || question.correctAnswer < 0 || question.correctAnswer > 3) {
      failures.push(`${bankKey}:${question.id}: invalid correctAnswer`);
    }
    if (new Set(question.options).size !== question.options.length) failures.push(`${bankKey}:${question.id}: duplicate option`);
    if (!question.question?.trim() || !question.explanation?.trim()) failures.push(`${bankKey}:${question.id}: empty text`);
    if (!question.i18n?.en?.question || question.i18n.en.options?.length !== 4 || !question.i18n.en.explanation) {
      failures.push(`${bankKey}:${question.id}: incomplete English translation`);
    }
    if (levelCounts[question.difficulty] !== undefined) levelCounts[question.difficulty] += 1;
  }
  if (lessonKeys.includes(bankKey) || bankKey === "clinicalIntegration") {
    for (const level of ["easy", "medium", "hard"]) {
      if (levelCounts[level] !== 10) failures.push(`${bankKey}: expected 10 ${level} questions`);
    }
  }
}

const imageFiles = fs.readdirSync(path.join(root, "brain-region-images")).filter(name => name.endsWith(".webp"));
if (imageFiles.length !== 24) failures.push(`expected 24 brain-region images, found ${imageFiles.length}`);

if (failures.length) {
  console.error(failures.join("\n"));
  process.exitCode = 1;
} else {
  console.log(`Validated ${lessonKeys.length} lessons and ${Object.values(context.questionBank).flat().length} total questions.`);
}
