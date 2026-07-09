// Final pedagogical quality pass. This file is loaded after the Hebrew banks,
// English translations, advanced distractors, and clinical additions. It is the
// finalization layer for answer indices, selected scientific wording, and the
// weakest Lesson 3 items.
(function () {
  Object.values(questionBank).forEach(function (questions) {
    questions.forEach(function (question) {
      if (question.i18n && question.i18n.en && Number.isInteger(question.correctAnswer) &&
          !Number.isInteger(question.i18n.en.correctAnswer)) {
        question.i18n.en.correctAnswer = question.correctAnswer;
      }
    });
  });

  Object.values(questionBank).forEach(function (questions) {
    questions.forEach(function (question) {
      if (question.correctAnswer !== 0) {
        const correct = question.options.splice(question.correctAnswer, 1)[0];
        question.options.unshift(correct);
        question.correctAnswer = 0;
      }
    });
  });

  const revisions = {
    1: {
      he: ['מדוע הבשלה מאוחרת של ה־PFC חשובה להבנת התנהגות בגיל ההתבגרות?',
        'מערכות בקרה ותכנון עדיין מתפתחות כאשר מערכות רגש ותגמול כבר פעילות מאוד',
        'ה־PFC כבר בשל לחלוטין, ולכן קושי בוויסות נובע רק מחוסר ידע',
        'הבשלה מאוחרת פירושה שה־PFC אינו פעיל כלל לפני שנות העשרים',
        'העיכוב נוגע רק לקורטקס המוטורי ואינו משפיע על החלטות'],
      en: ['Why is the late maturation of the PFC relevant to adolescent behavior?',
        'Control and planning systems are still developing while emotion and reward systems are already highly active',
        'The PFC is already fully mature, so regulation difficulties can only reflect lack of knowledge',
        'Late maturation means the PFC is entirely inactive before the twenties',
        'The delay concerns only motor cortex and therefore cannot affect decisions']
    },
    2: {
      he: ['איזה דפוס יכוון במיוחד לפגיעה פרה־פרונטלית ולא לפגיעה ביכולת בסיסית?',
        'שפה ו־IQ שמורים לצד כישלון בתכנון, עיכוב תגובה וקבלת החלטות בחיי היום־יום',
        'אובדן שדה ראייה עם תכנון וקבלת החלטות תקינים',
        'חולשת שרירים חד־צדדית ללא שינוי בהתנהגות',
        'פגיעה בזיהוי צלילים פשוטים בלבד'],
      en: ['Which pattern points most specifically to prefrontal damage rather than loss of a basic ability?',
        'Preserved language and IQ with failures of planning, response inhibition, and everyday decision-making',
        'Visual-field loss with intact planning and decision-making',
        'Unilateral muscle weakness without behavioral change',
        'An isolated deficit in detecting simple sounds']
    },
    3: {
      he: ['האדריכל יודע אילו מצרכים דרושים, אך חוזר מהחנות בלי חלקם ואינו מצליח לסדר את שלבי הקנייה. מהו ההסבר המדויק ביותר?',
        'הידע הסמנטי שמור, אך ה־dlPFC אינו מארגן אותו לתכנית פעולה רציפה',
        'ה־vmPFC אינו מעניק ערך רגשי למצרכים ולכן שמותיהם נשכחים',
        'ה־OFC אינו מעבד את צבעי האריזות ולכן הבחירה נכשלת',
        'ההיפוקמפוס אינו מזהה עוד את החנות המוכרת'],
      en: ['An architect knows which groceries are needed but returns without some of them and cannot organize the shopping sequence. What is the best explanation?',
        'Semantic knowledge is intact, but the dlPFC fails to organize it into a sustained action plan',
        'The vmPFC gives the items no emotional value, causing their names to be forgotten',
        'The OFC cannot process package colors, so selection fails',
        'The hippocampus can no longer recognize the familiar store']
    },
    4: {
      he: ['רואה חשבון מסביר היטב את הסיכונים בעסקה, אך שוב בוחר בה ונקלע להפסדים. איזה ניתוק מודגם?',
        'פער בין ידע מפורש על התוצאות לבין שילוב ערך רגשי־גופני בהחלטה באמצעות vmPFC',
        'פער בין זיהוי חזותי לבין הפקת דיבור בגלל פגיעה במסלול השפה',
        'כשל בהחזקת מספר יחיד בזיכרון עבודה בגלל פגיעה ב־dlPFC בלבד',
        'אובדן למידה פרוצדורלית עקב פגיעה בצרבלום'],
      en: ['An accountant explains a deal’s risks accurately but repeatedly chooses it and incurs losses. Which disconnection is illustrated?',
        'A gap between explicit outcome knowledge and vmPFC-mediated integration of emotional and bodily value into choice',
        'A gap between visual recognition and speech production due to language-pathway damage',
        'Failure to hold one number in working memory due only to dlPFC damage',
        'Loss of procedural learning caused by cerebellar damage']
    },
    5: {
      he: ['איזו חלוקה מתאימה ביותר לשלושת מוקדי ה־PFC שנלמדו?',
        'dlPFC לבקרה קוגניטיבית, vmPFC לשילוב ערך אישי־רגשי, ו־OFC לעדכון ערך לפי ההקשר הנוכחי',
        'dlPFC לזיכרון אפיזודי, vmPFC לראייה ראשונית, ו־OFC לשליטה מוטורית',
        'dlPFC לעוררות אוטונומית, vmPFC לשמיעה, ו־OFC לקידוד מיקום',
        'שלושת האזורים ממלאים אותו תפקיד בדיוק ונבדלים רק בשם'],
      en: ['Which division best matches the three PFC regions studied?',
        'dlPFC for cognitive control, vmPFC for personal-emotional value integration, and OFC for context-sensitive value updating',
        'dlPFC for episodic memory, vmPFC for primary vision, and OFC for motor control',
        'dlPFC for autonomic arousal, vmPFC for hearing, and OFC for spatial coding',
        'All three regions perform exactly the same function and differ only in name']
    },
    6: {
      he: ['מדוע קשה לקבוע גבול חד בין vmPFC ל־OFC?',
        'הם סמוכים וחופפים בחלק מן ההגדרות, והחלוקה משתנה לפי אטלס ושאלת המחקר',
        'שניהם שמות חלופיים ל־dlPFC ולכן אין ביניהם הבדל אנטומי',
        'אחד נמצא בקורטקס והשני כולו בתלמוס',
        'אפשר להבחין ביניהם רק לפי ההמיספרה שבה הם נמצאים'],
      en: ['Why is it difficult to draw a sharp boundary between vmPFC and OFC?',
        'They are adjacent and partly overlap across definitions, and the division varies by atlas and research question',
        'Both are alternative names for dlPFC, so there is no anatomical distinction',
        'One is cortical whereas the other lies entirely in the thalamus',
        'They can be distinguished only by which hemisphere contains them']
    },
    7: {
      he: ['איזה קשר מבנה–תפקוד מאפיין יותר PFC לטרלי קדמי?',
        'מבנה גרנולרי ושש־שכבתי יחסית תומך בקישוריות קורטיקלית מורכבת ובבקרה על מידע חיצוני',
        'מבנה אגרנולרי לחלוטין מצביע על תפקיד מוטורי ראשוני',
        'היעדר שכבה 4 מראה שהאזור אינו מקבל קלט',
        'שלוש שכבות בלבד מעידות שזהו allocortex של זיכרון'],
      en: ['Which structure–function relation better characterizes anterior lateral PFC?',
        'A relatively granular six-layered organization supports complex cortical connectivity and control of external information',
        'A completely agranular organization identifies it as primary motor cortex',
        'Absence of layer IV would show that the region receives no input',
        'Only three layers would identify it as memory-related allocortex']
    },
    8: {
      he: ['איזה מאפיין מסביר מדוע PFC מדיאלי ואורביטלי משולבים במיוחד בעיבוד רגשי?',
        'הארגון הדיסגרנולרי והקשרים עם מבנים לימביים מאפשרים שילוב אותות פנימיים, אוטונומיים ורגשיים',
        'שכבה 4 מפותחת במיוחד הופכת אותם לקורטקס סנסורי ראשוני',
        'הם מבודדים מן האמיגדלה ומההיפותלמוס ולכן מעבדים רגש באופן עצמאי',
        'הם מקבלים קלט בלעדי מחוט השדרה ושולטים רק ברפלקסים'],
      en: ['Which feature helps explain why medial and orbital PFC are strongly involved in emotional processing?',
        'Dysgranular organization and limbic connections allow integration of internal, autonomic, and emotional signals',
        'An exceptionally developed layer IV makes them primary sensory cortex',
        'They are isolated from the amygdala and hypothalamus and therefore process emotion independently',
        'They receive input only from the spinal cord and control reflexes alone']
    },
    9: {
      he: ['מטלה מפעילה בעיקר את אזורי ברודמן 9 ו־46. איזו דרישה של המטלה סבירה ביותר?',
        'החזקת כלל בזיכרון עבודה ושינוי ההתנהגות כאשר הכלל מתחלף',
        'זיהוי קצוות וכיוון בקורטקס הראייתי הראשוני',
        'מיפוי תחושה מן הפנים בגרעין VPM',
        'הפעלת שרירי היד דרך הקורטקס המוטורי הראשוני'],
      en: ['A task primarily activates Brodmann areas 9 and 46. Which task demand is most likely?',
        'Maintaining a rule in working memory and changing behavior when the rule shifts',
        'Detecting edges and orientation in primary visual cortex',
        'Relaying facial sensation through the VPM',
        'Activating hand muscles through primary motor cortex']
    },
    10: {
      he: ['מדוע קישוריות dlPFC עם קורטקס פריאטלי ועם הקאודט מתאימה לתפקידו?',
        'היא מחברת ייצוגי קשב ומידע עם בחירת פעולה ועדכון כללים',
        'היא מאפשרת ל־dlPFC לייצר הורמונים ולהפרישם לדם',
        'היא הופכת אותו לתחנת ממסר סנסורית כמו התלמוס',
        'היא מספקת לו קלט ראייתי ישיר מן הרשתית'],
      en: ['Why do dlPFC connections with parietal cortex and caudate fit its function?',
        'They link attentional representations and information with action selection and rule updating',
        'They allow the dlPFC to synthesize hormones and release them into blood',
        'They make it a sensory relay station like the thalamus',
        'They provide direct visual input from the retina']
    },
    11: {
      he: ['הגירוי נעלם, אך הנבדקת חייבת להשתמש בו כעבור כמה שניות. איזו פעילות חיונית במיוחד?',
        'פעילות מתמשכת ב־dlPFC המחזיקה ייצוג רלוונטי בזיכרון עבודה',
        'תגובה רגעית ב־OFC שמעדכנת את ערך הפרס בלבד',
        'דיכוי האמיגדלה בידי vmPFC לצורך הכחדת פחד',
        'קידוד אפיזודי ארוך־טווח בהיפוקמפוס בלבד'],
      en: ['A stimulus disappears, but the participant must use it several seconds later. Which activity is especially important?',
        'Sustained dlPFC activity that maintains a relevant working-memory representation',
        'A brief OFC response that only updates reward value',
        'vmPFC inhibition of the amygdala for fear extinction',
        'Long-term episodic encoding in the hippocampus alone']
    },
    12: {
      he: ['מה יבדיל cognitive control מידע או יכולת בסיסית?',
        'התאמת כלל הפעולה למטרה, עיכוב תגובה מתחרה ומעבר גמיש כאשר התנאים משתנים',
        'קליטת גירוי חושי בעוצמה מספקת כדי לזהות שהוא קיים',
        'ביצוע רפלקס קבוע ללא תלות במטרה או בהקשר',
        'אחסון קבוע של עובדה בזיכרון סמנטי'],
      en: ['What distinguishes cognitive control from basic knowledge or ability?',
        'Adapting the action rule to a goal, inhibiting a competing response, and shifting flexibly when conditions change',
        'Detecting that a sufficiently intense sensory stimulus is present',
        'Executing a fixed reflex regardless of goal or context',
        'Permanently storing a fact in semantic memory']
    },
    13: {
      he: ['מטלה דורשת תחילה לבחור תגובה לפי צבע, ובהמשך לשלב את כלל הצבע עם מטרה עתידית. איזה דפוס צפוי לאורך dlPFC?',
        'אזורים אחוריים יתמכו בכלל הקונקרטי ואזורים קדמיים יותר ישלבו את המטרה המופשטת',
        'אזורים קדמיים יטפלו רק בצבע ואזורים אחוריים רק ברגש',
        'כל ה־dlPFC יגיב באופן זהה משום שאין בו היררכיה',
        'העיבוד יעבור בהכרח ל־V1 כאשר הכלל נעשה מופשט'],
      en: ['A task first requires choosing by color and later combining that rule with a future goal. What pattern is expected along the dlPFC?',
        'Posterior regions support the concrete rule, while more anterior regions integrate the abstract goal',
        'Anterior regions process only color, while posterior regions process only emotion',
        'The entire dlPFC responds identically because it has no hierarchy',
        'Processing must shift to V1 as the rule becomes more abstract']
    },
    14: {
      he: ['לאחר הפרעה קצרה מרקוס זוכר את מטרת המטלה, אך מתחיל שוב מהתחלה ואינו חוזר לשלב שבו הפסיק. מה נפגע?',
        'שמירת מצב המטלה וארגון רצף הפעולות ב־dlPFC',
        'זיכרון סמנטי למשמעות המילים',
        'קידוד פחד באמיגדלה',
        'הערכת נעימות מיידית ב־OFC'],
      en: ['After a brief interruption, Marcus remembers the task goal but restarts and cannot resume at the previous step. What is impaired?',
        'Maintaining task state and organizing action sequences in the dlPFC',
        'Semantic memory for word meanings',
        'Fear encoding in the amygdala',
        'Immediate pleasantness valuation in the OFC']
    },
    15: {
      he: ['נבדקת ממשיכה למיין לפי צבע אף שהמשוב מראה שהכלל השתנה לצורה. איזה כשל מודדת משימת ויסקונסין?',
        'פרסברציה: קושי לעדכן כלל ולעבור לסט חדש על סמך משוב',
        'אמנזיה אנטרוגרדית: חוסר יכולת ליצור כל זיכרון חדש',
        'אגנוזיה חזותית: חוסר יכולת לזהות את הקלפים',
        'אנהדוניה: חוסר תגובת תגמול לתשובה נכונה'],
      en: ['A participant keeps sorting by color although feedback shows that the rule changed to shape. What failure does the Wisconsin task measure?',
        'Perseveration: difficulty updating a rule and shifting to a new set from feedback',
        'Anterograde amnesia: inability to form any new memory',
        'Visual agnosia: inability to recognize the cards',
        'Anhedonia: absence of reward response to a correct answer']
    },
    18: {
      he: ['איזה ממצא ממחיש בצורה הטובה ביותר פגיעה ב־vmPFC?',
        'המטופל מסביר את כללי ההחלטה אך אינו משלב סיכון, רגש ותוצאה עתידית בבחירה בפועל',
        'המטופל אינו מצליח להחזיק ספרה במשך שתי שניות אך החלטותיו החברתיות תקינות',
        'המטופל אינו מזהה קווים בשדה הראייה הנגדי',
        'המטופל מתקשה להניע יד אך שיקול הדעת שלו שמור'],
      en: ['Which finding best illustrates vmPFC damage?',
        'The patient can explain decision rules but fails to integrate risk, emotion, and future outcome into actual choices',
        'The patient cannot hold a digit for two seconds but makes intact social decisions',
        'The patient cannot detect lines in the opposite visual field',
        'The patient has difficulty moving one hand but preserved judgment']
    },
    20: {
      he: ['איזו תוצאה צפויה מן הקישוריות הרחבה של vmPFC עם אמיגדלה, היפוקמפוס, סטריאטום והיפותלמוס?',
        'שילוב הקשר וזיכרון עם ערך, תגובה גופנית והשלכות עתידיות של בחירה',
        'עיבוד צבעים לפני הגעתם לקורטקס הראייתי',
        'שליטה ישירה בכל תנועה רצונית של הגפיים',
        'יצירת זיכרון עבודה ללא כל השפעה של רגש'],
      en: ['What follows from broad vmPFC connectivity with amygdala, hippocampus, striatum, and hypothalamus?',
        'Integration of context and memory with value, bodily response, and future consequences of a choice',
        'Processing color before signals reach visual cortex',
        'Direct control of every voluntary limb movement',
        'Creating working memory without any emotional influence']
    },
    21: {
      he: ['לפי השערת הסמן הסומטי, כיצד תחושת אי־נוחות יכולה לשפר החלטה?',
        'היא מסכמת ניסיון קודם כאות גופני שמטה את הבחירה עוד לפני חישוב מילולי מלא',
        'היא מוחקת את הזיכרון של האפשרות המסוכנת ולכן מונעת בחירה בה',
        'היא מחליפה לחלוטין חשיבה מודעת וכל החלטה רגשית נעשית נכונה',
        'היא נוצרת ב־V1 ומספקת מידע חזותי נוסף על הסיכון'],
      en: ['According to the somatic-marker hypothesis, how can discomfort improve a decision?',
        'It summarizes prior experience as a bodily signal that biases choice before full verbal calculation',
        'It erases memory of the risky option and therefore prevents its selection',
        'It completely replaces conscious reasoning and makes every emotional choice correct',
        'It is generated in V1 and adds visual information about risk']
    },
    22: {
      he: ['לאחר הכחדה, צליל שנקשר בעבר לאיום כבר אינו מעורר פחד חזק. איזה מנגנון מתאים?',
        'vmPFC מפעיל בקרה מעכבת על תגובת האמיגדלה תוך שימוש בהקשר שנלמד',
        'האמיגדלה נמחקת ולכן אינה יכולה להגיב שוב בשום הקשר',
        'OFC מחזיק את הצליל בזיכרון עבודה עד שהפחד נעלם',
        'dlPFC משנה את תדר הצליל ומונע את קליטתו'],
      en: ['After extinction, a tone formerly paired with threat no longer evokes strong fear. Which mechanism fits?',
        'The vmPFC exerts inhibitory control over the amygdala response using learned context',
        'The amygdala is erased and can never respond in any context again',
        'The OFC holds the tone in working memory until fear disappears',
        'The dlPFC changes the tone frequency so it cannot be detected']
    },
    23: {
      he: ['איזו משימה צפויה לערב vmPFC כחלק מן ה־DMN יותר מאשר dlPFC לטרלי?',
        'הערכת המשמעות האישית של זיכרון אוטוביוגרפי והשלכותיו על העצמי',
        'החלפה מהירה בין שני כללי מיון חיצוניים',
        'החזקת רצף ספרות תוך התעלמות ממסיחים',
        'תכנון סדר פעולות חדש תחת מגבלת זמן'],
      en: ['Which task should recruit vmPFC as part of the DMN more than lateral dlPFC?',
        'Evaluating the personal meaning of an autobiographical memory and its implications for the self',
        'Rapidly switching between two external sorting rules',
        'Maintaining a digit sequence while ignoring distractors',
        'Planning a novel action sequence under time pressure']
    },
    24: {
      he: ['במשימת איווה, מה מבדיל פגיעה ב־vmPFC מחוסר הבנה של המטלה?',
        'המטופל יכול לתאר שהחפיסות המסוכנות מפסידות, אך ממשיך לבחור בהן ואינו מפתח אות גופני מקדים',
        'המטופל אינו מבין את הוראות השפה ולכן בוחר באקראי מתחילת המטלה',
        'המטופל מזהה את החפיסות הטובות ובוחר בהן בעקביות מהר מהרגיל',
        'המטופל אינו מסוגל לראות את הקלפים ולכן אינו יכול לבצע את המטלה'],
      en: ['In the Iowa Gambling Task, what distinguishes vmPFC damage from failure to understand the task?',
        'The patient can state that risky decks lose money but keeps choosing them and fails to develop an anticipatory bodily signal',
        'The patient cannot understand the verbal instructions and therefore chooses randomly from the start',
        'The patient identifies advantageous decks and chooses them consistently faster than normal',
        'The patient cannot see the cards and therefore cannot perform the task']
    },
    25: {
      he: ['איזה שילוב אצל פיניאס גייג׳ תרם להבנה חדשה של תפקוד פרונטלי?',
        'יכולות בסיסיות רבות נשמרו, אך האישיות, העכבה וההתנהגות החברתית השתנו',
        'האישיות נשמרה לחלוטין, אך הראייה והשמיעה נעלמו',
        'רק הזיכרון האפיזודי נפגע וכל שאר התפקודים נשמרו',
        'הפגיעה גרמה לשיתוק בלבד ללא שינוי בשיקול דעת'],
      en: ['Which combination in Phineas Gage contributed to a new understanding of frontal function?',
        'Many basic abilities were preserved, but personality, inhibition, and social behavior changed',
        'Personality was entirely preserved, while vision and hearing disappeared',
        'Only episodic memory was impaired and every other function was preserved',
        'The injury caused paralysis alone with no change in judgment']
    },
    26: {
      he: ['מה הופך “סוציופתיה נרכשת” לאחר פגיעת vmPFC לשונה מחוסר ידע מוסרי?',
        'המטופל יודע לנמק מה ראוי, אך האותות הרגשיים אינם מכוונים את התנהגותו בזמן אמת',
        'המטופל אינו יודע את משמעותן של מילים מוסריות אך מתנהג באופן מותאם',
        'המטופל מאבד כל זיכרון של אנשים ולכן אינו יכול לזהות כללים',
        'המטופל מבין ומיישם כללים אך אינו מסוגל לבצע תנועה'],
      en: ['What makes “acquired sociopathy” after vmPFC damage different from lack of moral knowledge?',
        'The patient can explain what is appropriate, but emotional signals fail to guide behavior in real time',
        'The patient does not know the meaning of moral words but behaves appropriately',
        'The patient loses all memory of people and therefore cannot recognize rules',
        'The patient understands and applies rules but cannot execute movement']
    },
    27: {
      he: ['מסעדה שהייתה אהובה גורמת כעת לבחילה לאחר הרעלה. איזה תפקיד של OFC נדרש לשינוי הבחירה?',
        'עדכון מהיר של הערך הנוכחי של הגירוי כאשר תוצאותיו משתנות',
        'שמירת ערך חיובי קבוע גם לאחר שהתוצאה השתנתה',
        'קידוד המקום כזיכרון אפיזודי בלי שינוי בהעדפה',
        'עיכוב האמיגדלה כחלק מהכחדת פחד בלבד'],
      en: ['A formerly favorite restaurant now causes nausea after food poisoning. Which OFC function is needed to change the choice?',
        'Rapidly updating the stimulus’s current value when its consequences change',
        'Keeping its positive value fixed even after the outcome changes',
        'Encoding the place as an episodic memory without changing preference',
        'Inhibiting the amygdala only as part of fear extinction']
    },
    28: {
      he: ['שתי אפשרויות נעימות באותה מידה כרגע, אך רק אחת מתאימה לערכים ולמטרות ארוכות הטווח של האדם. איזו הבחנה מתאימה?',
        'OFC משווה ערך מיידי; vmPFC משלב אותו במשמעות אישית ובהשלכות על העצמי',
        'vmPFC מחשב רק עוצמת גירוי; OFC יוצר את כל הזיכרונות האוטוביוגרפיים',
        'OFC ו־vmPFC פועלים רק כאשר אין רגש ולכן אינם רלוונטיים',
        'OFC קובע תנועה ו־vmPFC מעבד ראייה, ללא קשר לערך'],
      en: ['Two options are equally pleasant now, but only one fits the person’s long-term goals and values. Which distinction fits?',
        'OFC compares immediate value; vmPFC integrates it with personal meaning and implications for the self',
        'vmPFC computes only stimulus intensity; OFC creates all autobiographical memories',
        'OFC and vmPFC operate only without emotion and are therefore irrelevant',
        'OFC determines movement and vmPFC processes vision, unrelated to value']
    },
    29: {
      he: ['במטלת סטרופ, שתי תגובות מתחרות והנבדקת צריכה להשקיע מאמץ כדי לבחור בנכונה. מהו תפקיד dACC?',
        'לזהות קונפליקט ועלות מאמץ ולאותת לרשתות הבקרה להגביר שליטה',
        'לאחסן את צבע המילה כזיכרון אפיזודי לטווח ארוך',
        'לעדכן את ערך התגמול של כל צבע כמו OFC',
        'לעכב את האמיגדלה כדי לבצע הכחדת פחד'],
      en: ['In a Stroop task, two responses compete and effort is needed to choose correctly. What is the dACC role?',
        'Detecting conflict and effort cost and signaling control networks to increase regulation',
        'Storing the word color as a long-term episodic memory',
        'Updating each color’s reward value like the OFC',
        'Inhibiting the amygdala to perform fear extinction']
    },
    30: {
      he: ['מדוע sgACC הוא יעד אפשרי במחקר ובטיפול בדיכאון עמיד?',
        'זהו צומת רגשי־לימבי המחובר למערכות מצב רוח, ויסות אוטונומי ו־vmPFC',
        'זהו קורטקס ראייתי ראשוני ולכן גירויו משפר תפיסה',
        'זהו גרעין מוטורי בבזאל גנגליה ולכן הוא שולט בתנועה בלבד',
        'זהו מסלול חומר לבן המחבר את שתי ההמיספרות'],
      en: ['Why is the sgACC a potential research and treatment target in resistant depression?',
        'It is an emotional-limbic hub connected with mood, autonomic regulation, and vmPFC systems',
        'It is primary visual cortex, so stimulating it improves perception',
        'It is a motor basal-ganglia nucleus and therefore controls movement alone',
        'It is a white-matter tract connecting the hemispheres']
    }
  };

  Object.entries(revisions).forEach(function ([id, revision]) {
    const question = questionBank.lesson3.find(function (item) { return item.id === Number(id); });
    if (!question) return;
    question.question = revision.he[0];
    question.options = revision.he.slice(1);
    question.correctAnswer = 0;
    question.i18n = Object.assign({}, question.i18n, {
      en: Object.assign({}, question.i18n && question.i18n.en, {
        question: revision.en[0],
        options: revision.en.slice(1),
        correctAnswer: 0
      })
    });
  });

  const revise = function (lessonKey, id, he, en) {
    const item = questionBank[lessonKey] && questionBank[lessonKey].find(function (question) { return question.id === id; });
    if (!item) return;
    Object.assign(item, he, { correctAnswer: 0 });
    item.i18n = Object.assign({}, item.i18n, {
      en: Object.assign({}, item.i18n && item.i18n.en, en, { correctAnswer: 0 })
    });
  };

  const keepHebrew = function (lessonKey, id) {
    const item = questionBank[lessonKey] && questionBank[lessonKey].find(function (question) { return question.id === id; });
    if (!item) return {};
    return {
      question: item.question,
      options: item.options,
      explanation: item.explanation
    };
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

  revise('lesson1', 22, {
    question: 'עם איזה נוירוטרנסמיטר עובדים בדרך כלל תאים פירמידליים?',
    options: ['גלוטמט', 'GABA', 'אצטילכולין', 'דופמין'],
    explanation: 'תאים פירמידליים הם בדרך כלל נוירונים אקסיטטוריים גלוטמטרגיים.'
  }, {
    question: 'Which neurotransmitter do pyramidal cells usually use?',
    options: ['Glutamate', 'GABA', 'Acetylcholine', 'Dopamine'],
    explanation: 'Pyramidal cells are usually excitatory glutamatergic neurons.'
  });

  revise('lesson1', 2, {
    question: questionBank.lesson1.find(function (question) { return question.id === 2; }).question,
    options: questionBank.lesson1.find(function (question) { return question.id === 2; }).options,
    explanation: questionBank.lesson1.find(function (question) { return question.id === 2; }).explanation
  }, {
    question: 'What emphasis did Wernicke add after Broca?',
    options: [
      'Connections between regions matter, not only a single focus',
      'Language function is localized only in one frontal speech-production center',
      'The whole cortex participates equally in language comprehension',
      'Brain function can be inferred from skull bumps'
    ],
    explanation: 'Wernicke emphasized that circuits and connections between regions influence function.'
  });

  revise('lesson1', 3, {
    question: questionBank.lesson1.find(function (question) { return question.id === 3; }).question,
    options: questionBank.lesson1.find(function (question) { return question.id === 3; }).options,
    explanation: questionBank.lesson1.find(function (question) { return question.id === 3; }).explanation
  }, {
    question: 'What characterizes the contemporary network approach?',
    options: [
      'A function is understood as a network of several interacting regions',
      'Each complex function is assigned to one isolated cortical point',
      'Connections are ignored if the local region is structurally intact',
      'All brain regions contribute equally to every task'
    ],
    explanation: 'The document emphasizes a middle path: different regions work together as a network that supports a function.'
  });

  revise('lesson1', 5, {
    question: questionBank.lesson1.find(function (question) { return question.id === 5; }).question,
    options: questionBank.lesson1.find(function (question) { return question.id === 5; }).options,
    explanation: questionBank.lesson1.find(function (question) { return question.id === 5; }).explanation
  }, {
    question: 'Which section is especially useful for lateral regions such as the basal ganglia?',
    options: ['Coronal','Sagittal','Axial','Oblique'],
    explanation: 'The document says that the coronal section is useful for lateral regions such as the basal ganglia.'
  });

  revise('lesson1', 6, {
    question: questionBank.lesson1.find(function (question) { return question.id === 6; }).question,
    options: questionBank.lesson1.find(function (question) { return question.id === 6; }).options,
    explanation: questionBank.lesson1.find(function (question) { return question.id === 6; }).explanation
  }, {
    question: 'What is true about the meaning of dorsal above the midbrain compared with in the brainstem?',
    options: [
      'Above the midbrain, dorsal points toward the skull; in the brainstem, it points posteriorly',
      'Dorsal always means anterior throughout the entire nervous system',
      'Dorsal always means inferior throughout the entire nervous system',
      'The term dorsal is used only for spinal cord anatomy'
    ],
    explanation: 'Because the neural axis bends, directional terms change meaning between the forebrain and the brainstem.'
  });

  revise('lesson1', 10, {
    question: questionBank.lesson1.find(function (question) { return question.id === 10; }).question,
    options: questionBank.lesson1.find(function (question) { return question.id === 10; }).options,
    explanation: questionBank.lesson1.find(function (question) { return question.id === 10; }).explanation
  }, {
    question: 'Which fissure is the prominent one between the two hemispheres?',
    options: ['The longitudinal fissure','The Sylvian fissure','The calcarine sulcus','The central sulcus'],
    explanation: 'The longitudinal fissure is the groove between the two hemispheres.'
  });

  revise('lesson1', 12, {
    question: questionBank.lesson1.find(function (question) { return question.id === 12; }).question,
    options: questionBank.lesson1.find(function (question) { return question.id === 12; }).options,
    explanation: questionBank.lesson1.find(function (question) { return question.id === 12; }).explanation
  }, {
    question: 'Which stain highlights cell bodies and cortical layers?',
    options: ['Nissl','Golgi','Weigert myelin stain','Tract tracer injection'],
    explanation: 'Nissl staining mainly stains cell bodies, so it is useful for identifying layers.'
  });

  revise('lesson1', 17, {
    question: 'מה עושה TMS בהקשר של לזיה זמנית?',
    options: [
      'משבש או מווסת זמנית פעילות באזור קורטיקלי ממוקד באמצעות שדה מגנטי',
      'מראה לאן מגיע סמן שהוזרק לנוירון או לאקסון',
      'מודד ישירות פוטנציאלי פעולה של נוירון יחיד',
      'ממפה דיפוזיית מים כדי להסיק על ארגון חומר לבן'
    ],
    explanation: 'TMS יכול להפריע או לווסת זמנית פעילות באזור קורטיקלי ממוקד, ולכן הוא משמש לבדיקת תרומה סיבתית של אזור לתפקוד בלי לתאר זאת כ״שיתוק״ של אזור.'
  }, {
    question: 'What does TMS do in the context of a temporary lesion?',
    options: [
      'Temporarily perturbs or modulates activity in a targeted cortical region using a magnetic field',
      'Shows where a tracer injected into a neuron or axon arrives',
      'Directly records action potentials from a single neuron',
      'Maps water diffusion to infer white-matter organization'
    ],
    explanation: 'TMS can transiently perturb or modulate activity in a targeted cortical region, allowing causal testing without implying that the region is fully shut down.'
  });

  revise('lesson1', 24, {
    question: 'היכן נמצאים תאי פורקינייה?',
    options: [
      'בקורטקס הצרבלרי',
      'בפורמציה ההיפוקמפלית',
      'בסטריאטום הדורסלי',
      'בקרן הקדמית של חוט השדרה'
    ],
    explanation: 'תאי פורקינייה הם תאי פלט גדולים של הקורטקס הצרבלרי.'
  }, {
    question: 'Where are Purkinje cells located?',
    options: [
      'In the cerebellar cortex',
      'In the hippocampal formation',
      'In the dorsal striatum',
      'In the anterior horn of the spinal cord'
    ],
    explanation: 'Purkinje cells are large output neurons of the cerebellar cortex.'
  });

  revise('lesson1', 26, {
    question: questionBank.lesson1.find(function (question) { return question.id === 26; }).question,
    options: questionBank.lesson1.find(function (question) { return question.id === 26; }).options,
    explanation: questionBank.lesson1.find(function (question) { return question.id === 26; }).explanation
  }, {
    question: 'Which cell produces myelin in the central nervous system?',
    options: ['Oligodendrocyte','Schwann cell','Astrocyte','Microglia'],
    explanation: 'Oligodendrocytes wrap CNS axons in myelin and speed conduction.'
  });

  revise('lesson2', 33, keepHebrew('lesson2', 33), {
    question: 'Where is layer IV located and why is it important?',
    options: [
      'Within the cortex, as an input layer that is especially prominent in sensory areas',
      'In the white matter below cortex, as the main commissural tract',
      'In the thalamus, as the output layer of relay nuclei',
      'In the cerebellar cortex, as the Purkinje-cell layer'
    ],
    explanation: 'Layer IV is a cortical input layer and is particularly prominent in primary sensory cortices.'
  });

  revise('lesson3', 19, keepHebrew('lesson3', 19), {
    question: 'Which Brodmann areas are commonly associated with ventromedial prefrontal cortex in the summary?',
    options: [
      '10, 14, 25, and part of 32',
      '9 and 46',
      '17 and 18',
      '41 and 42'
    ],
    explanation: 'The summary links vmPFC mainly with medial/orbital prefrontal areas such as 10, 14, 25, and part of 32.'
  });

  revise('lesson3', 31, keepHebrew('lesson3', 31), {
    question: 'A student cannot keep rules in mind while switching between two tasks. Which network is most relevant?',
    options: [
      'Prefrontal control networks, especially DLPFC and ACC',
      'Primary visual cortex and LGN',
      'Hippocampal place-cell networks',
      'Posterior pituitary and PVN'
    ],
    explanation: 'Flexible rule maintenance and conflict monitoring are strongly associated with prefrontal control networks, especially DLPFC and ACC.'
  });

  revise('lesson3', 32, keepHebrew('lesson3', 32), {
    question: 'A patient repeatedly chooses immediate rewards despite clear future losses. Which prefrontal region is most relevant?',
    options: [
      'OFC or vmPFC',
      'Primary visual cortex',
      'Suprachiasmatic nucleus',
      'VPL thalamus'
    ],
    explanation: 'OFC/vmPFC regions are central for value-based decision making and linking choices with future outcomes.'
  });

  revise('lesson3', 33, keepHebrew('lesson3', 33), {
    question: 'Where is the prefrontal cortex located?',
    options: [
      'In the anterior part of the frontal lobe',
      'In the medial temporal lobe',
      'At the occipital pole around V1',
      'In the dorsal brainstem'
    ],
    explanation: 'The prefrontal cortex occupies the anterior part of the frontal lobe.'
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

  revise('lesson5', 2, keepHebrew('lesson5', 2), {
    question: 'Which cortical regions are located near the hippocampus and feed information into it?',
    options: [
      'Parahippocampal, entorhinal, and perirhinal cortex',
      'Primary visual, primary auditory, and primary motor cortex',
      'OFC, DLPFC, and primary somatosensory cortex',
      'LGN, MGN, and VPL thalamic nuclei'
    ],
    explanation: 'The parahippocampal, entorhinal, and perirhinal cortices sit near the hippocampus and provide important input routes into the hippocampal formation.'
  });

  revise('lesson8', 4, {
    question: 'מהו סדר ההפרשות בציר HPA?',
    options: ['CRH → ACTH → קורטיזול','ACTH → CRH → קורטיזול','קורטיזול → CRH → ACTH','גרלין → לפטין → קורטיזול'],
    explanation: 'ההיפותלמוס מפריש CRH, אחריו ההיפופיזה הקדמית מפרישה ACTH, ובתגובה קליפת האדרנל מפרישה קורטיזול.'
  }, {
    question: 'What is the secretion sequence in the HPA axis?',
    options: ['CRH → ACTH → cortisol','ACTH → CRH → cortisol','Cortisol → CRH → ACTH','Ghrelin → leptin → cortisol'],
    explanation: 'The hypothalamus releases CRH, the anterior pituitary follows with ACTH, and the adrenal cortex then releases cortisol.'
  });

  revise('lesson8', 5, keepHebrew('lesson8', 5), {
    question: 'Which hypothalamic region is related to promoting eating?',
    options: ['LHA','VMH','Arcuate nucleus','PVN'],
    explanation: 'The lateral hypothalamic area is classically associated with food seeking and eating, but it is part of broader hunger–satiety circuitry rather than a single isolated hunger center.'
  });

  revise('lesson8', 6, keepHebrew('lesson8', 6), {
    question: 'Damage to the VMH is classically expected to cause what?',
    options: [
      'Overeating and obesity',
      'Reduced food seeking or aphagia',
      'A complete inability to sense stomach stretch',
      'Loss of circadian light entrainment'
    ],
    explanation: 'The VMH is classically associated with satiety-related regulation; damage may contribute to hyperphagia within a broader hypothalamic and hormonal network.'
  });

  revise('lesson8', 12, keepHebrew('lesson8', 12), {
    question: 'Why are there two stages in the hypothalamus–anterior pituitary axis?',
    options: [
      'To allow amplification, timing, and precise feedback control',
      'To let the posterior pituitary release oxytocin directly',
      'To bypass hypothalamic regulation of target glands',
      'To make target glands release hormones without feedback'
    ],
    explanation: 'The extra endocrine stage allows small hypothalamic signals to regulate pituitary output, target-gland secretion, and feedback loops.'
  });

  revise('lesson8', 13, keepHebrew('lesson8', 13), {
    question: 'What is the immediate role of cortisol during short-term stress?',
    options: [
      'To make energy available and temporarily suppress non-urgent processes',
      'To store glucose and lower cardiovascular readiness immediately',
      'To increase reproductive investment during acute threat',
      'To shut down all immune activity permanently'
    ],
    explanation: 'In acute stress, cortisol helps mobilize energy and temporarily shifts resources away from processes that are less urgent for immediate coping.'
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

  revise('lesson8', 15, keepHebrew('lesson8', 15), {
    question: 'What is the difference between leptin and ghrelin?',
    options: [
      'Leptin promotes satiety and ghrelin promotes hunger',
      'Leptin and ghrelin both signal low energy stores',
      'Leptin mainly triggers food seeking and ghrelin mainly signals stored fat',
      'Both act only in the brainstem and bypass hypothalamic circuits'
    ],
    explanation: 'Leptin is generally associated with satiety and energy stores, while ghrelin is associated with hunger signaling.'
  });

  revise('lesson8', 16, keepHebrew('lesson8', 16), {
    question: 'How do GLP-1-like weight-loss drugs reduce appetite?',
    options: [
      'They activate satiety-related circuits and reduce hunger',
      'They imitate ghrelin and strengthen food-seeking signals',
      'They act only in the stomach and have no brain effects',
      'They directly damage the VMH to prevent eating'
    ],
    explanation: 'GLP-1-based treatments influence metabolic and satiety-related signaling, including brain circuits involved in appetite regulation.'
  });

  revise('lesson8', 17, keepHebrew('lesson8', 17), {
    question: 'What does entrainment mean in circadian rhythm?',
    options: [
      'Calibrating the internal clock to the external light–dark cycle',
      'Suppressing all hormone secretion during daylight',
      'Moving visual information from retina to primary visual cortex',
      'Resetting hunger and satiety nuclei without light input'
    ],
    explanation: 'Entrainment is the alignment of the endogenous clock, especially the SCN, with environmental timing cues such as light.'
  });

  revise('lesson8', 18, keepHebrew('lesson8', 18), {
    question: 'Why is the vagus important beyond motor control?',
    options: [
      'It carries two-way information between the brain and organs and participates in autonomic regulation',
      'It is only a motor nerve for voluntary limb movement',
      'It carries visual information from retina to thalamus',
      'It replaces hypothalamic endocrine output during stress'
    ],
    explanation: 'The vagus carries visceral afferent and efferent information and is a major route for brain–body autonomic regulation.'
  });

  revise('lesson8', 19, keepHebrew('lesson8', 19), {
    question: 'Why can damage to a small brainstem region be life-threatening?',
    options: [
      'The area is packed with pathways and nuclei essential for breathing, arousal, and autonomic functions',
      'It contains only redundant sensory relay nuclei',
      'It affects only appetite while sparing arousal and breathing',
      'It changes cortical layer IV without affecting vital functions'
    ],
    explanation: 'The brainstem contains dense pathways and nuclei for vital functions, so small lesions can have large consequences.'
  });

  revise('lesson8', 20, keepHebrew('lesson8', 20), {
    question: 'What do many monoamine nuclei in the brainstem have in common?',
    options: [
      'A relatively small nucleus sends diffuse projections and influences many regions',
      'They are large cortical columns with strictly local projections',
      'They release posterior-pituitary hormones into blood',
      'They relay one sensory modality to one primary cortex only'
    ],
    explanation: 'Monoamine systems such as locus coeruleus and raphe nuclei arise from relatively small nuclei with widespread projections that influence arousal, mood, attention, and regulation.'
  });

  revise('lesson8', 21, keepHebrew('lesson8', 21), {
    question: 'A tumor that disconnects the portal system to the anterior pituitary would directly impair which mechanism?',
    options: [
      'Transfer of releasing hormones from the hypothalamus to anterior pituitary cells',
      'Direct axonal release of oxytocin from posterior pituitary terminals',
      'Feedback from cortisol to the hippocampus without pituitary involvement',
      'Vagal afferent signaling from internal organs to the brainstem'
    ],
    explanation: 'The portal system carries hypothalamic releasing hormones to endocrine cells in the anterior pituitary.'
  });

  revise('lesson8', 23, keepHebrew('lesson8', 23), {
    question: 'How can chronic activation of the HPA axis disrupt the reproductive system?',
    options: [
      'Hormonal axes are close and influence each other, and stress can suppress gonadotropic signals',
      'The HPA axis directly turns the ovaries or testes into adrenal tissue',
      'Cortisol permanently increases all reproductive hormones during threat',
      'Stress affects reproduction only through voluntary behavior, not endocrine regulation'
    ],
    explanation: 'Hypothalamic and pituitary axes interact; prolonged stress signaling can reduce reproductive-axis activity.'
  });

  revise('lesson8', 25, keepHebrew('lesson8', 25), {
    question: 'A patient does not initiate eating even though satiety-related signaling is intact. Which lesion fits best?',
    options: [
      'Damage to the LHA',
      'Damage to VMH satiety-related circuits',
      'Overactivation of arcuate hunger signaling',
      'A lesion limited to the SCN circadian clock'
    ],
    explanation: 'The LHA is classically associated with food seeking and feeding motivation; damage can reduce initiation of eating.'
  });

  revise('lesson8', 26, keepHebrew('lesson8', 26), {
    question: 'A blind person without light input to the non-visual retinal pathway develops a sleep time that shifts later each day. What is the explanation?',
    options: [
      'The endogenous clock is not entrained and therefore runs on a cycle that is not exactly 24 hours',
      'The SCN receives too much visual-cortex feedback and shortens the day',
      'The HPA axis directly replaces light as the clock signal',
      'The vagus nerve resets the circadian rhythm once per day'
    ],
    explanation: 'Without retinal light information reaching the circadian system, the internal clock may free-run rather than lock to the 24-hour day.'
  });

  revise('lesson8', 27, keepHebrew('lesson8', 27), {
    question: 'How does the hypothalamus translate emotion into a bodily response?',
    options: [
      'It integrates limbic input and activates autonomic and endocrine output through the brainstem and pituitary',
      'It sends all emotional information directly to V1 for visual interpretation',
      'It stores episodic memory before the hippocampus receives input',
      'It controls only voluntary skeletal movement through M1'
    ],
    explanation: 'The hypothalamus links limbic appraisal with autonomic and endocrine output, helping turn emotional states into bodily responses.'
  });

  revise('lesson8', 28, keepHebrew('lesson8', 28), {
    question: 'Damage to the ascending reticular activating system is expected first and foremost to cause what?',
    options: [
      'Severe reduction in arousal up to coma',
      'Loss of only appetite while consciousness remains unchanged',
      'Selective inability to release oxytocin with normal wakefulness',
      'A mild shift in circadian phase without arousal change'
    ],
    explanation: 'The ascending reticular activating system is essential for maintaining arousal and wakefulness.'
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

  revise('lesson8', 30, keepHebrew('lesson8', 30), {
    question: 'Why are the mammillary bodies classified as part of the hypothalamus even though they participate in memory?',
    options: [
      'Anatomical and developmental classification does not necessarily match the single function of a structure',
      'They are not part of the hypothalamus because memory always belongs to cortex',
      'They are classified by neurotransmitter rather than location or development',
      'They are brainstem nuclei because all memory circuits pass through the brainstem'
    ],
    explanation: 'The mammillary bodies are anatomically part of the hypothalamus and also participate in memory-related circuitry such as the Papez circuit.'
  });

  revise('lesson8', 32, {
    question: 'מטופל אוכל ללא תחושת שובע ברורה אחרי פגיעה היפותלמית ממוקדת. איזה אזור מתאים ביותר לפי המודל הקלאסי של מעגלי רעב־שובע?',
    options: ['VMH','LHA','SCN','PCC'],
    explanation: 'ה־VMH תואר קלאסית כאזור התורם למעגלי שובע. כיום מדגישים שמדובר בחלק מרשת היפותלמית והורמונלית רחבה ולא ב״מרכז״ יחיד שמסביר לבדו התנהגות אכילה.'
  }, {
    question: 'A patient eats without a clear feeling of satiety after a focal hypothalamic lesion. Which region best fits the classical hunger–satiety model?',
    options: ['VMH','LHA','SCN','PCC'],
    explanation: 'The VMH was classically associated with satiety-related circuits. More careful wording treats it as one part of broader hypothalamic and hormonal networks rather than a single isolated satiety center.'
  });

  revise('lesson9', 2, keepHebrew('lesson9', 2), {
    question: 'What does the BOLD signal measure indirectly?',
    options: [
      'Changes in oxygenation and blood flow related to neural activity',
      'Action potentials from a single identified neuron',
      'The exact number of axons in a white-matter tract',
      'The concentration of cortisol in the bloodstream'
    ],
    explanation: 'BOLD is an indirect hemodynamic measure: it reflects local blood oxygenation and flow changes related to neural activity.'
  });

  revise('lesson9', 3, keepHebrew('lesson9', 3), {
    question: 'When is the default mode network relatively more active?',
    options: [
      'During rest and internal processing',
      'Only during primary visual stimulation',
      'Only during reflexive spinal responses',
      'Only during deep coma'
    ],
    explanation: 'The DMN is relatively active during rest, mind-wandering, self-related thought, and other internally oriented processing.'
  });

  revise('lesson9', 4, keepHebrew('lesson9', 4), {
    question: 'Which central regions belong to the DMN?',
    options: [
      'mPFC, PCC/precuneus, and inferior parietal regions',
      'Primary motor cortex, cerebellar cortex, and spinal anterior horn',
      'SCN, VMH, and LHA',
      'V1, LGN, and retina'
    ],
    explanation: 'The DMN includes anterior and posterior midline hubs such as mPFC and PCC/precuneus, along with inferior parietal regions.'
  });

  revise('lesson9', 5, keepHebrew('lesson9', 5), {
    question: 'What is the central role of the salience network?',
    options: [
      'Detecting important information and helping switch between internal and external processing',
      'Maintaining self-related thought without interruption',
      'Holding rules and goals during demanding tasks',
      'Encoding primary visual features in retinotopic maps'
    ],
    explanation: 'The salience network helps identify relevant events and coordinate switching between networks such as the DMN and CEN.'
  });

  revise('lesson9', 6, keepHebrew('lesson9', 6), {
    question: 'Which function is associated with the Central Executive Network?',
    options: [
      'Working memory, planning, and control',
      'Resting self-referential thought',
      'Bottom-up capture by unexpected stimuli',
      'Primary processing of retinal input'
    ],
    explanation: 'The CEN is recruited during goal-directed control, working memory, planning, and task performance.'
  });

  revise('lesson9', 7, keepHebrew('lesson9', 7), {
    question: 'What characterizes the DAN?',
    options: [
      'Top-down allocation of attention according to a goal',
      'Bottom-up reorienting to a surprising stimulus',
      'Resting autobiographical thought',
      'Endocrine feedback through the pituitary'
    ],
    explanation: 'The dorsal attention network supports voluntary, goal-directed allocation of attention.'
  });

  revise('lesson9', 8, keepHebrew('lesson9', 8), {
    question: 'What characterizes the VAN?',
    options: [
      'Bottom-up attention to a salient or unexpected event',
      'Sustained top-down attention to a planned target',
      'Resting self-referential processing',
      'Thalamic relay of visual input to V1'
    ],
    explanation: 'The ventral attention network is recruited when salient or unexpected information redirects attention.'
  });

  revise('lesson9', 10, keepHebrew('lesson9', 10), {
    question: 'Does functional connectivity require a direct anatomical connection?',
    options: [
      'No, correlation can also arise through indirect or shared influences',
      'Yes, there must always be one direct axon between the regions',
      'Yes, but only if both regions are in the same cortical lobe',
      'No, because functional connectivity is the same thing as hormone secretion'
    ],
    explanation: 'Functional connectivity is a statistical relationship between activity patterns; it does not prove a direct anatomical pathway or causality.'
  });

  revise('lesson9', 11, keepHebrew('lesson9', 11), {
    question: 'What led to the discovery of the DMN in task studies?',
    options: [
      'Certain regions decreased in activity relative to rest and were correlated with each other during rest',
      'Researchers found a single axon linking every region active in rest',
      'Task activation was compared to a baseline assumed to have zero brain activity',
      'The network appeared only during primary motor movement'
    ],
    explanation: 'The DMN emerged because some regions were more active at rest than during externally focused tasks, showing that baseline is not neural silence.'
  });

  revise('lesson9', 12, keepHebrew('lesson9', 12), {
    question: 'What does anti-correlation between the DMN and CEN mean?',
    options: [
      'When one network’s activity increases, the other tends to decrease',
      'Both networks always rise and fall together',
      'The two networks are connected by one direct anatomical tract',
      'The DMN becomes the visual network during tasks'
    ],
    explanation: 'Anti-correlation describes an inverse relationship between activity patterns, often interpreted as competition between internal processing and external control.'
  });

  revise('lesson9', 13, keepHebrew('lesson9', 13), {
    question: 'How does the salience network function as a switch?',
    options: [
      'It identifies what is important and helps transfer resources between the DMN and CEN',
      'It permanently turns off both the DMN and CEN',
      'It anatomically connects every pair of regions in the brain',
      'It replaces executive control with primary sensory processing'
    ],
    explanation: 'The salience network helps recruit control networks when important events require a shift away from internal processing.'
  });

  revise('lesson9', 14, keepHebrew('lesson9', 14), {
    question: 'What is the difference between the somatomotor network and the visual network?',
    options: [
      'The first coordinates sensation and movement, and the second coordinates visual processing',
      'The first is a resting-state self network, and the second is an endocrine stress axis',
      'The first is located only in the hippocampus, and the second only in the pituitary',
      'The two names describe the same network during different sleep stages'
    ],
    explanation: 'Different networks group regions that cooperate around different functional domains, such as movement/sensation versus visual processing.'
  });

  revise('lesson9', 15, keepHebrew('lesson9', 15), {
    question: 'What is a hub in a brain network?',
    options: [
      'A node with many connections or a central integrative role',
      'A node with no edges by definition',
      'A hormone receptor that replaces graph analysis',
      'A region that can belong only to one network forever'
    ],
    explanation: 'Hubs are highly connected or strategically placed nodes that support communication within and between networks.'
  });

  revise('lesson9', 16, keepHebrew('lesson9', 16), {
    question: 'How can a network be both segregated and integrated?',
    options: [
      'It can have strong internal connections while hubs connect it to other networks',
      'It must be completely isolated from every other network',
      'It must have identical activity in every node at every moment',
      'It can communicate only through the endocrine system'
    ],
    explanation: 'Segregation supports specialization inside a network, while integration allows coordination with other networks.'
  });

  revise('lesson9', 17, keepHebrew('lesson9', 17), {
    question: 'What does it mean that networks are dynamic?',
    options: [
      'Connection strength and cooperation patterns change from moment to moment and across life',
      'The anatomical location of each cortical lobe changes every second',
      'Functional connectivity is fixed at birth and never changes',
      'Only structural MRI can measure network dynamics'
    ],
    explanation: 'Network organization is not a single rigid map; coupling between regions can vary with state, task, development, and experience.'
  });

  revise('lesson9', 21, keepHebrew('lesson9', 21), {
    question: 'Two regions are correlated in resting-state fMRI. What may be inferred?',
    options: [
      'They have functional connectivity, but not necessarily a direct connection or causality',
      'One region definitely causes activity in the other',
      'A single anatomical tract must connect them directly',
      'They must belong to different networks'
    ],
    explanation: 'Resting-state correlation supports functional connectivity, but it does not by itself establish direction, cause, or direct anatomy.'
  });

  revise('lesson9', 22, keepHebrew('lesson9', 22), {
    question: 'Why is baseline selection important in fMRI studies?',
    options: [
      'Because reported activation is relative to a comparison state, and the brain is active in that state too',
      'Because baseline activity is always zero and therefore easy to subtract',
      'Because baseline choice determines the person’s anatomical connectivity',
      'Because BOLD directly records single-neuron spikes only at rest'
    ],
    explanation: 'fMRI contrasts depend on the comparison condition; rest is an active state and can change the interpretation of “activation.”'
  });

  revise('lesson9', 24, keepHebrew('lesson9', 24), {
    question: 'Why can impairment in the same function result from damage in different regions?',
    options: [
      'Higher functions depend on distributed networks, and disruption of different essential nodes can impair the same system',
      'Every function is controlled by exactly one cortical point',
      'Damage in any region produces identical symptoms',
      'Only the thalamus can cause network-level impairments'
    ],
    explanation: 'A network approach explains why different lesions can disturb the same function when they affect different parts of a shared system.'
  });

  revise('lesson9', 25, keepHebrew('lesson9', 25), {
    question: 'What is a possible therapeutic advantage of looking at a whole network?',
    options: [
      'The network can be influenced through an accessible node even if the damaged node is not accessible',
      'Treatment must target only the structurally damaged node',
      'Connectivity measures make behavior irrelevant',
      'Every node in a network always responds identically to treatment'
    ],
    explanation: 'Network thinking can suggest intervention points that influence a broader system even when the original damaged site is hard to access.'
  });

  revise('lesson9', 26, keepHebrew('lesson9', 26), {
    question: 'How can disruption of thalamo-cortical rhythm affect psychopathology?',
    options: [
      'The thalamus may fail to synchronize cortical networks properly, so they become uncoordinated',
      'The thalamus becomes a default-mode hub only during sleep',
      'The cortex stops needing thalamic input for any function',
      'The rhythm directly measures cortisol feedback in the HPA axis'
    ],
    explanation: 'Thalamo-cortical models emphasize timing, coordination, and synchronization across cortical networks.'
  });

  revise('lesson9', 27, keepHebrew('lesson9', 27), {
    question: 'During a planned task, an alarm suddenly sounds. Which network transition is likely?',
    options: [
      'From goal-directed DAN to recruitment of VAN/SN after a salient stimulus',
      'From the DMN to deeper internal self-processing only',
      'From visual cortex to the posterior pituitary',
      'From CEN to permanent shutdown of attention'
    ],
    explanation: 'A sudden alarm is a salient bottom-up event, so ventral attention and salience systems may interrupt the current goal-directed set.'
  });

  revise('lesson9', 28, keepHebrew('lesson9', 28), {
    question: 'What does the weight of an edge usually represent in functional connectivity analysis?',
    options: [
      'The strength of the statistical relationship between two nodes',
      'The physical weight of a cortical region',
      'The number of hormones released by the pituitary',
      'The certainty that one node directly causes another'
    ],
    explanation: 'In functional network analysis, edge weight usually reflects the strength of correlation or another statistical dependency measure.'
  });

  revise('lesson9', 30, keepHebrew('lesson9', 30), {
    question: 'Which failure would explain mind-wandering, difficulty performing a task, and hypersensitivity to stimuli?',
    options: [
      'An SN that does not switch efficiently between the DMN and CEN',
      'A visual network that cannot encode retinotopy',
      'A posterior pituitary that cannot release oxytocin',
      'A motor cortex that cannot activate spinal reflexes'
    ],
    explanation: 'The triple-network model links inefficient salience switching with poor coordination between internal processing, executive control, and responses to salient stimuli.'
  });

  revise('lesson9', 31, keepHebrew('lesson9', 31), {
    question: 'A person has difficulty shifting from internal thoughts to an external task, especially when an important stimulus appears. Which network may be impaired?',
    options: [
      'The salience network that mediates switching between the DMN and CEN',
      'The primary visual network that maps the retina',
      'The somatomotor network that controls finger movement',
      'The hypothalamic pituitary axis that releases cortisol'
    ],
    explanation: 'The salience network helps detect important information and shift resources between internal and executive-control states.'
  });

  revise('lesson9', 32, keepHebrew('lesson9', 32), {
    question: 'In fMRI, regions do not act together even though there is no clear anatomical damage between them. Which distinction fits?',
    options: [
      'Functional connectivity can change even without damage to a direct anatomical connection',
      'Anatomical connectivity and functional connectivity are always identical',
      'A missing direct lesion proves the fMRI finding is impossible',
      'Only single-neuron recording can measure any form of connectivity'
    ],
    explanation: 'Functional connectivity is about statistical coupling between activity patterns, so it can change without a visible direct structural lesion.'
  });

  revise('lesson9', 33, keepHebrew('lesson9', 33), {
    question: 'Where are central hubs of the default mode network located?',
    options: [
      'In medial regions such as the mPFC and PCC/precuneus',
      'Only in the primary motor cortex',
      'Only in the posterior pituitary',
      'Only in the lateral geniculate nucleus'
    ],
    explanation: 'The DMN includes anterior and posterior midline hubs, especially mPFC and PCC/precuneus, along with parietal regions.'
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

  const clinicalDifficulty = {
    easy: [7, 10, 12, 13, 18, 20, 26, 29],
    medium: [1, 3, 5, 8, 9, 11, 14, 15, 17, 19, 21, 23, 30],
    hard: [2, 4, 6, 16, 22, 24, 25, 27, 28]
  };

  Object.entries(clinicalDifficulty).forEach(function ([difficulty, ids]) {
    ids.forEach(function (id) {
      const item = questionBank.clinicalIntegration && questionBank.clinicalIntegration.find(function (question) { return question.id === id; });
      if (item) item.difficulty = difficulty;
    });
  });
})();
