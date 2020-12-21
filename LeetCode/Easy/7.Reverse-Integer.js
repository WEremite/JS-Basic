/*
Given a 32-bit signed integer, reverse digits of an integer.

Note:
Assume we are dealing with an environment that could only
store integers within the 32-bit signed integer range:
[−231,  231 − 1]. For the purpose of this problem,
assume that your function returns 0 when the reversed integer overflows.



Example 1:

Input: x = 123
Output: 321

Example 2:

Input: x = -123
Output: -321

Example 3:

Input: x = 120
Output: 21

Example 4:

Input: x = 0
Output: 0



Constraints:

    -2^31 <= x <= 2^(31 - 1)


 */

/*let a = '00123'
console.log(parseInt(a.split('').join('')))  // Output without zeroes
Math.sign(num) //return "+1" or "-1" of variable num*/

var reverse = function(x) {

    let revNum = parseInt(x.toString().split('').reverse().join('')) * Math.sign(x);

    if (revNum === 0 || revNum < (-2) ** 31 || revNum > 2 ** 31 - 1) {
        return 0;
    } else {
        return revNum;
    }

};

console.log(reverse(123)); // Output: 321
console.log(reverse(-123)); // Output: -321
console.log(reverse(120)); // Output: 21
console.log(reverse(0)); // Output: 0
console.log(reverse((-2) ** 32)); // Output: 0
console.log(reverse(900000)); // Output 9
console.log(reverse(1534236469)); // Output 9
