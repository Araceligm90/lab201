'use strict';

// function functionName(parameter){
//
// }

function askName(){
  let ans = prompt('What is your name?');
  alert('Hey ' + ans + '! Nice to meet you!');
  return ans;
}

function askTrips(){
  let askTravel = prompt('Do you like traveling?');
  askTravel = askTravel.toLowerCase();

  if (askTravel === 'yes' || askTravel === 'y') {
    //console.log(askTravel);
    alert('I love traveling too!');
  } else if (askTravel === 'no' || askTravel === 'n') {
    //console.log(askTravel);
    alert('You should give it another try. Traveling is a lot of fun.');
  }
}

function askDestinations(counter){
  let askCountries = prompt('Can you guess how many countries I have lived in? 1-5.');
  if (askCountries <= '3') {
    alert('You are incorrect! The answer is 4.');
  } else if (askCountries === '4') {
    alert('You are correct!');
    counter = counter + 1;
  } else if (askCountries >= '5') {
    alert('You went too far ' + quest1 + '! The answer is 4.');
  }
  return counter;
}

// function askDestinations(){
//   let askCountries = prompt('Can you guess how many countries I have lived in? 1-5.');
//   if (askCountries <= '3') {
//     alert('You are incorrect! The answer is 4.');
//   } else if (askCountries === '4') {
//     alert('You are correct!');
//     return 1;
//   } else if (askCountries >= '5') {
//     alert('You went too far ' + quest1 + '! The answer is 4.');
//   }
//   return 0;
// }

// count += askDestinations();


function askIslands(counter){
  let askCayman = prompt('Is the following statement true? I live in the Cayman Islands but I do not like the beach.');
  askCayman = askCayman.toLowerCase();

  if (askCayman === 'yes' || askCayman === 'y') {
    //console.log(askCayman);
    alert('Crazy, but you are right ' + quest1 + '! I live in an island but I do not like the beach!');
    counter = counter + 1;
  } else if (askCayman === 'no' || askCayman === 'n') {
    //console.log(askCayman);
    alert('It is actually true ' + quest1 + '! Does not make any sense, does it?');
  }
  return counter;
}

function askFish(counter){
  let askStingray = prompt('Is the following statement true? I have a pet stingray.');
  askStingray = askStingray.toLowerCase();
  
  if (askStingray === 'yes' || askStingray === 'y') {
    //console.log(askStingray);
    alert('That does not make any sense ' + quest1 + '! But I have petted and kissed many!');
  } else if (askStingray === 'no' || askStingray === 'n') {
    //console.log(askStingray);
    alert('Correct, ' + quest1 + '! But I have petted and kissed many!');
    counter = counter + 1;
  }
  return counter;
}

function askHead(counter){
  let askBrain = prompt('Is the following statement true? My brain physically hurts when learning JavaScript.');
  askBrain = askBrain.toLowerCase();
  
  if (askBrain === 'yes' || askBrain === 'y') {
    //console.log(askBrain);
    alert('You are unfortunately right ' + quest1 + '! JS makes parts of my brain that I did not even know I had ache!');
    counter = counter + 1;
  } else if (askBrain === 'no' || askBrain === 'n') {
    //console.log(askBrain);
    alert('I wish that was true ' + quest1 + '. I wish that was true...');
  }
  return counter;
}

function askNumber(counter){
  let correctNum = Math.ceil(Math.random() * 10);
  let numbTries = 4;

  for (let i = 0; i < numbTries; i++) {

    let guessNum = prompt('Guess a number between 1 and 10.');
    guessNum = parseInt(guessNum);

    if (guessNum < correctNum) {
      alert('You went too low!');
      // console.log(guessNum);
    } else if (guessNum > correctNum) {
      alert('You went too high!');
      // console.log(guessNum);
    } else if (guessNum === correctNum) {
      alert('You are right! The right answer was ' + guessNum);
      counter = counter + 1;
      // console.log(guessNum);
      return counter;
    } else {
      alert('Please enter a number');
    }
  }

  return counter;
}

