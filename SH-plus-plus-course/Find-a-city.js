/*
Задача про міста

Спитайте в людини 10 назв міст, по черзі.
Після цього спитайте про її рідне місто.

Якщо виявиться, що програма знає її рідне місто, то повинна вивести ОДИН напис "я знаю твоє місто!"
Якщо виявиться, що програма не знає її рідне місто, то повинна вивести ОДИН напис "я НЕ знаю твоє місто!"
*/
let arr = [];
arr.push(prompt("Вкажіть перше місто: "));
arr.push(prompt("Вкажіть друге місто: "));
arr.push(prompt("Вкажіть третє місто: "));
arr.push(prompt("Вкажіть четверте місто: "));
arr.push(prompt("Вкажіть п'яте місто: "));
//console.log(arr);
let city = prompt("Вкажіть ваше рідне місто: ");
//console.log(city);
let check = 0;
for (let i = 0; i < arr.length; i++) {
    if(arr[i] === city) {
        check++;
        break;
    }
}
console.log(check ? "Я знаю твоє місто!" : "Я не знаю твоє місто!");