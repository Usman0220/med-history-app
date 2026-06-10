let currentSpecialty = null;
let steps = [];
let formData = {};
const conditionStepId = 'select-condition';

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
  return Object.keys(getDiseaseMap(specialty));
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
        options: ['None / General', ...diseases] }
    ]
  };
}

function getSteps(specialty) {
  const base = JSON.parse(JSON.stringify(BASE_STEPS));
  const extra = getSpecialtyQuestions(specialty);
  const condStep = getConditionStep(specialty);
  return condStep ? [...base, ...extra, condStep] : [...base, ...extra];
}

function startAssessment(specialty) {
  currentSpecialty = specialty;
  formData = {};
  steps = getSteps(specialty);

  document.getElementById('specialty-selector').classList.add('hidden');
  document.getElementById('form-view').classList.remove('hidden');

  const name = specialty.charAt(0).toUpperCase() + specialty.slice(1);
  document.getElementById('toolbar-specialty').textContent = 'Specialty: ' + name;
  document.getElementById('toolbar-condition').textContent = '';

  startClock();
  renderForm();
}

function startClock() {
  var el = document.getElementById('realtime-clock');
  if (!el) return;
  function tick() {
    var now = new Date();
    var pad = function (n) { return String(n).padStart(2, '0'); };
    var dateStr = now.getFullYear() + '-' + pad(now.getMonth() + 1) + '-' + pad(now.getDate());
    var timeStr = pad(now.getHours()) + ':' + pad(now.getMinutes()) + ':' + pad(now.getSeconds());
    el.textContent = dateStr + '  ' + timeStr;
  }
  tick();
  if (window._clockInterval) clearInterval(window._clockInterval);
  window._clockInterval = setInterval(tick, 1000);
}

function renderForm() {
  const container = document.getElementById('form-content');
  let html = '';
  steps.forEach(function (step, i) {
    html += renderSection(step, i + 1);
  });

  html += '<div id="disease-steps-container"></div>';
  html += '<div style="text-align:center;padding:20px 0 40px;display:flex;gap:12px;justify-content:center;flex-wrap:wrap">';
  html += '<button class="btn btn-primary" onclick="printForm()" style="padding:14px 40px;font-size:1rem">Print / Save PDF</button>';
  html += '<button class="btn btn-secondary" onclick="copyJSON()" style="padding:14px 24px;font-size:1rem">Copy as JSON</button>';
  html += '</div>';

  container.innerHTML = html;
  restoreValues();
  attachHandlers();

  if (formData.selected_condition && formData.selected_condition !== 'None / General') {
    renderDiseaseSections();
  }
}

