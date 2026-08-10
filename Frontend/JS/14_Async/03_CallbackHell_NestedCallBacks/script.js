/*      THESE ALL ARE BAD PRACTICE - WE DON'T HAVE TO USE THIS          */
//      Instead we have to use Async and Promise!.

// setTimeout(() => {
//   document.body.style.backgroundColor = "violet";
//   setTimeout(() => {
//     document.body.style.backgroundColor = "indigo";
//     setTimeout(() => {
//       document.body.style.backgroundColor = "blue";
//       setTimeout(() => {
//         document.body.style.backgroundColor = "green";
//         setTimeout(() => {
//           document.body.style.backgroundColor = "yellow";
//           setTimeout(() => {
//             document.body.style.backgroundColor = "orange";
//             setTimeout(() => {
//               document.body.style.backgroundColor = "red";
//             }, 1000);
//           }, 1000);
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

/*
const delayedColorChange = (color, delay, doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = color;
        doNext && doNext();
        // Same like: if(next) next() -> If there is next argument, then only execute the next() function.
        // Else don't execute.
    }, delay);
}

delayedColorChange('red', 500, () => {
    delayedColorChange('orange', 1000, () => {
        delayedColorChange('yellow', 500, () => {
            delayedColorChange('green', 1000, () => {
                delayedColorChange('blue', 500, () => {
                    delayedColorChange('indigo', 1000, () => {
                        delayedColorChange('violet', 500); // No doNext argument.
                    })
                })
            })
        })
    })
});
*/

// Example: Callback hell demonstration
searchMovieAPI('insidious', (movies) => { 
  // Success callback for searchMovieAPI: executed when the search completes successfully with results.
  
  saveToMyDB(movies, () => { 
    // Success callback for saveToMyDB: executed when the data is successfully stored in the database.
    console.log("Movie saved successfully!");
  }, () => { 
    // Failure callback for saveToMyDB: executed if the database fails to save the result.
    console.error("Failed to save movie to database.");
  });

}, (error) => { 
  // Failure callback for searchMovieAPI: executed if the initial API search fails.
  console.error("Movie search failed:", error);
});
