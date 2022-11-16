const color = [
    "Aquamarine",
    "SteelBlue",
    "Salmon",
    "LightSteelBlue",
    "PeachPuff",
    "Indigo",
    "Aquamarine"
]
const container = document.querySelector("#root")

const animateBubble = (x,y) => {

    const randomColor = color[Math.floor(Math.random() * color.length)]

    const bubble = document.createElement("div")
    bubble.className = "bubble"
    bubble.style.backgroundColor = randomColor
    bubble.style.left = `${x}px`
    bubble.style.top = `${y}px`

    container.appendChild(bubble)

    setTimeout( () => container.removeChild(bubble), 8000)
}

window.onmousemove = e => animateBubble(e.clientX, e.clientY)
