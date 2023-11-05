// В окремому файлі створіть клас "Електронна книга" (EBook),
// який буде успадковувати властивості та методи класу Book
// Додайте до класу EBook нову властивість, наприклад, "формат файлу".
const Book = require(`./T1.js`)
class EBook extends Book {
    constructor(title, author, year, format) {
        super(title, author, year),
            this._format = format
    }
    // Додайте геттери та сеттери для всіх властивостей класу Book та EBook.
    get format() {
        return this._format
    }
    set format(format) {
        this._format = format
    }
    printInfo() {
        super.printInfo(),
            console.log(`Формат файлу: ${this._format}`)
    }
    static fromBook(book, format) {
        return new EBook(book.title, book.author, book.year, format)
    }
}


// "Explore It!", "Elisabeth Hendrickson", 2012,
module.exports = EBook
