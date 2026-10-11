/* =========================================================
   আর্টিকেল ইঞ্জিন — সব আর্টিকেল পেজ এই ফাইল ব্যবহার করবে।
   প্রতিটি আর্টিকেলের নিজস্ব তথ্য থাকে ARTICLE নামের আলাদা অবজেক্টে (যেমন badr.html-এ)।
   ========================================================= */
const $=s=>document.querySelector(s);
const store={get(k){try{return localStorage.getItem(k)}catch(e){return null}},set(k,v){try{localStorage.setItem(k,v)}catch(e){}}};
let lang=store.get("lang")||"bn";
if(store.get("theme"))document.documentElement.dataset.theme=store.get("theme");

const UI={
 bn:{home:"হোম",tl:"টাইমলাইন",sch:"স্কলার",map:"মানচিত্র",gl:"পরিভাষা",refs:"সূত্রগ্রন্থ",
  crumbHome:"হোম",crumbArt:"আর্টিকেল",toc:"সূচিপত্র",citeBtn:"এই পেজ উদ্ধৃত করুন",printBtn:"প্রিন্ট / PDF",
  foot:"ফুটনোট",bibl:"সূত্রগ্রন্থ তালিকা",pgPending:"পৃষ্ঠা: যাচাই বাকি",citeTitle:"এই পেজ উদ্ধৃত করুন",copy:"কপি",copied:"কপি হয়েছে ✓",close:"বন্ধ করুন",
  footer:"ইতিহাস জানুন, শিক্ষা নিন।",updated:"সর্বশেষ হালনাগাদ",status:"অবস্থা",
  types:{quran:"কুরআন",primary:"প্রাথমিক সূত্র",secondary:"আধুনিক গবেষণা",reference:"রেফারেন্স কোষগ্রন্থ",site:"আমাদের সংকলন"},
  citeNote:"নিচের উদ্ধৃতি আপনার ব্রাউজারের বর্তমান তারিখ অনুযায়ী তৈরি হয়েছে।",retrieved:"সংগৃহীত"},
 en:{home:"Home",tl:"Timeline",sch:"Scholars",map:"Map",gl:"Glossary",refs:"Sources",
  crumbHome:"Home",crumbArt:"Articles",toc:"Contents",citeBtn:"Cite this page",printBtn:"Print / PDF",
  foot:"Footnotes",bibl:"Bibliography",pgPending:"page: pending verification",citeTitle:"Cite this page",copy:"Copy",copied:"Copied ✓",close:"Close",
  footer:"Know history, learn from it.",updated:"Last updated",status:"Status",
  types:{quran:"Qur'an",primary:"Primary source",secondary:"Modern scholarship",reference:"Reference work",site:"Our compilation"},
  citeNote:"Citations below are generated using your browser's current date.",retrieved:"Retrieved"}
};

