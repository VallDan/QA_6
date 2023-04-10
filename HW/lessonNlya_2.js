// let phrase = "Hello world!"; //1 - 12
//length      123456789..12
//index       01223......11
// let space = '  .9%';

// phrase.length

// console.log(phrase.length);
// phrase.length(space.length);

//index:
// "Hello world!"  0-11
//  0123.......11

// console.log(phrase[11]);
// console.log(space[0]);
// console.log(phrase[7]);
// console.log(phrase[0]);

// // string.toLowerCase();
//  console.log(phrase.toLowerCase());
// // string.toUpperCase();
//  console.log(phrase.toUpperCase());

//  const myArr = [];

//  const arr = new Array();

// let arr = [];

//console.log(arr);

// const arr1 = ['a', 'b'];
//console.log(arr1);

//let arr2 = ['ok', 'pine', 'oak', 'aspen'];
//console.log(arr2);

//const arr3 = [];  //pustoi massiv
//const arr3 = [1, 2, 3, 4]
//console.log(arr3);

// let five = 5;
// let six = 6;
// let seven = 'seven';


//const diffTypes = [null, 'One', 2, true, undefined, five, seven, [1,2,3], arr3];
//console.log(diffTypes);

//const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
//indexes:        0    1    2    3    4    5    6  
// or:           -7    -6   -5     -4   -3   -2   -1

// console.log(letters.length); //kolichestvo elementov = vsego
// console.log(letters[0]);
// console.log(letters[letters.length - 1]);  // 7 - 1 = 6
// console.log(letters.at(-2));

// obrashenie k nesushestvuyushemu elementu v massive

// console.log(letters[10]);
// console.log(letters.at(-10));
  

// repit string LOP


// let str1 = "+/ "; //repit 7
// let newStr = "";
// let i;
// for ( i = 0; i < 7; i++) { // 0 1 2 3 4 5 6
//    // newStr = newStr + str1;
//     //console.log(newStr);
//     // console.log(str1 + i);

// }
//console.log(newStr);
// console.log(str1 + i);

// let sum = 0;
// for (let i = 1; i <= 10; i++) { // 1 sum = 1; i = 2 sum = 3; i = 3 sum = 6;
//     sum += i;

//    // console.log(sum);
// }
// console.log(sum);

// let num = 5; // ^3
// let result = 1;
// for ( let i = 1; i <= 3; i++) {    // i = 1. result = 1 * 5 = 5
//     result = result * num; 
//     console.log(result);            // i = 2. result = 5 * 5 = 25
// }                                  // i = 3. result = 25 * 5 = 125
// //console.log(result);

let str3 = "Hello!"  //  ^3
let result
for (let i = 1; i <= str3.length; i += 2) {  // str3.length = 6
result = i;
console.log(result); // i = 1 <1>; i = 3 <3>; i = 5 <5>; i  = 7
}
