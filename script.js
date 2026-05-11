const themeBtn = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

const btnIncrease = document.getElementById("font-increase");
const btnDecrease = document.getElementById("font-decrease");
let currentFontSize = 100;

btnIncrease.addEventListener("click", () => {
    if (currentFontSize < 150) {
        currentFontSize += 10;
        document.documentElement.style.fontSize = currentFontSize + "%";
    }
});

btnDecrease.addEventListener("click", () => {
    if (currentFontSize > 80) {
        currentFontSize -= 10;
        document.documentElement.style.fontSize = currentFontSize + "%";
    }
});

function toggleTheme() {
    if (document.body.classList.contains("dark-mode")) {
        setLightMode();
    } else {
        setDarkMode();
    }
}

function setDarkMode() {
    document.body.classList.add("dark-mode");
    localStorage.setItem("theme", "dark");
    themeIcon.innerText = "☀️";
}

function setLightMode() {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("theme", "light");
    themeIcon.innerText = "🌙";
}


if (localStorage.getItem("theme") === "dark") {
    setDarkMode();
}s

themeBtn.addEventListener("click", toggleTheme);

window.addEventListener("scroll", () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById("scroll-progress").style.width = scrolled + "%";
});