function askMeals(counter){
  let favoriteFoods = ['Thai', 'Peruvian', 'Italian'];
  // faveFoods = favoriteFoods.toLowerCase();
  let notFavoriteFoods = ['Indian', 'Chinese', 'Japanese'];
  // notFaveFoods = notFavoriteFoods.toLowerCase();
  let numTries = 6;
  
  for (let i = 0; i < numTries; i++) {
    let guessFoods = prompt('Which of the following cuisines are my favorites? Thai, Peruvian, Italian, Indian, Chinese, Japanese');
  
    let inList = false;
    // Iterate over both arrays to find a match
    for (let j = 0; j < favoriteFoods.length; j++){
      if (notFavoriteFoods[j].toLowerCase() === guessFoods.toLowerCase()){
        alert('You are incorrect! ' + guessFoods + ' is not amongst my favorite cuisines. Try again!');
        inList = true;
      } else if (favoriteFoods[j].toLowerCase() === guessFoods.toLowerCase()) {
        alert('You are correct! I love ' + guessFoods);
        inList = true;
        counter = counter + 1;
        return (counter);
      } 
    }
    if (!inList) {
      alert('That was not even an option!');
    }
  }    
  return (counter);
}


let count = 0;

//console.log(alert);

let quest1 = askName();
askTrips();
count = askDestinations(count);
count = askIslands(count);
count = askFish(count);
count = askHead(count);
count = askNumber(count);
count = askMeals(count);

// Math.random() => number from 0 to 1
// Math.ceil(number) => rounds a number up to the nearest integer (full number)
// Math.floor(number) => rounds down


// function meals(counter){
//   let favoriteFoods = ['Thai', 'Peruvian', 'Italian'];
//   // faveFoods = favoriteFoods.toLowerCase();
//   let notFavoriteFoods = ['Indian', 'Chinese', 'Japanese'];
//   // notFaveFoods = notFavoriteFoods.toLowerCase();
//   let numTries = 6;
//   let correctAnswer = false;
  
//   for (let i = 0; i < numTries; i++) {
//     let guessFoods = prompt('Which of the following cuisines are my favorites? Thai, Peruvian, Italian, Indian, Chinese, Japanese');
  
//     // Iterate over both arrays to find a match
//     for (let j = 0; j < favoriteFoods.length; j++){
//       if (notFavoriteFoods[j].toLowerCase() === guessFoods.toLowerCase()){
//         alert('You are incorrect! ' + guessFoods + ' is not amongst my favorite cuisines. Try again!');
//       } else if (favoriteFoods[j].toLowerCase() === guessFoods.toLowerCase()) {
//         alert('You are correct! I love ' + guessFoods);
//         counter = counter + 1;
//         correctAnswer = true;
//         break;
//       } else {
//         alert('That was not even an option!');
//       }
//     }
  
//     if (correctAnswer){
//       break;
//     }
//   }
// }



// for (let k = 0; k < arrayThing.length; k++){
//   if (arrayThing[k] === 5){
//     flag = true;
//   }
// }


let totalQuestion = 6;

if (count === 6) {
  alert('Amazing job ' + quest1 + '! You got ' + count + ' out of ' + totalQuestion + ' right!');
} else if (count === 5 || count === 4) {
  alert('Great job ' + quest1 + '! Your score is ' + count + ' out of ' + totalQuestion + '.');
} else if (count === 3 || count === 2) {
  alert('Hey ' + quest1 + '. Your score is ' + count + ' out of ' + totalQuestion + '. You could have definitely done better. But thanks for trying!');
} else if (count === 1 || count === 0) {
  alert('Hey ' + quest1 + ' that is just sad... You barely made it through the game. Your score is ' + count + ' out of ' +totalQuestion + '.');
} else {
  alert('I don\'t even know that happened there.');
}

