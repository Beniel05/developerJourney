const h1 = document.querySelector('h1');
const input = document.getElementById('username');

input.addEventListener('input', () => {
    h1.innerText = `Welcome, ${input.value}`
})