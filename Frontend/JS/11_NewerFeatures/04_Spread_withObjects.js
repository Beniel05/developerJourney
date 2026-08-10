const originalUser = {
  name: "Alice",
  age: 25,
};

const updatedUser = {
  age: 26, // Conflict: same property name
  city: "New York",
};

const combined = { ...originalUser, ...updatedUser };
console.log(combined);

// The last recently data will replace the other data of same property name.
const combined2 = { ...originalUser, ...updatedUser, age: 100 }; // Like Casecading / Priority on CSS for example.
console.log(combined2);

console.log("========= SPREADING ARRAY TO OBJECT =========");

const characters = ["a", "b", "c", "d"];
const keyValuePair = { ...characters }; // based on index. 0 to n
console.log(keyValuePair);

// console.log( {   ...['a','b','c','d']    }  );

console.log("========= SPREADING STRING TO OBJECT =========");

const str = "Hello";
const keyValuePair2 = { ...str };
console.log(keyValuePair2);

console.log("========= FORM EXAMPLE =========");

// USER only fills the essential details through the UI of the form.
const dataFromForm = {
    email: "johndoe@gmail.com",
    password: "jo123",
    username: "john",
};

// But we as a developer need to set some extra field like isAdmin and all.
// For that will create a copy of this object will all those extra fields Using SPREAD.

const newUser = { ...dataFromForm, id: 1007, isAdmin: false };
console.log(newUser);


console.log("========= REAL WORLD EXAMPLE =========");

const defaultPreferences = {
  theme: "dark",
  notifications: true,
  language: "en"
};

const userFormSelection = {
  language: "es" // User explicitly chose Spanish
};

// defaultPreferences sets the baseline, userFormSelection overrides it
const finalSettings = { ...defaultPreferences, ...userFormSelection };

console.log(finalSettings);
// Output: { theme: 'dark', notifications: true, language: 'es' }
