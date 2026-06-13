// == MEDICINE ==
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
      { id: 'pna_type', label: 'Pneumonia type', type: 'select', options: ['Community-acquired (CAP)', 'Hospital-acquired (HAP)', 'Ventilator-associated (VAP)', 'Aspiration pneumonia', 'Healthcare-associated (HCAP)', 'Immunocompromised host'] },
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
  ],
  'uti': [
    { id: 'med-uti', title: 'Urinary Tract Infection — History', fields: [
      { id: 'uti_type', label: 'Clinical type', type: 'select', options: ['Cystitis (lower UTI)', 'Pyelonephritis (upper UTI)', 'Recurrent UTI (>2 in 6 months)', 'Asymptomatic bacteriuria', 'Catheter-associated UTI'] },
      { id: 'uti_onset', label: 'Onset of symptoms', type: 'select', options: ['Acute (<24h)', 'Subacute (1-3 days)', 'Gradual (>3 days)'] },
      { id: 'uti_dysuria', label: 'Dysuria / burning micturition', type: 'select', options: ['No', 'Mild', 'Moderate', 'Severe'] },
      { id: 'uti_frequency', label: 'Urinary frequency (voids/day)', type: 'text' },
      { id: 'uti_urgency', label: 'Urgency', type: 'select', options: ['No', 'Mild', 'Moderate', 'Severe / incontinence'] },
      { id: 'uti_hematuria', label: 'Hematuria', type: 'select', options: ['No', 'Microscopic', 'Frank blood', 'Clots'] },
      { id: 'uti_suprapubic', label: 'Suprapubic pain / discomfort', type: 'select', options: ['No', 'Mild', 'Moderate', 'Severe'] },
      { id: 'uti_flank_pain', label: 'Flank pain / CVA tenderness', type: 'select', options: ['No', 'Yes — right', 'Yes — left', 'Yes — bilateral'] },
      { id: 'uti_fever', label: 'Fever', type: 'select', options: ['No', 'Low grade', 'High grade with chills/rigors', 'Intermittent'] },
      { id: 'uti_nausea', label: 'Nausea / vomiting', type: 'select', options: ['No', 'Nausea only', 'Nausea with vomiting'] },
      { id: 'uti_previous', label: 'Previous UTIs (number in past year)', type: 'number', attrs: { min: 0 } },
      { id: 'uti_abx_recent', label: 'Recent antibiotic use', type: 'textarea', hint: 'Drug, duration, date' },
      { id: 'uti_risk_factors', label: 'Risk factors', type: 'checkbox',
        options: ['Diabetes', 'Pregnancy', 'Catheter / instrumentation', 'Kidney stones', 'BPH / obstruction', 'Neurogenic bladder', 'Immunosuppression', 'Post-menopausal', 'Sexual activity', 'None'] },
      { id: 'uti_urinalysis', label: 'Urinalysis / dipstick findings', type: 'textarea', hint: 'Leukocytes, nitrites, blood, protein' },
      { id: 'uti_culture', label: 'Urine culture results (if available)', type: 'textarea', hint: 'Organism, colony count, sensitivity' }
    ]}
  ],
  'dka': [
    { id: 'med-dka', title: 'Diabetic Ketoacidosis / HHS — History', fields: [
      { id: 'dka_type', label: 'Presentation type', type: 'select', options: ['DKA', 'Hyperosmolar Hyperglycemic State (HHS)', 'Mixed DKA/HHS'] },
      { id: 'dka_diabetes_type', label: 'Type of diabetes', type: 'select', options: ['Type 1', 'Type 2', 'New-onset (unknown type)', 'Other'] },
      { id: 'dka_precipitant', label: 'Precipitating factor', type: 'checkbox',
        options: ['Infection (identify source)', 'Missed insulin dose', 'New-onset diabetes', 'Stress (MI, stroke, trauma)', 'Drugs (steroids, SGLT2i)', 'Non-adherence', 'Unknown'] },
      { id: 'dka_source_infection', label: 'Source of infection (if identified)', type: 'text' },
      { id: 'dka_polyuria', label: 'Polyuria / polydipsia', type: 'select', options: ['No', 'Mild', 'Moderate', 'Severe / marked'] },
      { id: 'dka_weight_loss', label: 'Weight loss (unintentional)', type: 'text', hint: 'kg over duration' },
      { id: 'dka_nausea', label: 'Nausea / vomiting / abdominal pain', type: 'select', options: ['No', 'Nausea only', 'Vomiting', 'Abdominal pain', 'All present'] },
      { id: 'dka_breathing', label: 'Breathing pattern', type: 'select', options: ['Normal', 'Kussmaul (deep/sighing)', 'Shortness of breath'] },
      { id: 'dka_consciousness', label: 'Level of consciousness', type: 'select', options: ['Alert and oriented', 'Drowsy / confused', 'Stupor', 'Coma'] },
      { id: 'dka_dehydration', label: 'Signs of dehydration', type: 'checkbox',
        options: ['Dry mucous membranes', 'Decreased skin turgor', 'Sunken eyes', 'Tachycardia', 'Hypotension', 'Oliguria'] },
      { id: 'dka_blood_glucose', label: 'Blood glucose on presentation', type: 'text', hint: 'mg/dL or mmol/L' },
      { id: 'dka_ph', label: 'pH / Bicarbonate (if known)', type: 'text' },
      { id: 'dka_anion_gap', label: 'Anion gap (if known)', type: 'text' },
      { id: 'dka_ketones', label: 'Serum / urine ketones', type: 'select', options: ['Positive — mild', 'Positive — moderate', 'Positive — severe', 'Not tested'] },
      { id: 'dka_electrolytes', label: 'Potassium / Sodium on presentation', type: 'text' },
      { id: 'dka_prior_dka', label: 'Number of prior DKA episodes', type: 'number', attrs: { min: 0 } },
      { id: 'dka_last_hba1c', label: 'Most recent HbA1c', type: 'text' },
      { id: 'dka_insulin_regimen', label: 'Insulin regimen prior to presentation', type: 'textarea' }
    ]},
    { id: 'med-dka-mgmt', title: 'DKA — Management Details', fields: [
      { id: 'dka_fluids', label: 'IV fluids given', type: 'checkbox',
        options: ['0.9% Normal saline', 'RL / Hartmann\'s', 'Plasmalyte', 'None yet'] },
      { id: 'dka_fluids_rate', label: 'Fluid rate / total given', type: 'text' },
      { id: 'dka_insulin_therapy', label: 'Insulin therapy', type: 'select', options: ['IV infusion (insulin drip)', 'IM/subcut rapid-acting', 'None yet', 'Not applicable'] },
      { id: 'dka_insulin_rate', label: 'Insulin rate (units/hr)', type: 'text' },
      { id: 'dka_dextrose', label: 'Dextrose added (when glucose <250 mg/dL)', type: 'select', options: ['Not yet', 'Yes — D5', 'Yes — D10', 'Not applicable'] },
      { id: 'dka_potassium', label: 'Potassium replacement given?', type: 'select', options: ['No', 'Yes — in IV fluids', 'Yes — separate infusion'] },
      { id: 'dka_bicarbonate', label: 'Bicarbonate given?', type: 'select', options: ['No', 'Yes (pH <6.9)', 'Not indicated'] },
      { id: 'dka_monitoring', label: 'Monitoring frequency', type: 'select', options: ['Hourly glucose and electrolytes', '2-hourly', 'Other'] },
      { id: 'dka_transition', label: 'Transition to SC insulin planned?', type: 'select', options: ['Not yet', 'When eating and gap closed', 'Yes — basal-bolus', 'Yes — premixed'] },
      { id: 'dka_complications', label: 'Complications during treatment', type: 'checkbox',
        options: ['Hypokalemia', 'Hypoglycemia', 'Cerebral edema', 'ARDS', 'AKI', 'None'] }
    ]}
  ]
};

// == PAEDIATRICS ==
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

// == GYNAE/OBS ==
const GYNAEOBS_QUESTIONS = [
  {
    id: 'menstrual-history',
    title: 'Menstrual History',
    fields: [
      { id: 'gyn_menarche', label: 'Age at menarche', type: 'number' },
      { id: 'gyn_lmp', label: 'LMP (Last Menstrual Period)', type: 'date' },
      { id: 'gyn_cycle', label: 'Cycle length (days)', type: 'text', hint: 'e.g. 28 days, irregular' },
      { id: 'gyn_duration', label: 'Duration of bleeding (days)', type: 'text' },
      { id: 'gyn_flow', label: 'Flow amount', type: 'select',
        options: ['Light', 'Moderate', 'Heavy', 'Very heavy'] },
      { id: 'gyn_dysmenorrhea', label: 'Dysmenorrhea (painful periods)', type: 'select',
        options: ['None', 'Mild', 'Moderate', 'Severe'] },
      { id: 'gyn_menopause', label: 'Menopausal status', type: 'select',
        options: ['Premenopausal', 'Perimenopausal', 'Postmenopausal', 'Not applicable'] },
      { id: 'gyn_bleeding_issues', label: 'Abnormal uterine bleeding?', type: 'textarea' }
    ]
  },
  {
    id: 'obstetric-history',
    title: 'Obstetric History',
    fields: [
      { id: 'gyn_gravida', label: 'Gravida (total pregnancies)', type: 'number' },
      { id: 'gyn_para', label: 'Para (deliveries > 24 weeks)', type: 'number' },
      { id: 'gyn_abortions', label: 'Abortions (spontaneous / elective)', type: 'text' },
      { id: 'gyn_living', label: 'Living children', type: 'number' },
      { id: 'gyn_obstetric_complications', label: 'Obstetric complications', type: 'textarea',
        hint: 'Pre-eclampsia, gestational diabetes, hemorrhage, etc.' },
      { id: 'gyn_delivery_types', label: 'Types of deliveries', type: 'textarea',
        hint: 'Vaginal / C-section details' },
      { id: 'gyn_breastfeeding', label: 'Breastfeeding history', type: 'textarea' }
    ]
  },
  {
    id: 'gynae-history',
    title: 'Gynaecological History',
    fields: [
      { id: 'gyn_contraception', label: 'Current / past contraception', type: 'textarea' },
      { id: 'gyn_cervical_screening', label: 'Cervical screening (Pap smear) history', type: 'textarea' },
      { id: 'gyn_sti', label: 'STI history', type: 'textarea' },
      { id: 'gyn_pelvic_pain', label: 'Pelvic pain / dyspareunia', type: 'textarea' },
      { id: 'gyn_vaginal_discharge', label: 'Vaginal discharge / itching', type: 'textarea' },
      { id: 'gyn_fibroids', label: 'Fibroids / endometriosis / PCOS history', type: 'textarea' },
      { id: 'gyn_urinary', label: 'Urinary symptoms (incontinence, frequency)', type: 'textarea' },
      { id: 'gyn_breast', label: 'Breast symptoms / self-exam findings', type: 'textarea' }
    ]
  },
  {
    id: 'pregnancy-current',
    title: 'Current Pregnancy (if applicable)',
    fields: [
      { id: 'preg_gestational_age', label: 'Gestational age', type: 'text' },
      { id: 'preg_edd', label: 'Estimated Due Date (EDD)', type: 'date' },
      { id: 'preg_antenatal_care', label: 'Antenatal care / visits', type: 'textarea' },
      { id: 'preg_scan', label: 'Ultrasound findings', type: 'textarea' },
      { id: 'preg_complaints', label: 'Current pregnancy complaints', type: 'textarea' },
      { id: 'preg_movements', label: 'Fetal movements', type: 'textarea' },
      { id: 'preg_risk_factors', label: 'Risk factors (age, BMI, medical conditions)', type: 'textarea' }
    ]
  }
];

