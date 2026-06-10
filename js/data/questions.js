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
    complaintBuilder: true,
    description: 'Add presenting complaints with duration. Select a complaint type and fill its specific history details.'
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

const COMPLAINTS = {
  'Fever': [
    { id: 'fever_duration', label: 'Duration of fever', type: 'text', hint: 'e.g. 3 days, intermittent for 1 week' },
    { id: 'fever_pattern', label: 'Pattern', type: 'select', options: ['Continuous', 'Intermittent', 'Remittent', 'Relapsing', 'Undulant'] },
    { id: 'fever_grade', label: 'Grade', type: 'select', options: ['Low grade (<38°C)', 'Moderate (38-39°C)', 'High grade (39-40°C)', 'Pyrexial (>40°C)'] },
    { id: 'fever_assoc', label: 'Associated symptoms', type: 'checkbox', options: ['Chills', 'Rigors', 'Night sweats', 'Rash', 'Myalgia', 'Arthralgia', 'Headache', 'Photophobia'] },
    { id: 'fever_response', label: 'Response to antipyretics', type: 'select', options: ['Good', 'Partial', 'Poor', 'Not used'] }
  ],
  'Vomiting': [
    { id: 'vomiting_freq', label: 'Frequency', type: 'text', hint: 'Times per day / total episodes' },
    { id: 'vomiting_content', label: 'Content', type: 'select', options: ['Undigested food', 'Partially digested food', 'Bilious (green/yellow)', 'Bloody (hematemesis)', 'Coffee-ground', 'Feculent', 'Projectile'] },
    { id: 'vomiting_timing', label: 'Relation to meals', type: 'select', options: ['Before meals', 'Immediately after meals', '30-60 min after meals', 'Unrelated to meals', 'On waking'] },
    { id: 'vomiting_assoc', label: 'Associated features', type: 'checkbox', options: ['Nausea', 'Retching', 'Epigastric pain', 'Dizziness', 'Headache', 'Diarrhea', 'Fever', 'Weight loss'] },
    { id: 'vomiting_relief', label: 'Relieving factors', type: 'text' }
  ],
  'Pain': [
    { id: 'pain_site', label: 'Site', type: 'text', hint: 'Anatomical location' },
    { id: 'pain_quality', label: 'Quality', type: 'select', options: ['Sharp/stabbing', 'Dull/aching', 'Burning', 'Colicky', 'Throbbing', 'Tearing', 'Cramping', 'Pressure'] },
    { id: 'pain_radiation', label: 'Radiation', type: 'text', hint: 'Does it travel anywhere?' },
    { id: 'pain_severity', label: 'Severity (1-10)', type: 'number' },
    { id: 'pain_aggravating', label: 'Aggravating factors', type: 'text', hint: 'What makes it worse?' },
    { id: 'pain_relieving', label: 'Relieving factors', type: 'text', hint: 'What makes it better?' },
    { id: 'pain_assoc', label: 'Associated symptoms', type: 'checkbox', options: ['Nausea', 'Vomiting', 'Fever', 'Sweating', 'Palpitations', 'SOB', 'Dizziness'] }
  ],
  'Cough': [
    { id: 'cough_type', label: 'Type', type: 'select', options: ['Dry', 'Productive', 'Paroxysmal', 'Barking', 'Whooping', 'Nocturnal'] },
    { id: 'cough_sputum', label: 'Sputum', type: 'select', options: ['None (dry)', 'Clear/mucoid', 'Yellow/green', 'Blood-streaked', 'Rusty', 'Frothy/pink', 'Purulent'] },
    { id: 'cough_sputum_vol', label: 'Sputum volume', type: 'select', options: ['Scanty', 'Moderate', 'Copious'] },
    { id: 'cough_timing', label: 'Timing', type: 'select', options: ['Morning', 'Night', 'Throughout day', 'After meals', 'On exertion'] },
    { id: 'cough_assoc', label: 'Associated symptoms', type: 'checkbox', options: ['Fever', 'SOB', 'Chest pain', 'Hemoptysis', 'Wheeze', 'Sore throat', 'Rhinorrhea', 'Weight loss'] }
  ],
  'Headache': [
    { id: 'ha_site', label: 'Site', type: 'select', options: ['Frontal', 'Temporal', 'Occipital', 'Vertex', 'Diffuse', 'Unilateral', 'Bilateral', 'Behind eyes'] },
    { id: 'ha_quality', label: 'Quality', type: 'select', options: ['Throbbing/pulsating', 'Tension/band-like', 'Sharp/stabbing', 'Dull/aching', 'Pressure'] },
    { id: 'ha_onset', label: 'Onset of each episode', type: 'select', options: ['Sudden', 'Gradual', 'Thunderclap'] },
    { id: 'ha_duration', label: 'Episode duration', type: 'select', options: ['Minutes', 'Hours', 'Days', 'Continuous'] },
    { id: 'ha_assoc', label: 'Associated symptoms', type: 'checkbox', options: ['Nausea', 'Vomiting', 'Photophobia', 'Phonophobia', 'Aura', 'Visual changes', 'Neck stiffness', 'Fever'] },
    { id: 'ha_aggravating', label: 'Aggravating factors', type: 'text' },
    { id: 'ha_relieving', label: 'Relieving factors', type: 'text' }
  ],
  'Diarrhea': [
    { id: 'diarrhea_freq', label: 'Frequency', type: 'text', hint: 'Stools per day' },
    { id: 'diarrhea_consistency', label: 'Consistency', type: 'select', options: ['Watery', 'Loose', 'Semisolid', 'Bloody/dysenteric', 'Mucoid', 'Rice-watery'] },
    { id: 'diarrhea_blood', label: 'Blood in stool', type: 'select', options: ['None', 'Fresh blood', 'Dark blood/melena', 'Occult'] },
    { id: 'diarrhea_tenesmus', label: 'Tenesmus', type: 'select', options: ['Yes', 'No'] },
    { id: 'diarrhea_assoc', label: 'Associated symptoms', type: 'checkbox', options: ['Abdominal pain', 'Vomiting', 'Fever', 'Urgency', 'Dehydration', 'Weight loss'] },
    { id: 'diarrhea_exposure', label: 'Recent food/water exposure', type: 'textarea' }
  ],
  'Constipation': [
    { id: 'constipation_freq', label: 'Bowel frequency', type: 'text', hint: 'Stools per week' },
    { id: 'constipation_dur', label: 'Duration', type: 'text' },
    { id: 'constipation_stool', label: 'Stool consistency', type: 'select', options: ['Hard/lumpy', 'Pellet-like', 'Difficult to pass', 'Requires straining'] },
    { id: 'constipation_lax', label: 'Laxative use', type: 'text' },
    { id: 'constipation_assoc', label: 'Associated symptoms', type: 'checkbox', options: ['Abdominal distension', 'Pain', 'Bloating', 'Nausea', 'Blood with stool', 'Weight loss'] },
    { id: 'constipation_diet', label: 'Dietary fiber intake', type: 'select', options: ['Poor', 'Adequate', 'High'] }
  ],
  'SOB / Dyspnea': [
    { id: 'sob_onset', label: 'Onset', type: 'select', options: ['Sudden', 'Gradual', 'Acute on chronic'] },
    { id: 'sob_mrc', label: 'MRC Dyspnea Grade', type: 'select', options: ['Grade 1 (strenuous exercise)', 'Grade 2 (hurrying on level)', 'Grade 3 (walking with peers)', 'Grade 4 (stops after 100m)', 'Grade 5 (at rest)'] },
    { id: 'sob_position', label: 'Relation to position', type: 'select', options: ['Orthopnea', 'PND', 'No positional change'] },
    { id: 'sob_nocturnal', label: 'Nocturnal symptoms', type: 'select', options: ['PND', 'Wheeze', 'Cough', 'None'] },
    { id: 'sob_assoc', label: 'Associated symptoms', type: 'checkbox', options: ['Chest pain', 'Palpitations', 'Cough', 'Wheeze', 'Cyanosis', 'Leg swelling', 'Fever'] }
  ],
  'Jaundice': [
    { id: 'jaundice_onset', label: 'Onset', type: 'select', options: ['Sudden', 'Gradual'] },
    { id: 'jaundice_urine', label: 'Urine color', type: 'select', options: ['Normal', 'Dark (cola-colored)', 'Orange'] },
    { id: 'jaundice_stool', label: 'Stool color', type: 'select', options: ['Brown (normal)', 'Pale/clay-colored', 'Variable'] },
    { id: 'jaundice_pruritus', label: 'Pruritus', type: 'select', options: ['Yes', 'No'] },
    { id: 'jaundice_assoc', label: 'Associated symptoms', type: 'checkbox', options: ['Fever', 'Pain abdomen', 'Nausea', 'Weight loss', 'Easy bruising', 'Bleeding'] },
    { id: 'jaundice_risk', label: 'Risk factors', type: 'checkbox', options: ['Alcohol use', 'Blood transfusion', 'IV drug use', 'Travel', 'Hepatotoxic drugs', 'Family history'] }
  ]
};
