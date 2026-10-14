'use strict';
/* Werkstattmanager 4.3.45: reine Navigationskonsolidierung, keine Fachlogik ersetzt. */
(function(){
  const mainTabs=[
    ['dash','⌂','Übersicht'],
    ['vehicles','▣','Fahrzeuge'],
    ['orders','▤','Aufträge'],
    ['customers','♙','Kunden'],
    ['more','⚙','Mehr']
  ];
  function openLegacyPage(target){tab=target;render()}
  window.openLegacyPage=openLegacyPage;
  window.morePage=function(){
    return `<div class="section-title"><div><h2>Mehr</h2><div class="muted">Stammdaten, Auswertungen und Einstellungen</div></div></div>
      <div class="card"><h3>Leistungen und Material</h3><p class="muted">Leistungskatalog, Richtzeiten, Pflichtmaterialien und Materialstamm.</p><button class="btn primary" style="width:100%" onclick="openLegacyPage('services')">Leistungen und Materialstamm öffnen</button></div>
      <div class="card"><h3>Kostenübersicht</h3><p class="muted">Auswertung der Kundenaufträge und Kosten eigener Fahrzeuge.</p><button class="btn" style="width:100%" onclick="openLegacyPage('costs')">Kostenübersicht öffnen</button></div>
      <div class="card"><h3>Optionen und Datensicherung</h3><p class="muted">Werkstattdaten, TÜV-Grenzen, Fahrzeugklassen, Praxisdatenbank, Backup und Wiederherstellung.</p><button class="btn" style="width:100%" onclick="openLegacyPage('settings')">Optionen öffnen</button></div>`;
  };
  const pageForTab={dash:dashboard,vehicles:vehiclesPage,orders:ordersPage,customers:customersPage,more:window.morePage,services:servicesPage,costs:costsPage,settings:settingsPage};
  render=function(){
    document.querySelector('#companyTitle').textContent=db.settings.company;
    const active=['services','costs','settings'].includes(tab)?'more':tab;
    document.querySelector('#tabs').innerHTML=mainTabs.map(x=>`<button class="tab ${active===x[0]?'on':''}" onclick="tab='${x[0]}';render()"><b>${x[1]}</b>${x[2]}</button>`).join('');
    const page=pageForTab[tab]||dashboard;
    document.querySelector('#app').innerHTML=page();
  };
  const style=document.createElement('style');
  style.textContent='.tabs{grid-template-columns:repeat(5,1fr)}.tab{font-size:11px;padding:10px 3px}.tab b{font-size:20px}';
  document.head.appendChild(style);
  document.querySelectorAll('header span').forEach(x=>{if(/v\s*4\.3\.44/.test(x.textContent))x.textContent='v 4.3.45'});
  render();
})();
