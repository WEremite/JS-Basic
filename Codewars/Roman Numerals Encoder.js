/*
Create a function taking a positive integer as its parameter
and returning a string containing the Roman Numeral representation
of that integer.

Modern Roman numerals are written by expressing each digit separately
starting with the left most digit and skipping any digit with a value
of zero.
In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC.
2008 is written as 2000=MM, 8=VIII; or MMVIII.
1666 uses each Roman symbol in descending order: MDCLXVI.

Example:

solution(1000); // should return 'M'

Help:

Symbol    Value
I          1
V          5
X          10
L          50
C          100
D          500
M          1,000

Remember that there can't be more than 3 identical symbols in a row.
 */
function solution(number){
    // convert the number to a roman numeral
    let newNumber = number;
    const arr = [];
    encoder(newNumber);
    function encoder(newNumber) {
        switch (newNumber) {
            case 0:
                break;
            case 1:
                arr.push('I');
                break;
            case 4:
                arr.push('IV');
                break;
            case 5:
                arr.push('V');
                break;
            case 9:
                arr.push('IX');
                break;
            case 10:
                arr.push('X');
                break;
            case 50:
                arr.push('L');
                break;
            case 100:
                arr.push('C');
                break;
            case 500:
                arr.push('D');
                break;
            case 1000:
                arr.push('M');
                break;
            default:
                if (newNumber > 1 && newNumber < 5) {
                    arr.push('I');
                    encoder(newNumber - 1);
                } else if (newNumber > 5 && newNumber < 9) {
                    arr.push('V');
                    encoder(newNumber - 5);
                } else if (newNumber > 10 && newNumber < 50) {
                    if(newNumber >= 40) {
                        arr.push('XL');
                        encoder(newNumber-40);
                    } else {
                        arr.push('X');
                        encoder(newNumber-10);
                    }
                } else if (newNumber > 50 && newNumber < 100) {
                    if(newNumber >= 90) {
                        arr.push('XC');
                        encoder(newNumber-90);
                    } else {
                        arr.push('L');
                        encoder(newNumber-50);
                    }
                } else if (newNumber > 100 && newNumber < 500) {
                    if(newNumber >= 400) {
                        arr.push('CD');
                        encoder(newNumber-400);
                    } else {
                        arr.push('C');
                        encoder(newNumber-100);
                    }
                } else if (newNumber > 500 && newNumber < 1000) {
                    if(newNumber >= 900) {
                        arr.push('CM');
                        encoder(newNumber-900);
                    } else {
                        arr.push('D');
                        encoder(newNumber-500);
                    }
                } else  {
                    arr.push('M');
                    encoder(newNumber-1000);
                }
        }

    }


    return arr.join('');


}

// console.log(solution(1)); //'1 should, "I"
// console.log(solution(2)); //'II', '2 should, "II"'
// console.log(solution(3)); //'III', '3 should, "III"'
// console.log(solution(4)); //'IV', '4 should, "IV"'
// console.log(solution(5)); //'V', '5 should, "V"'
// console.log(solution(6)); //'VI', '6 should, "VI"'
// console.log(solution(9)); //'IX', '9 should, "IX"'
// console.log(solution(10)); //'X', '10 should, "X"'
// console.log(solution(11)); //'XI'
// console.log(solution(19)); //'XIX'
// console.log(solution(22)); //'XXII'
// console.log(solution(15)); //'XV'
//console.log(solution(43)); //'XLIII'
// console.log(solution(83)); //'LXXXIII'
// console.log(solution(96)); //'XCVI'
// console.log(solution(396)); //'CCCXCVI'
// console.log(solution(425)); //'CDXXV'
//console.log(solution(736)); //'DCCXXXVI'
//console.log(solution(911)); //'CMXI'
console.log(solution(1000)); //'M', '1000 should, "M"')
console.log(solution(1001)); //'MI', '1001 should, "MI"')
console.log(solution(1990)); //'MCMXC', '1990 should, "MCMXC"')
console.log(solution(2007)); //'MMVII', '2007 should, "MMVII"')
console.log(solution(2008)); //'MMVIII', '2008 should, "MMVIII"')
