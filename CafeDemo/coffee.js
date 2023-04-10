// let cup = 'cup'
// let water ='cold water'
// let milk = 'almond milk'
// let sugar = 'bronw sugar'
// let price = 5
// let coffee = 'Capuchino'

// let step1 = 1 + `Take a ${cup}`
// let step2 = 2 + `Put 1 spoon of coffee in it`
// let step3 = 3 + `Pour ${water} in a cup with coffee`
// let  step4 = 4 + "Pour almond milk in a cup of coffee"
// let step5 = 5 + "Pour brown sugar in a cup of coffee"
// let step6 = 6 + "Stir coffee in a cup with a spoon"
// let result = "Enjoy your coffee"
// console.log(
//     step1 + '\n', step2 + '\n',
//     step3 + '\n', step4 + '\n',
//     step5 + '\n', step6 + '\n',
//     result)


///Внедрите в свой код про кофе цикл, там, где это может понадобиться. 
//Добавьте комментарии в код с пояснениями изменений, зачем они нужны.

// Requirements for Coffee
// When user first come he should see a welcome message
// There are three types of cup sizes
// User should be able to see cup prices for each size before an  order
// There are two recipes at this time, we should able to update code if added new recipe
// Show to a user the name and the  ingredients of each type of coffee before an order
// User should be able to make an order, by choosing cup size and coffee type
// When a choice is made, calculate the price based on cup size. Show steps for the recipe and order price.
// If user is lactose free, remove milk step from the recipe

// Details: price, names of coffee, ingredients, cup sizes, recipe, welcome message details or text, final message,do we have confirm option,
//   payment method, how to calc price, business type, recipe for lactose free option, what milk choice do we have?, sugar Is or Not,


//declare all varibles
let cupSize;
let smallCup = "small cup";
let mediumCup = "medium cup";
let largeCup = " large cup";
let water;
let hotWater = " hot water";
let coldWater = "cold water";
let price = 5;
let coffeeType;
let latte = "Latte";
let icedCoffee = "Iced coffee";
let beansArabica = "Arabica ground beans";
let beansEthiopian = "Etiopian ground beans";

//welcome message
console.log("Welcome to our self-service cafe!") 
console.log("We have different cup sizes. Please, choose one \n")


//Show cup sizes and their prices
let cupSizes = [smallCup, mediumCup, largeCup];
for (let i in cupSizes) {
    if (cupSizes[i] == smallCup){
        console.log(cupSizes[i] + ' -' + price + '$');  
    }
    else if(cupSizes[i] == mediumCup) {
        console.log(cupSizes[i] + ' -' + price * 1.5 + '$');   
    }
    else if(cupSizes[i] == largeCup) {
        console.log(cupSizes[i] + ' -' + price * 2 + '$'); 
}
if ( i == cupSizes.length - 1) {
    console.log('\n')
}
}

//Show coffee types with ingredients
let latteIngredients = `${latte}:\n 1 spoon of ${beansArabica} \n ${hotWater} \n milk \n`;
let icedCoffeeIngredients = `${icedCoffee}: \n 1  spoon of ${beansEthiopian} \n ${coldWater} \n milk \n`;

console.log('We have following coffee types: \n');
let menu = [latteIngredients, icedCoffeeIngredients];

for (let i = 0; i < menu.length; i++) {
    console.log(menu[i])
}

//Make a choice
coffeeType = icedCoffee;
cupSize = smallCup;

if (coffeeType == icedCoffee) {
    water = coldWater;
} else {
    water = hotWater;
}

if (cupSize == mediumCup) {
    price *= 1.5;
}
else if (cupSize == largeCup) {
    price *= 2;
}

//Output for client
let order = `You choosed a ${cupSize} of ${coffeeType} \n Follow the steps:`;
let step1 = ` Take a ${cupSize}`;
let step2 = ` Put 1 spoon of coffee in it`;
let step3 = ` Pour ${water} in a cup with coffee`;
let step4 = " Pour milk in a cup of coffee";
let step5 = " Stir coffee in a cup with a spoon";
let orderPrice = `The order price is ${price}$`;
let result = "Enjoy your coffee!";

//add steps to recipe
let recipe = [step1, step2, step3, step4, step5];
let clientRecipe = '';
let isLactoseFree = true;
for (let i = 0; i < recipe.length; i++) {

    if (isLactoseFree == true && recipe[i] == step4) continue;
    clientRecipe = clientRecipe + (i + 1) + recipe[i] + '\n';

}
console.log(order + '\n' + clientRecipe + '\n' + orderPrice + '\n' + result);



