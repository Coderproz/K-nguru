const yearSources = [
  [2025, 'https://www.mathe-kaenguru.de/chronik/aufgaben/downloads/kaenguru2025_34.pdf'],
  [2024, 'https://www.mathe-kaenguru.de/chronik/aufgaben/downloads/kaenguru2024_34.pdf'],
  [2023, 'https://www.mathe-kaenguru.de/chronik/aufgaben/downloads/kaenguru2023_34.pdf'],
  [2022, 'https://www.mathe-kaenguru.de/chronik/aufgaben/downloads/kaenguru2022_34.pdf'],
  [2021, 'https://www.mathe-kaenguru.de/chronik/aufgaben/downloads/kaenguru2021_34.pdf'],
  [2020, 'https://www.mathe-kaenguru.de/chronik/aufgaben/downloads/kaenguru2020_34.pdf'],
  [2019, 'https://www.mathe-kaenguru.de/chronik/aufgaben/downloads/19_34.pdf'],
  [2018, 'https://www.mathe-kaenguru.de/chronik/aufgaben/downloads/18_34.pdf'],
  [2017, 'https://www.mathe-kaenguru.de/chronik/aufgaben/downloads/17_34.pdf'],
  [2016, 'https://www.mathe-kaenguru.de/chronik/aufgaben/downloads/16_34.pdf'],
  [2015, 'https://www.mathe-kaenguru.de/chronik/aufgaben/downloads/15_34.pdf'],
  [2014, 'https://www.mathe-kaenguru.de/chronik/aufgaben/downloads/14_34.pdf'],
  [2013, 'https://www.mathe-kaenguru.de/chronik/aufgaben/downloads/13_34.pdf'],
  [2012, 'https://www.mathe-kaenguru.de/chronik/aufgaben/downloads/12_34.pdf'],
  [2011, 'https://www.mathe-kaenguru.de/chronik/aufgaben/downloads/11_34.pdf'],
  [2010, 'https://www.mathe-kaenguru.de/chronik/aufgaben/downloads/10_34.pdf'],
  [2009, 'https://www.mathe-kaenguru.de/chronik/aufgaben/downloads/09_34.pdf'],
  [2008, 'https://www.mathe-kaenguru.de/chronik/aufgaben/downloads/08_34.pdf'],
  [2007, 'https://www.mathe-kaenguru.de/chronik/aufgaben/downloads/07_34.pdf'],
  [2006, 'https://www.mathe-kaenguru.de/chronik/aufgaben/downloads/06_34.pdf'],
  [2005, 'https://www.mathe-kaenguru.de/chronik/aufgaben/downloads/05_34.pdf'],
  [2004, 'https://www.mathe-kaenguru.de/chronik/aufgaben/downloads/04_34.pdf'],
  [2003, 'https://www.mathe-kaenguru.de/chronik/aufgaben/downloads/03_34.pdf'],
  [2002, 'https://www.mathe-kaenguru.de/chronik/aufgaben/downloads/02_34.pdf'],
  [2001, 'https://www.mathe-kaenguru.de/chronik/aufgaben/downloads/01_34.pdf'],
  [2000, 'https://www.mathe-kaenguru.de/chronik/aufgaben/downloads/00_34.pdf'],
  [1999, 'https://www.mathe-kaenguru.de/chronik/aufgaben/downloads/99_34.pdf'],
  [1998, 'https://www.mathe-kaenguru.de/chronik/aufgaben/downloads/98_34.pdf'],
];

