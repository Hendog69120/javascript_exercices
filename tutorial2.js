//renvoie le plus grand noombre du tableau :-)
let numbers = [1, -28, 88, 7];

function findLargest(numbers) {
    
    return Math.max.apply(null, numbers);
}

console.log(findLargest(numbers))
