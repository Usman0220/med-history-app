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