//1. Нарисуйте ромб
console.log("1 ) ======================")
let newStr = '';
for (let i = 1; i <= 5; i++) {
     for (let j = 1; j <= i; j++) {  // show if j = 5
        newStr += j;
    } 
    newStr += '\n';

 }
 console.log(newStr);

 console.log("2) ======================")

 let newStr1 = '';
 let x = 5;
 let space = ' ';
 for (let i = 1; i <= x; i++) {
      newStr1 += space.repeat(x - i)
      for (let j = 1; j <= i; j++) {
        newStr1 += j;
      }
      newStr1 += '\n';
 }
console.log(newStr1);

console.log("3 ) ======================")

let row = "";
for (let i = 1; i <= 5; i++) {
    row += i;
}
console.log(row)

console.log("4 ) ======================")

let newStr2 = "";
// let space = ' ';
// let x = 5;
for (let i = 1; i <= x; i++) {
    newStr2 += space.repeat(i - 1) 
    for (let j = 1; j  <= x + 1 - i; j++) {
        newStr2 += j;
    }
    newStr2 += '\n';
}
console.log(newStr2)


console.log("5 ) ======================")

let newStr3 = '';
//  let x = 5;
//  let space = ' ';
for (let i = 1; i <= x; i++) {
    for (let j = x + 1 - i; j >= 1; j--) {
        newStr3 += j;  
    }
    newStr3 += '\n';
}
console.log(newStr3);

console.log("5 / 2) ======================")

console.log('54321' + '\n'
              + '4321' + '\n'
              + '321' + '\n' 
              + '21' + '\n' 
              + '1' + '\n'             
)

console.log("6) ======================")

let pyramid = '';
// let x = 10;
// let space = ' ';
for (let i = 1; i <= x; i++) {
    pyramid += space.repeat(x - i)
    for (let j = 1; j <= i; j++) {
        pyramid += j;
    }
    for (let j = i - 1; j >= 1; j--) {
        pyramid +=j;
    }
    pyramid += '\n'; 
}

console.log(pyramid);

console.log("7) ======================")

let romb = '';
x = 10; //5
// let space = ' ';
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

console.log("Number - 2) ===============")
let pyramid2 = '';
x = 5;
space = ' ';
let sum = 1;
for (let i = 1; i <= x; i++) {
    pyramid2 += space.repeat(x - i) + "*".repeat(sum) + '\n';
    sum += 2;
}
console.log(pyramid2)


console.log("Number - 3) ===============")

let str = ''                       //                                                         
x = 5                               //                                                                       
for (let i = 1; i <= x; i++) {      // i= 1                   i= 2                                      i = 3
    let num = i                     // num = 1                num = 2                                   num = 3
      for(let j = 1 ; j <= i; j++){
        if (num >= 10) {
            str += num + space        // str += num(1) +space   str += (2 + space)                        str += (3 + space)
          num = num + (x - j)
        } else {
            str += num + space.repeat(2)        // str += num(1) +space   str += (2 + space)                        str += (3 + space)
            num = num + (x - j)
        } // j = 1                  j = 1, 2                                  j = 1 , 2, 3                           
                 // num = 1 + (5-1)        num = 2 + (5-1)                           num = 3 + ( 5 - 1)//
                                                         //   str += (2+space) + (6 +space)             str += (3+space) + (7+space) 
                                                                                                    //  num = 7 + ( 5 - 2)
                                                                                                    //  str += (3+space) + (7+space) +(10 +space)
      }
      str += '\n'
      
  }
console.log(str)



// //2 5. Задача с интервью*
//  //====== VARIANT 1 =========
// // У вас есть массив с тремя видами скобок, предположим 
// // [ ‘{‘, ‘)’, ‘(‘, ‘)’, ‘)’, ‘}, ‘[‘, ‘]’, ‘)’] . Количество элементов и последовательность может быть разной.
// // Нужно выяснить, все ли скобки являются парными  в правильной последовательности (открывающая и затем закрывающая). 
// // Также, скобки могут быть вложенными, но тем не менее, если последовательность соблюдена, то они считаются парными.

// let countOpen = 0;
// let countClose = 0;
let result = 0;

// let myArr = ['(', ')', '(', '(', '(', ')', '}', '(', ')', ')'];
// //let myArr = [')', '(', '(', '(', ')', '(', '(', ')', ')', '(', ')'];

// for (let i = 0; i < myArr.length; i++) {

//     if (myArr[i] == '(') countOpen += 1;
//     else if (myArr[i] == ')') countClose += 1;

//     result= countOpen - countClose;
//     console.log(result);
//     if (result < 0) {
//         console.log("Wrong sequance");
//         break;
//     }
// }

// if (countOpen == countClose) {
//     console.log('Equal') 
// }
// else if (countOpen > countClose) console.log('Not equal')


// VARIANT 2 =============

let result2 = 0;
let result3 = 0;

let myArr = ['{', '(', '(', ')', ')', '}', '[', ']', ')', '{'] // add '{'
for (let i in myArr) {

    if (myArr[i] == '(') result++;
    else if (myArr[i] == ')') result--;

    // if (result < 0) {
    //     console.log("Wrong sequance of '()");
    //     break
        
    // }

    if (myArr[i] == '{') result2++;
    else if (myArr[i] == '}') result2--;

    if (result2 < 0) {
        console.log("Wrong sequance of '{}");
       // break
       continue
    }

    if (myArr[i] == '{') result3++;
    else if (myArr[i] == ']') result3--;

    if (result3 < 0 || result < 0 || result2 < 0) {
        console.log("Wrong sequance of '[]'"); 
       // break
       continue
    }
     console.log(result, result2, result3)

}

if (result == 0 && result2 == 0 && result3 == 0) console.log('All Equal')
else if (result > 0 || result2 > 0 || result3 > 0) console.log('Not Equal')
