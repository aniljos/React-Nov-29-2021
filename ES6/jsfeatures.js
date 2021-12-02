var numbers = [1,2,3,4,5,6];


var squares = numbers.map((item, index) => {
    return item * item;
});

console.log("numbers",numbers);
console.log("numbers", numbers);

//ES6 spread operator
const copy_of_numbers = [...numbers];
console.log("copy_of_numbers", copy_of_numbers);

numbers.push(100);

console.log("numbers",numbers);
console.log("copy_of_numbers", copy_of_numbers);


const values = ["abc", "xyz"];

// const x = values[0];
// const y = values[1];

//destructuring(es6)

const [x, y] = values;





