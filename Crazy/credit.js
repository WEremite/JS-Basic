function credit(price) {
    const percent = 0.02;
    let month = 24;
    let percSum  =  price * percent * month;
    let monthPay = Math.round((price + percSum) / month);

    console.log(`Ціна: ${price} грн`);
    console.log(`Переплата за ${month} місяців: ${percSum} грн`);
    return monthPay;
}
console.log(`Щомісячна виплата: ${credit(16400)} грн`);