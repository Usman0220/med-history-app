const MEDICINE_QUESTIONS = [
  {
    id: 'medicine-specific',
    title: 'Medical-Specific History',
    fields: [
      { id: 'med_onset_details', label: 'Detailed onset and progression of symptoms', type: 'textarea' },
      { id: 'med_functional', label: 'Functional status / ECOG performance score', type: 'select',
        options: [
          '0 - Fully active',
          '1 - Restricted in strenuous activity',
          '2 - Ambulatory, unable to work',
          '3 - Limited self-care',
          '4 - Completely disabled'
        ] }
    ]
  },
  {
    id: 'system-review-detailed',
    title: 'System-Specific Review',
    fields: [
      { id: 'med_endocrine', label: 'Endocrine (thyroid, diabetes, adrenal)', type: 'textarea' },
      { id: 'med_renal', label: 'Renal (urine output, edema, dialysis)', type: 'textarea' },
      { id: 'med_hepatic', label: 'Hepatic (jaundice, ascites, encephalopathy)', type: 'textarea' },
      { id: 'med_hematologic', label: 'Hematologic (anemia, bruising, lymph nodes)', type: 'textarea' },
      { id: 'med_immunologic', label: 'Immunologic / autoimmune history', type: 'textarea' },
      { id: 'med_psychiatric', label: 'Psychiatric history (depression, anxiety, etc.)', type: 'textarea' },
      { id: 'med_infections', label: 'Recent infections / fever history', type: 'textarea' }
    ]
  },
  {
    id: 'risk-factors',
    title: 'Risk Factor Assessment',
    fields: [
      { id: 'med_bmi', label: 'BMI', type: 'text' },
      { id: 'med_waist', label: 'Waist circumference (cm)', type: 'text' },
      { id: 'med_family_cvd', label: 'Family history of premature CVD', type: 'select',
        options: ['No', 'Yes - parent', 'Yes - sibling', 'Unknown'] },
      { id: 'med_lipids', label: 'Lipid profile (if known)', type: 'text' },
      { id: 'med_glucose', label: 'Blood glucose / HbA1c (if known)', type: 'text' }
    ]
  }
];
