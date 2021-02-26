// Factorial:
// Write a function that accepts a number as an argument.
// The function should then return the factorial of that number.

function factorialize(num) {
    if (num < 0) {
        return -1;
    } else if (num == 0) {
        return 1;
    } else {
        return (num * factorialize(num - 1));
    }
}
factorialize(5);