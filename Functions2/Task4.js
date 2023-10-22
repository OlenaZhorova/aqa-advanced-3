// Завдання 4: Обробка помилок за допомогою try-catch-finally
function divide(numerator, denominator){
    const number = numerator / denominator
    console.log("Result of divide:", number)
    }

const result = divide(4, 2)

function divide2(numerator, denominator) {
    if(denominator === 0) {
        throw new Error("Ділення на нуль неможливе")
    }
    return numerator / denominator
}

try {
    let result = divide2(4, 0)
} catch(error) {
    console.log("Помилка: " + error.message)
}
finally {
    console.log("Робота завершена")
}





