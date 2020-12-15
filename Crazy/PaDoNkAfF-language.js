/*
Give a string. You should transform it to PaDoNkOfF language (capitalize first and every second char after).
Ex:
padonkoff("Hello World") -> HeLlO WoRlD
 */
function padonkoff(sentence){
    let arr = sentence.split(' ');
     let newArr = [];
    arr.map(a => {
        newArr.push(a.split('')
            .map((v, i) => i % 2 === 0 ? v.toUpperCase() : v.toLowerCase())
            .join(''));

    })

    return newArr.join(' ');
}

console.log(padonkoff("Hello World"));
console.log(padonkoff("Avalanche"));
console.log(padonkoff("Is it a rocket in your pocket?"));
console.log(padonkoff("dubdabdab"));
console.log(padonkoff("Насипати гречки й меду налити!"));

