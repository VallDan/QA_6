console.log("7) ======================")

let romb = '';
x = 10; //5
let space = ' ';
for (let i = 1; i <= x; i++) {
    romb += space.repeat(x - i);
    for (let j = 1; j <= i; j++) {
        if (j == 10){            //remove 10 or %10
            romb += 0;
        }
        else romb += j;
    //romb += j;
    }
   for (let j = i - 1; j >= 1; j--) {
        romb += j;
    }
    romb += '\n';
}
x = 9; //4
for (let i = 1; i <= x; i++) {
    romb += space.repeat(i); //i - 1 if x = 5
    for (let j = 1; j <= x + 1 - i; j++) {
        romb += j;
    }
    for (let j = x - i; j >= 1; j--) {
        romb += j ;
    }
    romb += '\n';
}
console.log(romb);
