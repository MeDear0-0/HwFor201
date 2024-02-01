let numbers = [34, 1, 58, 21, 5, 13, 3, 89, 7]

function findMin(numbers) { 
    let min = numbers[0]
    for (let i = 1; i < numbers.length; i++) {
        if(min = numbers[i]){
          min = numbers[i] < min ? numbers[i] : min
    }
    return min
}

console.log(findMin(numbers))

