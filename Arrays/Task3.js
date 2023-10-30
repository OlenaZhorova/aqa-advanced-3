// Завдання 3: Обчислення суми елементів масиву
const array = [10, 20, 30, 40, 50]
const sumOfArray = array.reduce((acc, array) => {
    acc = acc + array
    return acc
})
console.log(sumOfArray)