const translations = {
  ar: {
    title: 'تحدي كنغر الرياضيات (الصف 3-4)', lang: 'اللغة', year: 'السنة', progress: 'التقدم',
    score: 'النقاط', answered: 'المحاولات', skipped: 'المتخطّى', resumeSkipped: 'حلّ الأسئلة المتخطّاة',
    submit: 'تحقق من الإجابة', skip: 'تخطي', next: 'السؤال التالي', hintTitle: 'تلميح تدريجي',
    nextHint: 'تلميح إضافي', sourceTitle: 'مصادر السنوات', sourceDesc: 'جميع ملفات التمارين متاحة داخل العارض التالي وضمن القائمة:',
    q: 'السؤال', points: 'النقاط', choose: 'اختر إجابة أولاً.', correct: 'إجابة رائعة! +',
    wrong: 'إجابة غير صحيحة. راجع خطوات التلميح ثم حاول مجددًا.', finished: 'أنهيت هذه المجموعة! يمكنك إعادة المتخطى أو تغيير السنة.',
    questionFromPdf: 'السؤال الأصلي ظاهر أمامك كما في ملف PDF داخل التطبيق.',
    openPdf: 'فتح ملف السنة', prevPage: 'الصفحة السابقة', nextPage: 'الصفحة التالية', page: 'صفحة PDF',
  },
  de: {
    title: 'Känguru-Mathe-Quest (Klasse 3-4)', lang: 'Sprache', year: 'Jahr', progress: 'Fortschritt',
    score: 'Punkte', answered: 'Versuche', skipped: 'Übersprungen', resumeSkipped: 'Übersprungene lösen',
    submit: 'Antwort prüfen', skip: 'Überspringen', next: 'Nächste Aufgabe', hintTitle: 'Schrittweiser Tipp',
    nextHint: 'Weiterer Tipp', sourceTitle: 'Jahresquellen', sourceDesc: 'Alle Aufgaben-PDFs sind direkt im Viewer und in der Liste verfügbar:',
    q: 'Aufgabe', points: 'Punkte', choose: 'Bitte zuerst eine Antwort wählen.', correct: 'Richtig! +',
    wrong: 'Nicht korrekt. Tipp-Schritte prüfen und erneut versuchen.', finished: 'Diese Runde ist fertig! Löse Übersprungene oder wähle ein anderes Jahr.',
    questionFromPdf: 'Die Originalaufgabe wird direkt im PDF-Viewer in der App angezeigt.',
    openPdf: 'Jahres-PDF öffnen', prevPage: 'Vorherige Seite', nextPage: 'Nächste Seite', page: 'PDF-Seite',
  },
  en: {
    title: 'Känguru Math Quest (Grade 3-4)', lang: 'Language', year: 'Year', progress: 'Progress',
    score: 'Score', answered: 'Attempts', skipped: 'Skipped', resumeSkipped: 'Resume skipped questions',
    submit: 'Check answer', skip: 'Skip', next: 'Next question', hintTitle: 'Progressive hint',
    nextHint: 'Show more hint', sourceTitle: 'Year sources', sourceDesc: 'All exercise PDFs are available directly in the embedded viewer and list:',
    q: 'Question', points: 'Points', choose: 'Choose an answer first.', correct: 'Great answer! +',
    wrong: 'Not correct yet. Review hint steps and try again.', finished: 'Round completed! Resume skipped or switch year.',
    questionFromPdf: 'The original question is shown directly in-app via the PDF viewer.',
    openPdf: 'Open year PDF', prevPage: 'Previous page', nextPage: 'Next page', page: 'PDF page',
  }
};

const baseQuestions = [
  { points: 3, page: 1, choices: ['A', 'B', 'C', 'D'], answer: 0,
    hints: { ar: ['اقرأ نص السؤال الأصلي في العارض.', 'اكتب المعطيات الرئيسية ثم جرّب التحقق من كل خيار.'], de: ['Lies die Originalaufgabe im Viewer.', 'Notiere die Daten und prüfe die Optionen systematisch.'], en: ['Read the original question in the viewer.', 'Write key data and test options one by one.'] } },
  { points: 3, page: 1, choices: ['A', 'B', 'C', 'D'], answer: 1,
    hints: { ar: ['انتبه للوحدات أو الرسم إن وُجد.', 'جرب الحل السريع ثم تحقق بالعد خطوة بخطوة.'], de: ['Achte auf Einheiten oder Skizze.', 'Rechne zuerst schnell und prüfe dann Schritt für Schritt.'], en: ['Watch units or diagram carefully.', 'Do a quick solve, then verify step-by-step.'] } },
  { points: 4, page: 2, choices: ['A', 'B', 'C', 'D'], answer: 2,
    hints: { ar: ['ابدأ بأبسط حالة ممكنة.', 'استخدم الاستبعاد للخيارات غير المنطقية.'], de: ['Beginne mit dem einfachsten Fall.', 'Nutze Ausschluss für unplausible Antworten.'], en: ['Start from the simplest case.', 'Use elimination for unlikely options.'] } },
  { points: 5, page: 2, choices: ['A', 'B', 'C', 'D'], answer: 3,
    hints: { ar: ['حوّل المسألة لخطوات صغيرة.', 'تحقق من النتيجة بالتقدير الذهني.'], de: ['Teile die Aufgabe in kleine Schritte.', 'Plausibilitätscheck mit Überschlag.'], en: ['Break the problem into small steps.', 'Check reasonableness with estimation.'] } },
];

const state = { lang: 'ar', year: 2025, current: 0, selected: null, score: 0, answered: 0, skipped: [], hint: 0, questions: [], pdfPage: 1 };
const el = (id) => document.getElementById(id);

function yearPdfUrl() { return yearSources.find(([y]) => y === state.year)?.[1] || yearSources[0][1]; }
function buildYearQuestions(year) { return baseQuestions.map((q, index) => ({ ...q, id: `${year}-${index + 1}` })); }

function applyI18n() {
  const t = translations[state.lang];
  document.documentElement.lang = state.lang;
  document.documentElement.dir = state.lang === 'ar' ? 'rtl' : 'ltr';
  el('app-title').textContent = t.title;
  el('lang-label').textContent = t.lang;
  el('year-label').textContent = t.year;
  el('progress-title').textContent = t.progress;
  el('score-label').textContent = t.score;
  el('answered-label').textContent = t.answered;
  el('skipped-label').textContent = t.skipped;
  el('resume-skipped').textContent = t.resumeSkipped;
  el('submit-btn').textContent = t.submit;
  el('skip-btn').textContent = t.skip;
  el('next-btn').textContent = t.next;
  el('hint-title').textContent = t.hintTitle;
  el('next-hint').textContent = t.nextHint;
  el('source-title').textContent = t.sourceTitle;
  el('source-desc').textContent = t.sourceDesc;
  el('pdf-open-link').textContent = t.openPdf;
  el('pdf-prev-page').textContent = t.prevPage;
  el('pdf-next-page').textContent = t.nextPage;
  updatePdfViewer();
}

