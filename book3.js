// class Book{
//     constructor(title, author, pages, genre){
//         this.title = title
//         this.author = author
//         this.pages = pages
//         this.genre = genre
//     }

//     getSummary(){
//         // const book = new Book("summary")
//         return "Title: "+ this.title + ", "+
//                 "Author: "+ this.author+ ", "+
//                 "Pages: "+ this.pages+ ", "+
//                 "Genre: "+ this.genre
//     }
// }

// class Library{
//     constructor(name){
//         this.name = name
//         this.books = []
//     }

//     addBook(newBook){
//         this.books.push(newBook)
//     }

//     getBookByGenre(genre){
//         return this.books.filter(book => book.genre === genre);
//     }

//     getTotalPagesByGenre(genre){
//         const booksOfGenre = this.getBooksByGenre(genre);
//         return booksOfGenre.reduce((totalPages, book) => totalPages + book.pages, 0)
//     }


//     // Creating Book object
// const book1 = new Book("Harry Wick", "Conan", 345, "Sci-Fi");

// // Creating Library object
// const library1 = new Library("My Library");

// // Adding book to library
// library1.addBook(book1);

// // Example usage of methods
// console.log(book1.getSummary());
// console.log(library1.getBooksByGenre("Sci-Fi"));
// console.log(library1.getTotalPagesByGenre("Sci-Fi"));

// }

class Book {
    constructor(title, author, pages, genre) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.genre = genre;
    }

    getSummary() {
        return "Title: "+ this.title + ", "+
                "Author: "+ this.author+ ", "+
                "Pages: "+ this.pages+ ", "+
                "Genre: "+ this.genre

    }
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(newBook) {
        this.books.push(newBook);
    }

    getBooksByGenre(genre) {
        return this.books.filter(book => book.genre === genre);
    }

    getTotalPagesByGenre(genre) {
        const booksOfGenre = this.getBooksByGenre(genre);
        return booksOfGenre.reduce((totalPages, book) => totalPages + book.pages, 0);
    }
}

// Creating Book object
const book1 = new Book("Harry Wick", "Conan", 345, "Sci-Fi");

// Creating Library object
const library1 = new Library("My Library");

// Adding book to library
library1.addBook(book1);

// Example usage of methods
console.log(book1.getSummary());
console.log(library1.getBooksByGenre("Sci-Fi"));
console.log(library1.getTotalPagesByGenre("Sci-Fi"));