const GYNAEOBS_DISEASES = {
  'preeclampsia': [
    { id: 'gyn-preeclampsia', title: 'Pre-eclampsia / Eclampsia — History', fields: [
      { id: 'pet_ga', label: 'Gestational age at presentation', type: 'text' },
      { id: 'pet_bp', label: 'Highest BP recorded', type: 'text', hint: 'e.g. 160/100' },
      { id: 'pet_proteinuria', label: 'Proteinuria (dipstick / 24h)', type: 'text' },
      { id: 'pet_headache', label: 'Headache', type: 'select', options: ['No', 'Mild', 'Severe / persistent'] },
      { id: 'pet_visual', label: 'Visual disturbances', type: 'checkbox',
        options: ['Blurred vision', 'Scotoma', 'Photophobia', 'Diplopia', 'None'] },
      { id: 'pet_epigastric', label: 'Epigastric / RUQ pain?', type: 'select', options: ['No', 'Yes'] },
      { id: 'pet_edema', label: 'Edema', type: 'select', options: ['No', 'Mild (ankle)', 'Moderate (legs)', 'Severe (generalized / facial)'] },
      { id: 'pet_seizures', label: 'Seizures (eclampsia)?', type: 'select', options: ['No', 'Yes — antepartum', 'Yes — intrapartum', 'Yes — postpartum'] },
      { id: 'pet_urine_output', label: 'Urine output', type: 'select', options: ['Normal', 'Decreased', 'Oliguria'] },
      { id: 'pet_prior_pet', label: 'Prior history of pre-eclampsia?', type: 'select', options: ['No', 'Yes', 'Primigravida'] },
      { id: 'pet_lfts', label: 'LFTs / Platelets (if known)', type: 'textarea', hint: 'HELLP syndrome markers' }
    ]}
  ],
  'aph': [
    { id: 'gyn-aph', title: 'Antepartum Hemorrhage — History', fields: [
      { id: 'aph_ga', label: 'Gestational age', type: 'text' },
      { id: 'aph_onset', label: 'Onset', type: 'select', options: ['Sudden', 'Gradual'] },
      { id: 'aph_color', label: 'Color of blood', type: 'select', options: ['Bright red', 'Dark / altered', 'Mixed with mucus'] },
      { id: 'aph_amount', label: 'Amount (estimated)', type: 'select', options: ['Spotting', 'Mild', 'Moderate', 'Heavy', 'Torrential'] },
      { id: 'aph_pain', label: 'Pain associated?', type: 'select', options: ['No — painless', 'Yes — constant abdominal pain', 'Yes — intermittent'] },
      { id: 'aph_precipitants', label: 'Precipitants (trauma, coitus, exam?)', type: 'text' },
      { id: 'aph_placenta_previa', label: 'Known placenta previa on USG?', type: 'select', options: ['No', 'Yes', 'Not yet scanned'] },
      { id: 'aph_abruption', label: 'Features of abruption (tense uterus, fetal distress)', type: 'checkbox',
        options: ['Tense/woody uterus', 'Constant pain', 'Fetal distress', 'Absent fetal movements', 'None'] },
      { id: 'aph_fetal_movements', label: 'Fetal movements', type: 'select', options: ['Normal', 'Decreased', 'Absent'] },
      { id: 'aph_prior_cs', label: 'Prior C-section / uterine scar?', type: 'select', options: ['No', 'Yes — 1', 'Yes — 2+', 'Unknown'] },
      { id: 'aph_coagulation', label: 'Any coagulation disorder / anticoagulants?', type: 'textarea' }
    ]}
  ],
  'pph': [
    { id: 'gyn-pph', title: 'Postpartum Hemorrhage — History', fields: [
      { id: 'pph_timing', label: 'Timing', type: 'select', options: ['Immediate (<24h)', 'Delayed (>24h to 6 weeks)'] },
      { id: 'pph_onset_postpartum', label: 'Days postpartum', type: 'number', attrs: { min: 0 } },
      { id: 'pph_amount', label: 'Estimated blood loss', type: 'text' },
      { id: 'pph_passed_clots', label: 'Passed clots / tissue?', type: 'select', options: ['No', 'Yes — small', 'Yes — large'] },
      { id: 'pph_uterine_tone', label: 'Uterine tone on exam', type: 'select', options: ['Firm', 'Boggy/atonic', 'Not examined'] },
      { id: 'pph_placenta', label: 'Placenta delivered completely?', type: 'select', options: ['Yes', 'No — retained', 'Uncertain'] },
      { id: 'pph_perineal', label: 'Perineal / vaginal lacerations?', type: 'select', options: ['No', 'Yes — 1st degree', 'Yes — 2nd degree', 'Yes — 3rd/4th degree'] },
      { id: 'pph_delivery_mode', label: 'Mode of delivery', type: 'select', options: ['SVD', 'C-section', 'Forceps', 'Vacuum'] },
      { id: 'pph_vitals', label: 'Vitals — pulse, BP, pallor', type: 'textarea' },
      { id: 'pph_risk_factors', label: 'Risk factors', type: 'checkbox',
        options: ['Uterine atony', 'Retained placenta', 'Perineal tear', 'Coagulopathy', 'Prolonged labour', 'Macrosomia', 'Twins', 'Polyhydramnios', 'None'] }
    ]}
  ],
  'pid': [
    { id: 'gyn-pid', title: 'Pelvic Inflammatory Disease — History', fields: [
      { id: 'pid_lower_abdominal', label: 'Lower abdominal pain', type: 'select', options: ['No', 'Mild', 'Moderate', 'Severe'] },
      { id: 'pid_pain_onset', label: 'Pain onset', type: 'select', options: ['Acute', 'Gradual', 'Chronic (>2 weeks)'] },
      { id: 'pid_discharge', label: 'Abnormal vaginal discharge', type: 'select', options: ['No', 'Yes — increased', 'Yes — foul-smelling', 'Yes — purulent'] },
      { id: 'pid_fever', label: 'Fever', type: 'select', options: ['No', 'Low grade', 'High grade'] },
      { id: 'pid_dysuria', label: 'Dysuria / urinary symptoms', type: 'select', options: ['No', 'Yes'] },
      { id: 'pid_dyspareunia', label: 'Dyspareunia', type: 'select', options: ['No', 'Yes — superficial', 'Yes — deep'] },
      { id: 'pid_irregular_bleeding', label: 'Irregular / intermenstrual bleeding', type: 'select', options: ['No', 'Yes'] },
      { id: 'pid_contraception', label: 'Contraception (IUD in situ?)', type: 'select', options: ['None', 'IUD', 'OCP', 'Other'] },
      { id: 'pid_sti_risk', label: 'STI risk factors', type: 'checkbox',
        options: ['Multiple partners', 'New partner', 'Partner with STI', 'Prior STI', 'None'] },
      { id: 'pid_prior_pid', label: 'Prior history of PID?', type: 'select', options: ['No', 'Yes — 1', 'Yes — multiple'] },
      { id: 'pid_cervical_exam', label: 'Cervical motion / adnexal tenderness on exam?', type: 'textarea' }
    ]}
  ],
  'ovarian_cyst': [
    { id: 'gyn-ovarian', title: 'Ovarian Cyst / Torsion — History', fields: [
      { id: 'ovc_pain', label: 'Abdominal/pelvic pain', type: 'select', options: ['No', 'Mild', 'Moderate', 'Severe', 'Acute onset / colicky'] },
      { id: 'ovc_pain_radiation', label: 'Pain radiation', type: 'select', options: ['No', 'To back', 'To thigh', 'To flank'] },
      { id: 'ovc_nausea_vomiting', label: 'Nausea / vomiting', type: 'select', options: ['No', 'Yes'] },
      { id: 'ovc_bloating', label: 'Bloating / abdominal distension', type: 'select', options: ['No', 'Mild', 'Marked'] },
      { id: 'ovc_menstrual', label: 'Menstrual changes', type: 'select', options: ['None', 'Irregular', 'Amenorrhea', 'Menorrhagia'] },
      { id: 'ovc_palpable', label: 'Palpable mass?', type: 'select', options: ['No', 'Yes', 'Not examined'] },
      { id: 'ovc_usg', label: 'USG findings (size, complex/simple, septations, solid components)', type: 'textarea' },
      { id: 'ovc_ca125', label: 'CA-125 (if done)', type: 'text' },
      { id: 'ovc_family_ovarian', label: 'Family history of ovarian / breast cancer?', type: 'select', options: ['No', 'Yes', 'Unknown'] }
    ]}
  ],
  'ectopic': [
    { id: 'gyn-ectopic', title: 'Ectopic Pregnancy — History', fields: [
      { id: 'ect_lmp', label: 'LMP / weeks amenorrhea', type: 'text' },
      { id: 'ect_abdominal_pain', label: 'Abdominal pain', type: 'select', options: ['No', 'Unilateral', 'Bilateral', 'Generalized'] },
      { id: 'ect_pain_onset', label: 'Pain onset', type: 'select', options: ['Sudden', 'Gradual'] },
      { id: 'ect_bleeding', label: 'Vaginal bleeding', type: 'select', options: ['No', 'Spotting', 'Light', 'Heavy'] },
      { id: 'ect_syncope', label: 'Syncope / dizziness / collapse?', type: 'select', options: ['No', 'Yes — one episode', 'Yes — recurrent'] },
      { id: 'ect_shoulder_tip', label: 'Shoulder tip pain?', type: 'select', options: ['No', 'Yes'] },
      { id: 'ect_cervical_exam', label: 'Cervical excitation / adnexal tenderness?', type: 'textarea' },
      { id: 'ect_usg', label: 'USG findings (empty uterus, adnexal mass, free fluid)', type: 'textarea' },
      { id: 'ect_beta_hcg', label: 'Beta-hCG levels', type: 'text' },
      { id: 'ect_risk', label: 'Risk factors', type: 'checkbox',
        options: ['Prior ectopic', 'PID', 'IUD in situ', 'Tubal surgery', 'Smoking', 'Assisted conception', 'None'] }
    ]}
  ],
  'menorrhagia': [
    { id: 'gyn-menorrhagia', title: 'Menorrhagia / AUB — History', fields: [
      { id: 'menorr_cycle', label: 'Cycle length', type: 'text' },
      { id: 'menorr_duration', label: 'Duration of bleeding (days)', type: 'text' },
      { id: 'menorr_flow', label: 'Flow description', type: 'checkbox',
        options: ['Heavy', 'Clots >1cm', 'Flooding / gushes', 'Soaking through <1h', 'Double protection needed', 'Anemia symptoms'] },
      { id: 'menorr_intermenstrual', label: 'Intermenstrual / post-coital bleeding?', type: 'select', options: ['No', 'Yes'] },
      { id: 'menorr_pain', label: 'Pain with periods', type: 'select', options: ['None', 'Mild', 'Moderate', 'Severe'] },
      { id: 'menorr_age', label: 'Age / menopausal status', type: 'select', options: ['Adolescent', 'Reproductive age', 'Perimenopausal', 'Postmenopausal'] },
      { id: 'menorr_pregnancy', label: 'Possibility of pregnancy?', type: 'select', options: ['No', 'Yes — test done (____)', 'Uncertain'] },
      { id: 'menorr_coagulation', label: 'Bleeding disorder symptoms', type: 'checkbox',
        options: ['Easy bruising', 'Epistaxis', 'Gum bleeding', 'Family bleeding disorder', 'None'] },
      { id: 'menorr_contraception', label: 'Contraception (hormonal / IUD)', type: 'textarea' },
      { id: 'menorr_usg', label: 'USG findings (fibroids, polyps, endometrium thickness)', type: 'textarea' },
      { id: 'menorr_hb', label: 'Hb / iron studies (if known)', type: 'text' }
    ]}
  ],
  'infertility': [
    { id: 'gyn-infertility', title: 'Infertility — History', fields: [
      { id: 'infert_type', label: 'Type', type: 'select', options: ['Primary (never conceived)', 'Secondary (previous pregnancy)'] },
      { id: 'infert_duration', label: 'Duration of trying', type: 'text', hint: 'years/months' },
      { id: 'infert_age', label: 'Female age', type: 'text' },
      { id: 'infert_cycle', label: 'Menstrual cycle regularity', type: 'select', options: ['Regular (21-35 days)', 'Irregular', 'Oligomenorrhea', 'Amenorrhea'] },
      { id: 'infert_ovulation', label: 'Ovulation signs', type: 'checkbox',
        options: ['Mid-cycle pain', 'Mittelschmerz', 'Regular cycles', 'Hot flushes', 'Galactorrhea', 'None'] },
      { id: 'infert_pcos', label: 'PCOS features', type: 'checkbox',
        options: ['Hirsutism', 'Acne', 'Obesity', 'Male-pattern baldness', 'Acanthosis nigricans', 'None'] },
      { id: 'infert_past_pelvic', label: 'Past pelvic infection / PID / STI', type: 'select', options: ['No', 'Yes', 'Unknown'] },
      { id: 'infert_surgery', label: 'Previous pelvic / abdominal surgery?', type: 'textarea' },
      { id: 'infert_endometriosis', label: 'Endometriosis symptoms?', type: 'checkbox',
        options: ['Dysmenorrhea', 'Dyspareunia', 'Chronic pelvic pain', 'Painful defecation', 'None'] },
      { id: 'infert_male_factor', label: 'Male factor — semen analysis done?', type: 'select', options: ['No', 'Yes — normal', 'Yes — abnormal', 'Not yet'] },
      { id: 'infert_prior_treatment', label: 'Prior fertility treatment', type: 'checkbox',
        options: ['Ovulation induction', 'IUI', 'IVF', 'None'] },
      { id: 'infert_tubes', label: 'Tubal patency test (HSG / laparoscopy)?', type: 'textarea' },
      { id: 'infert_hormones', label: 'Hormonal profile (FSH, LH, AMH, TSH, prolactin)', type: 'textarea' }
    ]}
  ]
};

