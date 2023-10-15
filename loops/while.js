// let index = 10
// while (index > 0){
//     console.log(`index: ${index}`)
//     index--
// }

// let index = 1
// while (index > 1){
//     console.log(`index: ${index}`)
// }
//
// do{
//     console.log(`index: ${index}`)
// }while (index > 1)

let index = 10

while (index > 0){
    if(index % 2 !== 0){
        index--
        continue
}
    console.log(`index: ${index}`)
    index--
}