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
      { id: 'address', label: 'Address', type: 'textarea' },
      { id: 'admitted_via', label: 'Admitted via', type: 'select', options: ['OPD', 'Emergency', 'Referral', 'Ward Transfer', 'Elective Admission', 'Other'] },
      { id: 'admission_datetime', label: 'Date & Time of Admission', type: 'datetime-local' }
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
    title: 'Social & Socioeconomic History',
    fields: [
      { id: 'smoking', label: 'Smoking status', type: 'select',
        options: ['Never', 'Former', 'Current'] },
      { id: 'alcohol', label: 'Alcohol consumption', type: 'select',
        options: ['Never', 'Occasional', 'Regular'] },
      { id: 'substance_use', label: 'Recreational drug use', type: 'textarea' },
      { id: 'diet', label: 'Diet / nutrition', type: 'textarea' },
      { id: 'exercise', label: 'Exercise habits', type: 'text' },
      { id: 'living_situation', label: 'Living situation', type: 'textarea' },
      { id: 'home_type', label: 'Home type', type: 'select',
        options: ['Pucca (brick)', 'Semi-pucca', 'Kacha (mud)', 'Apartment', 'Other'] },
      { id: 'water_source', label: 'Water source', type: 'select',
        options: ['Tap (filtered)', 'Tap (unfiltered)', 'Well / Borehole', 'Bottled', 'Tanker', 'Other'] },
      { id: 'sanitation', label: 'Sanitation / toilet type', type: 'select',
        options: ['Flush toilet', 'Pit latrine', 'Open defecation', 'Other'] },
      { id: 'pets', label: 'Pets at home', type: 'select', options: ['Yes', 'No'] },
      { id: 'occupational_hazards', label: 'Occupational hazards / exposures', type: 'textarea' },
      { id: 'travel_history', label: 'Recent travel history', type: 'textarea' }
    ]
  },
  {
    id: 'review-systems',
    title: 'Review of Systems',
    fields: [
      { id: 'general_symptoms', label: 'General', type: 'checkbox',
        options: ['Fever', 'Weight loss', 'Fatigue', 'Night sweats', 'Loss of appetite', 'Malaise', 'None'] },
      { id: 'respiratory', label: 'Respiratory', type: 'checkbox',
        options: ['Cough', 'SOB', 'Chest pain', 'Wheeze', 'Hemoptysis', 'Sputum production', 'None'] },
      { id: 'cardiovascular', label: 'Cardiovascular', type: 'checkbox',
        options: ['Chest pain', 'Palpitations', 'Edema', 'SOB on exertion', 'Orthopnea', 'PND', 'Cyanosis', 'None'] },
      { id: 'gastrointestinal', label: 'Gastrointestinal', type: 'checkbox',
        options: ['Nausea', 'Vomiting', 'Diarrhea', 'Constipation', 'Blood in stool', 'Abdominal pain', 'Jaundice', 'Dysphagia', 'Heartburn', 'None'] },
      { id: 'neurological', label: 'Neurological', type: 'checkbox',
        options: ['Headache', 'Dizziness', 'Weakness', 'Numbness', 'Tremors', 'Seizures', 'Loss of consciousness', 'Visual changes', 'None'] },
      { id: 'musculoskeletal', label: 'Musculoskeletal', type: 'checkbox',
        options: ['Joint pain', 'Joint swelling', 'Stiffness', 'Muscle pain', 'Back pain', 'Limited mobility', 'None'] },
      { id: 'genitourinary', label: 'Genitourinary', type: 'checkbox',
        options: ['Dysuria', 'Frequency', 'Urgency', 'Nocturia', 'Hematuria', 'Discharge', 'Incontinence', 'None'] },
      { id: 'dermatological', label: 'Dermatological', type: 'checkbox',
        options: ['Rash', 'Itching', 'Lesions', 'Hair loss', 'Nail changes', 'Dry skin', 'None'] },
      { id: 'endocrine', label: 'Endocrine', type: 'checkbox',
        options: ['Heat/cold intolerance', 'Weight change', 'Excessive thirst', 'Excessive urination', 'Fatigue', 'None'] },
      { id: 'ros_other', label: 'Other symptoms not listed', type: 'textarea' }
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
