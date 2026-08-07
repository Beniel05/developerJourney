# Callback Functions in JavaScript

## What is a Callback?

A **callback** is a function that is **passed as an argument to another function** so it can be **called later**.

Think of it as saying:

> "When you're finished, run this function."

---

## Basic Example

```javascript
function greet(name) {
    console.log(`Hello, ${name}!`);
}

function processUser(callback) {
    callback("Ben");
}

processUser(greet);
```

**Output**

```
Hello, Ben!
```

Here:

* `greet` is the **callback**.
* `processUser` receives and executes the callback.

---

## Callback with an Anonymous Function

```javascript
processUser(function(name) {
    console.log(`Welcome, ${name}!`);
});
```

---

## Callback with an Arrow Function

```javascript
processUser((name) => {
    console.log(`Hi, ${name}!`);
});
```

---

## Why Use Callbacks?

Callbacks let you:

* Run code after another task finishes.
* Reuse functions.
* Customize a function's behavior.

Common uses:

* `forEach()`
* `map()`
* `filter()`
* `setTimeout()`
* Event listeners (`addEventListener()`)

---

## Example: `forEach()`

```javascript
const nums = [1, 2, 3];

nums.forEach((num) => {
    console.log(num);
});
```

The arrow function is the callback.

---

## Key Points

* A callback is **just a function**.
* Pass the function itself, **not** its result.
* Correct: `processUser(greet)`
* Wrong: `processUser(greet())`

---

## Simple Definition

> **A callback is a function passed into another function to be executed later when needed.**
