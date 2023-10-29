// Завдання 2: Копіювання з мутацією

const numbers = [1, 2, 3, 4, 5]
const index = numbers.length - 1
const newArray = numbers.map((num, index) => num * index)
console.log(newArray)