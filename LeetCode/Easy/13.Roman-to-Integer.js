/*
Roman numerals are represented by seven different symbols:
 I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

For example, 2 is written as II in Roman numeral, just two one's
added together. 12 is written as XII, which is simply X + II.
The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from
left to right. However, the numeral for four is not IIII.
Instead, the number four is written as IV. Because the one
is before the five we subtract it making four. The same
principle applies to the number nine, which is written as IX.
There are six instances where subtraction is used:

    I can be placed before V (5) and X (10) to make 4 and 9.
    X can be placed before L (50) and C (100) to make 40 and 90.
    C can be placed before D (500) and M (1000) to make 400 and 900.

Given a roman numeral, convert it to an integer.



Example 1:

Input: s = "III"
Output: 3

Example 2:

Input: s = "IV"
Output: 4

Example 3:

Input: s = "IX"
Output: 9

Example 4:

Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.

Example 5:

Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

 */

// First variant
/*var romanToInt = function(s) {
    let arr = s.split(''), num = 0, array;
    array = x => {
        for (let i = 0; i < x.length; i++) {
            switch (x[i]) {
                case 'I':
                    switch (x[i + 1]) {
                        case 'V':
                            num += 4;
                            arr.splice(0, 2);
                            array(arr);
                            break;
                        case 'X':
                            num += 9;
                            arr.splice(0, 2);
                            array(arr);
                            break;
                        default:
                            num += 1;
                            arr.shift();
                            array(arr);
                            break;
                    }
                    break;
                case 'V':
                    num += 5;
                    arr.shift();
                    array(arr);
                    break;
                case 'X':
                    switch (x[i + 1]) {
                        case 'L':
                            num += 40;
                            arr.splice(0, 2);
                            array(arr);
                            break;
                        case 'C':
                            num += 90;
                            arr.splice(0, 2);
                            array(arr);
                            break;
                        default:
                            num += 10;
                            arr.shift();
                            array(arr);
                            break;
                    }
                    break;
                case 'L':
                    num += 50;
                    arr.shift();
                    array(arr);
                    break;
                case 'C':
                    switch (x[i + 1]) {
                        case 'D':
                            num += 400;
                            arr.splice(0, 2);
                            array(arr);
                            break;
                        case 'M':
                            num += 900;
                            arr.splice(0, 2);
                            array(arr);
                            break;
                        default:
                            num += 100;
                            arr.shift();
                            array(arr);
                            break;
                    }
                    break;
                case 'D':
                    num += 500;
                    arr.shift();
                    array(arr);
                    break;
                case 'M':
                    num += 1000;
                    arr.shift();
                    array(arr);
                    break;
                default:
                    break;
            }
        }
    };
    array(arr);
    return num;
};*/

// Second variant
var romanToInt = function(s) {
    let map = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    let num = 0;

    for (let i = 0; i < s.length; i++) {
        if (map[s[i]] < map[s[i+1]]) { //map[s[i]] > map[s[i+1]]
            num -= map[s[i]];          //num += map[s[i]] doesn't work properly - 'cause
        } else {                       //after second iteration it gives negative number too
            num += map[s[i]];
        }
    }

    return num;
}

console.log(romanToInt("III")); // Output: 3
console.log(romanToInt("IV")); // Output: 4
console.log(romanToInt("VI")); // Output: 6
console.log(romanToInt("IX")); // Output: 9
console.log(romanToInt("XLVIII")); // Output: 48
console.log(romanToInt("LVIII")); // Output: 58
console.log(romanToInt("CXCIV")); // Output: 194
console.log(romanToInt("MCMXCIV")); // Output: 1994
