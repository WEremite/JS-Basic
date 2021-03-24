/*
Given a 2D Array,

:

1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0

An hourglass in
is a subset of values with indices falling in this pattern in

's graphical representation:

a b c
  d
e f g

There are
hourglasses in . An hourglass sum is the sum of an hourglass' values. 
Calculate the hourglass sum for every hourglass in , then print the maximum hourglass sum. 
The array will always be.

Example

-9 -9 -9  1 1 1 
 0 -9  0  4 3 2
-9 -9 -9  1 2 3
 0  0  8  6 6 0
 0  0  0 -2 0 0
 0  0  1  2 4 0

The

hourglass sums are:

-63, -34, -9, 12, 
-10,   0, 28, 23, 
-27, -11, -2, 10, 
  9,  17, 25, 18

The highest hourglass sum is 28
from the hourglass beginning at row 1, column 2

:

0 4 3
  1
8 6 6

Note: If you have already solved the Java domain's Java 2D Array challenge, you may wish to skip this challenge.

Function Description

Complete the function hourglassSum in the editor below.

hourglassSum has the following parameter(s):

    int arr[6][6]: an array of integers

Returns

    int: the maximum hourglass sum

Input Format

Each of the
lines of inputs contains space-separated integers

.

Constraints

Output Format

Print the largest (maximum) hourglass sum found in

.

Sample Input

1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 2 4 4 0
0 0 0 2 0 0
0 0 1 2 4 0

Sample Output

19

Explanation

contains the following hourglasses:

image

The hourglass with the maximum sum (

) is:

2 4 4
  2
1 2 4

*/

function hourglassSum(str) {
  let arrOfSum = [];
  let newArr = str.split(' ').map(num => +num);

  function sumOfElem(newArr) {
    if (newArr.length > 12) {
      for (let i = 0; i < 4; i++) {

        let sum = 0;
        sum += newArr[i + 7];

        for (let j = 0; j < 3; j++) {
          sum += newArr[i + j];
        }

        for (let k = 12; k < 15; k++) {
          sum += newArr[i + k];
        }

        arrOfSum.push(sum);
      }
      sumOfElem(newArr.splice(6));
    }
  }
  sumOfElem(newArr);
  arrOfSum.sort((a, b) => b - a);
  return arrOfSum[0];
}


/* console.log(hourglassSum([
  1, 1, 1, 0, 0, 0,
  0, 1, 0, 0, 0, 0,
  1, 1, 1, 0, 0, 0,
  0, 0, 2, 4, 4, 0,
  0, 0, 0, 2, 0, 0,
  0, 0, 1, 2, 4, 0
])); // should return 19

console.log(hourglassSum([
  -9, -9, -9, 1, 1, 1, 
   0, -9, 0, 4, 3, 2,
  -9, -9, -9, 1, 2, 3,
   0, 0, 8, 6, 6, 0,
   0, 0, 0, -2, 0, 0,
   0, 0, 1, 2, 4, 0
])); // should return 28

console.log(hourglassSum([
  1, 1, 1, 0, 0, 0,

  0, 1, 0, 0, 0, 0,

  1, 1, 1, 0, 0, 0,

  0, 9, 2, -4, -4, 0,

  0, 0, 0, -2, 0, 0,

  0, 0, -1, -2, -4, 0
])); // should return 13 */

console.log(hourglassSum("1 1 1 0 0 0 0 1 0 0 0 0 1 1 1 0 0 0 0 0 2 4 4 0 0 0 0 2 0 0 0 0 1 2 4 0")); //should return 19