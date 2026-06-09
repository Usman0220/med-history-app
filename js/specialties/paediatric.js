const PAEDIATRIC_QUESTIONS = [
  {
    id: 'antenatal-history',
    title: 'Antenatal & Birth History',
    fields: [
      { id: 'preg_duration', label: 'Gestation at birth (weeks)', type: 'number' },
      { id: 'birth_type', label: 'Type of delivery', type: 'select',
        options: ['Normal vaginal', 'C-section', 'Forceps', 'Vacuum', 'Breech'] },
      { id: 'birth_weight', label: 'Birth weight (kg)', type: 'text' },
      { id: 'antenatal_complications', label: 'Antenatal complications', type: 'textarea',
        hint: 'Maternal infections, medications, diabetes, hypertension' },
      { id: 'perinatal_complications', label: 'Perinatal complications', type: 'textarea',
        hint: 'Resuscitation needed, NICU stay, jaundice, hypoxia' },
      { id: 'feeding_birth', label: 'Feeding at birth', type: 'select',
        options: ['Breastfeeding', 'Formula', 'Mixed'] }
    ]
  },
  {
    id: 'developmental-history',
    title: 'Developmental Milestones',
    fields: [
      { id: 'dev_motor', label: 'Motor milestones (rolling, sitting, crawling, walking)', type: 'textarea' },
      { id: 'dev_speech', label: 'Speech / language milestones', type: 'textarea' },
      { id: 'dev_social', label: 'Social / behavioral milestones', type: 'textarea' },
      { id: 'dev_school', label: 'School performance (if applicable)', type: 'textarea' },
      { id: 'dev_concerns', label: 'Any developmental concerns?', type: 'textarea' }
    ]
  },
  {
    id: 'paediatric-feeding',
    title: 'Feeding & Nutrition',
    fields: [
      { id: 'feed_current', label: 'Current feeding method', type: 'select',
        options: ['Breastfeeding', 'Formula', 'Mixed', 'Solid foods', 'Picky eater'] },
      { id: 'feed_freq', label: 'Feeding frequency', type: 'text' },
      { id: 'feed_intake', label: 'Estimated intake / appetite', type: 'textarea' },
      { id: 'feed_issues', label: 'Feeding difficulties (reflux, vomiting, choking)', type: 'textarea' },
      { id: 'growth_params', label: 'Growth parameters (weight, height, head circumference)', type: 'textarea' }
    ]
  },
  {
    id: 'paediatric-immunization',
    title: 'Immunization & Screening',
    fields: [
      { id: 'immunization_status', label: 'Immunization status (up to date?)', type: 'select',
        options: ['Up to date', 'Partially immunized', 'Not immunized', 'Unknown'] },
      { id: 'immunization_details', label: 'Immunization details / dates', type: 'textarea' },
      { id: 'newborn_screening', label: 'Newborn screening results', type: 'textarea' },
      { id: 'paed_allergies', label: 'Known allergies', type: 'textarea' }
    ]
  },
  {
    id: 'paediatric-review',
    title: 'Paediatric Review of Systems',
    fields: [
      { id: 'paed_growth', label: 'Growth concerns (short stature, failure to thrive, obesity)', type: 'textarea' },
      { id: 'paed_sleep', label: 'Sleep patterns / disturbances', type: 'textarea' },
      { id: 'paed_toileting', label: 'Toilet training status', type: 'textarea' },
      { id: 'paed_behaviour', label: 'Behavioral concerns', type: 'textarea' },
      { id: 'paed_infections', label: 'Recurrent infections?', type: 'textarea' },
      { id: 'paed_hospitalizations', label: 'Previous hospitalizations / surgeries', type: 'textarea' }
    ]
  }
];
