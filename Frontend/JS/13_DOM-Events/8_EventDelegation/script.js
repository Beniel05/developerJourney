const form = document.getElementById("form");
const list = document.getElementById("list");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Will prevent the refresh and loss of data. When form gets submitted

  const username = form.elements.username.value;
  const comment = form.elements.comment.value;

  if (username.trim() !== "" && comment.trim() !== "") {
    postComment(username, comment);
    form.reset();
  } else {
    alert("Both Username and Comment have to be filled.");
  }
});

function postComment(username, comment) {
  const li = document.createElement("li");
  const strong = document.createElement("strong");

  strong.textContent = username;

  li.append(strong); // Appends the actual DOM object
  li.append(` - ${comment}`); // Appends a text node right next to it (Same line)
  list.prepend(li); // Puts the final completed object into the list

  // I used prepend - to have the pre-defined <p> child in the ul stays last.
  // These li will be placed before (pre) the <p>
}

// Event Delegation;
list.addEventListener('click', (e) => {
    // console.dir(e);
    e.target.nodeName === 'LI' && e.target.remove();
    // e.target.nodeName always returns uppercase letters (like 'LI'), not lowercase.
})