// == DERMATOLOGY ==
const DERM_QUESTIONS = [{ id: 'derm-exam', title: 'Dermatological Examination', fields: [
  { id: 'derm_lesion_type', label: 'Primary lesion type', type: 'select', options: ['Macule', 'Papule', 'Plaque', 'Nodule', 'Vesicle', 'Bulla', 'Pustule', 'Wheal', 'Scale', 'Ulcer', 'Fissure', 'Erosion'] },
  { id: 'derm_distribution', label: 'Distribution', type: 'select', options: ['Localized', 'Generalized', 'Symmetrical', 'Asymmetrical', 'Flexural', 'Extensor', 'Seborrheic', 'Dermatomal', 'Sun-exposed', 'Intertriginous'] },
  { id: 'derm_morphology', label: 'Lesion morphology / configuration', type: 'checkbox', options: ['Discrete', 'Confluent', 'Annular', 'Target', 'Linear', 'Reticular', 'Serpiginous', 'Grouped/herpetiform'] },
  { id: 'derm_borders', label: 'Border characteristics', type: 'textarea' }, { id: 'derm_color', label: 'Color', type: 'text' },
  { id: 'derm_size', label: 'Size of largest lesion', type: 'text' },
  { id: 'derm_excoriation', label: 'Excoriation / lichenification', type: 'select', options: ['None', 'Mild', 'Moderate', 'Severe'] }] }];
