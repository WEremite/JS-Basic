/*
є 10 карток (звичайно від 0 до 9) повних якихось грошей (чисел) і треба накодити таке:

vvedi nomer kartochki: 3
skolko polozhit? 100
0 0 0 100 0 0 0 0 0 0
v summe na vseh kartah 100


Так виглядатиме консоль, якщо від самого початку на всіх картках 0.

Зробити перевірку на ввід коректних даних:
номера мають бути від 0 до 9, суми мають бути від -1000 до 1000.

Треба перепитувати користувача, доки він не введе коректне число.
*/
let cardArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let cardNumber = +prompt("Введіть номер картки (від 0 до 9): ");
while (cardNumber > 9 || cardNumber < 0) {
    cardNumber = +prompt("Введіть номер картки (від 0 до 9)");
}
console.log(cardNumber);

let money = +prompt("Скільки бажаєте покласти грошей? (від -1000 до 1000) ");
while (money > 1000 || money < -1000) {
    money = +prompt("Скільки бажаєте покласти грошей? (від -1000 до 1000) ");
}
console.log(money);
cardArr[cardNumber] = money;

let sum = 0;
for (let i = 0; i < cardArr.length; i++) {
    sum += cardArr[i];
}

console.log("В сумі на всіх картах " + sum + " грн.");
