//Завдання 3
// Виконайте завдання 2 але використовуючи конструкцію async/await
const url1 = "https://jsonplaceholder.typicode.com/todos/1"
const url2 = "https://jsonplaceholder.typicode.com/users/1"
async function fetchTodo(){
    const response = await fetch(url1)
    const jsonBody = await response.json()
    console.log(jsonBody)
}
fetchTodo()

async function fetchUser(){
    const response = await fetch(url2)
    const jsonBody = await response.json()
    console.log(jsonBody)
}
fetchUser()