// == ORTHOPEDICS ==
const ORTHO_QUESTIONS = [
  {
    id: 'ortho-exam',
    title: 'Orthopedic Examination',
    fields: [
      { id: 'ortho_gals', label: 'GALS screen findings', type: 'textarea' },
      { id: 'ortho_joint_involved', label: 'Joint(s) involved', type: 'text', hint: 'Specify affected joints' },
      { id: 'ortho_swelling', label: 'Swelling / effusion', type: 'select', options: ['None', 'Mild', 'Moderate', 'Severe'] },
      { id: 'ortho_deformity', label: 'Deformity', type: 'text' },
      { id: 'ortho_rom', label: 'Range of motion', type: 'select', options: ['Full', 'Limited', 'Fixed', 'Locked'] },
      { id: 'ortho_tenderness', label: 'Tenderness', type: 'select', options: ['None', 'Mild', 'Moderate', 'Severe'] },
      { id: 'ortho_crepitus', label: 'Crepitus', type: 'select', options: ['Yes', 'No'] },
      { id: 'ortho_stability', label: 'Joint stability', type: 'select', options: ['Stable', 'Unstable'] },
      { id: 'ortho_neurovascular', label: 'Neurovascular status distal to injury', type: 'textarea' }
    ]
  }
];
const ORTHO_DISEASES = {
  fracture: [
    { id: 'fx-history', title: 'Fracture History', fields: [
      { id: 'fx_mechanism', label: 'Mechanism of injury', type: 'select', options: ['Fall', 'RTA', 'Sports injury', 'Assault', 'Pathological', 'Stress'] },
      { id: 'fx_type', label: 'Fracture type', type: 'select', options: ['Closed', 'Open Grade I', 'Open Grade II', 'Open Grade IIIA', 'Open Grade IIIB', 'Open Grade IIIC'] },
      { id: 'fx_bone', label: 'Bone involved', type: 'text' }, { id: 'fx_anatomical', label: 'Anatomical site', type: 'select', options: ['Proximal', 'Midshaft', 'Distal', 'Intra-articular', 'Avulsion', 'Comminuted', 'Segmental'] },
      { id: 'fx_displacement', label: 'Displacement', type: 'select', options: ['None (undisplaced)', 'Minimal', 'Moderate', 'Complete'] },
      { id: 'fx_angulation', label: 'Angulation', type: 'text' }, { id: 'fx_nerve_injury', label: 'Associated nerve injury', type: 'text' },
      { id: 'fx_vascular_injury', label: 'Associated vascular injury', type: 'select', options: ['None', 'Compartment syndrome', 'Arterial injury'] }] },
    { id: 'fx-imaging', title: 'Fracture Imaging', fields: [
      { id: 'fx_xr_views', label: 'X-ray views obtained', type: 'text' }, { id: 'fx_ct', label: 'CT scan findings', type: 'textarea' },
      { id: 'fx_classification', label: 'Classification (e.g. AO, Garden, Neer)', type: 'text' }] }
  ],
  osteoarthritis: [{ id: 'oa-history', title: 'Osteoarthritis History', fields: [
    { id: 'oa_joints', label: 'Joints affected', type: 'checkbox', options: ['Knees', 'Hips', 'Hands (DIP)', 'Hands (PIP)', 'Thumb CMC', 'Spine', 'Shoulders', 'Ankles'] },
    { id: 'oa_pain_pattern', label: 'Pain pattern', type: 'select', options: ['Mechanical (worse with activity)', 'Rest pain only', 'Continuous', 'Nocturnal'] },
    { id: 'oa_stiffness', label: 'Morning stiffness', type: 'select', options: ['None', '< 15 min', '15-30 min', '> 30 min'] },
    { id: 'oa_functional', label: 'Functional limitation', type: 'select', options: ['None', 'Mild', 'Moderate', 'Severe - needs assistance'] },
    { id: 'oa_risk', label: 'Risk factors', type: 'checkbox', options: ['Age > 50', 'Female', 'Obesity', 'Previous joint injury', 'Occupational overuse', 'Family history'] },
    { id: 'oa_treatment', label: 'Previous treatments tried', type: 'textarea' }] }],
  rheumatoid_arthritis: [{ id: 'ra-history', title: 'Rheumatoid Arthritis History', fields: [
    { id: 'ra_joints', label: 'Joints involved (symmetrical?)', type: 'textarea' },
    { id: 'ra_onset', label: 'Onset', type: 'select', options: ['Acute (< 6 weeks)', 'Insidious ( > 6 weeks)'] },
    { id: 'ra_stiffness', label: 'Morning stiffness duration', type: 'select', options: ['None', '< 30 min', '30-60 min', '> 60 min'] },
    { id: 'ra_extra', label: 'Extra-articular features', type: 'checkbox', options: ['Rheumatoid nodules', 'Vasculitis', 'Sicca syndrome', 'Pleuritis', 'Pericarditis', 'Felty syndrome', 'Carpal tunnel'] },
    { id: 'ra_serology', label: 'Serology results', type: 'checkbox', options: ['RF positive', 'Anti-CCP positive', 'ESR/CRP elevated', 'Anemia of chronic disease'] },
    { id: 'ra_dmards', label: 'DMARD history', type: 'textarea' }] }],
  gout: [{ id: 'gout-history', title: 'Gout History', fields: [
    { id: 'gout_onset', label: 'Onset of flare', type: 'select', options: ['Sudden (hours)', 'Over 1-2 days', 'Gradual'] },
    { id: 'gout_joint', label: 'Joint affected', type: 'select', options: ['First MTP (podagra)', 'Ankle', 'Knee', 'Wrist', 'Elbow', 'Fingers', 'Polyarticular'] },
    { id: 'gout_redness', label: 'Overlying erythema', type: 'select', options: ['Yes', 'No'] }, { id: 'gout_triggers', label: 'Triggers', type: 'checkbox', options: ['Alcohol', 'Red meat', 'Seafood', 'Dehydration', 'Trauma', 'Surgery', 'Diuretics', 'Infection'] },
    { id: 'gout_freq', label: 'Frequency of flares', type: 'text' }, { id: 'gout_tophi', label: 'Tophi present', type: 'select', options: ['Yes', 'No'] },
    { id: 'gout_urate', label: 'Serum urate level', type: 'text', hint: 'mg/dL or umol/L' }, { id: 'gout_renal', label: 'Renal function / stones', type: 'textarea' }] }],
  back_pain: [{ id: 'back-history', title: 'Back Pain History', fields: [
    { id: 'back_duration', label: 'Duration', type: 'select', options: ['Acute (< 6 weeks)', 'Subacute (6-12 weeks)', 'Chronic (> 12 weeks)'] },
    { id: 'back_onset', label: 'Onset', type: 'select', options: ['Sudden', 'Gradual', 'After specific injury'] },
    { id: 'back_radiation', label: 'Radiation', type: 'select', options: ['None', 'Leg (sciatica)', 'Bilateral legs', 'Groin/perineum'] },
    { id: 'back_red_flags', label: 'Red flags present', type: 'checkbox', options: ['Cauda equina (retention/saddle anesthesia)', 'Malignancy history', 'Unexplained weight loss', 'Fever', 'IV drug use', 'Night pain', 'Age > 70', 'Immunosuppressed'] },
    { id: 'back_worse', label: 'Aggravating factors', type: 'textarea' }, { id: 'back_better', label: 'Relieving factors', type: 'textarea' }] }],
  osteoporosis: [{ id: 'op-history', title: 'Osteoporosis Assessment', fields: [
    { id: 'op_fragility_fx', label: 'Previous fragility fractures', type: 'textarea' },
    { id: 'op_dexa', label: 'DEXA scan T-score', type: 'select', options: ['Not done', 'Normal (> -1)', 'Osteopenia (-1 to -2.5)', 'Osteoporosis (< -2.5)', 'Severe osteoporosis (< -2.5 + fracture)'] },
    { id: 'op_risk', label: 'Risk factors', type: 'checkbox', options: ['Age > 65', 'Female', 'Early menopause', 'Low BMI', 'Smoking', 'Alcohol', 'Steroid use', 'Family history', 'Rheumatoid arthritis', 'Thyroid disease'] },
    { id: 'op_calcium', label: 'Calcium / vitamin D intake', type: 'select', options: ['Adequate', 'Inadequate', 'Supplementation'] },
    { id: 'op_treatment', label: 'Current osteoporosis treatment', type: 'textarea' }] }]
};

// == ENT ==
const ENT_QUESTIONS = [
  { id: 'ent-exam', title: 'ENT Examination', fields: [
    { id: 'ent_otoscopy', label: 'Otoscopy findings (R)', type: 'textarea' },
    { id: 'ent_otoscopy_l', label: 'Otoscopy findings (L)', type: 'textarea' },
    { id: 'ent_rhinoscopy', label: 'Anterior rhinoscopy findings', type: 'textarea' },
    { id: 'ent_oral', label: 'Oral cavity / oropharynx findings', type: 'textarea' },
    { id: 'ent_neck', label: 'Neck examination (lymph nodes, thyroid)', type: 'textarea' },
    { id: 'ent_hearing', label: 'Hearing assessment (tuning fork tests)', type: 'textarea' },
    { id: 'ent_vestibular', label: 'Vestibular function tests', type: 'textarea' }] }
];
const ENT_DISEASES = {
  otitis_media: [{ id: 'om-history', title: 'Otitis Media History', fields: [
    { id: 'om_type', label: 'Type', type: 'select', options: ['Acute otitis media', 'Otitis media with effusion (glue ear)', 'Chronic suppurative otitis media'] },
    { id: 'om_ear', label: 'Ear affected', type: 'select', options: ['Right', 'Left', 'Bilateral'] }, { id: 'om_earache', label: 'Earache (otalgia)', type: 'select', options: ['None', 'Mild', 'Moderate', 'Severe'] },
    { id: 'om_discharge', label: 'Ear discharge (otorrhea)', type: 'select', options: ['None', 'Serous', 'Mucoid', 'Purulent', 'Bloody'] },
    { id: 'om_hearing', label: 'Hearing loss', type: 'select', options: ['None', 'Mild', 'Moderate', 'Severe'] }, { id: 'om_fever', label: 'Fever', type: 'select', options: ['Yes', 'No'] },
    { id: 'om_duration', label: 'Duration of symptoms', type: 'text' }, { id: 'om_recurrent', label: 'Recurrent episodes', type: 'select', options: ['First episode', 'Recurrent (>3 in 6 months)'] },
    { id: 'om_complications', label: 'Complications', type: 'checkbox', options: ['Mastoiditis', 'Facial nerve palsy', 'Meningitis', 'Brain abscess', 'Labyrinthitis'] }] }],
  sinusitis: [{ id: 'sinus-history', title: 'Sinusitis History', fields: [
    { id: 'sinus_type', label: 'Type', type: 'select', options: ['Acute (< 4 weeks)', 'Subacute (4-12 weeks)', 'Chronic (> 12 weeks)', 'Recurrent acute'] },
    { id: 'sinus_facial', label: 'Facial pain / pressure', type: 'select', options: ['None', 'Frontal', 'Maxillary', 'Ethmoidal', 'Sphenoid', 'Diffuse'] },
    { id: 'sinus_nasal', label: 'Nasal congestion / obstruction', type: 'select', options: ['None', 'Mild', 'Moderate', 'Severe'] },
    { id: 'sinus_discharge', label: 'Nasal discharge color', type: 'select', options: ['Clear', 'Yellow', 'Green', 'Blood-tinged'] },
    { id: 'sinus_hyposmia', label: 'Reduced sense of smell', type: 'select', options: ['Yes', 'No'] }, { id: 'sinus_fever', label: 'Fever', type: 'select', options: ['Yes', 'No'] },
    { id: 'sinus_dental', label: 'Dental pain', type: 'select', options: ['Yes', 'No'] }, { id: 'sinus_allergy', label: 'Allergic rhinitis association', type: 'select', options: ['Yes', 'No'] },
    { id: 'sinus_endoscopy', label: 'Nasal endoscopy findings', type: 'textarea' }] }],
  tonsillitis: [{ id: 'tonsil-history', title: 'Tonsillitis / Pharyngitis History', fields: [
    { id: 'tonsil_sore', label: 'Sore throat severity', type: 'select', options: ['Mild', 'Moderate', 'Severe', 'Unable to swallow'] },
    { id: 'tonsil_fever', label: 'Fever', type: 'select', options: ['Yes', 'No'] }, { id: 'tonsil_appearance', label: 'Tonsillar appearance', type: 'select', options: ['Erythematous', 'Enlarged', 'Exudates (white patches)', 'Peritonsillar swelling'] },
    { id: 'tonsil_cervical', label: 'Cervical lymphadenopathy', type: 'select', options: ['None', 'Unilateral', 'Bilateral', 'Tender'] },
    { id: 'tonsil_centor', label: 'Centor criteria met', type: 'checkbox', options: ['Fever > 38°C', 'Tonsillar exudates', 'Tender cervical nodes', 'Absence of cough'] },
    { id: 'tonsil_recurrent', label: 'Recurrent episodes / year', type: 'select', options: ['First episode', '1-2 / year', '3-5 / year', '> 5 / year (consider tonsillectomy)'] },
    { id: 'tonsil_complications', label: 'Complications', type: 'checkbox', options: ['Peritonsillar abscess (quinsy)', 'Parapharyngeal abscess', 'Rheumatic fever', 'Post-streptococcal GN'] }] }],
  pharyngitis: [{ id: 'phar-history', title: 'Pharyngitis History', fields: [
    { id: 'phar_duration', label: 'Duration', type: 'text' }, { id: 'phar_cough', label: 'Cough', type: 'select', options: ['Yes', 'No'] },
    { id: 'phar_rhinitis', label: 'Rhinorrhea / nasal congestion', type: 'select', options: ['Yes', 'No'] }, { id: 'phar_hoarseness', label: 'Hoarseness', type: 'select', options: ['Yes', 'No'] },
    { id: 'phar_dysphagia', label: 'Dysphagia / odynophagia', type: 'select', options: ['None', 'Mild', 'Moderate', 'Severe'] },
    { id: 'phar_viral', label: 'Viral prodrome symptoms', type: 'checkbox', options: ['Myalgia', 'Malaise', 'Headache', 'Conjunctivitis', 'Diarrhea'] }] }],
  hearing_loss: [{ id: 'hl-history', title: 'Hearing Loss History', fields: [
    { id: 'hl_onset', label: 'Onset', type: 'select', options: ['Sudden (< 72 hours)', 'Rapid (days)', 'Gradual (months)', 'Congenital'] },
    { id: 'hl_type', label: 'Type (by tuning fork)', type: 'select', options: ['Not tested', 'Conductive', 'Sensorineural', 'Mixed'] },
    { id: 'hl_side', label: 'Side', type: 'select', options: ['Right', 'Left', 'Bilateral symmetrical', 'Bilateral asymmetrical'] },
    { id: 'hl_tinnitus', label: 'Tinnitus', type: 'select', options: ['Yes', 'No'] }, { id: 'hl_vertigo', label: 'Vertigo / dizziness', type: 'select', options: ['Yes', 'No'] },
    { id: 'hl_noise', label: 'Noise exposure history', type: 'select', options: ['None', 'Occupational', 'Recreational (gunfire, music)', 'Acoustic trauma'] },
    { id: 'hl_ototoxic', label: 'Ototoxic drug exposure', type: 'textarea' }, { id: 'hl_audiometry', label: 'Audiometry findings', type: 'textarea' }] }],
  vertigo: [{ id: 'vertigo-history', title: 'Vertigo / Dizziness History', fields: [
    { id: 'vertigo_type', label: 'Type', type: 'select', options: ['True vertigo (spinning)', 'Lightheadedness', 'Presyncope', 'Disequilibrium'] },
    { id: 'vertigo_onset', label: 'Onset of episode', type: 'select', options: ['Sudden (seconds)', 'Minutes to hours', 'Days'] },
    { id: 'vertigo_duration', label: 'Episode duration', type: 'select', options: ['Seconds (BPPV)', 'Minutes (TIA)', 'Hours (Meniere)', 'Days (vestibular neuritis)', 'Continuous'] },
    { id: 'vertigo_triggers', label: 'Triggers', type: 'checkbox', options: ['Position change (rolling in bed)', 'Head movement', 'Coughing/sneezing', 'Loud sounds (Tullio)', 'None'] },
    { id: 'vertigo_nystagmus', label: 'Nystagmus on exam', type: 'select', options: ['None', 'Horizontal', 'Vertical', 'Rotatory'] },
    { id: 'vertigo_assoc', label: 'Associated symptoms', type: 'checkbox', options: ['Nausea/vomiting', 'Hearing loss', 'Tinnitus', 'Aural fullness', 'Headache', 'Ataxia', 'Oscillopsia'] },
    { id: 'vertigo_hallpike', label: 'Dix-Hallpike maneuver', type: 'select', options: ['Not done', 'Positive (BPPV)', 'Negative'] }] }]
};

