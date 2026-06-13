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