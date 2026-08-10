// ==========================================
// 0. TRADITIONAL APPROACH (Accessing via obj.key)
// ==========================================

const traditionalUser = {
  id: 101,
  username: "johndoe",
  email: "john@example.com",
  role: "admin"
};

// Traditional method where you manually extract properties using object keys
function legacyGreet(user) {
    // ${user.username}, ${user.email} | OR;
  const username = user.username;
  const email = user.email;
  console.log(`[Legacy] Hello, ${username}! Sent to ${email}.`);
}
legacyGreet(traditionalUser);


// ==========================================
// 1. OBJECT PARAMETER DESTRUCTURING
// ==========================================
// This is the most common use case. It allows you to pass a single 
// configuration object to a function while extracting only the keys you need. 

// A sample data object
const user = {
  id: 101,
  username: "johndoe",
  email: "john@example.com",
  role: "admin"
};

// 1. Basic Destructuring
// Extracts 'username' and 'email' directly from the incoming object
function greetUser({ username, email: e }) {
  console.log(`Hello, ${username}! Verification email sent to ${e}.`);
}
greetUser(user); 
// Output: Hello, johndoe! Verification email sent to john@example.com.


// 2. Destructuring with Default Values & Renaming (Aliases)
// - sets a default value for 'status' if it doesn't exist in the object
// - renames 'role' to 'userRole' to avoid variable conflicts
function displayProfile({ username, status = "Active", role: userRole }) {
  console.log(`User: ${username} | Status: ${status} | Role: ${userRole}`);
}
displayProfile(user); 
// Output: User: johndoe | Status: Active | Role: admin


// 3. Destructuring with Rest Parameter (...rest)
// Extracts 'id', and bundles all remaining properties into a new 'details' object
function printDetails({ id, ...details }) {
  console.log(`ID: ${id}`);
  console.log("Other Details:", details);
}
printDetails(user);
// Output: 
// ID: 101
// Other Details: { username: 'johndoe', email: 'john@example.com', role: 'admin' }


// ==========================================
// 2. ARRAY PARAMETER DESTRUCTURING
// ==========================================
// You can also destructure array elements based on their index positions inside a function signature. 

const coordinates = [40.7128, -74.0060, 10]; // [latitude, longitude, elevation]

// Destructures coordinates positionally
function mapLocation([lat, lng, fallbackElevation = 0]) {
  console.log(`Latitude: ${lat}, Longitude: ${lng}, Elevation: ${fallbackElevation}`);
}

mapLocation(coordinates);
// Output: Latitude: 40.7128, Longitude: -74.006, Elevation: 10


// ==========================================
// 3. PREVENTING CRASHES WITH DEFAULT PARAMETER OBJECTS
// ==========================================
// If a function expects an object to destructure and you call it with no arguments (undefined), 
// JavaScript will throw a TypeError. You can prevent this by providing an empty object (= {}) 
// as a fallback value for the parameter itself. 

// The '= {}' at the end ensures the function won't crash if called with no arguments
function configurations({ theme = "dark", sidebar = true } = {}) {
  console.log(`Theme: ${theme}, Sidebar Open: ${sidebar}`);
}

configurations(); // Works perfectly fine instead of throwing an error
// Output: Theme: dark, Sidebar Open: true
