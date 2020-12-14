/*
Given a positive integer num, return the sum of all odd Fibonacci
numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1.
Every additional number in the sequence is the sum of the two previous
numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci
numbers less than or equal to 10 are 1, 1, 3, and 5.
 */
function sumFibs(num) {
    let arr = [1, 1]
    let sum = 0;

    while (arr[arr.length-1] <= num) {
        let sum = arr[arr.length-2] + arr[arr.length-1]

        arr.push(sum)


    }
    for (let i = 0; i < arr.length; i++) {
        if (arr.length-1 === 2) {
            return 1
        } else if (arr[i] % 2 !== 0 && arr[i] <= num) {
            sum+=arr[i];
        }
    }
    return sum;


}

console.log(sumFibs(1)) //should return 1
console.log(sumFibs(1000)) //should return 1785
console.log(sumFibs(4000000)) //should return 4613732
console.log(sumFibs(4)) //should return 5
console.log(sumFibs(75024)) //should return 60696
console.log(sumFibs(75025)) //should return 135721
console.log(sumFibs(10)) //should return 10
