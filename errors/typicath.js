// console.log("Before loop")
//
// for (let i =0; i < 10; i++){
//     console.log(`Index ${i}`)
//     if(i === 5){
//         throw new Error("Index should not be equal to 5 ever")
//     }
// }
// console.log("After loop")

console.log("Before loop")

try{
    for (let i =0; i < 10; i++){
        console.log(`Index before ${i}`)
        if(i === 5){
            throw new Error("Index should not be equal to 5 ever")
        }
        console.log(`Index after ${i}`)
    }
}catch (err) {
    console.log(err.message)
}finally{
    console.log("From finally block")
}

console.log("After loop")