// E1
const changeText1 = "This paragraph's text has been changed!";
const para1 = document.getElementById("myParagraph");
const btn1 = document.getElementById("changeTextButton");

btn1.addEventListener("click", () => {
  para1.innerText = changeText1;
});
// btn1.onclick = () => { para1.innerText = changeText1 };

// E2
document.getElementById('highlightFirstCity').addEventListener('click', () => {
    // The ?. ensures it only runs .classList if an element actually exists
    document.getElementById('citiesList').firstElementChild.classList?.add('highlight')
}) 

document.getElementById('highlightFirstCity').addEventListener('click', function () {
    // The ?. ensures it only runs .classList if an element actually exists
    this.firstElementChild.classList?.add('highlight')
}) 

// E3
document.getElementById('changeOrder').addEventListener('click', () => {
    document.getElementById('coffeeType').innerText = "Espresso";
})