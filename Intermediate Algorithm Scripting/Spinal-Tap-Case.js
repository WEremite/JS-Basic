/*
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
 */
function spinalCase(str) {
    return str.replace(/([a-z])([A-Z])|[_|\s]+/g, '$1-$2').toLowerCase();
}

console.log(spinalCase('This Is Spinal Tap'));
console.log(spinalCase("thisIsSpinalTap"));
console.log(spinalCase("Avalanche isComingAghrrr pchelobaka"));
