/* Множення (довгі числа)
March 17, 2021

Завдання:

Знайти результат множення двох довгих чисел.

Вхідні дані:

У першому рядку міститься одне число довжиною не більше 255 знаків.
У другому рядку міститься операція (* - множення).
Третій рядок містить друге число, також довжиною не більше 255 знаків.

Вихідні дані:

Вивести єдине число – результат виконання заданої операції над цими двома числами.
 */
function multiplication(str1, sign, str2) {
    let num1 = parseInt(str1);
    let num2 = parseInt(str2);
    let result = 0;
    if (sign === "*") {result = num1 * num2;}

    return result;
}
console.log(multiplication("123456789", "*", "987654321" ));
console.log(multiplication("5", "*", "3" ));