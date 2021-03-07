/*
Complete the solution so that it splits the string into pairs of two characters.
If the string contains an odd number of characters then it should replace the
missing second character of the final pair with an underscore ('_').

Examples:

solution('abc') // should return ['ab', 'c_']
solution('abcdef') // should return ['ab', 'cd', 'ef']

 */
function solution(str){
    if (str.length === 0) {
        return [];
    }
    let arr = str.split('').join(" ").split(' ');
    if ((arr.length % 2) !== 0) {
        arr.push('_');
    }

    let arr1 = [];
    for (let i = 0; i < arr.length; i++){
        arr1.push(arr[i] + arr[i+1]);
        arr.splice(0, 1);

    }
    return arr1;

}

console.log(solution('abc')); // should return ['ab', 'c_']
console.log(solution('abcdef')); // should return ['ab', 'cd', 'ef']
console.log(solution("abcdef")); // ["ab", "cd", "ef"]
console.log(solution("abcdefg")); // ["ab", "cd", "ef", "g_"]
console.log(solution("")); // []
