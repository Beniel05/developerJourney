// E1
const changeText1 = "This paragraph's text has been changed!";
const para1 = document.getElementById("myParagraph");
const btn1 = document.getElementById("changeTextButton");

btn1.addEventListener("click", () => {
  para1.innerText = changeText1;
});
// btn1.onclick = () => { para1.innerText = changeText1 };

// E2
document.getElementById("highlightFirstCity").addEventListener("click", () => {
  // The ?. ensures it only runs .classList if an element actually exists
  document
    .getElementById("citiesList")
    .firstElementChild.classList?.add("highlight");
});

document
  .getElementById("highlightFirstCity")
  .addEventListener("click", function () {
    // The ?. ensures it only runs .classList if an element actually exists
    this.firstElementChild.classList?.add("highlight");
  });

// E3
document.getElementById("changeOrder").addEventListener("click", () => {
  const text = document.getElementById("coffeeType");
  text.innerText = "Espresso";

  const textStyle = text.style;
  textStyle.backgroundColor = "brown";
  textStyle.padding = "5px";
});

// E4
document.getElementById("addNewItem").addEventListener("click", () => {
  const newItem = document.createElement("li");
  newItem.innerText = "Egg";

  document.getElementById("shoppingList").appendChild(newItem);
});

// E5
document.getElementById("removeLastTask").addEventListener("click", () => {
  const taskList = document.getElementById("taskList");
  // taskList.removeChild(taskList.lastElementChild);
  taskList.lastElementChild.remove();
});

// E6
document.getElementById("clickMeButton").addEventListener("dblclick", () => {
  alert("Got Clicked!");
});

// E7
document.getElementById("teaList").addEventListener("click", (e) => {
  if (e.target && e.target.matches(".teaItem")) {
    alert("You selected: " + e.target.textContent);
  }
});

// E8
document
  .getElementById("feedbackForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let feedback = document.getElementById("feedbackInput").value;
    console.log(feedback);
    document.getElementById(
      "feedbackDisplay"
    ).textContent = `Feedback is: ${feedback}`;
  });

// E9

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("domStatus").textContent = "DOM fully loaded";
});

// E10
document.getElementById('toggleHighlight').addEventListener('click', () => {
    document.getElementById('descriptionText').classList.toggle('highlight');
})