/* ===== সূত্রের ভাণ্ডার (সব আর্টিকেলে ব্যবহারযোগ্য) ===== */
const SRC={
 quran:{type:"quran",short:{bn:"আল-কুরআন",en:"The Qur'an"},full:{bn:"আল-কুরআনুল কারীম (সূরা ও আয়াত নম্বরসহ)।",en:"The Qur'an (cited by sura and verse)."}},
 ish:{type:"primary",short:{bn:"ইবনে হিশাম, আস-সীরাতুন নববিয়্যাহ",en:"Ibn Hisham, al-Sira al-Nabawiyya"},full:{bn:"ইবনে হিশাম (মৃ. আনু. ২১৮ হি./৮৩৩ খ্রি.), আস-সীরাতুন নববিয়্যাহ — ইবনে ইসহাকের সীরাতের সম্পাদিত রূপ। (সংস্করণ ও পৃষ্ঠা যাচাই বাকি)",en:"Ibn Hisham (d. c. 218/833), al-Sira al-Nabawiyya — the edited recension of Ibn Ishaq's Sira. (Edition and pages to be verified.)"}},
 waq:{type:"primary",short:{bn:"আল-ওয়াকিদি, কিতাবুল মাগাযি",en:"al-Waqidi, Kitab al-Maghazi"},full:{bn:"আল-ওয়াকিদি (মৃ. ২০৭ হি./৮২৩ খ্রি.), কিতাবুল মাগাযি — যুদ্ধাভিযানের সবচেয়ে বিস্তারিত প্রাচীন বিবরণগুলোর একটি। হাদিস বর্ণনায় তিনি মুহাদ্দিসদের কাছে দুর্বল বিবেচিত, তবে সামরিক বিবরণের জন্য ঐতিহাসিকেরা তাঁকে দেখেন।",en:"al-Waqidi (d. 207/823), Kitab al-Maghazi — one of the most detailed early accounts of the campaigns. Hadith critics regarded him as weak in hadith transmission, but historians consult him for military detail."}},
 sad:{type:"primary",short:{bn:"ইবনে সা'দ, আত-তাবাকাতুল কুবরা",en:"Ibn Sa'd, al-Tabaqat al-Kubra"},full:{bn:"ইবনে সা'দ (মৃ. ২৩০ হি./৮৪৫ খ্রি.), আত-তাবাকাতুল কুবরা — সাহাবিদের জীবনী ও বদরি সাহাবিদের তালিকা।",en:"Ibn Sa'd (d. 230/845), al-Tabaqat al-Kubra — biographical dictionary including the lists of Badr participants."}},
 tab:{type:"primary",short:{bn:"আত-তাবারি, তারিখুর রুসুল ওয়াল মুলুক",en:"al-Tabari, Tarikh al-Rusul wa'l-Muluk"},full:{bn:"আত-তাবারি (মৃ. ৩১০ হি./৯২৩ খ্রি.), তারিখুর রুসুল ওয়াল মুলুক — ২য় হিজরির ঘটনাবলি।",en:"al-Tabari (d. 310/923), Tarikh al-Rusul wa'l-Muluk — events of the year 2 AH."}},
 ik:{type:"primary",short:{bn:"ইবনে কাসির, আল-বিদায়া ওয়ান নিহায়া",en:"Ibn Kathir, al-Bidaya wa'l-Nihaya"},full:{bn:"ইবনে কাসির (মৃ. ৭৭৪ হি./১৩৭৩ খ্রি.), আল-বিদায়া ওয়ান নিহায়া — ২য় হিজরির ঘটনাবলি, বদর অধ্যায়। (পরবর্তী যুগের সংকলন)",en:"Ibn Kathir (d. 774/1373), al-Bidaya wa'l-Nihaya — events of 2 AH, the Badr chapter. (A later compilation.)"}},
 bukh:{type:"primary",short:{bn:"সহিহ আল-বুখারি",en:"Sahih al-Bukhari"},full:{bn:"ইমাম বুখারি (মৃ. ২৫৬ হি./৮৭০ খ্রি.), আল-জামি আস-সহিহ — কিতাবুল মাগাযি, বদর অধ্যায়। (হাদিস নম্বর যাচাই বাকি)",en:"al-Bukhari (d. 256/870), al-Jami' al-Sahih — Book of Maghazi, Badr chapters. (Hadith numbers to be verified.)"}},
 brit:{type:"reference",short:{bn:"ব্রিটানিকা, 'Battle of Badr'",en:"Encyclopaedia Britannica, 'Battle of Badr'"},full:{bn:"Encyclopaedia Britannica, 'Battle of Badr' (অনলাইন এন্ট্রি)। britannica.com/event/Battle-of-Badr",en:"Encyclopaedia Britannica, 'Battle of Badr' (online entry). britannica.com/event/Battle-of-Badr"}},
 ei2:{type:"reference",short:{bn:"Encyclopaedia of Islam (২য় সং.), 'Badr'",en:"Encyclopaedia of Islam, 2nd ed., s.v. 'Badr'"},full:{bn:"Encyclopaedia of Islam, দ্বিতীয় সংস্করণ, 'Badr' এন্ট্রি। (খণ্ড ও পৃষ্ঠা যাচাই বাকি)",en:"Encyclopaedia of Islam, 2nd edition, entry 'Badr'. (Volume and pages to be verified.)"}},
 watt:{type:"secondary",short:{bn:"W. M. Watt, Muhammad at Medina",en:"W. M. Watt, Muhammad at Medina"},full:{bn:"W. Montgomery Watt, Muhammad at Medina (Oxford: Clarendon Press, 1956)।",en:"W. Montgomery Watt, Muhammad at Medina (Oxford: Clarendon Press, 1956)."}},
 lings:{type:"secondary",short:{bn:"Martin Lings, Muhammad",en:"Martin Lings, Muhammad"},full:{bn:"Martin Lings, Muhammad: His Life Based on the Earliest Sources (London, 1983)।",en:"Martin Lings, Muhammad: His Life Based on the Earliest Sources (London, 1983)."}},
 mub:{type:"secondary",short:{bn:"আল-মুবারকপুরি, আর-রাহিকুল মাখতুম",en:"al-Mubarakpuri, al-Raheeq al-Makhtum"},full:{bn:"সফিউর রহমান আল-মুবারকপুরি, আর-রাহিকুল মাখতুম (সীরাত গ্রন্থ)। (সংস্করণ ও পৃষ্ঠা যাচাই বাকি)",en:"Safi al-Rahman al-Mubarakpuri, al-Raheeq al-Makhtum (biography of the Prophet). (Edition and pages to be verified.)"}},
 rehan:{type:"secondary",short:{bn:"ইসমাইল রেহান, মুসলিম উম্মাহর ইতিহাস",en:"Ismail Rehan, Muslim Ummah's History (Bengali)"},full:{bn:"মাওলানা ইসমাইল রেহান, মুসলিম উম্মাহর ইতিহাস, খণ্ড ৩ (সীরাতুন্নবী — মাদানী জীবন)। (সংস্করণ ও পৃষ্ঠা যাচাই বাকি)",en:"Maulana Ismail Rehan, Muslim Ummah's History, vol. 3 (Seerah — Medinan period), in Bengali. (Edition and pages to be verified.)"}}
};

