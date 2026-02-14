const yearSources = [
  [2025,'https://www.mathe-kaenguru.de/chronik/aufgaben/downloads/kaenguru2025_34.pdf'],[2024,'https://www.mathe-kaenguru.de/chronik/aufgaben/downloads/kaenguru2024_34.pdf'],[2023,'https://www.mathe-kaenguru.de/chronik/aufgaben/downloads/kaenguru2023_34.pdf'],[2022,'https://www.mathe-kaenguru.de/chronik/aufgaben/downloads/kaenguru2022_34.pdf'],[2021,'https://www.mathe-kaenguru.de/chronik/aufgaben/downloads/kaenguru2021_34.pdf'],[2020,'https://www.mathe-kaenguru.de/chronik/aufgaben/downloads/kaenguru2020_34.pdf'],[2019,'https://www.mathe-kaenguru.de/chronik/aufgaben/downloads/19_34.pdf'],[2018,'https://www.mathe-kaenguru.de/chronik/aufgaben/downloads/18_34.pdf'],[2017,'https://www.mathe-kaenguru.de/chronik/aufgaben/downloads/17_34.pdf'],[2016,'https://www.mathe-kaenguru.de/chronik/aufgaben/downloads/16_34.pdf'],[2015,'https://www.mathe-kaenguru.de/chronik/aufgaben/downloads/15_34.pdf'],[2014,'https://www.mathe-kaenguru.de/chronik/aufgaben/downloads/14_34.pdf'],[2013,'https://www.mathe-kaenguru.de/chronik/aufgaben/downloads/13_34.pdf'],[2012,'https://www.mathe-kaenguru.de/chronik/aufgaben/downloads/12_34.pdf'],[2011,'https://www.mathe-kaenguru.de/chronik/aufgaben/downloads/11_34.pdf'],[2010,'https://www.mathe-kaenguru.de/chronik/aufgaben/downloads/10_34.pdf'],[2009,'https://www.mathe-kaenguru.de/chronik/aufgaben/downloads/09_34.pdf'],[2008,'https://www.mathe-kaenguru.de/chronik/aufgaben/downloads/08_34.pdf'],[2007,'https://www.mathe-kaenguru.de/chronik/aufgaben/downloads/07_34.pdf'],[2006,'https://www.mathe-kaenguru.de/chronik/aufgaben/downloads/06_34.pdf'],[2005,'https://www.mathe-kaenguru.de/chronik/aufgaben/downloads/05_34.pdf'],[2004,'https://www.mathe-kaenguru.de/chronik/aufgaben/downloads/04_34.pdf'],[2003,'https://www.mathe-kaenguru.de/chronik/aufgaben/downloads/03_34.pdf'],[2002,'https://www.mathe-kaenguru.de/chronik/aufgaben/downloads/02_34.pdf'],[2001,'https://www.mathe-kaenguru.de/chronik/aufgaben/downloads/01_34.pdf'],[2000,'https://www.mathe-kaenguru.de/chronik/aufgaben/downloads/00_34.pdf'],[1999,'https://www.mathe-kaenguru.de/chronik/aufgaben/downloads/99_34.pdf'],[1998,'https://www.mathe-kaenguru.de/chronik/aufgaben/downloads/98_34.pdf'],
];

