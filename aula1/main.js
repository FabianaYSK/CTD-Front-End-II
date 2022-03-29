const numbers = [1, 3, 5, 8, 12, 42, 96, 1024]

let arrayNumbers = 0

for (let number of numbers) {
    arrayNumbers = number + arrayNumbers
    console.log(arrayNumbers)
}

