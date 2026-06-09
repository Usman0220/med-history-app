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
      { id: 'surg_bleeding', label: 'Bleeding risk — anticoagulants, coagulopathy, easy bruising, liver disease', type: 'checkbox',
        options: ['On anticoagulants', 'Easy bruising', 'Prolonged bleeding', 'Liver disease', 'Hemophilia', 'None'] },
      { id: 'surg_bleeding_inr', label: 'INR / Coagulation profile (if known)', type: 'text' },
      { id: 'surg_cardiac_risk', label: 'Cardiac risk — CAD, CHF, arrhythmia, valvular disease, pacemaker', type: 'checkbox',
        options: ['CAD', 'CHF', 'Arrhythmia', 'Valvular disease', 'Pacemaker/ICD', 'None'] },
      { id: 'surg_pulmonary_risk', label: 'Pulmonary risk — COPD, asthma, OSA, smoking', type: 'checkbox',
        options: ['COPD', 'Asthma', 'OSA', 'Current smoker', 'None'] },
      { id: 'surg_dvt_risk', label: 'DVT / PE risk factors', type: 'checkbox',
        options: ['Prior DVT/PE', 'Malignancy', 'Obesity', 'Pregnancy', 'OCP/HRT', 'Prolonged immobility', 'None'] },
      { id: 'surg_renal_risk', label: 'Renal risk — CKD, dialysis, electrolyte abnormalities', type: 'checkbox',
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
      { id: 'wound_size', label: 'Size (cm) — length × width × depth', type: 'text' },
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
