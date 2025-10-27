//Переменные
const homeBtn = document.querySelector('.nav-button1');
const infoBtn = document.querySelector('.nav-button2');
const placesBtn = document.querySelector('.nav-button3');
const mapBtn = document.querySelector('.nav-button4');
const guideBtn = document.querySelector('.nav-button5');
const FAQBtn = document.querySelector('.nav-button6');
const settingsBtn = document.querySelector('.nav-button7');

//Обработчики событий
//homeBtn
homeBtn.addEventListener('click', () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
});

//infoBtn
infoBtn.addEventListener('click', (event) => {
    window.scrollTo({top: 550, behavior: 'smooth'});

    event.stopPropagation();
    const rect = btnInfo.getBoundingClientRect();
    const x = rect.left + window.scrollX;
    const y = rect.top + window.scrollY;

    const isActive = windowInfo.style.transform === 'scale(1)';
    closeAllWindows(); // Закрыть другие окна

    if (!isActive) {
        windowInfo.style.transform = 'scale(1)';
        windowInfo.style.left = `${x}px`;
        windowInfo.style.top = `${y}px`;
        windowInfo.style.transformOrigin = '5% 5%';
    }
});

//placesBtn
placesBtn.addEventListener('click', (event) => {
    window.scrollTo({top: 550, behavior: 'smooth'});

    event.stopPropagation();
    const rect = btnPlaces.getBoundingClientRect();
    const x = rect.right + window.scrollX;
    const y = rect.top + window.scrollY;

    const isActive = windowPlaces.style.transform === 'scale(1)';
    closeAllWindows();

    if (!isActive) {
        windowPlaces.style.transform = 'scale(1)';
        windowPlaces.style.left = `${x - windowPlaces.offsetWidth}px`;
        windowPlaces.style.top = `${y}px`;
        windowPlaces.style.transformOrigin = '95% 5%';
    }
});

//mapBtn
mapBtn.addEventListener('click', (event) => {
    window.scrollTo({top: 550, behavior: 'smooth'});

    event.stopPropagation();
    const rect = btnMap.getBoundingClientRect();
    const x = rect.left + window.scrollX;
    const y = rect.bottom + window.scrollY;

    const isActive = windowMap.style.transform === 'scale(1)';
    closeAllWindows();

    if (!isActive) {
        windowMap.style.transform = 'scale(1)';
        windowMap.style.left = `${x}px`;
        windowMap.style.top = `${y - windowMap.offsetHeight}px`;
        windowMap.style.transformOrigin = '5% 95%';
    }
});

//guideBtn
guideBtn.addEventListener('click', (event) => {
    window.scrollTo({top: 550, behavior: 'smooth'});

    event.stopPropagation();
    const rect = btnGuide.getBoundingClientRect();
    const x = rect.right + window.scrollX;
    const y = rect.bottom + window.scrollY;

    const isActive = windowGuide.style.transform === 'scale(1)';
    closeAllWindows();

    if (!isActive) {
        windowGuide.style.transform = 'scale(1)';
        windowGuide.style.left = `${x - windowGuide.offsetWidth}px`;
        windowGuide.style.top = `${y - windowGuide.offsetHeight}px`;
        windowGuide.style.transformOrigin = '95% 95%';
    }
});

//FAQBtn
FAQBtn.addEventListener('click', () => {
    window.scrollTo({top: 1400, behavior: 'smooth'});
})

//settingsBtn
settingsBtn.addEventListener('click', () => {
    window.scrollTo({top: 1400, behavior: 'smooth'});
})