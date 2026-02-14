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
    nextHint: 'تلميح إضافي', sourceTitle: 'مصادر السنوات', sourceDesc: 'كل ملفات التمارين المزوّدة متاحة هنا:',
    q: 'السؤال', points: 'النقاط', choose: 'اختر إجابة أولاً.', correct: 'إجابة رائعة! +',
    wrong: 'إجابة غير صحيحة. جرّب تحليل النمط من جديد.', finished: 'أنهيت هذه المجموعة! يمكنك إعادة المتخطى أو تغيير السنة.',
    demo: 'تمارين تدريبية ممثلة لطريقة كنغر (يمكنك استبدالها بنص الأسئلة الأصلية بسهولة).',
  },
  de: {
    title: 'Känguru-Mathe-Quest (Klasse 3-4)', lang: 'Sprache', year: 'Jahr', progress: 'Fortschritt',
    score: 'Punkte', answered: 'Versuche', skipped: 'Übersprungen', resumeSkipped: 'Übersprungene lösen',
    submit: 'Antwort prüfen', skip: 'Überspringen', next: 'Nächste Aufgabe', hintTitle: 'Schrittweiser Tipp',
    nextHint: 'Weiterer Tipp', sourceTitle: 'Jahresquellen', sourceDesc: 'Alle bereitgestellten Aufgaben-PDFs:',
    q: 'Aufgabe', points: 'Punkte', choose: 'Bitte zuerst eine Antwort wählen.', correct: 'Richtig! +',
    wrong: 'Nicht korrekt. Prüfe das Muster erneut.', finished: 'Diese Runde ist fertig! Löse Übersprungene oder wähle ein anderes Jahr.',
    demo: 'Beispielaufgaben im Känguru-Stil (Originaltexte können direkt ersetzt werden).',
  },
  en: {
    title: 'Känguru Math Quest (Grade 3-4)', lang: 'Language', year: 'Year', progress: 'Progress',
    score: 'Score', answered: 'Attempts', skipped: 'Skipped', resumeSkipped: 'Resume skipped questions',
    submit: 'Check answer', skip: 'Skip', next: 'Next question', hintTitle: 'Progressive hint',
    nextHint: 'Show more hint', sourceTitle: 'Year sources', sourceDesc: 'All provided exercise PDFs are listed:',
    q: 'Question', points: 'Points', choose: 'Choose an answer first.', correct: 'Great answer! +',
    wrong: 'Not correct yet. Re-check the number pattern.', finished: 'Round completed! Resume skipped or switch year.',
    demo: 'Sample Känguru-style practice set (replaceable with original wording).',
  }
};

const baseQuestions = [
  {
    points: 3,
    choices: ['12', '14', '16', '18'],
    answer: 1,
    text: {
      ar: 'في صفّ فيه 8 طلاب و6 طالبات. كم عدد الأرجل المجموع؟',
      de: 'In einer Klasse sind 8 Jungen und 6 Mädchen. Wie viele Beine insgesamt?',
      en: 'A class has 8 boys and 6 girls. How many legs in total?'
    },
    hints: {
      ar: ['فكّر: كل طفل له نفس عدد الأرجل.', 'احسب عدد الأطفال أولاً ثم اضرب ×2.'],
      de: ['Jedes Kind hat gleich viele Beine.', 'Zuerst Kinderzahl bestimmen, dann ×2 rechnen.'],
      en: ['Each child has the same number of legs.', 'Count children first, then multiply by 2.']
    }
  },
  {
    points: 4,
    choices: ['9', '10', '11', '12'],
    answer: 2,
    text: {
      ar: 'لدى لينا 5 كرات. أعطاها أخوها ضعف هذا العدد ثم فقدت 4. كم بقي؟',
      de: 'Lina hat 5 Bälle. Ihr Bruder gibt ihr das Doppelte davon, dann verliert sie 4. Wie viele bleiben?',
      en: 'Lina has 5 balls. Her brother gives her double that amount, then she loses 4. How many are left?'
    },
    hints: {
      ar: ['"ضعف العدد" يعني 2×5.', 'اجمع أولاً ثم اطرح 4 في النهاية.'],
      de: ['"Das Doppelte" bedeutet 2×5.', 'Erst addieren, dann 4 abziehen.'],
      en: ['"Double" means 2×5.', 'Add first, subtract 4 at the end.']
    }
  },
  {
    points: 5,
    choices: ['24', '26', '28', '30'],
    answer: 2,
    text: {
      ar: 'ما ناتج: 3 + 5 + 7 + 9 + 4 ؟',
      de: 'Was ist 3 + 5 + 7 + 9 + 4?',
      en: 'What is 3 + 5 + 7 + 9 + 4?'
    },
    hints: {
      ar: ['اجمع الأعداد الفردية معًا ثم أضف 4.', 'يمكنك التجميع: (3+9) و(5+7).'],
      de: ['Addiere zuerst die ungeraden Zahlen, dann +4.', 'Gruppieren hilft: (3+9) und (5+7).'],
      en: ['Add odd numbers first, then +4.', 'Grouping helps: (3+9) and (5+7).']
    }
  },
  {
    points: 5,
    choices: ['36', '42', '48', '54'],
    answer: 1,
    text: {
      ar: 'مستطيل طوله 8 وعرضه 13. ما محيطه؟',
      de: 'Ein Rechteck hat Länge 8 und Breite 13. Wie groß ist der Umfang?',
      en: 'A rectangle has length 8 and width 13. What is its perimeter?'
    },
    hints: {
      ar: ['المحيط = مجموع كل الأضلاع.', 'استخدم الصيغة: 2 × (الطول + العرض).'],
      de: ['Umfang = Summe aller Seiten.', 'Formel: 2 × (Länge + Breite).'],
      en: ['Perimeter is the sum of all sides.', 'Use formula: 2 × (length + width).']
    }
  }
];

