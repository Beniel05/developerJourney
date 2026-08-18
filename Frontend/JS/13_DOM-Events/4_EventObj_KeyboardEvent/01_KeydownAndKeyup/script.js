document.querySelector('button').addEventListener('click', function() {
    alert("Clicked");
})

// Long press = keydown
window.addEventListener('keydown', (e) => {
// document.body.addEventListener('keydown', (e) => {
    console.log("KEY DOWN ->", e.key);
    console.log("KEY CODE: ", e.code); // Try typing shift in both sides.
})

// Release = keyup
document.body.addEventListener('keyup', () => {console.log("KEY UP");})