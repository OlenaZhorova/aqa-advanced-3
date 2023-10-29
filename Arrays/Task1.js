// Завдання 1: Відстеження кількості позитивних,
// негативних та нульових чисел
const numbers = [1, -1, 0, 2, -2, 5, -5, 9, 0]

for (let positiveCount of numbers) {
    if (positiveCount > 0)
        console.log('Позитивне число: ', positiveCount + 1)
}
for (let negativeCount  of numbers) {
    if (negativeCount < 0 )
        console.log('Негативне число: ', negativeCount)
}
for (let zeroCount  of numbers) {
    if (zeroCount === 0)
        console.log('Нульове число: ', zeroCount)
}

