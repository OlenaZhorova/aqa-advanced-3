const Book = require(`./T1.js`)
const EBook = require(`./T2.js`)

//T1
const book1 = new Book("Software Testing", "Ron Patton", 2005)
book1.printInfo()

// Створіть кілька об'єктів цього класу та викличте printInfo для кожного екземпляру.
const book2 = new Book("Agile Testing", "Lisa Crispin", 2008)
book2.printInfo()
const book3 = new Book("How Google Tests Software", "James Whittaker", 2012)
book3.printInfo()

//T2
//Перевизначте метод printInfo для EBook таким чином щоб друкувалась вся доступна інформація
// про екземляр EBook (все те саме що і для Book але ще формат файлу).
// Створіть інстанс (екземпляр) класу EBook та викличте метод printInfo
const ebook1 = new EBook("Explore It!", "Elisabeth Hendrickson", 2012,"pdf")
ebook1.printInfo()

ebook1.title = "Testing"
ebook1.author = "Unname"
ebook1.year = 2023
ebook1.format = "fb2"
ebook1.printInfo()

// Створіть статичний метод в класі Book, який буде приймати масив об'єктів
// (екземрлярів) книг та повертати найдавнішу книгу за роком видання.
// Викличте його в коді передавши масив книг (серед них мають бути екземляри
// обох класів Book та EBook)
// let oldestBook = bookslist[0];

const oldestBook = Book.findOldestBook([book1, book2, book3, ebook1])
console.log("Найдавніша книга:", oldestBook.year)
oldestBook.printInfo()

// Створіть статичний метод для EBook який буде приймати як аргументи екземпляр
// класу Book і формат файлу як рядок та повертати екземпляр класу EBook
const eBook = EBook.fromBook(book1, "mp3")
eBook.printInfo()