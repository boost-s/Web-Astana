// ОБЩЕЕ

// Переменные кнопок
const btnInfo = document.querySelector('.section-info');
const btnPlaces = document.querySelector('.section-places');
const btnMap = document.querySelector('.section-map');
const btnGuide = document.querySelector('.section-guide');

// Переменные окон
const windowInfo = document.querySelector('.window-info');
const windowPlaces = document.querySelector('.window-places');
const windowMap = document.querySelector('.window-map');
const windowGuide = document.querySelector('.window-guide');

// Скрыть все окна
function closeAllWindows(exceptWindow = null) {
    [windowInfo, windowPlaces, windowMap, windowGuide].forEach(win => {
        if (win !== exceptWindow) {
            win.style.transform = 'scale(0)';
        }
    });
}

// блок info
btnInfo.addEventListener('click', (event) => {
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

// блок places
btnPlaces.addEventListener('click', (event) => {
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

// блок map
btnMap.addEventListener('click', (event) => {
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

// блок guide
btnGuide.addEventListener('click', (event) => {
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

// Клик по документу — закрывает все окна
document.addEventListener('click', () => {
    closeAllWindows();
});

// Предотвращение закрытия при клике по окнам
[windowInfo, windowPlaces, windowMap, windowGuide].forEach(win => {
    win.addEventListener('click', event => {
        event.stopPropagation();
    });
});

