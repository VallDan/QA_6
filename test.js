let todlers, kids, adults, seniors;
let age = 65;
let price = 50;

if (age < 2 ){
    console.log("Ticket price for" + " " + "todlers" +  " " + " = " + " $ " + price * 0.1)
}
else if (age < 18){
    console.log("Ticket price for" + " " + "kids" +  " " + " = " + " $ " + price * 0.5) 
}
else if (age < 65){
    console.log("Ticket price for" + " " + "adults" +  " " + " = " + " $ " + price)
}
else {
    console.log("Ticket price for" + " " + "seniors" +  " " + " = " + " $ " + price * 0.6)
}
