// Завдання 1: Відстеження кількості позитивних,
// негативних та нульових чисел

//     Створіть масив чисел за допомогою конструкції const numbers = [2, -5, 0, 7, -3, 0, 10, -8].
const numbers = [2, -5, 0, 7, -3, 0, 10, -8]
//     Задайте змінні positiveCount, negativeCount та zeroCount зі значенням 0. Вони будуть використовуватись для відстеження кількості позитивних, негативних та нульових чисел в масиві.
let positiveCount = 0
let negativeCount = 0
let zeroCount = 0
//     Використовуючи цикл for, пройдіться по кожному елементу масиву numbers.
//     Перевірте чи число позитивне, негативне чи нульове, та збільште відповідну змінну (positiveCount, negativeCount або zeroCount) на 1.
for (const number of numbers) {
    if(number === 0){
        zeroCount++
    }else if (number > 0) {
        positiveCount++
    }else if (number < 0){
        negativeCount++
    }else {
        console.log(`${number} is not a number`)
    }
}
// Після завершення циклу виведіть значення змінних positiveCount, negativeCount та zeroCount на консоль.
console.log("zeroCount: ", zeroCount)
console.log("positiveCount: ", positiveCount)
console.log("negativeCount: ", negativeCount)
