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