const PAEDIATRIC_QUESTIONS = [
  {
    id: 'paed-patient-details',
    title: 'Additional Patient Details',
    fields: [
      { id: 'paed_father', label: 'Father\'s Name', type: 'text' },
      { id: 'paed_informant', label: 'Informant', type: 'select',
        options: ['Mother', 'Father', 'Grandparent', 'Guardian', 'Other'] },
      { id: 'paed_reliability', label: 'Reliability of History', type: 'select',
        options: ['Reliable', 'Partially reliable', 'Unreliable'] },
      { id: 'paed_admitted_via', label: 'Admitted via', type: 'select',
        options: ['OPD', 'Emergency', 'Referred', 'Private clinic'] }
    ]
  },
  {
    id: 'antenatal-history',
    title: 'Antenatal History',
    fields: [
      { id: 'paed_preg_planned', label: 'Pregnancy planned?', type: 'select',
        options: ['Planned', 'Unplanned', 'Unknown'] },
      { id: 'paed_anc_visits', label: 'Number of ANC visits', type: 'text' },
      { id: 'paed_supplements', label: 'Maternal supplements taken', type: 'checkbox',
        options: ['Iron', 'Folic acid', 'Calcium', 'Multivitamins', 'None'] },
      { id: 'paed_maternal_illness', label: 'Maternal illness during pregnancy', type: 'checkbox',
        options: ['Hypertension', 'Diabetes', 'Pre-eclampsia', 'Eclampsia', 'Infections', 'Thyroid disease', 'None'] },
      { id: 'paed_maternal_drugs', label: 'Maternal drug intake (dose/duration)', type: 'textarea' },
      { id: 'paed_antenatal_imaging', label: 'Antenatal USG / Investigations', type: 'textarea' },
      { id: 'paed_antenatal_complications', label: 'Other antenatal complications', type: 'textarea',
        hint: 'Bleeding, trauma, hospitalization during pregnancy' }
    ]
  },
  {
    id: 'natal-history',
    title: 'Natal History',
    fields: [
      { id: 'paed_delivery_place', label: 'Place of delivery', type: 'select',
        options: ['Hospital', 'Home', 'Clinic', 'Other'] },
      { id: 'paed_gestation', label: 'Gestation at birth (weeks)', type: 'number', attrs: { min: 20, max: 45 } },
      { id: 'paed_delivery_mode', label: 'Mode of delivery', type: 'select',
        options: ['Spontaneous vaginal', 'C-section', 'Forceps', 'Vacuum', 'Breech'] },
      { id: 'paed_labour_duration', label: 'Duration of labour', type: 'text' },
      { id: 'paed_delivery_complications', label: 'Complications during delivery', type: 'textarea' },
      { id: 'paed_conducted_by', label: 'Conducted by', type: 'select',
        options: ['Doctor', 'Midwife', 'Dai (TBA)', 'Other'] }
    ]
  },
  {
    id: 'postnatal-history',
    title: 'Post-natal History',
    fields: [
      { id: 'paed_postnatal_events', label: 'Events at birth', type: 'checkbox',
        options: ['Cry at birth', 'Cyanosis', 'Fever', 'Fits', 'Jaundice', 'Rash', 'Birth injury', 'None'] },
      { id: 'paed_birth_weight', label: 'Birth weight (kg)', type: 'text' },
      { id: 'paed_birth_length', label: 'Birth length (cm)', type: 'text' },
      { id: 'paed_birth_hc', label: 'Head circumference at birth (cm)', type: 'text' },
      { id: 'paed_perinatal_complications', label: 'Perinatal complications', type: 'textarea',
        hint: 'Resuscitation needed, NICU stay, hypoxia, sepsis, hypoglycemia' },
      { id: 'paed_feeding_birth', label: 'Feeding at birth', type: 'select',
        options: ['Breastfeeding', 'Formula', 'Mixed'] },
      { id: 'paed_first_feed_time', label: 'Time between birth and 1st feed', type: 'text', hint: 'hours' }
    ]
  },
  {
    id: 'paed-feeding',
    title: 'Feeding & Nutrition',
    fields: [
      { id: 'paed_feed_type', label: 'Type of feed (first 6 months)', type: 'select',
        options: ['Breastfeeding', 'Formula', 'Mixed'] },
      { id: 'paed_breastfeeding_duration', label: 'Duration of breastfeeding', type: 'text', hint: 'months' },
      { id: 'paed_solids_age', label: 'Age at which solid food introduced', type: 'text', hint: 'months' },
      { id: 'paed_solids_detail', label: 'Nature / amount / duration of solids', type: 'textarea' },
      { id: 'paed_current_diet', label: 'Current diet', type: 'textarea' },
      { id: 'paed_appetite', label: 'Appetite', type: 'select',
        options: ['Normal', 'Decreased', 'Increased', 'Picky eater'] },
      { id: 'paed_feed_issues', label: 'Feeding difficulties', type: 'checkbox',
        options: ['Reflux', 'Vomiting', 'Choking', 'Colic', 'Poor weight gain', 'None'] },
      { id: 'paed_growth_params', label: 'Current growth parameters', type: 'textarea',
        hint: 'Weight, height, head circumference with percentiles if available' }
    ]
  },
  {
    id: 'paed-immunization',
    title: 'Immunization History',
    fields: [
      { id: 'paed_immunization_status', label: 'Immunization status', type: 'select',
        options: ['Up to date', 'Partially immunized', 'Not immunized', 'Unknown'] },
      { id: 'paed_bcg', label: 'BCG', type: 'select', options: ['Given', 'Not given', 'Unknown'] },
      { id: 'paed_penta', label: 'Pentavalent (DTP-HepB-Hib) doses', type: 'text', hint: 'Number of doses' },
      { id: 'paed_polio', label: 'Polio (OPV/IPV) doses', type: 'text', hint: 'Number of doses' },
      { id: 'paed_pcv', label: 'PCV (Pneumococcal) doses', type: 'text', hint: 'Number of doses' },
      { id: 'paed_rotavirus', label: 'Rotavirus doses', type: 'text', hint: 'Number of doses' },
      { id: 'paed_mmr', label: 'MMR given?', type: 'select', options: ['Given', 'Not given', 'Unknown'] },
      { id: 'paed_typhoid', label: 'Typhoid vaccine', type: 'select', options: ['Given', 'Not given', 'Unknown'] },
      { id: 'paed_hepa', label: 'Hepatitis A', type: 'select', options: ['Given', 'Not given', 'Unknown'] },
      { id: 'paed_influenza', label: 'Influenza vaccine', type: 'select', options: ['Given', 'Not given', 'Unknown'] },
      { id: 'paed_vaccine_side_effects', label: 'Vaccine side effects', type: 'textarea' },
      { id: 'paed_immunization_details', label: 'Additional immunization details', type: 'textarea' }
    ]
  },
  {
    id: 'paed-development',
    title: 'Developmental Milestones',
    fields: [
      { id: 'paed_dev_social_smile', label: 'Social smile (expected: 4-6 weeks)', type: 'text', hint: 'Age achieved' },
      { id: 'paed_dev_gaze', label: 'Follows with eyes / fixes (expected: 2-3 months)', type: 'text', hint: 'Age achieved' },
      { id: 'paed_dev_neck_hold', label: 'Neck holding (expected: 3-4 months)', type: 'text', hint: 'Age achieved' },
      { id: 'paed_dev_rolling', label: 'Rolls over (expected: 4-6 months)', type: 'text', hint: 'Age achieved' },
      { id: 'paed_dev_sit', label: 'Sits without support (expected: 6-8 months)', type: 'text', hint: 'Age achieved' },
      { id: 'paed_dev_crawl', label: 'Crawls (expected: 7-9 months)', type: 'text', hint: 'Age achieved' },
      { id: 'paed_dev_stand', label: 'Stands with support (expected: 8-10 months)', type: 'text', hint: 'Age achieved' },
      { id: 'paed_dev_walk', label: 'Walks independently (expected: 12-15 months)', type: 'text', hint: 'Age achieved' },
      { id: 'paed_dev_speech_syllables', label: 'Syllables / babbling (expected: 6-9 months)', type: 'text', hint: 'Age achieved' },
      { id: 'paed_dev_speech_words', label: 'Single words with meaning (expected: 12-15 months)', type: 'text', hint: 'Age achieved' },
      { id: 'paed_dev_speech_phrases', label: 'Two-word phrases (expected: 18-24 months)', type: 'text', hint: 'Age achieved' },
      { id: 'paed_dev_toilet', label: 'Toilet training achieved', type: 'text', hint: 'Age' },
      { id: 'paed_dev_school', label: 'School performance (if applicable)', type: 'textarea' },
      { id: 'paed_dev_concerns', label: 'Any developmental concerns / regression?', type: 'textarea' }
    ]
  },
  {
    id: 'paed-transfusion',
    title: 'Transfusion History',
    fields: [
      { id: 'paed_transfusion_type', label: 'Type of transfusion', type: 'select',
        options: ['None', 'Red blood cells', 'Platelets', 'FFP / Plasma', 'Whole blood', 'Other'] },
      { id: 'paed_transfusion_times', label: 'Number of transfusions', type: 'number', attrs: { min: 0 } },
      { id: 'paed_transfusion_screened', label: 'Screening done?', type: 'select',
        options: ['Yes', 'No', 'Unknown'] },
      { id: 'paed_transfusion_reaction', label: 'Any transfusion reaction?', type: 'textarea' }
    ]
  },
  {
    id: 'paed-personal-history',
    title: 'Personal & Social History',
    fields: [
      { id: 'paed_school', label: 'School / Grade', type: 'text' },
      { id: 'paed_sleep', label: 'Sleep pattern', type: 'select',
        options: ['Normal', 'Disturbed', 'Excessive', 'Night terrors', 'Insomnia'] },
      { id: 'paed_habits', label: 'Habits / Behaviours', type: 'checkbox',
        options: ['Pica', 'Thumb-sucking', 'Nail-biting', 'Temper tantrums', 'Head banging', 'None'] },
      { id: 'paed_home_type', label: 'Home type', type: 'select',
        options: ['Pucca (brick)', 'Semi-pucca', 'Kacha (mud)', 'Apartment'] },
      { id: 'paed_rooms', label: 'Number of rooms', type: 'number', attrs: { min: 1 } },
      { id: 'paed_family_members', label: 'Number of family members', type: 'number', attrs: { min: 1 } },
      { id: 'paed_siblings', label: 'Siblings (number / ages / health)', type: 'textarea' },
      { id: 'paed_water_source', label: 'Water source', type: 'select',
        options: ['Tap (filtered)', 'Tap (unfiltered)', 'Well / Borehole', 'Bottled', 'Tanker'] },
      { id: 'paed_pets', label: 'Pets at home?', type: 'select', options: ['Yes', 'No'] },
      { id: 'paed_household_smoking', label: 'Smoking in household?', type: 'select', options: ['Yes', 'No'] },
      { id: 'paed_toilet_type', label: 'Type of toilet', type: 'select',
        options: ['Flush', 'Pit latrine', 'Open defecation'] }
    ]
  },
  {
    id: 'paed-family-history',
    title: 'Family Medical History',
    fields: [
      { id: 'paed_mother_age_illness', label: 'Mother — Age / Illness', type: 'text' },
      { id: 'paed_father_age_illness', label: 'Father — Age / Illness', type: 'text' },
      { id: 'paed_siblings_illness', label: 'Siblings — Illness / health issues', type: 'textarea' },
      { id: 'paed_miscarriages', label: 'Miscarriages / Abortions / Stillbirths in family', type: 'textarea' },
      { id: 'paed_consanguinity', label: 'Consanguinity (parents related?)', type: 'select',
        options: ['No', 'Yes — 1st cousin', 'Yes — 2nd cousin', 'Yes — distant'] },
      { id: 'paed_hereditary', label: 'Hereditary / genetic disorders in family', type: 'textarea' },
      { id: 'paed_family_mental', label: 'Family psychiatric history', type: 'textarea' }
    ]
  },
  {
    id: 'paed-review',
    title: 'Paediatric Review of Systems',
    fields: [
      { id: 'paed_cns', label: 'CNS', type: 'checkbox',
        options: ['Fever', 'Febrile fits', 'Afebrile fits', 'Involuntary movements', 'Lethargy', 'Unconsciousness', 'Numbness', 'Visual change', 'Falls', 'Headache', 'None'] },
      { id: 'paed_cvs', label: 'CVS', type: 'checkbox',
        options: ['SOB episodic', 'SOB persistent', 'SOB on exertion', 'SOB on feeding', 'Cyanosis', 'Squatting', 'Chest pain', 'Palpitation', 'Joint pain', 'Edema', 'None'] },
      { id: 'paed_respiratory', label: 'Respiratory', type: 'checkbox',
        options: ['Sore throat', 'Earache', 'Chest infection', 'Aspiration', 'Hemoptysis', 'Wheeze', 'Nocturnal cough', 'Exertional cough', 'Dry cough', 'None'] },
      { id: 'paed_sputum', label: 'Sputum — colour / smell / consistency', type: 'text' },
      { id: 'paed_feed_relation', label: 'Relation of symptoms with feeding', type: 'textarea' },
      { id: 'paed_git', label: 'GIT', type: 'checkbox',
        options: ['Abdominal pain', 'Jaundice', 'Diarrhea', 'Constipation', 'Blood in stool', 'Vomiting', 'None'] },
      { id: 'paed_vomiting_detail', label: 'Vomiting — Frequency / Force / Colour / Content', type: 'text' },
      { id: 'paed_gus', label: 'GUS', type: 'checkbox',
        options: ['Weak stream', 'Dysuria', 'Nocturia', 'Enuresis', 'Hematuria', 'Incontinence', 'None'] },
      { id: 'paed_rheum', label: 'Rheumatological', type: 'checkbox',
        options: ['Joint swelling', 'Dry mouth', 'Oral ulcers', 'Sore eyes', 'Hair loss', 'Cold extremity', 'Rash', 'None'] },
      { id: 'paed_growth_concerns', label: 'Growth concerns (short stature, failure to thrive, obesity)', type: 'textarea' },
      { id: 'paed_weight_change', label: 'Weight loss / gain?', type: 'select',
        options: ['Stable', 'Weight loss', 'Weight gain', 'Unknown'] }
    ]
  }
];

