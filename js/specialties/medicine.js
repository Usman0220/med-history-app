const MEDICINE_QUESTIONS = [
  {
    id: 'medicine-functional',
    title: 'Functional Status & Performance',
    fields: [
      { id: 'med_ecog', label: 'ECOG / WHO Performance Status', type: 'select',
        options: [
          '0 - Fully active, no restrictions',
          '1 - Strenuous activity restricted, ambulatory',
          '2 - Ambulatory, capable of self-care, unable to work',
          '3 - Limited self-care, confined to bed/chair >50% waking hours',
          '4 - Completely disabled, confined to bed/chair'
        ] },
      { id: 'med_mobility', label: 'Mobility / ambulation status', type: 'select',
        options: ['Independent', 'Walking aid', 'Wheelchair', 'Bedridden'] },
      { id: 'med_self_care', label: 'Self-care ability', type: 'select',
        options: ['Independent', 'Needs assistance', 'Fully dependent'] },
      { id: 'med_weight_change', label: 'Weight change (recent 3 months)', type: 'text',
        hint: 'Unintentional loss/gain in kg' },
      { id: 'med_appetite', label: 'Appetite', type: 'select',
        options: ['Normal', 'Decreased', 'Increased', 'Poor'] }
    ]
  },
  {
    id: 'medicine-review',
    title: 'System-Specific Detailed Review',
    fields: [
      { id: 'med_endocrine', label: 'Endocrine', type: 'checkbox',
        options: ['Thyroid enlargement', 'Heat/cold intolerance', 'Polyuria', 'Polydipsia', 'Weight change', 'Neuropathy symptoms', 'None'] },
      { id: 'med_renal', label: 'Renal', type: 'checkbox',
        options: ['Oliguria/anuria', 'Polyuria', 'Edema', 'Flank pain', 'Hematuria', 'Frothy urine', 'Nocturia', 'None'] },
      { id: 'med_hepatic', label: 'Hepatic', type: 'checkbox',
        options: ['Jaundice', 'Ascites', 'Pruritus', 'Easy bruising', 'GI bleeding', 'Confusion', 'None'] },
      { id: 'med_hematologic', label: 'Hematologic', type: 'checkbox',
        options: ['Pallor/fatigue', 'Easy bruising', 'Prolonged bleeding', 'Lymph node swelling', 'Recurrent infections', 'None'] },
      { id: 'med_immunologic', label: 'Immunologic / Autoimmune', type: 'checkbox',
        options: ['Rash', 'Joint pain', 'Oral ulcers', 'Photosensitivity', 'Raynauds', 'Dry eyes', 'Dry mouth', 'None'] },
      { id: 'med_infectious', label: 'Infectious — Recent infections, TB contact, fever pattern, HIV risk factors, travel-related infections', type: 'textarea' },
      { id: 'med_psychiatric', label: 'Psychiatric', type: 'checkbox',
        options: ['Depression', 'Anxiety', 'Sleep disturbance', 'Hallucinations', 'Memory loss', 'Suicidal thoughts', 'None'] },
      { id: 'med_ros_other', label: 'Other system-specific notes', type: 'textarea' }
    ]
  },
  {
    id: 'medicine-cv-risk',
    title: 'Cardiovascular Risk Assessment',
    fields: [
      { id: 'med_bmi', label: 'BMI (kg/m2)', type: 'text' },
      { id: 'med_waist', label: 'Waist circumference (cm)', type: 'text' },
      { id: 'med_bp_history', label: 'History of hypertension?', type: 'select',
        options: ['No', 'Yes — controlled', 'Yes — uncontrolled', 'Unknown'] },
      { id: 'med_dm_history', label: 'History of diabetes?', type: 'select',
        options: ['No', 'Type 1', 'Type 2', 'Pre-diabetic', 'Unknown'] },
      { id: 'med_lipid_history', label: 'History of dyslipidemia?', type: 'select',
        options: ['No', 'Yes', 'Unknown'] },
      { id: 'med_family_cvd', label: 'Family history of premature CVD (M <55, F <65)', type: 'select',
        options: ['No', 'Yes', 'Unknown'] },
      { id: 'med_ckd', label: 'Chronic kidney disease?', type: 'select',
        options: ['No', 'Yes (stage ___)', 'Unknown'] },
      { id: 'med_inactivity', label: 'Physical inactivity?', type: 'select',
        options: ['Active', 'Moderately active', 'Sedentary'] },
      { id: 'med_hba1c', label: 'HbA1c / Fasting glucose (if known)', type: 'text' },
      { id: 'med_lipids', label: 'Lipid profile — LDL / HDL / TG (if known)', type: 'text' },
      { id: 'med_egfr', label: 'eGFR / Creatinine (if known)', type: 'text' }
    ]
  },
  {
    id: 'medicine-resp-risk',
    title: 'Respiratory Risk Assessment',
    fields: [
      { id: 'med_resp_occupation', label: 'Occupational lung exposure (asbestos, coal, dust, fumes)', type: 'textarea' },
      { id: 'med_resp_family', label: 'Family history of asthma / TB / lung cancer', type: 'textarea' },
      { id: 'med_tb_contact', label: 'TB contact history', type: 'select',
        options: ['No', 'Yes — household', 'Yes — other', 'Unknown'] },
      { id: 'med_resp_screening', label: 'Previous chest imaging / PFT findings', type: 'textarea' }
    ]
  }
];

