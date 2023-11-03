// Створіть клас "Книга" (Book) з захищеними властивостями, такими як "назва", "автор" і "рік видання".
// Додайте метод до класу Book, який буде виводити повний опис книги наприклад printInfo.
class Book {
    constructor(title, author, year) {
        this._title = title
        this._author = author
        this._year = year
    }
    //  Додайте геттери та сеттери для всіх властивостей класу Book та EBook.
    get title() {
        return this._title
    }
    set title(title) {
        if (!title.includes("Unname")) {
            this._title = title
        } else {
            console.log('Назва не повинна містити "Unname"')
        }
    }
    get author() {
        return this._author
    }
    set author(author) {
        if (!author.includes("Unname")) {
            this._author = author
        } else {
            console.log('Автор не повинен містити "Unname"')
        }
    }
    get year() {
        return this._year
    }
    set year(year) {
        if (year < 2006) {
            console.log('Застарілий рік видання')
        } else {
            this._year = year
        }
        }
    printInfo(){
        console.log(`${this._title} ${this._author} ${this._year}` )
    }
    static findOldestBook(bookslist){
            if (bookslist.length === 0){
                console.log("Книга відсутня у кошику покупок")
            }
        let oldestBook = bookslist[0]
        for (const book of bookslist){
            if (book.year < oldestBook.year){
                oldestBook = book
            }
        }
        return oldestBook
    }
}


module.exports = Book