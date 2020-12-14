/*Return the provided string with the first letter of each word capitalized.
    Make sure the rest of the word is in lower case.
For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".*/
function titleCase(str) {
    let a = str.toLowerCase();
    let b = a.split(' ');
    let c = [];
    for (let i = 0; i < b.length; i++) {
        c.push(b[i][0].toUpperCase()+b[i].substring(1));
    }
    a = c.join(" ");
    return a;
}

console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("sHoRt AnD sToUt"));
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));