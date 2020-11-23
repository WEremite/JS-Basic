//my variation
function confirmEnding(str, target) {
    if (str.substring(str.length - target.length) === target) {
        return true;
    } else {
        return false;
    }

}

console.log(confirmEnding("He has to give me a new name", "name"));

/* es2015
function confirmEnding(str, target) {
    return str.endsWith(target);
}

console.log(confirmEnding("He has to give me a new name", "name"));*/

/* phpstorm variation
function confirmEnding(str, target) {
    return str.substring(str.length - target.length) === target;

}

console.log(confirmEnding("He has to give me a new name", "name"));*/
