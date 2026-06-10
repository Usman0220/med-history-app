let currentSpecialty = null;
let currentStep = 0;
let steps = [];
let formData = {};
let conditionStepId = 'select-condition';

function getSpecialtyQuestions(specialty) {
  switch (specialty) {
    case 'surgery': return SURGERY_QUESTIONS || [];
    case 'medicine': return MEDICINE_QUESTIONS || [];
    case 'paediatric': return PAEDIATRIC_QUESTIONS || [];
    case 'gynaeobs': return GYNAEOBS_QUESTIONS || [];
    default: return [];
  }
}

function getDiseaseMap(specialty) {
  switch (specialty) {
    case 'surgery': return SURGERY_DISEASES || {};
    case 'medicine': return MEDICINE_DISEASES || {};
    case 'paediatric': return PAEDIATRIC_DISEASES || {};
    case 'gynaeobs': return GYNAEOBS_DISEASES || {};
    default: return {};
  }
}

function getDiseaseSteps(specialty, diseaseId) {
  const map = getDiseaseMap(specialty);
  if (!map || !map[diseaseId]) return [];
  return map[diseaseId].map(step => JSON.parse(JSON.stringify(step)));
}

function getDiseaseList(specialty) {
  const map = getDiseaseMap(specialty);
  return Object.keys(map);
}

function getConditionStep(specialty) {
  const diseases = getDiseaseList(specialty);
  if (!diseases.length) return null;
  return {
    id: conditionStepId,
    title: 'Select Condition / Disease',
    description: 'Choose the specific condition to get disease-focused history questions',
    fields: [
      { id: 'selected_condition', label: 'Condition', type: 'select', required: true,
        options: ['None / General', ...diseases.map(d => d)] }
    ]
  };
}

function getSteps(specialty) {
  const base = JSON.parse(JSON.stringify(BASE_STEPS));
  const extra = getSpecialtyQuestions(specialty);
  const condStep = getConditionStep(specialty);
  if (condStep) {
    return [...base, ...extra, condStep];
  }
  return [...base, ...extra];
}

function injectConditionSteps() {
  const condition = formData.selected_condition;
  if (!condition || condition === 'None / General') return;
  const diseaseSteps = getDiseaseSteps(currentSpecialty, condition);
  if (!diseaseSteps.length) return;
  const condIdx = steps.findIndex(s => s.id === conditionStepId);
  if (condIdx === -1) return;
  steps.splice(condIdx + 1, 0, ...diseaseSteps);
}

function startAssessment(specialty) {
  currentSpecialty = specialty;
  currentStep = 0;
  formData = {};
  steps = getSteps(specialty);

  document.getElementById('specialty-selector').classList.add('hidden');
  document.getElementById('assessment-view').classList.remove('hidden');
  document.getElementById('summary-view').classList.add('hidden');

  renderStep();
}

function renderStep() {
  const step = steps[currentStep];
  if (!step) return;

  renderStepIndicator();
  updateProgress();

  const container = document.getElementById('step-content');
  let html = `<h2>${currentStep + 1}. ${step.title}</h2>`;
  if (step.description) {
    html += `<p style="color:#718096;font-size:0.9rem;margin-bottom:16px;">${step.description}</p>`;
  }

  step.fields.forEach(field => {
    const value = formData[field.id] || '';
    const required = field.required ? 'required' : '';
    const hint = field.hint ? `<div class="hint">${field.hint}</div>` : '';
    const attrs = field.attrs ? Object.entries(field.attrs).map(([k, v]) => `${k}="${v}"`).join(' ') : '';

    html += `<div class="form-group">`;
    html += `<label for="${field.id}">${field.label}${field.required ? ' <span style="color:#e53e3e">*</span>' : ''}</label>`;
    html += hint;

    switch (field.type) {
      case 'textarea':
        html += `<textarea id="${field.id}" name="${field.id}" ${required} ${attrs}>${value}</textarea>`;
        break;
      case 'select':
        html += `<select id="${field.id}" name="${field.id}" ${required}>`;
        html += `<option value="">-- Select --</option>`;
        (field.options || []).forEach(opt => {
          const sel = value === opt ? 'selected' : '';
          html += `<option value="${opt}" ${sel}>${opt}</option>`;
        });
        html += `</select>`;
        break;
      case 'checkbox': {
        const vals = Array.isArray(value) ? value : [];
        html += `<div class="checkbox-group">`;
        (field.options || []).forEach(opt => {
          const checked = vals.includes(opt) ? 'checked' : '';
          html += `<label><input type="checkbox" name="${field.id}" value="${opt}" ${checked}> ${opt}</label>`;
        });
        html += `</div>`;
        break;
      }
      case 'radio': {
        html += `<div class="radio-group">`;
        (field.options || []).forEach(opt => {
          const checked = value === opt ? 'checked' : '';
          html += `<label><input type="radio" name="${field.id}" value="${opt}" ${checked} ${required}> ${opt}</label>`;
        });
        html += `</div>`;
        break;
      }
      default:
        html += `<input type="${field.type}" id="${field.id}" name="${field.id}" value="${value}" ${required} ${attrs}>`;
    }

    html += `</div>`;
  });

  container.innerHTML = html;

  document.getElementById('prev-btn').disabled = currentStep === 0;
  document.getElementById('next-btn').classList.toggle('hidden', currentStep >= steps.length - 1);
  document.getElementById('submit-btn').classList.toggle('hidden', currentStep < steps.length - 1);
}

