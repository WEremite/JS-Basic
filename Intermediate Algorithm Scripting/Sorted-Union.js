/*
Write a function that takes two or more arrays and returns a new array of unique
 values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their
 original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array
should not be sorted in numerical order.

Check the assertion tests for examples.
 */
function uniteUnique(arr) {
    let newArr = Array.from(arguments);
    let result= []
    for (let i = 0; i < newArr.length; i++) {
        for (let j = 0; j < newArr[i].length; j++) {
            if (result.includes(newArr[i][j]) === false) {
                result.push(newArr[i][j]);
            }
        }
    }
    console.log(result)
    return result;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);