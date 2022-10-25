'use strict';

let quest1 = prompt('What is your name?');
alert('Hey ' + quest1 + '! Nice to meet you!');
//console.log(alert);

let askTravel = prompt('Do you like traveling?');
askTravel = askTravel.toLowerCase();

if (askTravel === 'yes' || askTravel === 'y') {
  //console.log(askTravel);
  alert('I love traveling too!');
} else if (askTravel === 'no' || askTravel === 'n') {
  //console.log(askTravel);
  alert('You should give it another try. Traveling is a lot of fun.');
}

let askCountries = prompt('Can you guess how many countries I have lived in? 1-5.');
if (askCountries <= 3) {
  alert('You are incorrect! The answer is 4.!');

} else if (askCountries == 4) {
  alert('You are correct!');
} else if (askCountries == 5) {
  alert('You went too far ' + quest1 + '! The asnwer is 4.');
}

let askCayman = prompt('Is the following statement true? I live in the Cayman Islands but I do not like the beach.');
askCayman = askCayman.toLowerCase();

if (askCayman === 'yes' || askCayman === 'y') {
  //console.log(askCayman);
  alert('Unfortunately you are right ' + quest1 + '! I live in an island but I do not like the beach!');
} else if (askCayman === 'no' || askCayman === 'n') {
  //console.log(askCayman);
  alert('It is actually true ' + quest1 + '! Does not make any sense, does it?');
} 

let askStingray = prompt('Is the following statement true? I have a pet stingray.');
askStingray = askStingray.toLowerCase();

if (askStingray === 'yes' || askStingray === 'y') {
  //console.log(askStingray);
  alert('That does not make any sense ' + quest1 + '! But I have petted and kissed many!');
} else if (askStingray === 'no' || askStingray === 'n') {
  //console.log(askStingray);
  alert('You are right ' + quest1 + '! But I have petted and kissed many!');
} 

let askBrain = prompt('Is the following statement true? My brain physically hurts when learning JavaScript.');
askBrain = askBrain.toLowerCase();

if (askBrain === 'yes' || askBrain === 'y') {
  //console.log(askBrain);
  alert('You are unfortunately right ' + quest1 + '! JS makes parts of my brain that I did not even know I had ache!');
} else if (askBrain === 'no' || askBrain === 'n') {
  //console.log(askBrain);
  alert('I wish that was true ' + quest1 + '. I wish that was true...');
}


let correctNum = '3';
let numbTries = 4;

for (let i = 0; i < numbTries; i++) {
  // console.log(numbGuess);
  let guessNum = prompt('Guess a number between 1 and 10.');
  if (guessNum < correctNum) {
    alert('You went too low!');
    // console.log(guessNum);
  } else if (guessNum > correctNum) {
    alert('You went too high!');
    // console.log(guessNum);
  } else if (guessNum === correctNum) {
    alert('You are right! The right answer was ' + guessNum);
    // console.log(guessNum);
    break;
  } else {
    alert('Please enter a number');
  }
}


let favoriteFoods = ['Thai', 'Peruvian', 'Italian', 'thai', 'peruvian', 'italian'];
// faveFoods = favoriteFoods.toLowerCase();
let notFavoriteFoods = ['Indian', 'Chinese', 'Japanese', 'indian', 'chinese', 'japanese'];
// notFaveFoods = notFavoriteFoods.toLowerCase();
let numTries = 6;

for (let i = 0; i < numTries; i++) {
  let guessFoods = prompt('Which of the following cuisines are my favorites? Thai, Peruvian, Italian, Indian, Chinese, Japanese');
  if (notFavoriteFoods.includes(guessFoods)) {
    alert('You are incorrect! ' + guessFoods + ' is not amongst my favorite cuisines. Try again!');
  } else if (favoriteFoods.includes(guessFoods)) {
    alert('You are correct! I love ' + guessFoods);
    break;
  } else {
    alert('That was not even an option!');
  }
}

