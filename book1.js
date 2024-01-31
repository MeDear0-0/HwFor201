// ข้อ1
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

