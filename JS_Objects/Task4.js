// Завдання 4: Додавання та видалення властивостей
const person  = {
    firstName: "Alice",
    lastName: "Mirra",
    age: 23
}

person.email = "Test@icloud.com"
delete person.age

console.log(person)