/*
Given a string. Return only integers from string. If there is no integer - return 0;
 */
function numbers(str) {
    let arr = str.split('').map(Number);
    let arr1 = [];
    for (let i = 0; i < arr.length; i++) {
        if (!isNaN(arr[i])) {
            arr1.push(arr[i]);
        }
    }
    if (arr1.length === 0) {
        return 0;
    }
    return Number(arr1.join(''));
}
console.log(numbers('A123BC')); // 123
console.log(numbers('A1B2C3D4F5')); // 12345
console.log(numbers('ABCDF')); // 0