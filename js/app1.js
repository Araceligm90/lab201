'use strict';

let count = 0;

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
if (askCountries <= '3') {
  alert('You are incorrect! The answer is 4.');
  count = count - 1;
} else if (askCountries === '4') {
  alert('You are correct!');
  count = count + 1;
} else if (askCountries === '5') {
  alert('You went too far ' + quest1 + '! The asnwer is 4.');
  count = count - 1;
}

let askCayman = prompt('Is the following statement true? I live in the Cayman Islands but I do not like the beach.');
askCayman = askCayman.toLowerCase();

if (askCayman === 'yes' || askCayman === 'y') {
  //console.log(askCayman);
  alert('Crazy, but you are right ' + quest1 + '! I live in an island but I do not like the beach!');
  count = count + 1;
} else if (askCayman === 'no' || askCayman === 'n') {
  //console.log(askCayman);
  alert('It is actually true ' + quest1 + '! Does not make any sense, does it?');
  count = count - 1;
} 

let askStingray = prompt('Is the following statement true? I have a pet stingray.');
askStingray = askStingray.toLowerCase();

if (askStingray === 'yes' || askStingray === 'y') {
  //console.log(askStingray);
  alert('That does not make any sense ' + quest1 + '! But I have petted and kissed many!');
  count = count - 1;
} else if (askStingray === 'no' || askStingray === 'n') {
  //console.log(askStingray);
  alert('Correct, ' + quest1 + '! But I have petted and kissed many!');
  count = count + 1;
} 

let askBrain = prompt('Is the following statement true? My brain physically hurts when learning JavaScript.');
askBrain = askBrain.toLowerCase();

if (askBrain === 'yes' || askBrain === 'y') {
  //console.log(askBrain);
  alert('You are unfortunately right ' + quest1 + '! JS makes parts of my brain that I did not even know I had ache!');
  count = count + 1;
} else if (askBrain === 'no' || askBrain === 'n') {
  //console.log(askBrain);
  alert('I wish that was true ' + quest1 + '. I wish that was true...');
  count = count - 1;
}


let correctNum = '3';
let numbTries = 4;

for (let i = 0; i < numbTries; i++) {
  let guessNum = prompt('Guess a number between 1 and 10.');
  if (guessNum < correctNum) {
    alert('You went too low!');
    // console.log(guessNum);
  } else if (guessNum > correctNum) {
    alert('You went too high!');
    // console.log(guessNum);
  } else if (guessNum === correctNum) {
    alert('You are right! The right answer was ' + guessNum);
    count = count + 1;
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
    count = count + 1;
    break;
  } else {
    alert('That was not even an option!');
  }
}

let totalQuestion = 6;

if (count === 6) {
  alert('Amazing job ' + quest1 + '! You got ' + count + ' out of ' + totalQuestion + ' right!');
} else if (count === 5 || count === 4) {
  alert('Great job ' + quest1 + '! Your score is ' + count + ' out of' + totalQuestion + '.');
} else if (count === 3 || count === 2) {
  alert('Hey ' + quest1 + '. Your score is ' + count + ' out of ' + totalQuestion + '. You could have definitely done better. But thanks for trying!');
} else if (count === 1 || count === 0) {
  alert('Hey ' + quest1 + ' that is just sad... You barely made it through the game. Your score is ' + count + ' out of ' +totalQuestion + '.');
} else {
  alert('I don\'t even know that happened there.');
}