function renderSources() {
  const list = el('source-list');
  list.innerHTML = '';
  yearSources.forEach(([year, url]) => {
    const li = document.createElement('li');
    li.innerHTML = `<a href="${url}" target="_blank" rel="noopener">${year} PDF</a>`;
    list.appendChild(li);
  });
}

function updatePdfViewer() {
  const t = translations[state.lang];
  const url = yearPdfUrl();
  el('pdf-open-link').href = url;
  el('pdf-page-label').textContent = `${t.page}: ${state.pdfPage}`;
  el('pdf-frame').src = `${url}#page=${state.pdfPage}&zoom=page-width`;
}

function renderQuestion() {
  const q = state.questions[state.current];
  if (!q) {
    el('question-text').textContent = translations[state.lang].finished;
    el('choices').innerHTML = '';
    el('question-index').textContent = '';
    el('question-points').textContent = '';
    return;
  }
  const t = translations[state.lang];
  state.pdfPage = q.page;
  el('question-index').textContent = `${t.q} ${state.current + 1}/${state.questions.length}`;
  el('question-points').textContent = `${t.points}: ${q.points}`;
  el('question-text').textContent = t.questionFromPdf;
  el('hint-step').textContent = q.hints[state.lang][state.hint] || q.hints[state.lang].at(-1);
  updatePdfViewer();

  const choices = el('choices');
  choices.innerHTML = '';
  q.choices.forEach((choice, idx) => {
    const c = document.createElement('button');
    c.className = `choice ${state.selected === idx ? 'selected' : ''}`;
    c.textContent = choice;
    c.addEventListener('click', () => { state.selected = idx; renderQuestion(); });
    choices.appendChild(c);
  });
  el('feedback').textContent = '';
}

function refreshStats() { el('score').textContent = state.score; el('answered').textContent = state.answered; el('skipped-count').textContent = state.skipped.length; }
function nextQuestion() { state.selected = null; state.hint = 0; state.current += 1; renderQuestion(); }

function init() {
  const yearSelect = el('year-select');
  yearSources.forEach(([year]) => {
    const option = document.createElement('option');
    option.value = year;
    option.textContent = year;
    yearSelect.appendChild(option);
  });

  yearSelect.addEventListener('change', () => {
    state.year = Number(yearSelect.value);
    state.questions = buildYearQuestions(state.year);
    state.current = 0; state.selected = null; state.skipped = []; state.score = 0; state.answered = 0; state.hint = 0;
    refreshStats(); renderQuestion();
  });

  el('language-select').addEventListener('change', (e) => { state.lang = e.target.value; applyI18n(); renderQuestion(); });

  el('submit-btn').addEventListener('click', () => {
    const q = state.questions[state.current];
    if (!q) return;
    if (state.selected === null) { el('feedback').textContent = translations[state.lang].choose; return; }
    state.answered += 1;
    if (state.selected === q.answer) { state.score += q.points; el('feedback').textContent = `${translations[state.lang].correct}${q.points}`; el('feedback').style.color = '#1b8f3b'; }
    else { el('feedback').textContent = translations[state.lang].wrong; el('feedback').style.color = '#b3261e'; }
    refreshStats();
  });

  el('skip-btn').addEventListener('click', () => {
    const q = state.questions[state.current];
    if (q && !state.skipped.includes(q.id)) state.skipped.push(q.id);
    refreshStats();
    nextQuestion();
  });

  el('next-btn').addEventListener('click', nextQuestion);

  el('resume-skipped').addEventListener('click', () => {
    if (!state.skipped.length) return;
    const set = new Set(state.skipped);
    state.questions = state.questions.filter((q) => set.has(q.id));
    state.skipped = []; state.current = 0; state.selected = null; state.hint = 0;
    refreshStats(); renderQuestion();
  });

  el('next-hint').addEventListener('click', () => {
    const q = state.questions[state.current];
    if (!q) return;
    state.hint = Math.min(state.hint + 1, q.hints[state.lang].length - 1);
    el('hint-step').textContent = q.hints[state.lang][state.hint];
  });

  el('pdf-prev-page').addEventListener('click', () => { state.pdfPage = Math.max(1, state.pdfPage - 1); updatePdfViewer(); });
  el('pdf-next-page').addEventListener('click', () => { state.pdfPage += 1; updatePdfViewer(); });

  applyI18n();
  renderSources();
  state.questions = buildYearQuestions(state.year);
  refreshStats();
  renderQuestion();
}

init();
