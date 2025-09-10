let vida = 100;

const vidaEl = document.getElementById("vida");
const btn = document.getElementById("btnDano");

btn.addEventListener("click", () => {
    vida -= 1;
    if (vida <= 0) {
        vidaEl.textContent = "💀 Betinha foi derrotado! 💀";
        vidaEl.style.color = "#ff0000";
        vidaEl.style.textShadow = "0 0 20px #ff0000, 0 0 40px #ff0000";
        btn.disabled = true;
        btn.textContent = "☠️ Fim de jogo ☠️";
        btn.style.opacity = "0.5";
    } else {
        vidaEl.textContent = `Vida do Betinha: ${vida}`;
    }
});