function renderSection(step, number) {
  let html = '<div class="section-card">';
  html += '<div class="section-title">';
  if (number) {
    html += '<span class="section-number">' + number + '</span>';
  }
  html += step.title + '</div>';
  if (step.description) {
    html += '<p style="color:#718096;font-size:0.85rem;margin-bottom:10px;">' + esc(step.description) + '</p>';
  }

  if (step.complaintBuilder) {
    html += '<div id="complaint-items-container">' + renderComplaintItems() + '</div>';
    html += '<div class="complaint-add-form" style="margin-top:16px;padding:12px;background:#f7fafc;border-radius:6px;border:1px dashed #cbd5e0">';
    html += '<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:end">';
    html += '<div class="form-group" style="flex:2;min-width:180px;margin-bottom:0">';
    html += '<label for="new_complaint_name">Add Complaint</label>';
    html += '<select id="new_complaint_name" onchange="toggleCustomComplaint()">';
    html += '<option value="">-- Select --</option>';
    Object.keys(COMPLAINTS).forEach(function (name) {
      html += '<option value="' + esc(name) + '">' + esc(name) + '</option>';
    });
    html += '<option value="__other__">Other (type your own)</option>';
    html += '</select>';
    html += '<input type="text" id="new_complaint_custom" style="display:none;margin-top:6px" placeholder="Enter your complaint">';
    html += '</div>';
    html += '<div class="form-group" style="flex:1;min-width:120px;margin-bottom:0">';
    html += '<label for="new_complaint_duration">Since / For</label>';
    html += '<input type="text" id="new_complaint_duration" placeholder="e.g. 3 days">';
    html += '</div>';
    html += '<button class="btn btn-primary" onclick="addComplaint()" style="padding:8px 16px;margin-bottom:2px">Add</button>';
    html += '</div></div>';
    html += '<div class="form-group" style="margin-top:12px">';
    html += '<label for="detail_chief-complaint">Further Details</label>';
    html += '<textarea id="detail_chief-complaint" name="detail_chief-complaint" style="min-height:50px" placeholder="Additional notes for this section...">' + esc(formData['detail_chief-complaint'] || '') + '</textarea>';
    html += '</div>';
    html += '</div>';
    return html;
  }

  step.fields.forEach(function (field) {
    const value = formData[field.id] !== undefined ? formData[field.id] : (field.type === 'checkbox' ? [] : '');
    const required = field.required ? 'required' : '';
    const hint = field.hint ? '<div class="hint">' + esc(field.hint) + '</div>' : '';

    html += '<div class="form-group">';
    html += '<label for="' + field.id + '">' + esc(field.label) + (field.required ? ' <span style="color:#e53e3e">*</span>' : '') + '</label>';
    html += hint;

    switch (field.type) {
      case 'textarea':
        html += '<textarea id="' + field.id + '" name="' + field.id + '" ' + required + '>' + esc(value) + '</textarea>';
        break;
      case 'select':
        html += '<select id="' + field.id + '" name="' + field.id + '" ' + required + '>';
        html += '<option value="">-- Select --</option>';
        (field.options || []).forEach(function (opt) {
          html += '<option value="' + esc(opt) + '"' + (value === opt ? ' selected' : '') + '>' + esc(opt) + '</option>';
        });
        html += '</select>';
        break;
      case 'checkbox':
        const vals = Array.isArray(value) ? value : [];
        html += '<div class="checkbox-group">';
        (field.options || []).forEach(function (opt) {
          html += '<label><input type="checkbox" name="' + field.id + '" value="' + esc(opt) + '"' + (vals.includes(opt) ? ' checked' : '') + '> ' + esc(opt) + '</label>';
        });
        html += '</div>';
        break;
      case 'radio':
        html += '<div class="radio-group">';
        (field.options || []).forEach(function (opt) {
          html += '<label><input type="radio" name="' + field.id + '" value="' + esc(opt) + '"' + (value === opt ? ' checked' : '') + ' ' + required + '> ' + esc(opt) + '</label>';
        });
        html += '</div>';
        break;
      default:
        html += '<input type="' + (field.type || 'text') + '" id="' + field.id + '" name="' + field.id + '" value="' + esc(value) + '" ' + required + '>';
    }

    html += '</div>';
  });

  html += '<div class="form-group" style="margin-top:12px">';
  html += '<label for="detail_' + step.id + '">Further Details</label>';
  html += '<textarea id="detail_' + step.id + '" name="detail_' + step.id + '" style="min-height:50px" placeholder="Additional notes for this section...">' + esc(formData['detail_' + step.id] || '') + '</textarea>';
  html += '</div>';

  html += '</div>';
  return html;
}

var HOPI_FIELDS = [
  { id: 'site', label: 'Site / Location', type: 'text' },
  { id: 'character', label: 'Character (quality)', type: 'textarea' },
  { id: 'radiation', label: 'Radiation', type: 'text', hint: 'Does it spread anywhere?' },
  { id: 'assoc_symptoms', label: 'Associated symptoms', type: 'textarea' },
  { id: 'timing', label: 'Timing / frequency', type: 'textarea' },
  { id: 'exacerbating', label: 'What makes it worse?', type: 'textarea' },
  { id: 'relieving', label: 'What makes it better?', type: 'textarea' },
  { id: 'previous_episodes', label: 'Previous similar episodes?', type: 'text' },
  { id: 'treatment_tried', label: 'Any treatment tried?', type: 'textarea' }
];

