const BASE_STEPS = [
  {
    id: 'patient-info',
    title: 'Patient Information',
    fields: [
      { id: 'name', label: 'Full Name', type: 'text', required: true },
      { id: 'age', label: 'Age', type: 'number', required: true },
      { id: 'gender', label: 'Gender', type: 'select', options: ['Male', 'Female', 'Other'], required: true },
      { id: 'occupation', label: 'Occupation', type: 'text' },
      { id: 'contact', label: 'Contact Number', type: 'tel' },
      { id: 'address', label: 'Address', type: 'textarea' }
    ]
  },
  {
    id: 'chief-complaint',
    title: 'Chief Complaint',
    fields: [
      { id: 'cc', label: 'What is the main problem?', type: 'textarea', required: true,
        hint: 'In the patient\'s own words' },
      { id: 'duration', label: 'How long has this been present?', type: 'text', required: true },
      { id: 'onset', label: 'Onset', type: 'select',
        options: ['Sudden', 'Gradual', 'Intermittent', 'Constant'] },
      { id: 'severity', label: 'Severity (1-10)', type: 'number', attrs: { min: 1, max: 10 } }
    ]
  },
  {
    id: 'hopi',
    title: 'History of Presenting Illness',
    fields: [
      { id: 'site', label: 'Site / Location', type: 'text' },
      { id: 'character', label: 'Character (quality of symptom)', type: 'textarea' },
      { id: 'radiation', label: 'Radiation (does it spread?)', type: 'text' },
      { id: 'assoc_symptoms', label: 'Associated symptoms', type: 'textarea' },
      { id: 'timing', label: 'Timing / frequency', type: 'textarea' },
      { id: 'exacerbating', label: 'What makes it worse?', type: 'textarea' },
      { id: 'relieving', label: 'What makes it better?', type: 'textarea' },
      { id: 'previous_episodes', label: 'Previous similar episodes?', type: 'text' },
      { id: 'treatment_tried', label: 'Any treatment tried?', type: 'textarea' }
    ]
  },
  {
    id: 'pmh',
    title: 'Past Medical History',
    fields: [
      { id: 'chronic_dz', label: 'Chronic diseases (DM, HTN, Asthma, etc.)', type: 'textarea' },
      { id: 'hospitalizations', label: 'Previous hospitalizations', type: 'textarea' },
      { id: 'surgeries', label: 'Previous surgeries', type: 'textarea' },
      { id: 'blood_transfusion', label: 'Blood transfusion history', type: 'text' },
      { id: 'allergies', label: 'Allergies (drugs, food, etc.)', type: 'textarea' },
      { id: 'vaccinations', label: 'Vaccination status', type: 'textarea' }
    ]
  },
  {
    id: 'drug-history',
    title: 'Drug History',
    fields: [
      { id: 'current_meds', label: 'Current medications (name, dose, frequency)', type: 'textarea' },
      { id: 'otc_meds', label: 'Over-the-counter / herbal medications', type: 'textarea' },
      { id: 'adverse_drug', label: 'Previous adverse drug reactions', type: 'textarea' },
      { id: 'adherence', label: 'Medication adherence', type: 'select',
        options: ['Always', 'Sometimes', 'Rarely', 'Never'] }
    ]
  },
  {
    id: 'family-history',
    title: 'Family History',
    fields: [
      { id: 'family_dz', label: 'Family diseases (DM, HTN, Cancer, etc.)', type: 'textarea' },
      { id: 'genetic_disorders', label: 'Genetic / hereditary disorders', type: 'textarea' },
      { id: 'family_mental', label: 'Family psychiatric history', type: 'textarea' }
    ]
  },
  {
    id: 'social-history',
    title: 'Social History',
    fields: [
      { id: 'smoking', label: 'Smoking status', type: 'select',
        options: ['Never', 'Former', 'Current'] },
      { id: 'alcohol', label: 'Alcohol consumption', type: 'select',
        options: ['Never', 'Occasional', 'Regular'] },
      { id: 'substance_use', label: 'Recreational drug use', type: 'textarea' },
      { id: 'diet', label: 'Diet / nutrition', type: 'textarea' },
      { id: 'exercise', label: 'Exercise habits', type: 'text' },
      { id: 'living_situation', label: 'Living situation', type: 'textarea' }
    ]
  },
  {
    id: 'review-systems',
    title: 'Review of Systems',
    fields: [
      { id: 'general_symptoms', label: 'General (fever, weight loss, fatigue, night sweats)', type: 'textarea' },
      { id: 'respiratory', label: 'Respiratory (cough, SOB, chest pain, wheeze)', type: 'textarea' },
      { id: 'cardiovascular', label: 'Cardiovascular (chest pain, palpitations, edema)', type: 'textarea' },
      { id: 'gastrointestinal', label: 'GI (nausea, vomiting, diarrhea, constipation, blood)', type: 'textarea' },
      { id: 'neurological', label: 'Neurological (headache, dizziness, weakness, numbness)', type: 'textarea' },
      { id: 'musculoskeletal', label: 'Musculoskeletal (joint pain, swelling, stiffness)', type: 'textarea' },
      { id: 'genitourinary', label: 'GU (dysuria, frequency, discharge)', type: 'textarea' },
      { id: 'dermatological', label: 'Dermatological (rash, itching, lesions)', type: 'textarea' }
    ]
  },
  {
    id: 'physical-exam',
    title: 'Physical Examination Findings',
    fields: [
      { id: 'vitals_bp', label: 'Blood Pressure', type: 'text', hint: 'e.g. 120/80' },
      { id: 'vitals_hr', label: 'Heart Rate', type: 'number' },
      { id: 'vitals_rr', label: 'Respiratory Rate', type: 'number' },
      { id: 'vitals_temp', label: 'Temperature (°C)', type: 'text' },
      { id: 'vitals_o2', label: 'O2 Saturation (%)', type: 'number' },
      { id: 'gen_exam', label: 'General examination findings', type: 'textarea' },
      { id: 'system_exam', label: 'System-specific examination findings', type: 'textarea' }
    ]
  },
  {
    id: 'assessment-plan',
    title: 'Assessment & Plan',
    fields: [
      { id: 'differential', label: 'Differential diagnoses', type: 'textarea' },
      { id: 'investigations', label: 'Investigations ordered / needed', type: 'textarea' },
      { id: 'treatment_plan', label: 'Treatment plan', type: 'textarea' },
      { id: 'referral', label: 'Referral needed?', type: 'text' },
      { id: 'follow_up', label: 'Follow-up plan', type: 'textarea' },
      { id: 'clinician_name', label: 'Clinician name', type: 'text' },
      { id: 'date', label: 'Date', type: 'date' }
    ]
  }
];
