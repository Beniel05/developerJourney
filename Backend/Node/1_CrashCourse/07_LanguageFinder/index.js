// 1. NAMED EXPORT: Uses curly braces { }
// The "franc" package exports multiple separate functions from its library.
/* export function franc() { ... }
export function francAll() { ... } */
// We use { } to pluck only the specific function(s) we need by their exact names.
import { franc } from "franc";

// 2. DEFAULT EXPORT: No curly braces used
// The "langs" package exports a single, main object that contains everything inside it.
/* const langs = { where: function() { ... }, all: function() { ... } };
export default langs; */
// We import the entire package object as a single entity and name it "langs".
import langs from "langs";
import colors from "colors";

// NOTE: "franc" needs longer text patterns to work accurately.
// Always try to pass a full sentence instead of a single word to prevent getting 'und'.
let userInput = process.argv[2];
// TERMINAL: $ node index.js Hello

let francOutput = franc(userInput);

if (francOutput === "und") {
  // Alert the user that a single word isn't enough
  console.log(
    "Could not determine language. Please try using a full sentence instead of a single word!",
  );
} else {
  let languageMatch = langs.where("3", francOutput);
  let finalOutput = `Our best guess is: ${colors.green(languageMatch.name)}`;
  console.log(finalOutput);
}

/*
~/OneDrive/Desktop/Dev Journey/Backend/Node/1_CrashCourse/07_LanguageFinder (main)
$ node index.js "Hello, I am a software developer working on a javascript project"
Our best guess is: English
*/
