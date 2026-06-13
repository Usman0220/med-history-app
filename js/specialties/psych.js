// == PSYCHIATRY ==
const PSYCH_QUESTIONS = [{ id: 'psych-exam', title: 'Mental State Examination (MSE)', fields: [
  { id: 'psych_appearance', label: 'Appearance & behavior', type: 'textarea' }, { id: 'psych_speech', label: 'Speech (rate, rhythm, volume, tone)', type: 'textarea' },
  { id: 'psych_mood', label: 'Mood (subjective)', type: 'text' }, { id: 'psych_affect', label: 'Affect (objective)', type: 'select', options: ['Euthymic', 'Depressed', 'Elevated/elated', 'Anxious', 'Irritable', 'Blunted/flat', 'Labile', 'Restricted', 'Congruent'] },
  { id: 'psych_thought_form', label: 'Thought form', type: 'select', options: ['Normal', 'Circumstantial', 'Tangential', 'Loosening of associations', 'Flight of ideas', 'Thought blocking', 'Perseveration'] },
  { id: 'psych_thought_content', label: 'Thought content', type: 'textarea' }, { id: 'psych_delusions', label: 'Delusions (type, system, conviction)', type: 'textarea' },
  { id: 'psych_hallucinations', label: 'Hallucinations (modality, content, frequency)', type: 'textarea' },
  { id: 'psych_cognition', label: 'Cognition / MMSE', type: 'textarea' }, { id: 'psych_insight', label: 'Insight', type: 'select', options: ['Full insight', 'Partial insight', 'Poor insight', 'Absent insight'] },
  { id: 'psych_risk', label: 'Risk assessment', type: 'checkbox', options: ['Suicidal ideation', 'Self-harm', 'Aggression/violence', 'Neglect', 'Absconding risk', 'Harm to others'] }] }];
