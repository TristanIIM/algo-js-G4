let student = {
    name: "Tristan",
    favoritefood: "Pasta",
    city: "Los Angeles"
}

let values = Object.values(student)
let result = 0

values.forEach((value) => {
    result += value.length
})

console.log(result)

if(result % 2 == 0){
    console.log("pair")
}
else console.log("impair")