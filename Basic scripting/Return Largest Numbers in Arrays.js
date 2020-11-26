//my variant
function largestOfFour(arr) {
    let newArr = [];
    let newArr2 = [];
    for (let i = 0; i < arr.length; i++) {
        newArr = arr[i].sort((a, b) => a - b);
        newArr2.push(newArr[newArr.length -1]);
    }
    console.log(newArr2);
    return newArr2;
}