function renderStepIndicator() {
  const container = document.getElementById('step-indicator');
  let html = '';
  steps.forEach((step, i) => {
    let cls = 'step-dot';
    if (i === currentStep) cls += ' active';
    else if (i < currentStep) cls += ' completed';
    html += `<div class="${cls}" onclick="goToStep(${i})">${i + 1}. ${step.title}</div>`;
  });
  container.innerHTML = html;
}

function updateProgress() {
  const pct = ((currentStep + 1) / steps.length) * 100;
  document.getElementById('progress-fill').style.width = `${pct}%`;
  document.getElementById('progress-text').textContent = `Step ${currentStep + 1} of ${steps.length}`;
}

function saveCurrentStep() {
  const step = steps[currentStep];
  if (!step) return true;

  let allValid = true;

  step.fields.forEach(field => {
    const el = document.getElementById(field.id);
    if (!el) return;

    let value;
    if (field.type === 'checkbox') {
      const checked = document.querySelectorAll(`input[name="${field.id}"]:checked`);
      value = Array.from(checked).map(cb => cb.value);
    } else {
      value = el.value;
    }

    formData[field.id] = value;

    if (field.required) {
      const isValid = field.type === 'checkbox'
        ? value.length > 0
        : value && value.trim() !== '';
      if (!isValid) {
        allValid = false;
        el.style.borderColor = '#e53e3e';
      } else {
        el.style.borderColor = '';
      }
    }
  });

  return allValid;
}

function nextStep() {
  if (!saveCurrentStep()) return;

  if (steps[currentStep] && steps[currentStep].id === conditionStepId) {
    injectConditionSteps();
  }

  if (currentStep < steps.length - 1) {
    currentStep++;
    renderStep();
  }
}

function prevStep() {
  saveCurrentStep();
  if (currentStep > 0) {
    currentStep--;
    renderStep();
  }
}

function goToStep(index) {
  if (index === currentStep) return;
  if (!saveCurrentStep()) return;
  currentStep = index;
  renderStep();
}

function submitAssessment() {
  if (!saveCurrentStep()) {
    alert('Please fill in all required fields before completing.');
    return;
  }

  document.getElementById('assessment-view').classList.add('hidden');
  document.getElementById('summary-view').classList.remove('hidden');

  renderSummary();
}

function renderSummary() {
  const container = document.getElementById('summary-content');
  const specialtyName = currentSpecialty.charAt(0).toUpperCase() + currentSpecialty.slice(1);

  let html = `<p><strong>Specialty:</strong> ${specialtyName}</p>`;
  html += `<p><strong>Date:</strong> ${new Date().toLocaleDateString()}</p>`;
  if (formData.selected_condition && formData.selected_condition !== 'None / General') {
    html += `<p><strong>Condition:</strong> ${formData.selected_condition}</p>`;
  }
  html += `<hr style="margin: 12px 0; border-color: #e2e8f0;">`;

  steps.forEach(step => {
    let hasData = false;
    let sectionHtml = '';

    step.fields.forEach(field => {
      const val = formData[field.id];
      if (val && (typeof val === 'string' ? val.trim() !== '' : val.length > 0)) {
        hasData = true;
        const displayVal = Array.isArray(val) ? val.join(', ') : val;
        sectionHtml += `<p><strong>${field.label}:</strong> ${displayVal}</p>`;
      }
    });

    if (hasData) {
      html += `<h3>${step.title}</h3>${sectionHtml}`;
    }
  });

  if (html.includes('<h3>')) {
    container.innerHTML = html;
  } else {
    container.innerHTML = html + '<p><em>No data entered.</em></p>';
  }
}

function printSummary() {
  window.print();
}

function savePDF() {
  window.print();
}

function resetApp() {
  currentSpecialty = null;
  currentStep = 0;
  steps = [];
  formData = {};

  document.getElementById('specialty-selector').classList.remove('hidden');
  document.getElementById('assessment-view').classList.add('hidden');
  document.getElementById('summary-view').classList.add('hidden');
}
