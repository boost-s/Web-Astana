document.addEventListener('DOMContentLoaded', () => {
  const buttons = Array.from(document.querySelectorAll('.FAQquestions'));
  const answers = Array.from(document.querySelectorAll('.FAQanswers-container'));

  if (buttons.length === 0 || answers.length === 0) {
    console.warn('FAQ: buttons or answers not found', { buttonsCount: buttons.length, answersCount: answers.length });
    return;
  }

  buttons.forEach((btn, idx) => {
    btn.addEventListener('click', (event) => {
      event.stopPropagation(); // предотвращаем закрытие при клике на саму кнопку

      const target = answers[idx];
      if (!target) return;

      // если уже открыт — закрываем
      if (target.classList.contains('open')) {
        target.classList.remove('open');
        return;
      }

      // закрываем все
      answers.forEach(a => a.classList.remove('open'));

      // открываем выбранный
      target.classList.add('open');
    });
  });

  // Клик вне окна — закрыть всё
  document.addEventListener('click', (event) => {
    // Проверяем, был ли клик внутри окна ответа или кнопки
    const clickedInside = event.target.closest('.FAQanswers-container') || event.target.closest('.FAQquestions');

    if (!clickedInside) {
      answers.forEach(a => a.classList.remove('open'));
    }
  });
});
