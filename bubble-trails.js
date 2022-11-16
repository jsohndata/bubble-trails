const container = document.querySelector("#root")

let currentCount = 0

const color = [
    "Aquamarine",
    "SteelBlue",
    "Salmon",
    "LightSteelBlue",
    "PeachPuff",
    "Indigo",
    "Aquamarine"
]

const createBubble = (posX,posY) => {
    const randomColor = color[ Math.floor(Math.random() * color.length) ]

    const bubble = document.createElement("div")
        bubble.className = "bubble"
        bubble.style.backgroundColor = randomColor
        bubble.style.left = `${posX}px`
        bubble.style.top = `${posY}px`
    
    container.appendChild(bubble)

    setTimeout( () => container.removeChild(bubble), 8000)
}

const updateStats = (element, value) => document.querySelector(element).innerHTML = value



window.onmousemove = e => {
    createBubble(e.clientX, e.clientY)
    
    // Extra info, nothing to do with animation.
    updateStats(".posX", e.clientX)
    updateStats(".posY", e.clientY)
    updateStats(".count", `#${currentCount++}`)
}
