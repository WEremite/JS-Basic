/*
Flatten a nested array. You must account for varying levels of nesting.
 */
function steamrollArray(arr) {
    let answer = []
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            let newArr = steamrollArray(arr[i]);
            answer = answer.concat(newArr);
        } else {
            answer.push(arr[i]);
        }
    }

    return answer;
}

console.log(steamrollArray([1, [2], [3, [[4]]]])); //should return [1, 2, 3, 4].
console.log(steamrollArray([1, [], [3, [[4]]]])); //should return [1, 3, 4].
console.log(steamrollArray([1, {}, [3, [[4]]]])); //should return [1, {}, 3, 4].

//Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods.
