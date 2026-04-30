const themeBtn = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

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
}


themeBtn.addEventListener("click", toggleTheme);

// Scroll animation från ett gammalt projekt i webb 1
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {
        const targetId = this.getAttribute("href");
        if (targetId === "#") return;
        
        e.preventDefault();
        const target = document.querySelector(targetId);
        if (!target) return;

        const startPosition = window.scrollY;
        const targetPosition = target.getBoundingClientRect().top + window.scrollY;
        const distance = targetPosition - startPosition;
        const duration = 600;
        let startTime = null;

        function animation(currentTime) {
            if (!startTime) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);
            
            window.scrollTo(0, startPosition + distance * easeInOutQuad(progress));
            
            if (timeElapsed < duration) {
                requestAnimationFrame(animation);
            }
        }

        function easeInOutQuad(t) {
            return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
        }

        requestAnimationFrame(animation);
    });
});