const state = { lang: 'ar', year: 2025, current: 0, selected: null, score: 0, answered: 0, skipped: [], hint: 0, questions: [] };

const el = (id) => document.getElementById(id);

function buildYearQuestions(year) {
  return baseQuestions.map((q, index) => ({ ...q, id: `${year}-${index + 1}` }));
}

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
  el('source-desc').textContent = `${t.sourceDesc} ${t.demo}`;
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
  el('question-index').textContent = `${t.q} ${state.current + 1}/${state.questions.length}`;
  el('question-points').textContent = `${t.points}: ${q.points}`;
  el('question-text').textContent = q.text[state.lang];
  el('hint-step').textContent = q.hints[state.lang][state.hint] || q.hints[state.lang].at(-1);
  const choices = el('choices');
  choices.innerHTML = '';
  q.choices.forEach((choice, idx) => {
    const c = document.createElement('button');
    c.className = `choice ${state.selected === idx ? 'selected' : ''}`;
    c.textContent = choice;
    c.addEventListener('click', () => {
      state.selected = idx;
      renderQuestion();
    });
    choices.appendChild(c);
  });
  el('feedback').textContent = '';
}

function refreshStats() {
  el('score').textContent = state.score;
  el('answered').textContent = state.answered;
  el('skipped-count').textContent = state.skipped.length;
}

function nextQuestion() {
  state.selected = null;
  state.hint = 0;
  state.current += 1;
  renderQuestion();
}

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
    state.current = 0;
    state.selected = null;
    state.skipped = [];
    state.score = 0;
    state.answered = 0;
    state.hint = 0;
    refreshStats();
    renderQuestion();
  });

  el('language-select').addEventListener('change', (e) => {
    state.lang = e.target.value;
    applyI18n();
    renderQuestion();
  });

  el('submit-btn').addEventListener('click', () => {
    const q = state.questions[state.current];
    if (!q) return;
    if (state.selected === null) {
      el('feedback').textContent = translations[state.lang].choose;
      return;
    }
    state.answered += 1;
    if (state.selected === q.answer) {
      state.score += q.points;
      el('feedback').textContent = `${translations[state.lang].correct}${q.points}`;
      el('feedback').style.color = '#1b8f3b';
    } else {
      el('feedback').textContent = translations[state.lang].wrong;
      el('feedback').style.color = '#b3261e';
    }
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
    state.skipped = [];
    state.current = 0;
    state.selected = null;
    state.hint = 0;
    refreshStats();
    renderQuestion();
  });

  el('next-hint').addEventListener('click', () => {
    const q = state.questions[state.current];
    if (!q) return;
    state.hint = Math.min(state.hint + 1, q.hints[state.lang].length - 1);
    el('hint-step').textContent = q.hints[state.lang][state.hint];
  });

  applyI18n();
  renderSources();
  state.questions = buildYearQuestions(state.year);
  refreshStats();
  renderQuestion();
}

init();