// == OPHTHALMOLOGY ==
const OPHTHALMOLOGY_QUESTIONS = [{ id: 'oph-exam', title: 'Ophthalmological Examination', fields: [
  { id: 'oph_va_right', label: 'Visual acuity (R)', type: 'text', hint: 'e.g. 6/6, CF, HM, PL' },
  { id: 'oph_va_left', label: 'Visual acuity (L)', type: 'text' }, { id: 'oph_pupils', label: 'Pupillary examination', type: 'textarea' },
  { id: 'oph_eyelids', label: 'Eyelid / adnexa findings', type: 'textarea' }, { id: 'oph_conjunctiva', label: 'Conjunctiva / sclera findings', type: 'textarea' },
  { id: 'oph_cornea', label: 'Corneal examination', type: 'textarea' }, { id: 'oph_anterior', label: 'Anterior chamber findings', type: 'textarea' },
  { id: 'oph_fundoscopy', label: 'Fundoscopy findings', type: 'textarea' }, { id: 'oph_iop', label: 'Intraocular pressure (IOP)', type: 'text', hint: 'mmHg' }] }];
const OPHTHALMOLOGY_DISEASES = {
  conjunctivitis: [{ id: 'conj-history', title: 'Conjunctivitis History', fields: [
    { id: 'conj_type', label: 'Type', type: 'select', options: ['Infective - Viral', 'Infective - Bacterial', 'Allergic', 'Chemical/irritant', 'Neonatal'] },
    { id: 'conj_eye', label: 'Eye(s) affected', type: 'select', options: ['Right', 'Left', 'Bilateral (started in one)'] },
    { id: 'conj_redness', label: 'Redness', type: 'select', options: ['Mild', 'Moderate', 'Severe'] }, { id: 'conj_discharge', label: 'Discharge', type: 'select', options: ['Watery', 'Mucoid', 'Purulent', 'Blood-tinged'] },
    { id: 'conj_itching', label: 'Itching', type: 'select', options: ['None', 'Mild', 'Moderate', 'Severe'] }, { id: 'conj_photophobia', label: 'Photophobia', type: 'select', options: ['Yes', 'No'] },
    { id: 'conj_vision', label: 'Visual disturbance', type: 'select', options: ['None', 'Blurred', 'Decreased'] }, { id: 'conj_contacts', label: 'Contact lens use', type: 'select', options: ['Yes', 'No'] }] }],
  cataract: [{ id: 'cataract-history', title: 'Cataract History', fields: [
    { id: 'cat_type', label: 'Cataract type', type: 'select', options: ['Nuclear sclerotic', 'Cortical', 'Posterior subcapsular', 'Congenital', 'Traumatic', 'Mature/hypermature'] },
    { id: 'cat_eye', label: 'Eye(s) affected', type: 'select', options: ['Right', 'Left', 'Bilateral'] },
    { id: 'cat_vision_loss', label: 'Pattern of vision loss', type: 'checkbox', options: ['Gradual painless blurring', 'Glare / halos at night', 'Difficulty reading', 'Color desaturation', 'Diplopia (monocular)'] },
    { id: 'cat_va', label: 'Presenting visual acuity', type: 'text' }, { id: 'cat_risk', label: 'Risk factors', type: 'checkbox', options: ['Age > 60', 'Diabetes', 'Smoking', 'Steroid use', 'UV exposure', 'Trauma', 'Family history'] },
    { id: 'cat_functional', label: 'Functional impact (daily activities)', type: 'textarea' }] }],
  glaucoma: [{ id: 'glaucoma-history', title: 'Glaucoma History', fields: [
    { id: 'gla_type', label: 'Glaucoma type', type: 'select', options: ['Primary open-angle (POAG)', 'Angle-closure (acute)', 'Angle-closure (chronic)', 'Normal tension', 'Secondary', 'Congenital'] },
    { id: 'gla_onset', label: 'Onset', type: 'select', options: ['Acute (hours)', 'Subacute', 'Chronic (asymptomatic until late)'] },
    { id: 'gla_iop', label: 'IOP at presentation', type: 'text' }, { id: 'gla_visual_field', label: 'Visual field defects', type: 'textarea' },
    { id: 'gla_cup_disc', label: 'Cup-to-disc ratio', type: 'text' },
    { id: 'gla_symptoms', label: 'Symptoms (acute angle-closure)', type: 'checkbox', options: ['Severe eye pain', 'Headache', 'Blurred vision', 'Halos around lights', 'Nausea/vomiting', 'Red eye', 'Fixed mid-dilated pupil'] },
    { id: 'gla_risk', label: 'Risk factors', type: 'checkbox', options: ['Age > 40', 'Family history', 'African descent', 'Myopia (POAG)', 'Hyperopia (angle-closure)', 'Diabetes', 'Steroid use'] }] }],
  keratitis: [{ id: 'keratitis-history', title: 'Keratitis / Corneal Ulcer History', fields: [
    { id: 'ker_type', label: 'Type', type: 'select', options: ['Bacterial', 'Viral (herpes simplex)', 'Fungal', 'Acanthamoeba', 'Exposure', 'Interstitial'] },
    { id: 'ker_pain', label: 'Eye pain', type: 'select', options: ['Mild', 'Moderate', 'Severe'] }, { id: 'ker_photophobia', label: 'Photophobia', type: 'select', options: ['Mild', 'Moderate', 'Severe'] },
    { id: 'ker_tearing', label: 'Lacrimation / tearing', type: 'select', options: ['Mild', 'Moderate', 'Profuse'] },
    { id: 'ker_corneal', label: 'Corneal findings', type: 'checkbox', options: ['Corneal opacity', 'Corneal ulcer', 'Hypopyon', 'Fluorescein uptake', 'Dendritic ulcer (HSV)', 'Corneal edema'] },
    { id: 'ker_contacts', label: 'Contact lens use / water exposure', type: 'textarea' }, { id: 'ker_scarring', label: 'Previous corneal scarring', type: 'select', options: ['Yes', 'No'] }] }],
  retinopathy: [{ id: 'retinopathy-history', title: 'Retinopathy Assessment', fields: [
    { id: 'ret_type', label: 'Type', type: 'select', options: ['Diabetic retinopathy', 'Hypertensive retinopathy', 'Retinopathy of prematurity', 'Retinal vein occlusion', 'Retinal artery occlusion', 'Retinal detachment'] },
    { id: 'ret_vision', label: 'Vision changes', type: 'select', options: ['None', 'Blurred vision', 'Sudden vision loss', 'Floaters', 'Flashes', 'Curtain-like loss', 'Metamorphopsia'] },
    { id: 'ret_fundoscopy', label: 'Fundoscopy findings', type: 'textarea' }, { id: 'ret_macular', label: 'Macular involvement', type: 'select', options: ['Yes (center-involving)', 'No'] },
    { id: 'ret_systemic', label: 'Systemic control (for diabetic retinopathy)', type: 'textarea' }, { id: 'ret_laser', label: 'Previous laser / anti-VEGF treatment', type: 'textarea' }] }],
  uveitis: [{ id: 'uveitis-history', title: 'Uveitis History', fields: [
    { id: 'uv_type', label: 'Anatomical type', type: 'select', options: ['Anterior (iritis)', 'Intermediate (pars planitis)', 'Posterior (choroiditis)', 'Panuveitis'] },
    { id: 'uv_onset', label: 'Onset', type: 'select', options: ['Sudden', 'Insidious'] }, { id: 'uv_duration', label: 'Duration', type: 'select', options: ['Acute (< 6 weeks)', 'Chronic (> 6 weeks)'] },
    { id: 'uv_unilateral', label: 'Unilateral / bilateral', type: 'select', options: ['Unilateral', 'Bilateral symmetrical', 'Bilateral asymmetrical'] },
    { id: 'uv_symptoms', label: 'Symptoms', type: 'checkbox', options: ['Redness', 'Pain', 'Photophobia', 'Blurred vision', 'Floaters', 'Scotomas'] },
    { id: 'uv_assoc', label: 'Associated systemic conditions', type: 'checkbox', options: ['HLA-B27 spondyloarthropathy', 'Sarcoidosis', 'TB', 'Syphilis', 'Toxoplasmosis', 'VKH syndrome', 'Behcet disease', 'Multiple sclerosis'] },
    { id: 'uv_slit_lamp', label: 'Slit lamp findings', type: 'textarea' }, { id: 'uv_treatment', label: 'Current treatment (steroids / immunosuppression)', type: 'textarea' }] }]
};

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

