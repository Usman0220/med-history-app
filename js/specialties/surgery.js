const SURGERY_QUESTIONS = [
  {
    id: 'surgical-history',
    title: 'Surgical History',
    fields: [
      { id: 'surg_previous', label: 'Previous surgeries (type, date, hospital, surgeon)', type: 'textarea' },
      { id: 'surg_anesthesia', label: 'Previous anesthesia — type and any complications', type: 'textarea' },
      { id: 'surg_family_anesthesia', label: 'Family history of anesthesia complications (e.g. malignant hyperthermia)', type: 'select',
        options: ['No', 'Yes', 'Unknown'] }
    ]
  },
  {
    id: 'surgical-risk',
    title: 'Perioperative Risk Assessment',
    fields: [
      { id: 'surg_bleeding', label: 'Bleeding risk', type: 'checkbox',
        options: ['On anticoagulants', 'Easy bruising', 'Prolonged bleeding', 'Liver disease', 'Hemophilia', 'None'] },
      { id: 'surg_bleeding_inr', label: 'INR / Coagulation profile (if known)', type: 'text' },
      { id: 'surg_cardiac_risk', label: 'Cardiac risk', type: 'checkbox',
        options: ['CAD', 'CHF', 'Arrhythmia', 'Valvular disease', 'Pacemaker/ICD', 'None'] },
      { id: 'surg_pulmonary_risk', label: 'Pulmonary risk', type: 'checkbox',
        options: ['COPD', 'Asthma', 'OSA', 'Current smoker', 'None'] },
      { id: 'surg_dvt_risk', label: 'DVT / PE risk factors', type: 'checkbox',
        options: ['Prior DVT/PE', 'Malignancy', 'Obesity', 'Pregnancy', 'OCP/HRT', 'Prolonged immobility', 'None'] },
      { id: 'surg_renal_risk', label: 'Renal risk', type: 'checkbox',
        options: ['CKD', 'Dialysis', 'Electrolyte abnormality', 'None'] },
      { id: 'surg_diabetes', label: 'Diabetes status', type: 'select',
        options: ['No', 'Type 1', 'Type 2', 'Pre-diabetic'] },
      { id: 'surg_fasting', label: 'Fasting status / NBM since', type: 'text', hint: 'Time of last meal' },
      { id: 'surg_implants', label: 'Any implants / prosthesis / metal / pacemaker?', type: 'textarea' },
      { id: 'surg_allergies', label: 'Allergies — antibiotics, latex, contrast, antiseptics', type: 'textarea' }
    ]
  },
  {
    id: 'surgical-specific',
    title: 'Surgical-Specific Presenting History',
    fields: [
      { id: 'surg_bowel', label: 'Bowel function — last bowel movement, stool character, blood', type: 'textarea' },
      { id: 'surg_bladder', label: 'Bladder function — last void, catheter, urinary symptoms', type: 'textarea' },
      { id: 'surg_menstrual', label: 'Menstrual / pregnancy status (if female)', type: 'text',
        hint: 'LMP, possibility of pregnancy' },
      { id: 'surg_breast', label: 'Breast symptoms (if applicable)', type: 'textarea' },
      { id: 'surg_neurovascular', label: 'Neurovascular status of limb (if applicable)', type: 'textarea',
        hint: 'Color, warmth, pulses, sensation, movement' },
      { id: 'surg_wound', label: 'Wound healing history / keloid formation', type: 'select',
        options: ['Normal', 'Delayed healing', 'Keloid / hypertrophic scar', 'Unknown'] }
    ]
  },
  {
    id: 'wound-assessment',
    title: 'Wound / Lesion Assessment',
    fields: [
      { id: 'wound_type', label: 'Type of wound / lesion', type: 'select',
        options: ['Laceration', 'Incision', 'Ulcer', 'Abscess', 'Mass / Tumor', 'Burn', 'Fracture-related', 'Other'] },
      { id: 'wound_cause', label: 'Cause / mechanism', type: 'textarea' },
      { id: 'wound_age', label: 'How old is the wound / when did it start?', type: 'text' },
      { id: 'wound_size', label: 'Size (cm) — length x width x depth', type: 'text' },
      { id: 'wound_depth', label: 'Depth / layers involved', type: 'select',
        options: ['Superficial (epidermis)', 'Partial thickness (dermis)', 'Full thickness (subcutis)', 'Deep (muscle/bone)', 'Through and through'] },
      { id: 'wound_edge', label: 'Edge / margin characteristics', type: 'textarea' },
      { id: 'wound_base', label: 'Base / bed characteristics', type: 'textarea',
        hint: 'Granulation, slough, necrotic, bleeding' },
      { id: 'wound_discharge', label: 'Discharge / exudate', type: 'select',
        options: ['None', 'Serous', 'Purulent', 'Sanguinous', 'Serosanguinous', 'Foul-smelling'] },
      { id: 'wound_surrounding', label: 'Surrounding skin (erythema, edema, warmth, induration)', type: 'textarea' },
      { id: 'wound_pain', label: 'Pain at wound site (1-10)', type: 'number', attrs: { min: 0, max: 10 } },
      { id: 'wound_signs_infection', label: 'Signs of infection', type: 'checkbox',
        options: ['Erythema', 'Warmth', 'Swelling', 'Purulent discharge', 'Fever', 'Lymphangitis', 'None'] },
      { id: 'wound_imaging', label: 'Imaging findings (if done)', type: 'textarea' },
      { id: 'wound_management', label: 'Wound management so far', type: 'textarea' }
    ]
  }
];

