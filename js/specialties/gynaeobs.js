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
