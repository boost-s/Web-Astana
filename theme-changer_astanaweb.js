//Variables
const whitethemeBtn = document.querySelector('.white-theme');
const darkthemeBtn = document.querySelector('.dark-theme-btn');
const indicator = document.querySelector('.tc-indicator');

//Event Listener of white-theme button
whitethemeBtn.addEventListener('click', () => {
    document.body.classList.remove('dark-theme');
    indicator.classList.remove('dt');
});

//Event Listener of dark-theme button
darkthemeBtn.addEventListener('click', () => {
    document.body.classList.add('dark-theme');
    indicator.classList.add('dt');
});