const PAEDIATRIC_DISEASES = {
  'age': [
    { id: 'paed-age', title: 'Acute Gastroenteritis — History', fields: [
      { id: 'age_vomiting', label: 'Vomiting', type: 'select', options: ['No', 'Yes — mild', 'Yes — moderate', 'Yes — severe / every feed'] },
      { id: 'age_vomit_content', label: 'Vomiting content', type: 'select', options: ['Milk/feed', 'Bilious', 'Blood-stained', 'Watery'] },
      { id: 'age_diarrhea_freq', label: 'Stool frequency in 24h', type: 'select', options: ['<5', '5-10', '10-20', '>20'] },
      { id: 'age_stool_char', label: 'Stool character', type: 'select', options: ['Watery', 'Bloody', 'Mucoid', 'Rice-watery', 'Loose'] },
      { id: 'age_fever', label: 'Fever', type: 'select', options: ['No', 'Low grade', 'High grade'] },
      { id: 'age_abdominal_pain', label: 'Abdominal pain', type: 'select', options: ['No', 'Mild', 'Moderate', 'Severe'] },
      { id: 'age_dehydration', label: 'Dehydration signs', type: 'checkbox',
        options: ['Sunken eyes', 'Decreased skin turgor', 'Dry mucous membranes', 'Sunken fontanelle', 'Lethargic', 'Altered consciousness', 'None'] },
      { id: 'age_urine_output', label: 'Urine output (hours since last void)', type: 'text' },
      { id: 'age_thirst', label: 'Thirst / drinking ability', type: 'select', options: ['Normal', 'Drinks eagerly', 'Unable to drink'] },
      { id: 'age_recent_food', label: 'Recent food / water source', type: 'textarea', hint: 'Any suspicious food, street food, untreated water' },
      { id: 'age_similar_illness', label: 'Similar illness in family / community?', type: 'select', options: ['No', 'Yes — family', 'Yes — community'] }
    ]}
  ],
  'pneumonia_br': [
    { id: 'paed-pna', title: 'Pneumonia / Bronchiolitis — History', fields: [
      { id: 'pna_cough', label: 'Cough duration', type: 'text' },
      { id: 'pna_cough_type', label: 'Cough type', type: 'select', options: ['Dry', 'Barking', 'Paroxysmal', 'Productive', 'Whooping'] },
      { id: 'pna_fever', label: 'Fever', type: 'select', options: ['No', 'Low grade', 'High grade'] },
      { id: 'pna_sob', label: 'Breathing difficulty', type: 'select', options: ['No', 'Mild', 'Moderate', 'Severe'] },
      { id: 'pna_fast_breathing', label: 'Fast breathing?', type: 'select', options: ['No', 'Yes', 'Unable to tell'] },
      { id: 'pna_chest_indrawing', label: 'Chest indrawing?', type: 'select', options: ['No', 'Yes — subcostal', 'Yes — intercostal', 'Yes — all'] },
      { id: 'pna_nasal_flaring', label: 'Nasal flaring / grunting?', type: 'select', options: ['No', 'Yes'] },
      { id: 'pna_feeding_ability', label: 'Able to feed?', type: 'select', options: ['Normal', 'Decreased', 'Unable'] },
      { id: 'pna_wheeze', label: 'Wheeze?', type: 'select', options: ['No', 'Yes — first episode', 'Yes — recurrent'] },
      { id: 'pna_cyanosis', label: 'Cyanosis / blue spells?', type: 'select', options: ['No', 'Yes — perioral', 'Yes — generalized'] },
      { id: 'pna_immunization', label: 'Immunization status (PCV, HiB)', type: 'textarea' },
      { id: 'pna_exposure', label: 'Exposure to smoke / pollution / sick contacts', type: 'textarea' }
    ]}
  ],
  'meningitis': [
    { id: 'paed-mening', title: 'Meningitis / Encephalitis — History', fields: [
      { id: 'mening_fever', label: 'Fever onset', type: 'select', options: ['Acute (<24h)', 'Subacute (1-3 days)', 'Progressive (>3 days)'] },
      { id: 'mening_vomiting', label: 'Vomiting (projectile?)', type: 'select', options: ['No', 'Yes — non-projectile', 'Yes — projectile'] },
      { id: 'mening_headache', label: 'Headache (if verbal)', type: 'select', options: ['No', 'Mild', 'Moderate', 'Severe'] },
      { id: 'mening_irritability', label: 'Irritability / high-pitched cry', type: 'select', options: ['No', 'Mild', 'Marked'] },
      { id: 'mening_consciousness', label: 'Level of consciousness', type: 'select',
        options: ['Alert', 'Drowsy', 'Lethargic', 'Unconscious'] },
      { id: 'mening_seizures', label: 'Seizures', type: 'select', options: ['No', 'Yes — febrile', 'Yes — afebrile', 'Yes — status epilepticus'] },
      { id: 'mening_neck_stiffness', label: 'Neck stiffness?', type: 'select', options: ['No', 'Yes', 'Unable to assess'] },
      { id: 'mening_bulging_fontanelle', label: 'Bulging fontanelle (if infant)?', type: 'select', options: ['No', 'Yes', 'Not applicable'] },
      { id: 'mening_rash', label: 'Rash (meningococcal — petechial / purpuric)?', type: 'select', options: ['No', 'Yes', 'Unknown'] },
      { id: 'mening_photophobia', label: 'Photophobia?', type: 'select', options: ['No', 'Yes'] },
      { id: 'mening_lp', label: 'Lumbar puncture / CSF findings (if done)', type: 'textarea' }
    ]}
  ],
  'malaria_dengue': [
    { id: 'paed-malaria', title: 'Malaria / Dengue / Viral Fever — History', fields: [
      { id: 'mf_fever_pattern', label: 'Fever pattern', type: 'select', options: ['Continuous', 'Intermittent', 'Alternate day', 'Step-ladder', 'Biphasic'] },
      { id: 'mf_fever_duration', label: 'Duration of fever', type: 'text' },
      { id: 'mf_rigors', label: 'Rigors / chills?', type: 'select', options: ['No', 'Yes'] },
      { id: 'mf_bleeding', label: 'Bleeding manifestations', type: 'checkbox',
        options: ['Petechiae', 'Purpura', 'Epistaxis', 'Gum bleeding', 'GI bleeding', 'None'] },
      { id: 'mf_body_ache', label: 'Body aches / myalgia', type: 'select', options: ['No', 'Mild', 'Moderate', 'Severe'] },
      { id: 'mf_joint_pain', label: 'Joint pain / retro-orbital pain', type: 'select', options: ['No', 'Yes'] },
      { id: 'mf_headache', label: 'Headache', type: 'select', options: ['No', 'Mild', 'Severe'] },
      { id: 'mf_rash', label: 'Rash', type: 'select', options: ['No', 'Yes — macular', 'Yes — maculopapular', 'Yes — petechial'] },
      { id: 'mf_vomiting', label: 'Vomiting', type: 'select', options: ['No', 'Yes'] },
      { id: 'mf_abdominal_pain', label: 'Abdominal pain / tenderness', type: 'select', options: ['No', 'Mild', 'Severe'] },
      { id: 'mf_jaundice', label: 'Jaundice / dark urine', type: 'select', options: ['No', 'Yes'] },
      { id: 'mf_oliguria', label: 'Decreased urine output?', type: 'select', options: ['No', 'Yes'] }
    ]}
  ],
  'nephrotic': [
    { id: 'paed-nephrotic', title: 'Nephrotic Syndrome — History', fields: [
      { id: 'neph_onset', label: 'Age at onset', type: 'text' },
      { id: 'neph_edema', label: 'Edema onset', type: 'select', options: ['Acute (days)', 'Gradual (weeks)'] },
      { id: 'neph_edema_site', label: 'Edema sites', type: 'checkbox',
        options: ['Periorbital', 'Ankle/leg', 'Scrotal/labial', 'Abdominal (ascites)', 'Generalized (anasarca)', 'None'] },
      { id: 'neph_frothy_urine', label: 'Frothy urine?', type: 'select', options: ['No', 'Yes', 'Not noticed'] },
      { id: 'neph_urine_output', label: 'Decreased urine output?', type: 'select', options: ['No', 'Yes — mild', 'Yes — oliguria (<400ml/d)'] },
      { id: 'neph_infection', label: 'Preceding infection (URI, skin)?', type: 'select', options: ['No', 'Yes — 1-2 weeks ago'] },
      { id: 'neph_relapse', label: 'Number of relapses', type: 'number', attrs: { min: 0 } },
      { id: 'neph_treatment', label: 'Current / past treatment', type: 'checkbox',
        options: ['Prednisolone', 'Steroid-sparing agent', 'ACE inhibitor', 'None'] },
      { id: 'neph_steroid_response', label: 'Steroid response', type: 'select',
        options: ['First presentation', 'Steroid sensitive', 'Steroid dependent', 'Steroid resistant', 'Not yet treated'] },
      { id: 'neph_complications', label: 'Complications', type: 'checkbox',
        options: ['Infection', 'Thrombosis', 'AKI', 'None'] }
    ]}
  ],
  'chd': [
    { id: 'paed-chd', title: 'Congenital Heart Disease — History', fields: [
      { id: 'chd_diagnosis', label: 'Known diagnosis?', type: 'select', options: ['No — suspected', 'Yes — VSD', 'Yes — ASD', 'Yes — PDA', 'Yes — TOF', 'Yes — TGA', 'Yes — Other'] },
      { id: 'chd_cyanosis', label: 'Cyanosis', type: 'select', options: ['No', 'Yes — at rest', 'Yes — on crying', 'Yes — persistent'] },
      { id: 'chd_sob_feeding', label: 'SOB / tachypnea on feeding', type: 'select', options: ['No', 'Yes — mild', 'Yes — marked'] },
      { id: 'chd_sweating', label: 'Excessive sweating on head (during feeds)', type: 'select', options: ['No', 'Yes'] },
      { id: 'chd_weight_gain', label: 'Poor weight gain / failure to thrive', type: 'select', options: ['No', 'Yes — mild', 'Yes — severe'] },
      { id: 'chd_squatting', label: 'Squatting (in TOF)?', type: 'select', options: ['No', 'Yes — infant', 'Yes — older child'] },
      { id: 'chd_chest_infections', label: 'Recurrent chest infections?', type: 'select', options: ['No', 'Yes — frequent'] },
      { id: 'chd_echo', label: 'Echocardiography findings (if done)', type: 'textarea' }
    ]}
  ],
  'malnutrition': [
    { id: 'paed-malnutrition', title: 'Malnutrition / Growth Faltering — History', fields: [
      { id: 'malnut_weight', label: 'Current weight (kg)', type: 'text' },
      { id: 'malnut_height', label: 'Current height/length (cm)', type: 'text' },
      { id: 'malnut_muac', label: 'MUAC (cm)', type: 'text', hint: 'Mid-upper arm circumference' },
      { id: 'malnut_zscore', label: 'Weight-for-age Z-score (if known)', type: 'text' },
      { id: 'malnut_type', label: 'Type', type: 'select', options: ['Acute (wasting)', 'Chronic (stunting)', 'Acute-on-chronic', 'Underweight'] },
      { id: 'malnut_edema', label: 'Edema (kwashiorkor)?', type: 'select', options: ['No', 'Yes — feet', 'Yes — generalized'] },
      { id: 'malnut_appetite', label: 'Appetite', type: 'select', options: ['Normal', 'Decreased', 'Poor', 'Excessive'] },
      { id: 'malnut_diet', label: 'Diet history (what does child eat?)', type: 'textarea' },
      { id: 'malnut_breastfeeding', label: 'Breastfeeding status', type: 'select', options: ['Exclusive breastfeeding', 'Mixed', 'Weaned', 'Not applicable'] },
      { id: 'malnut_illness', label: 'Recurrent illness (diarrhea, pneumonia, TB)', type: 'textarea' },
      { id: 'malnut_deworming', label: 'Deworming done?', type: 'select', options: ['Yes — recently', 'Yes — >6 months', 'Never'] },
      { id: 'malnut_vitamins', label: 'Vitamin / micronutrient deficiencies', type: 'checkbox',
        options: ['Vitamin A', 'Vitamin D', 'Iron', 'Zinc', 'Iodine', 'None'] }
    ]}
  ],
  'febrile_seizures': [
    { id: 'paed-febrile-sz', title: 'Febrile Seizures — History', fields: [
      { id: 'fsz_age', label: 'Age at first seizure', type: 'text' },
      { id: 'fsz_fever', label: 'Fever present?', type: 'select', options: ['Yes — before seizure', 'Yes — during seizure', 'No'] },
      { id: 'fsz_temp', label: 'Temperature at time of seizure', type: 'text', hint: 'Measured at home' },
      { id: 'fsz_type', label: 'Seizure type', type: 'select', options: ['Generalized tonic-clonic', 'Focal', 'Absence', 'Myoclonic', 'Uncertain'] },
      { id: 'fsz_duration', label: 'Duration of seizure (minutes)', type: 'text' },
      { id: 'fsz_postictal', label: 'Post-ictal state (drowsy, confused, sleep)', type: 'textarea' },
      { id: 'fsz_total', label: 'Total number of seizures', type: 'number', attrs: { min: 1 } },
      { id: 'fsz_complex', label: 'Features of complex febrile seizure?', type: 'checkbox',
        options: ['Focal onset', 'Duration >15 min', 'Multiple in 24h', 'Prolonged post-ictal', 'None'] },
      { id: 'fsz_family_sz', label: 'Family history of febrile seizures / epilepsy', type: 'select', options: ['No', 'Yes — febrile seizures', 'Yes — epilepsy'] },
      { id: 'fsz_development', label: 'Developmental milestones (normal to date?)', type: 'select', options: ['Normal', 'Delayed', 'Unknown'] },
      { id: 'fsz_meningitis_signs', label: 'Meningeal signs excluded?', type: 'select', options: ['Yes', 'No — not examined', 'N/A'] }
    ]}
  ]
};
