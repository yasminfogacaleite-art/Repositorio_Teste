// 1. Funcionalidade de riscar os ingredientes concluintes
const ingredients = document.querySelectorAll('.ingredient-list li');

ingredients.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('checked');
    });
});

// 2. Funcionalidade do botão do cronômetro (Simulação)
const timerBtn = document.getElementById('btn-timer');
const timerStatus = document.getElementById('timer-status');

timerBtn.addEventListener('click', () => {
    timerStatus.innerText = "⏱️ Cronômetro iniciado! Fique de olho no forno para não ressecar seu brownie.";
    timerBtn.disabled = true;
    timerBtn.style.backgroundColor = "#bfa895";
    timerBtn.style.cursor = "default";
});