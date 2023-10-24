// Завдання 1: Оголошення та виклик функції
// 1.1. function declaration
function getRectangleArea(width, height){
    const area = width * height
return area
}

const area = getRectangleArea(5, 10)
console.log("rectangleArea: ", area)

// 1.2. function expression
const getRectangleArea2 = function (width, height){
    const area = width * height
    return area
}
console.log("rectangleArea: ", getRectangleArea2(5, 10))

// 1.3. arrow function
const getRectangleArea3 = (width, height) => {
    const area = width * height
    return area
}
console.log("rectangleArea: ", getRectangleArea3(10, 15))

// 1.4 arrow function2
const getRectangleArea4 = (width, height) => width * height

console.log("rectangleArea: ", (getRectangleArea4(20, 10)))
