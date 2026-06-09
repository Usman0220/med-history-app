const SURGERY_QUESTIONS = [
  {
    id: 'surgical-specific',
    title: 'Surgical-Specific History',
    fields: [
      { id: 'surg_bleeding', label: 'Bleeding tendency / coagulopathy', type: 'select',
        options: ['None', 'Easy bruising', 'Prolonged bleeding', 'On anticoagulants', 'Unknown'] },
      { id: 'surg_anesthesia', label: 'Previous anesthesia complications?', type: 'textarea' },
      { id: 'surg_fasting', label: 'Last meal / fasting status', type: 'text' },
      { id: 'surg_wound', label: 'Wound healing history', type: 'select',
        options: ['Normal', 'Delayed', 'Keloid formation', 'Unknown'] },
      { id: 'surg_dvt', label: 'DVT / PE risk factors', type: 'textarea' },
      { id: 'surg_bowel', label: 'Bowel / bladder function', type: 'textarea' },
      { id: 'surg_menstrual', label: 'Menstrual status (if female, LMP)', type: 'text',
        hint: 'Relevant for pregnancy before surgery' },
      { id: 'surg_implants', label: 'Any implants / pacemaker / prosthesis?', type: 'textarea' },
      { id: 'surg_antibiotics', label: 'Antibiotic allergies', type: 'text' }
    ]
  },
  {
    id: 'wound-assessment',
    title: 'Wound / Lesion Assessment',
    fields: [
      { id: 'wound_type', label: 'Type of wound / lesion', type: 'select',
        options: ['Laceration', 'Incision', 'Ulcer', 'Abscess', 'Mass', 'Burn', 'Other'] },
      { id: 'wound_size', label: 'Size (cm)', type: 'text' },
      { id: 'wound_depth', label: 'Depth', type: 'select',
        options: ['Superficial', 'Partial thickness', 'Full thickness', 'Through and through'] },
      { id: 'wound_edge', label: 'Edge / margin characteristics', type: 'textarea' },
      { id: 'wound_discharge', label: 'Discharge / exudate', type: 'select',
        options: ['None', 'Serous', 'Purulent', 'Sanguinous', 'Foul-smelling'] },
      { id: 'wound_surrounding', label: 'Surrounding skin appearance', type: 'textarea' },
      { id: 'wound_pain', label: 'Pain score at wound site (1-10)', type: 'number', attrs: { min: 1, max: 10 } },
      { id: 'wound_imaging', label: 'Imaging findings (if done)', type: 'textarea' }
    ]
  }
];
