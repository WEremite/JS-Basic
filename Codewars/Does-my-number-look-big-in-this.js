/*
A Narcissistic Number is a positive number which is the sum of its own digits,
each raised to the power of the number of digits in a given base. In this Kata,
we will restrict ourselves to decimal (base 10).

For example, take 153 (3 digits), which is narcisstic:

    1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153

and 1652 (4 digits), which isn't:

    1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938

The Challenge:

Your code must return true or false depending upon whether the given number is
a Narcissistic number in base 10.

Error checking for text strings or other invalid inputs is not required,
only valid positive non-zero integers will be passed into the function.

 */
function narcissistic(value) {
    // Code me to return true or false
    let arr = value.toString().split('').map(Number);
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        count += arr[i] ** arr.length;
    }
    return value === count;
}

console.log(narcissistic(7)); // true
console.log(narcissistic(153)); // true
console.log(narcissistic(1652)); // false
console.log(narcissistic(371)); // true