// == DERMATOLOGY ==
const DERM_QUESTIONS = [{ id: 'derm-exam', title: 'Dermatological Examination', fields: [
  { id: 'derm_lesion_type', label: 'Primary lesion type', type: 'select', options: ['Macule', 'Papule', 'Plaque', 'Nodule', 'Vesicle', 'Bulla', 'Pustule', 'Wheal', 'Scale', 'Ulcer', 'Fissure', 'Erosion'] },
  { id: 'derm_distribution', label: 'Distribution', type: 'select', options: ['Localized', 'Generalized', 'Symmetrical', 'Asymmetrical', 'Flexural', 'Extensor', 'Seborrheic', 'Dermatomal', 'Sun-exposed', 'Intertriginous'] },
  { id: 'derm_morphology', label: 'Lesion morphology / configuration', type: 'checkbox', options: ['Discrete', 'Confluent', 'Annular', 'Target', 'Linear', 'Reticular', 'Serpiginous', 'Grouped/herpetiform'] },
  { id: 'derm_borders', label: 'Border characteristics', type: 'textarea' }, { id: 'derm_color', label: 'Color', type: 'text' },
  { id: 'derm_size', label: 'Size of largest lesion', type: 'text' },
  { id: 'derm_excoriation', label: 'Excoriation / lichenification', type: 'select', options: ['None', 'Mild', 'Moderate', 'Severe'] }] }];
const DERM_DISEASES = {
  eczema: [{ id: 'eczema-history', title: 'Eczema / Dermatitis History', fields: [
    { id: 'ecz_type', label: 'Type', type: 'select', options: ['Atopic dermatitis', 'Contact dermatitis (irritant)', 'Contact dermatitis (allergic)', 'Seborrheic dermatitis', 'Stasis dermatitis', 'Discoid (nummular) eczema', 'Pompholyx (dyshidrotic)', 'Asteatotic eczema'] },
    { id: 'ecz_onset', label: 'Age of onset', type: 'select', options: ['Infancy', 'Childhood', 'Adulthood', 'Recent'] },
    { id: 'ecz_sites', label: 'Common sites affected', type: 'checkbox', options: ['Face/scalp', 'Flexural (antecubital/popliteal)', 'Hands', 'Lower legs', 'Trunk', 'Extensors', 'Perioral'] },
    { id: 'ecz_itch', label: 'Pruritus severity', type: 'select', options: ['None', 'Mild', 'Moderate', 'Severe (disturbs sleep)'] },
    { id: 'ecz_triggers', label: 'Triggers', type: 'checkbox', options: ['Irritants (soap/detergent)', 'Allergens', 'Stress', 'Weather (dry/cold)', 'Sweating', 'Food triggers', 'Wool/fabrics'] },
    { id: 'ecz_asthma', label: 'Personal/family atopy (asthma, hay fever)', type: 'text' },
    { id: 'ecz_treatment', label: 'Current treatment (emollients, steroids, etc.)', type: 'textarea' }, { id: 'ecz_infection', label: 'Secondary infection (impetiginized)', type: 'select', options: ['Yes', 'No'] }] }],
  psoriasis: [{ id: 'psor-history', title: 'Psoriasis History', fields: [
    { id: 'psor_type', label: 'Psoriasis type', type: 'select', options: ['Plaque (psoriasis vulgaris)', 'Guttate', 'Pustular (generalized)', 'Pustular (palmar/plantar)', 'Erythrodermic', 'Inverse/flexural', 'Nail psoriasis', 'Psoriatic arthritis'] },
    { id: 'psor_onset', label: 'Age of onset', type: 'select', options: ['Type I (< 40 years)', 'Type II (> 40 years)'] },
    { id: 'psor_triggers', label: 'Triggers', type: 'checkbox', options: ['Stress', 'Infection (strep throat)', 'Trauma (Koebner)', 'Medications (beta-blockers, lithium)', 'Alcohol', 'Smoking', 'Sunlight (may improve)'] },
    { id: 'psor_plaque', label: 'Plaque characteristics', type: 'checkbox', options: ['Well-defined', 'Erythematous', 'Silvery scale', 'Thick plaques', 'Auspitz sign'] },
    { id: 'psor_nail', label: 'Nail changes', type: 'checkbox', options: ['Pitting', 'Onycholysis', 'Subungual hyperkeratosis', 'Oil-drop discoloration', 'None'] },
    { id: 'psor_arthritis', label: 'Psoriatic arthritis features', type: 'checkbox', options: ['Dactylitis (sausage digit)', 'Enthesitis', 'Sacroiliitis', 'Asymmetrical oligoarthritis', 'DIP joint involvement'] },
    { id: 'psor_bsa', label: 'Body surface area involved', type: 'select', options: ['< 5% (mild)', '5-10% (moderate)', '> 10% (severe)'] },
    { id: 'psor_treatment', label: 'Current/systemic treatment', type: 'textarea' }] }],
  cellulitis: [{ id: 'cellulitis-history', title: 'Cellulitis History', fields: [
    { id: 'cell_site', label: 'Site of infection', type: 'select', options: ['Lower leg', 'Upper limb', 'Face', 'Periorbital', 'Trunk', 'Buttock/perineum'] },
    { id: 'cell_onset', label: 'Onset', type: 'select', options: ['Sudden (< 24 hours)', 'Gradual (1-3 days)'] }, { id: 'cell_spread', label: 'Rate of spread', type: 'text' },
    { id: 'cell_local', label: 'Local signs', type: 'checkbox', options: ['Erythema', 'Swelling/edema', 'Warmth', 'Tenderness', 'Bulla/hemorrhagic bulla', 'Lymphangitis streak', 'Regional lymphadenopathy'] },
    { id: 'cell_systemic', label: 'Systemic signs', type: 'checkbox', options: ['Fever', 'Chills', 'Malaise', 'Tachycardia', 'Hypotension', 'Confusion (sepsis)'] },
    { id: 'cell_risk', label: 'Risk factors', type: 'checkbox', options: ['Diabetes', 'Peripheral vascular disease', 'Lymphedema', 'Venous insufficiency', 'Obesity', 'Recent surgery/trauma', 'Tinea pedis (portal of entry)', 'Immunosuppression'] },
    { id: 'cell_severity', label: 'Severity assessment', type: 'select', options: ['Mild (no systemic signs)', 'Moderate', 'Severe (systemic involvement)', 'Necrotizing fasciitis suspected'] },
    { id: 'cell_imaging', label: 'Imaging (ultrasound/MRI) findings', type: 'textarea' }] }],
  acne: [{ id: 'acne-history', title: 'Acne Vulgaris History', fields: [
    { id: 'acne_onset', label: 'Age of onset', type: 'select', options: ['Pre-adolescent', 'Adolescent', 'Adult-onset', 'Post-adolescent (> 25)'] },
    { id: 'acne_severity', label: 'Severity', type: 'select', options: ['Mild', 'Moderate', 'Severe', 'Very severe (nodulocystic)'] },
    { id: 'acne_lesions', label: 'Lesion types present', type: 'checkbox', options: ['Open comedones (blackheads)', 'Closed comedones (whiteheads)', 'Papules', 'Pustules', 'Nodules', 'Cysts', 'Scarring'] },
    { id: 'acne_sites', label: 'Sites affected', type: 'checkbox', options: ['Face', 'Chest', 'Back', 'Shoulders', 'Neck'] },
    { id: 'acne_hormonal', label: 'Hormonal factors', type: 'checkbox', options: ['Pre-menstrual flare', 'PCOS', 'Pregnancy', 'Hormonal contraception', 'Androgen excess signs (hirsutism)'] },
    { id: 'acne_triggers', label: 'Triggers', type: 'checkbox', options: ['Cosmetics', 'Oily skin products', 'Sweating', 'Stress', 'Diet (high GI)', 'Medications (steroids, lithium)'] },
    { id: 'acne_treatment', label: 'Current/past treatments', type: 'textarea' }] }],
  urticaria: [{ id: 'urticaria-history', title: 'Urticaria / Angioedema History', fields: [
    { id: 'urt_type', label: 'Type', type: 'select', options: ['Acute (< 6 weeks)', 'Chronic (> 6 weeks)', 'Physical (dermatographism)', 'Cholinergic', 'Cold', 'Solar', 'Delayed pressure', 'Aquagenic'] },
    { id: 'urt_wheal', label: 'Wheal characteristics', type: 'textarea' }, { id: 'urt_angioedema', label: 'Angioedema (lips, eyes, tongue, airway)', type: 'select', options: ['Yes', 'No'] },
    { id: 'urt_duration_wheal', label: 'Duration of individual wheals', type: 'select', options: ['< 24 hours', '> 24 hours (urticarial vasculitis)'] },
    { id: 'urt_duration_ep', label: 'Total duration of current episode', type: 'text' },
    { id: 'urt_triggers', label: 'Triggers', type: 'checkbox', options: ['Food (nuts, shellfish, eggs, milk)', 'Drugs (NSAIDs, antibiotics)', 'Insect stings', 'Physical stimuli', 'Infection', 'Stress', 'Heat/cold', 'Exercise', 'Pressure'] },
    { id: 'urt_anaphylaxis', label: 'History of anaphylaxis', type: 'select', options: ['Yes', 'No'] },
    { id: 'urt_treatment', label: 'Current treatment (antihistamines, steroids)', type: 'textarea' }] }],
  fungal_infection: [{ id: 'fungal-history', title: 'Fungal Skin Infection History', fields: [
    { id: 'fung_type', label: 'Type of fungal infection', type: 'select', options: ['Tinea corporis (ringworm)', 'Tinea cruris (jock itch)', 'Tinea pedis (athletes foot)', 'Tinea capitis (scalp)', 'Tinea unguium (onychomycosis)', 'Tinea manuum', 'Tinea faciei', 'Pityriasis versicolor'] },
    { id: 'fung_site', label: 'Site(s) affected', type: 'text' },
    { id: 'fung_appearance', label: 'Lesion appearance', type: 'checkbox', options: ['Annular/ring-shaped', 'Raised border', 'Central clearing', 'Scaling', 'Erythematous', 'Hypopigmented', 'Maceration', 'Blisters'] },
    { id: 'fung_itch', label: 'Pruritus', type: 'select', options: ['None', 'Mild', 'Moderate', 'Severe'] }, { id: 'fung_spread', label: 'Spread to others / pets', type: 'textarea' },
    { id: 'fung_risk', label: 'Risk factors', type: 'checkbox', options: ['Diabetes', 'Immunosuppression', 'Excessive sweating', 'Tight footwear', 'Shared towels/floors', 'Contact with pets', 'Obesity', 'Warm/humid climate'] },
    { id: 'fung_microscopy', label: 'KOH microscopy / culture results', type: 'textarea' }, { id: 'fung_treatment', label: 'Current/past antifungal treatment', type: 'textarea' }] }]
};

// == APP ==
let currentSpecialty = null;
let steps = [];
let formData = {};
const conditionStepId = 'select-condition';
const LS_CURRENT = 'medHistory_current';
const LS_HISTORY = 'medHistory_history';

function isTeaching() { return localStorage.getItem('medHistory_teaching') === '1'; }
function toggleTeaching() {
  var on = !isTeaching();
  localStorage.setItem('medHistory_teaching', on ? '1' : '');
  var btn = document.getElementById('teach-toggle');
  if (btn) { btn.style.background = on ? '#dd6b20' : 'transparent'; btn.style.color = on ? '#fff' : ''; }
  renderForm();
}

