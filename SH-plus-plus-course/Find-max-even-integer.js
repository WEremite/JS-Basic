/*
Задача про найбільше число.

знайти найбільше число із чисел, які вводить користувач (припинити приймати числа, коли він введе 0)
не враховувати непарні числа (прочитати про команду взяття залишку від ділення - %)
*/
let arr = [];
let arr1 = [];
let num = +prompt("Введіть число. Щоб припинити - введіть 0");
while (num !== 0) {
  arr.push(num);
  num = +prompt("Введіть число. Щоб припинити - введіть 0");
}
console.log(arr);
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    arr1.push(arr[i]);
  }
}
console.log(Math.max(...arr1));
