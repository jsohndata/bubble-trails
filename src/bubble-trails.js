const container = document.querySelector("#root");

let currentCount = 0;

const color = [
    "#00a8a8", // Dark Neon Cyan
    "#0033cc", // Dark Electric Blue
    "#ff1493", // Dark Hot Pink
    "#666666", // Dark Bright Silver
    "#ff4500", // Dark Neon Coral
    "#9400d3", // Dark Vibrant Purple
    "#00ced1", // Dark Bright Turquoise
    "#008b8b", // Dark Cyan
    "#4682b4", // Dark Light Sky Blue
    "#ff6347", // Dark Coral
    "#2f4f4f", // Dark Light Slate Gray
    "#ff69b4", // Dark Coral Pink
    "#4169e1", // Dark Electric Blue
    "#40e0d0"  // Dark Turquoise
];

const createBubble = (posX, posY) => {
    const randomColor = color[Math.floor(Math.random() * color.length)];

    const bubble = document.createElement("div");
    bubble.className = "bubble";
    bubble.style.backgroundColor = randomColor;
    bubble.style.left = `${posX}px`;
    bubble.style.top = `${posY}px`;

    container.appendChild(bubble);

    setTimeout(() => container.removeChild(bubble), 8000);
};

const updateStats = (element, value) => document.querySelector(element).innerHTML = value;

const handleEvent = (x, y) => {
    createBubble(x, y);
    updateStats(".posX", x);
    updateStats(".posY", y);
    updateStats(".count", `#${currentCount++}`);
};

window.addEventListener("mousemove", (e) => {
    handleEvent(e.clientX, e.clientY);
});

window.addEventListener("touchmove", (e) => {
    const touch = e.touches[0];
    handleEvent(touch.clientX, touch.clientY);
});


// window.addEventListener("touchstart", (e) => {
//     [...e.changedTouches].forEach(touch => {
//         createBubble(touch.pageX, touch.pageY)
//         updateStats(".posX", touch.pageX)
//         updateStats(".posY", touch.pageY)
//     })
// })

// window.addEventListener("touchmove", (e) => {
//     console.log('move')
// })

// window.addEventListener("touchend", (e) => {
//     console.log('end')
// })