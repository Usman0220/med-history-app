// == APP ==
let currentSpecialty = null;
let steps = [];
let formData = {};
const conditionStepId = 'select-condition';
const LS_CURRENT = 'medHistory_current';
const LS_HISTORY = 'medHistory_history';

function isTeaching() { return localStorage.getItem('medHistory_teaching') === '1'; }
function toggleTeaching() {
  var on = !isTeaching();
  localStorage.setItem('medHistory_teaching', on ? '1' : '');
  var btn = document.getElementById('teach-toggle');
  if (btn) { btn.style.background = on ? '#dd6b20' : 'transparent'; btn.style.color = on ? '#fff' : ''; }
  renderForm();
}

function saveCurrentToLS() {
  if (!currentSpecialty) { console.log('saveCurrentToLS: no currentSpecialty, skipping'); return; }
  try {
    var data = { specialty: currentSpecialty, formData: formData, timestamp: new Date().toISOString() };
    localStorage.setItem(LS_CURRENT, JSON.stringify(data));
    console.log('saveCurrentToLS: saved', data.specialty, data.timestamp);
  } catch (e) { console.log('saveCurrentToLS error:', e); }
}
function loadCurrentFromLS() {
  try { var r = localStorage.getItem(LS_CURRENT); console.log('loadCurrentFromLS: raw=', r); return r ? JSON.parse(r) : null; } catch (e) { console.log('loadCurrentFromLS error:', e); return null; }
}
function clearCurrentFromLS() { console.log('clearCurrentFromLS'); localStorage.removeItem(LS_CURRENT); }
function saveToHistory() {
  try {
    var raw = localStorage.getItem(LS_HISTORY);
    var h = raw ? JSON.parse(raw) : [];
    h.push({ id: Date.now(), specialty: currentSpecialty, formData: JSON.parse(JSON.stringify(formData)), date: new Date().toISOString() });
    if (h.length > 30) h = h.slice(h.length - 30);
    localStorage.setItem(LS_HISTORY, JSON.stringify(h));
    console.log('saveToHistory: saved, total entries:', h.length);
  } catch (e) { console.log('saveToHistory error:', e); }
}
function getHistory() {
  try { var r = localStorage.getItem(LS_HISTORY); return r ? JSON.parse(r) : []; } catch (e) { return []; }
}
function renderHistoryList() {
  var c = document.getElementById('history-list');
  if (!c) return;
  var h = getHistory();
  if (!h.length) { c.innerHTML = ''; return; }
  var html = '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px">';
  html += '<h2 style="font-size:1rem;margin:0">Past Assessments</h2>';
  html += '<button onclick="clearAllHistory();return false" style="background:none;border:1px solid #e53e3e;color:#e53e3e;border-radius:4px;padding:2px 8px;font-size:0.8rem;cursor:pointer">Clear All</button></div>';
  h.slice().reverse().forEach(function (item) {
    var t = new Date(item.date);
    var ds = t.getFullYear()+'-'+String(t.getMonth()+1).padStart(2,'0')+'-'+String(t.getDate()).padStart(2,'0')+' '+String(t.getHours()).padStart(2,'0')+':'+String(t.getMinutes()).padStart(2,'0');
    html += '<div class="history-item">';
    html += '<span style="flex:1;cursor:pointer" onclick="loadHistoryItem('+item.id+')">';
    html += '<span style="font-weight:600;text-transform:capitalize">'+esc(item.specialty)+'</span>';
    html += ' <span style="color:#718096;font-size:0.85rem">'+ds+'</span></span>';
    html += '<button onclick="deleteHistoryItem('+item.id+');return false" style="background:none;border:none;color:#e53e3e;cursor:pointer;font-size:0.85rem;padding:0 4px" title="Delete">&times;</button></div>';
  });
  c.innerHTML = html;
}
function loadHistoryItem(id) {
  var h = getHistory();
  var item = null;
  for (var i=0;i<h.length;i++){if(h[i].id===id){item=h[i];break;}}
  if (!item) return;
  currentSpecialty = item.specialty;
  formData = item.formData || {};
  steps = getSteps(currentSpecialty);
  document.getElementById('specialty-selector').classList.add('hidden');
  var rb=document.getElementById('restore-banner');if(rb)rb.classList.add('hidden');
  document.getElementById('form-view').classList.remove('hidden');
  var name = item.specialty.charAt(0).toUpperCase()+item.specialty.slice(1);
  document.getElementById('toolbar-specialty').textContent = 'Specialty: '+name;
  document.getElementById('toolbar-condition').textContent='';
  startClock();renderForm();
}
function deleteHistoryItem(id) {
  var h=getHistory();h=h.filter(function(item){return item.id!==id});
  localStorage.setItem(LS_HISTORY,JSON.stringify(h));renderHistoryList();
}
function clearAllHistory() {
  if(!confirm('Delete all saved assessments?'))return;
  localStorage.removeItem(LS_HISTORY);renderHistoryList();
}
function checkSavedData() {
  var s = loadCurrentFromLS();
  console.log('checkSavedData: saved=', s);
  var rb = document.getElementById('restore-banner');
  console.log('checkSavedData: restore-banner element=', rb);
  if (s && rb) {
    var t=new Date(s.timestamp), ds=t.toLocaleString();
    rb.innerHTML = 'Unsaved assessment ('+s.specialty+') from '+ds+' &mdash; <a href="#" onclick="restoreAssessment();return false">Continue</a> | <a href="#" onclick="deleteSavedAssessment();return false" style="color:#e53e3e">Discard</a>';
    rb.classList.remove('hidden');
    console.log('checkSavedData: banner shown');
  } else {
    console.log('checkSavedData: banner NOT shown — saved=', !!s, 'rb=', !!rb);
  }
  renderHistoryList();
}
function restoreAssessment() {
  var s=loadCurrentFromLS();if(!s)return;
  currentSpecialty=s.specialty;formData=s.formData||{};steps=getSteps(currentSpecialty);
  document.getElementById('specialty-selector').classList.add('hidden');
  var rb=document.getElementById('restore-banner');if(rb)rb.classList.add('hidden');
  document.getElementById('form-view').classList.remove('hidden');
  var name=s.specialty.charAt(0).toUpperCase()+s.specialty.slice(1);
  document.getElementById('toolbar-specialty').textContent='Specialty: '+name;
  document.getElementById('toolbar-condition').textContent='';
  startClock();renderForm();
}
function deleteSavedAssessment() {clearCurrentFromLS();var rb=document.getElementById('restore-banner');if(rb)rb.classList.add('hidden');}

