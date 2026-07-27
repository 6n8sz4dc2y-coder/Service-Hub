
async function loadDashboard(dataFile){
  const response = await fetch(dataFile);
  if(!response.ok) throw new Error('Could not load dashboard data.');
  return await response.json();
}

function statusHTML(status, note){
  const s=(status||'amber').toLowerCase();
  return `<span class="status ${s}"><span class="dot"></span>${note||status}</span>`;
}

function renderKpis(items){
  const host=document.querySelector('[data-kpis]');
  if(!host || !items) return;
  host.innerHTML=items.map(item=>`
    <div class="kpi">
      <div class="kpi-label">${item.label}</div>
      <div class="kpi-value">${item.value}</div>
      <div class="kpi-note">${statusHTML(item.status,item.note)}</div>
    </div>
  `).join('');
}

function renderChart(items){
  const host=document.querySelector('[data-chart]');
  if(!host || !items) return;
  const max=Math.max(...items.map(x=>Number(x.value)||0),100);
  host.innerHTML=items.map(item=>{
    const height=Math.max(6,Math.round((Number(item.value)||0)/max*240));
    return `<div class="bar-wrap">
      <div class="bar-value">${item.value}</div>
      <div class="bar" style="height:${height}px"></div>
      <div class="bar-label">${item.label}</div>
    </div>`;
  }).join('');
}

function renderRows(rows){
  const body=document.querySelector('[data-rows]');
  if(!body || !rows) return;
  body.innerHTML=rows.map(row=>`<tr>${row.map(cell=>`<td>${cell}</td>`).join('')}</tr>`).join('');
}

function setUpdated(){
  document.querySelectorAll('[data-updated]').forEach(el=>{
    el.textContent=new Date().toLocaleDateString('en-GB',{
      day:'2-digit',month:'short',year:'numeric'
    });
  });
}
