// == ENT ==
const ENT_QUESTIONS = [
  { id: 'ent-exam', title: 'ENT Examination', fields: [
    { id: 'ent_otoscopy', label: 'Otoscopy findings (R)', type: 'textarea' },
    { id: 'ent_otoscopy_l', label: 'Otoscopy findings (L)', type: 'textarea' },
    { id: 'ent_rhinoscopy', label: 'Anterior rhinoscopy findings', type: 'textarea' },
    { id: 'ent_oral', label: 'Oral cavity / oropharynx findings', type: 'textarea' },
    { id: 'ent_neck', label: 'Neck examination (lymph nodes, thyroid)', type: 'textarea' },
    { id: 'ent_hearing', label: 'Hearing assessment (tuning fork tests)', type: 'textarea' },
    { id: 'ent_vestibular', label: 'Vestibular function tests', type: 'textarea' }] }
];
const ENT_DISEASES = {
  otitis_media: [{ id: 'om-history', title: 'Otitis Media History', fields: [
    { id: 'om_type', label: 'Type', type: 'select', options: ['Acute otitis media', 'Otitis media with effusion (glue ear)', 'Chronic suppurative otitis media'] },
    { id: 'om_ear', label: 'Ear affected', type: 'select', options: ['Right', 'Left', 'Bilateral'] }, { id: 'om_earache', label: 'Earache (otalgia)', type: 'select', options: ['None', 'Mild', 'Moderate', 'Severe'] },
    { id: 'om_discharge', label: 'Ear discharge (otorrhea)', type: 'select', options: ['None', 'Serous', 'Mucoid', 'Purulent', 'Bloody'] },
    { id: 'om_hearing', label: 'Hearing loss', type: 'select', options: ['None', 'Mild', 'Moderate', 'Severe'] }, { id: 'om_fever', label: 'Fever', type: 'select', options: ['Yes', 'No'] },
    { id: 'om_duration', label: 'Duration of symptoms', type: 'text' }, { id: 'om_recurrent', label: 'Recurrent episodes', type: 'select', options: ['First episode', 'Recurrent (>3 in 6 months)'] },
    { id: 'om_complications', label: 'Complications', type: 'checkbox', options: ['Mastoiditis', 'Facial nerve palsy', 'Meningitis', 'Brain abscess', 'Labyrinthitis'] }] }],
  sinusitis: [{ id: 'sinus-history', title: 'Sinusitis History', fields: [
    { id: 'sinus_type', label: 'Type', type: 'select', options: ['Acute (< 4 weeks)', 'Subacute (4-12 weeks)', 'Chronic (> 12 weeks)', 'Recurrent acute'] },
    { id: 'sinus_facial', label: 'Facial pain / pressure', type: 'select', options: ['None', 'Frontal', 'Maxillary', 'Ethmoidal', 'Sphenoid', 'Diffuse'] },
    { id: 'sinus_nasal', label: 'Nasal congestion / obstruction', type: 'select', options: ['None', 'Mild', 'Moderate', 'Severe'] },
    { id: 'sinus_discharge', label: 'Nasal discharge color', type: 'select', options: ['Clear', 'Yellow', 'Green', 'Blood-tinged'] },
    { id: 'sinus_hyposmia', label: 'Reduced sense of smell', type: 'select', options: ['Yes', 'No'] }, { id: 'sinus_fever', label: 'Fever', type: 'select', options: ['Yes', 'No'] },
    { id: 'sinus_dental', label: 'Dental pain', type: 'select', options: ['Yes', 'No'] }, { id: 'sinus_allergy', label: 'Allergic rhinitis association', type: 'select', options: ['Yes', 'No'] },
    { id: 'sinus_endoscopy', label: 'Nasal endoscopy findings', type: 'textarea' }] }],
  tonsillitis: [{ id: 'tonsil-history', title: 'Tonsillitis / Pharyngitis History', fields: [
    { id: 'tonsil_sore', label: 'Sore throat severity', type: 'select', options: ['Mild', 'Moderate', 'Severe', 'Unable to swallow'] },
    { id: 'tonsil_fever', label: 'Fever', type: 'select', options: ['Yes', 'No'] }, { id: 'tonsil_appearance', label: 'Tonsillar appearance', type: 'select', options: ['Erythematous', 'Enlarged', 'Exudates (white patches)', 'Peritonsillar swelling'] },
    { id: 'tonsil_cervical', label: 'Cervical lymphadenopathy', type: 'select', options: ['None', 'Unilateral', 'Bilateral', 'Tender'] },
    { id: 'tonsil_centor', label: 'Centor criteria met', type: 'checkbox', options: ['Fever > 38°C', 'Tonsillar exudates', 'Tender cervical nodes', 'Absence of cough'] },
    { id: 'tonsil_recurrent', label: 'Recurrent episodes / year', type: 'select', options: ['First episode', '1-2 / year', '3-5 / year', '> 5 / year (consider tonsillectomy)'] },
    { id: 'tonsil_complications', label: 'Complications', type: 'checkbox', options: ['Peritonsillar abscess (quinsy)', 'Parapharyngeal abscess', 'Rheumatic fever', 'Post-streptococcal GN'] }] }],
  pharyngitis: [{ id: 'phar-history', title: 'Pharyngitis History', fields: [
    { id: 'phar_duration', label: 'Duration', type: 'text' }, { id: 'phar_cough', label: 'Cough', type: 'select', options: ['Yes', 'No'] },
    { id: 'phar_rhinitis', label: 'Rhinorrhea / nasal congestion', type: 'select', options: ['Yes', 'No'] }, { id: 'phar_hoarseness', label: 'Hoarseness', type: 'select', options: ['Yes', 'No'] },
    { id: 'phar_dysphagia', label: 'Dysphagia / odynophagia', type: 'select', options: ['None', 'Mild', 'Moderate', 'Severe'] },
    { id: 'phar_viral', label: 'Viral prodrome symptoms', type: 'checkbox', options: ['Myalgia', 'Malaise', 'Headache', 'Conjunctivitis', 'Diarrhea'] }] }],
  hearing_loss: [{ id: 'hl-history', title: 'Hearing Loss History', fields: [
    { id: 'hl_onset', label: 'Onset', type: 'select', options: ['Sudden (< 72 hours)', 'Rapid (days)', 'Gradual (months)', 'Congenital'] },
    { id: 'hl_type', label: 'Type (by tuning fork)', type: 'select', options: ['Not tested', 'Conductive', 'Sensorineural', 'Mixed'] },
    { id: 'hl_side', label: 'Side', type: 'select', options: ['Right', 'Left', 'Bilateral symmetrical', 'Bilateral asymmetrical'] },
    { id: 'hl_tinnitus', label: 'Tinnitus', type: 'select', options: ['Yes', 'No'] }, { id: 'hl_vertigo', label: 'Vertigo / dizziness', type: 'select', options: ['Yes', 'No'] },
    { id: 'hl_noise', label: 'Noise exposure history', type: 'select', options: ['None', 'Occupational', 'Recreational (gunfire, music)', 'Acoustic trauma'] },
    { id: 'hl_ototoxic', label: 'Ototoxic drug exposure', type: 'textarea' }, { id: 'hl_audiometry', label: 'Audiometry findings', type: 'textarea' }] }],
  vertigo: [{ id: 'vertigo-history', title: 'Vertigo / Dizziness History', fields: [
    { id: 'vertigo_type', label: 'Type', type: 'select', options: ['True vertigo (spinning)', 'Lightheadedness', 'Presyncope', 'Disequilibrium'] },
    { id: 'vertigo_onset', label: 'Onset of episode', type: 'select', options: ['Sudden (seconds)', 'Minutes to hours', 'Days'] },
    { id: 'vertigo_duration', label: 'Episode duration', type: 'select', options: ['Seconds (BPPV)', 'Minutes (TIA)', 'Hours (Meniere)', 'Days (vestibular neuritis)', 'Continuous'] },
    { id: 'vertigo_triggers', label: 'Triggers', type: 'checkbox', options: ['Position change (rolling in bed)', 'Head movement', 'Coughing/sneezing', 'Loud sounds (Tullio)', 'None'] },
    { id: 'vertigo_nystagmus', label: 'Nystagmus on exam', type: 'select', options: ['None', 'Horizontal', 'Vertical', 'Rotatory'] },
    { id: 'vertigo_assoc', label: 'Associated symptoms', type: 'checkbox', options: ['Nausea/vomiting', 'Hearing loss', 'Tinnitus', 'Aural fullness', 'Headache', 'Ataxia', 'Oscillopsia'] },
    { id: 'vertigo_hallpike', label: 'Dix-Hallpike maneuver', type: 'select', options: ['Not done', 'Positive (BPPV)', 'Negative'] }] }]
};