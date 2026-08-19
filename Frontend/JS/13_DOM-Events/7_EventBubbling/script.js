const btn = document.getElementById('btn');
const container = document.getElementById('container');

container.addEventListener('click', () => {
    container.classList.toggle('hide');
})

function makeRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

btn.addEventListener('click', (e) => {
    e.stopPropagation(); // This will stop the parent being triggered.
    // This only prevent the button clicks don't trigger the hide effect of the parent.

    // But when the parent got clicked directly then the hide will not prevented.

    container.style.backgroundColor = makeRandomColor();
})

