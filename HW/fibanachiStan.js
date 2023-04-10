// 0, 1, 1, 2, 3, 5, 8, 13, 21.....
// 0  1   2  3  4  5  6  7   8

function fib(n) {
    if (n == 1) return 1; 
    if (n == 2) return 1;
    return fib(n - 1) + fib(n -2);
}
console.log(fib(8));