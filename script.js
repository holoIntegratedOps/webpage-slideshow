const urls = [
    "https://premier-lotto-babaijebu-results.visuallottoboard.com/",
    "https://premier-lotto-babaijebu-results.visuallottoboard.com/frequent-number.html",
    "https://lottoclassificationchart.visuallottoboard.com/",
    "https://projects.holointegratedops.site/webpage-slideshow/pages/ads.html",
    "https://projects.holointegratedops.site/webpage-slideshow/pages/announcement.html"
    // "https://projects.holointegratedops.site/webpage-slideshow/pages/forecast.html"
]

// slide function
const container = document.getElementById("slides")
const iframes = urls.map(url => {
    const frame = document.createElement("iframe")
    frame.src = url
    frame.className = "slide-frame"
    container.appendChild(frame)
    return frame
})

let index = 0
const interval = 60000

function showNext() {
    iframes.forEach(f => f.classList.remove("active"))
    const activeFrame = iframes[index]
    activeFrame.classList.add("active")
    index = (index + 1) % iframes.length
}

showNext()
setInterval(showNext, interval)
// slide function end

// casino function
document.addEventListener("DOMContentLoaded", () => {
    const numbers = document.querySelectorAll(".container div")

    function randomGlow() {
        numbers.forEach(num => num.classList.remove("active-glow"))

        const randomNum = numbers[Math.floor(Math.random() * numbers.length)]
        randomNum.classList.add("active-glow")

        setTimeout(() => {
            randomNum.classList.remove("active-glow")
        }, 800)
    }


    setInterval(randomGlow, 1500)
})
// casino function end