/* Это объявление переменной, мы наши кнопку по тегу */
const button = document.querySelector('button');
const emojiSelectorIcon = document.getElementById('emojiSelectorIcon');
const emojiSelector = document.getElementById('emojiSelector');
emojiSelectorIcon.addEventListener('click', () => {
    emojiSelector.classList.toggle('active');
});
/* Тут на кнопку навешиваем обрабочик, который ждёт клика и тогда запустит логику */
button.addEventListener('click', function() {
	alert('😀Если поверить в ложь, она тоже станет правдой😀')
})