# MedHistory

A single-page clinical history-taking assistant for medical professionals. Supports Surgery, Medicine, Paediatrics, and Gynae/Obs specialties with disease-specific question injection.

## Features

- **Specialty-based** forms: Surgery, Medicine, Paediatrics, Gynae/Obs
- **Disease-specific** history questions that appear when a condition is selected
- **Full-page form** – all sections visible at once, scroll to fill
- **Real-time clock** in the toolbar
- **Print / Save PDF** button at the bottom
- **Copy as JSON** – exports all entered data as structured JSON
- **Zero dependencies** – works offline, no build tools needed

## Usage

Open `index.html` in a browser, or use the standalone `med-history.html`.

1. Select a specialty
2. Fill in the sections (Patient Information, Chief Complaint, HOPI, etc.)
3. Optionally select a specific condition to get targeted disease questions
4. Click **Print / Save PDF** or **Copy as JSON**

## File Structure

```
├── index.html              # Multi-file entry point
├── med-history.html        # Standalone single-file version
├── css/style.css           # Styles
├── js/
│   ├── app.js              # Core app logic
│   ├── data/questions.js   # Base history steps
│   └── specialties/
│       ├── surgery.js      # Surgery questions + diseases
│       ├── medicine.js     # Medicine questions + diseases
│       ├── paediatric.js   # Paediatrics questions + diseases
│       └── gynaeobs.js     # Gynae/Obs questions + diseases
└── README.md
```

## Diseases Covered

| Surgery | Medicine | Paediatrics | Gynae/Obs |
|---|---|---|---|
| Acute Abdomen | Diabetes Mellitus | Acute GE | Pre-eclampsia |
| Hernia | Hypertension | Pneumonia/Bronchiolitis | APH |
| Breast Lump | IHD | Meningitis | PPH |
| Trauma | COPD/Asthma | Malaria/Dengue | PID |
| Thyroid | Stroke/TIA | Nephrotic Syndrome | Ovarian Cyst |
| | TB | CHD | Ectopic |
| | Pneumonia | Malnutrition | Menorrhagia |
| | CKD | Febrile Seizures | Infertility |
| | Anemia | | |
