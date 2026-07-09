// Advanced-tier distractors for the older lessons. These are deliberately
// close alternatives: adjacent structures, reversed pathways, or partial truths.
(function () {
  const sets = {
    lesson1: {
      21: ['נוירון סטלטי, משום שהוא מופיע בכל שכבות הקורטקס באותה שכיחות','תא פורקינייה, משום שעץ דנדריטי גדול מעיד על שכיחות גבוהה','תא גרנולה, משום שכל תא קטן בקורטקס מסווג כגרנולרי',
        'Stellate neuron, because it appears equally often in every cortical layer','Purkinje cell, because a large dendritic tree implies high prevalence','Granule cell, because every small cortical neuron is classified as granular'],
      22: ['GABA, משום שכל תא בעל דנדריטים קוצניים הוא מעכב','דופמין, משום שתאים פירמידליים שולטים בכל מערכת התגמול','גליצין, משום שזהו הנוירוטרנסמיטר המעורר העיקרי בקורטקס',
        'GABA, because every neuron with spiny dendrites is inhibitory','Dopamine, because pyramidal cells control the entire reward system','Glycine, because it is the main excitatory transmitter in cortex'],
      23: ['הם תמיד מעכבים ומשתמשים ב־GABA ללא קשר לשכבה','הם תאי פלט גדולים בעלי דנדריט אפיקלי יחיד','הם נמצאים רק בצרבלום ומעכבים את גרעיניו העמוקים',
        'They are always inhibitory and use GABA regardless of layer','They are large output cells with one apical dendrite','They exist only in cerebellum and inhibit its deep nuclei'],
      24: ['בשכבה 5 של הקורטקס המוטורי, לצד תאי Betz','בהיפוקמפוס, שם הם משמשים כתאי מקום','בגרעיני הבאזל, שם הם יוצרים את המסלול הישיר',
        'In layer V of motor cortex alongside Betz cells','In the hippocampus, where they serve as place cells','In the basal ganglia, where they form the direct pathway'],
      25: ['הוא מייצר מיאלין סביב כמה אקסונים ומאיץ הולכה','הוא מבצע פאגוציטוזה וגיזום סינפסות כתא החיסון העיקרי','הוא מעביר פוטנציאלי פעולה למרחקים ומספק פלט קורטיקלי',
        'It myelinates several axons and speeds conduction','It performs phagocytosis and pruning as the main immune cell','It carries long-range action potentials as a cortical output cell'],
      26: ['אסטרוציט, משום שהוא עוטף סינפסות וכלי דם','מיקרוגליה, משום שגיזום סינפטי דורש בידוד חשמלי','תא שוואן, משום שהוא ממיילן את מערכת העצבים המרכזית',
        'Astrocyte, because it surrounds synapses and blood vessels','Microglia, because synaptic pruning requires electrical insulation','Schwann cell, because it myelinates the central nervous system'],
      27: ['וויסות גלוטמט ואשלגן סביב הסינפסה כמו אסטרוציט','יצירת מיאלין למספר אקסונים כמו אוליגודנדרוציט','שליחת פלט אקסיטטורי ארוך־טווח כמו תא פירמידלי',
        'Regulating glutamate and potassium around synapses like an astrocyte','Myelinating several axons like an oligodendrocyte','Sending long-range excitatory output like a pyramidal neuron'],
      28: ['שני נוירונים ואוליגודנדרוציט שמייצר מיאלין סביב שניהם','קצה אקסון, תא מיקרוגליה וכלי דם שמחליף את הדנדריט','שלושה נוירונים המחוברים בטור ללא מעורבות של גליה',
        'Two neurons and an oligodendrocyte that myelinates both','An axon terminal, microglia, and a blood vessel replacing the dendrite','Three neurons connected in series without glial involvement'],
      29: ['הם מייצרים את אות BOLD באמצעות ירי של פוטנציאלי פעולה','הם מודדים ישירות חמצן ומעבירים את המדידה לסורק','הם מפחיתים תמיד זרימת דם כאשר הפעילות הסינפטית עולה',
        'They generate BOLD by firing action potentials','They directly measure oxygen and transmit the measurement to the scanner','They always reduce blood flow when synaptic activity increases'],
      30: ['דופמין נהרס בקיבה בלבד, ולכן אין קשר למחסום דם–מוח','L-DOPA מפעיל קולטני דופמין מחוץ למוח ואינה נכנסת אליו','המחסום מעביר דופמין אך חוסם את L-DOPA, ולכן נותנים מינון גבוה',
        'Dopamine is destroyed only in the stomach, so the blood–brain barrier is irrelevant','L-DOPA activates dopamine receptors outside the brain and never enters it','The barrier passes dopamine but blocks L-DOPA, so a high dose is used']
    },
    lesson2: {
      21: ['אזור שמשלב כמה חושים כדי ליצור ייצוג מופשט','קורטקס ראשוני שמקבל קלט ישיר מן התלמוס ללא עיבוד קודם','אזור transmodal שאינו שייך עוד למודליות חושית מסוימת',
        'An area that integrates several senses into an abstract representation','Primary cortex receiving direct thalamic input without prior cortical processing','A transmodal area no longer tied to a particular sensory modality'],
      22: ['אזור שמעבד שלב מתקדם בתוך חוש יחיד בלבד','אזור ראשוני שממפה תכונה פשוטה של גירוי אחד','מסלול חומר לבן המחבר שני אזורים מאותה מודליות',
        'An area performing advanced processing within only one sense','A primary area mapping a simple feature of one stimulus','A white-matter tract connecting two areas of the same modality'],
      23: ['זיהוי זהות וצבע של עצמים דרך האונה הטמפורלית','קידוד ערך רגשי של עצם דרך vmPFC בלבד','העברת מידע חזותי ישירות מן הרשתית לקורטקס הפריאטלי',
        'Identifying object identity and color through temporal cortex','Encoding an object’s emotional value through vmPFC alone','Sending visual information directly from retina to parietal cortex'],
      24: ['מיפוי מיקום והכוונת אחיזה דרך אזורים פריאטליים','חישוב תנועה במרחב ללא גישה לזהות האובייקט','שליטה מוטורית ישירה בשרירי העין דרך הקורטקס המוטורי',
        'Mapping location and guiding grasp through parietal regions','Computing movement in space without access to object identity','Direct motor control of eye muscles through motor cortex'],
      25: ['סיבים המחברים אזורים רחוקים בתוך אותה המיספרה','סיבים עולים ויורדים בין הקורטקס למבנים תת־קורטיקליים','סיבים קצרים המחברים שכבות שונות באותה עמודה בלבד',
        'Fibers connecting distant regions within one hemisphere','Ascending and descending fibers between cortex and subcortical structures','Short fibers connecting layers within one cortical column only'],
      26: ['סיבים החוצים את קו האמצע ומקשרים בין ההמיספרות','סיבים המחברים את הקורטקס עם התלמוס וחוט השדרה','סיבים היוצאים תמיד מאזור ראשוני אל שריר',
        'Fibers crossing the midline to connect the hemispheres','Fibers connecting cortex with thalamus and spinal cord','Fibers always leaving a primary area for a muscle'],
      27: ['סיבים תוך־המיספריים בין אזורים קורטיקליים סמוכים או רחוקים','סיבי קורפוס קלוסום המעבירים מידע מימין לשמאל','סיבים המקשרים רק בין שתי שכבות של אותו אזור',
        'Intrahemispheric fibers between nearby or distant cortical areas','Corpus-callosum fibers carrying information between hemispheres','Fibers connecting only two layers of the same area'],
      28: ['uncinate fasciculus, המחבר טמפורלי קדמי עם OFC','SLF הימני, המעורב בעיקר בקשב מרחבי','cingulum, המחבר אזורים מדיאליים של המערכת הלימבית',
        'Uncinate fasciculus, linking anterior temporal cortex with OFC','Right SLF, involved mainly in spatial attention','Cingulum, linking medial regions of the limbic system'],
      29: ['אפזיית ברוקה עם דיבור לא שוטף והבנה שמורה','אפזיית ורניקה עם דיבור שוטף אך חסר משמעות והבנה לקויה','הזנחת צד עקב פגיעה במסלולי קשב פריאטליים ימניים',
        'Broca aphasia with nonfluent speech and preserved comprehension','Wernicke aphasia with fluent meaningless speech and poor comprehension','Hemispatial neglect from right parietal attention-pathway damage'],
      30: ['כל צומת מחובר ישירות לכל צומת אחר ולכן אין מודולות','הרשת מורכבת ממודולות מבודדות ללא hubs ביניהן','יעילות הרשת נובעת ממסלול יחיד ארוך שעובר בכל הצמתים',
        'Every node connects directly to every other node, so modules do not exist','The network contains isolated modules with no hubs between them','Efficiency comes from one long path passing through every node']
    },
    lesson4: {
      21: ['פחד וחרדה נבדלים רק בעוצמה ולא במשך או בסוג האיום','פחד הוא מצב ממושך וחסר מוקד, ואילו חרדה היא תגובה קצרה לגירוי ברור','פחד תלוי ב־BNST בלבד וחרדה תלויה באמיגדלה בלבד',
        'Fear and anxiety differ only in intensity, not duration or threat type','Fear is prolonged and diffuse, whereas anxiety is brief and stimulus-bound','Fear depends only on BNST and anxiety only on amygdala'],
      22: ['האמיגדלה לבדה מחזיקה תגובת איום ממושכת גם לאחר שהגירוי נעלם','BNST נדרש רק לרפלקס בהלה מיידי ואינו קשור להקשר מתמשך','האור מפחית עוררות דרך vmPFC ולכן הפגיעה ב־BNST מגבירה בהלה',
        'The amygdala alone sustains threat responses long after the stimulus disappears','BNST is needed only for immediate startle and not sustained context','Light reduces arousal through vmPFC, so BNST damage increases startle'],
      23: ['על המשטח המדיאלי מעל הקורפוס קלוסום','בעומק האונה הטמפורלית, קדמית להיפוקמפוס','במשטח האוקסיפיטלי סביב הסולקוס הקלקריני',
        'On the medial surface above the corpus callosum','Deep in the temporal lobe anterior to the hippocampus','On the occipital surface around the calcarine sulcus'],
      24: ['אזור אינטגרטיבי קדמי שמייצג משמעות מודעת של מצב הגוף','אזור לימבי אגרנולרי שמעריך כוונות חברתיות בלבד','קורטקס טעם ראשוני ללא ייצוג של תחושות גוף אחרות',
        'An anterior integrative area representing conscious meaning of bodily state','An agranular limbic area evaluating social intentions alone','Primary taste cortex with no representation of other bodily sensations'],
      25: ['מפה סומטוטופית ראשונית של קלט ויסצרלי ללא שילוב הקשר','עיבוד תחושתי גולמי בלבד ללא קשר למודעות או רגש','קורטקס גרנולרי המקבל קלט גוף ישיר אך אינו מתקשר עם רשת הבולטות',
        'A primary somatotopic map of visceral input without contextual integration','Raw sensory processing alone, unrelated to awareness or emotion','Granular cortex receiving direct body input but disconnected from salience network'],
      26: ['ריח, משום שהאינסולה היא קורטקס אולפקטורי ראשוני','שמיעה, משום שהיא מוסתרת ליד האונה הטמפורלית','מגע מן הגוף, משום שכל המידע הסומטוסנסורי הראשוני מגיע אליה',
        'Smell, because the insula is primary olfactory cortex','Hearing, because it is hidden near the temporal lobe','Body touch, because all primary somatosensory input reaches it'],
      27: ['היא מסיקה באופן מופשט על אמונות האחר בלי לדמות מצב גופני','היא מזהה זהות פנים ולכן מאפשרת אמפתיה דרך FFA','היא מעכבת כל תחושה עצמית כדי לפנות מקום לחוויה של האחר',
        'It infers beliefs abstractly without simulating bodily state','It recognizes facial identity and thereby produces empathy through FFA','It suppresses all self-feeling to make room for another’s experience'],
      28: ['החלק הקדמי מקודד תחושה גולמית והאחורי מייחס לה משמעות רגשית','אין מדרג; כל חלקי האינסולה מבצעים אותו עיבוד בדיוק','המעבר הוא מעיבוד חברתי קדמי לעיבוד ראייתי אחורי',
        'Anterior insula codes raw sensation and posterior insula assigns emotional meaning','There is no gradient; every insular part performs identical processing','The transition is from anterior social processing to posterior visual processing'],
      29: ['קידוד זיכרון אפיזודי, ניווט ויצירת תאי מקום','זיהוי פנים, כיוון מבט והסקת כוונה חברתית','ממסר סנסורי מן הגוף והפנים אל הקורטקס הראשוני',
        'Episodic-memory encoding, navigation, and place-cell formation','Face recognition, gaze direction, and social-intention inference','Sensory relay from body and face to primary cortex'],
      30: ['ויסות־יתר של vmPFC שמדכא את האמיגדלה ומחליש זיכרון איום','פעילות אמיגדלה נמוכה לצד קונטקסט היפוקמפלי חזק מדי','פגיעה מבודדת ב־V1 שיוצרת דריכות ללא שינוי ברשתות רגש',
        'Excessive vmPFC regulation suppressing amygdala and weakening threat memory','Low amygdala activity with excessively strong hippocampal context','Isolated V1 damage causing vigilance without emotional-network change']
    },
    lesson5: {
      21: ['הוא תחנת הפלט העיקרית מן ההיפוקמפוס אל הגופים הממילריים','הוא מאחסן לבדו זיכרון אפיזודי קבוע לאחר קונסולידציה','הוא מעביר מידע מן האמיגדלה ישירות לקורטקס המוטורי',
        'It is the main hippocampal output route to mammillary bodies','It alone stores permanent episodic memories after consolidation','It transfers amygdala information directly to motor cortex'],
      22: ['הוא שומר כל רכיב בנפרד כדי למנוע ערבוב בין הקשרים','הוא מוסיף רק ערך רגשי לזיכרון שכבר נבנה בקורטקס','הוא מקודד מיומנות מוטורית בלי גישה לזמן ולמקום',
        'It stores each component separately to prevent contextual binding','It adds only emotional value to a memory already built in cortex','It encodes motor skill without access to time or place'],
      23: ['היפוקמפוס ← אמיגדלה ← סטריאטום ← קורטקס מוטורי','היפוקמפוס ← אנטוריינל ← V1 ← תלמוס','היפוקמפוס ← גופים ממילריים ← פורניקס ← סינגולייט',
        'Hippocampus → amygdala → striatum → motor cortex','Hippocampus → entorhinal cortex → V1 → thalamus','Hippocampus → mammillary bodies → fornix → cingulate'],
      24: ['רק ההיפוקמפוס מקודד זיכרון; פגיעות אחרות משפיעות רק על שליפה','אמנזיה נגרמת תמיד מפגיעה דו־צדדית באמיגדלה','כל צומת במעגל מאחסן אותו זיכרון בשלמותו ולכן פגיעה באחד מוחקת הכול',
        'Only hippocampus encodes memory; other lesions affect retrieval alone','Amnesia always requires bilateral amygdala damage','Every circuit node stores the whole memory, so one lesion erases everything'],
      25: ['זיהוי איומים מהירים והפעלת תגובה אוטונומית','קידוד זהות אובייקטים במסלול הוונטרלי','עיכוב תגובות מוטוריות דרך המסלול ההייפרדיירקט',
        'Rapid threat detection and autonomic response activation','Object-identity coding in the ventral stream','Motor-response inhibition through the hyperdirect pathway'],
      26: ['ידע כללי נטול זמן ומקום שנשמר ללא הקשר אישי','מיומנות שנרכשת בהדרגה ונמדדת בביצוע בלי היזכרות מודעת','תגובה רגשית מותנית שאינה כוללת פרטי אירוע',
        'General knowledge without time, place, or personal context','A gradually acquired skill measured in performance without conscious recall','A conditioned emotional response without event details'],
      27: ['אובדן כל למידה חדשה, כולל מיומנויות והרגלים','אמנזיה רטרוגרדית מוחלטת לכל החיים לצד יצירת זיכרונות חדשים','אובדן זיכרון עבודה בלבד בעוד זיכרון אפיזודי חדש נשמר',
        'Loss of all new learning, including skills and habits','Complete lifelong retrograde amnesia with preserved new learning','Working-memory loss alone with intact new episodic memory'],
      28: ['הוא זכר כל אימון אך ביצועו לא השתפר לאורך זמן','השיפור נבע מזיכרון אפיזודי מפורש של אסטרטגיית הציור','הוא למד רק לאחר שהוסבר לו שהשתתף באימון קודם',
        'He remembered every session but his performance never improved','Improvement came from explicit episodic memory of the drawing strategy','He learned only after being told about prior training'],
      29: ['נוירונים באנטוריינל היוצרים רשת משושים של מרחק וכיוון','נוירונים באמיגדלה שפועלים רק מול מקום מאיים','נוירונים ב־PFC שפועלים כאשר אדם מתכנן מסלול עתידי',
        'Entorhinal neurons forming a hexagonal map of distance and direction','Amygdala neurons firing only in threatening locations','PFC neurons firing whenever a person plans a future route'],
      30: ['האמיגדלה, ולכן הסימן הראשון הוא אובדן תגובת פחד','הקורטקס המוטורי, ולכן הסימן הראשון הוא קושי בהתחלת תנועה','ה־OFC, ולכן הסימן הראשון הוא חוסר עדכון ערך תגמול',
        'Amygdala, making loss of fear response the first sign','Motor cortex, making movement-initiation difficulty the first sign','OFC, making failure to update reward value the first sign']
    },
    lesson6: {
      21: ['תאי VTA מתנוונים ולכן נפסק דופמין לנוקליוס אקומבנס בלבד','תאי הסטריאטום מייצרים עודף דופמין שמדכא את המסלול הישיר','ה־STN מפסיק לפעול ולכן אין אפשרות לעצור תנועות לא רצויות',
        'VTA cells degenerate, stopping dopamine only to nucleus accumbens','Striatal cells produce excess dopamine that suppresses the direct pathway','The STN stops functioning, preventing suppression of unwanted movement'],
      22: ['המסלול הישיר פעיל מדי ומעכב את התלמוס יותר מן הרגיל','ה־STN אינו מסוגל להפעיל עצירת חירום ולכן כל פעולה מתחילה מיד','הקורטקס המוטורי אינו מייצר עוד פקודות, ללא קשר לבזאל גנגליה',
        'The direct pathway is overactive and inhibits thalamus more than usual','The STN cannot trigger emergency stopping, so every action begins immediately','Motor cortex no longer generates commands, independently of basal ganglia'],
      23: ['מסלול איטי מן הקורטקס דרך הסטריאטום ו־GPe אל STN','מסלול מן VTA לנוקליוס אקומבנס שמחשב טעות ניבוי','מסלול מן SNc לקורטקס המוטורי שאינו עובר בתלמוס',
        'A slow cortical route through striatum and GPe to STN','A VTA-to-accumbens route computing prediction error','An SNc-to-motor-cortex route bypassing thalamus'],
      24: ['עיכוב המסלול הישיר כדי למנוע בחירת פעולה','הפעלת המסלול העקיף כדי להגביר בלימה כללית','אות טעות ניבוי שלילי כאשר תגמול צפוי אינו מתקבל',
        'Inhibiting the direct pathway to prevent action selection','Activating the indirect pathway to increase global braking','A negative prediction-error signal when expected reward is omitted'],
      25: ['גרעין בסטריאטום שמקבל דופמין מן הסובסטנציה ניגרה','גרעין תלמי שממסר תגמול ישירות ל־OFC','אזור קורטיקלי מדיאלי שמחשב ערך אישי',
        'A striatal nucleus receiving dopamine from substantia nigra','A thalamic nucleus relaying reward directly to OFC','A medial cortical area computing personal value'],
      26: ['הוא מייצר דופמין ומלמד את VTA מה היה התגמול','הוא משמש רק כגרעין מוטורי במסלול הניגרו־סטריאטלי','הוא מחזיק זיכרונות אפיזודיים של תגמול ללא השפעה על פעולה',
        'It produces dopamine and teaches the VTA what the reward was','It serves only as a motor nucleus in the nigrostriatal pathway','It stores episodic reward memories without influencing action'],
      27: ['כמות ההנאה המוחלטת מכל תגמול ללא תלות בציפייה','הערך המוסרי של פעולה כפי שמחושב ב־vmPFC','הפער בין רצייה להנאה ללא קשר לזמן הופעת התגמול',
        'The absolute pleasure of every reward regardless of expectation','The moral value of an action computed by vmPFC','The gap between wanting and liking regardless of reward timing'],
      28: ['wanting הוא הנאה מודעת; liking הוא המאמץ להשיג את הפרס','שני המושגים תלויים בדופמין באותה מידה ולכן אי אפשר להפרידם','liking נוצר רק ב־PFC ו־wanting רק בהיפוקמפוס',
        'Wanting is conscious pleasure; liking is effort to obtain reward','Both depend equally on dopamine and cannot be dissociated','Liking arises only in PFC and wanting only in hippocampus'],
      29: ['המסלול המזולימבי מן VTA לנוקליוס אקומבנס','המסלול המזוקורטיקלי מן VTA ל־PFC','המסלול התלמו־קורטיקלי מ־VPL לקורטקס הסומטוסנסורי',
        'The mesolimbic pathway from VTA to nucleus accumbens','The mesocortical pathway from VTA to PFC','The thalamocortical pathway from VPL to somatosensory cortex'],
      30: ['כל מידע חושי עובר בו ללא סינון וללא משוב קורטיקלי','הוא גרעין יחיד בעל תפקיד אחיד בכל המודאליות','תפקידו מסתכם בהעברת מידע סנסורי ראשוני ואינו כולל עוררות',
        'All sensory information passes through it without filtering or cortical feedback','It is one nucleus with a uniform function across modalities','Its role is limited to primary sensory relay and excludes arousal']
    }
  };

  Object.entries(sets).forEach(function ([lessonKey, lessonSets]) {
    Object.entries(lessonSets).forEach(function ([id, values]) {
      const question = questionBank[lessonKey].find(function (item) { return item.id === Number(id); });
      if (!question || !question.i18n || !question.i18n.en) return;
      question.options = [question.options[question.correctAnswer], values[0], values[1], values[2]];
      question.i18n.en.options = [question.i18n.en.options[question.correctAnswer], values[3], values[4], values[5]];
      question.correctAnswer = 0;
    });
  });
})();