const t = {
  ar:{title:'تحدي كنغر الرياضيات (الصف 3-4)',lang:'اللغة',year:'السنة',progress:'التقدم',score:'النقاط',answered:'المحاولات',skipped:'المتخطّى',resume:'حلّ الأسئلة المتخطّاة',submit:'تحقق من الإجابة',skip:'تخطي',next:'السؤال التالي',hint:'تلميح تدريجي',moreHint:'تلميح إضافي',sourceTitle:'مصادر السنوات',sourceDesc:'تم عرض نسخة السؤال كصورة داخل الواجهة. مصدر كل سنة:',q:'السؤال',points:'النقاط',choose:'اختر إجابة أولاً.',correct:'إجابة رائعة! +',wrong:'إجابة غير صحيحة، راجع التلميح.',done:'أنهيت المجموعة. يمكنك استرجاع المتخطى.'},
  de:{title:'Känguru-Mathe-Quest (Klasse 3-4)',lang:'Sprache',year:'Jahr',progress:'Fortschritt',score:'Punkte',answered:'Versuche',skipped:'Übersprungen',resume:'Übersprungene lösen',submit:'Antwort prüfen',skip:'Überspringen',next:'Nächste Aufgabe',hint:'Schrittweiser Tipp',moreHint:'Weiterer Tipp',sourceTitle:'Jahresquellen',sourceDesc:'Die Aufgabenansicht wird als Bild im Interface angezeigt. Quellen:',q:'Aufgabe',points:'Punkte',choose:'Bitte zuerst eine Antwort wählen.',correct:'Richtig! +',wrong:'Nicht korrekt, prüfe den Tipp.',done:'Runde fertig. Übersprungene erneut lösen.'},
  en:{title:'Känguru Math Quest (Grade 3-4)',lang:'Language',year:'Year',progress:'Progress',score:'Score',answered:'Attempts',skipped:'Skipped',resume:'Resume skipped questions',submit:'Check answer',skip:'Skip',next:'Next question',hint:'Progressive hint',moreHint:'Show more hint',sourceTitle:'Year sources',sourceDesc:'Question snapshot is shown as an image in-app. Sources:',q:'Question',points:'Points',choose:'Choose an answer first.',correct:'Great answer! +',wrong:'Not correct, review hint.',done:'Round completed. You can retry skipped questions.'}
};

const snapshots = {
  2025: ['assets/questions/2025-q1.svg','assets/questions/2025-q2.svg','assets/questions/2025-q3.svg','assets/questions/2025-q4.svg']
};

const baseQuestions = [
  {points:3,choices:['A','B','C','D'],answer:0,hints:{ar:['اقرأ صورة السؤال بعناية.','اكتب المعطيات الرئيسية ثم جرّب الاستبعاد.'],de:['Lies das Fragebild genau.','Notiere Daten und nutze Ausschluss.'],en:['Read the question image carefully.','Write key data and use elimination.']}},
  {points:3,choices:['A','B','C','D'],answer:1,hints:{ar:['انتبه للتفاصيل الصغيرة في الصورة.','تحقق من كل اختيار بخطوة واحدة.'],de:['Achte auf Details im Bild.','Prüfe jede Option Schritt für Schritt.'],en:['Watch small details in image.','Check each option step-by-step.']}},
  {points:4,choices:['A','B','C','D'],answer:2,hints:{ar:['ابدأ بالحل الأسهل.','استبعد الخيارات غير المنطقية أولاً.'],de:['Beginne mit dem einfachsten Ansatz.','Schließe unlogische Optionen zuerst aus.'],en:['Start with easiest approach.','Eliminate unlikely options first.']}},
  {points:5,choices:['A','B','C','D'],answer:3,hints:{ar:['قسّم المسألة لخطوات صغيرة.','تحقق من الناتج بالتقدير.'],de:['Teile die Aufgabe in kleine Schritte.','Prüfe das Ergebnis mit Überschlag.'],en:['Break it into small steps.','Validate with estimation.']}},
];

const state = { lang:'ar', year:2025, current:0, selected:null, score:0, answered:0, skipped:[], hint:0, questions:[] };
const el = (id)=>document.getElementById(id);
const yearPdfUrl = ()=>yearSources.find(([y])=>y===state.year)?.[1] || yearSources[0][1];
const buildYearQuestions = (year)=>baseQuestions.map((q,i)=>({ ...q, id:`${year}-${i+1}`, image:(snapshots[year]?.[i] || snapshots[2025][i]) }));

