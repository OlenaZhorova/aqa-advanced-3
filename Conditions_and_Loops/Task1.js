// Завдання 1: Визначення рівня успішності студента (IfElse)
const averageGrade = 50;

if(averageGrade <= 59){
     console.log("Незадовільно")
 }else if (averageGrade <= 70){
     console.log("Задовільно")
 }else if (averageGrade <= 80){
    console.log("Добре")}
else if (averageGrade <= 90){
        console.log("Дуже добре")}
else if (averageGrade <= 100){
    console.log("Відмінно")}
else {
     console.log("Введіть корректну оцінку")
}


// switch (true) {
//     case averageGrade <= 59:
//         console.log("Незадовільно")
//         break
//     case averageGrade <= 70:
//         console.log("Задовільно")
//         break
//     case averageGrade <= 80:
//         console.log("Добре")
//         break
//     case averageGrade <= 90:
//         console.log("Дуже добре")
//         break
//     case averageGrade <= 100:
//         console.log("Відмінно")
//         break
// }