const MEDICINE_DISEASES = {
  'diabetes': [
    { id: 'med-dm-type', title: 'Diabetes Mellitus — Type & Control', fields: [
      { id: 'dm_type', label: 'Type', type: 'select', options: ['Type 1', 'Type 2', 'Gestational', 'Pre-diabetic'] },
      { id: 'dm_duration', label: 'Duration since diagnosis', type: 'text' },
      { id: 'dm_rx', label: 'Current treatment', type: 'checkbox',
        options: ['Diet only', 'Metformin', 'Sulfonylurea', 'DPP-4 inhibitor', 'SGLT2 inhibitor', 'GLP-1 agonist', 'Insulin', 'Other'] },
      { id: 'dm_insulin_type', label: 'Insulin regimen (if on insulin)', type: 'text', hint: 'e.g. basal-bolus, premixed' },
      { id: 'dm_hba1c', label: 'Most recent HbA1c', type: 'text' },
      { id: 'dm_fbg', label: 'Fasting blood glucose range', type: 'text' },
      { id: 'dm_hypoglycemia', label: 'Frequency of hypoglycemic episodes', type: 'select',
        options: ['None', 'Rare (<1/month)', 'Occasional (1-4/month)', 'Frequent (>1/week)', 'Severe (need assistance)'] },
      { id: 'dm_dka', label: 'History of DKA?', type: 'select', options: ['No', 'Yes — once', 'Yes — recurrent', 'Unknown'] }
    ]},
    { id: 'med-dm-complications', title: 'Diabetes — Complications', fields: [
      { id: 'dm_neuropathy', label: 'Neuropathy symptoms', type: 'checkbox',
        options: ['Numbness/tingling', 'Burning pain', 'Loss of sensation', 'Foot ulcers', 'Charcot joint', 'None'] },
      { id: 'dm_nephropathy', label: 'Nephropathy', type: 'checkbox',
        options: ['Microalbuminuria', 'Proteinuria', 'CKD stage', 'Dialysis', 'None'] },
      { id: 'dm_retinopathy', label: 'Retinopathy', type: 'select',
        options: ['No', 'Non-proliferative', 'Proliferative', 'Macular edema', 'Blindness', 'Not screened'] },
      { id: 'dm_cvd', label: 'Cardiovascular disease', type: 'checkbox',
        options: ['CAD', 'Prior MI', 'Stroke/TIA', 'PAD', 'None'] },
      { id: 'dm_foot', label: 'Foot complications', type: 'checkbox',
        options: ['Callus', 'Ulcer', 'Infection', 'Gangrene', 'Amputation', 'None'] },
      { id: 'dm_infections', label: 'Recurrent infections', type: 'checkbox',
        options: ['UTI', 'Skin/soft tissue', 'Fungal', 'TB', 'None'] }
    ]}
  ],
  'hypertension': [
    { id: 'med-htn', title: 'Hypertension — History & Control', fields: [
      { id: 'htn_duration', label: 'Duration since diagnosis', type: 'text' },
      { id: 'htn_bp_reading', label: 'Most recent BP reading', type: 'text', hint: 'e.g. 140/90' },
      { id: 'htn_medications', label: 'Current antihypertensives', type: 'checkbox',
        options: ['ACE inhibitor', 'ARB', 'CCB', 'Beta-blocker', 'Diuretic', 'Alpha-blocker', 'Other', 'None'] },
      { id: 'htn_adherence', label: 'Medication adherence', type: 'select',
        options: ['Always', 'Sometimes', 'Rarely', 'Never'] },
      { id: 'htn_salt', label: 'Salt intake', type: 'select',
        options: ['Low', 'Moderate', 'High'] },
      { id: 'htn_symptoms', label: 'Symptoms of hypertension', type: 'checkbox',
        options: ['Headache', 'Blurred vision', 'Chest pain', 'SOB', 'Epistaxis', 'None'] }
    ]},
    { id: 'med-htn-target', title: 'Hypertension — Target Organ Damage', fields: [
      { id: 'htn_heart', label: 'Cardiac damage', type: 'checkbox',
        options: ['LVH', 'CAD', 'Heart failure', 'None'] },
      { id: 'htn_brain', label: 'Cerebrovascular damage', type: 'checkbox',
        options: ['Stroke/TIA', 'Dementia', 'None'] },
      { id: 'htn_kidney', label: 'Renal damage', type: 'checkbox',
        options: ['Microalbuminuria', 'CKD', 'None'] },
      { id: 'htn_eyes', label: 'Retinopathy', type: 'select',
        options: ['No', 'Grade 1-2', 'Grade 3-4', 'Not screened'] },
      { id: 'htn_ecg', label: 'ECG / Echo findings (if done)', type: 'textarea' }
    ]}
  ],
  'ihd': [
    { id: 'med-ihd', title: 'Ischemic Heart Disease — History', fields: [
      { id: 'ihd_chest_pain', label: 'Chest pain type', type: 'select',
        options: ['Typical angina', 'Atypical angina', 'Non-cardiac', 'None'] },
      { id: 'ihd_ccs', label: 'CCS Angina Class', type: 'select',
        options: ['I — only with strenuous activity', 'II — walking >2 blocks', 'III — walking <2 blocks', 'IV — at rest'] },
      { id: 'ihd_duration', label: 'Duration of symptoms (months/years)', type: 'text' },
      { id: 'ihd_precipitants', label: 'Precipitating factors', type: 'checkbox',
        options: ['Exertion', 'Emotional stress', 'Cold weather', 'Heavy meal', 'At rest', 'None'] },
      { id: 'ihd_relief', label: 'Relieving factors', type: 'checkbox',
        options: ['Rest', 'GTN/sublingual nitrates', 'Oxygen', 'None'] },
      { id: 'ihd_prior_mi', label: 'Prior MI / ACS', type: 'select',
        options: ['No', 'Yes — STEMI', 'Yes — NSTEMI', 'Yes — unstable angina'] },
      { id: 'ihd_revascularization', label: 'Prior revascularization', type: 'checkbox',
        options: ['PCI/stent', 'CABG', 'None'] },
      { id: 'ihd_medications', label: 'Current cardiac medications', type: 'checkbox',
        options: ['Aspirin', 'Clopidogrel', 'Statin', 'Beta-blocker', 'ACE inhibitor', 'Nitrates', 'Anticoagulant', 'None'] },
      { id: 'ihd_ecg', label: 'ECG findings (if done)', type: 'textarea' },
      { id: 'ihd_angio', label: 'Angiography findings (if done)', type: 'textarea' }
    ]},
    { id: 'med-ihd-risk', title: 'IHD — Risk Factors', fields: [
      { id: 'ihd_smoking', label: 'Smoking history (pack-years)', type: 'text' },
      { id: 'ihd_dm', label: 'Diabetes?', type: 'select', options: ['No', 'Yes', 'Pre-diabetic'] },
      { id: 'ihd_htn', label: 'Hypertension?', type: 'select', options: ['No', 'Yes', 'Unknown'] },
      { id: 'ihd_dyslipidemia', label: 'Dyslipidemia?', type: 'select', options: ['No', 'Yes', 'Unknown'] },
      { id: 'ihd_family', label: 'Family history of premature IHD', type: 'select', options: ['No', 'Yes', 'Unknown'] },
      { id: 'ihd_obesity', label: 'Obesity / BMI', type: 'text' }
    ]}
  ],
  'copd_asthma': [
    { id: 'med-resp', title: 'COPD / Asthma — History', fields: [
      { id: 'resp_diagnosis', label: 'Diagnosis', type: 'select', options: ['COPD', 'Asthma', 'ACOS (overlap)', 'Uncertain'] },
      { id: 'resp_duration', label: 'Duration of symptoms', type: 'text' },
      { id: 'resp_cough', label: 'Cough', type: 'select', options: ['Dry', 'Productive', 'Nocturnal', 'Seasonal'] },
      { id: 'resp_sputum', label: 'Sputum (color, volume, smell)', type: 'text' },
      { id: 'resp_sob', label: 'SOB', type: 'select', options: ['None', 'On exertion', 'At rest', 'Nocturnal', 'On minimal activity'] },
      { id: 'resp_mrc', label: 'MRC Dyspnea Scale', type: 'select',
        options: ['1 — SOB on strenuous exercise', '2 — SOB walking uphill', '3 — Walks slower than peers', '4 — Stops after 100m', '5 — Too breathless to leave house'] },
      { id: 'resp_wheeze', label: 'Wheeze', type: 'select', options: ['No', 'Intermittent', 'Persistent'] },
      { id: 'resp_exacerbations', label: 'Exacerbations in past year', type: 'number', attrs: { min: 0 } },
      { id: 'resp_hospitalizations', label: 'Hospitalizations for exacerbations', type: 'number', attrs: { min: 0 } },
      { id: 'resp_triggers', label: 'Triggers', type: 'checkbox',
        options: ['Cold air', 'Exercise', 'Allergens', 'Infection', 'Smoke', 'Dust', 'Emotions', 'None'] },
      { id: 'resp_medications', label: 'Current medications', type: 'checkbox',
        options: ['SABA', 'LABA', 'ICS', 'LAMA', 'Oral steroids', 'Theophylline', 'Oxygen', 'None'] },
      { id: 'resp_pft', label: 'PFT / Spirometry findings (if done)', type: 'textarea' }
    ]}
  ],
  'stroke': [
    { id: 'med-stroke', title: 'Stroke / TIA — History', fields: [
      { id: 'stroke_onset', label: 'Onset', type: 'select', options: ['Sudden (seconds)', 'Rapid (mins to hours)', 'Stepwise', 'Progressive', 'TIA (<24h)'] },
      { id: 'stroke_time', label: 'Time since onset / Last Known Well', type: 'text' },
      { id: 'stroke_motor', label: 'Motor symptoms', type: 'checkbox',
        options: ['Facial droop', 'Arm weakness', 'Leg weakness', 'Hemiparesis', 'Hemiplegia', 'None'] },
      { id: 'stroke_sensory', label: 'Sensory symptoms', type: 'checkbox',
        options: ['Numbness', 'Paresthesia', 'Loss of sensation', 'None'] },
      { id: 'stroke_speech', label: 'Speech / language', type: 'checkbox',
        options: ['Aphasia', 'Dysarthria', 'Slurred speech', 'None'] },
      { id: 'stroke_visual', label: 'Visual symptoms', type: 'checkbox',
        options: ['Blurred vision', 'Diplopia', 'Field defect', 'Blindness', 'None'] },
      { id: 'stroke_other', label: 'Other symptoms', type: 'checkbox',
        options: ['Dizziness/vertigo', 'Loss of balance', 'Dysphagia', 'Headache', 'Confusion', 'None'] },
      { id: 'stroke_prior', label: 'Prior stroke / TIA?', type: 'select', options: ['No', 'Yes — TIA', 'Yes — stroke', 'Multiple'] },
      { id: 'stroke_imaging', label: 'Imaging findings (CT/MRI)', type: 'textarea' },
      { id: 'stroke_af', label: 'Atrial fibrillation / ECG findings', type: 'textarea' },
      { id: 'stroke_carotid', label: 'Carotid Doppler findings (if done)', type: 'textarea' }
    ]}
  ],
  'tb': [
    { id: 'med-tb', title: 'Tuberculosis — History', fields: [
      { id: 'tb_site', label: 'Site of TB', type: 'select', options: ['Pulmonary', 'Lymph node', 'Pleural', 'Meningeal', 'Bone/joint', 'Abdominal', 'Miliary', 'Genitourinary', 'Other'] },
      { id: 'tb_cough', label: 'Cough >3 weeks?', type: 'select', options: ['No', 'Yes — dry', 'Yes — productive'] },
      { id: 'tb_sputum', label: 'Sputum characteristics', type: 'select',
        options: ['None', 'Mucoid', 'Purulent', 'Blood-streaked', 'Hemoptysis'] },
      { id: 'tb_fever', label: 'Fever pattern', type: 'select', options: ['No', 'Low grade, evening rise', 'High grade with chills', 'Intermittent'] },
      { id: 'tb_night_sweats', label: 'Night sweats', type: 'select', options: ['No', 'Yes — mild', 'Yes — drenching'] },
      { id: 'tb_weight_loss', label: 'Weight loss', type: 'text', hint: 'kg over how many months' },
      { id: 'tb_contact', label: 'Known TB contact?', type: 'select', options: ['No', 'Yes — household', 'Yes — occupational', 'Unknown'] },
      { id: 'tb_bcg', label: 'BCG vaccination scar present?', type: 'select', options: ['Yes', 'No', 'Unsure'] },
      { id: 'tb_prior_tx', label: 'Prior TB treatment?', type: 'select', options: ['No', 'Yes — completed', 'Yes — defaulted', 'Yes — relapse'] },
      { id: 'tb_hiv', label: 'HIV status', type: 'select', options: ['Negative', 'Positive', 'Unknown'] },
      { id: 'tb_imaging', label: 'Chest X-ray / CT findings', type: 'textarea' }
    ]}
  ],
  'pneumonia': [
    { id: 'med-pna', title: 'Pneumonia — History', fields: [
      { id: 'pna_onset', label: 'Onset', type: 'select', options: ['Acute (hours to days)', 'Subacute (days)'] },
      { id: 'pna_cough', label: 'Cough', type: 'select', options: ['Dry', 'Productive', 'Paroxysmal'] },
      { id: 'pna_sputum', label: 'Sputum (color/consistency/smell)', type: 'text' },
      { id: 'pna_fever', label: 'Fever', type: 'select', options: ['No', 'Low grade', 'High grade with rigors', 'Intermittent'] },
      { id: 'pna_sob', label: 'Shortness of breath', type: 'select', options: ['No', 'Mild', 'Moderate', 'Severe'] },
      { id: 'pna_chest_pain', label: 'Pleuritic chest pain?', type: 'select', options: ['No', 'Yes — unilateral', 'Yes — bilateral'] },
      { id: 'pna_curb65', label: 'Severity features', type: 'checkbox',
        options: ['Confusion', 'RR >30', 'BP <90/60', 'Age >65', 'Uremia', 'Multilobar involvement', 'None'] },
      { id: 'pna_risk', label: 'Risk factors', type: 'checkbox',
        options: ['Smoking', 'COPD', 'Diabetes', 'Immunosuppression', 'Aspiration risk', 'Recent hospitalization', 'Alcohol use', 'None'] },
      { id: 'pna_prior_abx', label: 'Prior antibiotics used?', type: 'textarea' },
      { id: 'pna_imaging', label: 'Chest X-ray / CT findings', type: 'textarea' }
    ]}
  ],
  'ckd': [
    { id: 'med-ckd', title: 'Chronic Kidney Disease — History', fields: [
      { id: 'ckd_etiology', label: 'Etiology', type: 'select',
        options: ['Diabetic nephropathy', 'Hypertensive nephropathy', 'Glomerulonephritis', 'Obstructive', 'ADPKD', 'Unknown', 'Other'] },
      { id: 'ckd_stage', label: 'Stage', type: 'select', options: ['1', '2', '3a', '3b', '4', '5', 'Unknown'] },
      { id: 'ckd_egfr', label: 'Most recent eGFR', type: 'text' },
      { id: 'ckd_creatinine', label: 'Most recent creatinine', type: 'text' },
      { id: 'ckd_urine', label: 'Urine findings (protein, blood, foam)', type: 'textarea' },
      { id: 'ckd_uremic', label: 'Uremic symptoms', type: 'checkbox',
        options: ['Fatigue', 'Nausea/vomiting', 'Pruritus', 'Anorexia', 'Metallic taste', 'Hiccups', 'Restless legs', 'None'] },
      { id: 'ckd_edema', label: 'Edema / fluid overload', type: 'select', options: ['No', 'Ankle', 'Leg', 'Generalized / anasarca'] },
      { id: 'ckd_hyperkalemia', label: 'Hyperkalemia history?', type: 'select', options: ['No', 'Yes — mild', 'Yes — severe', 'Unknown'] },
      { id: 'ckd_anemia', label: 'Anemia', type: 'select', options: ['No', 'Yes — on ESA', 'Yes — not on ESA', 'Unknown'] },
      { id: 'ckd_dialysis', label: 'RRT / Dialysis', type: 'select', options: ['No', 'Hemodialysis', 'Peritoneal dialysis', 'Previous transplant', 'Not yet started'] },
      { id: 'ckd_access', label: 'Access type (if on dialysis)', type: 'select', options: ['AV fistula', 'AV graft', 'CVC line', 'PD catheter', 'None'] },
      { id: 'ckd_bone', label: 'CKD-MBD / bone disease', type: 'checkbox',
        options: ['Bone pain', 'Hyperphosphatemia', 'PTH elevation', 'Fractures', 'None'] }
    ]}
  ],
  'anemia': [
    { id: 'med-anemia', title: 'Anemia — History', fields: [
      { id: 'anemia_cbc', label: 'Most recent Hb', type: 'text', hint: 'g/dL' },
      { id: 'anemia_mcv', label: 'MCV', type: 'select', options: ['Microcytic', 'Normocytic', 'Macrocytic', 'Unknown'] },
      { id: 'anemia_onset', label: 'Onset', type: 'select', options: ['Acute (days)', 'Subacute (weeks)', 'Chronic (months)'] },
      { id: 'anemia_symptoms', label: 'Symptoms', type: 'checkbox',
        options: ['Fatigue', 'Pallor', 'Dizziness', 'SOB on exertion', 'Palpitations', 'Chest pain', 'Cold intolerance', 'None'] },
      { id: 'anemia_bleeding', label: 'Bleeding history', type: 'checkbox',
        options: ['Menorrhagia', 'GI bleeding', 'Hematuria', 'Epistaxis', 'Easy bruising', 'None'] },
      { id: 'anemia_diet', label: 'Dietary deficiency risk', type: 'checkbox',
        options: ['Iron deficiency', 'B12 deficiency', 'Folate deficiency', 'Vegetarian/vegan', 'Poor intake', 'None'] },
      { id: 'anemia_chronic', label: 'Chronic disease association', type: 'checkbox',
        options: ['CKD', 'Chronic inflammation', 'Malignancy', 'Autoimmune disease', 'None'] },
      { id: 'anemia_hemolysis', label: 'Hemolysis features', type: 'checkbox',
        options: ['Jaundice', 'Dark urine', 'Splenomegaly', 'Gallstones', 'Family history', 'None'] },
      { id: 'anemia_b12', label: 'B12 deficiency features', type: 'checkbox',
        options: ['Peripheral neuropathy', 'Glossitis', 'Memory loss', 'Ataxia', 'None'] }
    ]}
  ]
};
