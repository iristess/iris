// Pedagogical quality pass: keep the correct answer at the same index in both
// languages, then replace the weakest Lesson 3 items with concept-matched
// distractors. Every distractor represents a plausible misconception.
(function () {
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
        options: revision.en.slice(1)
      })
    });
  });
})();
