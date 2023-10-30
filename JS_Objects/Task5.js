// Завдання 5: Перебір властивостей об'єкта
// Використовуючи цикл for...of, переберіть всі елементи масиву та виведіть їхні значення в консоль.
// Зробіть деструктуризацію в циклі

const users = [
    { name: "Viki", age: "2", haveCat: true, study: false},
    { name: "Olena", haveCat: true, study: true}
]

for (const {name, age, haveCat, study} of users ){
    console.log("My name is", name, "years old", age ?? "Unknown age", "and I have cat", haveCat, "Also I'm studying. It's ", study)
}






