const container = document.querySelector("#container");

for (let i = 0; i < 100; i++) {
  const btn = document.createElement("button");
  btn.textContent = "Button!";
  //   container.insertAdjacentElement('beforeend', btn);
  container.append(btn);
}

/*              BETTER SOLUTION             */
/*
/ 1. Get a direct reference to the body (faster than querySelector)
const body = document.body;

/ 2. Create an invisible, in-memory container (shopping basket)
/ This prevents the browser from refreshing the screen 100 times
const fragment = document.createDocumentFragment();

/ 3. Loop 100 times to build the buttons entirely in memory
for (let i = 0; i < 100; i++) {
  const btn = document.createElement("button");
  
  / Assign text directly (cleaner and faster than .append)
  btn.textContent = "Button!";
  
  / Add the button to our invisible fragment container
  fragment.append(btn);
}

/ 4. Inject all 100 buttons into the actual webpage at once
/ This triggers only ONE single browser paint/layout update
body.append(fragment);
*/
