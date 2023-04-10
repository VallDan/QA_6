// while loop 

//Syntax:
 
// while (condition) {
//     //code block
// }

// let i = 0;
// while (i < 3) {
//     console.log(i);
//     i++
// }

// let j = 7;
// while (j != 0) {
//     console.log(j);
//     j--
// }

// const fruits = ['aple', 'pears', 'plums', 'grape'];
// let i = 0;
// while (i < fruits.length) {
//     console.log(fruits[i])
//     i++
// }

/// ...............  
// do .... whike
// do {
//     code block
// }
// while (condition);

// let k = 0;
// do {
//     console.log( k);
//     k++;
// }while (k < 3)

////............. break;  continue
// Директива  break ===>   полностью прекращает выполнение цикла .
// continue ==> прерывает текущую итерацию циклов и 
// продолжает выполнение цикла со следующей итерации 

// for (let i = 0; i <= 10; i++) {
//     //console.log(i)
//     if (i == 7 ) break;
//     console.log(i)
// }

// for (let i = 0; i <= 10; i++) {
//     if ( i % 2 === 0) continue;
//     console.log(i)
//     console.log('Hello')
// }

// let fruits = ['aple', 'pears', 'plums', 'grape', 'watermelone'];

// for (let i = 0; i < fruits.length; i++) {
//     if (fruits[i] == 'plums') {
//         console.log('haker attacck')
//         break;
//     }
//     if (fruits[i] == 'grape') {
//         continue;
// }
// console.log(fruits[i])
// }


// Нельзя использовать справа от оператора "?" ( тернарный оператор -
//  ternary operator)
//  syntax:
//  условие ? выражение  : выражение2

// for (let i = 0; i < 10; i++) {
//     (i < 5) ? console.log(i) : continue
//     // console.log("Hiello");

// }
// let a = 7;
// (a < 5) ? console.log(a) : console.log("Hi");

//==================== FOR IN =====================

/**
 * for (key in object) {
 // code block to be executed
 }
//  */
//  const numbers = [45, 4, 9, 16, 25];

// let txt = "";
// for (let el in numbers) {
//    txt += numbers[el];
//     //console.log(numbers[el]);
//     console.log(txt);
// }
// console.log(txt);

// const cars = ["BMW", "Volvo", "Mini"];
// let text = " ";
// for (let x of cars) {
//     // text += x;
//     console.log(x)
// }

//======================== inner loops

//1                  // line == 1
//12                 // line == 2
//123                // line == 3
//1234               // line == 4
//12345              // line == 5

// console.log(1)
// console.log(1)
// console.log(1)
// console.log(1)
for (let i = 1; i <= 5; i++) {
    console.log(i)
}

for (let line = 1; line <= 5; line++) {
    let str = "";
    for (let numInLine = 1; numInLine <= line; numInLine++) {
        str += numInLine
    }
    console.log(str)
}

for (let i = 5; i >= 1; i--) {  // otvechaet5 za kolichestvon strok
    let str = "";
    for (let j = i; j >= 1; j--) {   // otvechaet za napolnenie stroki
        str = str + j;
    }
    console.log(str);
}

//if (i == 2) continue
// kak dostat element iz nvlozhennogo massiva

//
let arr = [1, [ "a", 'b',[5, 7]], 3, "Herro ok"]
// //      0 ____________________  2,   3
// //                  1
// //                    --------
// //            0     1     2
// //                     0  1
// console.log(typeof arr[3])
// // let str =
arr[1][1] = 'R'
     console.log(arr[1][1])
// kak proverit pustoi massiv


// let arr2 = [1, 3]
// console.log(typeof arr2)

// if (arr2.length == 0) { 
//   console.log("it's empty")
// }

