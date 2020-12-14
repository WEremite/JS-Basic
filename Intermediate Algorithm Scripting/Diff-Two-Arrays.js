/*
Compare two arrays and return a new array with any items only found in one
of the two given arrays, but not both. In other words, return the symmetric
difference of the two arrays.

Note
You can return the array with its elements in any order.
 */

//my variant

function diffArray(arr1, arr2) {
    var newArr = [];

/*  //first variation
    for (let i = 0; i < arr2.length; i++) {
        if(arr1.includes(arr2[i]) === false) {
            newArr.push(arr2[i])
        }
    }
    for (let g = 0; g < arr1.length; g++) {
        if(arr2.includes(arr1[g]) === false) {
            newArr.push(arr1[g])
        }
    }*/
    //second variation
    function checkDiff (firstArr, secondArr) {
        for (let i = 0; i < secondArr.length; i++) {
            if (firstArr.includes(secondArr[i]) === false) {
                newArr.push(secondArr[i]);
            }
        }
    }
    checkDiff(arr1, arr2);
    checkDiff(arr2, arr1);
    return newArr;
}
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
console.log(diffArray([], ["snuffleupagus", "cookie monster", "elmo"]));

//freecodecamp variant
/*
function diffArray(arr1, arr2) {
    var newArr = [];

    function onlyInFirst(first, second) {
        // Looping through an array to find elements that don't exist in another array
        for (var i = 0; i < first.length; i++) {
            if (second.indexOf(first[i]) === -1) {
                // Pushing the elements unique to first to newArr
                newArr.push(first[i]);
            }
        }
    }

    onlyInFirst(arr1, arr2);
    onlyInFirst(arr2, arr1);

    return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
*/
