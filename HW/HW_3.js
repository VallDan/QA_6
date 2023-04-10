//При помощи цикла for выведите чётные числа от 2 до 10
//   //====== Variant 1 ======
// for (i = 2; i <= 10; i += 2) {
//     console.log(i)
// }

// //========== Variant 2 ======

// for (i = 2; i  <= 10; i++) {
//     if(i % 2 == 0) {
//         console.log(i)  
//     }
// }


// 2 Задача с интервью
// У вас есть массив со скобками, предположим 
// [ ‘(‘, ‘)’, ‘(‘, ‘)’, ‘)’] . Количество элементов и последовательность может быть разной.
// Нужно выяснить, у каждой ли скобки есть соответствующая пара (открывающая и закрывающая).
 

// let sum1 = 0;
// let sum2 = 0;

// let arr  = ['(', ')', '(', ')', ')'];
// // let arr = ['(', ')', '{',  '(', ')', ')', 2, 'a'];

// for (let i = 0; i < arr.length; i++) {

//     if(arr[i] == '(') {
//         sum1 += 1;
//     }
//     else if (arr[i] == ')') {
//         sum2 += 1;
//     }
// }
// console.log('openning =' + sum1 + ', closing = ' + sum2)

// if(sum1 == sum2) {
//     console.log('equal')
// }
// else console.log('not equal')



//  3 Имеется зашифрованное предложение 
// “Ybrobrubr brabrrbrebr brtbrhbrebr brbbrebrsbrtbr brQbrAbr brebrvbrebrrbr”
// мы знаем, что оно означает “You are the best QA ever”.
// Нам нужно придумать программу дешифратор.

// //coder
// let text = "You are the best5 QA ever";
// let newText = '';
// let count = 0;
// for (let i = 0; i < text.length; i++) {

//     if (count % 2 == 0) {
//         newText = newText + text[i] + "br";

//     }
//     count +=2;
// }

// console.log(newText);

// //decoder
// let decoderresult = '';
// for (let i = 0; i < newText.length; i +=3) {
//     decoderresult += newText[i]
// }
// console.log(decoderresult)


// 1- Напишите программу калькулятора со switch, обработайте возможные ошибки ввода 

let num1 = 25;
let num2 = 5;
let operator = '+';

switch (operator){
    case "+":
       result = num1 + num2;
       console.log("The result is " + result)
       break  
    case "-":
       result = num1 + num2;
       console.log("The result is " + result)
       break 
case "*":
       result = num1 + num2;
       console.log("The result is " + result)
       break 
       case "*":
       result = num1 + num2;
       console.log("The result is " + result)
       break 
       case "/":
       if (num2 != 0)result = nu8m1 / num2
       else result = "you can't divide by 0"
       console.log("The result is " + result)
       break 

       default:
        //console.log("Unknown operation, please enter correct operator");
}
  




   