const SURGERY_DISEASES = {
  'acute_abdomen': [
    { id: 'surg-aa-presentation', title: 'Acute Abdomen — Presentation', fields: [
      { id: 'aa_pain_onset', label: 'Pain onset', type: 'select', options: ['Sudden', 'Gradual', 'Intermittent'] },
      { id: 'aa_pain_site', label: 'Initial site of pain', type: 'select', options: ['Epigastrium', 'Periumbilical', 'Right iliac fossa', 'Left iliac fossa', 'Right hypochondrium', 'Left hypochondrium', 'Suprapubic', 'Generalized'] },
      { id: 'aa_pain_migration', label: 'Did pain migrate?', type: 'select', options: ['No', 'Yes — to RIF', 'Yes — to back', 'Yes — to shoulder', 'Other'] },
      { id: 'aa_pain_character', label: 'Pain character', type: 'select', options: ['Colicky', 'Constant', 'Burning', 'Stabbing', 'Dull ache', 'Tearing'] },
      { id: 'aa_vomiting', label: 'Vomiting', type: 'select', options: ['No', 'Yes — bilious', 'Yes — fecal', 'Yes — blood', 'Yes — food'] },
      { id: 'aa_bowel', label: 'Bowel habits change', type: 'select', options: ['Normal', 'Constipation', 'Diarrhea', 'Obstipation', 'Blood in stool'] },
      { id: 'aa_fever', label: 'Fever', type: 'select', options: ['No', 'Low grade', 'High grade with chills'] },
      { id: 'aa_guarding', label: 'Abdominal rigidity / guarding?', type: 'select', options: ['No', 'Localized', 'Generalized'] },
      { id: 'aa_peritonitis', label: 'Signs of peritonitis?', type: 'select', options: ['No', 'Localized tenderness', 'Rebound tenderness', 'Generalized peritonitis'] }
    ]},
    { id: 'surg-aa-causes', title: 'Acute Abdomen — Cause-Specific', fields: [
      { id: 'aa_appendicitis', label: 'Features of appendicitis (RIF pain, anorexia, nausea, fever)', type: 'checkbox',
        options: ['RIF pain/tenderness', 'Anorexia', 'Nausea/vomiting', 'Fever', 'Rebound tenderness', 'Rovsing sign', 'Psoas sign', 'Not applicable'] },
      { id: 'aa_cholecystitis', label: 'Features of cholecystitis (RUQ pain, fatty food intolerance, Murphy sign)', type: 'checkbox',
        options: ['RUQ pain', 'Fatty food intolerance', 'Referred to shoulder', 'Murphy sign', 'Jaundice', 'Fever', 'Not applicable'] },
      { id: 'aa_pancreatitis', label: 'Features of pancreatitis (epigastric pain, radiation to back, gallstones/alcohol)', type: 'checkbox',
        options: ['Epigastric pain', 'Radiation to back', 'History of gallstones', 'Alcohol use', 'Nausea/vomiting', 'Not applicable'] },
      { id: 'aa_sbo', label: 'Features of SBO / obstruction (distension, vomiting, obstipation, borborygmi)', type: 'checkbox',
        options: ['Abdominal distension', 'Vomiting (bilious/fecal)', 'Obstipation', 'Borborygmi', 'Previous surgery', 'Hernia', 'Not applicable'] }
    ]}
  ],
  'hernia': [
    { id: 'surg-hernia', title: 'Hernia — History', fields: [
      { id: 'hernia_site', label: 'Site of hernia', type: 'select', options: ['Inguinal', 'Femoral', 'Umbilical', 'Incisional', 'Epigastric', 'Hiatus'] },
      { id: 'hernia_side', label: 'Side', type: 'select', options: ['Right', 'Left', 'Bilateral', 'Central / midline'] },
      { id: 'hernia_duration', label: 'Duration', type: 'text' },
      { id: 'hernia_precipitating', label: 'Precipitating factors (lifting, coughing, straining)', type: 'textarea' },
      { id: 'hernia_reducible', label: 'Reducible?', type: 'select', options: ['Yes — spontaneously', 'Yes — manually', 'No — irreducible', 'Intermittent'] },
      { id: 'hernia_cough_impulse', label: 'Cough impulse present?', type: 'select', options: ['Yes', 'No', 'Not examined'] },
      { id: 'hernia_pain', label: 'Pain / discomfort', type: 'select', options: ['None', 'Mild', 'Moderate', 'Severe'] },
      { id: 'hernia_obstruction', label: 'Signs of obstruction (vomiting, distension, obstipation)', type: 'checkbox',
        options: ['Vomiting', 'Distension', 'Obstipation', 'Pain increase', 'None'] },
      { id: 'hernia_strangulation', label: 'Signs of strangulation (irreducible, tender, fever, discoloration)', type: 'checkbox',
        options: ['Irreducible', 'Tender', 'Overlying skin changes', 'Fever', 'None'] }
    ]}
  ],
  'breast_lump': [
    { id: 'surg-breast', title: 'Breast Lump — History', fields: [
      { id: 'breast_side', label: 'Side', type: 'select', options: ['Right', 'Left', 'Bilateral'] },
      { id: 'breast_quadrant', label: 'Quadrant', type: 'select', options: ['Upper outer', 'Upper inner', 'Lower outer', 'Lower inner', 'Central / retroareolar', 'Axillary tail'] },
      { id: 'breast_duration', label: 'Duration', type: 'text' },
      { id: 'breast_size_change', label: 'Change in size over time?', type: 'select', options: ['Stable', 'Increasing', 'Cyclical (related to menses)', 'Decreasing'] },
      { id: 'breast_pain', label: 'Pain / tenderness', type: 'select', options: ['None', 'Cyclical', 'Continuous', 'Tender to touch'] },
      { id: 'breast_nipple', label: 'Nipple changes', type: 'checkbox',
        options: ['Nipple discharge', 'Nipple retraction', 'Nipple eczema', 'None'] },
      { id: 'breast_discharge', label: 'Nipple discharge type (if any)', type: 'select',
        options: ['None', 'Blood-stained', 'Serous', 'Milky', 'Purulent', 'Greenish'] },
      { id: 'breast_skin', label: 'Skin changes', type: 'checkbox',
        options: ['Peau d\'orange', 'Dimpling', 'Ulceration', 'Erythema', 'Warmth', 'None'] },
      { id: 'breast_axilla', label: 'Axillary nodes / lump?', type: 'select', options: ['No', 'Yes — ipsilateral', 'Yes — contralateral', 'Bilateral'] },
      { id: 'breast_family', label: 'Family history of breast / ovarian cancer?', type: 'select', options: ['No', 'Yes — 1st degree', 'Yes — 2nd degree', 'Unknown'] },
      { id: 'breast_menopause', label: 'Menopausal status', type: 'select', options: ['Premenopausal', 'Perimenopausal', 'Postmenopausal'] }
    ]}
  ],
  'trauma': [
    { id: 'surg-trauma', title: 'Trauma — History', fields: [
      { id: 'trauma_mechanism', label: 'Mechanism of injury', type: 'select', options: ['Blunt', 'Penetrating', 'Crush', 'Fall', 'RTA', 'Burn', 'Other'] },
      { id: 'trauma_time', label: 'Time since injury', type: 'text' },
      { id: 'trauma_loc', label: 'Loss of consciousness?', type: 'select', options: ['No', 'Yes — transient', 'Yes — prolonged', 'Unknown'] },
      { id: 'trauma_bleeding', label: 'External bleeding (estimated)', type: 'text' },
      { id: 'trauma_airway', label: 'Airway / breathing concerns?', type: 'select', options: ['No', 'Yes — stridor', 'Yes — cyanosis', 'Yes — chest injury'] },
      { id: 'trauma_neuro', label: 'Neurological deficit?', type: 'checkbox',
        options: ['Limb weakness', 'Numbness', 'Visual change', 'Facial droop', 'None'] },
      { id: 'trauma_fracture', label: 'Suspected fracture / deformity', type: 'textarea' },
      { id: 'trauma_imaging_done', label: 'Imaging done (X-ray, CT, FAST)', type: 'textarea' },
      { id: 'trauma_tetanus', label: 'Tetanus vaccination status', type: 'select', options: ['Up to date', 'Not up to date', 'Unknown'] },
      { id: 'trauma_other_injuries', label: 'Other injuries / complaints', type: 'textarea' }
    ]}
  ],
  'thyroid': [
    { id: 'surg-thyroid', title: 'Thyroid / Neck Lump — History', fields: [
      { id: 'thyroid_duration', label: 'Duration of swelling', type: 'text' },
      { id: 'thyroid_growth', label: 'Growth pattern', type: 'select', options: ['Slow', 'Rapid', 'Static', 'Intermittent'] },
      { id: 'thyroid_side', label: 'Side', type: 'select', options: ['Midline', 'Right lobe', 'Left lobe', 'Bilateral / diffuse', 'Isthmus'] },
      { id: 'thyroid_pain', label: 'Pain / tenderness', type: 'select', options: ['None', 'Mild', 'Severe', 'Tender'] },
      { id: 'thyroid_hyper', label: 'Hyperthyroid symptoms', type: 'checkbox',
        options: ['Heat intolerance', 'Palpitations', 'Weight loss', 'Tremors', 'Diarrhea', 'Irritability', 'Exophthalmos', 'None'] },
      { id: 'thyroid_hypo', label: 'Hypothyroid symptoms', type: 'checkbox',
        options: ['Cold intolerance', 'Weight gain', 'Fatigue', 'Constipation', 'Dry skin', 'Hair loss', 'None'] },
      { id: 'thyroid_compression', label: 'Compression symptoms', type: 'checkbox',
        options: ['Dysphagia', 'Hoarseness', 'SOB / stridor', 'Cough', 'None'] },
      { id: 'thyroid_voice', label: 'Voice change (recurrent laryngeal nerve)', type: 'select', options: ['No', 'Yes — hoarseness', 'Yes — loss of voice'] },
      { id: 'thyroid_imaging', label: 'Imaging / FNAC findings (if done)', type: 'textarea' }
    ]}
  ]
};
