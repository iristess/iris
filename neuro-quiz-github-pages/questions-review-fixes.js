// Scientific and MCQ-quality corrections identified in the July 2026 review.
(function () {
  const revise = function (lessonKey, id, he, en) {
    const item = questionBank[lessonKey].find(function (question) { return question.id === id; });
    if (!item) return;
    Object.assign(item, he, { correctAnswer: 0 });
    item.i18n = Object.assign({}, item.i18n, {
      en: Object.assign({}, item.i18n && item.i18n.en, en)
    });
  };

  revise('lesson1', 19, {
    question: 'מה DTI מעריך?',
    options: [
      'את הכיווניות של דיפוזיית מים ברקמה, שממנה אפשר להסיק היבטים של ארגון החומר הלבן',
      'את מספר האקסונים המדויק בכל מסילה',
      'את הירי החשמלי של נוירון יחיד',
      'את זרימת הדם המקומית המשמשת ליצירת אות BOLD'
    ],
    explanation: 'DTI אינו רואה סיבים ישירות; הוא מעריך תכונות כיווניות של דיפוזיית מים ומשתמש בהן להסקה על ארגון חומר לבן.'
  }, {
    question: 'What does DTI estimate?',
    options: [
      'Directional properties of water diffusion in tissue, used to infer aspects of white-matter organization',
      'The exact number of axons in each tract',
      'Electrical firing of a single neuron',
      'Local blood flow used to generate the BOLD signal'
    ],
    explanation: 'DTI does not directly image fibers; it estimates directional water-diffusion properties that can inform inferences about white-matter organization.'
  });

  revise('lesson1', 21, {
    question: 'איזה סוג נוירון הוא הנפוץ ביותר מבין הנוירונים בקורטקס?',
    options: ['נוירון פירמידלי', 'נוירון סטלטי', 'תא גרנולה', 'תא פורקינייה'],
    explanation: 'לפי הסיכום, נוירונים פירמידליים מהווים חלק גדול מהנוירונים הקורטיקליים. הניסוח מתייחס לנוירונים ולא לכלל תאי הקורטקס, הכוללים גם גליה.'
  }, {
    question: 'Which neuron type is the most common among cortical neurons?',
    options: ['Pyramidal neuron', 'Stellate neuron', 'Granule cell', 'Purkinje cell'],
    explanation: 'According to the summary, pyramidal neurons make up a large proportion of cortical neurons. This claim concerns neurons, not all cortical cells, which also include glia.'
  });

  revise('lesson4', 18, {
    question: 'איזה דפוס תואר אצל SM לאחר פגיעה דו־צדדית באמיגדלה?',
    options: [
      'קושי בולט בזיהוי פחד בהבעות פנים ותגובה מופחתת לאיומים חיצוניים רבים, בלי להסיק שאין כלל תגובות פחד',
      'היעדר מוחלט של פחד ופאניקה בכל מצב אפשרי',
      'פגיעה מבודדת בזיכרון עבודה ללא שינוי בעיבוד איום',
      'זיהוי פחד משופר לצד תגובת יתר לכל איום חיצוני'
    ],
    explanation: 'SM הראתה פגיעה בזיהוי הבעות פחד ותגובה מופחתת לאיומים חיצוניים רבים, אך תגובות פחד או פאניקה יכולות להופיע בתנאים פנימיים מסוימים; האמיגדלה אינה המסלול היחיד לכל צורות הפחד.'
  }, {
    question: 'Which pattern was described in SM after bilateral amygdala damage?',
    options: [
      'Marked difficulty recognizing fearful expressions and reduced responses to many external threats, without implying absence of every fear response',
      'Complete absence of fear and panic in every possible condition',
      'An isolated working-memory deficit with unchanged threat processing',
      'Improved fear recognition with exaggerated responses to every external threat'
    ],
    explanation: 'SM showed impaired recognition of fearful expressions and reduced responses to many external threats, but fear or panic can still occur under some internal-threat conditions; the amygdala is not the only route for every form of fear.'
  });

  revise('lesson5', 11, {
    question: 'כיצד נכון לתאר נוירוגנזה בהיפוקמפוס הבוגר?',
    options: [
      'ה־dentate gyrus הוא אתר מבוסס במודלים של בעלי חיים, אך היקף הנוירוגנזה בבני אדם בוגרים עדיין שנוי במחלוקת',
      'היא מתרחשת בוודאות ובאותה עוצמה בכל אדם בוגר',
      'היא מתרחשת בעיקר בקורפוס קלוסום ולא בהיפוקמפוס',
      'היא נפסקת בכל היונקים מיד לאחר הלידה'
    ],
    explanation: 'נוירוגנזה ב־dentate gyrus מבוססת היטב במודלים של בעלי חיים. בבני אדם בוגרים קיימת מחלוקת מדעית לגבי היקפה והתמדתה.'
  }, {
    question: 'How should adult hippocampal neurogenesis be described?',
    options: [
      'The dentate gyrus is an established site in animal models, while the extent of neurogenesis in adult humans remains debated',
      'It definitely occurs at the same rate in every adult human',
      'It occurs mainly in the corpus callosum rather than the hippocampus',
      'It stops in every mammal immediately after birth'
    ],
    explanation: 'Dentate-gyrus neurogenesis is well established in animal models. Its extent and persistence in adult humans remain scientifically debated.'
  });

  revise('lesson8', 14, {
    question: 'איזה דפוס נקשר במחקרים ל־PTSD ולסטרס כרוני?',
    options: [
      'שינויים במבנה או בתפקוד של היפוקמפוס, PFC ואמיגדלה, בלי להסיק מכך לבדו מהו כיוון הסיבתיות',
      'נזק אחיד והכרחי להיפוקמפוס בכל אדם שחווה טראומה',
      'פעילות אמיגדלה נמוכה תמיד לצד PFC פעיל יותר',
      'שינוי מבודד בקורטקס הראייתי ללא מעורבות רשתות ויסות'
    ],
    explanation: 'PTSD וסטרס כרוני נקשרו לשינויים היפוקמפליים, פרה־פרונטליים ואמיגדלריים, אך מחקר מתאמי לבדו אינו קובע אם השינוי הוא גורם פגיעות, תוצאה או שילוב של השניים.'
  }, {
    question: 'Which pattern has research associated with PTSD and chronic stress?',
    options: [
      'Altered hippocampal, prefrontal, and amygdala structure or function, without inferring causal direction from association alone',
      'Uniform and inevitable hippocampal damage in every person exposed to trauma',
      'Always-reduced amygdala activity with a more active PFC',
      'An isolated visual-cortex change without involvement of regulatory networks'
    ],
    explanation: 'PTSD and chronic stress have been associated with hippocampal, prefrontal, and amygdala alterations, but correlational findings alone cannot determine whether these are vulnerability factors, consequences, or both.'
  });

  revise('lesson8', 29, {
    question: 'איזה מנגנון עשוי לתרום למעגל שמתחזק תסמיני PTSD?',
    options: [
      'קונטקסט היפוקמפלי ובקרה פרה־פרונטלית חלשים יחסית יכולים לאפשר לתגובת אמיגדלה להישאר דומיננטית; זהו מודל אפשרי ולא כיוון סיבתי מוכח בכל אדם',
      'הטראומה בהכרח הורסת את ההיפוקמפוס ואת ה־PFC אצל כל אדם',
      'פעילות אמיגדלה נמוכה גורמת תמיד להכללת פחד',
      'שובע דרך ה־VMH מוחק זיכרונות טראומטיים'
    ],
    explanation: 'מודלים של PTSD מדגישים חוסר איזון בין הקשר היפוקמפלי, ויסות קדמי ותגובת איום אמיגדלרית. המיפוי אינו חד־חד ערכי וכיוון הסיבתיות עשוי להשתנות.'
  }, {
    question: 'Which mechanism may contribute to a loop that maintains PTSD symptoms?',
    options: [
      'Relatively weak hippocampal context and prefrontal regulation may allow amygdala threat responses to remain dominant; this is a possible model, not a proven causal sequence in every person',
      'Trauma inevitably destroys the hippocampus and PFC in every person',
      'Low amygdala activity always causes fear generalization',
      'VMH-mediated satiety erases traumatic memories'
    ],
    explanation: 'PTSD models emphasize imbalance among hippocampal context, prefrontal regulation, and amygdala threat responses. The mapping is not one-to-one, and causal direction may vary.'
  });

  revise('lesson10', 4, {
    question: 'היכן נמצא ה־Fusiform Face Area?',
    options: [
      'בקורטקס הפוסיפורמי הוונטרלי, בחלק התחתון של האונה הטמפורלית',
      'לאורך ה־STS בחלק העליון של האונה הטמפורלית',
      'ב־TPJ במפגש הטמפורו־פריאטלי',
      'ב־mPFC על המשטח המדיאלי של האונה הפרונטלית'
    ],
    explanation: 'ה־FFA נמצא בג׳יירוס הפוסיפורמי בקורטקס הטמפורלי הוונטרלי ומשתתף בעיבוד זהות פנים.'
  }, {
    question: 'Where is the Fusiform Face Area located?',
    options: [
      'In ventral fusiform cortex on the inferior surface of the temporal lobe',
      'Along the STS in superior temporal cortex',
      'At the TPJ near the temporoparietal junction',
      'In the mPFC on the medial frontal surface'
    ],
    explanation: 'The FFA lies in the fusiform gyrus of ventral temporal cortex and contributes to facial-identity processing.'
  });

  revise('lesson11', 25, {
    question: 'איזה שילוב נקשר ליותר נוירוגנזה היפוקמפלית במודלים של בעלי חיים?',
    options: [
      'פעילות גופנית, סביבה עשירה ואינטראקציה חברתית',
      'סטרס כרוני, חסך שינה ובידוד',
      'חוסר תנועה וסביבה דלה בגירויים',
      'פגיעה מתמשכת ב־dentate gyrus'
    ],
    explanation: 'במודלים של בעלי חיים, פעילות וסביבה עשירה נקשרו ל־BDNF ולנוירוגנזה היפוקמפלית מוגברת. אין להציג זאת כהוכחה ישירה לאותה השפעה בבני אדם בוגרים.'
  }, {
    question: 'Which combination has been associated with greater hippocampal neurogenesis in animal models?',
    options: [
      'Physical activity, enriched environments, and social interaction',
      'Chronic stress, sleep deprivation, and isolation',
      'Inactivity and a stimulus-poor environment',
      'Ongoing damage to the dentate gyrus'
    ],
    explanation: 'In animal models, activity and enriched environments have been linked to BDNF and increased hippocampal neurogenesis. This should not be presented as direct proof of the same effect in adult humans.'
  });

  revise('lesson11', 26, {
    question: 'כיצד סטרס כרוני משפיע על נוירוגנזה במודלים של בעלי חיים?',
    options: [
      'הוא נקשר להפחתת נוירוגנזה, במיוחד ב־dentate gyrus',
      'הוא מגדיל בהכרח נוירוגנזה בכל אזורי הקורטקס',
      'הוא הופך GABA לדופמין',
      'הוא סוגר מחדש את הצינור העצבי'
    ],
    explanation: 'במודלים של בעלי חיים, סטרס כרוני נקשר להפחתת נוירוגנזה היפוקמפלית. לגבי בני אדם בוגרים יש לנסח בזהירות בשל המחלוקת על היקף התהליך.'
  }, {
    question: 'How does chronic stress affect neurogenesis in animal models?',
    options: [
      'It has been associated with reduced neurogenesis, especially in the dentate gyrus',
      'It inevitably increases neurogenesis throughout cortex',
      'It converts GABA into dopamine',
      'It closes the neural tube again'
    ],
    explanation: 'In animal models, chronic stress has been associated with reduced hippocampal neurogenesis. Claims about adult humans require caution because the extent of the process remains debated.'
  });
})();
