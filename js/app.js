'use strict';

let userName = prompt('What is your name?');
alert('Hey ' + userName + '! Nice to meet you!');

let answer1 = prompt('Do you want onions on your pizza?');
console.log(answer1);
// String concatenation 
alert('You answered ' + answer1 + ' to the onions question');

if (answer1 === 'yes'){
  prompt('Do you want it raw or cooked?');
  alert('That is a great choice!');
}

if (answer1 === 'no'){
  prompt('Are you sure??');
  alert('I think I will add them anyway!');
}
let answer2 = prompt('Do you want parma ham on your pizza?');
console.log(answer2);

if (answer2 === 'yes'){
  alert('I love parma ham too!');
}

if (answer2 === 'no'){
  alert('I think I will add it too anyway');
}

let answer3 = prompt('What other topping would you like to add?');
console.log(answer3);
alert('I love ' + answer3 + ' too!');

let answer4 = prompt('You have one more topping to choose. Write it below!');
console.log(answer4);
alert('I love all your choices but I actually think I will order pasta. Bye!');

// Give different alerts based on the size of pizza ordered
let size = prompt('What size of pizza do you want?');
console.log('You chose ' + size);

if (size === 'large') {
  alert('1 massive pizza coming up!');
} else if (size === 'medium') {
  alert('A very normal size pizza coming your way!');
} else if (size === 'small') {
  alert('A small sizez pizza coming your way!');
} else {
  alert('Sorry, we do not have one of those');
}

// LOGICAL OR example
// if (size === 'large' || size === 'medium') {
// alert('You ordered a a medium or large pizza ');
//}

// let order = '';


