# Functions vs Methods

> The main difference is that a function is a standalone block of code called independently by its name

> Whereas a method is a function that belongs to a class or an object 
and is called on that specific object. 

In short: all methods are functions, but not all functions are methods


| Feature | Function | Method |
| :--- | :--- | :--- |
| **Association** | Independent; does not belong to any class or object. | Bound to a specific class or object instance. |
| **How it is Called** | Directly by its name (e.g., `calculate()`). | Through an object or class using dot notation (e.g., `object.calculate()`). |
| **Data Access** | Operates only on the arguments explicitly passed to it. | Implicitly accesses and can modify the internal data (attributes) of the object it belongs to. |
| **Programming Paradigm** | Closely tied to procedural or functional programming. | Central to object-oriented programming (OOP). |
