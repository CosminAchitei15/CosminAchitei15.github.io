const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const finalMessage = document.getElementById("finalMessage");

document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.querySelector(".mycanvas");

    for (let i = 0; i < 100; i++) {
        let star = document.createElement("div");
        star.classList.add("star");

        let x = Math.random() * 900; 
        let y = Math.random() * 900; 

        star.style.left = `${x}px`;
        star.style.top = `${y}px`;

        canvas.appendChild(star);
    }
});

yesBtn.addEventListener("click", () => {
    finalMessage.classList.remove("hidden");
    finalMessage.classList.add("valentine-text")
});

noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * window.innerWidth * 0.6;
    const y = Math.random() * window.innerHeight * 0.6;
    noBtn.style.position = "absolute";
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});