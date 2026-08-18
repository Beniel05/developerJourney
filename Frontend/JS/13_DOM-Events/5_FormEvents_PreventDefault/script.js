// Since I only have one form - and input. I select them with tag name 
const form = document.querySelector('form');
const input = document.querySelector('input');

const ul = document.querySelector('ul');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log("Prevented Default after every submit (NO Reload)");
    
    const li = document.createElement('li');
    li.innerText = input.value;

    input.value = '';
    
    ul.appendChild(li);
})