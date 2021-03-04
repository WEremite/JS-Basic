function credit(price) {
    const percent = 0.02;
    let months = 24;
    let bankCash  =  price * percent * months;
    let monthPay = Math.round((price + bankCash) / months);

    console.log(`Ціна: ${price} грн`);
    console.log(`Переплата за ${months} місяців: ${Math.round(bankCash)} грн`);
    return monthPay;
}
console.log(`Щомісячна виплата: ${credit(1221)} грн`);