/*
Задача. Масив у зворотньому порядку

написати реалізацію всіх функцій, ну і код main з псевдокоду:

це функція main {
    а = спитатиЛюдинуПроРозмірМасиву()
    створити масив м
    спитатиЛюдинуПроВсіЕлементиМасиву(м, а)
    вивестиНаЕкранКрасивоМасив(м)
    реверснутиМасив(м)
    написати "ось реверснутий масив:"
    вивестиНаЕкранКрасивоМасив(м)
}
*/
function main(){
    let arrSize = +prompt("Вкажіть розмір масиву: ");
    let arr = [];

    while(arrSize > 0) {
        arr.push(prompt("Вкажіть елемент масиву: "));
        arrSize--;
    }

    console.log("Ваш масив:")
    console.log(arr);

    let revArr = arr.reverse();
    console.log("А ось реверснутий масив: ");
    console.log(revArr);
}
main();