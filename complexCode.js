// Filename: complexCode.js
// Description: A complex JavaScript code showcasing advanced concepts and techniques.

'use strict';

// Initialize global variables
let database = [];
let currentUser = null;

// Define classes
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  static calculateTax(price) {
    const taxRate = 0.1;
    return price * taxRate;
  }

  getPriceWithTax() {
    const tax = Product.calculateTax(this.price);
    return this.price + tax;
  }
}

// Perform complex operations
function performComplexOperations() {
  // Create users
  const john = new User('John', 25);
  const emily = new User('Emily', 30);

  // Add users to the database
  database.push(john);
  database.push(emily);

  // Set current user to John
  currentUser = john;

  // Display all users' greetings
  database.forEach(user => user.greet());

  // Create products
  const product1 = new Product('Phone', 500);
  const product2 = new Product('Laptop', 1000);

  // Calculate and display prices with tax
  console.log(`Price with tax for ${product1.name}: $${product1.getPriceWithTax()}`);
  console.log(`Price with tax for ${product2.name}: $${product2.getPriceWithTax()}`);
}

// Execute complex operations
performComplexOperations();

// Output:
// Hello, my name is John and I am 25 years old.
// Hello, my name is Emily and I am 30 years old.
// Price with tax for Phone: $550
// Price with tax for Laptop: $1100