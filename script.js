const urls = [
    "https://premier-lotto-babaijebu-results.visuallottoboard.com/",
    "https://premier-lotto-babaijebu-results.visuallottoboard.com/frequent-number.html",
    "https://lottoclassificationchart.visuallottoboard.com/",
<<<<<<< HEAD
<<<<<<< HEAD
    "https://www.holointegratedops.site/webpage-slideshow/pages/ads.html",
=======
>>>>>>> 96ba34b0932272de1628e63677b90481f4a97388
    "https://www.holointegratedops.site/webpage-slideshow/pages/forecast.html"
=======
    "https://www.holointegratedops.site/webpage-slideshow/pages/ads.html"
    // "https://www.holointegratedops.site/webpage-slideshow/pages/forecast.html"
>>>>>>> ola-development
];

const container = document.getElementById("slides");
const iframes = urls.map(url => {
    const frame = document.createElement("iframe");
    frame.src = url;
    frame.className = "slide-frame"
    container.appendChild(frame);
    return frame;
});

let index = 0;
const interval = 60000;

function showNext() {
    iframes.forEach(f => f.classList.remove("active"));
    const activeFrame = iframes[index];
    activeFrame.classList.add("active");
    index = (index + 1) % iframes.length;
}

showNext();
setInterval(showNext, interval);

document.addEventListener("DOMContentLoaded", () => {
    const numbers = document.querySelectorAll(".container div");

    function randomGlow() {
        numbers.forEach(num => num.classList.remove("active-glow"));

        const randomNum = numbers[Math.floor(Math.random() * numbers.length)];
        randomNum.classList.add("active-glow");

        setTimeout(() => {
            randomNum.classList.remove("active-glow");
        }, 800);
    }


    setInterval(randomGlow, 1500);
});
