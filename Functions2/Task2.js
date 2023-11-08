// Завдання 2: Засоби валідації
function isAdult (age) {
  return age >= 18
}

const parameter1 = isAdult(15)
const parameter2 = isAdult(25)
console.log(parameter1)
console.log(parameter2)

// Second way
// function isAdult(age){
//       switch (true){
//           case age >= 18:
//               console.log("True")
//               break
//           default:
//               console.log("False")
//               break
//       }
// }
//
// isAdult(15)
// isAdult(25)
