// ข้อ2
class Book {
    constructor(title = "no title", author = "no author",yearPublished = 0){
        this.title = title
        this.author = author
        this.yearPublished = yearPublished
    }

    getInfo(){
        return  this.title + this.author + this.yearPublished
    }
}

const myBook = new Book("The Great Gatsby, ", "F. Scott Fitzgerald, ", 1925)
console.log(myBook.getInfo())