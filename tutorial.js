//MAP+++++++++

let numbers = [6, 42, 4, 81, 56, 33];

//multiply every value by two.
/**
 * 
 * The map() method creates a new array with the results of calling a provided function on every element in the calling array.
 * 
 * var array1 = [1, 4, 9, 16];

pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
expected output: Array [2, 8, 18, 32]
 */


let multiplyNumbers = numbers.map(number => number * 2);
let addedNumbers = numbers.map(number => number + 2);

console.log(numbers);
console.log(addedNumbers);
console.log(multiplyNumbers);

//log the string 'hey' to the console
numbers.map(() => console.log('hey'));// six 'hey' because of the 6 items in the array

let team = [
    {
        name: 'Lydia',
        age: 20,
    },
    {
        name: 'Omar',
        age: 24,
    }
];
team.map(teamMember => teamMember.age += 10);//add ten years
console.log(team);

//FILTER++++++++

// Numbers higher than 18, but lower than 50
let filteredNumbers = numbers.filter(number => (number > 18 && number < 50));

console.log(filteredNumbers)

//odd numbers
let filteredOddNumbers = numbers.filter(number => number % 2 !== 0);
console.log(filteredOddNumbers)

//even numbers
let filteredEvenNumbers = numbers.filter(number => number % 2 === 0);
console.log(filteredEvenNumbers)

//REDUCE++++++++

//Accumulator and current value added
let reducedValue = numbers.reduce((acc, cur) => acc + cur);
console.log(reducedValue)
