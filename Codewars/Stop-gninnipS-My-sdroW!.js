/*
Write a function that takes in a string of one or more words,
and returns the same string, but with all five or more letter words
reversed (Just like the name of this Kata). Strings passed in will
consist of only letters and spaces. Spaces will be included only when
more than one word is present.

Examples:
spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"
spinWords( "This is a test") => returns "This is a test"
spinWords( "This is another test" )=> returns "This is rehtona test"

 */
function spinWords(string){

    let arr = string.split(" ")
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length >= 5) {
            let a = arr[i].split("").reverse().join("")
            newArr.push(a)
        } else {
            newArr.push(arr[i]);
        }
    }
    return newArr.join(" ");

}

console.log(spinWords("Welcome"));

console.log(spinWords("Hey fellow warriors"));
console.log(spinWords("This is a test"));
console.log(spinWords("This is another test"));
console.log(spinWords("You are almost to the last test"));
console.log(spinWords("Just kidding there is still one more"));
console.log(spinWords("Seriously this is the last one"));
