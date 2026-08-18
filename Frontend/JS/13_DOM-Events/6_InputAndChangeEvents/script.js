const changeEventh2 = document.getElementById('change');
const inputEventh2 = document.getElementById('input');

const input = document.querySelector("input"); // tag selector

// It's like auto save in vscode - change takes takes you click away (outside the input box).
input.addEventListener('change', (e) => {
    changeEventh2.innerText = input.value;
});

// It's like live server - type to get result without any gap.
input.addEventListener('input', (e) => {
    inputEventh2.innerText = input.value;
    // console.log(e); // For reference.
});