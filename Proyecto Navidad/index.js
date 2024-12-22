const yesBtn = document.querySelector("#yesBtn");
yesBtn.addEventListener("click", function () {
    alert("¡Más te vale! 🔪");
    alert("Sabía que ibas a decir que sí 👨🏻‍🎓");
    alert("¡Te quiero mucho! ❤️");
});

const noBtn = document.querySelector("#noBtn");

noBtn.addEventListener("mouseover", function () {
    const randomX = Math.floor(Math.random() * 80);
    const randomY = Math.floor(Math.random() * 80);
    noBtn.style.setProperty('top', randomY + '%');
    noBtn.style.setProperty('left', randomX + '%');
    noBtn.style.setProperty('transform', `translate(-${randomX}%, -${randomY}%)`);
}); 

document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("músicasia");
    const snowflakesContainer = document.getElementById("snowflakes");

    let snowflakeInterval; 

    
    const createSnowflake = () => {
        const snowflake = document.createElement("div");
        snowflake.classList.add("snowflake");
        snowflake.textContent = "❄️";

        
        const size = Math.random() * 20 + 10; 
        const left = Math.random() * 100; 
        snowflake.style.fontSize = `${size}px`;
        snowflake.style.left = `${left}%`;
        snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`; 

        
        snowflakesContainer.appendChild(snowflake);

        
        snowflake.addEventListener("animationend", () => {
            snowflake.remove();
        });
    };

    
    audio.addEventListener("play", () => {
        snowflakeInterval = setInterval(createSnowflake, 200); 
    });

    
    audio.addEventListener("pause", () => {
        clearInterval(snowflakeInterval);
    });
});