const DERM_DISEASES = {
  eczema: [{ id: 'eczema-history', title: 'Eczema / Dermatitis History', fields: [
    { id: 'ecz_type', label: 'Type', type: 'select', options: ['Atopic dermatitis', 'Contact dermatitis (irritant)', 'Contact dermatitis (allergic)', 'Seborrheic dermatitis', 'Stasis dermatitis', 'Discoid (nummular) eczema', 'Pompholyx (dyshidrotic)', 'Asteatotic eczema'] },
    { id: 'ecz_onset', label: 'Age of onset', type: 'select', options: ['Infancy', 'Childhood', 'Adulthood', 'Recent'] },
    { id: 'ecz_sites', label: 'Common sites affected', type: 'checkbox', options: ['Face/scalp', 'Flexural (antecubital/popliteal)', 'Hands', 'Lower legs', 'Trunk', 'Extensors', 'Perioral'] },
    { id: 'ecz_itch', label: 'Pruritus severity', type: 'select', options: ['None', 'Mild', 'Moderate', 'Severe (disturbs sleep)'] },
    { id: 'ecz_triggers', label: 'Triggers', type: 'checkbox', options: ['Irritants (soap/detergent)', 'Allergens', 'Stress', 'Weather (dry/cold)', 'Sweating', 'Food triggers', 'Wool/fabrics'] },
    { id: 'ecz_asthma', label: 'Personal/family atopy (asthma, hay fever)', type: 'text' },
    { id: 'ecz_treatment', label: 'Current treatment (emollients, steroids, etc.)', type: 'textarea' }, { id: 'ecz_infection', label: 'Secondary infection (impetiginized)', type: 'select', options: ['Yes', 'No'] }] }],
  psoriasis: [{ id: 'psor-history', title: 'Psoriasis History', fields: [
    { id: 'psor_type', label: 'Psoriasis type', type: 'select', options: ['Plaque (psoriasis vulgaris)', 'Guttate', 'Pustular (generalized)', 'Pustular (palmar/plantar)', 'Erythrodermic', 'Inverse/flexural', 'Nail psoriasis', 'Psoriatic arthritis'] },
    { id: 'psor_onset', label: 'Age of onset', type: 'select', options: ['Type I (< 40 years)', 'Type II (> 40 years)'] },
    { id: 'psor_triggers', label: 'Triggers', type: 'checkbox', options: ['Stress', 'Infection (strep throat)', 'Trauma (Koebner)', 'Medications (beta-blockers, lithium)', 'Alcohol', 'Smoking', 'Sunlight (may improve)'] },
    { id: 'psor_plaque', label: 'Plaque characteristics', type: 'checkbox', options: ['Well-defined', 'Erythematous', 'Silvery scale', 'Thick plaques', 'Auspitz sign'] },
    { id: 'psor_nail', label: 'Nail changes', type: 'checkbox', options: ['Pitting', 'Onycholysis', 'Subungual hyperkeratosis', 'Oil-drop discoloration', 'None'] },
    { id: 'psor_arthritis', label: 'Psoriatic arthritis features', type: 'checkbox', options: ['Dactylitis (sausage digit)', 'Enthesitis', 'Sacroiliitis', 'Asymmetrical oligoarthritis', 'DIP joint involvement'] },
    { id: 'psor_bsa', label: 'Body surface area involved', type: 'select', options: ['< 5% (mild)', '5-10% (moderate)', '> 10% (severe)'] },
    { id: 'psor_treatment', label: 'Current/systemic treatment', type: 'textarea' }] }],
  cellulitis: [{ id: 'cellulitis-history', title: 'Cellulitis History', fields: [
    { id: 'cell_site', label: 'Site of infection', type: 'select', options: ['Lower leg', 'Upper limb', 'Face', 'Periorbital', 'Trunk', 'Buttock/perineum'] },
    { id: 'cell_onset', label: 'Onset', type: 'select', options: ['Sudden (< 24 hours)', 'Gradual (1-3 days)'] }, { id: 'cell_spread', label: 'Rate of spread', type: 'text' },
    { id: 'cell_local', label: 'Local signs', type: 'checkbox', options: ['Erythema', 'Swelling/edema', 'Warmth', 'Tenderness', 'Bulla/hemorrhagic bulla', 'Lymphangitis streak', 'Regional lymphadenopathy'] },
    { id: 'cell_systemic', label: 'Systemic signs', type: 'checkbox', options: ['Fever', 'Chills', 'Malaise', 'Tachycardia', 'Hypotension', 'Confusion (sepsis)'] },
    { id: 'cell_risk', label: 'Risk factors', type: 'checkbox', options: ['Diabetes', 'Peripheral vascular disease', 'Lymphedema', 'Venous insufficiency', 'Obesity', 'Recent surgery/trauma', 'Tinea pedis (portal of entry)', 'Immunosuppression'] },
    { id: 'cell_severity', label: 'Severity assessment', type: 'select', options: ['Mild (no systemic signs)', 'Moderate', 'Severe (systemic involvement)', 'Necrotizing fasciitis suspected'] },
    { id: 'cell_imaging', label: 'Imaging (ultrasound/MRI) findings', type: 'textarea' }] }],
  acne: [{ id: 'acne-history', title: 'Acne Vulgaris History', fields: [
    { id: 'acne_onset', label: 'Age of onset', type: 'select', options: ['Pre-adolescent', 'Adolescent', 'Adult-onset', 'Post-adolescent (> 25)'] },
    { id: 'acne_severity', label: 'Severity', type: 'select', options: ['Mild', 'Moderate', 'Severe', 'Very severe (nodulocystic)'] },
    { id: 'acne_lesions', label: 'Lesion types present', type: 'checkbox', options: ['Open comedones (blackheads)', 'Closed comedones (whiteheads)', 'Papules', 'Pustules', 'Nodules', 'Cysts', 'Scarring'] },
    { id: 'acne_sites', label: 'Sites affected', type: 'checkbox', options: ['Face', 'Chest', 'Back', 'Shoulders', 'Neck'] },
    { id: 'acne_hormonal', label: 'Hormonal factors', type: 'checkbox', options: ['Pre-menstrual flare', 'PCOS', 'Pregnancy', 'Hormonal contraception', 'Androgen excess signs (hirsutism)'] },
    { id: 'acne_triggers', label: 'Triggers', type: 'checkbox', options: ['Cosmetics', 'Oily skin products', 'Sweating', 'Stress', 'Diet (high GI)', 'Medications (steroids, lithium)'] },
    { id: 'acne_treatment', label: 'Current/past treatments', type: 'textarea' }] }],
  urticaria: [{ id: 'urticaria-history', title: 'Urticaria / Angioedema History', fields: [
    { id: 'urt_type', label: 'Type', type: 'select', options: ['Acute (< 6 weeks)', 'Chronic (> 6 weeks)', 'Physical (dermatographism)', 'Cholinergic', 'Cold', 'Solar', 'Delayed pressure', 'Aquagenic'] },
    { id: 'urt_wheal', label: 'Wheal characteristics', type: 'textarea' }, { id: 'urt_angioedema', label: 'Angioedema (lips, eyes, tongue, airway)', type: 'select', options: ['Yes', 'No'] },
    { id: 'urt_duration_wheal', label: 'Duration of individual wheals', type: 'select', options: ['< 24 hours', '> 24 hours (urticarial vasculitis)'] },
    { id: 'urt_duration_ep', label: 'Total duration of current episode', type: 'text' },
    { id: 'urt_triggers', label: 'Triggers', type: 'checkbox', options: ['Food (nuts, shellfish, eggs, milk)', 'Drugs (NSAIDs, antibiotics)', 'Insect stings', 'Physical stimuli', 'Infection', 'Stress', 'Heat/cold', 'Exercise', 'Pressure'] },
    { id: 'urt_anaphylaxis', label: 'History of anaphylaxis', type: 'select', options: ['Yes', 'No'] },
    { id: 'urt_treatment', label: 'Current treatment (antihistamines, steroids)', type: 'textarea' }] }],
  fungal_infection: [{ id: 'fungal-history', title: 'Fungal Skin Infection History', fields: [
    { id: 'fung_type', label: 'Type of fungal infection', type: 'select', options: ['Tinea corporis (ringworm)', 'Tinea cruris (jock itch)', 'Tinea pedis (athletes foot)', 'Tinea capitis (scalp)', 'Tinea unguium (onychomycosis)', 'Tinea manuum', 'Tinea faciei', 'Pityriasis versicolor'] },
    { id: 'fung_site', label: 'Site(s) affected', type: 'text' },
    { id: 'fung_appearance', label: 'Lesion appearance', type: 'checkbox', options: ['Annular/ring-shaped', 'Raised border', 'Central clearing', 'Scaling', 'Erythematous', 'Hypopigmented', 'Maceration', 'Blisters'] },
    { id: 'fung_itch', label: 'Pruritus', type: 'select', options: ['None', 'Mild', 'Moderate', 'Severe'] }, { id: 'fung_spread', label: 'Spread to others / pets', type: 'textarea' },
    { id: 'fung_risk', label: 'Risk factors', type: 'checkbox', options: ['Diabetes', 'Immunosuppression', 'Excessive sweating', 'Tight footwear', 'Shared towels/floors', 'Contact with pets', 'Obesity', 'Warm/humid climate'] },
    { id: 'fung_microscopy', label: 'KOH microscopy / culture results', type: 'textarea' }, { id: 'fung_treatment', label: 'Current/past antifungal treatment', type: 'textarea' }] }]
};