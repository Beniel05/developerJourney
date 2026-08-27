let p1Score = document.getElementById('p1Score');
let p2Score = document.getElementById('p2Score');

const p1Button = document.getElementById('p1Button');
const p2Button = document.getElementById('p2Button');

const reset = document.getElementById('reset');

p1Button.addEventListener('click', () => {
    let currentP1Score = Number(p1Score.textContent);
    p1Score.textContent = ++currentP1Score;
})

p2Button.addEventListener('click', () => {
    let currentP2Score = Number(p2Score.textContent);
    p2Score.textContent = ++currentP2Score;
})

reset.addEventListener('click', () => {
    p1Score.textContent = 0;
    p2Score.textContent = 0;
})