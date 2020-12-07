/*
Find the smallest common multiple of the provided parameters that can be evenly
divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is
also evenly divisible by all numbers between 1 and 3. The answer here would be 6.
*/
function smallestCommons(arr) {
    arr.sort(function (a,b) {
        return b - a;
    })
    const newArr = [];

    for (let i = arr[0]; i >= arr[1]; i--) {
        newArr.push(i);
    }
    let biggestNum = newArr[0];
    let smallestNum = newArr[newArr.length-1];
    let answer = biggestNum;
    for (let j = biggestNum; j >= smallestNum; j--) {
        if (answer % j !== 0) {
            answer += biggestNum;
            j = biggestNum;
        }
    }

    return answer;
}


console.log(smallestCommons([1,5])); // should return 60.
console.log(smallestCommons([5, 1])); // should return 60.
console.log(smallestCommons([2, 10])); // should return 2520.
console.log(smallestCommons([1, 13])); // should return 360360.
console.log(smallestCommons([23, 18])); // should return 6056820.
