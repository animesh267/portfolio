/* ===== GLOBAL LOVE METER ===== */
let loveValue = 0;

function increaseLove(amount) {
    loveValue += amount;
    if (loveValue > 100) loveValue = 100;
    const meter = document.getElementById("loveMeter");
    if (meter) meter.style.width = loveValue + "%";
}

/* ===== FLOATING HEARTS ===== */
function spawnHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";
    heart.style.animationDuration = Math.random() * 3 + 3 + "s";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
}

/* ===== SPARKLES ===== */
function spawnSparkle() {
    const sparkle = document.createElement("div");
    sparkle.className = "sparkle";
    sparkle.innerHTML = "✨";
    sparkle.style.left = Math.random() * 100 + "vw";
    sparkle.style.top = Math.random() * 100 + "vh";
    sparkle.style.animationDuration = "2s";
    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 2000);
}

/* ===== PETALS ===== */
function spawnPetal() {
    const petal = document.createElement("div");
    petal.className = "petal";
    petal.innerHTML = "🌸";
    petal.style.left = Math.random() * 100 + "vw";
    petal.style.animationDuration = Math.random() * 5 + 5 + "s";
    document.body.appendChild(petal);
    setTimeout(() => petal.remove(), 8000);
}

/* ===== CURSOR GLITTER ===== */
document.addEventListener("mousemove", (e) => {
    const trail = document.createElement("div");
    trail.className = "trail";
    trail.innerHTML = "✨";
    trail.style.left = e.pageX + "px";
    trail.style.top = e.pageY + "px";
    document.body.appendChild(trail);
    setTimeout(() => trail.remove(), 800);
});

/* ===== SCREEN SHAKE ===== */
function shakeScreen() {
    document.body.classList.add("shake");
    setTimeout(() => document.body.classList.remove("shake"), 400);
}

/* ===== TYPEWRITER EFFECT ===== */
function typeWriter(element, text, speed = 40) {
    let i = 0;
    element.innerHTML = "";
    function typing() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }
    typing();
}

/* ===== CONFETTI BURST ===== */
function confettiBurst() {
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement("div");
        confetti.innerHTML = "🎉";
        confetti.style.position = "fixed";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.top = "-20px";
        confetti.style.fontSize = "20px";
        confetti.style.animation = "floatUp 3s linear forwards";
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 3000);
    }
}

/* ===== FIREWORKS ===== */
function fireworks() {
    for (let i = 0; i < 30; i++) {
        const fire = document.createElement("div");
        fire.innerHTML = "✨";
        fire.style.position = "fixed";
        fire.style.left = Math.random() * 100 + "vw";
        fire.style.top = Math.random() * 100 + "vh";
        fire.style.fontSize = "25px";
        document.body.appendChild(fire);
        setTimeout(() => fire.remove(), 1000);
    }
}

/* ===== AUTO SPAWN SYSTEMS ===== */
setInterval(spawnHeart, 800);
setInterval(spawnSparkle, 600);
setInterval(spawnPetal, 3000);
