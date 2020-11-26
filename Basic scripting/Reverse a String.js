/*
Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string.
 */

//My variant
function reverseString(str) {
    let revStrArr = [];
     for (let letter in str) {
        revStrArr.unshift(str[letter]);

    }
    console.log(revStrArr);
    let revStr = revStrArr.join('');
    console.log(revStr);
    return revStr;
}

reverseString("hello");

//freecodecamp variant
/* function reverseString(str) {
    return str
        .split("")
        .reverse()
        .join("");
}
 */