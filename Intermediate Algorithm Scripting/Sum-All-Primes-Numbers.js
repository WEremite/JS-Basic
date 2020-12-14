/*
A prime number is a whole number greater than 1 with exactly two divisors:
1 and itself. For example, 2 is a prime number because it is only divisible
by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all prime numbers that
are less than or equal to num.

 */
function sumPrimes(num) {
    let arr = [];
    let sum = 2;

    if (num <= 1) return "There is no prime number."

    if (num === 2) return 2;

    for (let i = 3; i <= num; i++) {
        arr.push(i)
    }

    arr.map(item => {
        for (let j = 2; j < item; j++) {
            if (item % j === 0) {
                return false
            }
        }
        sum += item;
        }

    )

    return sum;
}

console.log(sumPrimes(10)) //should return 17
console.log(sumPrimes(6)) //should return 10
console.log(sumPrimes(1));
console.log(sumPrimes(2));
console.log(sumPrimes(977)); //should return 73156
