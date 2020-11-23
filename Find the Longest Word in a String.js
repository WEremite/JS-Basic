function findLongestWordLength(str) {
    let arr = str.split(' ');
    let orderedArr = arr.sort((a, b) => a.length - b.length);
    console.log(orderedArr[orderedArr.length -1].length)
    return orderedArr[orderedArr.length -1].length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
findLongestWordLength("What if we try a super-long word such as otorhinolaryngology");