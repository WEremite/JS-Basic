/*
Третий максимальный элемент
Binary Studio AcademyMarch 19, 2021

Темы: массивы, деревья, ???, ???, ???, асимптотическая сложность

Языки имплементации (будут рассмотрены в разборе): Java, C#, JavaScript

​Задача: На вход функции дан массив из целых неотрицательных чисел *nums*. 
Верните 3-ий максимальный элемент. Если такой не существует - верните максимальный элемент(см. примеры).

​Примеры: 

Пример 1

```

Вход: [1, 2, 3],

Выход: 1 
```​

Пример 2
```

Вход: [1, 2, 2, 3],

Выход: 1

Объяснение: Третий максимальный элемент подразумевает уникальные числа. 
Оба числа 2 считаются как второй максимальный элемент 

```
Пример 3

```
Вход: [1, 2],

Выход: 2

Объяснение: Третего максимального элемента нет, соответственно нужно вернуть максимальный элемент - в нашем случае 2.

```
Followup #1

Найдите решение с O(n) асимптотической сложностью.

​Followup #2

Теперь нам нужно найти не 3-ий, а k-ый максимальный элемент  
(k целое число больше 0, передается в вашу функцию/метод вторым параметром). Оцените асимптотическую сложность.
*/

// Return third max element

function maxThirdElem(nums) {
  // sorting elements in array from max to min
  let sortedArr = nums.sort((a, b) => b - a);

  // deleting duplicates
  let newArr = [...new Set(sortedArr)];

  if (newArr.length >= 3) {
    return newArr[2];
  } else {
    return newArr[0];
  }
}
console.log(maxThirdElem([1, 2, 3])); // should return 1
console.log(maxThirdElem([3, 4, 1, 5, 8, 10, 100])); // should return 8
console.log(maxThirdElem([1, 2])); // should return 2
console.log(maxThirdElem([2])); // should return 2
console.log(maxThirdElem([2, 3, 2, 1])); // should return 1

// Return user defined max element

function maxUserPickElem(nums, k) {
  let sortedArr = nums.sort((a, b) => b - a);

  let newArr = [...new Set(sortedArr)];

  if (newArr.length >= k) {
    return newArr[k - 1];
  } else {
    return newArr[0];
  }
}
console.log(maxUserPickElem([1, 3, 4, 2, 5, 4, 8, 6, 3, 7, 3, 4], 4)); // should return 5
console.log(maxUserPickElem([12, 14, 5, 4, 11, 77, 123, 4, 3, 6, 12], 10)); // should return 123
