let row = 15;
let stars = 1;
let arr = [];
let figure = "";
let a = row;
let final = row - 1;

while (row > 0) {
    arr.push(stars);
    stars += 2;
    row--
}

for (let i = 0; i < arr.length; i++) {
    a = a - 1;
    let b = a;
    while (b > 0) {
        figure += " ";
        b--;
    }
    while (arr[i] > 0) {
        figure += "*"
        arr[i]--;
    }
    figure += "\n";
}

while (final > 0) {
    figure += " ";
    final--;
}
figure += "*";

console.log(figure);