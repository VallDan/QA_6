console.log("Number - 2) ===============")
let pyramid = '';
x = 5;
space = ' ';
let sum = 1;
for (let i = 1; i <= x; i++) {
    pyramid += space.repeat(x - i) + "*".repeat(sum) + '\n';
    sum += 2;
}
console.log(pyramid)