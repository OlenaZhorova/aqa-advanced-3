// Завдання 1: Оголошення та виклик функції
// 1.1. function declaration
function rectangleArea(width, height){
    const area = width * height
return area
}

const area = rectangleArea(5, 10)
console.log("rectangleArea: ", area)

// 1.2. function expression
const rectangleArea2 = function (width, height){
    const area = width * height
    return area
}
console.log("rectangleArea: ", rectangleArea2(5, 10))

// 1.3. arrow function
const rectangleArea3 = (width, height) => {
    const area = width * height
    return area
}
console.log("rectangleArea: ", rectangleArea3(10, 15))

// 1.4 arrow function2
const rectangleArea4 = (width, height) => width * height

console.log("rectangleArea: ", (rectangleArea4(20, 10)))
