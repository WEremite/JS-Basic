/*

Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster,
 move it to the end of the word, and add "ay" to it.

- If a word begins with a vowel, just add "way" at the end.

Translate the provided string to Pig Latin. Input strings are guaranteed to be
English words in all lowercase.
 */

function translatePigLatin(str) {
    var check = str.search(/[aeiou]/i); //check vowels + Uppercase
    if (check === 0) {
        return str + "way";
    } else if (check === -1) {
        return str + "ay"
    } else {
        return str.substr(check) + str.substr(0, check) + "ay";
    }

}


console.log(translatePigLatin("consonant"));
console.log(translatePigLatin("Glove"));
console.log(translatePigLatin("Onsonant"));
console.log(translatePigLatin("rhythm"));
console.log(translatePigLatin("Zhrmkx"))