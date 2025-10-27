//Варианты языков
const translations = {
    en: {
    "nav.home": "Home",
    "nav.info": "Info",
    "nav.places": "Places",
    "nav.map": "Map",
    "nav.guide": "Guide",
    "nav.settings": "Settings",
    "nav.faq": "FAQ",
    "sections.info": "Info",
    "sections.map": "Map",
    "sections.places": "Places",
    "sections.guide": "Guide",
    "changer.light-theme": "Light theme",
    "changer.dark-theme": "Dark theme",
    "sections-content.winfo-text": "Astana — the heart of Kazakhstan, Astana is the modern capital of Kazakhstan, located in the center of the country. The city is young, but has grown very quickly: back in 1997, the capital was moved here from Almaty, and since then it has become the main political and business center.",
    "sections-content.winfo-text2": "About 1.4 million people live here. The city is divided by the Yesil River: on the left bank is a modern business center with skyscrapers, on the right are old districts with a more traditional atmosphere.",
    "FAQ-questions.q1": "1. How to close the information window?",
    "FAQ-questions.q2": "2. Where can I find links to github and social networks?",
    "FAQ-questions.q3": "3. How to change site settings?",
    "FAQ-questions.q4": "4. How to write to the developer?",
    "FAQ-answers.a1": "To close the information window, click anywhere outside the window.",
    "FAQ-answers.a2": "You need to go to the very bottom of the site where all the contact links are located.",
    "FAQ-answers.a3": "To change the site settings, scroll down to the bottom of the site, or click on the settings button in the navigation bar",
    "FAQ-answers.a4": "You can contact the creator on social media."
    },
    ru: {
    "nav.home": "Главное",
    "nav.info": "Инфо",
    "nav.places": "Места",
    "nav.map": "Карта",
    "nav.guide": "Гид",
    "nav.settings": "Настройки",
    "nav.faq": "FAQ",
    "sections.info": "Инфо",
    "sections.map": "Карта",
    "sections.places": "Места",
    "sections.guide": "Гид",
    "changer.light-theme": "Светлая тема",
    "changer.dark-theme": "Темная тема",
    "sections-content.winfo-text": "Астана — сердце Казахстана. Астана — современная столица Казахстана, расположенная в центре страны. Город молодой, но очень быстро разросся: ещё в 1997 году столицу перенесли сюда из Алматы, и с тех пор он стал главным политическим и деловым центром.",
    "sections-content.winfo-text2": "Здесь проживает около 1,4 млн человек. Город разделён рекой Есиль: на левом берегу — современный деловой центр с небоскрёбами, на правом — старые районы с более традиционной атмосферой.",
    "FAQ-questions.q1": "1. Как закрыть информационное окно?",
    "FAQ-questions.q2": "2. Где я могу найти ссылки на GitHub и соц.сети?",
    "FAQ-questions.q3": "3. Как изменить настройки сайта?",
    "FAQ-questions.q4": "4. Как написать разработчику?",
    "FAQ-answers.a1": "Чтобы закрыть информационное окно, щелкните в любом месте за пределами окна.",
    "FAQ-answers.a2": "Вам необходимо зайти в самый низ сайта, где расположены все контактные ссылки.",
    "FAQ-answers.a3": "Чтобы изменить настройки сайта, прокрутите страницу вниз или нажмите кнопку настроек на панели навигации.",
    "FAQ-answers.a4": "Вы можете связаться с создателем в социальных сетях."
    },
    kz: {
    "nav.home": "Basty",
    "nav.info": "Aqparat",
    "nav.places": "Oryndar",
    "nav.map": "Karta",
    "nav.guide": "Nusqaulyq",
    "nav.settings": "Baptaular",
    "nav.faq": "FAQ",
    "sections.info": "Aqparat",
    "sections.map": "Karta",
    "sections.places": "Oryndar",
    "sections.guide": "Nusqaulyk",
    "changer.light-theme": "Zharyq nusqa",
    "changer.dark-theme": "Qarangy nusqa",
    "sections-content.winfo-text": "Astana – Qazaqstannyn zhuregi. Astana - Qazaqstannyn zamanayu astanasy, ol eldyn ortalygynda ornalasqan. Qalan zhas bolsa da, tez osti: 1997 zhyly astanany Almatydan osy zherge koshyrdi, sodan beri ol negizgi sayasy zhane iskerlik ortalyq boldy.",
    "sections-content.winfo-text2": "Munda shamamen 1,4 myllyon adam turady. Qala Esil ozenimen ekige bolingen: sol zhagasynda – zamanayu iskerlik ortalygy ulken gymarattar on zhagasynda – dastyrli atmospherasy bar eski audandar.",
    "FAQ-questions.q1": "1. Aqparat terezesin qalai zhabady?",
    "FAQ-questions.q2": "2. Github pen aleumettik zheli siltemelery qaida?",
    "FAQ-questions.q3": "3. Sait baptaularin qalai austiramin?",
    "FAQ-questions.q4": "4. Avtormen qalai bailanysa alamin?",
    "FAQ-answers.a1": "Terezeny zhabu ushin odan basqa kez kelgen zherge basynyz.",
    "FAQ-answers.a2": "Saittyn astyna barip, bailanis siltemelerin tandanyz.",
    "FAQ-answers.a3": "Saittyn baptaularin austiru ushin, baptaular bolimine tusiniz.",
    "FAQ-answers.a4": "Siz avtorga aleumettik zhelide zhaza alasyz."
    }
}

//Переменные 
const btnEn = document.querySelector('.en-lang');
const btnRu = document.querySelector('.ru-lang');
const btnKz = document.querySelector('.kz-lang');
const lcIndicator = document.querySelector('.lc-indicator');

//Обработчики событий
btnEn.addEventListener('click', () => changeLanguage('en'));
btnRu.addEventListener('click', () => changeLanguage('ru'));
btnKz.addEventListener('click', () => changeLanguage('kz'));

//Функция changeLanguage
function changeLanguage(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const translation = translations[lang][key];
    if (translation) {
      el.textContent = translation;
    }
  });

  // Сохраняем выбранный язык, чтобы не терялся при перезагрузке
  localStorage.setItem('selectedLang', lang);
}

//Загрузка языка при старте страницы
window.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('selectedLang') || 'en';
  changeLanguage(savedLang);
});

//Обработчики событий для смены позиции индикатора

//Для кнопки english
btnEn.addEventListener('click', () => {
  lcIndicator.classList.remove('rus');
  lcIndicator.classList.remove('kaz');
});

//Для кнопки russian
btnRu.addEventListener('click', () => {
  lcIndicator.classList.remove('kaz');
  lcIndicator.classList.add('rus');
})

//Для кнопки kazakh
btnKz.addEventListener('click', () => {
  lcIndicator.classList.add('kaz');
  lcIndicator.classList.remove('rus');
})


