/*
The DNA strand is missing the pairing element. Take each character, get its pair,
and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are
grouped into one encapsulating array.
 */
function pairElement(str) {
    let DNA = str.split("");
    let AT = ["A", "T"];
    let TA = ["T", "A"];
    let CG = ["C", "G"];
    let GC = ["G", "C"];
    let result = [];
    for (let i = 0; i < DNA.length; i++) {
        switch (DNA[i]) {
            case "A":
                result.push(AT);
                break;
            case "T":
                result.push(TA);
                break;
            case "C":
                result.push(CG);
                break;
            case "G":
                result.push(GC);
                break;
        }
    }
    return result;
}

console.log(pairElement("GCG"));
console.log(pairElement("ATCGA"));
console.log(pairElement("TTGAG"));