/* ===== সাইটেশন চিহ্ন: {সূত্র|অধ্যায়|পৃষ্ঠা} ===== */
let FN=[];
const esc=s=>String(s).replace(/"/g,"&quot;");
function cite(s){
 return String(s).replace(/\{([a-z0-9_]+)(?:\|([^|}]*))?(?:\|([^}]*))?\}/g,(m,k,loc,pg)=>{
  if(!SRC[k])return "";
  FN.push({k,loc:loc||"",pg:pg||""});
  const n=FN.length;
  return `<sup class="fn" id="r${n}"><a href="#fn${n}" title="${esc(SRC[k].short[lang]+(loc?" — "+loc:""))}">[${n}]</a></sup>`;
 });
}
const L=o=>o&&(o[lang]||o.en||"");

/* ===== ব্লক রেন্ডার ===== */
function block(b,A){
 const t=UI[lang];
 switch(b.t){
  case "p": return `<p>${cite(L(b))}</p>`;
  case "note": return `<div class="note">${cite(L(b))}</div>`;
  case "var": return `<div class="var"><b>${L(b.h)}</b> ${cite(L(b))}</div>`;
  case "fig": return `<div class="figslot">🖼️ ${L(b)}</div>`;
  case "info": return `<div class="info">${A.info.map(r=>`<div><span>${L(r.k)}</span><span>${cite(L(r.v))}</span></div>`).join("")}</div>`;
  case "stats": return `<div class="stats">${A.stats.map(s=>`<div class="stat"><b>${s.n}</b><small>${L(s.l)}</small></div>`).join("")}</div>`;
  case "bars": return `<div class="bars"><h4>${L(b.h)}</h4>${b.rows.map(r=>`<div class="bar"><div class="lb"><span>${L(r.l)}</span><span>${L(r.v)}</span></div><div class="tr"><div class="fi" data-w="${r.pct}" style="width:0;background:${r.c}"></div></div></div>`).join("")}<div class="cap" style="margin:8px 0 0">${cite(L(b.note))}</div></div>`;
  case "tl": return `<div class="tl">${A.timeline.map(e=>`<div><b>${L(e.when)}</b>${cite(L(e.what))}</div>`).join("")}</div>`;
  case "map": return `<div id="map"></div><div class="cap">${L(A.map.caption)}</div>`;
  case "people": return `<div class="people">${b.rows.map(p=>`<div class="pc" style="--c:${p.c}"><h4>${L(p.n)}</h4><small>${L(p.r)}</small></div>`).join("")}</div>`;
  default: return "";
 }
}