function saveCurrentToLS() {
  if (!currentSpecialty) { console.log('saveCurrentToLS: no currentSpecialty, skipping'); return; }
  try {
    var data = { specialty: currentSpecialty, formData: formData, timestamp: new Date().toISOString() };
    localStorage.setItem(LS_CURRENT, JSON.stringify(data));
    console.log('saveCurrentToLS: saved', data.specialty, data.timestamp);
  } catch (e) { console.log('saveCurrentToLS error:', e); }
}
function loadCurrentFromLS() {
  try { var r = localStorage.getItem(LS_CURRENT); console.log('loadCurrentFromLS: raw=', r); return r ? JSON.parse(r) : null; } catch (e) { console.log('loadCurrentFromLS error:', e); return null; }
}
function clearCurrentFromLS() { console.log('clearCurrentFromLS'); localStorage.removeItem(LS_CURRENT); }
function saveToHistory() {
  try {
    var raw = localStorage.getItem(LS_HISTORY);
    var h = raw ? JSON.parse(raw) : [];
    h.push({ id: Date.now(), specialty: currentSpecialty, formData: JSON.parse(JSON.stringify(formData)), date: new Date().toISOString() });
    if (h.length > 30) h = h.slice(h.length - 30);
    localStorage.setItem(LS_HISTORY, JSON.stringify(h));
    console.log('saveToHistory: saved, total entries:', h.length);
  } catch (e) { console.log('saveToHistory error:', e); }
}
function getHistory() {
  try { var r = localStorage.getItem(LS_HISTORY); return r ? JSON.parse(r) : []; } catch (e) { return []; }
}
function renderHistoryList() {
  var c = document.getElementById('history-list');
  if (!c) return;
  var h = getHistory();
  if (!h.length) { c.innerHTML = ''; return; }
  var html = '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px">';
  html += '<h2 style="font-size:1rem;margin:0">Past Assessments</h2>';
  html += '<button onclick="clearAllHistory();return false" style="background:none;border:1px solid #e53e3e;color:#e53e3e;border-radius:4px;padding:2px 8px;font-size:0.8rem;cursor:pointer">Clear All</button></div>';
  h.slice().reverse().forEach(function (item) {
    var t = new Date(item.date);
    var ds = t.getFullYear()+'-'+String(t.getMonth()+1).padStart(2,'0')+'-'+String(t.getDate()).padStart(2,'0')+' '+String(t.getHours()).padStart(2,'0')+':'+String(t.getMinutes()).padStart(2,'0');
    html += '<div class="history-item">';
    html += '<span style="flex:1;cursor:pointer" onclick="loadHistoryItem('+item.id+')">';
    html += '<span style="font-weight:600;text-transform:capitalize">'+esc(item.specialty)+'</span>';
    html += ' <span style="color:#718096;font-size:0.85rem">'+ds+'</span></span>';
    html += '<button onclick="deleteHistoryItem('+item.id+');return false" style="background:none;border:none;color:#e53e3e;cursor:pointer;font-size:0.85rem;padding:0 4px" title="Delete">&times;</button></div>';
  });
  c.innerHTML = html;
}
function loadHistoryItem(id) {
  var h = getHistory();
  var item = null;
  for (var i=0;i<h.length;i++){if(h[i].id===id){item=h[i];break;}}
  if (!item) return;
  currentSpecialty = item.specialty;
  formData = item.formData || {};
  steps = getSteps(currentSpecialty);
  document.getElementById('specialty-selector').classList.add('hidden');
  var rb=document.getElementById('restore-banner');if(rb)rb.classList.add('hidden');
  document.getElementById('form-view').classList.remove('hidden');
  var name = item.specialty.charAt(0).toUpperCase()+item.specialty.slice(1);
  document.getElementById('toolbar-specialty').textContent = 'Specialty: '+name;
  document.getElementById('toolbar-condition').textContent='';
  startClock();renderForm();
}
function deleteHistoryItem(id) {
  var h=getHistory();h=h.filter(function(item){return item.id!==id});
  localStorage.setItem(LS_HISTORY,JSON.stringify(h));renderHistoryList();
}
function clearAllHistory() {
  if(!confirm('Delete all saved assessments?'))return;
  localStorage.removeItem(LS_HISTORY);renderHistoryList();
}
function checkSavedData() {
  var s = loadCurrentFromLS();
  console.log('checkSavedData: saved=', s);
  var rb = document.getElementById('restore-banner');
  console.log('checkSavedData: restore-banner element=', rb);
  if (s && rb) {
    var t=new Date(s.timestamp), ds=t.toLocaleString();
    rb.innerHTML = 'Unsaved assessment ('+s.specialty+') from '+ds+' &mdash; <a href="#" onclick="restoreAssessment();return false">Continue</a> | <a href="#" onclick="deleteSavedAssessment();return false" style="color:#e53e3e">Discard</a>';
    rb.classList.remove('hidden');
    console.log('checkSavedData: banner shown');
  } else {
    console.log('checkSavedData: banner NOT shown — saved=', !!s, 'rb=', !!rb);
  }
  renderHistoryList();
}
function restoreAssessment() {
  var s=loadCurrentFromLS();if(!s)return;
  currentSpecialty=s.specialty;formData=s.formData||{};steps=getSteps(currentSpecialty);
  document.getElementById('specialty-selector').classList.add('hidden');
  var rb=document.getElementById('restore-banner');if(rb)rb.classList.add('hidden');
  document.getElementById('form-view').classList.remove('hidden');
  var name=s.specialty.charAt(0).toUpperCase()+s.specialty.slice(1);
  document.getElementById('toolbar-specialty').textContent='Specialty: '+name;
  document.getElementById('toolbar-condition').textContent='';
  startClock();renderForm();
}
function deleteSavedAssessment() {clearCurrentFromLS();var rb=document.getElementById('restore-banner');if(rb)rb.classList.add('hidden');}

function getSpecialtyQuestions(specialty) {
  switch (specialty) {
    case 'surgery': return SURGERY_QUESTIONS || [];
    case 'medicine': return MEDICINE_QUESTIONS || [];
    case 'paediatric': return PAEDIATRIC_QUESTIONS || [];
    case 'gynaeobs': return GYNAEOBS_QUESTIONS || [];
    case 'ortho': return ORTHO_QUESTIONS || [];
    case 'ent': return ENT_QUESTIONS || [];
    case 'ophthalmology': return OPHTHALMOLOGY_QUESTIONS || [];
    case 'psych': return PSYCH_QUESTIONS || [];
    case 'derm': return DERM_QUESTIONS || [];
    default: return [];
  }
}

function getDiseaseMap(specialty) {
  switch (specialty) {
    case 'surgery': return SURGERY_DISEASES || {};
    case 'medicine': return MEDICINE_DISEASES || {};
    case 'paediatric': return PAEDIATRIC_DISEASES || {};
    case 'gynaeobs': return GYNAEOBS_DISEASES || {};
    case 'ortho': return ORTHO_DISEASES || {};
    case 'ent': return ENT_DISEASES || {};
    case 'ophthalmology': return OPHTHALMOLOGY_DISEASES || {};
    case 'psych': return PSYCH_DISEASES || {};
    case 'derm': return DERM_DISEASES || {};
    default: return {};
  }
}

function getDiseaseSteps(specialty, diseaseId) {
  const map = getDiseaseMap(specialty);
  if (!map || !map[diseaseId]) return [];
  return map[diseaseId].map(step => JSON.parse(JSON.stringify(step)));
}

function getDiseaseList(specialty) {
  return Object.keys(getDiseaseMap(specialty));
}

function getConditionStep(specialty) {
  const diseases = getDiseaseList(specialty);
  if (!diseases.length) return null;
  return {
    id: conditionStepId,
    title: 'Select Condition / Disease',
    description: 'Choose the specific condition to get disease-focused history questions',
    fields: [
      { id: 'selected_condition', label: 'Condition', type: 'select', required: true,
        options: ['None / General', ...diseases] }
    ]
  };
}

function getSteps(specialty) {
  const base = JSON.parse(JSON.stringify(BASE_STEPS));
  const extra = getSpecialtyQuestions(specialty);
  const condStep = getConditionStep(specialty);
  const steps = condStep ? [...base, ...extra, condStep] : [...base, ...extra];
  steps.push({ id: 'clinical-scores', title: 'Clinical Scoring Calculators', scoringWidgets: true });
  return steps;
}

function startAssessment(specialty) {
  clearCurrentFromLS();
  currentSpecialty = specialty;
  formData = {};
  steps = getSteps(specialty);

  document.getElementById('specialty-selector').classList.add('hidden');
  var rb = document.getElementById('restore-banner');
  if (rb) rb.classList.add('hidden');
  document.getElementById('form-view').classList.remove('hidden');

  const name = specialty.charAt(0).toUpperCase() + specialty.slice(1);
  document.getElementById('toolbar-specialty').textContent = 'Specialty: ' + name;
  document.getElementById('toolbar-condition').textContent = '';

  startClock();
  renderForm();
}

function startClock() {
  var el = document.getElementById('realtime-clock');
  if (!el) return;
  function tick() {
    var now = new Date();
    var pad = function (n) { return String(n).padStart(2, '0'); };
    var dateStr = now.getFullYear() + '-' + pad(now.getMonth() + 1) + '-' + pad(now.getDate());
    var timeStr = pad(now.getHours()) + ':' + pad(now.getMinutes()) + ':' + pad(now.getSeconds());
    el.textContent = dateStr + '  ' + timeStr;
  }
  tick();
  if (window._clockInterval) clearInterval(window._clockInterval);
  window._clockInterval = setInterval(tick, 1000);
}

function renderForm() {
  const container = document.getElementById('form-content');
  let html = '';

  steps.forEach((step, i) => {
    html += renderSection(step, i + 1);
  });

  html += '<div id="disease-steps-container"></div>';
  html += '<div style="text-align:center;padding:20px 0 40px;display:flex;gap:12px;justify-content:center;flex-wrap:wrap">';
  html += '<button class="btn btn-primary" onclick="printForm()" style="padding:14px 40px;font-size:1rem">Print / Save PDF</button>';
  html += '<button class="btn btn-secondary" onclick="copyJSON()" style="padding:14px 24px;font-size:1rem">Copy as JSON</button>';
  html += '</div>';

  container.innerHTML = html;
  restoreValues();
  attachHandlers();

  if (formData.selected_condition && formData.selected_condition !== 'None / General') {
    renderDiseaseSections();
  }
}

function renderSection(step, number) {
  let html = '<div class="section-card">';
  html += '<div class="section-title">';
  if (number) {
    html += '<span class="section-number">' + number + '</span>';
  }
  html += step.title + '</div>';
  if (step.description) {
    html += '<p style="color:#718096;font-size:0.85rem;margin-bottom:10px;">' + esc(step.description) + '</p>';
  }
  if (isTeaching() && TEACHING.sections[step.id]) {
    html += '<div class="teach-tip">' + esc(TEACHING.sections[step.id]) + '</div>';
  }

  if (step.scoringWidgets) {
    html += renderScoringCalculators();
    html += '</div>';
    return html;
  }

  if (step.complaintBuilder) {
    html += '<div id="complaint-items-container">' + renderComplaintItems() + '</div>';
    html += '<div class="complaint-add-form" style="margin-top:16px;padding:12px;background:#f7fafc;border-radius:6px;border:1px dashed #cbd5e0">';
    html += '<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:end">';
    html += '<div class="form-group" style="flex:2;min-width:180px;margin-bottom:0">';
    html += '<label for="new_complaint_name">Add Complaint</label>';
    html += '<select id="new_complaint_name" onchange="toggleCustomComplaint()">';
    html += '<option value="">-- Select --</option>';
    Object.keys(COMPLAINTS).forEach(function (name) {
      html += '<option value="' + esc(name) + '">' + esc(name) + '</option>';
    });
    html += '<option value="__other__">Other (type your own)</option>';
    html += '</select>';
    html += '<input type="text" id="new_complaint_custom" style="display:none;margin-top:6px" placeholder="Enter your complaint">';
    html += '</div>';
    html += '<div class="form-group" style="flex:1;min-width:120px;margin-bottom:0">';
    html += '<label for="new_complaint_duration">Since / For</label>';
    html += '<input type="text" id="new_complaint_duration" placeholder="e.g. 3 days">';
    html += '</div>';
    html += '<button class="btn btn-primary" onclick="addComplaint()" style="padding:8px 16px;margin-bottom:2px">Add</button>';
    html += '</div></div>';
    html += '<div class="form-group" style="margin-top:12px">';
    html += '<label for="detail_chief-complaint">Further Details</label>';
    html += '<textarea id="detail_chief-complaint" name="detail_chief-complaint" style="min-height:50px" placeholder="Additional notes for this section...">' + esc(formData['detail_chief-complaint'] || '') + '</textarea>';
    html += '</div>';
    html += '</div>';
    return html;
  }

  step.fields.forEach(function (field) {
    const value = formData[field.id] !== undefined ? formData[field.id] : (field.type === 'checkbox' ? [] : '');
    const required = field.required ? 'required' : '';
    const hint = field.hint ? '<div class="hint">' + esc(field.hint) + '</div>' : '';
    var teachHint = '';
    if (isTeaching() && TEACHING.fields[field.id]) {
      teachHint = '<div class="teach-hint">' + esc(TEACHING.fields[field.id]) + '</div>';
    }

    html += '<div class="form-group">';
    html += '<label for="' + field.id + '">' + esc(field.label) + (field.required ? ' <span style="color:#e53e3e">*</span>' : '') + '</label>';
    html += hint;
    html += teachHint;

    switch (field.type) {
      case 'textarea':
        html += '<textarea id="' + field.id + '" name="' + field.id + '" ' + required + '>' + esc(value) + '</textarea>';
        break;
      case 'select':
        html += '<select id="' + field.id + '" name="' + field.id + '" ' + required + '>';
        html += '<option value="">-- Select --</option>';
        (field.options || []).forEach(function (opt) {
          html += '<option value="' + esc(opt) + '"' + (value === opt ? ' selected' : '') + '>' + esc(opt) + '</option>';
        });
        html += '</select>';
        break;
      case 'checkbox':
        const vals = Array.isArray(value) ? value : [];
        html += '<div class="checkbox-group">';
        (field.options || []).forEach(function (opt) {
          html += '<label><input type="checkbox" name="' + field.id + '" value="' + esc(opt) + '"' + (vals.includes(opt) ? ' checked' : '') + '> ' + esc(opt) + '</label>';
        });
        html += '</div>';
        break;
      case 'radio':
        html += '<div class="radio-group">';
        (field.options || []).forEach(function (opt) {
          html += '<label><input type="radio" name="' + field.id + '" value="' + esc(opt) + '"' + (value === opt ? ' checked' : '') + ' ' + required + '> ' + esc(opt) + '</label>';
        });
        html += '</div>';
        break;
      default:
        html += '<input type="' + (field.type || 'text') + '" id="' + field.id + '" name="' + field.id + '" value="' + esc(value) + '" ' + required + '>';
    }

    html += '</div>';
  });

  html += '<div class="form-group" style="margin-top:12px">';
  html += '<label for="detail_' + step.id + '">Further Details</label>';
  html += '<textarea id="detail_' + step.id + '" name="detail_' + step.id + '" style="min-height:50px" placeholder="Additional notes for this section...">' + esc(formData['detail_' + step.id] || '') + '</textarea>';
  html += '</div>';

  html += '</div>';
  return html;
}

