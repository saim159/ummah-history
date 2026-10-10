/* স্কলার পেজগুলোর সাধারণ কোড: ভাষা, থিম, হেডার, ছবি/আইকন */
const UI={
 bn:{home:"হোম",tl:"টাইমলাইন",vol:"খণ্ডসমূহ",sch:"স্কলার ও মনীষী",map:"মানচিত্র",gl:"পরিভাষা",refs:"সূত্রগ্রন্থ",
  title:"স্কলার ও মনীষী",sub:"মুসলিম ইতিহাসের গুরুত্বপূর্ণ আলেম, ইতিহাসবিদ, দার্শনিক ও বিজ্ঞানীদের জীবনী ও অবদান — ধীরে ধীরে সমৃদ্ধ হচ্ছে।",
  ph:"নাম লিখে খুঁজুন: গাজালি, Ghazali, الغزالي…",all:"সকল",found:"জন পাওয়া গেছে",none:"কোনো স্কলার পাওয়া যায়নি।",
  soon:"জীবনী শীঘ্রই যুক্ত হবে।",bio:"জীবনী",works:"উল্লেখযোগ্য কর্ম",src:"সূত্র",born:"জন্মস্থান",years:"জীবনকাল",back:"← সকল স্কলার",
  cats:"বিভাগ",srcnote:"পৃষ্ঠা নম্বরসহ নির্দিষ্ট রেফারেন্স যাচাই শেষে যুক্ত করা হবে।",
  imgnote:"প্রতীকি ছবি যাচাই সাপেক্ষে যুক্ত হবে।",foot:"ইতিহাস জানুন, শিক্ষা নিন।",nf:"স্কলার পাওয়া যায়নি।",
  noportrait:"সাহাবিদের কোনো চেহারার ছবি ব্যবহার করা হয় না।",credit:"ছবি"},
 en:{home:"Home",tl:"Timeline",vol:"Volumes",sch:"Scholars",map:"Map",gl:"Glossary",refs:"Sources",
  title:"Scholars & Luminaries",sub:"Biographies and contributions of key scholars, historians, philosophers and scientists of Muslim history — growing steadily.",
  ph:"Search by name: Ghazali, غزالي, গাজালি…",all:"All",found:"scholars found",none:"No scholar found.",
  soon:"Biography coming soon.",bio:"Biography",works:"Notable Works",src:"Sources",born:"Birthplace",years:"Lifespan",back:"← All scholars",
  cats:"Categories",srcnote:"Exact references with page numbers will be added once verified.",
  imgnote:"A symbolic image will be added once verified.",foot:"Know history, learn from it.",nf:"Scholar not found.",
  noportrait:"Portraits of the Companions are intentionally not used.",credit:"Image"}
};
let lang=localStorage.lang||"bn";
const $=s=>document.querySelector(s);
const nm=id=>P[id]?P[id][lang==="bn"?0:1]:id;
const sec=id=>P[id]?P[id][lang==="bn"?1:0]:"";
const role=id=>P[id]?P[id][lang==="bn"?3:4]:"";
const gname=g=>GROUPS[g][lang==="bn"?0:1];
const star='<svg class="star" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="sp" width="48" height="48" patternUnits="userSpaceOnUse"><path d="M24 0 L48 24 L24 48 L0 24Z M24 9 L39 24 L24 39 L9 24Z" fill="none" stroke="#e6bf6a" stroke-width="1"/></pattern></defs><rect width="100%" height="100%" fill="url(#sp)"/></svg>';
function pic(id){
 const g=(CATS[id]||[])[0],c=g?GROUPS[g][2]:"#0f5a4a";
 const im=IMG[id];
 if(im&&!NO_PORTRAIT.includes(id)){
  return `<div class="pic" style="--c:${c}"><img loading="lazy" alt="${nm(id)}" src="https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(im.file)}?width=500" onerror="this.remove()"></div>`;
 }
 const ini=(P[id][1].replace(/^(Al|Ibn|Abu|Imam)[\s-]+/i,"").charAt(0)||"☪").toUpperCase();
 return `<div class="pic" style="--c:${c}">${star}<span class="ini">${ini}</span></div>`;
}
function header(active){
 const t=UI[lang];
 document.body.dataset.lang=lang;document.documentElement.lang=lang;
 $("#hdr").innerHTML=`<div class="nav"><a class="logo" href="index.html">☪ Ummah Chronicles</a>
 <a class="l" href="index.html">${t.home}</a><a class="l" href="index.html#timeline">${t.tl}</a><a class="l" href="index.html#volumes">${t.vol}</a>
 <a class="l on" href="scholars.html">${t.sch}</a><a class="l" href="index.html#map-sec">${t.map}</a><a class="l" href="index.html#glossary">${t.gl}</a><a class="l" href="index.html#refs">${t.refs}</a>
 <div class="tools"><select id="lang"><option value="bn">বাংলা</option><option value="en">English</option></select>
 <button class="t" id="dark">🌙</button><button class="t" id="fm">A−</button><button class="t" id="fp">A+</button></div></div>`;
 $("#lang").value=lang;
 $("#lang").onchange=e=>{lang=e.target.value;localStorage.lang=lang;window.draw()};
 $("#dark").onclick=()=>{const d=document.documentElement,on=d.dataset.theme==="dark";d.dataset.theme=on?"":"dark";localStorage.theme=on?"":"dark"};
 let fs=17;const set=()=>document.documentElement.style.setProperty("--fs",fs+"px");
 $("#fp").onclick=()=>{fs=Math.min(24,fs+1);set()};$("#fm").onclick=()=>{fs=Math.max(13,fs-1);set()};
 $("#ftr").innerHTML=`<div>© 2026 Ummah Chronicles</div><div style="margin-top:6px">${t.foot}</div>`;
}
if(localStorage.theme)document.documentElement.dataset.theme=localStorage.theme;
/* সার্চের জন্য লেখা সহজ করা */
const norm=s=>(s||"").toLowerCase().replace(/[\u064B-\u0652\u0640]/g,"").replace(/ال(?=\S)/g,"").replace(/[’'ʿʾ`\-().]/g,"").replace(/ইমাম|\(রা\.?\)|\(রহ\.?\)/g,"").replace(/\s+/g," ").trim();
