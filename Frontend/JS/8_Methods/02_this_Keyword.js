const obj = {
    firstName: "John",
    lastName: "Doe",
    fullName() {
        // 'this' refers to the current object. Here it is 'obj'
        // It is used to access the object's properties and methods.
        return `${this.firstName} ${this.lastName}`;
    }
}

console.log(obj.firstName);
console.log(obj.lastName);
console.log(obj.fullName());

console.log('=======================================');

// =======================================
// More Examples
// =======================================


// =======================================
// Example 1 - Car
// =======================================

const car = {
    brand: "Toyota",
    model: "Camry",

    details() {
        return `${this.brand} ${this.model}`;
    }
};

console.log(car.details());

console.log('=======================================');

// =======================================
// Example 2 - Bank Account
// =======================================

const account = {
    balance: 1000,

    deposit(amount) {
        this.balance += amount;
    },

    withdraw(amount) {
        this.balance -= amount;
    }
};

account.deposit(500);
account.withdraw(200);

console.log(account.balance); // 1300

console.log('=======================================');

// =======================================
// Example 3 - TV Remote
// =======================================

const tv = {
    volume: 20,

    increaseVolume() {
        this.volume++;
    },

    decreaseVolume() {
        this.volume--;
    }
};

tv.increaseVolume();
tv.increaseVolume();
tv.decreaseVolume();

console.log(tv.volume); // 21

console.log('=======================================');

// =======================================
// Example 4 - Rectangle
// =======================================

const rectangle = {
    length: 10,
    width: 5,

    area() {
        return this.length * this.width;
    },

    perimeter() {
        return 2 * (this.length + this.width);
    }
};

console.log(rectangle.area());       // 50
console.log(rectangle.perimeter());  // 30

console.log('=======================================');

// =======================================
// Example 5 - Book
// =======================================

const book = {
    title: "Clean Code",
    author: "Robert C. Martin",

    description() {
        return `${this.title} by ${this.author}`;
    }
};

console.log(book.description());

console.log('=======================================');

// =======================================
// Example 6 - Light Switch
// =======================================

const light = {
    isOn: false,

    toggle() {
        this.isOn = !this.isOn;
    }
};

console.log(light.isOn); // false

light.toggle();

console.log(light.isOn); // true

console.log('=======================================');

// =======================================
// Example 7 - Calculator
// =======================================

const calculator = {

    square(num) {
        return num ** 2;
    },

    cube(num) {
        return num ** 3;
    },

    printSquare(num) {
        return `Square = ${this.square(num)}`;
    }
};

console.log(calculator.printSquare(6));

console.log('=======================================');

// =======================================
// Example 8 - Employee
// (Updating Object Property)
// =======================================

const employee = {
    name: "Alice",
    salary: 50000,

    giveRaise(amount) {
        this.salary += amount;
    },

    details() {
        return `${this.name} earns ₹${this.salary}`;
    }
};

employee.giveRaise(5000);

console.log(employee.details());

console.log('=======================================');

// =======================================
// Example 9 - Smartphone
// =======================================

const phone = {
    brand: "Samsung",
    battery: 100,

    usePhone() {
        this.battery -= 15;
    },

    charge() {
        this.battery = 100;
    }
};

phone.usePhone();
phone.usePhone();

console.log(phone.battery);

phone.charge();

console.log(phone.battery);

console.log('=======================================');

// =======================================
// Example 10 - Student Result
// (Method Calling Another Method)
// =======================================

const student = {
    name: "John",
    marks: [85, 90, 95],

    totalMarks() {
        return this.marks[0] + this.marks[1] + this.marks[2];
    },

    averageMarks() {
        return this.totalMarks() / this.marks.length;
    }
};

console.log(student.totalMarks());
console.log(student.averageMarks());

console.log('=======================================');

// =======================================
// Example 11 - Playlist
// (Updating Arrays)
// =======================================

const playlist = {
    songs: ["Song A", "Song B"],

    addSong(song) {
        this.songs.push(song);
    },

    totalSongs() {
        return this.songs.length;
    }
};

playlist.addSong("Song C");

console.log(playlist.songs);
console.log(playlist.totalSongs());

console.log('=======================================');

// =======================================
// Example 12 - Library
// (New Concept - Similar Idea to Egg Counter)
// =======================================

const library = {
    booksIssued: 0,

    issueBook() {
        this.booksIssued++;
        return "Book Issued Successfully";
    }
};

console.log(library.booksIssued); // 0

console.log(library.issueBook());
console.log(library.issueBook());
console.log(library.issueBook());

console.log(library.booksIssued); // 3

console.log('=======================================');

// =======================================
// Example 13 - Parking Lot
// =======================================

const parkingLot = {
    occupiedSpaces: 0,

    vehicleEntered() {
        this.occupiedSpaces++;
    },

    vehicleExited() {
        this.occupiedSpaces--;
    }
};

parkingLot.vehicleEntered();
parkingLot.vehicleEntered();
parkingLot.vehicleEntered();
parkingLot.vehicleExited();

console.log(parkingLot.occupiedSpaces); // 2


// =======================================
// Quick Notes
// =======================================

/*
1. 'this' refers to the object that calls the method.

2. this.property
   -> Accesses or updates a property.

3. this.method()
   -> Calls another method of the same object.

4. 'this' is commonly used to:
   - Read object properties.
   - Update object properties.
   - Work with arrays inside objects.
   - Keep track of an object's current state.

Examples:
this.balance
this.volume
this.salary
this.booksIssued
this.occupiedSpaces
this.marks
this.songs
this.totalMarks()
this.square()
*/