function renderComplaintItems() {
  const complaints = formData.complaints || [];
  if (!complaints.length) return '<p style="color:#a0aec0;font-size:0.85rem">No complaints added yet.</p>';
  let html = '';
  complaints.forEach(function (c, i) {
    var cid = c._id;
    html += '<div class="complaint-item" style="margin-bottom:16px;padding:12px;background:#f7fafc;border-radius:6px;border:1px solid #e2e8f0">';
    html += '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">';
    html += '<div><strong>' + esc(c.name) + '</strong> <span style="color:#718096;font-size:0.85rem">(Since: ' + esc(c.duration) + ')</span></div>';
    html += '<button onclick="removeComplaint(' + i + ')" style="background:none;border:1px solid #e53e3e;color:#e53e3e;border-radius:4px;padding:2px 10px;cursor:pointer;font-size:0.8rem">Remove</button>';
    html += '</div>';

    // Complaint-specific fields (fever pattern, vomiting content, etc.)
    var complaintFields = COMPLAINTS[c.name] || [];
    complaintFields.forEach(function (field) {
      const value = formData[field.id] !== undefined ? formData[field.id] : (field.type === 'checkbox' ? [] : '');
      const required = field.required ? 'required' : '';
      const hint = field.hint ? '<div class="hint">' + esc(field.hint) + '</div>' : '';
      html += '<div class="form-group">';
      html += '<label for="' + field.id + '">' + esc(field.label) + '</label>';
      html += hint;
      switch (field.type) {
        case 'textarea':
          html += '<textarea id="' + field.id + '" name="' + field.id + '" ' + required + '>' + esc(value) + '</textarea>';
          break;
        case 'select':
          html += '<select id="' + field.id + '" name="' + field.id + '" ' + required + '>';
          html += '<option value="">-- Select --</option>';
          (field.options || []).forEach(function (opt) {
            html += '<option value="' + esc(opt) + '"' + (value === opt ? ' selected' : '') + '>' + esc(opt) + '</option>';
          });
          html += '</select>';
          break;
        case 'checkbox':
          const vals = Array.isArray(value) ? value : [];
          html += '<div class="checkbox-group">';
          (field.options || []).forEach(function (opt) {
            html += '<label><input type="checkbox" name="' + field.id + '" value="' + esc(opt) + '"' + (vals.includes(opt) ? ' checked' : '') + '> ' + esc(opt) + '</label>';
          });
          html += '</div>';
          break;
        default:
          html += '<input type="' + (field.type || 'text') + '" id="' + field.id + '" name="' + field.id + '" value="' + esc(value) + '" ' + required + '>';
      }
      html += '</div>';
    });

    // Per-complaint HOPI fields
    html += '<div style="margin-top:12px;padding-top:10px;border-top:1px solid #e2e8f0">';
    html += '<div style="font-size:0.85rem;font-weight:600;color:#2b6cb0;margin-bottom:8px">History of Presenting Illness - ' + esc(c.name) + '</div>';
    HOPI_FIELDS.forEach(function (field) {
      var fid = 'hopi_' + cid + '_' + field.id;
      const value = formData[fid] !== undefined ? formData[fid] : (field.type === 'checkbox' ? [] : '');
      const required = field.required ? 'required' : '';
      const hint = field.hint ? '<div class="hint">' + esc(field.hint) + '</div>' : '';
      html += '<div class="form-group">';
      html += '<label for="' + fid + '">' + esc(field.label) + '</label>';
      html += hint;
      switch (field.type) {
        case 'textarea':
          html += '<textarea id="' + fid + '" name="' + fid + '" ' + required + '>' + esc(value) + '</textarea>';
          break;
        case 'select':
          html += '<select id="' + fid + '" name="' + fid + '" ' + required + '>';
          html += '<option value="">-- Select --</option>';
          (field.options || []).forEach(function (opt) {
            html += '<option value="' + esc(opt) + '"' + (value === opt ? ' selected' : '') + '>' + esc(opt) + '</option>';
          });
          html += '</select>';
          break;
        case 'checkbox':
          const vals = Array.isArray(value) ? value : [];
          html += '<div class="checkbox-group">';
          (field.options || []).forEach(function (opt) {
            html += '<label><input type="checkbox" name="' + fid + '" value="' + esc(opt) + '"' + (vals.includes(opt) ? ' checked' : '') + '> ' + esc(opt) + '</label>';
          });
          html += '</div>';
          break;
        default:
          html += '<input type="' + (field.type || 'text') + '" id="' + fid + '" name="' + fid + '" value="' + esc(value) + '" ' + required + '>';
      }
      html += '</div>';
    });
    html += '</div>';

    html += '</div>';
  });
  return html;
}

function toggleCustomComplaint() {
  const sel = document.getElementById('new_complaint_name');
  const custom = document.getElementById('new_complaint_custom');
  custom.style.display = sel.value === '__other__' ? 'block' : 'none';
}

function addComplaint() {
  const sel = document.getElementById('new_complaint_name');
  const custom = document.getElementById('new_complaint_custom');
  const duration = document.getElementById('new_complaint_duration').value;
  var name = sel.value === '__other__' ? custom.value.trim() : sel.value;
  if (!name || !duration.trim()) return;
  if (!formData.complaints) formData.complaints = [];
  formData.complaints.push({ _id: nextId(), name: name, duration: duration });
  sel.value = '';
  custom.value = '';
  custom.style.display = 'none';
  document.getElementById('new_complaint_duration').value = '';
  refreshComplaints();
}

