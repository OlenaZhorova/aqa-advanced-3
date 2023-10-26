// Завдання 4: Обробка помилок за допомогою try-catch-finally

function divide(numerator, denominator) {
    console.log("Result of divide:", numerator / denominator)
    if(denominator === 0 || denominator === NaN ) {
        throw new Error("Ділення на нуль або текст неможливе")
    }
    return numerator / denominator
}
try {
    console.log(divide(4,0))
    console.log(divide(4,2))
} catch(error) {
    console.log("Помилка: " + error.message)
}finally{
    console.log("Робота завершена")
}








