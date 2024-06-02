const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = numbers.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);

const sum2 = numbers.reduce ((acc, curr) => acc + curr);

const sum3 = () => 

console.log(sum);