var _nextId = 0;
function nextId() { return 'c' + (++_nextId); }

function removeComplaint(index) {
  if (!formData.complaints) return;
  formData.complaints.splice(index, 1);
  refreshComplaints();
}

function refreshComplaints() {
  const container = document.getElementById('complaint-items-container');
  if (!container) return;
  container.innerHTML = renderComplaintItems();
  attachHandlers();
}

function esc(str) {
  return String(str).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function restoreValues() {
  Object.keys(formData).forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    const val = formData[id];
    if (el.type === 'checkbox' || el.type === 'radio') return;
    el.value = Array.isArray(val) ? val.join(', ') : val;
  });
}

function attachHandlers() {
  document.querySelectorAll('#form-content input:not([type="checkbox"]):not([type="radio"]), #form-content textarea').forEach(el => {
    el.addEventListener('input', function () {
      formData[this.id] = this.value;
    });
  });

  document.querySelectorAll('#form-content select').forEach(el => {
    el.addEventListener('change', function () {
      formData[this.id] = this.value;
      if (this.id === 'selected_condition') {
        updateConditionLabel();
        renderDiseaseSections();
      }
    });
  });

  document.querySelectorAll('input[type="checkbox"]').forEach(el => {
    el.addEventListener('change', function () {
      const name = this.name;
      const checked = document.querySelectorAll('input[name="' + name + '"]:checked');
      formData[name] = Array.from(checked).map(cb => cb.value);
    });
  });

  document.querySelectorAll('input[type="radio"]').forEach(el => {
    el.addEventListener('change', function () {
      formData[this.name] = this.value;
    });
  });
}

function renderDiseaseSections() {
  const container = document.getElementById('disease-steps-container');
  if (!container) return;
  container.innerHTML = '';

  const condition = formData.selected_condition;
  if (!condition || condition === 'None / General') return;

  const diseaseSteps = getDiseaseSteps(currentSpecialty, condition);
  if (!diseaseSteps.length) return;

  let html = '';
  diseaseSteps.forEach(step => {
    html += renderSection(step, null);
  });

  container.innerHTML = html;
  restoreValues();
  attachHandlers();
}

function updateConditionLabel() {
  const condition = formData.selected_condition;
  document.getElementById('toolbar-condition').textContent =
    condition && condition !== 'None / General' ? 'Condition: ' + condition : '';
}

function printForm() {
  window.print();
}

function copyJSON() {
  var now = new Date();
  var pad = function (n) { return String(n).padStart(2, '0'); };
  var dateStr = now.getFullYear() + '-' + pad(now.getMonth() + 1) + '-' + pad(now.getDate());
  var timeStr = pad(now.getHours()) + ':' + pad(now.getMinutes()) + ':' + pad(now.getSeconds());
  const output = {
    specialty: currentSpecialty,
    date: dateStr,
    time: timeStr,
    data: {}
  };
  Object.keys(formData).forEach(key => {
    const val = formData[key];
    if (val && (typeof val === 'string' ? val.trim() !== '' : val.length > 0)) {
      output.data[key] = val;
    }
  });
  const text = JSON.stringify(output, null, 2);
  copyText(text);
}

function copyText(text) {
  const done = function () {
    const btn = document.querySelector('[onclick="copyJSON()"]');
    const orig = btn.textContent;
    btn.textContent = 'Copied!';
    setTimeout(function () { btn.textContent = orig; }, 2000);
  };

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(done).catch(function () {
      fallbackCopy(text, done);
    });
  } else {
    fallbackCopy(text, done);
  }
}

function fallbackCopy(text, done) {
  var ta = document.createElement('textarea');
  ta.value = text;
  ta.style.position = 'fixed';
  ta.style.opacity = '0';
  document.body.appendChild(ta);
  ta.select();
  try {
    if (document.execCommand('copy')) {
      done();
    } else {
      alert('Copy failed. Please select the JSON manually (browser restriction). Use HTTPS or localhost.');
    }
  } catch (e) {
    alert('Copy failed: ' + e.message + '. Use HTTPS or localhost, or copy manually.');
  }
  document.body.removeChild(ta);
}

function resetApp() {
  currentSpecialty = null;
  steps = [];
  formData = {};

  document.getElementById('specialty-selector').classList.remove('hidden');
  document.getElementById('form-view').classList.add('hidden');
  document.getElementById('toolbar-condition').textContent = '';
  if (window._clockInterval) clearInterval(window._clockInterval);
}
