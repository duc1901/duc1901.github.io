var fruits = ['Apple', 'Banana', 'Orange', 'Lemon']
var numbers = [1, 3, 5, 2, 4]
var mixed = ['Apple', 2, 'Banana', true, 'Orange']

var fruits2 = new Array('Apple', 'Banana', 'Orange')

console.log("fruits: ", fruits);
console.log("fruits2: ", fruits2);
console.log("numbers: ", numbers);
console.log("mixed: ", mixed);
console.log("frist fruits: ", fruits[0]);
console.log("last fruits: ", fruits[fruits.length - 1]);
console.log("typeof(fruits): ", typeof(fruits))

// get and remove the last element of array 

var lastFruit = fruits[fruits.length - 1]
fruits.length = fruits.length - 1

console.log(`lastfruit: ${lastFruit}, fruits: ${fruits}`)

// get and remove the frist element of array

// var fristFruit = fruits[0]
// for (var i = 0; i < fruits.length; i++) {
//     fruits[i] = fruits[i + 1]
// }
// fruits.length--
var fristFruit = fruits.shift()

console.log(`lastfruit: ${lastFruit}, fruits: ${fruits}`)

// array method
fruits.push("Kiwi")
fruits.push("Banana")
// append to the frist of array 
fruits.unshift("Cherry")

console.log("fruits: ", fruits);

// indexOf, lastIndexOf, reverse, slice, splice, join
var foundBanana = fruits.indexOf("Banana")
var foundLastBanana = fruits.lastIndexOf("Banana")
console.log("foundBanana: ", foundBanana)
console.log("foundLastBanana: ", foundLastBanana)

var subFruits = fruits.slice(1, 3)
var subFruits2 = fruits.slice(1)

// create a copy
var subFruits3 = fruits.slice(0)

console.log("subFruits: ", subFruits)
console.log("subFruits2: ", subFruits2)

var reverseFruits = fruits.slice(0).reverse()
console.log("reverse: ", reverseFruits)
console.log("fruits: ", fruits)

// remove element
// fruits.splice(2, 1)

// insert element
fruits.splice(2, 2, "Watermelon", "Strawberry")
console.log("fruits: ", fruits)

//join
console.log("join(,): ", `[ ${fruits.join(", ")} ]`)

// callback

function hello(sayHelloClass) {
    sayHelloClass()
}

function sayHelloClass() {
    console.log("Hello class")
}

console.log(sayHelloClass)
hello(sayHelloClass)

var cherry = {
    name: "Cherry",
    price: 5,
}

var watermelon = {
    name: "Watermelon",
    price: 10
}

var fruits = [
    cherry,
    watermelon,
    {
        name: "Banana",
        price: 7
    }
]
console.log(fruits)

var foundBananaObj = fruits.indexOf({
    name: "Banana",
    price: 7 
})
var foundCherryObj = fruits.indexOf(cherry)

// find
var findElem = function(item) {
    console.log("item: ", item)
    return item.name === "Watermelon"
}

// rewrite array find
function myFind(find) {
    for(var i = 0; i < fruits.length; i++) {
        var result = find(fruits[i]);
        if(result) {
            return fruits[i]
        }
    }
}

var findBanana = fruits.find(findElem)

console.log("findBanana: ", findBanana)
