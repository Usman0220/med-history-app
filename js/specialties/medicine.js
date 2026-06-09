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
      { id: 'med_endocrine', label: 'Endocrine — Thyroid (goiter, heat/cold intolerance, weight change), Diabetes (polyuria, polydipsia, polyphagia, neuropathy), Adrenal', type: 'checkbox',
        options: ['Thyroid enlargement', 'Heat/cold intolerance', 'Polyuria', 'Polydipsia', 'Weight change', 'Neuropathy symptoms', 'None'] },
      { id: 'med_renal', label: 'Renal — Urine output changes, edema, flank pain, hematuria, frothy urine, dialysis history', type: 'checkbox',
        options: ['Oliguria/anuria', 'Polyuria', 'Edema', 'Flank pain', 'Hematuria', 'Frothy urine', 'Nocturia', 'None'] },
      { id: 'med_hepatic', label: 'Hepatic — Jaundice, ascites, pruritus, easy bruising, GI bleeding, encephalopathy', type: 'checkbox',
        options: ['Jaundice', 'Ascites', 'Pruritus', 'Easy bruising', 'GI bleeding', 'Confusion', 'None'] },
      { id: 'med_hematologic', label: 'Hematologic — Anemia symptoms, bleeding tendency, lymphadenopathy, recurrent infections', type: 'checkbox',
        options: ['Pallor/fatigue', 'Easy bruising', 'Prolonged bleeding', 'Lymph node swelling', 'Recurrent infections', 'None'] },
      { id: 'med_immunologic', label: 'Immunologic / Autoimmune — Rash, joint pain, oral ulcers, photosensitivity, Raynaud\'s, dry eyes/mouth', type: 'checkbox',
        options: ['Rash', 'Joint pain', 'Oral ulcers', 'Photosensitivity', 'Raynaud\'s', 'Dry eyes', 'Dry mouth', 'None'] },
      { id: 'med_infectious', label: 'Infectious — Recent infections, TB contact, fever pattern, HIV risk factors, travel-related infections', type: 'textarea' },
      { id: 'med_psychiatric', label: 'Psychiatric — Depression, anxiety, sleep disturbance, hallucinations, suicidal ideation, memory loss', type: 'checkbox',
        options: ['Depression', 'Anxiety', 'Sleep disturbance', 'Hallucinations', 'Memory loss', 'Suicidal thoughts', 'None'] },
      { id: 'med_ros_other', label: 'Other system-specific notes', type: 'textarea' }
    ]
  },
  {
    id: 'medicine-cv-risk',
    title: 'Cardiovascular Risk Assessment',
    fields: [
      { id: 'med_bmi', label: 'BMI (kg/m²)', type: 'text' },
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
