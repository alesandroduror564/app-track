/* 
Filename: sophisticated_code.js 
Description: This code implements a complex data structure and performs advanced operations on it.
*/

// Define a class to represent a book
class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  getInfo() {
    return `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}`;
  }
}

// Create a library class to manage a collection of books
class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  removeBook(title) {
    this.books = this.books.filter((book) => book.title !== title);
  }

  searchByAuthor(author) {
    return this.books.filter((book) => book.author.toLowerCase().includes(author.toLowerCase()));
  }

  getBookCount() {
    return this.books.length;
  }
}

// Instantiate the library object
const library = new Library();

// Create several books and add them to the library
const book1 = new Book("JavaScript: The Good Parts", "Douglas Crockford", 2008);
const book2 = new Book("Clean Code", "Robert C. Martin", 2008);
const book3 = new Book("Design Patterns", "Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides", 1994);

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

// Print all books in the library
console.log("Library Books:");
library.books.forEach((book) => console.log(book.getInfo()));

// Remove a book from the library
library.removeBook("Clean Code");

// Search for books by a specific author
console.log("\nBooks by Author 'Douglas Crockford':");
const booksByAuthor = library.searchByAuthor("Douglas Crockford");
booksByAuthor.forEach((book) => console.log(book.getInfo()));

// Print the total number of books in the library
console.log("\nTotal Books in Library:", library.getBookCount());

// Output:
// Library Books:
// Title: JavaScript: The Good Parts, Author: Douglas Crockford, Year: 2008
// Title: Clean Code, Author: Robert C. Martin, Year: 2008
// Title: Design Patterns, Author: Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides, Year: 1994

// Books by Author 'Douglas Crockford':
// Title: JavaScript: The Good Parts, Author: Douglas Crockford, Year: 2008

// Total Books in Library: 2