function i18n(){
  const x=t[state.lang]; document.documentElement.lang=state.lang; document.documentElement.dir=state.lang==='ar'?'rtl':'ltr';
  el('app-title').textContent=x.title; el('lang-label').textContent=x.lang; el('year-label').textContent=x.year;
  el('progress-title').textContent=x.progress; el('score-label').textContent=x.score; el('answered-label').textContent=x.answered; el('skipped-label').textContent=x.skipped;
  el('resume-skipped').textContent=x.resume; el('submit-btn').textContent=x.submit; el('skip-btn').textContent=x.skip; el('next-btn').textContent=x.next;
  el('hint-title').textContent=x.hint; el('next-hint').textContent=x.moreHint; el('source-title').textContent=x.sourceTitle; el('source-desc').textContent=x.sourceDesc;
}

function renderSources(){ const list=el('source-list'); list.innerHTML=''; yearSources.forEach(([year,url])=>{const li=document.createElement('li'); li.innerHTML=`<a href="${url}" target="_blank" rel="noopener">${year} PDF</a>`; list.appendChild(li);}); }
function refresh(){ el('score').textContent=state.score; el('answered').textContent=state.answered; el('skipped-count').textContent=state.skipped.length; }

function renderQuestion(){
  const q=state.questions[state.current]; if(!q){ el('question-text').textContent=t[state.lang].done; el('choices').innerHTML=''; return; }
  const x=t[state.lang]; el('question-index').textContent=`${x.q} ${state.current+1}/${state.questions.length}`; el('question-points').textContent=`${x.points}: ${q.points}`;
  el('question-text').textContent=`${x.q} (${state.year}) - ${yearPdfUrl()}`;
  el('question-image').src=q.image;
  el('hint-step').textContent=q.hints[state.lang][state.hint] || q.hints[state.lang].at(-1);
  const choices=el('choices'); choices.innerHTML=''; q.choices.forEach((c,i)=>{ const b=document.createElement('button'); b.className=`choice ${state.selected===i?'selected':''}`; b.textContent=c; b.onclick=()=>{state.selected=i; renderQuestion();}; choices.appendChild(b);});
  el('feedback').textContent='';
}

function nextQ(){ state.selected=null; state.hint=0; state.current+=1; renderQuestion(); }

function init(){
  const ys=el('year-select'); yearSources.forEach(([y])=>{const o=document.createElement('option'); o.value=y; o.textContent=y; ys.appendChild(o);});
  ys.onchange=()=>{state.year=Number(ys.value); state.questions=buildYearQuestions(state.year); state.current=0; state.selected=null; state.skipped=[]; state.score=0; state.answered=0; state.hint=0; refresh(); renderQuestion();};
  el('language-select').onchange=(e)=>{state.lang=e.target.value; i18n(); renderQuestion();};
  el('submit-btn').onclick=()=>{const q=state.questions[state.current]; if(!q)return; if(state.selected===null){el('feedback').textContent=t[state.lang].choose; return;} state.answered+=1; if(state.selected===q.answer){state.score+=q.points; el('feedback').textContent=`${t[state.lang].correct}${q.points}`; el('feedback').style.color='#1b8f3b';} else {el('feedback').textContent=t[state.lang].wrong; el('feedback').style.color='#b3261e';} refresh();};
  el('skip-btn').onclick=()=>{const q=state.questions[state.current]; if(q && !state.skipped.includes(q.id)) state.skipped.push(q.id); refresh(); nextQ();};
  el('next-btn').onclick=nextQ;
  el('resume-skipped').onclick=()=>{ if(!state.skipped.length) return; const set=new Set(state.skipped); state.questions=state.questions.filter((q)=>set.has(q.id)); state.skipped=[]; state.current=0; state.selected=null; state.hint=0; refresh(); renderQuestion(); };
  el('next-hint').onclick=()=>{const q=state.questions[state.current]; if(!q)return; state.hint=Math.min(state.hint+1,q.hints[state.lang].length-1); el('hint-step').textContent=q.hints[state.lang][state.hint];};

  i18n(); renderSources(); state.questions=buildYearQuestions(state.year); refresh(); renderQuestion();
}
init();