function render(){
 const A=ARTICLE,t=UI[lang];FN=[];
 document.body.dataset.lang=lang;document.documentElement.lang=lang;
 document.title=L(A.title)+" — Ummah Chronicles";
 const used=new Set();
 /* মূল অংশ */
 let body="";
 A.sections.forEach(s=>{body+=`<h2 id="${s.id}">${L(s.h)}</h2>`+s.blocks.map(b=>block(b,A)).join("")});
 /* ফুটনোট */
 const fnHtml=FN.map((f,i)=>{used.add(f.k);const n=i+1;
  return `<li id="fn${n}">${n}. ${SRC[f.k].short[lang]}${f.loc?" — "+f.loc:""}<span class="pg">${f.pg?("p. "+f.pg):t.pgPending}</span><a class="bk" href="#r${n}">↩</a></li>`}).join("");
 (A.further||[]).forEach(k=>used.add(k));
 const order=["quran","primary","secondary","reference","site"];
 const bib=[...used].filter(k=>SRC[k]).sort((a,b)=>order.indexOf(SRC[a].type)-order.indexOf(SRC[b].type))
  .map(k=>`<li><span class="tag t-${SRC[k].type}">${t.types[SRC[k].type]}</span>${SRC[k].full[lang]}</li>`).join("");
 body+=`<h2 id="footnotes">${t.foot}</h2><ol class="fnl" style="list-style:none">${fnHtml}</ol><h2 id="bibliography">${t.bibl}</h2><ul class="bib">${bib}</ul>`;
 const toc=A.sections.map(s=>`<a href="#${s.id}">${L(s.h)}</a>`).join("")+`<a href="#footnotes">${t.foot}</a><a href="#bibliography">${t.bibl}</a>`;
 $("#app").innerHTML=`
 <header><div class="nav"><a class="logo" href="index.html">☪ Ummah Chronicles</a>
  <a class="l" href="index.html">${t.home}</a><a class="l" href="index.html#timeline">${t.tl}</a><a class="l" href="scholars.html">${t.sch}</a><a class="l" href="index.html#map-sec">${t.map}</a><a class="l" href="index.html#glossary">${t.gl}</a><a class="l" href="index.html#refs">${t.refs}</a>
  <div class="tools"><select id="lang"><option value="bn">বাংলা</option><option value="en">English</option></select><button class="t" id="dark">🌙</button><button class="t" id="fm">A−</button><button class="t" id="fp">A+</button></div></div></header>
 <div class="hero"><svg xmlns="http://www.w3.org/2000/svg"><defs><pattern id="hp" width="80" height="80" patternUnits="userSpaceOnUse"><path d="M40 0 L80 40 L40 80 L0 40Z M40 14 L66 40 L40 66 L14 40Z" fill="none" stroke="#e6bf6a" stroke-width="1.2"/></pattern></defs><rect width="100%" height="100%" fill="url(#hp)"/></svg>
  <div class="in"><div class="crumb"><a href="index.html">${t.crumbHome}</a> › ${t.crumbArt} › ${L(A.title)}</div>
  <div class="ar">${A.arabic}</div><h1>${L(A.title)}</h1><p>${L(A.subtitle)}</p>
  <div class="badges">${A.badges.map(b=>`<span class="bdg">${L(b)}</span>`).join("")}</div></div></div>
 <div class="wrap"><nav class="toc"><b>${t.toc}</b>${toc}<div class="btns"><button id="citeBtn">${t.citeBtn}</button><button class="o" id="printBtn">${t.printBtn}</button></div></nav>
 <article>${body}</article></div>
 <footer><div>© 2026 Ummah Chronicles</div><div style="margin-top:6px">${t.footer}</div></footer>
 <div class="modal" id="modal"><div class="mbox" id="mbox"></div></div>`;
 bind();
 setTimeout(()=>document.querySelectorAll(".fi").forEach(e=>e.style.width=e.dataset.w+"%"),80);
 initMap();
}

