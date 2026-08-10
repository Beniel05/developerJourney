const character = {
  id: 42,
  name: "Aria",
  class: "Mage",
  level: 15,
  location: {
    realm: "Eldoria",
    coordinates: { x: 120, y: 340 }
  },
  inventory: ["staff", "mana potion", "spellbook"],
  isOnline: true
};

// const id = character.id;
// const name = character.name;

const { id, name } = character; 
// Those named keys should also be same as the object key itself.
console.log(id, name);

const { isAlive } = character; // isAlive key is not in the object
console.log(isAlive); // so undefined.

console.log('======== RENAMING Access Key =========');

const { level: xp } = character; // want to access level using 'xp' key.
console.log(xp);

console.log('======== NEW OBJECT =========');

const employee = {
  firstName: "Elena",
  role: "Developer",
  salary: 85000,
  isRemote: true,
  country: "Canada"
};


const { firstName, role, salary = 'N/A', lastName = "." } = employee

console.log(firstName, role, salary, lastName); 
// salary is there so that'll be replace this default 'N/A'.
// But, lastName is not there so the default (.) is applied.

// Combining Rename, Default - Together
const { firstName : fn, lastName : ln = '.'} = employee;
console.log(fn, ln);