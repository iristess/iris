// Expanded clinical integration bank: each vignette starts with a psychological
// phenomenon and asks the learner to connect it to a region, circuit, or network.
(function () {
  const difficultyById = {
    22: 'hard', 23: 'hard', 24: 'hard', 25: 'hard', 26: 'medium',
    27: 'hard', 28: 'hard', 29: 'medium', 30: 'hard'
  };

  const q = function (id, topicHe, questionHe, answerHe, distractorsHe, explanationHe,
                      topicEn, questionEn, answerEn, distractorsEn, explanationEn) {
    return {
      id: id,
      difficulty: difficultyById[id] || 'hard',
      topic: topicHe,
      question: questionHe,
      options: [answerHe].concat(distractorsHe),
      correctAnswer: 0,
      explanation: explanationHe,
      i18n: {
        en: {
          topic: topicEn,
          question: questionEn,
          options: [answerEn].concat(distractorsEn),
          explanation: explanationEn
        }
      }
    };
  };

  const additions = [
    q(22, 'אינטגרציה קלינית · אנהדוניה',
      'שירה מתארת שבעבר נהנתה ממוזיקה וממפגשים עם חברות, אך כעת היא “יודעת שזה אמור להיות נעים” ואינה חווה ציפייה או הנאה. איזו מערכת מוחית מתאימה במיוחד לאנהדוניה?',
      'ירידה בתפקוד מעגלי התגמול המזולימביים, כולל VTA והסטריאטום הוונטרלי, לצד ויסות פרה־פרונטלי',
      ['פעילות יתר ב־SCN שמקדימה את השעון היממתי', 'פגיעה מבודדת ב־V1 שמונעת זיהוי גירויים נעימים', 'פעילות יתר במסלול הניגרו־סטריאטלי שמגבירה תנועה'],
      'אנהדוניה קשורה להפחתה בציפייה ובתגובה לתגמול. ה־VTA, הנוקליוס אקומבנס/סטריאטום ונטרלי וה־PFC משתתפים בחישוב ערך, מוטיבציה ולמידת תגמול.',
      'Clinical Integration · Anhedonia',
      'Shira used to enjoy music and meeting friends, but now says she “knows it should feel pleasant” without experiencing anticipation or pleasure. Which brain system best fits anhedonia?',
      'Reduced function in mesolimbic reward circuits, including VTA and ventral striatum, together with prefrontal regulation',
      ['SCN hyperactivity that advances the circadian clock', 'Isolated V1 damage preventing recognition of pleasant stimuli', 'Nigrostriatal hyperactivity that increases movement'],
      'Anhedonia involves reduced anticipation of and response to reward. VTA, nucleus accumbens/ventral striatum, and PFC participate in value, motivation, and reward learning.'),

    q(23, 'אינטגרציה קלינית · כפייתיות',
      'מיכאל חוזר לבדוק את הגז חמש־עשרה פעמים. הוא מבין שהבדיקה מיותרת, אך החרדה יורדת רק לרגע לאחר הטקס. איזה מעגל מתאים במיוחד לדפוס כפייתי כזה?',
      'הלולאה הקורטיקו־סטריאטו־תלמו־קורטיקלית הכוללת OFC/ACC, קאודט ותלמוס',
      ['מעגל פאפז הכולל היפוקמפוס וגופים ממילריים', 'המסלול הראייתי הדורסלי מאוקסיפיטלי לפריאטלי', 'המסלול הניגרו־סטריאטלי המוטורי בלבד'],
      'בכפייתיות, הערכת שגיאה או איום ב־OFC/ACC אינה נסגרת היטב דרך הסטריאטום והתלמוס, ולכן הפעולה חוזרת למרות ידיעה מפורשת שאינה נחוצה.',
      'Clinical Integration · Compulsivity',
      'Michael checks the stove fifteen times. He knows the check is unnecessary, but anxiety drops only briefly after the ritual. Which circuit best fits this compulsive pattern?',
      'The cortico-striato-thalamo-cortical loop involving OFC/ACC, caudate, and thalamus',
      ['The Papez circuit involving hippocampus and mammillary bodies', 'The dorsal visual pathway from occipital to parietal cortex', 'The motor nigrostriatal pathway alone'],
      'In compulsivity, an error or threat signal in OFC/ACC may fail to close properly through striatum and thalamus, so the action repeats despite explicit knowledge that it is unnecessary.'),

    q(24, 'אינטגרציה קלינית · התקף חרדה',
      'נטלי מרגישה דופק מואץ קל, מפרשת אותו מיד כסימן לאסון, נעשית דרוכה לכל תחושה פנימית ומפתחת התקף חרדה. איזה שילוב אזורים מתאים ביותר?',
      'אינסולה קדמית שמגבירה מודעות אינטרוספטיבית, אמיגדלה שמעניקה ערך איום, ו־PAG/היפותלמוס שמארגנים תגובה גופנית',
      ['היפוקמפוס לבדו שמאחסן עובדות על קצב הלב', 'V1 ו־LGN שמגבירים את חדות הראייה בזמן חרדה', 'קורטקס מוטורי וצרבלום שמייצרים את פרשנות האיום'],
      'התקף חרדה משלב תחושה גופנית, פרשנות מאיימת ותגובה אוטונומית. האינסולה, האמיגדלה ואזורים אוטונומיים כגון PAG והיפותלמוס יוצרים יחד את המעגל.',
      'Clinical Integration · Panic',
      'Natalie notices a mildly accelerated heartbeat, immediately interprets it as catastrophe, becomes vigilant to every internal sensation, and develops a panic attack. Which combination fits best?',
      'Anterior insula amplifying interoceptive awareness, amygdala assigning threat value, and PAG/hypothalamus organizing bodily response',
      ['Hippocampus alone storing facts about heart rate', 'V1 and LGN increasing visual acuity during anxiety', 'Motor cortex and cerebellum generating the threat interpretation'],
      'Panic combines bodily sensation, threatening interpretation, and autonomic response. Insula, amygdala, and autonomic regions such as PAG and hypothalamus form the relevant circuit.'),

    q(25, 'אינטגרציה קלינית · מנטליזציה',
      'אבירם מבין את העובדות בסיפור, אך מתקשה להבין שאדם אחר פועל לפי אמונה שגויה שאבירם עצמו יודע שאינה נכונה. איזו רשת נדרשת במיוחד?',
      'רשת המנטליזציה הכוללת TPJ, ‏mPFC ו־precuneus/PCC',
      ['רשת סומטומוטורית הכוללת M1 ו־S1', 'המסלול המזולימבי VTA–נוקליוס אקומבנס', 'המערכת הרטיקולרית העולה בגזע המוח'],
      'הבנת אמונות שונות משלנו דורשת הפרדה בין עצמי לאחר וייצוג מצב מנטלי. TPJ ו־mPFC הם מוקדים מרכזיים ברשת זו.',
      'Clinical Integration · Mentalization',
      'Aviram understands the facts in a story but struggles to grasp that another person acts on a false belief that Aviram knows is wrong. Which network is especially required?',
      'The mentalization network including TPJ, mPFC, and precuneus/PCC',
      ['The somatomotor network including M1 and S1', 'The VTA–nucleus accumbens mesolimbic pathway', 'The ascending reticular activating system in the brainstem'],
      'Understanding beliefs different from our own requires self–other distinction and representation of mental states. TPJ and mPFC are major hubs in this network.'),

    q(26, 'אינטגרציה קלינית · תנועה ומוטיבציה',
      'סרגיי מתקשה להתחיל ללכת וגם מדווח שפחתו היוזמה והדחף לבצע פעילויות שבעבר חיפש. איזה עיקרון מסביר את השילוב?',
      'דופמין משתתף בלולאות בזאל־גנגליה מוטוריות וגם במעגלי wanting ותגמול, ולכן פגיעה במסלולים שונים יכולה להשפיע על שני התחומים',
      ['ההיפוקמפוס שולט ישירות גם בשרירים וגם בהנאה', 'ה־SCN מסנכרן תנועה ותגמול באמצעות אור', 'האמיגדלה מייצרת דופמין לכל הסטריאטום'],
      'המסלול הניגרו־סטריאטלי חשוב להקלה על פעולה, והמסלול המזולימבי חשוב למוטיבציה ולרצייה. פגיעה דופמינרגית יכולה להתבטא גם מוטורית וגם מוטיבציונית.',
      'Clinical Integration · Movement and Motivation',
      'Sergey has difficulty initiating walking and also reports reduced initiative and drive for activities he previously sought. Which principle explains the combination?',
      'Dopamine participates in motor basal-ganglia loops and in wanting/reward circuits, so damage to different pathways can affect both domains',
      ['The hippocampus directly controls both muscles and pleasure', 'The SCN synchronizes movement and reward through light', 'The amygdala produces dopamine for the entire striatum'],
      'The nigrostriatal pathway facilitates action, while the mesolimbic pathway supports motivation and wanting. Dopaminergic impairment can therefore appear in both motor and motivational domains.'),

    q(27, 'אינטגרציה קלינית · PTSD',
      'נינה נבהלת מרעש אופנוע כאילו האירוע הטראומטי מתרחש שוב עכשיו. היא מתקשה להשתמש במידע של זמן ומקום כדי להבין שהיא בטוחה. איזה דפוס רשת מתאים?',
      'אמיגדלה פעילה מדי לצד קונטקסט היפוקמפלי חלש ובקרה מופחתת של vmPFC',
      ['אמיגדלה חלשה לצד קידוד־יתר של ביטחון ב־BNST', 'פעילות יתר ב־dlPFC שמוחקת זיכרון אפיזודי', 'פגיעה ב־VAN שמונעת כל הפניית קשב לרעש'],
      'האמיגדלה מסמנת איום, ההיפוקמפוס מספק הקשר של זמן ומקום, ו־vmPFC מסייע לווסת את תגובת הפחד. חוסר איזון ביניהם יכול לגרום לחוויה שהעבר מתרחש בהווה.',
      'Clinical Integration · PTSD',
      'Nina startles at a motorcycle sound as though the traumatic event is happening again now. She struggles to use time-and-place information to recognize that she is safe. Which network pattern fits?',
      'Overactive amygdala with weak hippocampal context and reduced vmPFC regulation',
      ['Weak amygdala with excessive safety encoding in BNST', 'dlPFC hyperactivity that erases episodic memory', 'VAN damage preventing any attentional shift toward the sound'],
      'The amygdala signals threat, the hippocampus supplies time-and-place context, and vmPFC regulates fear. Imbalance among them can make the past feel present.'),

    q(28, 'אינטגרציה קלינית · רומינציה',
      'ליה מנסה לעבוד, אך שוב ושוב נשאבת למחשבות עצמיות שליליות. גם כשהיא מזהה מטלה חשובה, קשה לה לעבור לעיבוד מכוון־מטרה. איזה כשל רשתִי מתאים?',
      'DMN שנשארת דומיננטית לצד מעבר לא יעיל של רשת הבולטות אל CEN',
      ['DAN פעילה מדי שממקדת קשב חזק מדי בגירוי חיצוני', 'פגיעה ב־M1 שמונעת התחלה של מחשבה', 'פעילות יתר ב־LGN שמגבירה זיכרון אוטוביוגרפי'],
      'רומינציה מערבת עיבוד עצמי פנימי מתמשך. כאשר רשת הבולטות אינה מעבירה ביעילות משאבים מן ה־DMN לרשת הבקרה, קשה לחזור למשימה.',
      'Clinical Integration · Rumination',
      'Leah tries to work but is repeatedly pulled into negative self-focused thoughts. Even when she identifies an important task, she struggles to shift into goal-directed processing. Which network failure fits?',
      'A dominant DMN together with inefficient salience-network switching to the CEN',
      ['An overactive DAN producing excessive focus on external stimuli', 'M1 damage preventing the initiation of thought', 'LGN hyperactivity increasing autobiographical memory'],
      'Rumination involves sustained internal self-processing. If the salience network does not efficiently shift resources from DMN to executive control, returning to the task becomes difficult.'),

    q(29, 'אינטגרציה קלינית · אפזיית הולכה',
      'טים מבין משפט, משיב עליו בדיבור שוטף, אך משבש אותו שוב ושוב כשהוא מתבקש לחזור עליו מילה במילה. איזה חיבור סביר שנפגע?',
      'הנתיב הדורסלי של השפה, ובפרט arcuate fasciculus, המחבר ייצוג שמיעתי עם תכנון הפקה',
      ['הנתיב הוונטרלי בלבד, ולכן משמעות המילים אובדת אך החזרה נשמרת', 'uncinate fasciculus המחבר אמיגדלה עם OFC', 'המסלול הקורטיקוספינלי המפעיל את שרירי היד'],
      'חזרה מדויקת דורשת מיפוי מהיר מצליל לתכנית ארטיקולטורית. פגיעה במסלול הדורסלי יכולה להשאיר הבנה ודיבור ספונטני יחסית שמורים.',
      'Clinical Integration · Conduction Aphasia',
      'Tim understands a sentence and answers fluently, but repeatedly distorts it when asked to repeat it word for word. Which connection is likely damaged?',
      'The dorsal language pathway, especially the arcuate fasciculus, linking auditory representation to production planning',
      ['The ventral pathway alone, causing loss of meaning with preserved repetition', 'The uncinate fasciculus connecting amygdala with OFC', 'The corticospinal tract controlling hand muscles'],
      'Accurate repetition requires rapid mapping from sound to an articulatory plan. Dorsal-pathway damage can leave comprehension and spontaneous speech relatively preserved.'),

    q(30, 'אינטגרציה קלינית · רזרבה מוחית',
      'סטפני וקלייר מציגות עומס פתולוגי דומה בדימות. סטפני שמרה לאורך השנים על פעילות גופנית, למידה וקשרים חברתיים ומתפקדת טוב יותר. איזה הסבר מתאים?',
      'רזרבה מוחית וקוגניטיבית מאפשרת שימוש יעיל או חלופי ברשתות למרות פגיעה מצטברת',
      ['אצל סטפני אין כלל פתולוגיה משום שהתנהגות מונעת כל שינוי מוחי', 'הבדל בתפקוד מוכיח שהדימות שגוי ואינו יכול למדוד מבנה', 'רזרבה פירושה שהנוירונים מזדקנים מהר יותר אך האדם אינו מודע לכך'],
      'סביבה עשירה, פעילות וקשרים חברתיים עשויים לחזק רזרבה. לכן אותו עומס מבני אינו חייב להתבטא באותה ירידה תפקודית אצל כל אדם.',
      'Clinical Integration · Cognitive Reserve',
      'Stephanie and Claire show a similar pathological burden on imaging. Stephanie maintained exercise, learning, and social ties over the years and functions better. Which explanation fits?',
      'Brain and cognitive reserve allow more efficient or alternative network use despite accumulated damage',
      ['Stephanie has no pathology because behavior prevents every brain change', 'The functional difference proves that imaging is wrong and cannot measure structure', 'Reserve means neurons age faster while the person remains unaware'],
      'Enriched environments, activity, and social connections may strengthen reserve. The same structural burden therefore need not produce the same functional decline in every person.')
  ];

  questionBank.clinicalIntegration.push.apply(questionBank.clinicalIntegration, additions);
})();