/* ===== মানচিত্র ===== */
let mapObj=null;
function initMap(){
 const el=$("#map");if(!el)return;
 if(!window.L){el.innerHTML='<div style="padding:30px;color:var(--mute)">Map could not load (Leaflet).</div>';return}
 const M=ARTICLE.map;
 mapObj=L.map("map",{scrollWheelZoom:false}).setView(M.center,M.zoom);
 L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:"© OpenStreetMap contributors"}).addTo(mapObj);
 M.points.forEach(p=>L.marker([p.lat,p.lng]).addTo(mapObj).bindPopup(`<b>${L(p.n)}</b><br>${L(p.d)}`));
 M.lines.forEach(l=>L.polyline(l.pts,{color:l.c,weight:3,dashArray:"8 8"}).addTo(mapObj).bindPopup(L(l.n)));
}

/* ===== সাইটেশন (উদ্ধৃতি) তৈরি ===== */
function citations(){
 const A=ARTICLE,t=UI[lang],d=new Date();
 const title=L(A.title),url=location.href.split("#")[0];
 const mo=d.toLocaleDateString("en-US",{month:"long"}),mos=d.toLocaleDateString("en-US",{month:"short"});
 const day=d.getDate(),yr=d.getFullYear();
 return [
  ["APA 7",`Ummah Chronicles. (n.d.). ${title}. Ummah Chronicles. Retrieved ${mo} ${day}, ${yr}, from ${url}`],
  ["MLA 9",`Ummah Chronicles. “${title}.” Ummah Chronicles, ${url}. Accessed ${day} ${mos}. ${yr}.`],
  ["Chicago",`Ummah Chronicles. “${title}.” Ummah Chronicles. Accessed ${mo} ${day}, ${yr}. ${url}.`]
 ];
}

function bind(){
 const t=UI[lang];
 $("#lang").value=lang;
 $("#lang").onchange=e=>{lang=e.target.value;store.set("lang",lang);render()};
 $("#dark").onclick=()=>{const d=document.documentElement,on=d.dataset.theme==="dark";d.dataset.theme=on?"":"dark";store.set("theme",on?"":"dark")};
 let fs=17;const set=()=>document.documentElement.style.setProperty("--fs",fs+"px");
 $("#fp").onclick=()=>{fs=Math.min(24,fs+1);set()};$("#fm").onclick=()=>{fs=Math.max(13,fs-1);set()};
 $("#printBtn").onclick=()=>window.print();
 $("#citeBtn").onclick=()=>{
  $("#mbox").innerHTML=`<h3>${t.citeTitle}</h3><div class="cap">${t.citeNote}</div>`+citations().map((c,i)=>`<div class="cite"><b>${c[0]}</b><span id="c${i}">${c[1]}</span><br><button data-i="${i}">${t.copy}</button></div>`).join("")+`<button id="mclose">${t.close}</button>`;
  $("#modal").classList.add("on");
  document.querySelectorAll("#mbox button[data-i]").forEach(b=>b.onclick=()=>{
   const txt=$("#c"+b.dataset.i).textContent;
   const done=()=>{b.textContent=t.copied};
   if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(txt).then(done,done)}else done();
  });
  $("#mclose").onclick=()=>$("#modal").classList.remove("on");
 };
 $("#modal").onclick=e=>{if(e.target.id==="modal")$("#modal").classList.remove("on")};
}
window.addEventListener("scroll",()=>{const h=document.documentElement,p=$("#prog");if(p)p.style.width=(h.scrollTop/(h.scrollHeight-h.clientHeight||1)*100)+"%"});
