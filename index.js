const coffeeMenu=require ("./coffee_data.js")

// console.log(coffeeMenu);

// Print an array of all the drinks on the menu.

const printName = (item) => {
    return item.name;
}
console.log(coffeeMenu.map(printName));

// Print an array of drinks that cost 5 and under.

const underFive = (item) => {
    return item.price <= 5;
}
const itemsUnderFive = coffeeMenu.filter(underFive);
console.log(itemsUnderFive);

// Print an array of drinks that are priced at an even number.

const isEvenNum = (item) => {
    return item.price %2==0;
}
const evenNum = coffeeMenu.filter(isEvenNum);
console.log(evenNum);

// Print the total if you were to order one of every drink.
const findPriceArray = (item) => {
    return item.price;
}
const priceArray = coffeeMenu.map(findPriceArray);
// console.log(priceArray);

const sumTotalCost = (accumulator, currentValue) => {
    return accumulator + currentValue;
}
const totalPrice = priceArray.reduce(sumTotalCost);
console.log(totalPrice)

// Print an array with all the drinks that are seasonal.

const isSeasonal = (item) => {
    return item.seasonal === true;
}
const seasonalItems = coffeeMenu.filter(isSeasonal);
console.log(seasonalItems);

// Print all the seasonal drinks with the words "with imported beans" after the item name. For example: "affogato with imported beans".

const seasonalDrinks = (item) => {
    return item.seasonal === "with imported beans";
}
const seasonalWithBeans = coffeeMenu.filter(seasonalDrinks);
console.log(seasonalWithBeans);