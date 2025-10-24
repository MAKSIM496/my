// Находим кнопку
const actionBtn = document.getElementById('actionBtn');

// Обработчик клика
actionBtn.addEventListener('click', () => {
    alert('Вы нажали на кнопку!');
    actionBtn.innerHTML = '<i class="fas fa-check"></i> Спасибо!';
});
