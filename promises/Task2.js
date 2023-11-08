// Завдання 2
// Напишіть функцію яке буде робити запит до серверу за цим ендпоінтом
// https://jsonplaceholder.typicode.com/todos/1
// Функція повинна повертати як результат Promise що повертає об’єкт todo

const url1 = "https://jsonplaceholder.typicode.com/todos/1"
function fetchToDo(url1) {
    return fetch(url1)
        .then((response) => response.json())
}
fetchToDo(url1)
        .then((body) => {
            console.log(body)
        })

//Напишіть функцію яке буде робити запит до серверу за цим ендпоінтом
//https://jsonplaceholder.typicode.com/users/1
// Функція повинна повертати як результат Promise що повертає об’єкт user

const url2 = "https://jsonplaceholder.typicode.com/users/1"
function fetchUser(url2) {
    return fetch(url2)
        .then((response) => response.json())
}
fetchUser(url2)
    .then((user) => {
        console.log(user)
    })


//Викорситайте методи Promise.all та Promise.race передавши їм як аргумент
// масив з викликами функцій з п.п. 1-2.
// Присвойте значення отримані від цих виразів до змінних
// Функція для здійснення запиту до серверу та повернення результату як Promise

Promise.all([fetchToDo(url1), fetchUser(url2)])
    .then((results) => {
        const todo = results[0]
        const user = results[1]
        console.log("Result todo:", todo)
        console.log("Result user:", user)
    })

// Promise.race
Promise.race([fetchToDo(url1), fetchUser(url2)])
    .then((result) => {
        console.log("My first result:", result)
    })
    .catch((error) => {
        console.error("Упс, сталась помилка:", error)
     })

