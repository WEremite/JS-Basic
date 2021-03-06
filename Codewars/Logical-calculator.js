/*
Your task is to calculate logical value of boolean array. Test arrays are one-dimensional and their size is in the range 1-50.

Links referring to logical operations: AND, OR and XOR.

You should begin at the first value, and repeatedly apply the logical operation across the remaining elements in the array sequentially.

First Example:

Input: true, true, false, operator: AND

Steps: true AND true -> true, true AND false -> false

Output: false

Second Example:

Input: true, true, false, operator: OR

Steps: true OR true -> true, true OR false -> true

Output: true

Third Example:

Input: true, true, false, operator: XOR

Steps: true XOR true -> false, false XOR false -> false

Output: false

Input:

boolean array, string with operator' s name: 'AND', 'OR', 'XOR'.

Output:

calculated boolean

 */

/*
Test.assertEquals(logicalCalc([true, true, true, false], "AND"), false);
Test.assertEquals(logicalCalc([true, true, true, false], "OR"), true);
Test.assertEquals(logicalCalc([true, true, true, false], "XOR"), true);
Test.assertEquals(logicalCalc([true, true, false, false], "AND"), false);
Test.assertEquals(logicalCalc([true, true, false, false], "OR"), true);
Test.assertEquals(logicalCalc([true, true, false, false], "XOR"), false);
Test.assertEquals(logicalCalc([true, false, false, false], "AND"), false);
Test.assertEquals(logicalCalc([true, false, false, false], "OR"), true);
Test.assertEquals(logicalCalc([true, false, false, false], "XOR"), true);
Test.assertEquals(logicalCalc([true, true], "AND"), true);
Test.assertEquals(logicalCalc([true, true], "OR"), true);
Test.assertEquals(logicalCalc([true, true], "XOR"), false);
Test.assertEquals(logicalCalc([false, false], "AND"), false);
Test.assertEquals(logicalCalc([false, false], "OR"), false);
Test.assertEquals(logicalCalc([false, false], "XOR"), false);
Test.assertEquals(logicalCalc([false], "AND"), false);
Test.assertEquals(logicalCalc([false], "OR"), false);
Test.assertEquals(logicalCalc([false], "XOR"), false);
Test.assertEquals(logicalCalc([true], "AND"), true);
Test.assertEquals(logicalCalc([true], "OR"), true);
Test.assertEquals(logicalCalc([true], "XOR"), true);
 */

function logicalCalc(array, op){
    //your code here
    let result = array[0];
    if(array.length === 1 && array[0] === true) {
        return true;
    } else if (array.length === 1 && array[0] === false){
        return false;
    }

    for(let i = 1; i < array.length; i++) {
        switch (op){
            case "AND":
                result = result && array[i];
                break;
            case "OR":
                result = result || array[i];
                break;
            case "XOR":
                result = result !== array[i];
        }
    }
    return result;
}

console.log(logicalCalc([true, true, true, false], "AND"));
console.log(logicalCalc([true, true, true, false], "OR"));
console.log(logicalCalc([true, true, true, false], "XOR"));
console.log(logicalCalc([true, true, false, false], "AND"));
console.log(logicalCalc([true, true, false, false], "OR"));
console.log(logicalCalc([true, true, false, false], "XOR"));
console.log(logicalCalc([true, false, false, false], "AND"));
console.log(logicalCalc([true, false, false, false], "OR"));
console.log(logicalCalc([true, false, false, false], "XOR"));
/*console.log(logicalCalc([true, true], "AND"));
console.log(logicalCalc([true, true], "OR"));
console.log(logicalCalc([true, true], "XOR"));
console.log(logicalCalc([false, false], "AND"));
console.log(logicalCalc([false, false], "OR"));
console.log(logicalCalc([false, false], "XOR"));*/
/*
console.log(logicalCalc([false], "AND"));
console.log(logicalCalc([false], "OR"));
console.log(logicalCalc([false], "XOR"));
console.log(logicalCalc([true], "AND"));
console.log(logicalCalc([true], "OR"));
console.log(logicalCalc([true], "XOR"));*/
