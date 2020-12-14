/*
Your goal in this kata is to implement a difference function,
which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b.

arrayDiff([1,2],[1]) == [2]

If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]
 */

//my variation
function arrayDiff(a, b) {
    if (a.length === 0) {
        return [];
    } else if (b.length === 0) {
        return a;
    } else {
      b.map(num => {
          function diff(num) {
              for (let i = 0; i < a.length; i++) {
                  if (num === a[i]) {
                      a.splice(a.indexOf(num), 1);
                      diff(num);
                  }
              }
          }
          diff(num);
      })
        return a;
    }
}



//console.log(arrayDiff([1,2],[1])); //[2]
//console.log(arrayDiff([1,2,2,2,3],[2])); //[1,3]
//console.log(arrayDiff([], [4,5])); //[]
//console.log(arrayDiff([3,4], [3])); //[4]
//console.log(arrayDiff([1,8,2], [])); //[1,8,2]
console.log(arrayDiff([1,8,2,2,8,4,5,7], [2,8])); //[1,4,5,7]
console.log(arrayDiff([10,7,1,14,-9,9,17,6,-6,17,-15,-11,-12,-13,15,11,-5,5,-20,16],[6,-20,-11,17,9,10,-13,11,-5,1,14,-6,15])) //[7, -9, -15, -12, 5, 16]

/*//variation from codewars
function arrayDiff(a, b) {
    return a.filter(e => !b.includes(e));
}*/