var HOPI_FIELDS = [
  { id: 'site', label: 'Site / Location', type: 'text' },
  { id: 'character', label: 'Character (quality)', type: 'textarea' },
  { id: 'radiation', label: 'Radiation', type: 'text', hint: 'Does it spread anywhere?' },
  { id: 'assoc_symptoms', label: 'Associated symptoms', type: 'textarea' },
  { id: 'timing', label: 'Timing / frequency', type: 'textarea' },
  { id: 'exacerbating', label: 'What makes it worse?', type: 'textarea' },
  { id: 'relieving', label: 'What makes it better?', type: 'textarea' },
  { id: 'previous_episodes', label: 'Previous similar episodes?', type: 'text' },
  { id: 'treatment_tried', label: 'Any treatment tried?', type: 'textarea' }
];

function renderComplaintItems() {
  const complaints = formData.complaints || [];
  if (!complaints.length) return '<p style="color:#a0aec0;font-size:0.85rem">No complaints added yet.</p>';
  let html = '';
  complaints.forEach(function (c, i) {
    var cid = c._id;
    html += '<div class="complaint-item" style="margin-bottom:16px;padding:12px;background:#f7fafc;border-radius:6px;border:1px solid #e2e8f0">';
    html += '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">';
    html += '<div><strong>' + esc(c.name) + '</strong> <span style="color:#718096;font-size:0.85rem">(Since: ' + esc(c.duration) + ')</span></div>';
    html += '<button onclick="removeComplaint(' + i + ')" style="background:none;border:1px solid #e53e3e;color:#e53e3e;border-radius:4px;padding:2px 10px;cursor:pointer;font-size:0.8rem">Remove</button>';
    html += '</div>';

    var complaintFields = COMPLAINTS[c.name] || [];
    if (isTeaching() && TEACHING.differentials[c.name]) {
      html += '<div class="teach-tip" style="margin-bottom:10px">Differentials: ' + esc(TEACHING.differentials[c.name].join('; ')) + '</div>';
    }
    complaintFields.forEach(function (field) {
      const value = formData[field.id] !== undefined ? formData[field.id] : (field.type === 'checkbox' ? [] : '');
      const required = field.required ? 'required' : '';
      const hint = field.hint ? '<div class="hint">' + esc(field.hint) + '</div>' : '';
      var teachHint = '';
      if (isTeaching() && TEACHING.fields[field.id]) {
        teachHint = '<div class="teach-hint">' + esc(TEACHING.fields[field.id]) + '</div>';
      }
      html += '<div class="form-group">';
      html += '<label for="' + field.id + '">' + esc(field.label) + '</label>';
      html += hint;
      html += teachHint;
      switch (field.type) {
        case 'textarea':
          html += '<textarea id="' + field.id + '" name="' + field.id + '" ' + required + '>' + esc(value) + '</textarea>';
          break;
        case 'select':
          html += '<select id="' + field.id + '" name="' + field.id + '" ' + required + '>';
          html += '<option value="">-- Select --</option>';
          (field.options || []).forEach(function (opt) {
            html += '<option value="' + esc(opt) + '"' + (value === opt ? ' selected' : '') + '>' + esc(opt) + '</option>';
          });
          html += '</select>';
          break;
        case 'checkbox':
          const vals = Array.isArray(value) ? value : [];
          html += '<div class="checkbox-group">';
          (field.options || []).forEach(function (opt) {
            html += '<label><input type="checkbox" name="' + field.id + '" value="' + esc(opt) + '"' + (vals.includes(opt) ? ' checked' : '') + '> ' + esc(opt) + '</label>';
          });
          html += '</div>';
          break;
        default:
          html += '<input type="' + (field.type || 'text') + '" id="' + field.id + '" name="' + field.id + '" value="' + esc(value) + '" ' + required + '>';
      }
      html += '</div>';
    });

    html += '<div style="margin-top:12px;padding-top:10px;border-top:1px solid #e2e8f0">';
    html += '<div style="font-size:0.85rem;font-weight:600;color:#2b6cb0;margin-bottom:8px">History of Presenting Illness - ' + esc(c.name) + '</div>';
    HOPI_FIELDS.forEach(function (field) {
      var fid = 'hopi_' + cid + '_' + field.id;
      const value = formData[fid] !== undefined ? formData[fid] : (field.type === 'checkbox' ? [] : '');
      const required = field.required ? 'required' : '';
      const hint = field.hint ? '<div class="hint">' + esc(field.hint) + '</div>' : '';
      var teachHint = '';
      if (isTeaching() && TEACHING.fields[field.id]) {
        teachHint = '<div class="teach-hint">' + esc(TEACHING.fields[field.id]) + '</div>';
      }
      html += '<div class="form-group">';
      html += '<label for="' + fid + '">' + esc(field.label) + '</label>';
      html += hint;
      html += teachHint;
      switch (field.type) {
        case 'textarea':
          html += '<textarea id="' + fid + '" name="' + fid + '" ' + required + '>' + esc(value) + '</textarea>';
          break;
        case 'select':
          html += '<select id="' + fid + '" name="' + fid + '" ' + required + '>';
          html += '<option value="">-- Select --</option>';
          (field.options || []).forEach(function (opt) {
            html += '<option value="' + esc(opt) + '"' + (value === opt ? ' selected' : '') + '>' + esc(opt) + '</option>';
          });
          html += '</select>';
          break;
        case 'checkbox':
          const vals = Array.isArray(value) ? value : [];
          html += '<div class="checkbox-group">';
          (field.options || []).forEach(function (opt) {
            html += '<label><input type="checkbox" name="' + fid + '" value="' + esc(opt) + '"' + (vals.includes(opt) ? ' checked' : '') + '> ' + esc(opt) + '</label>';
          });
          html += '</div>';
          break;
        default:
          html += '<input type="' + (field.type || 'text') + '" id="' + fid + '" name="' + fid + '" value="' + esc(value) + '" ' + required + '>';
      }
      html += '</div>';
    });
    html += '</div>';

    html += '</div>';
  });
  return html;
}

function toggleCustomComplaint() {
  const sel = document.getElementById('new_complaint_name');
  const custom = document.getElementById('new_complaint_custom');
  custom.style.display = sel.value === '__other__' ? 'block' : 'none';
}

function addComplaint() {
  const sel = document.getElementById('new_complaint_name');
  const custom = document.getElementById('new_complaint_custom');
  const duration = document.getElementById('new_complaint_duration').value;
  var name = sel.value === '__other__' ? custom.value.trim() : sel.value;
  if (!name || !duration.trim()) return;
  if (!formData.complaints) formData.complaints = [];
  formData.complaints.push({ _id: nextId(), name: name, duration: duration });
  sel.value = '';
  custom.value = '';
  custom.style.display = 'none';
  document.getElementById('new_complaint_duration').value = '';
  refreshComplaints();
}

var _nextId = 0;
function nextId() { return 'c' + (++_nextId); }

function removeComplaint(index) {
  if (!formData.complaints) return;
  formData.complaints.splice(index, 1);
  refreshComplaints();
}

function refreshComplaints() {
  const container = document.getElementById('complaint-items-container');
  if (!container) return;
  container.innerHTML = renderComplaintItems();
  attachHandlers();
}

function esc(str) {
  return String(str).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function restoreValues() {
  Object.keys(formData).forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    const val = formData[id];
    if (el.type === 'checkbox' || el.type === 'radio') return;
    el.value = Array.isArray(val) ? val.join(', ') : val;
  });
}

function attachHandlers() {
  document.querySelectorAll('#form-content input:not([type="checkbox"]):not([type="radio"]), #form-content textarea').forEach(el => {
    el.addEventListener('input', function () {
      formData[this.id] = this.value;
      saveCurrentToLS();
    });
  });

  document.querySelectorAll('#form-content select').forEach(el => {
    el.addEventListener('change', function () {
      formData[this.id] = this.value;
      saveCurrentToLS();
      if (this.id === 'selected_condition') {
        updateConditionLabel();
        renderDiseaseSections();
      }
    });
  });

  document.querySelectorAll('input[type="checkbox"]').forEach(el => {
    el.addEventListener('change', function () {
      const name = this.name;
      const checked = document.querySelectorAll('input[name="' + name + '"]:checked');
      formData[name] = Array.from(checked).map(cb => cb.value);
      saveCurrentToLS();
    });
  });

  document.querySelectorAll('input[type="radio"]').forEach(el => {
    el.addEventListener('change', function () {
      formData[this.name] = this.value;
      saveCurrentToLS();
    });
  });
}

function renderDiseaseSections() {
  const container = document.getElementById('disease-steps-container');
  if (!container) return;
  container.innerHTML = '';

  const condition = formData.selected_condition;
  if (!condition || condition === 'None / General') return;

  const diseaseSteps = getDiseaseSteps(currentSpecialty, condition);
  if (!diseaseSteps.length) return;

  let html = '';
  diseaseSteps.forEach(step => {
    html += renderSection(step, null);
  });

  container.innerHTML = html;
  restoreValues();
  attachHandlers();
}

function updateConditionLabel() {
  const condition = formData.selected_condition;
  document.getElementById('toolbar-condition').textContent =
    condition && condition !== 'None / General' ? 'Condition: ' + condition : '';
}

function printForm() {
  saveToHistory();
  clearCurrentFromLS();
  document.querySelectorAll('.section-card').forEach(function (card) {
    var has = false;
    card.querySelectorAll('textarea, input[type="text"], input[type="number"], input[type="tel"], input[type="date"], input[type="datetime-local"], select').forEach(function (el) {
      if (el.value && el.value.trim()) has = true;
    });
    card.querySelectorAll('input[type="checkbox"]:checked, input[type="radio"]:checked').forEach(function () { has = true; });
    if (!has) card.setAttribute('data-print-empty', '');
  });
  window.print();
  setTimeout(function () {
    document.querySelectorAll('[data-print-empty]').forEach(function (el) { el.removeAttribute('data-print-empty'); });
  }, 100);
}

function copyJSON() {
  var now = new Date();
  var pad = function (n) { return String(n).padStart(2, '0'); };
  var dateStr = now.getFullYear() + '-' + pad(now.getMonth() + 1) + '-' + pad(now.getDate());
  var timeStr = pad(now.getHours()) + ':' + pad(now.getMinutes()) + ':' + pad(now.getSeconds());
  const output = {
    specialty: currentSpecialty,
    date: dateStr,
    time: timeStr,
    data: {}
  };
  Object.keys(formData).forEach(key => {
    const val = formData[key];
    if (val && (typeof val === 'string' ? val.trim() !== '' : val.length > 0)) {
      output.data[key] = val;
    }
  });
  const text = JSON.stringify(output, null, 2);
  copyText(text);
}

function copyText(text) {
  const done = function () {
    const btn = document.querySelector('[onclick="copyJSON()"]');
    const orig = btn.textContent;
    btn.textContent = 'Copied!';
    setTimeout(function () { btn.textContent = orig; }, 2000);
  };

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(done).catch(function () {
      fallbackCopy(text, done);
    });
  } else {
    fallbackCopy(text, done);
  }
}

function fallbackCopy(text, done) {
  var ta = document.createElement('textarea');
  ta.value = text;
  ta.style.position = 'fixed';
  ta.style.opacity = '0';
  document.body.appendChild(ta);
  ta.select();
  try {
    if (document.execCommand('copy')) {
      done();
    } else {
      alert('Copy failed. Please select the JSON manually (browser restriction). Use HTTPS or localhost.');
    }
  } catch (e) {
    alert('Copy failed: ' + e.message + '. Use HTTPS or localhost, or copy manually.');
  }
  document.body.removeChild(ta);
}

