/*
Задача про обчислення найбільшого числа за допомогою функції
 */

function max(x,y) {
        return Math.max(x, y);
}

let a = +prompt("введи перше число");
let b = +prompt("введи друге число");

console.log(max(a,b));
