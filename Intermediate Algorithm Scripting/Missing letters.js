/*
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
 */
function fearNotLetter(str) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let len = str.length;
    let start = alphabet.indexOf(str[0]);

    for(let i = start; i < start + len; i++){
        if(!str.includes(alphabet[i])){
            return alphabet[i];
        }
    }
    return undefined;
}
console.log(fearNotLetter("abce"));
console.log(fearNotLetter("abcdefghjklmno"));
console.log(fearNotLetter("stvwx"));
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"))