const PSYCH_DISEASES = {
  depression_mdd: [{ id: 'dep-history', title: 'Major Depressive Disorder History', fields: [
    { id: 'dep_episodes', label: 'Number of episodes', type: 'text' }, { id: 'dep_onset', label: 'Onset of current episode', type: 'text' },
    { id: 'dep_duration', label: 'Duration of current episode', type: 'select', options: ['< 2 weeks', '2-4 weeks', '1-3 months', '3-6 months', '> 6 months', 'Chronic (> 2 years)'] },
    { id: 'dep_core', label: 'Core symptoms', type: 'checkbox', options: ['Depressed mood most of day', 'Anhedonia (loss of interest/pleasure)', 'Fatigue/low energy'] },
    { id: 'dep_other', label: 'Other symptoms', type: 'checkbox', options: ['Sleep disturbance', 'Appetite/weight change', 'Psychomotor agitation/retardation', 'Feelings of worthlessness/guilt', 'Poor concentration', 'Suicidal thoughts/plans'] },
    { id: 'dep_severity', label: 'Severity (PHQ-9 or clinical)', type: 'select', options: ['Mild', 'Moderate', 'Moderate-severe', 'Severe with psychotic features'] },
    { id: 'dep_family', label: 'Family history of depression / suicide', type: 'text' }, { id: 'dep_triggers', label: 'Precipitating factors', type: 'textarea' },
    { id: 'dep_treatment', label: 'Current/past treatment (meds, therapy, ECT)', type: 'textarea' }] }],
  anxiety_gad: [{ id: 'anxiety-history', title: 'Generalized Anxiety Disorder History', fields: [
    { id: 'gad_duration', label: 'Duration of excessive worry', type: 'select', options: ['< 6 months', '> 6 months', 'Years'] },
    { id: 'gad_worry', label: 'Worry themes', type: 'checkbox', options: ['Health', 'Finance', 'Work/school', 'Family', 'Minor daily matters', 'Performance', 'Fear of disaster'] },
    { id: 'gad_control', label: 'Ability to control worry', type: 'select', options: ['Can control', 'Difficulty controlling', 'Cannot control'] },
    { id: 'gad_somatic', label: 'Somatic symptoms', type: 'checkbox', options: ['Restlessness', 'Fatigue', 'Muscle tension', 'Sleep disturbance', 'Irritability', 'Poor concentration', 'Palpitations', 'Tremor', 'Sweating', 'GI upset'] },
    { id: 'gad_functional', label: 'Functional impairment', type: 'select', options: ['None', 'Mild', 'Moderate', 'Severe - unable to work/study'] },
    { id: 'gad_treatment', label: 'Current/past treatment', type: 'textarea' }] }],
  psychosis: [{ id: 'psychosis-history', title: 'Psychosis / Schizophrenia History', fields: [
    { id: 'ps_diagnosis', label: 'Diagnosis', type: 'select', options: ['Schizophrenia', 'Schizoaffective disorder', 'Brief psychotic disorder', 'Schizophreniform disorder', 'Delusional disorder', 'Substance-induced psychosis', 'Psychosis NOS'] },
    { id: 'ps_onset', label: 'Age of first onset', type: 'text' }, { id: 'ps_duration', label: 'Duration of illness', type: 'text' },
    { id: 'ps_positive', label: 'Positive symptoms', type: 'checkbox', options: ['Delusions', 'Hallucinations (auditory)', 'Hallucinations (visual)', 'Hallucinations (other)', 'Disorganized speech', 'Disorganized behavior', 'Catatonia'] },
    { id: 'ps_negative', label: 'Negative symptoms', type: 'checkbox', options: ['Social withdrawal', 'Avolition (lack of motivation)', 'Alogia (poverty of speech)', 'Anhedonia', 'Flat affect', 'Poor self-care'] },
    { id: 'ps_cognitive', label: 'Cognitive symptoms', type: 'textarea' }, { id: 'ps_substance', label: 'Substance use (contributing factor)', type: 'textarea' },
    { id: 'ps_hospitalizations', label: 'Previous hospitalizations', type: 'text' }, { id: 'ps_medication', label: 'Current/last antipsychotic medication', type: 'textarea' },
    { id: 'ps_compliance', label: 'Medication compliance', type: 'select', options: ['Good', 'Partial', 'Poor', 'Defaulted'] }] }],
  bipolar: [{ id: 'bipolar-history', title: 'Bipolar Disorder History', fields: [
    { id: 'bp_type', label: 'Type', type: 'select', options: ['Bipolar I', 'Bipolar II', 'Cyclothymia', 'Bipolar NOS'] },
    { id: 'bp_mood_episodes', label: 'Current mood episode', type: 'select', options: ['Manic', 'Hypomanic', 'Depressed', 'Mixed', 'Euthymic'] },
    { id: 'bp_manic', label: 'Manic/hypomanic symptoms', type: 'checkbox', options: ['Elevated/expansive mood', 'Irritability', 'Decreased need for sleep', 'Grandiosity', 'Pressured speech', 'Flight of ideas', 'Increased goal-directed activity', 'Risky behavior', 'Distractibility'] },
    { id: 'bp_episode_count', label: 'Number of manic/hypomanic episodes', type: 'text' }, { id: 'bp_hospitalizations', label: 'Hospitalizations for mania', type: 'text' },
    { id: 'bp_mood_stabilizer', label: 'Mood stabilizer (lithium, valproate, etc.)', type: 'text' }, { id: 'bp_lithium', label: 'Lithium levels (if applicable)', type: 'text' }] }],
  ocd: [{ id: 'ocd-history', title: 'OCD History', fields: [
    { id: 'ocd_obsessions', label: 'Obsession themes', type: 'checkbox', options: ['Contamination', 'Symmetry/order', 'Aggressive/harm', 'Sexual/religious', 'Somatic', 'Doubting/checking'] },
    { id: 'ocd_compulsions', label: 'Compulsion themes', type: 'checkbox', options: ['Washing/cleaning', 'Checking', 'Counting', 'Repeating', 'Ordering/arranging', 'Mental rituals', 'Reassurance seeking'] },
    { id: 'ocd_insight', label: 'Insight into obsessions/compulsions', type: 'select', options: ['Good insight (beliefs likely false)', 'Fair insight', 'Poor insight (beliefs true)', 'Absent insight (delusional)'] },
    { id: 'ocd_time', label: 'Time consumed by obsessions/compulsions', type: 'select', options: ['< 1 hour/day', '1-3 hours/day', '3-8 hours/day', '> 8 hours/day'] },
    { id: 'ocd_functional', label: 'Functional impairment', type: 'textarea' }, { id: 'ocd_treatment', label: 'Current/past treatment (SSRI, ERP)', type: 'textarea' }] }],
  ptsd: [{ id: 'ptsd-history', title: 'PTSD History', fields: [
    { id: 'ptsd_trauma', label: 'Type of trauma', type: 'select', options: ['Combat/war', 'Sexual assault', 'Physical assault', 'Accident', 'Natural disaster', 'Childhood abuse', 'Medical trauma', 'Witnessed trauma'] },
    { id: 'ptsd_re_experiencing', label: 'Re-experiencing symptoms', type: 'checkbox', options: ['Intrusive memories', 'Flashbacks', 'Nightmares', 'Psychological distress to cues', 'Physiological reactivity to cues'] },
    { id: 'ptsd_avoidance', label: 'Avoidance symptoms', type: 'textarea' },
    { id: 'ptsd_cognition', label: 'Negative cognition / mood', type: 'checkbox', options: ['Inability to recall parts of trauma', 'Negative beliefs about self/world', 'Blame', 'Negative emotional state', 'Loss of interest', 'Feeling detached', 'Inability to feel positive'] },
    { id: 'ptsd_arousal', label: 'Arousal / reactivity symptoms', type: 'checkbox', options: ['Irritability/anger', 'Reckless behavior', 'Hypervigilance', 'Exaggerated startle', 'Poor concentration', 'Sleep disturbance'] },
    { id: 'ptsd_duration', label: 'Duration of symptoms', type: 'select', options: ['< 1 month (acute stress disorder)', '1-3 months (acute PTSD)', '> 3 months (chronic PTSD)', 'Delayed onset (> 6 months after trauma)'] }] }]
};