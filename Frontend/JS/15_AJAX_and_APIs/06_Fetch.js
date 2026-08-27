fetch("https://swapi.dev/api/people/1/")
  .then((res) => {
    // console.log(`Resolved. ${res}`);
    console.log("Resolved:", res);
    res.json().then((data) => {
      console.log("Data:", data);
    });
  })
  .catch((err) => {
    console.log("Error:", err);
  });

console.log("======= TWO REQUEST (only if first resolved)=========");

fetch("https://swapi.dev/api/people/1/")
  .then((res1) => {
    // console.log(`Resolved. ${res}`);
    console.log("Resolved:", res1);
    return res1.json();
  })
  .then((data1) => {
    console.log(data1);
    return fetch("https://swapi.dev/api/people/2/");
  })
  .then((res2) => {
    console.log("SECOND RESOLVED");
    return res2.json();
  })
  .then((data2) => {
    console.log(data2);
  })
  .catch((err) => {
    console.log("Error:", err);
  });

// fetch("https://swapi.dev/api/people/1/")
//   .then((res) => {
//     // console.log(`Resolved. ${res}`);
//     console.log("Resolved:", res);
//     return res.json();
//   })
//   .then((data) => {
//     console.log("Data:", data);
//   })
//   .catch((err) => {
//     console.log("Error:", err);
//   });

/*
console.log("Text", obj)
→ Passes "Text" and obj as separate arguments.
→ obj remains an actual JavaScript object and can be inspected in the console.

console.log(`Text ${obj}`)
→ Inserts obj into a template string.
→ obj is converted to a string, often resulting in "[object Object]".

For objects, prefer:
console.log("Text", obj);

For values you want inside a string, use:
console.log(`Text ${obj.name}`);
*/
