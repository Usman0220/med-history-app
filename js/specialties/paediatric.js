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
      { id: 'paed_cns', label: 'CNS — Fever, convulsions (febrile/afebrile), involuntary movements, lethargy, unconsciousness, numbness, visual changes, falls, headache', type: 'checkbox',
        options: ['Fever', 'Febrile fits', 'Afebrile fits', 'Involuntary movements', 'Lethargy', 'Unconsciousness', 'Numbness', 'Visual change', 'Falls', 'Headache', 'None'] },
      { id: 'paed_cvs', label: 'CVS — SOB (episodic/persistent/exertion/feeding), cyanosis, squatting, chest pain, palpitation, joint pain, edema', type: 'checkbox',
        options: ['SOB episodic', 'SOB persistent', 'SOB on exertion', 'SOB on feeding', 'Cyanosis', 'Squatting', 'Chest pain', 'Palpitation', 'Joint pain', 'Edema', 'None'] },
      { id: 'paed_respiratory', label: 'Respiratory — Sore throat, earache, chest infection, aspiration, hemoptysis, wheeze, cough (nocturnal/exertional/dry), sputum', type: 'checkbox',
        options: ['Sore throat', 'Earache', 'Chest infection', 'Aspiration', 'Hemoptysis', 'Wheeze', 'Nocturnal cough', 'Exertional cough', 'Dry cough', 'None'] },
      { id: 'paed_sputum', label: 'Sputum — colour / smell / consistency', type: 'text' },
      { id: 'paed_feed_relation', label: 'Relation of symptoms with feeding', type: 'textarea' },
      { id: 'paed_git', label: 'GIT — Abdominal pain, jaundice, diarrhea, constipation, blood in stool, vomiting (frequency/force/colour/content)', type: 'checkbox',
        options: ['Abdominal pain', 'Jaundice', 'Diarrhea', 'Constipation', 'Blood in stool', 'Vomiting', 'None'] },
      { id: 'paed_vomiting_detail', label: 'Vomiting — Frequency / Force / Colour / Content', type: 'text' },
      { id: 'paed_gus', label: 'GUS — Weak stream, dysuria, nocturia, enuresis, hematuria, incontinence, micturition (quantity/colour/cry on passing)', type: 'checkbox',
        options: ['Weak stream', 'Dysuria', 'Nocturia', 'Enuresis', 'Hematuria', 'Incontinence', 'None'] },
      { id: 'paed_rheum', label: 'Rheumatological — Joint swelling, dry mouth, oral ulcers, sore eyes, hair loss, cold extremity, rash (duration/size/distribution/itch/type)', type: 'checkbox',
        options: ['Joint swelling', 'Dry mouth', 'Oral ulcers', 'Sore eyes', 'Hair loss', 'Cold extremity', 'Rash', 'None'] },
      { id: 'paed_growth_concerns', label: 'Growth concerns (short stature, failure to thrive, obesity)', type: 'textarea' },
      { id: 'paed_weight_change', label: 'Weight loss / gain?', type: 'select',
        options: ['Stable', 'Weight loss', 'Weight gain', 'Unknown'] }
    ]
  }
];
