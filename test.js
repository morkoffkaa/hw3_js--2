let word1 = prompt("Enter your first name :");
let word2 = prompt("Enter your last name :");
let word3 = prompt("Enter your city :");

let message = word1.concat(" ").concat(word2).concat(" ").concat(word3)

console.log(message);
alert("Is it correct?: " + message)

let number5 = prompt("Enter the five-digit number :");
let arr = number5.split("");
let str = arr.join(" ");
console.log(str);
alert(str);



