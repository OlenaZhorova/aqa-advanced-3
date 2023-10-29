// Завдання 6: Сортування масивів
const numbersList = [1, 10, 14, 2, 4, 5, 43, 34]
const copyNumbersList = numbersList.slice()

function compareNumbersList(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
}

numbersList.sort(compareNumbersList);

console.log(numbersList);

copyNumbersList.sort()
console.log(copyNumbersList)