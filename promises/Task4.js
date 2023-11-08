//Завдання 4 (Опціонально)
// Створіть 2 класи (контроллери), які будуть мати в собі методи
// що реалізують функції з попереднього завдання.
class ControllerTodo {
    async fetchTodo() {
        const url1 = "https://jsonplaceholder.typicode.com/todos/1"
        const response = await fetch(url1)
        const jsonBody = await response.json()
        console.log(jsonBody)
    }
}

class ControllerUser {
    async fetchUser() {
        const url2 = "https://jsonplaceholder.typicode.com/users/1"
        const response = await fetch(url2)
        const jsonBody = await response.json()
        console.log(jsonBody)
    }
}

const todoController = new ControllerTodo()
const userController = new ControllerUser()

todoController.fetchTodo() // Викликаю метод з даними todo
userController.fetchUser() // Викликаю метод з даними user