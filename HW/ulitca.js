let dayDistance = 3;
let nightDown = -2;
let distance = 0;
let days = 0;
let wall = 5;

//1
while ((distance += dayDistance) <= wall){
    days++;
    console.log(` - Current distance at the end of the day ${days}  is ${distance} meter(s)`)
    if (distance == wall) console.log('ok')
    else console.log('Go forward!')
     distance += nightDown;
}

// //2
// if ((distance += dayDistance) <= wall){
//     days++;
//     console.log(` - Current distance at the end of the day ${days}  is ${distance} meter(s)`)
//     if (distance == wall) console.log('ok')
//     distance += nightDown;
// }

// //3
// if ((distance += dayDistance) <= wall){
//     days++;
//     console.log(` - Current distance at the end of the day ${days}  is ${distance} meter(s)`)
//     if (distance == wall) console.log('ok')
//     distance += nightDown;
// }

// //4
// if ((distance += dayDistance) <= wall){
//     days++;    //days = days + 1; days += 1; the same code
//     console.log('num4')
//     console.log(` - Current distance at the end of the day ${days}  is ${distance} meter(s)`)
   
//     distance += nightDown;
// }
// //else console.log('Finish');
// //if (distance == wall) console.log('ok')