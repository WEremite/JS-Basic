function repeatStringNumTimes(str, num) {
    let repStr = "";
    while (num > 0) {
        repStr += str;
        num--;
    }
    return repStr;
}

repeatStringNumTimes("abc", 3);