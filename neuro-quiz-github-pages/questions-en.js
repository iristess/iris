// English question translations. These attach to the Hebrew source questions by bank key and question id.
(function () {
  const translations = {
    lesson1: {
      1: {
        topic: 'Introduction and History',
        question: "What was Gall's central contribution to thinking about the brain?",
        options: [
          'He advanced the idea that different brain regions do different things',
          'He showed that function mainly depends on connections between distant regions',
          'He claimed that the entire cortex participates equally in every function',
          'He was the first to link aphasia to damage in the frontal lobe'
        ],
        explanation: 'In the document, Gall is presented as someone who promoted modular thinking, even though phrenology itself is not valid.'
      },
      2: {
        topic: 'Introduction and History',
        question: 'What emphasis did Wernicke add after Broca?',
        options: [
          'A function is understood as a network of several regions',
          'Connections between regions matter, not only a single focus',
          'He advanced the idea that different brain regions do different things',
          'Between the frontal and parietal lobes'
        ],
        explanation: 'Wernicke emphasized that circuits and connections between regions influence function.'
      },
      3: {
        topic: 'Introduction and History',
        question: 'What characterizes the contemporary network approach?',
        options: [
          'A function is understood as a network of several regions',
          'Connections between regions matter, not only a single focus',
          'He advanced the idea that different brain regions do different things',
          'Between the frontal and parietal lobes'
        ],
        explanation: 'The document emphasizes a middle path: different regions work together as a network that supports a function.'
      },
      4: {
        topic: 'Planes and Directions',
        question: 'Which section is especially useful for seeing internal structures such as the corpus callosum, thalamus, and brainstem?',
        options: [
          'Sagittal',
          'Coronal',
          'Axial',
          'Oblique section'
        ],
        explanation: 'The sagittal section is useful for viewing internal structures along the midline.'
      },
      5: {
        topic: 'Planes and Directions',
        question: 'Which section is especially useful for lateral regions such as the basal ganglia?',
        options: [
          'Coronal',
          'Sagittal',
          'The longitudinal fissure',
          'Above the midbrain, dorsal points toward the skull; in the brainstem, it points posteriorly'
        ],
        explanation: 'The document says that the coronal section is useful for lateral regions such as the basal ganglia.'
      },
      6: {
        topic: 'Planes and Directions',
        question: 'What is true about the meaning of dorsal above the midbrain compared with in the brainstem?',
        options: [
          'Anterior to the central sulcus and related to motor function',
          'Above the midbrain, dorsal points toward the skull; in the brainstem, it points posteriorly',
          'He advanced the idea that different brain regions do different things',
          'Separates the temporal lobe from the frontal/parietal structures above it'
        ],
        explanation: 'Because the neural axis bends, directional terms change meaning between the forebrain and the brainstem.'
      },
      7: {
        topic: 'Terminology',
        question: 'What does the central sulcus divide?',
        options: [
          'The two hemispheres',
          'The frontal and parietal lobes',
          'The temporal and occipital lobes',
          'The hippocampus and amygdala'
        ],
        explanation: 'The central sulcus separates the frontal lobe from the parietal lobe.'
      },
      8: {
        topic: 'Terminology',
        question: 'Where is the precentral gyrus located, and what is its function?',
        options: [
          'Posterior to the central sulcus and related to vision',
          'Anterior to the central sulcus and related to motor function',
          'Inside the hippocampus and related to memory',
          'In the brainstem and related to breathing'
        ],
        explanation: 'The precentral gyrus lies in front of the central sulcus and is the motor area.'
      },
      9: {
        topic: 'Terminology',
        question: 'What does the lateral/Sylvian fissure do?',
        options: [
          'Separates the temporal lobe from the frontal and parietal structures above it',
          'Separates the frontal lobe from the parietal lobe',
          'Separates the two hemispheres along the midline',
          'Separates the occipital lobe from the cerebellum'
        ],
        explanation: 'The Sylvian fissure separates the temporal lobe below from the regions above it.'
      },
      10: {
        topic: 'Terminology',
        question: 'Which fissure is the prominent one between the two hemispheres?',
        options: [
          'The calcarine sulcus',
          'The cingulate sulcus',
          'The longitudinal fissure',
          'Between the frontal and parietal lobes'
        ],
        explanation: 'The longitudinal fissure is the groove between the two hemispheres.'
      },
      11: {
        topic: 'Terminology',
        question: 'What lies above and below the calcarine sulcus?',
        options: [
          'Primary visual areas',
          'Primary somatosensory areas',
          'Primary auditory areas',
          'Primary motor areas'
        ],
        explanation: 'The document notes that primary visual areas are located above and below the calcarine sulcus.'
      },
      12: {
        topic: 'Histology',
        question: 'Which stain highlights cell bodies and cortical layers?',
        options: [
          'Golgi',
          'Nissl',
          'Myelin around axons',
          'Whole neurons are visible, but only a few cells'
        ],
        explanation: 'Nissl staining mainly stains cell bodies, so it is useful for identifying layers.'
      },
      13: {
        topic: 'Histology',
        question: 'What is the advantage of the Golgi method?',
        options: [
          'Whole neurons are visible, but only a few cells',
          'Myelin around axons',
          'High resolution and good distinction between gray and white matter',
          'Measuring fibers and directions of water/molecule movement'
        ],
        explanation: 'Golgi staining highlights the cell body, dendrites, and axons in a small number of cells.'
      },
      14: {
        topic: 'Histology',
        question: 'What does the Weigert method stain?',
        options: [
          'Dopamine receptors',
          'Myelin around axons',
          'Whole neurons are visible, but only a few cells',
          'Measuring fibers and directions of water/molecule movement'
        ],
        explanation: 'Weigert staining highlights myelin and therefore helps visualize pathways and connections.'
      },
      15: {
        topic: 'Research and Lesions',
        question: 'What does tract tracing allow?',
        options: [
          'Tracking the direction of connections and the targets of neuronal processes after tracer injection',
          'Measuring blood oxygenation changes during a cognitive task',
          'Estimating the direction of white-matter fibers from water diffusion in tissue',
          'Temporarily disrupting a cortical area using a magnetic field'
        ],
        explanation: 'The document describes injecting a substance in order to follow connections between cells and circuits.'
      },
      16: {
        topic: 'Research and Lesions',
        question: 'What is an important limitation of lesion studies?',
        options: [
          'Lesions vary in size, location, and timing, so direct causal inference is difficult',
          'Damage always reduces activity only at the injured anatomical focus',
          'Most lesion studies measure only functional connectivity and not behavior',
          'Brain damage affects all functions in the same way, regardless of location'
        ],
        explanation: 'Brain injuries vary across people and between the acute and chronic stages.'
      },
      17: {
        topic: 'Research and Lesions',
        question: 'What does TMS do in the context of a lesion?',
        options: [
          'Creates a temporary disruption or brief paralysis of a region',
          'Shows where substances injected into a neuron or axon arrive',
          'Lesions vary in size, region, and timing, making direct inference difficult',
          'Whole neurons are visible, but only a few cells'
        ],
        explanation: 'TMS can briefly disrupt activity in a specific area and thereby mimic a temporary lesion.'
      },
      18: {
        topic: 'Imaging',
        question: 'According to the document, what is the central advantage of structural MRI?',
        options: [
          'High resolution and good distinction between gray and white matter',
          'Measuring fibers and directions of water/molecule movement',
          'Whole neurons are visible, but only a few cells',
          'Showing where substances injected into a neuron or axon arrive'
        ],
        explanation: 'MRI is suitable for studies of volume, cortical thickness, and distinction between gray and white matter.'
      },
      19: {
        topic: 'Imaging',
        question: 'What does DTI allow?',
        options: [
          'Measuring fibers and directions of water/molecule movement',
          'High resolution and good distinction between gray and white matter',
          'Showing where substances injected into a neuron or axon arrive',
          'Whole neurons are visible, but only a few cells'
        ],
        explanation: 'DTI is an MRI-based method that estimates white-matter fibers according to diffusion directions.'
      },
      20: {
        topic: 'Imaging',
        question: 'Why is CT common in clinical practice?',
        options: [
          'Because it is relatively simple and can show blood/blood vessels with contrast material',
          'High resolution and good distinction between gray and white matter',
          'Measuring fibers and directions of water/molecule movement',
          'Lesions vary in size, region, and timing, making direct inference difficult'
        ],
        explanation: 'The document notes CT as a useful clinical tool, for example for bleeding and blood vessels.'
      },
      21: {
        topic: 'Neurons',
        question: 'Which neuron type is most common in the cerebral cortex?',
        options: [
          'Pyramidal neuron',
          'Stellate neuron',
          'Purkinje cell',
          'Granule cell'
        ],
        explanation: 'About three quarters of cortical cells are pyramidal cells.'
      },
      22: {
        topic: 'Neurons',
        question: 'Which neurotransmitter do pyramidal cells usually use?',
        options: [
          'Glutamate',
          'GABA',
          'Acetylcholine',
          'Dopamine'
        ],
        explanation: 'The document notes that pyramidal cells are glutamatergic and excitatory.'
      },
      23: {
        topic: 'Neurons',
        question: 'What characterizes stellate/granule cells?',
        options: [
          'Star-shaped processes and the ability to be glutamatergic or GABAergic',
          'A triangular cell body and a long axon that sends output to distant regions',
          'A single dendrite that branches in the cerebellar cortex and releases GABA',
          'Myelin formation around several axons in the central nervous system'
        ],
        explanation: 'Stellate cells are diverse and can be excitatory or inhibitory.'
      },
      24: {
        topic: 'Neurons',
        question: 'Where are Purkinje cells located?',
        options: [
          'In the cerebellum',
          'Pyramidal',
          'Glutamate',
          'Oligodendrocyte'
        ],
        explanation: 'Purkinje cells are mentioned as a cell type found in the cerebellum.'
      },
      25: {
        topic: 'Glia',
        question: 'What does an astrocyte do beyond structural support?',
        options: [
          'Regulates synapses and blood flow and transfers substances',
          'Increases synapses and blood flow and transfers substances',
          'Reduces synapses and blood flow and transfers substances',
          'Inhibits synapses and blood flow and transfers substances'
        ],
        explanation: 'Astrocytes are involved in synaptic communication, substance transfer, and regulation of blood flow.'
      },
      26: {
        topic: 'Glia',
        question: 'Which cell produces myelin in the central nervous system?',
        options: [
          'Oligodendrocyte',
          'Schwann cell',
          'Astrocyte',
          'Microglia'
        ],
        explanation: 'Oligodendrocytes wrap axons in myelin and speed conduction.'
      },
      27: {
        topic: 'Glia',
        question: 'What is an important role of microglia?',
        options: [
          'Immune defense and synaptic pruning',
          'Producing myelin around axons',
          'Regulating local blood flow according to neural activity',
          'Transmitting action potentials between cortical regions'
        ],
        explanation: 'Microglia move through the tissue and participate in immune defense and synaptic pruning.'
      },
      28: {
        topic: 'Astrocytes',
        question: 'What is the tripartite synapse?',
        options: [
          'An axon, a dendrite, and an astrocyte that surrounds the synapse',
          'An axon, a dendrite, and microglia that surround the synapse',
          'Three presynaptic neurons that release together',
          'A dendrite, an oligodendrocyte, and a blood vessel that replace the axon'
        ],
        explanation: 'The document describes a synapse in which the astrocyte also participates in regulating information transfer.'
      },
      29: {
        topic: 'Astrocytes',
        question: 'How are astrocytes related to the BOLD signal in fMRI?',
        options: [
          'They can regulate local blood flow according to neural activity',
          'Dopamine does not cross the blood-brain barrier well, so L-DOPA is given',
          'An axon, a dendrite, and an astrocyte around the synapse',
          'The region is probably related to the task through changes in activity and blood flow, but this alone does not prove causality'
        ],
        explanation: 'Synaptic activity can activate astrocytes, which dilate blood vessels and bring more blood to the region.'
      },
      30: {
        topic: 'Blood-Brain Barrier',
        question: "Why can't dopamine simply be given in Parkinson's disease?",
        options: [
          'Dopamine does not cross the blood-brain barrier well, so L-DOPA is given',
          'Glutamate does not cross the blood-brain barrier well, so L-DOPA is given',
          'GABA does not cross the blood-brain barrier well, so L-DOPA is given',
          'Serotonin does not cross the blood-brain barrier well, so L-DOPA is given'
        ],
        explanation: 'The document gives the example that L-DOPA crosses the barrier better than dopamine.'
      },
      31: {
        topic: 'Integration Questions',
        question: 'A patient has difficulty inferring brain damage from behavior because her damage is diffuse and changes over time. Which research limitation is illustrated here?',
        options: [
          'Difficulty inferring precise causality from natural lesion studies',
          'Proof that fMRI directly measures action potentials',
          'An advantage of a coronal section over a sagittal section',
          'Evidence that glia do not influence neural function'
        ],
        explanation: 'In natural lesions it is hard to control the size, location, and timing of injury, so inference about a single mechanism is limited.'
      },
      32: {
        topic: 'Integration Questions',
        question: 'An experiment finds a region showing increased BOLD during a memory task. What is the most cautious interpretation?',
        options: [
          'The region is probably related to the task through changes in activity and blood flow, but this alone does not prove causality',
          'Difficulty inferring precise causality from natural lesion studies',
          'Star-shaped processes and the ability to be glutamatergic or GABAergic',
          'They can regulate local blood flow according to neural activity'
        ],
        explanation: 'BOLD is an indirect measure of neural activity through oxygenation and blood, so it should be interpreted as part of a broader body of evidence.'
      },
      33: {
        topic: 'Brain Location Quiz',
        question: 'Where is the central sulcus located relative to the lobes?',
        options: [
          'Between the frontal lobe and the parietal lobe',
          'Between the two hemispheres along the midline',
          'Primary visual areas',
          'High resolution and good distinction between gray and white matter'
        ],
        explanation: 'The central sulcus separates frontal motor regions from parietal somatosensory regions.'
      }
    },
    lesson2: {
      1: {
        topic: 'Cytoarchitecture',
        question: 'What does cytoarchitecture mean?',
        options: [
          'Defining regions by cellular composition and organization',
          'Dividing regions by connectivity patterns between white-matter fibers',
          'Mapping regions by BOLD responses during different tasks',
          'Classifying regions by dominant neurotransmitter types'
        ],
        explanation: 'The document defines this as differences in cellular organization between brain regions.'
      },
      2: {
        topic: 'Networks',
        question: 'According to the lesson, what are nodes in a brain circuit?',
        options: [
          'The cortical regions',
          'The fibers that connect cortical regions',
          'The cortical layers within each region',
          'The thalamic nuclei that relay input to the cortex'
        ],
        explanation: 'The nodes are the regions, and the connections are the fibers between them.'
      },
      3: {
        topic: 'Cortical Layers',
        question: 'How many layers does the neocortex have?',
        options: [
          '6',
          '4',
          '5',
          '3'
        ],
        explanation: 'The neocortex is characterized by six layers.'
      },
      4: {
        topic: 'Cortical Layers',
        question: 'Which layer is the main input layer from the thalamus?',
        options: [
          '4',
          '2-3',
          '5',
          '6'
        ],
        explanation: 'Layer 4 receives most thalamo-cortical information.'
      },
      5: {
        topic: 'Cortical Layers',
        question: 'Which layers are mainly related to intra-cortical communication?',
        options: [
          '2-3',
          '4',
          '5',
          '6'
        ],
        explanation: 'Layers 2-3 transmit information between cortical areas.'
      },
      6: {
        topic: 'Cortical Layers',
        question: 'Where does layer 5 mainly send information?',
        options: [
          'To subcortical regions',
          'Mainly to nearby cortical regions in the same hemisphere',
          'Back to thalamic nuclei as feedback',
          'Mainly to layer 4 of the same cortical area'
        ],
        explanation: 'Layer 5 is an output layer to subcortical regions.'
      },
      7: {
        topic: 'Cortical Layers',
        question: 'What does layer 6 do?',
        options: [
          'Sends feedback to the thalamus',
          'Receives most thalamo-cortical input',
          'Sends the main output to subcortical nuclei',
          'Mainly mediates communication between cortical areas'
        ],
        explanation: 'Layer 6 sends feedback to the thalamus.'
      },
      8: {
        topic: 'Cortical Layers',
        question: 'What characterizes layer 1?',
        options: [
          'It receives top-down information from higher areas',
          'It receives most direct sensory input from the thalamus',
          'It sends most motor output to the brainstem',
          'It mainly contains large pyramidal cell bodies'
        ],
        explanation: 'The molecular layer receives top-down information.'
      },
      9: {
        topic: 'Functional Example',
        question: 'What is the difference between a somatosensory area and a motor area near the central sulcus?',
        options: [
          'In the motor area, layer 4 is smaller because it is an output area',
          'In the somatosensory area, layer 4 is smaller because it is an input area',
          'In the motor area, layers 2-3 are the main input layers from the thalamus',
          'In the somatosensory area, layer 5 is larger because it is a motor output area'
        ],
        explanation: 'Layer structure reflects the difference between sensory input and motor output.'
      },
      10: {
        topic: 'Brodmann',
        question: "What is the principle of Brodmann's map?",
        options: [
          'Regions that look different under the microscope probably do different things',
          'Regions connected to the same thalamic nucleus necessarily perform the same function',
          'Regions with the same cortical thickness always belong to the same sensory system',
          'Anatomically adjacent regions necessarily share the same cellular organization'
        ],
        explanation: 'Brodmann divided regions according to microscopic appearance and cellular organization.'
      },
      11: {
        topic: 'Brodmann',
        question: 'According to the document, how many areas did Brodmann color in the classical map?',
        options: [
          '12',
          '24',
          '52',
          '100'
        ],
        explanation: 'The document notes that Brodmann colored 52 areas.'
      },
      12: {
        topic: 'Modern Mapping',
        question: 'What is added today beyond cytoarchitecture?',
        options: [
          'Myeloarchitecture, connectivity, and fMRI',
          'About 95% of the cortex and it has 6 layers',
          'Intermediate, with a thin layer 4, mainly limbic',
          'All layers are relatively similar in size'
        ],
        explanation: 'Modern maps combine cellular structure, myelin, connectivity, and activity.'
      },
      13: {
        topic: 'Cortex Types',
        question: 'What characterizes granular areas?',
        options: [
          'A large and prominent layer 4',
          'Only three layers',
          'Intermediate, with a thin layer 4, mainly limbic',
          'All layers are relatively similar in size'
        ],
        explanation: 'Granular areas, mainly primary sensory areas, receive strong thalamic input.'
      },
      14: {
        topic: 'Cortex Types',
        question: 'Which areas tend to be agranular?',
        options: [
          'Motor areas',
          'Primary visual areas',
          'Only the hippocampus',
          'Only the corpus callosum'
        ],
        explanation: 'Motor areas are output areas, so layer 4 is small or absent in them.'
      },
      15: {
        topic: 'Cortex Types',
        question: 'What are eulaminate/isocortical areas?',
        options: [
          'Areas in which all layers are relatively similar in size',
          'Intermediate areas, with a thin layer 4, mainly limbic',
          'Areas with a large and prominent layer 4',
          'Genetically older cortex with 3-4 layers'
        ],
        explanation: 'In the document, they are described as areas with a relative balance between input and output.'
      },
      16: {
        topic: 'Cortex Types',
        question: 'What characterizes dysgranular areas?',
        options: [
          'Intermediate areas, with a thin layer 4, mainly limbic',
          'A large and prominent layer 4',
          'All layers are relatively similar in size',
          'Myeloarchitecture, connectivity, and fMRI'
        ],
        explanation: 'They are transition areas between neocortex and older cortex.'
      },
      17: {
        topic: 'Evolutionary Cortex',
        question: 'What is true about the neocortex?',
        options: [
          'It makes up about 95% of the cortex and has 6 layers',
          'It is found only in the hippocampus',
          'It is genetically older cortex with 3-4 layers',
          'All layers are relatively similar in size'
        ],
        explanation: 'The document notes that neocortex is most of the cortex and has six layers.'
      },
      18: {
        topic: 'Evolutionary Cortex',
        question: 'Which older cortex is related to smell and has fewer layers?',
        options: [
          'Paleocortex',
          'Neocortex',
          'Motor areas',
          'Genetically older cortex with 3-4 layers'
        ],
        explanation: 'The paleocortex is described as related to smell and having about three layers.'
      },
      19: {
        topic: 'Evolutionary Cortex',
        question: 'What is true about the hippocampus?',
        options: [
          'It is a genetically older region with 3-4 layers',
          'It is a primary motor area',
          'It makes up about 95% of the cortex and has 6 layers',
          'All layers are relatively similar in size'
        ],
        explanation: 'The hippocampus is described as an older part with fewer layers.'
      },
      20: {
        topic: 'Hierarchy',
        question: 'What are primary areas?',
        options: [
          'Sensory or motor areas with basic input/output',
          'Areas that integrate all senses',
          'Intermediate areas, with a thin layer 4, mainly limbic',
          'All layers are relatively similar in size'
        ],
        explanation: 'Primary areas deal with a basic modality or basic output.'
      },
      21: {
        topic: 'Hierarchy',
        question: 'What is a unimodal association area?',
        options: [
          'An area that processes one modality at a higher level',
          'An area that processes one modality at a lower level',
          'An area that processes one modality at a more stable level',
          'Fibers that connect areas within the same hemisphere'
        ],
        explanation: 'For example, visual areas V2/V4 receive information from V1 and process vision at a higher level.'
      },
      22: {
        topic: 'Hierarchy',
        question: 'What is a heteromodal area?',
        options: [
          'An area that receives information from several modalities and integrates it',
          'An area that processes one modality at a higher level',
          'Fibers from the cortex to subcortical regions or the body',
          'Fibers that connect areas within the same hemisphere'
        ],
        explanation: 'Prefrontal, parietal, and anterior temporal regions integrate diverse information.'
      },
      23: {
        topic: 'Parallel Pathways',
        question: 'What does the dorsal visual pathway do?',
        options: [
          'Processes where/how, location/action',
          'Identifies what',
          'Connects areas within the same hemisphere',
          'Processes one modality at a higher level'
        ],
        explanation: 'The dorsal pathway runs from occipital to parietal and frontal regions and is related to location/action.'
      },
      24: {
        topic: 'Parallel Pathways',
        question: 'What does the ventral visual pathway do?',
        options: [
          'Identifies object identity - "what"',
          'Maps location and movement - "where"',
          'Guides a motor response toward the stimulus',
          'Combines spatial attention with eye movements'
        ],
        explanation: 'The ventral pathway runs to temporal regions and is related to identification.'
      },
      25: {
        topic: 'White Matter',
        question: 'What are commissural fibers?',
        options: [
          'Fibers between the hemispheres',
          'Fibers that connect areas within the same hemisphere',
          'Fibers from the cortex to subcortical regions or the body',
          'Processing one modality at a higher level'
        ],
        explanation: 'Commissures such as the corpus callosum connect right and left.'
      },
      26: {
        topic: 'White Matter',
        question: 'What are association fibers?',
        options: [
          'Fibers that connect areas within the same hemisphere',
          'Fibers from the cortex to subcortical regions or the body',
          'Fibers between the hemispheres',
          'Processing one modality at a higher level'
        ],
        explanation: 'These are fibers between nearby or distant areas in the same hemisphere.'
      },
      27: {
        topic: 'White Matter',
        question: 'What are projection fibers?',
        options: [
          'Fibers from the cortex to subcortical regions or the body',
          'Fibers that connect areas within the same hemisphere',
          'Fibers between the hemispheres',
          'Receiving information from several modalities and integrating it'
        ],
        explanation: 'They carry information from the cortex to subcortical structures and back.'
      },
      28: {
        topic: 'Pathways',
        question: 'Which pathway connects Wernicke and Broca?',
        options: [
          'Arcuate fasciculus',
          'Conduction aphasia',
          'Damage to white-matter pathways or structural connectivity',
          'Fibers between the hemispheres'
        ],
        explanation: 'The arcuate fasciculus is important for language and repeating words.'
      },
      29: {
        topic: 'Pathways',
        question: 'Damage to the arcuate fasciculus may cause...',
        options: [
          'Conduction aphasia',
          'Arcuate fasciculus',
          'Damage to white-matter pathways or structural connectivity',
          'The difference between primary areas and association areas and the connectivity between them'
        ],
        explanation: 'The document describes difficulty repeating what was said despite relatively preserved comprehension and speech.'
      },
      30: {
        topic: 'Connectome',
        question: 'What does small-world network mean?',
        options: [
          'Regions can be reached in a few steps through modules and hubs',
          'Fibers from the cortex to subcortical regions or the body',
          'Receiving information from several modalities and integrating it',
          'Processing one modality at a higher level'
        ],
        explanation: 'The connectome is efficient: local modules and hubs connect them.'
      },
      31: {
        topic: 'Integration Questions',
        question: 'A person has difficulty transferring information between distant cortical areas, but the cortical areas themselves look relatively preserved. Which mechanism fits best?',
        options: [
          'Damage to white-matter pathways or structural connectivity',
          'The difference between primary areas and association areas and the connectivity between them',
          'Conduction aphasia',
          'Arcuate fasciculus'
        ],
        explanation: 'Lesson 2 emphasizes that white matter and the connectome enable communication between areas, so damage to them can disrupt integration.'
      },
      32: {
        topic: 'Integration Questions',
        question: 'In a sensory task, primary processing is intact but there is difficulty integrating the information into complex recognition. Which distinction from the lesson is relevant?',
        options: [
          'The difference between primary areas and association areas and the connectivity between them',
          'Damage to white-matter pathways or structural connectivity',
          'Conduction aphasia',
          'Regions can be reached in a few steps through modules and hubs'
        ],
        explanation: 'Primary areas extract basic features, while association areas and the connections between them support complex processing.'
      },
      33: {
        topic: 'Brain Location Quiz',
        question: 'Where is layer 4 located in the cortex relative to its general function?',
        options: [
          'Within the cortex, as an input layer that is especially prominent in sensory areas',
          'Sensory or motor areas with basic input/output',
          'Intermediate areas, with a thin layer 4, mainly limbic',
          'Myeloarchitecture, connectivity, and fMRI'
        ],
        explanation: 'Layer 4 is a cortical layer that receives a lot of thalamic input, especially in primary sensory areas.'
      }
    },
    lesson3: {
      1: {
        topic: 'PFC General',
        question: 'What is true about the PFC in humans?',
        options: [
          'It is a relatively late-maturing region',
          'It matures only in the womb',
          'It has no relation to executive control',
          'There is not always a clear boundary between them'
        ],
        explanation: 'The document notes that the PFC reaches maturity in the twenties.'
      },
      2: {
        topic: 'PFC General',
        question: 'Why is prefrontal damage psychologically interesting?',
        options: [
          'It can create complex difficulties in daily life despite intact IQ and language',
          'It is a relatively late-maturing region',
          'Poor decision-making and life changes despite intact speech and comprehension',
          'Knowing what needs to be done but struggling to plan and carry out a sequence of actions'
        ],
        explanation: 'The cases in the lesson show preserved basic function alongside problems in executive control and decision-making.'
      },
      3: {
        topic: 'Cases',
        question: 'What characterized the architect with dlPFC damage?',
        options: [
          'He knew what needed to be done but struggled to plan and carry out a sequence of actions',
          'Poor decision-making and life changes despite intact speech and comprehension',
          'More agranular/dysgranular and limbic',
          'More granular with six layers and layer 4'
        ],
        explanation: 'He struggled with everyday tasks such as shopping and planning despite understanding.'
      },
      4: {
        topic: 'Cases',
        question: 'What characterized the accountant with vmPFC damage?',
        options: [
          'Poor decision-making and life changes despite intact speech and comprehension',
          'Knowing what needs to be done but struggling to plan and carry out a sequence of actions',
          'There is not always a clear boundary between them',
          'More agranular/dysgranular and limbic'
        ],
        explanation: 'Ventromedial damage is described as difficulty with decisions and social/emotional life.'
      },
      5: {
        topic: 'PFC Anatomy',
        question: 'Which three central prefrontal regions appear in the lesson?',
        options: [
          'dlPFC, vmPFC, OFC',
          'V1, M1, LGN',
          'Hippocampus, thalamus, cerebellum',
          'Putamen, caudate, SN'
        ],
        explanation: 'The lesson divides the PFC into dorsolateral, ventromedial, and orbitofrontal regions.'
      },
      6: {
        topic: 'PFC Anatomy',
        question: 'What is true about the boundary between vmPFC and OFC?',
        options: [
          'There is not always a clear boundary between them',
          'They are in completely different lobes',
          'The OFC is located in the cerebellum',
          'It is a relatively late-maturing region'
        ],
        explanation: 'The document notes that related terms are sometimes used because the regions are adjacent.'
      },
      7: {
        topic: 'PFC Layers',
        question: 'What characterizes anterior lateral regions in the PFC?',
        options: [
          'They are more granular, with six layers and layer 4',
          'They are more agranular/dysgranular and limbic',
          'It is a relatively late-maturing region',
          'There is not always a clear boundary between them'
        ],
        explanation: 'The lateral regions are more related to cognitive control and externally focused processing.'
      },
      8: {
        topic: 'PFC Layers',
        question: 'What characterizes medial and orbital regions?',
        options: [
          'They are more agranular/dysgranular and limbic',
          'They are more granular, with six layers and layer 4',
          'Knowing what needs to be done but struggling to plan and carry out a sequence of actions',
          'It is a relatively late-maturing region'
        ],
        explanation: 'They are close to limbic cortex and receive internal and emotional information.'
      },
      9: {
        topic: 'dlPFC',
        question: 'Which Brodmann areas are associated with the dlPFC according to the document?',
        options: [
          'Mainly 9 and 46',
          '17 and 18',
          '41 and 42',
          'dlPFC, vmPFC, OFC'
        ],
        explanation: 'The dlPFC mainly includes BA 9 and 46, along with additional parts.'
      },
      10: {
        topic: 'dlPFC',
        question: 'With which structures is the dlPFC connected?',
        options: [
          'Parietal cortex, basal ganglia, hippocampus, and prefrontal regions',
          'Mainly 9 and 46',
          'dlPFC, vmPFC, OFC',
          'Poor decision-making and life changes despite intact speech and comprehension'
        ],
        explanation: 'The document details connections to parietal cortex, caudate/basal ganglia, hippocampus, and more.'
      },
      11: {
        topic: 'dlPFC',
        question: 'What is one central function of the dlPFC?',
        options: [
          'Working memory',
          'Breathing reflex',
          'Myelin production',
          'Blood filtration'
        ],
        explanation: 'In tasks that require holding information, this region remains active even after the stimulus is gone.'
      },
      12: {
        topic: 'dlPFC',
        question: 'What is cognitive control in the context of the dlPFC?',
        options: [
          'Planning, switching between tasks, and organizing behavior',
          'Posterior is more concrete, anterior is more abstract',
          'Working memory',
          'Cognitive flexibility and rule switching based on feedback'
        ],
        explanation: 'The document describes task planning and switching between tasks as cognitive control.'
      },
      13: {
        topic: 'dlPFC',
        question: 'What does the anterior-posterior gradient in the dlPFC represent?',
        options: [
          'Posterior is more concrete, anterior is more abstract',
          'Posterior is emotional and anterior is visual',
          'Working memory',
          'Cognitive flexibility and rule switching based on feedback'
        ],
        explanation: 'More posterior areas are related to concrete information, while more anterior areas are related to abstraction.'
      },
      14: {
        topic: 'dlPFC Clinical',
        question: 'What happened to Marcus after dorsolateral damage?',
        options: [
          'He struggled to prepare a lesson and return to the task after an interruption',
          'IQ, language, and basic memory can be preserved while decisions are impaired',
          'Posterior is more concrete, anterior is more abstract',
          'Cognitive flexibility and rule switching based on feedback'
        ],
        explanation: 'The case demonstrates a dysexecutive syndrome in everyday life.'
      },
      15: {
        topic: 'Tests',
        question: 'What does the Wisconsin task test?',
        options: [
          'Cognitive flexibility and rule switching based on feedback',
          'Posterior is more concrete, anterior is more abstract',
          'Difficulty preparing a lesson and returning to the task after an interruption',
          'IQ, language, and basic memory can be preserved while decisions are impaired'
        ],
        explanation: 'People with frontal damage struggle to abandon a previous rule even after feedback.'
      },
      16: {
        topic: 'Lateralization',
        question: 'Left dlPFC damage was linked more to...',
        options: [
          'Depression and negative mood',
          'Always extreme happiness',
          'Apathy and less concern',
          'Posterior is more concrete, anterior is more abstract'
        ],
        explanation: 'The document notes a link between left-sided damage and depression/withdrawal.'
      },
      17: {
        topic: 'Lateralization',
        question: 'Right dlPFC damage was linked more to...',
        options: [
          'Apathy and less concern',
          'Improved vision',
          'Depression and negative mood',
          'Posterior is more concrete, anterior is more abstract'
        ],
        explanation: 'The document describes an emotional difference between right and left lesions.'
      },
      18: {
        topic: 'vmPFC',
        question: 'What is true about the vmPFC after damage?',
        options: [
          'IQ, language, and basic memory can be preserved while decisions are impaired',
          'Difficulty preparing a lesson and returning to the task after an interruption',
          'Posterior is more concrete, anterior is more abstract',
          'Cognitive flexibility and rule switching based on feedback'
        ],
        explanation: 'vmPFC damage can leave basic cognitive abilities intact while impairing decision-making and emotion.'
      },
      19: {
        topic: 'vmPFC',
        question: 'Which Brodmann areas are mainly included in the vmPFC according to the document?',
        options: [
          '10, 14, 25, and part of 32',
          'Amygdala, hippocampus, ventral striatum, hypothalamus, and brainstem',
          'IQ, language, and basic memory can be preserved while decisions are impaired',
          'Mainly 9 and 46'
        ],
        explanation: 'The lesson details these medial and inferior areas.'
      },
      20: {
        topic: 'vmPFC Connectivity',
        question: 'With which structures is the vmPFC especially connected?',
        options: [
          'Amygdala, hippocampus, ventral striatum, hypothalamus, and brainstem',
          '10, 14, 25, and part of 32',
          'IQ, language, and basic memory can be preserved while decisions are impaired',
          'Difficulty preparing a lesson and returning to the task after an interruption'
        ],
        explanation: 'Its connectivity fits emotional processing, value, and bodily responses.'
      },
      21: {
        topic: 'vmPFC',
        question: 'What is a somatic marker in the context of the lesson?',
        options: [
          'A bodily/emotional signal that helps decision-making',
          'Self-processing, internal thought, and personal meaning',
          'Inhibiting the amygdala and helping regulate fear',
          'Estimating immediate value and updating what is worthwhile now'
        ],
        explanation: 'According to Damasio, the vmPFC integrates bodily markers into decisions.'
      },
      22: {
        topic: 'vmPFC',
        question: 'What is the role of vmPFC in fear extinction?',
        options: [
          'It inhibits the amygdala and helps regulate fear',
          'Self-processing, internal thought, and personal meaning',
          'Monitoring conflict, errors, effort, and motivation',
          'A bodily/emotional signal that helps decision-making'
        ],
        explanation: 'The vmPFC is important for reducing fear responses and for emotion regulation.'
      },
      23: {
        topic: 'vmPFC',
        question: 'Why is the vmPFC related to the Default Mode Network?',
        options: [
          'Self-processing, internal thought, and personal meaning',
          'It inhibits the amygdala and helps regulate fear',
          'A bodily/emotional signal that helps decision-making',
          'Continuing to choose immediate gain with future loss'
        ],
        explanation: 'The document links it to self-processing and personal meaning.'
      },
      24: {
        topic: 'Iowa',
        question: 'What characterizes vmPFC patients in the Iowa Gambling Task?',
        options: [
          'They continue choosing immediate gain with future loss',
          'Moral knowledge can be preserved while social-emotional application is impaired',
          'A more emotional-limbic part, related to treatment-resistant depression and emotion regulation',
          'Estimating immediate value and updating what is worthwhile now'
        ],
        explanation: 'They can explain the rule, but in practice they continue making decision errors.'
      },
      25: {
        topic: 'Phineas Gage',
        question: 'What was relatively preserved in Gage after the injury?',
        options: [
          'Language, basic memory, and general thinking',
          'Moral knowledge can be preserved while social-emotional application is impaired',
          'Estimating immediate value and updating what is worthwhile now',
          'Continuing to choose immediate gain with future loss'
        ],
        explanation: 'The central change was in personality, impulsivity, and social functioning.'
      },
      26: {
        topic: 'Acquired Sociopathy',
        question: 'What is meant by acquired sociopathy after vmPFC damage?',
        options: [
          'Moral knowledge can be preserved while social-emotional application is impaired',
          'Continuing to choose immediate gain with future loss',
          'Language, basic memory, and general thinking',
          'A more emotional-limbic part, related to treatment-resistant depression and emotion regulation'
        ],
        explanation: 'The difficulty is acting according to moral/social judgment in real time.'
      },
      27: {
        topic: 'OFC',
        question: 'What is the central role of the OFC?',
        options: [
          'Estimating immediate value and updating what is worthwhile now',
          'Continuing to choose immediate gain with future loss',
          'Language, basic memory, and general thinking',
          'Prefrontal control networks, especially DLPFC and ACC'
        ],
        explanation: 'The OFC evaluates the value of stimuli in real time and updates according to context.'
      },
      28: {
        topic: 'OFC vs vmPFC',
        question: 'Which phrasing fits the difference between OFC and vmPFC?',
        options: [
          'OFC: how good is this right now; vmPFC: is this right for me',
          'Estimating immediate value and updating what is worthwhile now',
          'Moral knowledge can be preserved while social-emotional application is impaired',
          'A more emotional-limbic part, related to treatment-resistant depression and emotion regulation'
        ],
        explanation: 'This summarizes the lesson distinction between immediate value and personal meaning.'
      },
      29: {
        topic: 'ACC',
        question: 'What does dACC do?',
        options: [
          'Monitors conflict, errors, effort, and motivation',
          'Inhibits the amygdala and helps regulate fear',
          'A more emotional-limbic part, related to treatment-resistant depression and emotion regulation',
          'Continuing to choose immediate gain with future loss'
        ],
        explanation: 'The dACC is related to conflict, effort, and cost-benefit weighing.'
      },
      30: {
        topic: 'ACC',
        question: 'What characterizes sgACC?',
        options: [
          'A more emotional-limbic part, related to treatment-resistant depression and emotion regulation',
          'Continuing to choose immediate gain with future loss',
          'Moral knowledge can be preserved while social-emotional application is impaired',
          'Prefrontal control networks, especially DLPFC and ACC'
        ],
        explanation: 'The sgACC is described as an emotional part related to depression and deep brain stimulation.'
      },
      31: {
        topic: 'Integration Questions',
        question: 'A person understands rules but struggles to stop an immediate response and choose an action that fits a long-term goal. Which system may be impaired?',
        options: [
          'Prefrontal control networks, especially DLPFC and ACC',
          'OFC or vmPFC',
          'Moral knowledge can be preserved while social-emotional application is impaired',
          'Continuing to choose immediate gain with future loss'
        ],
        explanation: 'Executive functions rely on prefrontal areas that hold goals, monitor conflict, and regulate responses.'
      },
      32: {
        topic: 'Integration Questions',
        question: 'A patient makes risky social decisions despite preserved IQ and struggles to use the emotional value of future outcomes. Which region fits best?',
        options: [
          'OFC or vmPFC',
          'Prefrontal control networks, especially DLPFC and ACC',
          'Language, basic memory, and general thinking',
          'Estimating immediate value and updating what is worthwhile now'
        ],
        explanation: 'OFC and vmPFC are related to value, emotion, and outcomes of choices, so damage to them can appear as maladaptive decisions.'
      },
      33: {
        topic: 'Brain Location Quiz',
        question: 'Where is the PFC generally located?',
        options: [
          'In the anterior part of the frontal lobe',
          'In the posterior part of the occipital lobe',
          'Planning, switching between tasks, and organizing behavior',
          'Cognitive flexibility and rule switching based on feedback'
        ],
        explanation: 'The prefrontal cortex is located at the front of the frontal lobe and supports control, planning, and decision-making.'
      }
    },
    lesson4: {
      1: {
        topic: 'Limbic System',
        question: 'Why was the Papez circuit historically important?',
        options: [
          'It proposed that emotion works as a circuit rather than in a single region',
          'Information from the sense of smell',
          'Output to the hypothalamus and brainstem for autonomic responses',
          'It is simplistic and does not reflect the true evolution of brain regions'
        ],
        explanation: 'Papez advanced circuit-based thinking, even though today the circuit is linked more strongly to memory.'
      },
      2: {
        topic: 'Papez Circuit',
        question: 'Which fiber leaves the hippocampus in the Papez circuit?',
        options: [
          'Fornix',
          'Arcuate',
          'Memory',
          'A collection of nuclei'
        ],
        explanation: 'The fornix exits the hippocampus toward the mammillary bodies.'
      },
      3: {
        topic: 'Papez Circuit',
        question: 'Which function is the Papez circuit more strongly associated with today?',
        options: [
          'Memory',
          'Hearing',
          'Fornix',
          'Output to the hypothalamus and brainstem for autonomic responses'
        ],
        explanation: 'The document emphasizes that today the circuit is understood more as related to memory than only to emotion.'
      },
      4: {
        topic: 'MacLean',
        question: "What is the problem with MacLean's triune brain model?",
        options: [
          'It is simplistic and does not reflect the true evolution of brain regions',
          'It refers only to visual cortex',
          'Brainstem and basal ganglia',
          'There is no single agreed and clear definition'
        ],
        explanation: 'The document explains that brain layers were not simply added one on top of another in that way.'
      },
      5: {
        topic: 'MacLean',
        question: 'What did MacLean call the reptilian brain?',
        options: [
          'Brainstem and basal ganglia',
          'Corpus callosum',
          'It is simplistic and does not reflect the true evolution of brain regions',
          'There is no single agreed and clear definition'
        ],
        explanation: 'In his model, the basic system included the brainstem and basal ganglia.'
      },
      6: {
        topic: 'Limbic',
        question: 'What is true about the definition of the limbic system?',
        options: [
          'There is no single agreed and clear definition',
          'It includes only the amygdala',
          'It includes only the optic nerve',
          'It is always without cortex'
        ],
        explanation: 'The document emphasizes that the limbic boundary is not sharply defined.'
      },
      7: {
        topic: 'Amygdala',
        question: 'What is the amygdala anatomically?',
        options: [
          'A collection of nuclei',
          'One cortical layer',
          'A single fiber',
          'A brain ventricle'
        ],
        explanation: 'The amygdala is a collection of nuclei and subnuclei.'
      },
      8: {
        topic: 'Amygdala',
        question: 'What does the basolateral complex do?',
        options: [
          'Receives sensory information and serves as a CS-US convergence site in fear conditioning',
          'Output to the hypothalamus and brainstem for autonomic responses',
          'Information from the sense of smell',
          'It is simplistic and does not reflect the true evolution of brain regions'
        ],
        explanation: 'The basolateral complex receives input from the thalamus and cortex and participates in forming associations.'
      },
      9: {
        topic: 'Amygdala',
        question: 'What does the central nucleus do?',
        options: [
          'Output to the hypothalamus and brainstem for autonomic responses',
          'Receives sensory information and serves as a CS-US convergence site in fear conditioning',
          'Information from the sense of smell',
          'A collection of nuclei'
        ],
        explanation: 'The central nucleus carries out bodily fear responses.'
      },
      10: {
        topic: 'Amygdala',
        question: 'What is the medial nucleus related to?',
        options: [
          'Information from the sense of smell',
          'Abstract planning',
          'A collection of nuclei',
          'It proposed that emotion works as a circuit rather than in a single region'
        ],
        explanation: 'The medial nucleus is less studied in humans and is related to olfaction.'
      },
      11: {
        topic: 'LeDoux',
        question: "What is LeDoux's dual pathway?",
        options: [
          'A fast thalamus-amygdala pathway and a slower pathway through cortex',
          'Part of the extended amygdala and more related to anxiety',
          'Detecting salience/meaning of stimuli',
          'It can modulate consolidation of emotional memories through its connection to the hippocampus'
        ],
        explanation: 'The fast pathway is coarse and rapid, and the cortical pathway is slower and more precise.'
      },
      12: {
        topic: 'Fear Conditioning',
        question: 'What converges in the amygdala during classical conditioning?',
        options: [
          'CS and US',
          'MRI and CT',
          'Amygdala damage due to Urbach-Wiethe disease',
          'This is new learning and not complete erasure of conditioning'
        ],
        explanation: 'The lateral amygdala links the conditioned stimulus with the unconditioned stimulus.'
      },
      13: {
        topic: 'Extinction',
        question: 'What is true about fear extinction?',
        options: [
          'It is new learning and not complete erasure of conditioning',
          'Amygdala damage due to Urbach-Wiethe disease',
          'Providing context and regulating the amygdala',
          'Part of the extended amygdala and more related to anxiety'
        ],
        explanation: 'The document emphasizes that the original learning remains and the response decreases through another mechanism.'
      },
      14: {
        topic: 'Extinction',
        question: 'What is the role of prefrontal regions in extinction?',
        options: [
          'Providing context and regulating the amygdala',
          'It is new learning and not complete erasure of conditioning',
          'Detecting salience/meaning of stimuli',
          'Deep in the medial temporal lobe'
        ],
        explanation: 'vmPFC/OFC can help reduce fear output according to context.'
      },
      15: {
        topic: 'Amygdala',
        question: 'What is one broad function of the amygdala beyond fear?',
        options: [
          'Detecting salience/meaning of stimuli',
          'Part of the extended amygdala and more related to anxiety',
          'A fast thalamus-amygdala pathway and a slower pathway through cortex',
          'Deep in the medial temporal lobe'
        ],
        explanation: 'The amygdala signals that something is new or meaningful, not only fear.'
      },
      16: {
        topic: 'Amygdala and Memory',
        question: 'How is the amygdala related to episodic memory?',
        options: [
          'It can modulate consolidation of emotional memories through its connection to the hippocampus',
          'Brain growth and compression of space inside the skull create C-shaped structures',
          'Detecting salience/meaning of stimuli',
          'Deep in the medial temporal lobe'
        ],
        explanation: 'Emotion can strengthen memory consolidation through the influence of the amygdala.'
      },
      17: {
        topic: 'SM',
        question: 'What characterized patient SM?',
        options: [
          'Amygdala damage due to Urbach-Wiethe disease',
          'It is new learning and not complete erasure of conditioning',
          'Recognizing fear in facial expressions and experiencing fear',
          'Part of the extended amygdala and more related to anxiety'
        ],
        explanation: 'SM is a classic case of amygdala damage.'
      },
      18: {
        topic: 'SM',
        question: 'Which prominent difficulty appears without the amygdala in the SM case?',
        options: [
          'Recognizing fear in facial expressions and experiencing fear',
          'Amygdala damage due to Urbach-Wiethe disease',
          'Providing context and regulating the amygdala',
          'Detecting salience/meaning of stimuli'
        ],
        explanation: 'The document emphasizes impaired recognition and experience of fear, alongside relatively preserved cognitive function.'
      },
      19: {
        topic: 'C Shape',
        question: 'Why do the hippocampus and its fibers take on a curved shape?',
        options: [
          'Brain growth and compression of space inside the skull create C-shaped structures',
          'It can modulate consolidation of emotional memories through its connection to the hippocampus',
          'A fast thalamus-amygdala pathway and a slower pathway through cortex',
          'Part of the extended amygdala and more related to anxiety'
        ],
        explanation: 'Temporal/frontal growth creates structures around the thalamus.'
      },
      20: {
        topic: 'BNST',
        question: 'What is the BNST in relation to the amygdala?',
        options: [
          'Part of the extended amygdala and more related to anxiety',
          'A fast thalamus-amygdala pathway and a slower pathway through cortex',
          'Detecting salience/meaning of stimuli',
          'It is new learning and not complete erasure of conditioning'
        ],
        explanation: 'The BNST is described as an "additional amygdala," similar but related to sustained anxiety.'
      },
      21: {
        topic: 'Fear vs Anxiety',
        question: 'According to the lesson, what is the central difference between fear and anxiety?',
        options: [
          'Fear: is the stimulus dangerous; anxiety: is the situation dangerous',
          'Amygdala and BNST hyperactivity alongside weak prefrontal regulation',
          'A posterior-to-anterior gradient: bodily representation to awareness/emotion',
          'Amygdala/insula/BNST may be hyperactive and vmPFC/sgACC less regulatory'
        ],
        explanation: 'The amygdala is related to acute fear alarm, while the BNST is related to a more sustained sense of danger.'
      },
      22: {
        topic: 'BNST',
        question: 'What does the light-enhanced startle experiment show?',
        options: [
          'The BNST is involved in increasing startle over time',
          'A primary interoceptive region, more granular',
          'A posterior-to-anterior gradient: bodily representation to awareness/emotion',
          'Fear: is the stimulus dangerous; anxiety: is the situation dangerous'
        ],
        explanation: 'Damage to the BNST cancels the sustained effect of light on the startle reflex.'
      },
      23: {
        topic: 'Insula',
        question: 'Where is the insula located?',
        options: [
          'Hidden between the frontal and temporal lobes',
          'The same areas participate in our own feeling and in the feeling another person experiences',
          'A primary interoceptive region, more granular',
          'More dysgranular and involved in integration and awareness of sensation'
        ],
        explanation: 'The insula is hidden by the operculum between the frontal and temporal lobes.'
      },
      24: {
        topic: 'Insula',
        question: 'What characterizes the posterior insula?',
        options: [
          'A primary interoceptive region, more granular',
          'More dysgranular and involved in integration and awareness of sensation',
          'A posterior-to-anterior gradient: bodily representation to awareness/emotion',
          'Fear: is the stimulus dangerous; anxiety: is the situation dangerous'
        ],
        explanation: 'The posterior part processes internal bodily information in a somatotopic way.'
      },
      25: {
        topic: 'Insula',
        question: 'What characterizes the anterior insula?',
        options: [
          'More dysgranular and involved in integration and awareness of sensation',
          'A primary interoceptive region, more granular',
          'Integration in the insula between bodily input and conscious emotional experience',
          'Fear: is the stimulus dangerous; anxiety: is the situation dangerous'
        ],
        explanation: 'The anterior part integrates context and is linked to "how I feel."'
      },
      26: {
        topic: 'Insula',
        question: 'Which primary sense is processed in the insula?',
        options: [
          'Taste',
          'Smell',
          'Hearing',
          'Vision'
        ],
        explanation: 'The document notes that the primary taste cortex is located in the insula.'
      },
      27: {
        topic: 'Insula',
        question: 'Why is the insula related to empathy?',
        options: [
          'The same areas participate in our own feeling and in the feeling another person experiences',
          'It is hidden between the frontal and temporal lobes',
          'It is more dysgranular and involved in integration and awareness of sensation',
          'It is a primary interoceptive region, more granular'
        ],
        explanation: 'The document presents empathy as activation of areas involved in internal experience.'
      },
      28: {
        topic: 'Craig Model',
        question: 'What does Craig’s model propose about the insula?',
        options: [
          'A posterior-to-anterior gradient: bodily representation to awareness/emotion',
          'Fear: is the stimulus dangerous; anxiety: is the situation dangerous',
          'A primary interoceptive region, more granular',
          'More dysgranular and involved in integration and awareness of sensation'
        ],
        explanation: 'The model describes a transition from bodily sensory representation to emotional awareness.'
      },
      29: {
        topic: 'Cingulate',
        question: 'What are general functions of the cingulate cortex?',
        options: [
          'Conflict, pain, motivation, and self-reference',
          'Hidden between the frontal and temporal lobes',
          'A primary interoceptive region, more granular',
          'The BNST is involved in increasing startle over time'
        ],
        explanation: 'The document introduces the cingulate around conflict, pain, motivation, and self.'
      },
      30: {
        topic: 'Emotion Regulation',
        question: 'According to the circuits described, what happens in PTSD?',
        options: [
          'Hyperactivity in the amygdala, insula, and BNST alongside weak vmPFC and sgACC regulation',
          'Low activity in the amygdala and BNST alongside excessive vmPFC and sgACC regulation',
          'Hyperactivity in the hippocampus alongside complete suppression of the amygdala and insula',
          'Normal activity in the threat network alongside isolated damage to motor cortex'
        ],
        explanation: 'The lesson links PTSD to weak prefrontal regulation, strong fear, and impaired contextual memory.'
      },
      31: {
        topic: 'Integration Questions',
        question: 'A person responds with strong anxiety to ambiguous stimuli and has difficulty distinguishing real threat from ongoing uncertainty. Which combination fits best?',
        options: [
          'Amygdala and BNST hyperactivity alongside weak prefrontal regulation',
          'Amygdala and BNST hypoactivity alongside weak prefrontal regulation',
          'Normal amygdala and BNST activity alongside weak prefrontal regulation',
          'Integration in the insula between bodily input and conscious emotional experience'
        ],
        explanation: 'The amygdala is related to acute and salient threat, the BNST to sustained threat and uncertainty, and the PFC helps regulate them.'
      },
      32: {
        topic: 'Integration Questions',
        question: 'A patient detects a strong bodily sensation during emotion but struggles to interpret it as part of an internal state. Which mechanism may be impaired?',
        options: [
          'Integration in the insula between bodily input and conscious emotional experience',
          'Amygdala and BNST hyperactivity alongside weak prefrontal regulation',
          'More dysgranular and involved in integration and awareness of sensation',
          'Fear: is the stimulus dangerous; anxiety: is the situation dangerous'
        ],
        explanation: 'The insula integrates interoceptive information with emotional awareness, so damage there can disrupt interpretation of internal sensations.'
      },
      33: {
        topic: 'Brain Location Quiz',
        question: 'Where is the amygdala located?',
        options: [
          'Deep in the medial temporal lobe',
          'Deep in the medial frontal lobe near the ACC',
          'In the diencephalon, above the hypothalamus and on both sides of the third ventricle',
          'In the insular cortex beneath the operculum'
        ],
        explanation: 'The amygdala is a deep limbic structure in the medial temporal region, near the memory system.'
      }
    },
    lesson5: {
      1: {
        topic: 'Hippocampus',
        question: 'What is the hippocampal formation?',
        options: [
          'A set of structures that work together, not a single thing',
          'Entorhinal -> dentate -> CA3 -> CA1',
          'Parts of the hippocampus/hippocampal formation',
          'Parahippocampal, entorhinal, and perirhinal'
        ],
        explanation: 'The document opens by noting that the hippocampus is a set of parts.'
      },
      2: {
        topic: 'MTL',
        question: 'Which cortical regions are located near the hippocampus and feed information into it?',
        options: [
          'Parahippocampal, entorhinal, and perirhinal',
          'Pyramidal cells',
          'A set of structures that work together, not a single thing',
          'Regions near the hippocampus receive olfactory information'
        ],
        explanation: 'These are the cortices that feed information into the hippocampus.'
      },
      3: {
        topic: 'Smell and Memory',
        question: 'Why can smell be a strong trigger for memory?',
        options: [
          'Regions near the hippocampus receive olfactory information',
          'Parts of the hippocampus/hippocampal formation',
          'Parahippocampal, entorhinal, and perirhinal',
          'A set of structures that work together, not a single thing'
        ],
        explanation: 'The document notes that the olfactory nerve reaches areas not far from the regions surrounding the hippocampus.'
      },
      4: {
        topic: 'Structure',
        question: 'What are the dentate gyrus and Ammon’s horn?',
        options: [
          'Parts of the hippocampus/hippocampal formation',
          'A set of structures that work together, not a single thing',
          'Entorhinal -> dentate -> CA3 -> CA1',
          'Pattern separation - distinguishing between similar patterns'
        ],
        explanation: 'The dentate gyrus and Ammon’s horn are described as central parts of the hippocampal structure.'
      },
      5: {
        topic: 'Cells',
        question: 'What characterizes the dentate gyrus under the microscope?',
        options: [
          'Many densely packed granule cells',
          'Only large pyramidal cells',
          'Pyramidal cells',
          'Parts of the hippocampus/hippocampal formation'
        ],
        explanation: 'The dentate is described as having many densely packed granule cells.'
      },
      6: {
        topic: 'Cells',
        question: 'Which cells are found in CA1-CA3 and the subiculum?',
        options: [
          'Pyramidal cells',
          'Only microglia',
          'Only blood cells',
          'Only oligodendrocytes'
        ],
        explanation: 'The document notes that CA regions and the subiculum contain pyramidal cells.'
      },
      7: {
        topic: 'Circuit',
        question: 'What is the trisynaptic circuit?',
        options: [
          'Entorhinal -> dentate -> CA3 -> CA1',
          'Thalamus -> eye -> muscle',
          'Caudate -> smell -> ear',
          'A set of structures that work together, not a single thing'
        ],
        explanation: 'This is the main route of information flow inside the hippocampus.'
      },
      8: {
        topic: 'Dentate',
        question: 'Computationally, what does the dentate gyrus do?',
        options: [
          'Pattern separation - distinguishing between similar patterns',
          'Pattern completion - completing patterns and associations',
          'Comparing information from cortex with what came from CA3',
          'Parts of the hippocampus/hippocampal formation'
        ],
        explanation: 'It emphasizes differences between similar memories, such as where I parked today versus yesterday.'
      },
      9: {
        topic: 'CA3',
        question: 'What does CA3 do?',
        options: [
          'Pattern completion - completing patterns and associations',
          'Pattern separation - distinguishing between similar patterns',
          'Comparing information from cortex with what came from CA3',
          'Parts of the hippocampus/hippocampal formation'
        ],
        explanation: 'CA3 completes a memory from a partial cue.'
      },
      10: {
        topic: 'CA1',
        question: 'What is the role of CA1?',
        options: [
          'Comparing information from cortex with what came from CA3',
          'Pattern completion - completing patterns and associations',
          'Pattern separation - distinguishing between similar patterns',
          'Parts of the hippocampus/hippocampal formation'
        ],
        explanation: 'CA1 compares external/cortical input with internal completion.'
      },
      11: {
        topic: 'Neurogenesis',
        question: 'According to the lesson, in which region does neurogenesis occur?',
        options: [
          'Dentate gyrus',
          'Corpus callosum',
          'Entorhinal cortex',
          'Spatial context, where and how'
        ],
        explanation: 'The dentate gyrus is described as one of the areas where new neurons are generated.'
      },
      12: {
        topic: 'PTSD',
        question: 'How can PTSD be understood through CA3 and CA1?',
        options: [
          'CA3 completes a memory from a small cue, and CA1 struggles to update it according to the current context',
          'CA3 struggles to complete memory, and CA1 strengthens every context as if it is safe',
          'CA3 completely separates memories, and CA1 prevents all contextual updating',
          'CA3 and CA1 work only in procedural memory and therefore do not affect trauma'
        ],
        explanation: 'The document describes flooding and difficulty introducing safe context.'
      },
      13: {
        topic: 'Exposure',
        question: 'What does exposure therapy try to teach in the hippocampal context?',
        options: [
          'To update the memory under safe conditions and take new context into account',
          'SSRIs increase neurogenesis and stress suppresses it',
          'The same mechanism helps remember the past and plan the future',
          'Weak separation causes overgeneralization'
        ],
        explanation: 'Repeated exposure under safe conditions can help updating through CA1/context.'
      },
      14: {
        topic: 'Depression and Anxiety',
        question: 'What can happen to pattern separation in depression/anxiety?',
        options: [
          'Weak separation causes overgeneralization',
          'Perfect separation always',
          'SSRIs increase neurogenesis and stress suppresses it',
          'The same mechanism helps remember the past and plan the future'
        ],
        explanation: 'The document links weak separation to overgeneralization between situations.'
      },
      15: {
        topic: 'SSRI',
        question: 'What has been proposed about SSRIs and the dentate gyrus?',
        options: [
          'SSRIs increase neurogenesis and stress suppresses it',
          'SSRIs immediately weaken every memory',
          'The same mechanism helps remember the past and plan the future',
          'Weak separation causes overgeneralization'
        ],
        explanation: 'This is mentioned as a possible explanation for why the medication takes time to have an effect.'
      },
      16: {
        topic: 'Consolidation',
        question: 'Over time, what does the hippocampus do for memory?',
        options: [
          'Creates direct connections between cortical areas so it is needed less',
          'What/identity information from the ventral pathway',
          'Spatial context, where and how',
          'In the medial temporal lobe, as part of the memory system'
        ],
        explanation: 'The hippocampus binds pieces of information, and later the cortex can carry the connections.'
      },
      17: {
        topic: 'Reconsolidation',
        question: 'What happens when a memory is reactivated?',
        options: [
          'It becomes temporarily unstable and can consolidate again',
          'In the medial temporal lobe, as part of the memory system',
          'The same mechanism helps remember the past and plan the future',
          'SSRIs increase neurogenesis and stress suppresses it'
        ],
        explanation: 'The document describes a time window of instability and reconsolidation.'
      },
      18: {
        topic: 'Future',
        question: 'What is the connection between remembering the past and imagining the future?',
        options: [
          'The same mechanism helps remember the past and plan the future',
          'The past is processed only in the basal ganglia',
          'SSRIs increase neurogenesis and stress suppresses it',
          'Weak separation causes overgeneralization'
        ],
        explanation: 'The hippocampus is presented as a time machine/prediction system across time.'
      },
      19: {
        topic: 'Perirhinal',
        question: 'What is the role of the perirhinal cortex?',
        options: [
          'What/identity information from the ventral pathway',
          'Spatial context, where and how',
          'Creates direct connections between cortical areas so it is needed less',
          'Weak separation causes overgeneralization'
        ],
        explanation: 'The perirhinal cortex feeds recognition information into the hippocampus.'
      },
      20: {
        topic: 'Parahippocampal',
        question: 'What is the role of the parahippocampal cortex?',
        options: [
          'Spatial context, where and how',
          'What/identity information from the ventral pathway',
          'Creates direct connections between cortical areas so it is needed less',
          'Weak separation causes overgeneralization'
        ],
        explanation: 'It provides spatial and contextual information.'
      },
      21: {
        topic: 'Entorhinal',
        question: 'What does the entorhinal cortex do?',
        options: [
          'Receives information from both pathways and sends it mainly to the hippocampus',
          'Binds who, where, what, and emotion into one experience',
          'Fornix -> mammillary bodies -> thalamus -> cingulate',
          'Experience of an event within the context of where, when, and environment'
        ],
        explanation: 'The entorhinal cortex is a central gateway to the hippocampus.'
      },
      22: {
        topic: 'Binding Experience',
        question: 'What does the hippocampus do in an episodic experience?',
        options: [
          'Binds who, where, what, and emotion into one experience',
          'Receives information from both pathways and sends it mainly to the hippocampus',
          'Fornix -> mammillary bodies -> thalamus -> cingulate',
          'Reconsolidation of memory after retrieval'
        ],
        explanation: 'The hippocampus binds pieces of information from different sources into an event.'
      },
      23: {
        topic: 'Papez and Memory',
        question: 'What is the hippocampal output pathway in the Papez circuit?',
        options: [
          'Fornix -> mammillary bodies -> thalamus -> cingulate',
          'Experience of an event within the context of where, when, and environment',
          'Neurons that fire when the animal/person is in a specific place',
          'Binds who, where, what, and emotion into one experience'
        ],
        explanation: 'The document describes output through the fornix to the mammillary bodies, thalamus, and cingulate.'
      },
      24: {
        topic: 'Amnesia',
        question: 'Why does amnesia not have to result only from hippocampal damage?',
        options: [
          'Damage at any stage of the circuit can disrupt the system',
          'Generation/synchronization of theta activity related to memory',
          'Neurons that fire when the animal/person is in a specific place',
          'He learned a skill without remembering that he had done it'
        ],
        explanation: 'If information is cut off at one stage of the circuit, memory can be impaired.'
      },
      25: {
        topic: 'Mammillary Bodies',
        question: 'What have the mammillary bodies been linked to?',
        options: [
          'Generation/synchronization of theta activity related to memory',
          'Damage at any stage of the circuit can disrupt the system',
          'Neurons that fire when the animal/person is in a specific place',
          'He learned a skill without remembering that he had done it'
        ],
        explanation: 'The document notes a connection to a theta-frequency pattern during recall.'
      },
      26: {
        topic: 'Episodic Memory',
        question: 'According to the lesson, what is episodic memory?',
        options: [
          'Experience of an event within the context of where, when, and environment',
          'Fornix -> mammillary bodies -> thalamus -> cingulate',
          'Neurons that fire when the animal/person is in a specific place',
          'Reconsolidation of memory after retrieval'
        ],
        explanation: 'The hippocampus encodes events with rich context.'
      },
      27: {
        topic: 'HM',
        question: 'What happened to HM after removal of the hippocampus and amygdala?',
        options: [
          'He did not form new episodic memories',
          'Reconsolidation of memory after retrieval',
          'He learned a skill without remembering that he had done it',
          'Damage to the hippocampus or MTL that support consolidation of new memory'
        ],
        explanation: 'HM demonstrated strong anterograde amnesia.'
      },
      28: {
        topic: 'Procedural',
        question: 'What was discovered in HM in the mirror-drawing task?',
        options: [
          'He learned a skill without remembering that he had done it',
          'Reconsolidation of memory after retrieval',
          'He did not form new episodic memories',
          'Damage to the hippocampus or MTL that support consolidation of new memory'
        ],
        explanation: 'Procedural learning can be preserved despite episodic impairment.'
      },
      29: {
        topic: 'Place and Grid',
        question: 'What are place cells?',
        options: [
          'Neurons that fire when the animal/person is in a specific place',
          'Fornix -> mammillary bodies -> thalamus -> cingulate',
          'Experience of an event within the context of where, when, and environment',
          'Damage at any stage of the circuit can disrupt the system'
        ],
        explanation: 'The hippocampus contains spatial representations like an internal GPS.'
      },
      30: {
        topic: 'Alzheimer’s',
        question: 'According to the lesson, which region is damaged early in Alzheimer’s disease?',
        options: [
          'Entorhinal cortex',
          'Experience of an event within the context of where, when, and environment',
          'Reconsolidation of memory after retrieval',
          'Dentate gyrus'
        ],
        explanation: 'Early entorhinal damage is related to difficulty with orientation.'
      },
      31: {
        topic: 'Integration Questions',
        question: 'A person remembers old facts but cannot create new episodic memories after a stroke. Which mechanism fits best?',
        options: [
          'Damage to the hippocampus or MTL that support consolidation of new memory',
          'Reconsolidation of memory after retrieval',
          'He did not form new episodic memories',
          'He learned a skill without remembering that he had done it'
        ],
        explanation: 'The hippocampus and MTL are especially important for forming new episodic memories and linking details to context.'
      },
      32: {
        topic: 'Integration Questions',
        question: 'After a frightening memory is retrieved, it becomes temporarily more open to change, and therapy tries to update it. Which principle is illustrated?',
        options: [
          'Reconsolidation of memory after retrieval',
          'Damage to the hippocampus or MTL that support consolidation of new memory',
          'He learned a skill without remembering that he had done it',
          'He did not form new episodic memories'
        ],
        explanation: 'Reconsolidation describes a window in which a retrieved memory can be updated before it stabilizes again.'
      },
      33: {
        topic: 'Brain Location Quiz',
        question: 'Where is the hippocampus located?',
        options: [
          'In the medial temporal lobe, as part of the memory system',
          'In the primary occipital lobe',
          'It becomes temporarily unstable and can consolidate again',
          'It creates direct connections between cortical areas so it is needed less'
        ],
        explanation: 'The hippocampus is located deep in the medial temporal lobe and participates in episodic and contextual memory encoding.'
      }
    },
    lesson6: {
      1: {
        topic: 'Basal Ganglia',
        question: 'What is the general role of the basal ganglia?',
        options: [
          'Selection, filtering, and prioritization of actions/representations for execution',
          'Because myelinated axons pass through gaps and create white stripes',
          'Motor function, cognition, habits, and goals',
          'Sensorimotor information and actions/habits'
        ],
        explanation: 'The system helps move from parallel processing to organized action.'
      },
      2: {
        topic: 'Anatomy',
        question: 'What does ganglia mean in this context?',
        options: [
          'Nuclei/clusters of cells',
          'Parts of the striatum',
          'Output of the system to the thalamus',
          'Because myelinated axons pass through gaps and create white stripes'
        ],
        explanation: 'Ganglia are nuclei, clusters of neurons.'
      },
      3: {
        topic: 'Anatomy',
        question: 'What are the caudate and putamen together?',
        options: [
          'Parts of the striatum',
          'Parts of the insula',
          'Cortical layers',
          'Nuclei/clusters of cells'
        ],
        explanation: 'The caudate and putamen are components of the striatum.'
      },
      4: {
        topic: 'Anatomy',
        question: 'Why is the striatum called striped?',
        options: [
          'Because myelinated axons pass through gaps and create white stripes',
          'Because of dopamine/pigment in the cells there',
          'Parts of the striatum',
          'Nuclei/clusters of cells'
        ],
        explanation: 'The name comes from its striped appearance in section.'
      },
      5: {
        topic: 'Caudate',
        question: 'From which areas does the caudate mainly receive information?',
        options: [
          'Prefrontal and associative areas',
          'Sensorimotor information and actions/habits',
          'Because of dopamine/pigment in the cells there',
          'Motor function, cognition, habits, and goals'
        ],
        explanation: 'The caudate is more related to cognitive and goal-directed control.'
      },
      6: {
        topic: 'Putamen',
        question: 'What information does the putamen receive more of?',
        options: [
          'Sensorimotor information and actions/habits',
          'Prefrontal and associative areas',
          'Because of dopamine/pigment in the cells there',
          'Motor function, cognition, habits, and goals'
        ],
        explanation: 'The putamen is more related to motor actions and habits.'
      },
      7: {
        topic: 'Globus Pallidus',
        question: 'What is the GPi?',
        options: [
          'Output of the system to the thalamus',
          'Part of the hippocampus',
          'Parts of the striatum',
          'Nuclei/clusters of cells'
        ],
        explanation: 'The internal globus pallidus is a central output station to the thalamus.'
      },
      8: {
        topic: 'STN',
        question: 'Where is the subthalamic nucleus located?',
        options: [
          'Below the thalamus',
          'In the corpus callosum',
          'Nuclei/clusters of cells',
          'Parts of the striatum'
        ],
        explanation: 'Its name indicates its subthalamic location.'
      },
      9: {
        topic: 'SN',
        question: 'Why does the substantia nigra look black?',
        options: [
          'Because of dopamine/pigment in the cells there',
          'Because myelinated axons pass through gaps and create white stripes',
          'Prefrontal and associative areas',
          'Sensorimotor information and actions/habits'
        ],
        explanation: 'The document links the black color to dopaminergic cells.'
      },
      10: {
        topic: 'Dorsal/Ventral',
        question: 'What characterizes the dorsal striatum?',
        options: [
          'Motor function, cognition, habits, and goals',
          'Reward, motivation, and conditioned learning',
          'Sensorimotor information and actions/habits',
          'Prefrontal and associative areas'
        ],
        explanation: 'The dorsal striatum receives cortical input and is related to motor and cognitive control.'
      },
      11: {
        topic: 'Dorsal/Ventral',
        question: 'What characterizes the ventral striatum?',
        options: [
          'Reward, motivation, and conditioned learning',
          'Ventral striatum and input from OFC/ACC/mPFC',
          'Cortex -> striatum -> thalamus -> cortex',
          'Motor function, cognition, habits, and goals'
        ],
        explanation: 'The ventral striatum is linked to reward and motivation.'
      },
      12: {
        topic: 'Loops',
        question: 'What is the general structure of a basal ganglia loop?',
        options: [
          'Cortex -> striatum -> thalamus -> cortex',
          'Ventral striatum and input from OFC/ACC/mPFC',
          'Reward, motivation, and conditioned learning',
          'To allow fine regulation and contextual input'
        ],
        explanation: 'The loops return to cortex through the striatum and thalamus.'
      },
      13: {
        topic: 'Motor Loop',
        question: 'What is the central input in the motor loop?',
        options: [
          'Motor cortex/SMA to putamen',
          'dlPFC to dorsal caudate',
          'Excites D1/direct and inhibits D2/indirect',
          'Reward, motivation, and conditioned learning'
        ],
        explanation: 'The motor loop begins in motor regions and reaches the putamen.'
      },
      14: {
        topic: 'Cognitive Loop',
        question: 'What is the central input in the cognitive loop?',
        options: [
          'dlPFC to dorsal caudate',
          'Ear to striatum',
          'Motor cortex/SMA to putamen',
          'Excites D1/direct and inhibits D2/indirect'
        ],
        explanation: 'The cognitive loop is related to planning, working memory, and flexibility.'
      },
      15: {
        topic: 'Limbic Loop',
        question: 'What does the limbic loop work with?',
        options: [
          'Ventral striatum and input from OFC/ACC/mPFC',
          'Cortex -> striatum -> thalamus -> cortex',
          'Reward, motivation, and conditioned learning',
          'Increases inhibition and suppresses competing actions'
        ],
        explanation: 'The limbic loop controls motivation and emotional decisions.'
      },
      16: {
        topic: 'Direct Pathway',
        question: 'What does the direct pathway do?',
        options: [
          'Releases the brake and facilitates cortical activation',
          'Increases inhibition and suppresses competing actions',
          'Excites D1/direct and inhibits D2/indirect',
          'Reward, motivation, and conditioned learning'
        ],
        explanation: 'It leads to disinhibition of the thalamus and increased cortical activity.'
      },
      17: {
        topic: 'Indirect Pathway',
        question: 'What does the indirect pathway do?',
        options: [
          'Increases inhibition and suppresses competing actions',
          'Releases the brake and facilitates cortical activation',
          'Excites D1/direct and inhibits D2/indirect',
          'Ventral striatum and input from OFC/ACC/mPFC'
        ],
        explanation: 'The indirect pathway puts the brake on unwanted actions.'
      },
      18: {
        topic: 'Action Selection',
        question: 'How do the two pathways help choose an action?',
        options: [
          'The direct pathway strengthens the desired action and the indirect pathway suppresses competitors',
          'Excites D1/direct and inhibits D2/indirect',
          'To allow fine regulation and contextual input',
          'Cortex -> striatum -> thalamus -> cortex'
        ],
        explanation: 'This is how the basal ganglia prioritize an action and weaken alternatives.'
      },
      19: {
        topic: 'Multiple Stations',
        question: 'Why are there many stations in the middle of the circuit?',
        options: [
          'To allow fine regulation and contextual input',
          'The direct pathway strengthens the desired action and the indirect pathway suppresses competitors',
          'Excites D1/direct and inhibits D2/indirect',
          'Cortex -> striatum -> thalamus -> cortex'
        ],
        explanation: 'More stations allow information and control to be inserted into the selection process.'
      },
      20: {
        topic: 'Dopamine',
        question: 'How does dopamine affect the direct and indirect pathways?',
        options: [
          'Excites D1/direct and inhibits D2/indirect',
          'Inhibits both to the same degree',
          'The direct pathway strengthens the desired action and the indirect pathway suppresses competitors',
          'To allow fine regulation and contextual input'
        ],
        explanation: 'The document notes that the different receptors respond differently to dopamine.'
      },
      21: {
        topic: 'Parkinson’s',
        question: 'What happens in Parkinson’s disease?',
        options: [
          'Substantia nigra cells degenerate and stop sending dopamine',
          'Substantia nigra cells degenerate and stop sending glutamate',
          'Substantia nigra cells degenerate and stop sending GABA',
          'Substantia nigra cells degenerate and stop sending serotonin'
        ],
        explanation: 'Lack of dopamine disrupts regulation of the basal ganglia pathways.'
      },
      22: {
        topic: 'Parkinson’s',
        question: 'Why is it difficult to initiate actions in Parkinson’s disease?',
        options: [
          'There is not enough drive through the basal ganglia-thalamus-cortex circuit',
          'Substantia nigra cells degenerate and stop sending dopamine',
          'Basal ganglia loops and dopamine in the nigrostriatal pathway',
          'Cortex directly to STN for emergency stopping'
        ],
        explanation: 'The document describes difficulty initiating actions and fragmented movement.'
      },
      23: {
        topic: 'Hyperdirect',
        question: 'What is the hyperdirect pathway?',
        options: [
          'A pathway from cortex directly to the STN that activates emergency stopping',
          'A pathway from cortex to striatum that gradually facilitates the selected action',
          'A pathway from striatum through GPe that suppresses competing actions',
          'A pathway from thalamus directly to GPi that activates motor cortex'
        ],
        explanation: 'It bypasses the striatum and allows rapid, less refined stopping.'
      },
      24: {
        topic: 'D1/D2',
        question: 'According to the summary, what does D1 signal?',
        options: [
          'Facilitation/energizing of action',
          'Reward prediction error',
          'Basal ganglia loops and dopamine in the nigrostriatal pathway',
          'Substantia nigra cells degenerate and stop sending dopamine'
        ],
        explanation: 'D1 is related to the direct pathway and facilitation of action.'
      },
      25: {
        topic: 'Reward',
        question: 'What is the VTA?',
        options: [
          'A brainstem region that produces dopamine and sends it to the nucleus accumbens and PFC',
          'A brainstem region that produces glutamate and sends it to the nucleus accumbens and PFC',
          'A brainstem region that produces GABA and sends it to the nucleus accumbens and PFC',
          'A brainstem region that produces serotonin and sends it to the nucleus accumbens and PFC'
        ],
        explanation: 'The VTA is related to reward prediction and dopamine.'
      },
      26: {
        topic: 'Reward',
        question: 'What does the nucleus accumbens do?',
        options: [
          'Integrates reward and context',
          'A brainstem region that produces dopamine and sends it to the nucleus accumbens and PFC',
          'Cortex directly to STN for emergency stopping',
          'Facilitation/energizing of action'
        ],
        explanation: 'It receives dopamine from the VTA and information from the PFC.'
      },
      27: {
        topic: 'Dopamine',
        question: 'According to Schultz, what does dopamine encode?',
        options: [
          'Reward prediction error',
          'Facilitation/energizing of action',
          'Basal ganglia loops and dopamine in the nigrostriatal pathway',
          'Substantia nigra cells degenerate and stop sending dopamine'
        ],
        explanation: 'Dopamine rises when an unexpected reward is received and drops when a reward was expected but not received.'
      },
      28: {
        topic: 'Wanting/Liking',
        question: 'What is the difference between wanting and liking?',
        options: [
          'Dopamine is more related to wanting; liking is also related to opioids/endocannabinoids',
          'Glutamate is more related to wanting; liking is also related to opioids/endocannabinoids',
          'GABA is more related to wanting; liking is also related to opioids/endocannabinoids',
          'Serotonin is more related to wanting; liking is also related to opioids/endocannabinoids'
        ],
        explanation: 'The Berridge and Robinson model separates motivation to want from pleasure.'
      },
      29: {
        topic: 'Dopamine Pathways',
        question: 'Which pathway is damaged in Parkinson’s disease?',
        options: [
          'The nigrostriatal pathway from the substantia nigra to the striatum',
          'The mesolimbic pathway from the VTA to the nucleus accumbens',
          'The mesocortical pathway from the VTA to the prefrontal cortex',
          'The tuberoinfundibular pathway from the hypothalamus to the pituitary'
        ],
        explanation: 'The pathway from the substantia nigra to the striatum is related to motor modulation.'
      },
      30: {
        topic: 'Thalamus and Clinical Links',
        question: 'What is true about the thalamus?',
        options: [
          'It is not only a sensory relay station, but a collection of nuclei involved in control, attention, and arousal',
          'Biasing striatal and habit loops over goal-directed control',
          'Dopamine is more related to wanting; liking is also related to opioids/endocannabinoids',
          'Substantia nigra cells degenerate and stop sending dopamine'
        ],
        explanation: 'The thalamus includes specific and nonspecific nuclei and also participates in arousal and filtering.'
      },
      31: {
        topic: 'Integration Questions',
        question: 'A patient has difficulty initiating voluntary action and shows motor slowing, alongside reduced dopaminergic signaling. Which system fits best?',
        options: [
          'Basal ganglia loops and dopamine in the nigrostriatal pathway',
          'Biasing striatal and habit loops over goal-directed control',
          'Substantia nigra cells degenerate and stop sending dopamine',
          'It is not only a sensory relay station, but a collection of nuclei involved in control, attention, and arousal'
        ],
        explanation: 'The basal ganglia and dopamine are important for action selection, movement initiation, and reinforcement learning.'
      },
      32: {
        topic: 'Integration Questions',
        question: 'A person keeps choosing immediate reward despite expected punishment, and strong habits seem to override control. Which mechanism fits?',
        options: [
          'Biasing striatal and habit loops over goal-directed control',
          'Basal ganglia loops and dopamine in the nigrostriatal pathway',
          'It is not only a sensory relay station, but a collection of nuclei involved in control, attention, and arousal',
          'Substantia nigra cells degenerate and stop sending dopamine'
        ],
        explanation: 'Habit and reward learning involve the striatum and dopamine, and can sometimes override prefrontal goal-directed control.'
      },
      33: {
        topic: 'Brain Location Quiz',
        question: 'Where is the thalamus located relative to central brain structures?',
        options: [
          'Deep in the brain, above the hypothalamus and on both sides of the third ventricle',
          'Inside the lateral temporal lobe',
          'The direct pathway strengthens the desired action and the indirect pathway suppresses competitors',
          'Cortex -> striatum -> thalamus -> cortex'
        ],
        explanation: 'The thalamus is a deep diencephalic structure above the hypothalamus and serves as a central relay station to the cortex.'
      }
    },
    lesson8: {
      1: { topic: 'Hypothalamus', question: 'What is the main overall role of the hypothalamus?', options: ['Maintaining homeostasis','Mediating conscious body sensations through the insula and dACC','Selecting actions and reinforcing habits through the striatum and dopamine','Executive control and planning through prefrontal networks'], explanation: 'The hypothalamus regulates hunger, thirst, temperature, autonomic activity, and hormones in order to maintain internal stability.' },
      2: { topic: 'Anatomy', question: 'Where is the hypothalamus located?', options: ['Below the thalamus and in the floor of the third ventricle','Above the thalamus and in the roof of the third ventricle','Lateral to the thalamus, within the basal ganglia','In the brainstem, between the pons and medulla'], explanation: 'The hypothalamus lies below the thalamus and forms the floor of the third ventricle.' },
      3: { topic: 'Pituitary', question: 'Which hormones are released through the posterior pituitary?', options: ['Oxytocin and vasopressin','Cortisol and adrenaline','Leptin and ghrelin','Dopamine and serotonin'], explanation: 'Neurons originating in the hypothalamus release oxytocin and vasopressin into the blood through the neurohypophysis.' },
      4: { topic: 'HPA Axis', question: 'What is the order of secretion in the HPA axis?', options: ['CRH ← ACTH ← cortisol','ACTH ← CRH ← cortisol','Cortisol ← CRH ← ACTH','TRH ← leptin ← cortisol'], explanation: 'The hypothalamus secretes CRH, the pituitary secretes ACTH, and the adrenal cortex secretes cortisol.' },
      5: { topic: 'Hunger and Satiety', question: 'Which hypothalamic region is related to promoting eating?', options: ['LHA','VMH','Arcuate nucleus','PVN'], explanation: 'Activity in the lateral hypothalamic area promotes food seeking and eating.' },
      6: { topic: 'Hunger and Satiety', question: 'Damage to the VMH is expected to cause what?', options: ['Overeating and obesity','Complete loss of hunger','The reticular system','Cranial nerve 10'], explanation: 'The VMH functions as a satiety center; damage to it can cause hyperphagia.' },
      7: { topic: 'Circadian Rhythm', question: 'What is the body’s central clock?', options: ['The suprachiasmatic nucleus (SCN)','The arcuate nucleus','PVN','LHA'], explanation: 'The SCN receives light information from the retina and synchronizes the circadian rhythm.' },
      8: { topic: 'Brainstem', question: 'Which three parts are usually included in the brainstem?', options: ['Midbrain, pons, and medulla','Thalamus, hippocampus, and amygdala','Cortex, striatum, and cerebellum','Insula, ACC, and PFC'], explanation: 'The brainstem includes the midbrain, pons, and medulla.' },
      9: { topic: 'Vagus Nerve', question: 'What number is the vagus nerve?', options: ['Cranial nerve 10','Cranial nerve 2','Cranial nerve 5','Cranial nerve 12'], explanation: 'The vagus is the tenth cranial nerve and links the brain to internal organs.' },
      10: { topic: 'Sleep and Arousal', question: 'Which brainstem system is related to arousal and the transition between sleep and wakefulness?', options: ['The reticular system','The primary visual system','The corticospinal tract','Midbrain, pons, and medulla'], explanation: 'The reticular formation participates in regulating alertness, sleep, and level of consciousness.' },
      11: { topic: 'Pituitary', question: 'What is the main difference between the posterior and anterior pituitary?', options: ['The posterior releases hormones from hypothalamic neurons; the anterior responds to releasing hormones and produces tropic hormones','The posterior responds to releasing hormones and produces tropic hormones; the anterior releases oxytocin and vasopressin','The posterior produces ACTH and TSH; the anterior releases cortisol and thyroid hormones directly into the blood','The posterior works independently of the hypothalamus; the anterior is controlled only by the autonomic nervous system'], explanation: 'In the posterior pituitary, axon terminals release hormones; in the anterior pituitary, a portal system activates endocrine cells.' },
      12: { topic: 'Hormonal Control', question: 'Why are there two stages in the hypothalamus-anterior pituitary axis?', options: ['To allow amplification, timing, and precise feedback control','To prevent any effect on target organs','They activate satiety circuits in the arcuate nucleus and reduce hunger','Leptin promotes satiety and ghrelin promotes hunger'], explanation: 'The additional stage enables fine regulation and feedback from target organs.' },
      13: { topic: 'HPA Axis', question: 'What is the immediate role of cortisol during short-term stress?', options: ['To make energy available and temporarily suppress non-urgent processes','Entrainment of the internal clock to the external light-dark cycle','Smaller hippocampus and PFC alongside increased amygdala activity','A relatively small nucleus sends diffuse projections and influences many regions'], explanation: 'Cortisol mobilizes resources and temporarily reduces inflammation in order to cope with threat.' },
      14: { topic: 'Chronic Stress', question: 'Which brain pattern is described in chronic stress and PTSD?', options: ['Smaller hippocampus and PFC alongside increased amygdala activity','Smaller amygdala and more active PFC','Making energy available and temporarily suppressing non-urgent processes','A relatively small nucleus sends diffuse projections and influences many regions'], explanation: 'The summary links prolonged stress to hippocampal and frontal impairment and stronger amygdala control.' },
      15: { topic: 'Hunger and Satiety', question: 'How do leptin and ghrelin affect eating?', options: ['Leptin promotes satiety and ghrelin promotes hunger','Leptin is related only to sleep and ghrelin only to heat','They activate satiety circuits in the arcuate nucleus and reduce hunger','To allow amplification, timing, and precise feedback control'], explanation: 'The arcuate nucleus integrates peripheral signals: leptin signals energy stores and ghrelin promotes eating.' },
      16: { topic: 'Metabolic Treatment', question: 'According to the lesson, how do GLP-1-like agonists reduce eating?', options: ['They activate satiety circuits in the arcuate nucleus and reduce hunger','Leptin promotes satiety and ghrelin promotes hunger','To allow amplification, timing, and precise feedback control','It carries two-way information between the brain and organs and participates in autonomic regulation'], explanation: 'GLP-1 signals also act in the brain and strengthen neurons related to satiety.' },
      17: { topic: 'Circadian Rhythm', question: 'What does entrainment of the SCN mean?', options: ['Calibrating the internal clock to the external light-dark cycle','Making energy available and temporarily suppressing non-urgent processes','To allow amplification, timing, and precise feedback control','They activate satiety circuits in the arcuate nucleus and reduce hunger'], explanation: 'Light received by the retina synchronizes an internal clock whose cycle is close to, but not exactly, 24 hours.' },
      18: { topic: 'Vagus Nerve', question: 'Why is the vagus important beyond motor control?', options: ['It carries two-way information between the brain and organs and participates in autonomic regulation','The area is packed with pathways and nuclei essential for breathing, arousal, and autonomic functions','They activate satiety circuits in the arcuate nucleus and reduce hunger','To allow amplification, timing, and precise feedback control'], explanation: 'Most vagus fibers carry visceral information, and the vagus is central to parasympathetic control.' },
      19: { topic: 'Brainstem', question: 'Why can a small lesion in the brainstem be fatal?', options: ['The area is packed with pathways and nuclei essential for breathing, arousal, and autonomic functions','It carries two-way information between the brain and organs and participates in autonomic regulation','They activate satiety circuits in the arcuate nucleus and reduce hunger','To allow amplification, timing, and precise feedback control'], explanation: 'Many pathways and vital centers pass through a small area, so local damage can have broad consequences.' },
      20: { topic: 'Monoamines', question: 'What do many monoamine nuclei in the brainstem have in common?', options: ['A relatively small nucleus sends diffuse projections and influences many regions','The posterior directly releases hormones from hypothalamic neurons; the anterior responds to releasing hormones and produces tropic hormones','The area is packed with pathways and nuclei essential for breathing, arousal, and autonomic functions','Making energy available and temporarily suppressing non-urgent processes'], explanation: 'Systems such as the locus coeruleus and raphe regulate arousal, mood, and attention through broad projections.' },
      21: { topic: 'Hormonal Integration', question: 'A tumor that disconnects the portal system to the anterior pituitary would directly impair which mechanism?', options: ['Transfer of releasing hormones from the hypothalamus to anterior pituitary cells','Overactivation of the HPA axis with weak hippocampal and PFC regulation of the amygdala','The endogenous clock is not entrained and therefore runs on a cycle that is not exactly 24 hours','Severe reduction in arousal up to coma'], explanation: 'The portal system is the route by which releasing hormones reach the adenohypophysis.' },
      22: { topic: 'Negative Feedback', question: 'High cortisol should usually reduce CRH and ACTH. Which principle is demonstrated?', options: ['Negative feedback in an endocrine axis','Positive feedback between amygdala and stress response','Disinhibition in a striatal loop','Anti-correlation between DMN and CEN'], explanation: 'The end product inhibits earlier stages in the axis and thereby prevents excessive secretion.' },
      23: { topic: 'Stress and Sex', question: 'How can chronic activation of the HPA axis disrupt the reproductive system?', options: ['Hormonal axes are close and influence each other, and stress can suppress gonadotropic signals','It integrates limbic input and activates autonomic and endocrine output through the brainstem and pituitary','Cortisol suppresses inflammation in the short term, but prolonged exposure may create resistance and contribute to inflammation','Anatomical and developmental classification does not necessarily match the single function of a structure'], explanation: 'Hypothalamic regulation integrates competing needs; prolonged stress may reduce investment in reproductive functions.' },
      24: { topic: 'Stress and Inflammation', question: 'How can short-term and chronic stress affect inflammation in opposite directions?', options: ['Cortisol suppresses inflammation in the short term, but prolonged exposure may create resistance and contribute to inflammation','Cortisol suppresses inflammation in the short term, but brief exposure may create resistance and contribute to inflammation','Oxytocin suppresses inflammation in the short term, but prolonged exposure may create resistance and contribute to inflammation','Vasopressin suppresses inflammation in the short term, but prolonged exposure may create resistance and contribute to inflammation'], explanation: 'Regulation that is useful in the short term can become pathological when the system is activated again and again.' },
      25: { topic: 'Hunger and Satiety', question: 'A patient does not initiate eating even though the satiety mechanism is intact. Which lesion fits best?', options: ['Damage to the LHA','VMH','Negative feedback in an endocrine axis','Severe reduction in arousal up to coma'], explanation: 'The LHA is related to the motivation to seek food; damage to it can cause aphagia.' },
      26: { topic: 'Circadian Rhythm', question: 'A blind person without light input to the non-visual retinal pathway develops a sleep time that shifts later each day. What is the explanation?', options: ['The endogenous clock is not entrained and therefore runs on a cycle that is not exactly 24 hours','Overactivation of the HPA axis with weak hippocampal and PFC regulation of the amygdala','Transfer of releasing hormones from the hypothalamus to anterior pituitary cells','Severe reduction in arousal up to coma'], explanation: 'Without a light signal, the SCN has difficulty entraining to the social day-night cycle.' },
      27: { topic: 'Autonomic Regulation', question: 'How does the hypothalamus translate emotion into a bodily response?', options: ['It integrates limbic input and activates autonomic and endocrine output through the brainstem and pituitary','Hormonal axes are close and influence each other, and stress can suppress gonadotropic signals','Cortisol suppresses inflammation in the short term, but prolonged exposure may create resistance and contribute to inflammation','Anatomical and developmental classification does not necessarily match the single function of a structure'], explanation: 'Its location and connections allow it to turn situation appraisal into a coordinated bodily response.' },
      28: { topic: 'Consciousness', question: 'Damage to the ascending reticular activating system is expected first and foremost to cause what?', options: ['Severe reduction in arousal up to coma','Negative feedback in an endocrine axis','Transfer of releasing hormones from the hypothalamus to anterior pituitary cells','The endogenous clock is not entrained and therefore runs on a cycle that is not exactly 24 hours'], explanation: 'The ascending reticular system is essential for maintaining cortical arousal.' },
      29: { topic: 'Clinical Integration', question: 'According to the summary, which mechanism creates a loop that strengthens PTSD symptoms?', options: ['Stress damages the hippocampus and PFC, the amygdala becomes dominant, and stress increases further','Stress strengthens the PFC and hippocampus, so the amygdala response weakens too quickly','The amygdala is overactive without reduced hippocampal context or prefrontal regulation','A smaller hippocampus improves context separation and therefore fear updates more quickly'], explanation: 'Less context and less frontal regulation allow the threat response to intensify.' },
      30: { topic: 'Functional Anatomy', question: 'Why are the mammillary bodies classified as part of the hypothalamus even though they participate in memory?', options: ['Anatomical and developmental classification does not necessarily match the single function of a structure','It integrates limbic input and activates autonomic and endocrine output through the brainstem and pituitary','Hormonal axes are close and influence each other, and stress can suppress gonadotropic signals','Cortisol suppresses inflammation in the short term, but prolonged exposure may create resistance and contribute to inflammation'], explanation: 'The mammillary bodies anatomically belong to the hypothalamus and participate in the Papez circuit through the fornix and thalamus.' },
      31: { topic: 'Integration Questions', question: 'A person experiences chronic stress, high arousal, and difficulty shutting down a fear response even after danger has passed. Which mechanism fits best?', options: ['Overactivation of the HPA axis with weak hippocampal and PFC regulation of the amygdala','Hyperactivity of the salience network with weak switching between DMN and CEN','Reduced function in striatal reward circuits with weak OFC control','Disrupted mentalization through TPJ and mPFC under stress'], explanation: 'Chronic stress can strengthen the amygdala response and impair contextual and frontal regulation of threat.' },
      32: { topic: 'Integration Questions', question: 'A patient eats without a clear sense of satiety after a focal hypothalamic lesion. Which region fits best?', options: ['VMH','LHA','SCN','PCC'], explanation: 'The VMH functions as a satiety center, so damage to it can cause overeating.' },
      33: { topic: 'Brain Location Quiz', question: 'Where is the hypothalamus located?', options: ['Below the thalamus and in the floor of the third ventricle','Above the thalamus and in the roof of the third ventricle','Lateral to the putamen and within the external capsule','Deep in the medial temporal lobe'], explanation: 'The hypothalamus is located below the thalamus and connects neural, hormonal, and autonomic information.' }
    },
    lesson9: {
      1: { topic: 'Brain Networks', question: 'What is a functional brain network?', options: ['A set of regions whose activity changes together in correlation','A group of regions always connected by a single axon','Only regions that act during movement','A list of nuclei in the brainstem'], explanation: 'A functional network is defined by a shared activity pattern, even without a direct anatomical connection.' },
      2: { topic: 'fMRI', question: 'What does the BOLD signal measure indirectly?', options: ['Changes in oxygenation and blood flow related to neural activity','The action potential of a single neuron','Bottom-up attention to a salient or unexpected event','No, correlation can also arise through indirect connections'], explanation: 'BOLD relies on the relationship between neural activity, oxygen use, and local blood supply.' },
      3: { topic: 'DMN', question: 'When is the default mode network relatively more active?', options: ['During rest and internal processing','mPFC, PCC/precuneus, and inferior parietal regions','A set of regions whose activity changes together in correlation','Working memory, planning, and control'], explanation: 'The DMN is prominent during rest and decreases when attention is directed to an external task.' },
      4: { topic: 'DMN', question: 'Which central regions belong to the DMN?', options: ['mPFC, PCC/precuneus, and inferior parietal regions','During rest and internal processing','Bottom-up attention to a salient or unexpected event','No, correlation can also arise through indirect connections'], explanation: 'Anterior and posterior medial regions are central hubs of the default mode network.' },
      5: { topic: 'Salience Network', question: 'What is the central role of the Salience Network?', options: ['Detecting important information and switching between internal and external processing','A node is a brain junction and an edge is the connection between it and another node','A set of regions whose activity changes together in correlation','mPFC, PCC/precuneus, and inferior parietal regions'], explanation: 'The salience network detects meaningful change and helps shift between the DMN and the control network.' },
      6: { topic: 'CEN', question: 'Which function is associated with the Central Executive Network?', options: ['Working memory, planning, and control','Top-down allocation of attention according to a goal','Detecting important information and switching between internal and external processing','During rest and internal processing'], explanation: 'The CEN includes regions such as the DLPFC and participates in goal-directed task performance.' },
      7: { topic: 'Attention', question: 'What characterizes the DAN?', options: ['Top-down allocation of attention according to a goal','Bottom-up attention shifting to a surprising stimulus','Bottom-up attention to a salient or unexpected event','No, correlation can also arise through indirect connections'], explanation: 'The dorsal network directs attention voluntarily according to the task.' },
      8: { topic: 'Attention', question: 'What characterizes the VAN?', options: ['Bottom-up attention to a salient or unexpected event','Top-down allocation of attention according to a goal','No, correlation can also arise through indirect connections','Changes in oxygenation and blood flow related to neural activity'], explanation: 'The ventral network shifts attention when something important appears outside the current focus.' },
      9: { topic: 'Graph Theory', question: 'What are a node and an edge in network analysis?', options: ['A node is a brain junction and an edge is the connection between it and another node','A node is a hormone and an edge is a receptor','A node is an axon and an edge is a glial cell','A set of regions whose activity changes together in correlation'], explanation: 'Graph theory represents regions as nodes and connections as weighted edges.' },
      10: { topic: 'Connectivity', question: 'Does functional connectivity require a direct anatomical connection?', options: ['No, correlation can also arise through indirect connections','Yes, there must always be a single axon','Bottom-up attention to a salient or unexpected event','Changes in oxygenation and blood flow related to neural activity'], explanation: 'Functional connectivity is a statistical dependency and is not proof of a direct anatomical pathway.' },
      11: { topic: 'Methodology', question: 'What led to the discovery of the DMN in task studies?', options: ['Certain regions decreased in activity relative to rest and were correlated with each other during rest','The first coordinates sensation and movement, and the second coordinates visual processing','When one activity increases, the other tends to decrease','Connection strength and cooperation patterns change from moment to moment and across life'], explanation: 'Comparing task activity with baseline revealed a network whose activity is higher during rest.' },
      12: { topic: 'Anti-correlation', question: 'What does anti-correlation between the DMN and CEN mean?', options: ['When one activity increases, the other tends to decrease','Connection strength and cooperation patterns change from moment to moment and across life','A node with many connections or a central integrative role','The first coordinates sensation and movement, and the second coordinates visual processing'], explanation: 'Internal processing and external control sometimes compete, so their activity patterns can be opposite.' },
      13: { topic: 'Salience Network', question: 'How does the salience network function as a switch?', options: ['It identifies what is important and helps transfer resources between the DMN and CEN','It anatomically connects every pair of regions','Strong connections within the network alongside hubs that connect to other networks','Difficulty suppressing the DMN during a task and coordinating it with attention networks'], explanation: 'The SN coordinates the transition between an internal state and performance of an external task.' },
      14: { topic: 'Additional Networks', question: 'What is the difference between the somatomotor network and the visual network?', options: ['The first coordinates sensation and movement, and the second coordinates visual processing','Certain regions decreased in activity relative to rest and were correlated with each other during rest','Hyperactivity of the salience network and inefficient frontal regulation','It identifies what is important and helps transfer resources between the DMN and CEN'], explanation: 'Each network groups regions that participate together in a different functional domain.' },
      15: { topic: 'Graph Theory', question: 'What is a hub in a brain network?', options: ['A node with many connections or a central integrative role','When one activity increases, the other tends to decrease','Connection strength and cooperation patterns change from moment to moment and across life','Reduced connectivity and synchronization, especially within the DMN and CEN'], explanation: 'Hubs help communication within a network and between networks.' },
      16: { topic: 'Segregation and Integration', question: 'How can a network be both segregated and integrated?', options: ['Strong connections within the network alongside hubs that connect to other networks','It identifies what is important and helps transfer resources between the DMN and CEN','Difficulty suppressing the DMN during a task and coordinating it with attention networks','The first coordinates sensation and movement, and the second coordinates visual processing'], explanation: 'Segregation supports specialization, while integration enables global coordination.' },
      17: { topic: 'Dynamics', question: 'What does it mean that networks are dynamic?', options: ['Connection strength and cooperation patterns change from moment to moment and across life','When one activity increases, the other tends to decrease','A node with many connections or a central integrative role','The first coordinates sensation and movement, and the second coordinates visual processing'], explanation: 'Functional connectivity is a changing state, not one rigid map.' },
      18: { topic: 'Schizophrenia', question: 'Which network finding is described in schizophrenia?', options: ['Reduced connectivity and synchronization, especially within the DMN and CEN','Perfect connectivity between all regions','Hyperactivity of the salience network and inefficient frontal regulation','Difficulty suppressing the DMN during a task and coordinating it with attention networks'], explanation: 'The summary emphasizes dysconnectivity and poor network coordination more than one isolated damaged region.' },
      19: { topic: 'ADHD', question: 'How is ADHD described in network terms?', options: ['Difficulty suppressing the DMN during a task and coordinating it with attention networks','Strong connections within the network alongside hubs that connect to other networks','It identifies what is important and helps transfer resources between the DMN and CEN','Reduced connectivity and synchronization, especially within the DMN and CEN'], explanation: 'Intrusion of mind-wandering into task processing can reflect poorly regulated competition between networks.' },
      20: { topic: 'Anxiety', question: 'Which network pattern fits anxiety according to the summary?', options: ['Hyperactivity of the salience network and inefficient frontal regulation','Reduced connectivity and synchronization, especially within the DMN and CEN','The first coordinates sensation and movement, and the second coordinates visual processing','It identifies what is important and helps transfer resources between the DMN and CEN'], explanation: 'Over-detection of threat can keep the salience system in a vigilant state.' },
      21: { topic: 'Methodological Inference', question: 'Two regions are correlated in resting-state fMRI. What may be inferred?', options: ['They have functional connectivity, but not necessarily a direct connection or causality','They have functional connectivity, but not necessarily an indirect connection or causality','They have functional connectivity, but not necessarily a hyperdirect connection or causality','They have anatomical connectivity, but not necessarily a direct connection or causality'], explanation: 'Temporal correlation does not define direction of influence or an anatomical pathway.' },
      22: { topic: 'Baseline', question: 'Why is baseline selection important in fMRI studies?', options: ['Because reported activation is always relative to a comparison state, and the brain is active in that state too','Higher functions depend on a distributed network, and any essential node can disrupt the system','It enables detection of a shared dysconnectivity pattern even when local activity foci differ between people','The thalamus does not synchronize networks properly, so they become uncoordinated'], explanation: 'The DMN was discovered partly because rest is not a state of zero activity.' },
      23: { topic: 'Anti-correlation', question: 'What could reduced anti-correlation between the DMN and CEN mean?', options: ['Weaker functional separation and mutual interference between internal processing and task performance','Weaker functional separation and mutual interference between external processing and task performance','Weaker functional separation and mutual interference between external task performance and task performance','Weaker functional separation and mutual interference between goal-directed attention and task performance'], explanation: 'Less separation between the networks is linked in the summary to psychopathology and impaired regulation.' },
      24: { topic: 'Network Damage', question: 'Why can impairment in the same function result from damage in different regions?', options: ['Higher functions depend on a distributed network, and any essential node can disrupt the system','Because reported activation is always relative to a comparison state, and the brain is active in that state too','It enables detection of a shared dysconnectivity pattern even when local activity foci differ between people','The thalamus does not synchronize networks properly, so they become uncoordinated'], explanation: 'The network approach explains why there is not always a one-region-to-one-function match.' },
      25: { topic: 'Network-Based Treatment', question: 'What is a possible therapeutic advantage of looking at a whole network?', options: ['The network can be influenced through an accessible node even if the damaged node is not accessible','From goal-directed DAN to recruitment of VAN/SN after a salient stimulus','It enables detection of a shared dysconnectivity pattern even when local activity foci differ between people','Because reported activation is always relative to a comparison state, and the brain is active in that state too'], explanation: 'A network provides alternative routes for intervention and functional rehabilitation.' },
      26: { topic: 'Thalamo-cortical', question: 'How can disruption of thalamo-cortical rhythm affect psychopathology?', options: ['The thalamus does not synchronize networks properly, so they become uncoordinated','Higher functions depend on a distributed network, and any essential node can disrupt the system','Because reported activation is always relative to a comparison state, and the brain is active in that state too','It enables detection of a shared dysconnectivity pattern even when local activity foci differ between people'], explanation: 'The thalamo-cortical model emphasizes timing and synchronization, not only local activity strength.' },
      27: { topic: 'Attention', question: 'During a planned task, an alarm suddenly sounds. Which network transition is likely?', options: ['From goal-directed DAN to recruitment of VAN/SN after a salient stimulus','The salience network mediating the transition between DMN and CEN','They have functional connectivity, but not necessarily a direct connection or causality','Weaker functional separation and mutual interference between internal processing and task performance'], explanation: 'The alarm is a salient bottom-up stimulus that interrupts the current attentional set.' },
      28: { topic: 'Edge Weight', question: 'What does the weight of an edge usually represent in functional connectivity analysis?', options: ['The strength of the statistical relationship between two nodes','The salience network mediating the transition between DMN and CEN','From goal-directed DAN to recruitment of VAN/SN after a salient stimulus','They have functional connectivity, but not necessarily a direct connection or causality'], explanation: 'The weight can reflect correlation or another dependency measure, depending on the method.' },
      29: { topic: 'Schizophrenia', question: 'Why does a network approach fit the heterogeneity of schizophrenia?', options: ['It enables detection of a shared dysconnectivity pattern even when local activity foci differ between people','It assumes all symptoms of schizophrenia arise from one fixed node despite differences between people','It gives up connectivity measures and focuses only on local activity strength in each region separately','It explains heterogeneity through identical local damage to the default mode network in every person'], explanation: 'Dysconnectivity can be a shared principle that appears in different clinical and local forms.' },
      30: { topic: 'Triple-Network Model', question: 'Which failure would explain mind-wandering, difficulty performing a task, and hypersensitivity to stimuli?', options: ['An SN that does not switch efficiently between the DMN and CEN','From goal-directed DAN to recruitment of VAN/SN after a salient stimulus','The salience network mediating the transition between DMN and CEN','The strength of the statistical relationship between two nodes'], explanation: 'A failure in the salience switch can leave internal processing active during a task and over-recruit attention to irrelevant events.' },
      31: { topic: 'Integration Questions', question: 'A person has difficulty shifting from internal thoughts to an external task, especially when an important stimulus appears. Which network may be impaired?', options: ['The salience network that mediates switching between the DMN and CEN','Functional connectivity can change even without damage to a direct anatomical connection','From goal-directed DAN to recruitment of VAN/SN after a salient stimulus','Weaker functional separation and mutual interference between internal processing and task performance'], explanation: 'The salience network identifies important information and helps switch between an internal state and executive control.' },
      32: { topic: 'Integration Questions', question: 'In fMRI, regions do not act together even though there is no clear anatomical damage between them. Which distinction fits?', options: ['Functional connectivity can change even without damage to a direct anatomical connection','Functional connectivity can change even without damage to an indirect anatomical connection','Functional connectivity can change even without damage to a hyperdirect anatomical connection','Anatomical connectivity can change even without damage to a direct anatomical connection'], explanation: 'Functional connectivity is a statistical dependency between activity patterns and is not necessarily identical to a direct anatomical pathway.' },
      33: { topic: 'Brain Location Quiz', question: 'Where are central hubs of the default mode network located?', options: ['In medial regions such as the mPFC and PCC/precuneus','Only in the primary motor cortex','Reduced connectivity and synchronization, especially within the DMN and CEN','Strong connections within the network alongside hubs that connect to other networks'], explanation: 'The DMN includes anterior and posterior midline hubs and parietal regions, and is relatively active during rest.' }
    },
    lesson10: {
      1: { topic: 'Social Brain', question: 'Which region is especially related to thinking about another person’s thoughts?', options: ['TPJ','mPFC','STS','Anterior insula'], explanation: 'The temporo-parietal junction is a central hub in mentalization and Theory of Mind.' },
      2: { topic: 'Social Perception', question: 'Which region is sensitive to biological motion, facial expressions, and prosody?', options: ['STS','SCN','VMH','GPe'], explanation: 'The superior temporal sulcus integrates dynamic social cues.' },
      3: { topic: 'Self Processing', question: 'Which region is related to self-processing and mentalization?', options: ['mPFC','Medulla','TPJ','STS'], explanation: 'Medial prefrontal regions are active when thinking about the self and about others.' },
      4: { topic: 'Faces', question: 'Where is the Fusiform Face Area located?', options: ['In the inferior part of the temporal lobe','Nonfluent, effortful speech production','Fluent but abnormal speech with impaired comprehension','The anterior insula and dACC'], explanation: 'The FFA is located in the ventral fusiform cortex and specializes in face processing.' },
      5: { topic: 'Empathy', question: 'Which regions are active when we see another person suffering from pain?', options: ['The anterior insula and dACC','Prosody and pragmatics','TPJ','Nonfluent, effortful speech production'], explanation: 'The affective pain network partly overlaps between one’s own pain and empathy for another person’s pain.' },
      6: { topic: 'Development', question: 'At what age does explicit understanding of another person’s false belief become established?', options: ['Around after age 4','At the end of the first month','Only in adulthood','Prosody and pragmatics'], explanation: 'Around age four, children usually succeed on false-belief tasks.' },
      7: { topic: 'Mirror Neurons', question: 'What characterizes a mirror neuron?', options: ['It is active both when performing an action and when watching another perform it','Fluent but abnormal speech with impaired comprehension','Nonfluent, effortful speech production','In the inferior part of the temporal lobe'], explanation: 'These neurons were discovered in monkeys when the same cells fired during action performance and observation.' },
      8: { topic: 'Language', question: 'What characterizes Broca’s aphasia?', options: ['Nonfluent, effortful speech production','Fluent but meaningless speech and poor comprehension','Peripheral hearing loss','Fluent but abnormal speech with impaired comprehension'], explanation: 'Damage to the left inferior frontal region is associated with difficulty producing speech.' },
      9: { topic: 'Language', question: 'What characterizes classic Wernicke’s aphasia?', options: ['Fluent but abnormal speech with impaired comprehension','Slow speech with preserved comprehension','Nonfluent, effortful speech production','It is active both when performing an action and when watching another perform it'], explanation: 'The classic model links a temporo-parietal region to language comprehension.' },
      10: { topic: 'Right Hemisphere', question: 'Which aspect of language depends especially on the right hemisphere?', options: ['Prosody and pragmatics','The anterior insula and dACC','TPJ','mPFC'], explanation: 'Intonation, irony, and broad context rely substantially on right-hemisphere processing.' },
      11: { topic: 'Theory of Mind', question: 'What developmental sequence is described for mentalization?', options: ['Gaze following, understanding intentions, perspective taking, and then understanding another person’s knowledge','A copy of the speech command that informs the auditory system that the voice was self-generated','Inner speech is not marked as self and is therefore attributed to an external source','The left hemisphere codes narrowly and precisely; the right integrates broader, coarser context'], explanation: 'Social abilities build gradually during the first four years of life.' },
      12: { topic: 'Autism', question: 'Which pattern is described in autism during social tasks?', options: ['Lower activity in TPJ and STS and difficulty understanding others','Premotor area F5','Mapping speech sounds to motor and phonological plans','An ability that appears normal at rest may collapse under stress'], explanation: 'The summary links ASD to reduced recruitment of central nodes in the social network.' },
      13: { topic: 'Stress and Mentalization', question: 'How may stress affect mentalization in mental disorders?', options: ['An ability that appears normal at rest may collapse under stress','Emotional empathy in the insula and dACC is more impaired than mentalization in TPJ','Stress mainly increases semantic processing in the ventral language pathway','Stress strengthens the TPJ but disconnects it from the visual system'], explanation: 'During stress, amygdala-PFC connectivity may weaken and make social situations harder to interpret.' },
      14: { topic: 'Mirror Neurons', question: 'In which monkey region were classic mirror neurons described?', options: ['Premotor area F5','Lower activity in TPJ and STS and difficulty understanding others','Relatively preserved comprehension and production but a marked difficulty with repetition','Lexical and semantic processing of meaning'], explanation: 'The classic Italian studies identified cells in F5 during both action performance and action observation.' },
      15: { topic: 'Language Model', question: 'What is the main role of the ventral pathway in language?', options: ['Lexical and semantic processing of meaning','Mapping sound to movement and repetition','Mapping speech sounds to motor and phonological plans','The left hemisphere codes narrowly and precisely; the right integrates broader, coarser context'], explanation: 'The ventral pathway connects auditory processing to meaning representations in temporal and frontal regions.' },
      16: { topic: 'Language Model', question: 'What is the main role of the dorsal pathway in language?', options: ['Mapping speech sounds to motor and phonological plans','Lexical and semantic processing of meaning','The left hemisphere codes narrowly and precisely; the right integrates broader, coarser context','Lower activity in TPJ and STS and difficulty understanding others'], explanation: 'The dorsal pathway supports repetition, phonology, and the link between hearing and production.' },
      17: { topic: 'Conduction Aphasia', question: 'What is expected after damage to the connection between classic language areas?', options: ['Relatively preserved comprehension and production but a marked difficulty with repetition','The left hemisphere codes narrowly and precisely; the right integrates broader, coarser context','At the junction between the temporal and parietal lobes','An ability that appears normal at rest may collapse under stress'], explanation: 'Damage to the connecting pathway especially impairs transfer of the heard representation to the production system.' },
      18: { topic: 'Hemispheres', question: 'How is the division of labor between left and right language processing described?', options: ['The left hemisphere codes narrowly and precisely; the right integrates broader, coarser context','The right is responsible for all words and the left only for emotion','Inner speech is not marked as self and is therefore attributed to an external source','An ability that appears normal at rest may collapse under stress'], explanation: 'Left-sided processing is efficient for linguistic details, while right-sided processing supports prosody, metaphor, and context.' },
      19: { topic: 'Efference Copy', question: 'What is an efference copy in speech?', options: ['A copy of the speech command that informs the auditory system that the voice was self-generated','Gaze following, understanding intentions, perspective taking, and then understanding another person’s knowledge','Inner speech is not marked as self and is therefore attributed to an external source','The left hemisphere codes narrowly and precisely; the right integrates broader, coarser context'], explanation: 'A motor prediction signal reduces the response to one’s own voice and helps identify its source.' },
      20: { topic: 'Psychosis', question: 'How may failure of the efference copy contribute to hearing voices?', options: ['Inner speech is not marked as self and is therefore attributed to an external source','An ability that appears normal at rest may collapse under stress','The left hemisphere codes narrowly and precisely; the right integrates broader, coarser context','A copy of the speech command that informs the auditory system that the voice was self-generated'], explanation: 'A failure in sensory prediction for self-generated speech can disrupt the sense of agency.' },
      21: { topic: 'Social Integration', question: 'A person recognizes faces but has difficulty understanding where they are looking and what they intend. Which region best fits the impairment?', options: ['STS','The ventral pathway of meaning and comprehension','A mentalization network including TPJ and mPFC','TPJ'], explanation: 'The FFA supports facial identity, while the STS is sensitive to dynamic cues such as gaze, motion, and expression.' },
      22: { topic: 'Empathy and Mentalization', question: 'What is the difference between a pain-empathy task and a mentalization task?', options: ['Empathy recruits more insula and dACC; mentalization recruits more TPJ and mPFC','The dorsal pathway linking auditory representation to speech planning','A mentalization network including TPJ and mPFC','The ventral pathway of meaning and comprehension'], explanation: 'Emotional sharing and inference about mental states partly overlap but place weight on different networks.' },
      23: { topic: 'Social Psychosis', question: 'How can difficulty separating self from other contribute to paranoia?', options: ['Self-generated or neutral intentions may be mistakenly attributed to others as threatening','To predict self-generated sound, monitor errors, and distinguish self voice from external voice','Maturation and myelination of the mentalization network progress alongside psychological development','Empathy recruits more insula and dACC; mentalization recruits more TPJ and mPFC'], explanation: 'Unstable mentalization may create excessive attribution of intention to another person.' },
      24: { topic: 'Mirror Neurons', question: 'What is the limitation of inferring mirror neurons in humans from fMRI studies?', options: ['BOLD overlap during execution and observation does not prove that the same single neuron is active in both states','BOLD overlap during execution and observation proves that all neurons in the region are mirror neurons','Motor activity during observation proves the person is actually performing the observed action','The absence of single-neuron recording makes it possible to determine the direction of influence between regions with certainty'], explanation: 'BOLD is a population signal; it supports a mirror system but does not necessarily identify a single mirror cell.' },
      25: { topic: 'Clinical Language', question: 'A patient speaks fluently and understands instructions, but cannot repeat a sentence. Which mechanism is impaired?', options: ['The dorsal pathway linking auditory representation to speech planning','The ventral pathway of meaning and comprehension','Empathy recruits more insula and dACC; mentalization recruits more TPJ and mPFC','A mentalization network including TPJ and mPFC'], explanation: 'Accurate repetition requires auditory-motor phonological mapping.' },
      26: { topic: 'Pragmatics', question: 'A patient passes a standard aphasia test but interprets sarcasm literally. Which impairment is likely?', options: ['Damage to right-hemisphere language networks','A mentalization network including TPJ and mPFC','The ventral pathway of meaning and comprehension','The dorsal pathway linking auditory representation to speech planning'], explanation: 'Classic tests may miss right-hemisphere deficits in prosody, metaphor, and pragmatics.' },
      27: { topic: 'Language Pathways', question: 'Which dissociation supports the dual-pathway model?', options: ['Impaired meaning with preserved repetition versus impaired repetition with preserved comprehension','Impaired meaning and repetition in both lesions, with no difference between pathways','Impaired speech comprehension in both conditions, while repetition and speech production are preserved','Impaired prosody and sarcasm alongside relatively preserved literal meaning'], explanation: 'The ventral and dorsal pathways support different components and can therefore be selectively impaired.' },
      28: { topic: 'Brain Development', question: 'Why does Theory of Mind improve gradually in childhood?', options: ['Maturation and myelination of the mentalization network progress alongside psychological development','To predict self-generated sound, monitor errors, and distinguish self voice from external voice','Self-generated or neutral intentions may be mistakenly attributed to others as threatening','Empathy recruits more insula and dACC; mentalization recruits more TPJ and mPFC'], explanation: 'Behavioral change parallels anatomical and connectivity maturation in regions such as the mPFC.' },
      29: { topic: 'Self Processing', question: 'In a task asking “How much does this trait describe you?”, which combination is expected?', options: ['mPFC together with components of the default mode network','The ventral pathway of meaning and comprehension','The dorsal pathway linking auditory representation to speech planning','A mentalization network including TPJ and mPFC'], explanation: 'Self-processing is an internal and social process that recruits medial regions of the DMN.' },
      30: { topic: 'Language Integration', question: 'Why must the motor and auditory systems communicate during speech?', options: ['To predict self-generated sound, monitor errors, and distinguish self voice from external voice','Self-generated or neutral intentions may be mistakenly attributed to others as threatening','Maturation and myelination of the mentalization network progress alongside psychological development','Empathy recruits more insula and dACC; mentalization recruits more TPJ and mPFC'], explanation: 'A prediction and feedback loop links a speech plan to its auditory outcome and enables correction and agency.' },
      31: { topic: 'Integration Questions', question: 'A person understands simple language but has difficulty inferring intentions, beliefs, and irony in a social situation. Which system fits best?', options: ['A mentalization network including TPJ and mPFC','The ventral pathway of meaning and comprehension','Damage to right-hemisphere language networks','The dorsal pathway linking auditory representation to speech planning'], explanation: 'Mentalization depends on a network of regions that represent others’ mental states beyond basic word comprehension.' },
      32: { topic: 'Integration Questions', question: 'A patient repeats sounds well but has difficulty understanding the meaning of words and sentences. Which language pathway is more likely impaired?', options: ['The ventral pathway of meaning and comprehension','A mentalization network including TPJ and mPFC','The dorsal pathway linking auditory representation to speech planning','Damage to right-hemisphere language networks'], explanation: 'The ventral pathway maps sound to meaning, while the dorsal pathway is more important for repetition and auditory-motor mapping.' },
      33: { topic: 'Brain Location Quiz', question: 'Where is the TPJ generally located?', options: ['At the junction between the temporal and parietal lobes','In the anterior medial prefrontal cortex','Along the STS in the superior temporal lobe','In the anterior insula below the operculum'], explanation: 'The TPJ is located in the temporo-parietal junction and participates in social attention and mentalization.' }
    },
    lesson11: {
      1: { topic: 'Embryonic Development', question: 'What does the neural tube develop from?', options: ['Folding of the neural plate until it closes into a tube','Peripheral ganglia, sensory neurons, and Schwann cells','The posterior part is sensory and the anterior part is motor','The brain and spinal cord'], explanation: 'Early in development, a groove forms in the upper region of the embryo and gradually closes into the neural tube.' },
      2: { topic: 'Neural Tube', question: 'What will the neural tube become later in development?', options: ['The brain and spinal cord','The limb muscles','Thalamus, hypothalamus, and retina','Cortex, basal ganglia, hippocampus, and nuclei'], explanation: 'The neural tube is the central source of the central nervous system: brain and spinal cord.' },
      3: { topic: 'Neural Crest', question: 'According to the lesson, what develops from the neural crest?', options: ['Peripheral ganglia, sensory neurons, and Schwann cells','Cortex, basal ganglia, and hippocampus','Folding of the neural plate until it closes into a tube','Neurons form first, and fibers and connections develop later'], explanation: 'The crest separates from the neural tube and contributes to the peripheral nervous system and Schwann cells.' },
      4: { topic: 'Notochord', question: 'What is the role of the notochord in vertebrates in the context of the lesson?', options: ['An early structure related to the body axis that later remains mainly as part of spinal cartilage','Neurons form first, and fibers and connections develop later','Peripheral ganglia, sensory neurons, and Schwann cells','Folding of the neural plate until it closes into a tube'], explanation: 'The notochord lies beneath the neural tube and serves as an early developmental axis.' },
      5: { topic: 'Dorsal and Ventral', question: 'What is the basic functional division in the neural tube/spinal cord?', options: ['The posterior part is sensory and the anterior part is motor','The posterior part is motor and the anterior part is sensory','The right part is emotional and the left part is hormonal','There is no division along the tube'], explanation: 'The lesson emphasizes the arrangement in which the dorsal side is related to sensory input and the ventral side to motor output.' },
      6: { topic: 'Brain Vesicles', question: 'What will the telencephalon develop into?', options: ['Cortex, basal ganglia, hippocampus, and nuclei','Thalamus, hypothalamus, and retina','Relatively smooth, without many folds','The brain and spinal cord'], explanation: 'The telencephalon is the source of the large anterior parts of the hemispheres.' },
      7: { topic: 'Brain Vesicles', question: 'What will the diencephalon develop into?', options: ['Thalamus, hypothalamus, and retina','Cortex, hippocampus, and basal ganglia','Schwann cells and sympathetic ganglia','Cortex, basal ganglia, hippocampus, and nuclei'], explanation: 'The diencephalon includes deep structures such as the thalamus and hypothalamus, and is also the source of the retina.' },
      8: { topic: 'Ventricles', question: 'Which structure produces cerebrospinal fluid?', options: ['The choroid plexus','The notochord','The brain and spinal cord','Relatively smooth, without many folds'], explanation: 'The choroid plexus grows in the ventricles and produces CSF.' },
      9: { topic: 'Cortex', question: 'What does the cerebral cortex look like at an early stage around weeks 18-32?', options: ['Relatively smooth, without many folds','Already full of sulci and gyri like in an adult','Divided only into one motor layer','Completely separated from the ventricles'], explanation: 'At an early stage the cortex is still relatively smooth, and many folds form only later.' },
      10: { topic: 'Cortical Development', question: 'What is the general sequence of cortical development according to the lesson?', options: ['Neurons form first, and fibers and connections develop later','All fibers develop first and neurons only at the end','The posterior part is sensory and the anterior part is motor','Peripheral ganglia, sensory neurons, and Schwann cells'], explanation: 'The lesson emphasizes that neurogenesis and layers appear first, followed by maturation of connections and fibers.' },
      11: { topic: 'Neural Tube Closure', question: 'What may happen if the neural tube does not close properly around week 4?', options: ['A malformation in which the spinal cord does not close properly','Overproduction of social cortex','GABA may start as excitatory and become inhibitory because of chloride balance','In a critical period, missing the window may be irreversible; in a sensitive period, correction is possible but harder'], explanation: 'Abnormal closure of the neural tube can lead to significant structural damage in the spinal cord.' },
      12: { topic: 'Radial Migration', question: 'What is radial migration in the developing cortex?', options: ['Cells move from the inner region outward and build cortical layers','Pruning synapses that were not strengthened through experience and use','The brain stops using information from one eye during an important developmental window','Along the dorsal axis of the embryo, later forming the brain and spinal cord'], explanation: 'Young neurons climb outward, and this builds the different layers.' },
      13: { topic: 'Developmental Disorders', question: 'Which problem is related to failure of migration and layer organization?', options: ['Lissencephaly or microgyria','Spina bifida','Developmental amblyopia','Reduced prefrontal myelination'], explanation: 'When cells do not reach their place or do not form normal layers, cortical structure is impaired.' },
      14: { topic: 'Synaptogenesis', question: 'When does synaptogenesis begin according to the lesson?', options: ['Around after week 24','Only after age 20','Lissencephaly or microgyria','Sensory regions myelinate early and prefrontal regions late, into the 20s'], explanation: 'After neurogenesis and migration, massive formation of synapses begins.' },
      15: { topic: 'Pruning', question: 'What is pruning in brain development?', options: ['Cutting back synapses that were not strengthened through experience and use','Creating all neurons again in adulthood','Cells move from the inner region outward and build cortical layers','A malformation in which the spinal cord does not close properly'], explanation: 'After overproduction of connections, environmental experience strengthens some and others weaken and disappear.' },
      16: { topic: 'Myelination', question: 'Which myelination pattern is described in the lesson?', options: ['Sensory regions myelinate early and prefrontal regions late, into the 20s','Lissencephaly or microgyria','Maturation, pruning, and myelination occur alongside emotional and cognitive load','Around after week 24'], explanation: 'Slow prefrontal maturation explains part of the late development of regulation and control.' },
      17: { topic: 'Developmental Periods', question: 'What is the difference between a critical period and a sensitive period?', options: ['In a critical period, missing the window may be irreversible; in a sensitive period, correction is possible but harder','Sensitive periods exist only in old age and critical periods only in embryonic life','GABA may start as excitatory and become inhibitory because of chloride balance','A malformation in which the spinal cord does not close properly'], explanation: 'A sensitive period leaves more possibility for correction, but the time window is still very meaningful.' },
      18: { topic: 'Vision and Development', question: 'Why can childhood strabismus cause amblyopia?', options: ['The brain stops using information from one eye during an important developmental window','Maturation, pruning, and myelination occur alongside emotional and cognitive load','Cells move from the inner region outward and build cortical layers','Along the dorsal axis of the embryo, later forming the brain and spinal cord'], explanation: 'If the visual system does not receive proper input at the right time, the representation of that eye may develop poorly.' },
      19: { topic: 'GABA in Development', question: 'What changes in the action of GABA during development?', options: ['GABA may start as excitatory and become inhibitory because of chloride balance','In a critical period, missing the window may be irreversible; in a sensitive period, correction is possible but harder','A malformation in which the spinal cord does not close properly','Maturation, pruning, and myelination occur alongside emotional and cognitive load'], explanation: 'The change is not in the substance itself but in the ion balance that determines the direction of the electrical effect.' },
      20: { topic: 'Psychiatry and Adolescence', question: 'Why is adolescence considered sensitive for the emergence of severe psychiatric disorders?', options: ['Maturation, pruning, and myelination occur alongside emotional and cognitive load','The brain stops using information from one eye during an important developmental window','Sensory regions myelinate early and prefrontal regions late, into the 20s','In a critical period, missing the window may be irreversible; in a sensitive period, correction is possible but harder'], explanation: 'The lesson suggests that many changes occur in parallel at this age, while regulatory systems are still maturing.' },
      21: { topic: 'Folding and Development', question: 'Why does hemispheric growth change the brain from a simple sphere into a complex temporal and frontal structure?', options: ['The anterior part grows within limited space and therefore expands and bends in different directions','They may contribute to brain reserve so gradual loss appears later','Ventricular expansion changes the geometry so motor is closer to the midline and sensory is lateral','Coordination between cells can add/strengthen receptors, and lack of coordination can weaken a synapse'], explanation: 'Rapid growth within the skull and ventricles leads to folding and an arrangement in which internal structures remain deeper.' },
      22: { topic: 'Organization in the Medulla', question: 'Why does sensory-motor organization look different in the medulla and midbrain than in the spinal cord?', options: ['Ventricular expansion changes the geometry so motor is closer to the midline and sensory is lateral','Coordination between cells can add/strengthen receptors, and lack of coordination can weaken a synapse','The anterior part grows within limited space and therefore expands and bends in different directions','They may contribute to brain reserve so gradual loss appears later'], explanation: 'The principle is preserved, but ventricular expansion opens the structure and changes the location of the columns.' },
      23: { topic: 'Cortical Layers', question: 'What explains the formation of cortical layers?', options: ['Young neurons migrate along glial processes and successive layers are built','Ongoing myelination and pruning in prefrontal regions and connectivity networks','Their accumulation is related to damage, but they may also be a byproduct of immune processes','A critical or sensitive period in which early input shapes circuits'], explanation: 'The final position of cells migrating outward creates the layered organization of the cortex.' },
      24: { topic: 'Plasticity', question: 'How do LTP and LTD demonstrate synaptic plasticity?', options: ['Coordination between cells can add/strengthen receptors, and lack of coordination can weaken a synapse','Ventricular expansion changes the geometry so motor is closer to the midline and sensory is lateral','The anterior part grows within limited space and therefore expands and bends in different directions','They may contribute to brain reserve so gradual loss appears later'], explanation: 'The lesson presents changes in receptor number and synaptic strength as a micro-level mechanism of learning and memory.' },
      25: { topic: 'Neurogenesis and Environment', question: 'Which combination is expected to support hippocampal neurogenesis more?', options: ['Physical activity, enriched environment, and social interaction','Reduced quality of myelin and connections between regions','A critical or sensitive period in which early input shapes circuits','Ongoing myelination and pruning in prefrontal regions and connectivity networks'], explanation: 'Beneficial factors such as activity and environmental stimulation are related to BDNF and support for neurogenesis.' },
      26: { topic: 'Stress and Neurogenesis', question: 'How can chronic stress affect neurogenesis?', options: ['Reduce neurogenesis, especially in the hippocampus','Coordination between cells can add/strengthen receptors, and lack of coordination can weaken a synapse','They may contribute to brain reserve so gradual loss appears later','The anterior part grows within limited space and therefore expands and bends in different directions'], explanation: 'The lesson notes stress as one of the factors that reduce formation of new cells in the hippocampus.' },
      27: { topic: 'Brain Reserve', question: 'Why can an enriched environment and social connections be important in old age?', options: ['They may contribute to brain reserve so gradual loss appears later','The anterior part grows within limited space and therefore expands and bends in different directions','Ventricular expansion changes the geometry so motor is closer to the midline and sensory is lateral','Coordination between cells can add/strengthen receptors, and lack of coordination can weaken a synapse'], explanation: 'Higher reserve may allow better function despite gradual decline in structure or connectivity.' },
      28: { topic: 'Brain Aging', question: 'Which white-matter change is related to slower information processing in old age?', options: ['Reduced quality of myelin and connections between regions','Physical activity, enriched environment, and social interaction','A critical or sensitive period in which early input shapes circuits','They may contribute to brain reserve so gradual loss appears later'], explanation: 'White matter and fibers are affected with age, making information transfer between regions less efficient.' },
      29: { topic: 'First In, Last Out', question: 'What does the principle “first to develop is last to age” mean in the context of the lesson?', options: ['Basic sensorimotor regions tend to be relatively more preserved in old age','They may contribute to brain reserve so gradual loss appears later','Young neurons migrate along glial processes and successive layers are built','The anterior part grows within limited space and therefore expands and bends in different directions'], explanation: 'Basic regions that developed early are relatively less affected compared with later-developing connectivity and control systems.' },
      30: { topic: 'Alzheimer’s and Aging', question: 'What is cautiously said about amyloid and tau in aging and Alzheimer’s?', options: ['Their accumulation is related to damage, but they may also be a byproduct of immune processes','Ongoing myelination and pruning in prefrontal regions and connectivity networks','Young neurons migrate along glial processes and successive layers are built','A critical or sensitive period in which early input shapes circuits'], explanation: 'The lesson mentions these accumulations while also noting the current debate over whether they are the main cause or part of a broader response.' },
      31: { topic: 'Integration Questions', question: 'A child with early visual deprivation has difficulty developing normal vision even after late correction. Which developmental principle is demonstrated?', options: ['A critical or sensitive period in which early input shapes circuits','Ongoing myelination and pruning in prefrontal regions and connectivity networks','Young neurons migrate along glial processes and successive layers are built','Their accumulation is related to damage, but they may also be a byproduct of immune processes'], explanation: 'During early developmental windows, sensory input organizes circuits, and late correction may be more limited.' },
      32: { topic: 'Integration Questions', question: 'An adolescent shows difficulty with emotional regulation and decision-making while control systems are still maturing. Which process fits?', options: ['Ongoing myelination and pruning in prefrontal regions and connectivity networks','A critical or sensitive period in which early input shapes circuits','Their accumulation is related to damage, but they may also be a byproduct of immune processes','Young neurons migrate along glial processes and successive layers are built'], explanation: 'Adolescence includes ongoing maturation of connections and frontal control alongside emotional and social load.' },
      33: { topic: 'Brain Location Quiz', question: 'Where does the neural tube develop in relation to the future nervous system?', options: ['Along the dorsal axis of the embryo, later forming the brain and spinal cord','From the neural crest, later forming ganglia and Schwann cells','From the notochord, later forming mainly the supporting axis beneath the tube','From the diencephalon, later forming the thalamus, hypothalamus, and retina'], explanation: 'The neural tube is the central source of the central nervous system: brain and spinal cord.' }
    },
    clinicalIntegration: {
      1: { topic: 'Clinical Integration', question: 'Lucas says he enters a casino “just for ten minutes” and stays for hours. Even after losses, he feels the next round must win the money back, has trouble stopping, and prefers immediate reward over future harm. Which brain mechanism fits best?', options: ['Bias in the dopaminergic reward system in the ventral striatum alongside weak PFC/OFC control','Integration between the HPA axis, hypothalamus, and autonomic responses through the brainstem','Increased DMN activity and difficulty shifting to the executive control network','Weakness in fronto-striatal networks and executive attention'], explanation: 'Compulsive gambling involves reward, reinforcement, and habits. The striatum and nucleus accumbens respond to reward, and the PFC/OFC help weigh outcomes and inhibit action.' },
      2: { topic: 'Clinical Integration', question: 'Emma was in a car accident, and since then every braking sound startles her. She experiences hypervigilance, flashbacks, and difficulty understanding that the event belongs to the past and is not happening again now. Which brain pattern fits best?', options: ['Amygdala overactivity with weak hippocampal and mPFC regulation','Bias in the dopaminergic reward system in the ventral striatum alongside weak PFC/OFC control','Reduced function in reward circuits such as the striatum and nucleus accumbens','PFC and control networks are still maturing alongside emotional load and stress'], explanation: 'In PTSD, the amygdala may respond strongly to threat, while the hippocampus contributes time and place context and the mPFC regulates fear responses.' },
      3: { topic: 'Clinical Integration', question: 'Loki repeatedly checks that the door is locked, even though he knows he has already checked ten times. He feels anxious until performing the ritual, followed by only brief relief. Which brain system may be involved?', options: ['A cortico-striato-thalamo-cortical loop including OFC/ACC and caudate','Bias in the dopaminergic reward system in the ventral striatum alongside weak PFC/OFC control','The VTA-nucleus accumbens pathway with weak prefrontal control','The insula, as part of interoceptive processing of bodily sensations'], explanation: 'Obsessive-compulsive patterns emphasize loops between frontal control/value regions, the striatum, and thalamus that make it difficult to close an action.' },
      4: { topic: 'Clinical Integration', question: 'Manny spends hours in repetitive thoughts about failures, has difficulty directing attention outward, and feels that every event is personally related to him. Which network mechanism fits?', options: ['Increased DMN activity and difficulty shifting to the executive control network','Damage to the hippocampus and MTL in encoding new episodic memory','Bias in the dopaminergic reward system in the ventral striatum alongside weak PFC/OFC control','Weakness in fronto-striatal networks and executive attention'], explanation: 'Rumination and repeated self-processing are often related to overactivity of the default mode network and less efficient shifting to task and control networks.' },
      5: { topic: 'Clinical Integration', question: 'Marge interprets a racing heartbeat during a panic attack as a sign that she is about to die. She is preoccupied with bodily sensations and reacts to them as a threat. Which region especially fits this integration?', options: ['The insula together with the amygdala','The insula, as part of interoceptive processing of bodily sensations','Amygdala hypersensitivity alongside weak prefrontal regulation','Weakness in fronto-striatal networks and executive attention'], explanation: 'The insula integrates internal bodily input with emotional awareness, and the amygdala signals threat; together they can contribute to catastrophic interpretation of bodily sensations.' },
      6: { topic: 'Clinical Integration', question: 'Zuri stopped using an addictive substance, but a particular smell in the street triggers strong craving and she struggles to resist. Which system is most likely?', options: ['The VTA-nucleus accumbens pathway with weak prefrontal control','Damage to the hippocampus and MTL in encoding new episodic memory','Dopaminergic damage in motor and reward basal ganglia loops','A cortico-striato-thalamo-cortical loop including OFC/ACC and caudate'], explanation: 'Environmental cues can activate reward learning and dopamine in the mesolimbic pathway, while the PFC supports inhibition and long-term choice.' },
      7: { topic: 'Clinical Integration', question: 'Chelsea jumps between tasks in class, has difficulty holding instructions in working memory, and acts before thinking. Which brain mechanism fits?', options: ['Weakness in fronto-striatal networks and executive attention','Integration between the HPA axis, hypothalamus, and autonomic responses through the brainstem','Bias in the dopaminergic reward system in the ventral striatum alongside weak PFC/OFC control','Damage to the hippocampus and MTL in encoding new episodic memory'], explanation: 'Attention, inhibition, and working memory rely on the PFC and its connections to the striatum and attention networks, so weakness there can appear as impulsivity and distractibility.' },
      8: { topic: 'Clinical Integration', question: 'Eyal understands words, but has difficulty understanding sarcasm, social cues, and what another person knows or believes. Which mechanism may be impaired?', options: ['A mentalization network including TPJ and mPFC','Damage to the hippocampus and MTL in encoding new episodic memory','Dopaminergic damage in motor and reward basal ganglia loops','Amygdala hypersensitivity alongside weak prefrontal regulation'], explanation: 'Understanding others’ mental states depends on a mentalization network, especially TPJ and mPFC, beyond basic language comprehension.' },
      9: { topic: 'Clinical Integration', question: 'Nat says she no longer enjoys things that used to matter, and she also does not make an effort to obtain rewards. Which mechanism fits best?', options: ['Reduced function in reward circuits such as the striatum and nucleus accumbens','Integration between the HPA axis, hypothalamus, and autonomic responses through the brainstem','Weakness in fronto-striatal networks and executive attention','Bias in the dopaminergic reward system in the ventral striatum alongside weak PFC/OFC control'], explanation: 'Anhedonia and low motivation are related to reward and dopamine circuits, especially the striatum and nucleus accumbens, together with cortical control.' },
      10: { topic: 'Clinical Integration', question: 'After a brain injury, Omar says tactless things, makes risky decisions, and does not learn from negative social consequences. Which region fits?', options: ['OFC/vmPFC','The insula together with the amygdala','The insula, as part of interoceptive processing of bodily sensations','The suprachiasmatic nucleus in the hypothalamus'], explanation: 'OFC and vmPFC contribute to evaluating the emotional and social value of actions, so damage can cause poor social judgment and impulsivity.' },
      11: { topic: 'Clinical Integration', question: 'Nir feels stomach pain before every exam, struggles to calm down, and even after the exam ends his body remains on alert. Which mechanism fits?', options: ['Integration between the HPA axis, hypothalamus, and autonomic responses through the brainstem','Bias in the dopaminergic reward system in the ventral striatum alongside weak PFC/OFC control','Weakness in fronto-striatal networks and executive attention','Reduced function in reward circuits such as the striatum and nucleus accumbens'], explanation: 'Psychological stress is translated into the body through the hypothalamus, HPA axis, and autonomic systems, so it can appear as bodily sensations and hypervigilance.' },
      12: { topic: 'Clinical Integration', question: 'Shai returns from vacation and for several days has difficulty falling asleep at night and waking in the morning, mainly after a sharp time-zone change. Which structure is relevant?', options: ['The suprachiasmatic nucleus in the hypothalamus','Reconsolidation and memory updating after retrieval','The insula, as part of interoceptive processing of bodily sensations','A mentalization network including TPJ and mPFC'], explanation: 'The SCN is the central clock synchronized to light and darkness. A time-zone change creates a gap between the internal clock and the environment.' },
      13: { topic: 'Clinical Integration', question: 'Yam recognizes faces and voices, but has difficulty remembering a new event that happened yesterday and the context in which he met a certain person. Which mechanism fits?', options: ['Damage to the hippocampus and MTL in encoding new episodic memory','Increased DMN activity and difficulty shifting to the executive control network','A mentalization network including TPJ and mPFC','Amygdala hypersensitivity alongside weak prefrontal regulation'], explanation: 'The hippocampus and MTL are important for encoding new episodic and contextual memory, even when basic perception of stimuli is preserved.' },
      14: { topic: 'Clinical Integration', question: 'During a conversation, Tamar gets stuck on an internal thought and misses important information appearing externally. She has trouble switching between “what is happening in my head” and the task. Which network is relevant?', options: ['The salience network mediating the transition between DMN and CEN','Weakness in fronto-striatal networks and executive attention','Increased DMN activity and difficulty shifting to the executive control network','The VTA-nucleus accumbens pathway with weak prefrontal control'], explanation: 'The salience network helps identify important information and transfer resources between internal processing and external goal-directed control.' },
      15: { topic: 'Clinical Integration', question: 'After a frontal injury, Michal can explain what is right to do, but in real time cannot stop an inappropriate response. What is probably impaired?', options: ['Executive control and response inhibition in PFC/ACC','Reconsolidation and memory updating after retrieval','Dopaminergic damage in motor and reward basal ganglia loops','The suprachiasmatic nucleus in the hypothalamus'], explanation: 'Response inhibition and conflict monitoring depend on prefrontal control networks, including the ACC.' },
      16: { topic: 'Clinical Integration', question: 'Rin avoids social meetings because every small glance is interpreted as contempt or danger. She identifies neutral cues as threat. Which mechanism fits?', options: ['Amygdala hypersensitivity alongside weak prefrontal regulation','Damage to the hippocampus and MTL in encoding new episodic memory','A mentalization network including TPJ and mPFC','Increased DMN activity and difficulty shifting to the executive control network'], explanation: 'The amygdala signals salience and threat, and the PFC helps interpret and regulate. A threat bias can appear as social anxiety.' },
      17: { topic: 'Clinical Integration', question: 'After an embarrassing event, Yael has difficulty updating the memory despite new experiences showing that the danger has passed. Therapy tries to reactivate the memory and then teach a new response. Which principle is involved?', options: ['Reconsolidation and memory updating after retrieval','Damage to the hippocampus and MTL in encoding new episodic memory','Increased DMN activity and difficulty shifting to the executive control network','Integration between the HPA axis, hypothalamus, and autonomic responses through the brainstem'], explanation: 'When a memory is retrieved it may enter an updating window, in which new learning can modify the emotional response associated with it.' },
      18: { topic: 'Clinical Integration', question: 'Shaked has difficulty initiating movement, but also reports reduced motivation and reduced sense of reward. Which broad mechanism can explain the combination?', options: ['Dopaminergic damage in motor and reward basal ganglia loops','Damage to the hippocampus and MTL in encoding new episodic memory','A mentalization network including TPJ and mPFC','Disruption in the mentalization network and prefrontal regulation of the amygdala and salience network'], explanation: 'Dopamine in basal ganglia loops is related to both movement and motivation/reward, so damage can affect both domains.' },
      19: { topic: 'Clinical Integration', question: 'Noa sleeps little, experiences high stress, and has difficulty regulating strong emotional responses. Which developmental explanation fits?', options: ['PFC and control networks are still maturing alongside emotional load and stress','Amygdala overactivity with weak hippocampal and mPFC regulation','The insula, as part of interoceptive processing of bodily sensations','Reduced function in reward circuits such as the striatum and nucleus accumbens'], explanation: 'In adolescence, ongoing pruning and myelination occur, especially in frontal control networks, alongside emotional and environmental sensitivity.' },
      20: { topic: 'Clinical Integration', question: 'Dafna interprets every sensation of hunger or fullness as danger, repeatedly checks her body, and has difficulty using internal sensations flexibly. Which region especially fits?', options: ['The insula, as part of interoceptive processing of bodily sensations','The insula together with the amygdala','PFC and control networks are still maturing alongside emotional load and stress','Amygdala overactivity with weak hippocampal and mPFC regulation'], explanation: 'The insula is central to awareness of internal sensations and their connection to emotion, so inflexible processing there can contribute to increased body preoccupation.' },
      21: { topic: 'Clinical Integration', question: 'Rita sits in the cafeteria and hears two friends laughing near the table. Although it has nothing to do with her, she is sure they are talking about her and attributing negative intent to her. Which brain mechanism can explain this excessive attribution of social meaning?', options: ['Disruption in the mentalization network and prefrontal regulation of the amygdala and salience network','Dopaminergic damage in motor and reward basal ganglia loops','Bias in the dopaminergic reward system in the ventral striatum alongside weak PFC/OFC control','Amygdala overactivity with weak hippocampal and mPFC regulation'], explanation: 'Attributing intentions to others depends on a mentalization network such as TPJ and mPFC. When neutral cues receive salience and threat value, the amygdala and salience network may strengthen threatening social interpretations.' }
    },
    brainRegionImages: {
      1: { topic: 'Limbic and MTL (Medial Temporal Lobe)', question: 'Which structure is colored in the image?', options: ['Hypothalamus','Thalamus','Hippocampus','Mammillary bodies'], explanation: 'The hypothalamus is located below the thalamus and in the floor of the third ventricle, linking neural, hormonal, and autonomic regulation.' },
      2: { topic: 'Limbic and MTL (Medial Temporal Lobe)', question: 'Which structure is colored in the image?', options: ['Amygdala','Hippocampus','Insula','LGN (Lateral Geniculate Nucleus)'], explanation: 'The amygdala lies deep in the medial temporal lobe, relatively anterior to the hippocampus, and is related to threat and emotion processing.' },
      3: { topic: 'Limbic and MTL (Medial Temporal Lobe)', question: 'Which structure is colored in the image?', options: ['Hippocampus','Amygdala','Fornix','VPM (Ventral Posteromedial Nucleus)'], explanation: 'The hippocampus is an elongated medial temporal structure involved in episodic and contextual memory encoding.' },
      4: { topic: 'Limbic and MTL (Medial Temporal Lobe)', question: 'Which pathway is colored in the image?', options: ['Fornix','Corpus callosum','Arcuate fasciculus','Cingulum'], explanation: 'The fornix is an arching pathway that leaves the hippocampus and connects, among other targets, to the mammillary bodies.' },
      5: { topic: 'Limbic and MTL (Medial Temporal Lobe)', question: 'Which structure is colored in the image?', options: ['Mammillary bodies','Hypothalamus','PAG (Periaqueductal Gray)','Reticular nucleus of the thalamus'], explanation: 'The mammillary bodies are a pair of small structures at the base of the hypothalamus and participate in limbic memory circuits.' },
      6: { topic: 'Limbic and MTL (Medial Temporal Lobe)', question: 'Which system is colored in the image?', options: ['Limbic system','Basal ganglia','DMN (Default Mode Network)','Dorsal visual system'], explanation: 'The limbic system includes medial structures such as the cingulum, fornix, hippocampus, amygdala, and mammillary bodies.' },
      15: { topic: 'Thalamus and Brainstem', question: 'Which structure is colored in the image?', options: ['Thalamus','Hypothalamus','Midbrain','Corpus callosum'], explanation: 'The thalamus is a deep diencephalic structure above the hypothalamus and serves as a central relay and control station for the cortex.' },
      16: { topic: 'Thalamus and Brainstem', question: 'On the thalamic nuclei map, which nucleus is the highlighted green region?', options: ['LGN (Lateral Geniculate Nucleus)','MGN (Medial Geniculate Nucleus)','VPL (Ventral Posterolateral Nucleus)','VPM (Ventral Posteromedial Nucleus)'], explanation: 'The LGN is the lateral geniculate nucleus of the thalamus and relays visual information to the visual cortex.' },
      17: { topic: 'Thalamus and Brainstem', question: 'On the thalamic nuclei map, which nucleus is the highlighted blue region?', options: ['MGN (Medial Geniculate Nucleus)','LGN (Lateral Geniculate Nucleus)','PAG (Periaqueductal Gray)','Reticular nucleus of the thalamus'], explanation: 'The MGN is the medial geniculate nucleus of the thalamus and relays auditory information to the auditory cortex.' },
      18: { topic: 'Thalamus and Brainstem', question: 'On the thalamic nuclei map, which nucleus is the highlighted purple region?', options: ['VPL (Ventral Posterolateral Nucleus)','VPM (Ventral Posteromedial Nucleus)','LGN (Lateral Geniculate Nucleus)','MGN (Medial Geniculate Nucleus)'], explanation: 'The VPL mainly relays somatosensory information from the body to the somatosensory cortex.' },
      19: { topic: 'Thalamus and Brainstem', question: 'On the thalamic nuclei map, which nucleus is the highlighted pink region?', options: ['VPM (Ventral Posteromedial Nucleus)','VPL (Ventral Posterolateral Nucleus)','LGN (Lateral Geniculate Nucleus)','PAG (Periaqueductal Gray)'], explanation: 'The VPM mainly relays somatosensory information from the face and taste information to the cortex.' },
      20: { topic: 'Thalamus and Brainstem', question: 'On the thalamic nuclei map, which nucleus is the highlighted orange region?', options: ['Reticular nucleus of the thalamus','LGN (Lateral Geniculate Nucleus)','Mammillary bodies','Nucleus accumbens'], explanation: 'The reticular nucleus of the thalamus wraps around parts of the thalamus and participates in filtering and regulating thalamo-cortical information flow.' },
      21: { topic: 'Thalamus and Brainstem', question: 'Which region is colored around the aqueduct in the midbrain?', options: ['PAG (Periaqueductal Gray)','Midbrain','Thalamus','Fornix'], explanation: 'The PAG is located around the aqueduct in the midbrain and is related to pain modulation, defense, and autonomic responses.' },
      22: { topic: 'Thalamus and Brainstem', question: 'Which part of the brainstem is colored in the image?', options: ['Midbrain','Pons','Medulla','Cerebellum'], explanation: 'The midbrain is the upper part of the brainstem, above the pons, and includes structures such as the PAG.' },
      23: { topic: 'White Matter and Cortical Landmarks', question: 'Which pathway is colored in the image?', options: ['Corpus callosum','Fornix','Cingulum','SLF (Superior Longitudinal Fasciculus)'], explanation: 'The corpus callosum is a large white-matter tract that connects the two hemispheres.' },
      24: { topic: 'White Matter and Cortical Landmarks', question: 'Which pathway is colored in the image?', options: ['Arcuate fasciculus','SLF (Superior Longitudinal Fasciculus)','Uncinate fasciculus','Cingulum'], explanation: 'The arcuate fasciculus connects frontal and temporal language regions, for example Broca’s and Wernicke’s areas.' },
      25: { topic: 'White Matter and Cortical Landmarks', question: 'Which pathway is colored in the image?', options: ['SLF (Superior Longitudinal Fasciculus)','Arcuate fasciculus','Uncinate fasciculus','Corpus callosum'], explanation: 'The SLF is a superior longitudinal pathway connecting frontal, parietal, and temporal regions.' },
      26: { topic: 'White Matter and Cortical Landmarks', question: 'Which pathway is colored in the image?', options: ['Uncinate fasciculus','Arcuate fasciculus','Cingulum','Fornix'], explanation: 'The uncinate fasciculus connects orbitofrontal regions with the anterior temporal lobe.' },
      27: { topic: 'White Matter and Cortical Landmarks', question: 'Which pathway is colored in the image?', options: ['Cingulum','Corpus callosum','SLF (Superior Longitudinal Fasciculus)','Calcarine sulcus'], explanation: 'The cingulum runs along the cingulate cortex and connects medial regions related to emotion, memory, and control.' },
      28: { topic: 'White Matter and Cortical Landmarks', question: 'Which sulcus is colored in the image?', options: ['Central sulcus','Sylvian fissure','Calcarine sulcus','Longitudinal fissure'], explanation: 'The central sulcus separates the frontal lobe from the parietal lobe, and M1 from S1.' },
      29: { topic: 'White Matter and Cortical Landmarks', question: 'Which gyrus is colored in the image?', options: ['Precentral gyrus','Postcentral gyrus','Cingulate gyrus','Parahippocampal gyrus'], explanation: 'The precentral gyrus lies anterior to the central sulcus and contains the primary motor cortex.' },
      30: { topic: 'White Matter and Cortical Landmarks', question: 'Which sulcus/fissure is colored in the image?', options: ['Sylvian fissure / lateral sulcus','Central sulcus','Calcarine sulcus','Longitudinal fissure'], explanation: 'The Sylvian fissure, or lateral sulcus, separates the temporal lobe from the frontal and parietal lobes.' },
      31: { topic: 'White Matter and Cortical Landmarks', question: 'Which sulcus is colored in the image?', options: ['Calcarine sulcus','Central sulcus','Sylvian fissure','Collateral sulcus'], explanation: 'The calcarine sulcus is located in the medial occipital lobe, and the primary visual cortex lies around it.' },
      32: { topic: 'White Matter and Cortical Landmarks', question: 'Which fissure is colored in the image?', options: ['Longitudinal fissure','Sylvian fissure','Central sulcus','Calcarine sulcus'], explanation: 'The longitudinal fissure separates the left and right hemispheres along the midline.' }
    }
  };

  Object.entries(translations).forEach(function ([lessonKey, lessonTranslations]) {
    if (typeof questionBank === 'undefined' || !questionBank[lessonKey]) return;
    Object.entries(lessonTranslations).forEach(function ([id, english]) {
      const question = questionBank[lessonKey].find(function (item) { return item.id === Number(id); });
      if (!question) return;
      question.i18n = Object.assign({}, question.i18n, { en: english });
    });
  });
})();
