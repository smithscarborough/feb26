// Fibonacci Sequence:
// Write a program that asks the user fora  numerical input 'n'
// It will then print out the corresponding fibonacci sequence values from 0 to 'n'
// Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34


function fibonacci(num) {
    if (num < 2) {
        return num;
    } else {
        return fibonacci(num-1) + fibonacci(num - 2);
    }
}

const nTerms = prompt('Enter the number of terms: ');

if(nTerms <=0) {
    console.log('Enter a positive integer.');
}
else {
    for(let i = 0; i < nTerms; i++) {
        console.log(fibonacci(i));
    }
}