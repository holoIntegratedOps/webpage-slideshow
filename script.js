const urls = [
    "https://premier-lotto-babaijebu-results.visuallottoboard.com/",
    "https://premier-lotto-babaijebu-results.visuallottoboard.com/frequent-number.html",
    "https://lottoclassificationchart.visuallottoboard.com/"
];

const container = document.getElementById("slides");
const iframes = urls.map(url => {
    const frame = document.createElement("iframe");
    frame.src = url;
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