/*
You are given two arrays and an index.

    Copy each element of the first array into the second array, in order.

    Begin inserting elements at index n of the second array.

    Return the resulting array. The input arrays should remain the same after the function runs.*/

function frankenSplice(arr1, arr2, n) {
    let arr3 = arr2.slice(0); //create a copy from arr2
    for (let num in arr1) {
        arr3.splice(n, 0, arr1[num]);
        n++;
    }
    return arr3;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
console.log(frankenSplice([1, 2], ["a", "b"], 1));
console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2));
