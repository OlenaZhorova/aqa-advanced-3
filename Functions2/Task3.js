// Завдання 3: Рекурсивна функція

function newNumber(num){
    console.log(num)
    return function(){
        while(num > 0){
            num--
            console.log(`num: ${num}`)
        }
    }
}

const newNumber2 = newNumber(5)
newNumber2()