function getSpecialtyQuestions(specialty) {
  switch (specialty) {
    case 'surgery': return SURGERY_QUESTIONS || [];
    case 'medicine': return MEDICINE_QUESTIONS || [];
    case 'paediatric': return PAEDIATRIC_QUESTIONS || [];
    case 'gynaeobs': return GYNAEOBS_QUESTIONS || [];
    case 'ortho': return ORTHO_QUESTIONS || [];
    case 'ent': return ENT_QUESTIONS || [];
    case 'ophthalmology': return OPHTHALMOLOGY_QUESTIONS || [];
    case 'psych': return PSYCH_QUESTIONS || [];
    case 'derm': return DERM_QUESTIONS || [];
    default: return [];
  }
}

function getDiseaseMap(specialty) {
  switch (specialty) {
    case 'surgery': return SURGERY_DISEASES || {};
    case 'medicine': return MEDICINE_DISEASES || {};
    case 'paediatric': return PAEDIATRIC_DISEASES || {};
    case 'gynaeobs': return GYNAEOBS_DISEASES || {};
    case 'ortho': return ORTHO_DISEASES || {};
    case 'ent': return ENT_DISEASES || {};
    case 'ophthalmology': return OPHTHALMOLOGY_DISEASES || {};
    case 'psych': return PSYCH_DISEASES || {};
    case 'derm': return DERM_DISEASES || {};
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
  const steps = condStep ? [...base, ...extra, condStep] : [...base, ...extra];
  steps.push({ id: 'clinical-scores', title: 'Clinical Scoring Calculators', scoringWidgets: true });
  return steps;
}

function startAssessment(specialty) {
  clearCurrentFromLS();
  currentSpecialty = specialty;
  formData = {};
  steps = getSteps(specialty);

  document.getElementById('specialty-selector').classList.add('hidden');
  var rb = document.getElementById('restore-banner');
  if (rb) rb.classList.add('hidden');
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

  steps.forEach((step, i) => {
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
  if (isTeaching() && TEACHING.sections[step.id]) {
    html += '<div class="teach-tip">' + esc(TEACHING.sections[step.id]) + '</div>';
  }

  if (step.scoringWidgets) {
    html += renderScoringCalculators();
    html += '</div>';
    return html;
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
    var teachHint = '';
    if (isTeaching() && TEACHING.fields[field.id]) {
      teachHint = '<div class="teach-hint">' + esc(TEACHING.fields[field.id]) + '</div>';
    }

    html += '<div class="form-group">';
    html += '<label for="' + field.id + '">' + esc(field.label) + (field.required ? ' <span style="color:#e53e3e">*</span>' : '') + '</label>';
    html += hint;
    html += teachHint;

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

    var complaintFields = COMPLAINTS[c.name] || [];
    if (isTeaching() && TEACHING.differentials[c.name]) {
      html += '<div class="teach-tip" style="margin-bottom:10px">Differentials: ' + esc(TEACHING.differentials[c.name].join('; ')) + '</div>';
    }
    complaintFields.forEach(function (field) {
      const value = formData[field.id] !== undefined ? formData[field.id] : (field.type === 'checkbox' ? [] : '');
      const required = field.required ? 'required' : '';
      const hint = field.hint ? '<div class="hint">' + esc(field.hint) + '</div>' : '';
      var teachHint = '';
      if (isTeaching() && TEACHING.fields[field.id]) {
        teachHint = '<div class="teach-hint">' + esc(TEACHING.fields[field.id]) + '</div>';
      }
      html += '<div class="form-group">';
      html += '<label for="' + field.id + '">' + esc(field.label) + '</label>';
      html += hint;
      html += teachHint;
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

    html += '<div style="margin-top:12px;padding-top:10px;border-top:1px solid #e2e8f0">';
    html += '<div style="font-size:0.85rem;font-weight:600;color:#2b6cb0;margin-bottom:8px">History of Presenting Illness - ' + esc(c.name) + '</div>';
    HOPI_FIELDS.forEach(function (field) {
      var fid = 'hopi_' + cid + '_' + field.id;
      const value = formData[fid] !== undefined ? formData[fid] : (field.type === 'checkbox' ? [] : '');
      const required = field.required ? 'required' : '';
      const hint = field.hint ? '<div class="hint">' + esc(field.hint) + '</div>' : '';
      var teachHint = '';
      if (isTeaching() && TEACHING.fields[field.id]) {
        teachHint = '<div class="teach-hint">' + esc(TEACHING.fields[field.id]) + '</div>';
      }
      html += '<div class="form-group">';
      html += '<label for="' + fid + '">' + esc(field.label) + '</label>';
      html += hint;
      html += teachHint;
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
      saveCurrentToLS();
    });
  });

  document.querySelectorAll('#form-content select').forEach(el => {
    el.addEventListener('change', function () {
      formData[this.id] = this.value;
      saveCurrentToLS();
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
      saveCurrentToLS();
    });
  });

  document.querySelectorAll('input[type="radio"]').forEach(el => {
    el.addEventListener('change', function () {
      formData[this.name] = this.value;
      saveCurrentToLS();
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
  saveToHistory();
  clearCurrentFromLS();
  document.querySelectorAll('.section-card').forEach(function (card) {
    var has = false;
    card.querySelectorAll('textarea, input[type="text"], input[type="number"], input[type="tel"], input[type="date"], input[type="datetime-local"], select').forEach(function (el) {
      if (el.value && el.value.trim()) has = true;
    });
    card.querySelectorAll('input[type="checkbox"]:checked, input[type="radio"]:checked').forEach(function () { has = true; });
    if (!has) card.setAttribute('data-print-empty', '');
  });
  window.print();
  setTimeout(function () {
    document.querySelectorAll('[data-print-empty]').forEach(function (el) { el.removeAttribute('data-print-empty'); });
  }, 100);
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

var SCORING_CALCULATORS = [
  {
    id: 'gcs',
    title: 'Glasgow Coma Scale (GCS)',
    fields: [
      { label: 'Eye opening', inputs: [{v:'1',t:'None'},{v:'2',t:'To pain'},{v:'3',t:'To speech'},{v:'4',t:'Spontaneous'}] },
      { label: 'Verbal response', inputs: [{v:'1',t:'None'},{v:'2',t:'Incomprehensible sounds'},{v:'3',t:'Inappropriate words'},{v:'4',t:'Confused'},{v:'5',t:'Oriented'}] },
      { label: 'Motor response', inputs: [{v:'1',t:'None'},{v:'2',t:'Extension (decerebrate)'},{v:'3',t:'Flexion (decorticate)'},{v:'4',t:'Withdrawal'},{v:'5',t:'Localizes pain'},{v:'6',t:'Obeys commands'}] }
    ],
    interpret: function(s) { if (s>=15) return 'Normal (15)'; if (s>=13) return 'Mild (13-14)'; if (s>=9) return 'Moderate (9-12)'; return 'Severe (3-8) — critical'; }
  },
  {
    id: 'curb65',
    title: 'CURB-65 (Pneumonia Severity)',
    fields: [
      { label: 'Confusion (new disorientation)', inputs: [{v:'0',t:'No'},{v:'1',t:'Yes'}] },
      { label: 'Urea > 7 mmol/L (BUN > 20 mg/dL)', inputs: [{v:'0',t:'No'},{v:'1',t:'Yes'}] },
      { label: 'Respiratory rate >= 30/min', inputs: [{v:'0',t:'No'},{v:'1',t:'Yes'}] },
      { label: 'BP < 90/60 (systolic < 90 or diastolic <= 60)', inputs: [{v:'0',t:'No'},{v:'1',t:'Yes'}] },
      { label: 'Age >= 65 years', inputs: [{v:'0',t:'No'},{v:'1',t:'Yes'}] }
    ],
    interpret: function(s) { if (s<=1) return 'Score ' + s + ' — Low risk. Outpatient management.'; if (s==2) return 'Score 2 — Moderate risk. Hospital admission.'; return 'Score ' + s + ' — Severe. ICU admission.'; }
  },
  {
    id: 'wells_dvt',
    title: 'Wells Score for DVT',
    fields: [
      { label: 'Active cancer (treatment, palliation, or diagnosed <6 months)', inputs: [{v:'0',t:'No'},{v:'1',t:'Yes'}] },
      { label: 'Paralysis, paresis, or recent plaster immobilization of lower extremity', inputs: [{v:'0',t:'No'},{v:'1',t:'Yes'}] },
      { label: 'Recently bedridden >3 days or major surgery <4 weeks', inputs: [{v:'0',t:'No'},{v:'1',t:'Yes'}] },
      { label: 'Localized tenderness along distribution of deep veins', inputs: [{v:'0',t:'No'},{v:'1',t:'Yes'}] },
      { label: 'Entire leg swollen', inputs: [{v:'0',t:'No'},{v:'1',t:'Yes'}] },
      { label: 'Calf swelling >3 cm compared to asymptomatic leg', inputs: [{v:'0',t:'No'},{v:'1',t:'Yes'}] },
      { label: 'Pitting edema confined to symptomatic leg', inputs: [{v:'0',t:'No'},{v:'1',t:'Yes'}] },
      { label: 'Collateral superficial veins (non-varicose)', inputs: [{v:'0',t:'No'},{v:'1',t:'Yes'}] },
      { label: 'Alternative diagnosis as likely or more likely than DVT', inputs: [{v:'0',t:'No'},{v:'-2',t:'Yes'}] }
    ],
    interpret: function(s) { if (s<=0) return 'Score ' + s + ' — Low probability (DVT unlikely).'; if (s<=2) return 'Score ' + s + ' — Moderate probability.'; return 'Score ' + s + ' — High probability (DVT likely).'; }
  },
  {
    id: 'wells_pe',
    title: 'Wells Score for PE',
    fields: [
      { label: 'Clinical signs of DVT (swelling, pain, tenderness)', inputs: [{v:'0',t:'No'},{v:'3',t:'Yes'}] },
      { label: 'PE is #1 diagnosis, or equally likely', inputs: [{v:'0',t:'No'},{v:'3',t:'Yes'}] },
      { label: 'Heart rate > 100 bpm', inputs: [{v:'0',t:'No'},{v:'1.5',t:'Yes'}] },
      { label: 'Immobilization / surgery <4 weeks', inputs: [{v:'0',t:'No'},{v:'1.5',t:'Yes'}] },
      { label: 'Previous DVT / PE', inputs: [{v:'0',t:'No'},{v:'1.5',t:'Yes'}] },
      { label: 'Hemoptysis', inputs: [{v:'0',t:'No'},{v:'1',t:'Yes'}] },
      { label: 'Malignancy (active, treatment <6 months, palliative)', inputs: [{v:'0',t:'No'},{v:'1',t:'Yes'}] }
    ],
    interpret: function(s) { if (s<=4) return 'Score ' + s + ' — PE unlikely. Consider D-dimer.'; return 'Score ' + s + ' — PE likely. Consider CTPA / V/Q.'; }
  },
  {
    id: 'cha2ds2',
    title: 'CHA\u2082DS\u2082-VASc (Stroke Risk in AF)',
    fields: [
      { label: 'Congestive heart failure / LV dysfunction', inputs: [{v:'0',t:'No'},{v:'1',t:'Yes'}] },
      { label: 'Hypertension', inputs: [{v:'0',t:'No'},{v:'1',t:'Yes'}] },
      { label: 'Age >= 75 years', inputs: [{v:'0',t:'No'},{v:'2',t:'Yes'}] },
      { label: 'Diabetes mellitus', inputs: [{v:'0',t:'No'},{v:'1',t:'Yes'}] },
      { label: 'Stroke / TIA / thromboembolism', inputs: [{v:'0',t:'No'},{v:'2',t:'Yes'}] },
      { label: 'Vascular disease (prior MI, PAD, aortic plaque)', inputs: [{v:'0',t:'No'},{v:'1',t:'Yes'}] },
      { label: 'Age 65-74 years', inputs: [{v:'0',t:'No'},{v:'1',t:'Yes'}] },
      { label: 'Sex category (female)', inputs: [{v:'0',t:'Male'},{v:'1',t:'Female'}] }
    ],
    interpret: function(s) { if (s==0) return 'Score 0 — No anticoagulation needed (annual stroke risk ~0%).'; if (s==1) return 'Score 1 — Consider OAC (annual stroke risk ~1.3%).'; return 'Score ' + s + ' — OAC indicated (annual stroke risk ~' + (s*1.5+1.5).toFixed(1) + '%).'; }
  },
  {
    id: 'alvarado',
    title: 'Alvarado Score (Appendicitis)',
    fields: [
      { label: 'Migration of pain to RIF', inputs: [{v:'0',t:'No'},{v:'1',t:'Yes'}] },
      { label: 'Anorexia', inputs: [{v:'0',t:'No'},{v:'1',t:'Yes'}] },
      { label: 'Nausea / Vomiting', inputs: [{v:'0',t:'No'},{v:'1',t:'Yes'}] },
      { label: 'Tenderness in right iliac fossa', inputs: [{v:'0',t:'No'},{v:'2',t:'Yes'}] },
      { label: 'Rebound tenderness', inputs: [{v:'0',t:'No'},{v:'1',t:'Yes'}] },
      { label: 'Temperature > 37.3 C', inputs: [{v:'0',t:'No'},{v:'1',t:'Yes'}] },
      { label: 'Leukocytosis > 10,000', inputs: [{v:'0',t:'No'},{v:'2',t:'Yes'}] },
      { label: 'Left shift (neutrophils > 75%)', inputs: [{v:'0',t:'No'},{v:'1',t:'Yes'}] }
    ],
    interpret: function(s) { if (s<=4) return 'Score ' + s + ' — Low probability. Observe.'; if (s<=6) return 'Score ' + s + ' — Possible. Consider imaging / observation.'; return 'Score ' + s + ' — High probability. Likely appendectomy.'; }
  }
];

function renderScoringCalculators() {
  var html = '';
  SCORING_CALCULATORS.forEach(function(cal) {
    html += '<div class="calc-card" data-calc="' + cal.id + '" style="margin-bottom:12px;border:1px solid #e2e8f0;border-radius:6px;overflow:hidden">';
    html += '<div class="calc-header" onclick="toggleCalculator(\'' + cal.id + '\')" style="display:flex;justify-content:space-between;align-items:center;padding:10px 14px;background:#f7fafc;cursor:pointer;user-select:none">';
    html += '<span style="font-weight:600;font-size:0.9rem;color:#2d3748">' + esc(cal.title) + '</span>';
    html += '<span><strong id="score_' + cal.id + '" style="color:#2b6cb0;font-size:1.1rem">\u2014</strong> <span id="interp_' + cal.id + '" style="font-size:0.8rem;color:#718096"></span> <span class="calc-toggle" style="margin-left:8px;color:#a0aec0">\u25bc</span></span>';
    html += '</div>';
    html += '<div class="calc-body" id="body_' + cal.id + '" style="padding:0 14px 14px;display:none">';
    cal.fields.forEach(function(f, i) {
      html += '<div class="form-group" style="margin-bottom:8px">';
      html += '<label style="font-size:0.8rem">' + esc(f.label) + '</label>';
      html += '<select id="calc_' + cal.id + '_' + i + '" onchange="calcScore(\'' + cal.id + '\')" style="width:100%;padding:6px 8px;border:1px solid #d0d7de;border-radius:4px;font-size:0.85rem;background:#fff">';
      html += '<option value="">\u2014\u2014</option>';
      f.inputs.forEach(function(inp) {
        html += '<option value="' + inp.v + '">' + esc(inp.t) + '</option>';
      });
      html += '</select>';
      html += '</div>';
    });
    html += '</div>';
    html += '</div>';
  });
  return html;
}

function toggleCalculator(id) {
  var body = document.getElementById('body_' + id);
  if (!body) return;
  body.style.display = body.style.display === 'none' ? 'block' : 'none';
}

function calcScore(id) {
  var cal = null;
  for (var i = 0; i < SCORING_CALCULATORS.length; i++) {
    if (SCORING_CALCULATORS[i].id === id) { cal = SCORING_CALCULATORS[i]; break; }
  }
  if (!cal) return;
  var score = 0;
  var allSelected = true;
  cal.fields.forEach(function(f, idx) {
    var el = document.getElementById('calc_' + id + '_' + idx);
    if (el && el.value !== '') {
      score += parseFloat(el.value);
    } else {
      allSelected = false;
    }
  });
  var scoreEl = document.getElementById('score_' + id);
  var interpEl = document.getElementById('interp_' + id);
  if (!scoreEl) return;
  if (allSelected) {
    scoreEl.textContent = score;
    if (interpEl) interpEl.textContent = '\u2014 ' + cal.interpret(score);
  } else {
    scoreEl.textContent = '\u2014';
    if (interpEl) interpEl.textContent = '';
  }
}

function resetApp() {
  clearCurrentFromLS();
  currentSpecialty = null;
  steps = [];
  formData = {};

  document.getElementById('specialty-selector').classList.remove('hidden');
  document.getElementById('form-view').classList.add('hidden');
  document.getElementById('toolbar-condition').textContent = '';
  if (window._clockInterval) clearInterval(window._clockInterval);
}

function exportHistory() {
  var raw = localStorage.getItem(LS_HISTORY);
  if (!raw || raw === '[]') { alert('No saved assessments to export.'); return; }
  var blob = new Blob([raw], { type: 'application/json' });
  var url = URL.createObjectURL(blob);
  var a = document.createElement('a');
  a.href = url; a.download = 'medhistory_backup.json';
  document.body.appendChild(a); a.click();
  document.body.removeChild(a); URL.revokeObjectURL(url);
}
function importHistory() {
  var input = document.getElementById('import-input');
  if (!input) {
    input = document.createElement('input');
    input.id = 'import-input'; input.type = 'file'; input.accept = '.json'; input.style.display = 'none';
    input.addEventListener('change', function (e) {
      var file = e.target.files[0]; if (!file) return;
      var reader = new FileReader();
      reader.onload = function (ev) {
        try {
          var data = JSON.parse(ev.target.result);
          if (!Array.isArray(data)) throw new Error('Invalid format');
          localStorage.setItem(LS_HISTORY, JSON.stringify(data));
          renderHistoryList(); alert('Imported ' + data.length + ' assessment(s).');
        } catch (err) { alert('Invalid backup file.'); }
      };
      reader.readAsText(file);
    });
    document.body.appendChild(input);
  }
  input.click();
}
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  var btn = document.getElementById('dark-toggle');
  if (btn) btn.textContent = document.body.classList.contains('dark-mode') ? '\u2600' : '\u263E';
  localStorage.setItem('medHistory_darkMode', document.body.classList.contains('dark-mode') ? '1' : '');
}
function applyDarkMode() {
  if (localStorage.getItem('medHistory_darkMode') === '1') {
    document.body.classList.add('dark-mode');
    var btn = document.getElementById('dark-toggle');
    if (btn) btn.textContent = '\u2600';
  }
}

checkSavedData();

if('serviceWorker' in navigator)navigator.serviceWorker.register('sw.js');

applyDarkMode();
if(localStorage.getItem('medHistory_teaching')==='1'){var tb=document.getElementById('teach-toggle');if(tb){tb.style.background='#dd6b20';tb.style.color='#fff';}}