var SCORING_CALCULATORS = [
  {
    id: 'gcs',
    title: 'Glasgow Coma Scale (GCS)',
    fields: [
      { label: 'Eye opening', inputs: [{v:'1',t:'None'},{v:'2',t:'To pain'},{v:'3',t:'To speech'},{v:'4',t:'Spontaneous'}] },
      { label: 'Verbal response', inputs: [{v:'1',t:'None'},{v:'2',t:'Incomprehensible sounds'},{v:'3',t:'Inappropriate words'},{v:'4',t:'Confused'},{v:'5',t:'Oriented'}] },
      { label: 'Motor response', inputs: [{v:'1',t:'None'},{v:'2',t:'Extension (decerebrate)'},{v:'3',t:'Flexion (decorticate)'},{v:'4',t:'Withdrawal'},{v:'5',t:'Localizes pain'},{v:'6',t:'Obeys commands'}] }
    ],
    interpret: function(s) { if (s>=15) return 'Normal (15)'; if (s>=13) return 'Mild (13-14)'; if (s>=9) return 'Moderate (9-12)'; return 'Severe (3-8) — critical'; }
  },
  {
    id: 'curb65',
    title: 'CURB-65 (Pneumonia Severity)',
    fields: [
      { label: 'Confusion (new disorientation)', inputs: [{v:'0',t:'No'},{v:'1',t:'Yes'}] },
      { label: 'Urea > 7 mmol/L (BUN > 20 mg/dL)', inputs: [{v:'0',t:'No'},{v:'1',t:'Yes'}] },
      { label: 'Respiratory rate >= 30/min', inputs: [{v:'0',t:'No'},{v:'1',t:'Yes'}] },
      { label: 'BP < 90/60 (systolic < 90 or diastolic <= 60)', inputs: [{v:'0',t:'No'},{v:'1',t:'Yes'}] },
      { label: 'Age >= 65 years', inputs: [{v:'0',t:'No'},{v:'1',t:'Yes'}] }
    ],
    interpret: function(s) { if (s<=1) return 'Score ' + s + ' — Low risk. Outpatient management.'; if (s==2) return 'Score 2 — Moderate risk. Hospital admission.'; return 'Score ' + s + ' — Severe. ICU admission.'; }
  },
  {
    id: 'wells_dvt',
    title: 'Wells Score for DVT',
    fields: [
      { label: 'Active cancer (treatment, palliation, or diagnosed <6 months)', inputs: [{v:'0',t:'No'},{v:'1',t:'Yes'}] },
      { label: 'Paralysis, paresis, or recent plaster immobilization of lower extremity', inputs: [{v:'0',t:'No'},{v:'1',t:'Yes'}] },
      { label: 'Recently bedridden >3 days or major surgery <4 weeks', inputs: [{v:'0',t:'No'},{v:'1',t:'Yes'}] },
      { label: 'Localized tenderness along distribution of deep veins', inputs: [{v:'0',t:'No'},{v:'1',t:'Yes'}] },
      { label: 'Entire leg swollen', inputs: [{v:'0',t:'No'},{v:'1',t:'Yes'}] },
      { label: 'Calf swelling >3 cm compared to asymptomatic leg', inputs: [{v:'0',t:'No'},{v:'1',t:'Yes'}] },
      { label: 'Pitting edema confined to symptomatic leg', inputs: [{v:'0',t:'No'},{v:'1',t:'Yes'}] },
      { label: 'Collateral superficial veins (non-varicose)', inputs: [{v:'0',t:'No'},{v:'1',t:'Yes'}] },
      { label: 'Alternative diagnosis as likely or more likely than DVT', inputs: [{v:'0',t:'No'},{v:'-2',t:'Yes'}] }
    ],
    interpret: function(s) { if (s<=0) return 'Score ' + s + ' — Low probability (DVT unlikely).'; if (s<=2) return 'Score ' + s + ' — Moderate probability.'; return 'Score ' + s + ' — High probability (DVT likely).'; }
  },
  {
    id: 'wells_pe',
    title: 'Wells Score for PE',
    fields: [
      { label: 'Clinical signs of DVT (swelling, pain, tenderness)', inputs: [{v:'0',t:'No'},{v:'3',t:'Yes'}] },
      { label: 'PE is #1 diagnosis, or equally likely', inputs: [{v:'0',t:'No'},{v:'3',t:'Yes'}] },
      { label: 'Heart rate > 100 bpm', inputs: [{v:'0',t:'No'},{v:'1.5',t:'Yes'}] },
      { label: 'Immobilization / surgery <4 weeks', inputs: [{v:'0',t:'No'},{v:'1.5',t:'Yes'}] },
      { label: 'Previous DVT / PE', inputs: [{v:'0',t:'No'},{v:'1.5',t:'Yes'}] },
      { label: 'Hemoptysis', inputs: [{v:'0',t:'No'},{v:'1',t:'Yes'}] },
      { label: 'Malignancy (active, treatment <6 months, palliative)', inputs: [{v:'0',t:'No'},{v:'1',t:'Yes'}] }
    ],
    interpret: function(s) { if (s<=4) return 'Score ' + s + ' — PE unlikely. Consider D-dimer.'; return 'Score ' + s + ' — PE likely. Consider CTPA / V/Q.'; }
  },
  {
    id: 'cha2ds2',
    title: 'CHA\u2082DS\u2082-VASc (Stroke Risk in AF)',
    fields: [
      { label: 'Congestive heart failure / LV dysfunction', inputs: [{v:'0',t:'No'},{v:'1',t:'Yes'}] },
      { label: 'Hypertension', inputs: [{v:'0',t:'No'},{v:'1',t:'Yes'}] },
      { label: 'Age >= 75 years', inputs: [{v:'0',t:'No'},{v:'2',t:'Yes'}] },
      { label: 'Diabetes mellitus', inputs: [{v:'0',t:'No'},{v:'1',t:'Yes'}] },
      { label: 'Stroke / TIA / thromboembolism', inputs: [{v:'0',t:'No'},{v:'2',t:'Yes'}] },
      { label: 'Vascular disease (prior MI, PAD, aortic plaque)', inputs: [{v:'0',t:'No'},{v:'1',t:'Yes'}] },
      { label: 'Age 65-74 years', inputs: [{v:'0',t:'No'},{v:'1',t:'Yes'}] },
      { label: 'Sex category (female)', inputs: [{v:'0',t:'Male'},{v:'1',t:'Female'}] }
    ],
    interpret: function(s) { if (s==0) return 'Score 0 — No anticoagulation needed (annual stroke risk ~0%).'; if (s==1) return 'Score 1 — Consider OAC (annual stroke risk ~1.3%).'; return 'Score ' + s + ' — OAC indicated (annual stroke risk ~' + (s*1.5+1.5).toFixed(1) + '%).'; }
  },
  {
    id: 'alvarado',
    title: 'Alvarado Score (Appendicitis)',
    fields: [
      { label: 'Migration of pain to RIF', inputs: [{v:'0',t:'No'},{v:'1',t:'Yes'}] },
      { label: 'Anorexia', inputs: [{v:'0',t:'No'},{v:'1',t:'Yes'}] },
      { label: 'Nausea / Vomiting', inputs: [{v:'0',t:'No'},{v:'1',t:'Yes'}] },
      { label: 'Tenderness in right iliac fossa', inputs: [{v:'0',t:'No'},{v:'2',t:'Yes'}] },
      { label: 'Rebound tenderness', inputs: [{v:'0',t:'No'},{v:'1',t:'Yes'}] },
      { label: 'Temperature > 37.3 C', inputs: [{v:'0',t:'No'},{v:'1',t:'Yes'}] },
      { label: 'Leukocytosis > 10,000', inputs: [{v:'0',t:'No'},{v:'2',t:'Yes'}] },
      { label: 'Left shift (neutrophils > 75%)', inputs: [{v:'0',t:'No'},{v:'1',t:'Yes'}] }
    ],
    interpret: function(s) { if (s<=4) return 'Score ' + s + ' — Low probability. Observe.'; if (s<=6) return 'Score ' + s + ' — Possible. Consider imaging / observation.'; return 'Score ' + s + ' — High probability. Likely appendectomy.'; }
  }
];

function renderScoringCalculators() {
  var html = '';
  SCORING_CALCULATORS.forEach(function(cal) {
    html += '<div class="calc-card" data-calc="' + cal.id + '" style="margin-bottom:12px;border:1px solid #e2e8f0;border-radius:6px;overflow:hidden">';
    html += '<div class="calc-header" onclick="toggleCalculator(\'' + cal.id + '\')" style="display:flex;justify-content:space-between;align-items:center;padding:10px 14px;background:#f7fafc;cursor:pointer;user-select:none">';
    html += '<span style="font-weight:600;font-size:0.9rem;color:#2d3748">' + esc(cal.title) + '</span>';
    html += '<span><strong id="score_' + cal.id + '" style="color:#2b6cb0;font-size:1.1rem">\u2014</strong> <span id="interp_' + cal.id + '" style="font-size:0.8rem;color:#718096"></span> <span class="calc-toggle" style="margin-left:8px;color:#a0aec0">\u25bc</span></span>';
    html += '</div>';
    html += '<div class="calc-body" id="body_' + cal.id + '" style="padding:0 14px 14px;display:none">';
    cal.fields.forEach(function(f, i) {
      html += '<div class="form-group" style="margin-bottom:8px">';
      html += '<label style="font-size:0.8rem">' + esc(f.label) + '</label>';
      html += '<select id="calc_' + cal.id + '_' + i + '" onchange="calcScore(\'' + cal.id + '\')" style="width:100%;padding:6px 8px;border:1px solid #d0d7de;border-radius:4px;font-size:0.85rem;background:#fff">';
      html += '<option value="">\u2014\u2014</option>';
      f.inputs.forEach(function(inp) {
        html += '<option value="' + inp.v + '">' + esc(inp.t) + '</option>';
      });
      html += '</select>';
      html += '</div>';
    });
    html += '</div>';
    html += '</div>';
  });
  return html;
}

function toggleCalculator(id) {
  var body = document.getElementById('body_' + id);
  if (!body) return;
  body.style.display = body.style.display === 'none' ? 'block' : 'none';
}

function calcScore(id) {
  var cal = null;
  for (var i = 0; i < SCORING_CALCULATORS.length; i++) {
    if (SCORING_CALCULATORS[i].id === id) { cal = SCORING_CALCULATORS[i]; break; }
  }
  if (!cal) return;
  var score = 0;
  var allSelected = true;
  cal.fields.forEach(function(f, idx) {
    var el = document.getElementById('calc_' + id + '_' + idx);
    if (el && el.value !== '') {
      score += parseFloat(el.value);
    } else {
      allSelected = false;
    }
  });
  var scoreEl = document.getElementById('score_' + id);
  var interpEl = document.getElementById('interp_' + id);
  if (!scoreEl) return;
  if (allSelected) {
    scoreEl.textContent = score;
    if (interpEl) interpEl.textContent = '\u2014 ' + cal.interpret(score);
  } else {
    scoreEl.textContent = '\u2014';
    if (interpEl) interpEl.textContent = '';
  }
}

function resetApp() {
  clearCurrentFromLS();
  currentSpecialty = null;
  steps = [];
  formData = {};

  document.getElementById('specialty-selector').classList.remove('hidden');
  document.getElementById('form-view').classList.add('hidden');
  document.getElementById('toolbar-condition').textContent = '';
  if (window._clockInterval) clearInterval(window._clockInterval);
}

function exportHistory() {
  var raw = localStorage.getItem(LS_HISTORY);
  if (!raw || raw === '[]') { alert('No saved assessments to export.'); return; }
  var blob = new Blob([raw], { type: 'application/json' });
  var url = URL.createObjectURL(blob);
  var a = document.createElement('a');
  a.href = url; a.download = 'medhistory_backup.json';
  document.body.appendChild(a); a.click();
  document.body.removeChild(a); URL.revokeObjectURL(url);
}
function importHistory() {
  var input = document.getElementById('import-input');
  if (!input) {
    input = document.createElement('input');
    input.id = 'import-input'; input.type = 'file'; input.accept = '.json'; input.style.display = 'none';
    input.addEventListener('change', function (e) {
      var file = e.target.files[0]; if (!file) return;
      var reader = new FileReader();
      reader.onload = function (ev) {
        try {
          var data = JSON.parse(ev.target.result);
          if (!Array.isArray(data)) throw new Error('Invalid format');
          localStorage.setItem(LS_HISTORY, JSON.stringify(data));
          renderHistoryList(); alert('Imported ' + data.length + ' assessment(s).');
        } catch (err) { alert('Invalid backup file.'); }
      };
      reader.readAsText(file);
    });
    document.body.appendChild(input);
  }
  input.click();
}
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  var btn = document.getElementById('dark-toggle');
  if (btn) btn.textContent = document.body.classList.contains('dark-mode') ? '\u2600' : '\u263E';
  localStorage.setItem('medHistory_darkMode', document.body.classList.contains('dark-mode') ? '1' : '');
}
function applyDarkMode() {
  if (localStorage.getItem('medHistory_darkMode') === '1') {
    document.body.classList.add('dark-mode');
    var btn = document.getElementById('dark-toggle');
    if (btn) btn.textContent = '\u2600';
  }
}

checkSavedData();

if('serviceWorker' in navigator)navigator.serviceWorker.register('sw.js');

applyDarkMode();
if(localStorage.getItem('medHistory_teaching')==='1'){var tb=document.getElementById('teach-toggle');if(tb){tb.style.background='#dd6b20';tb.style.color='#fff';}}