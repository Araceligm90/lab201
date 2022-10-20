'use strict';

let quest1 = prompt('What is your name?');
alert('Hey ' + quest1 + '! Nice to meet you!');
//console.log(alert);

let askTravel = prompt('Do you like traveling?');
askTravel = askTravel.toLowerCase();

if (askTravel === 'yes') {
  //console.log(askTravel);
  alert('I love traveling too!');
} else if (askTravel === 'y') {
  //console.log(askTravel);
  alert('I love traveling too!');
} else if (askTravel === 'no') {
  //console.log(askTravel);
  alert('You should give it another try. Traveling is a lot of fun.');
} else if (askTravel === 'n') {
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

if (askCayman === 'yes') {
  //console.log(askCayman);
  alert('Unfortunately you are right ' + quest1 + '! I live in an island but I do not like the beach!');
} else if (askCayman === 'y') {
  //console.log(askCayman);
  alert('Unfortunately you are right ' + quest1 + '! I live in an island but I do not like the beach!');
} else if (askCayman === 'no') {
  //console.log(askCayman);
  alert('It is actually true ' + quest1 + '! Does not make any sense, does it?');
} else if (askCayman === 'n') {
  //console.log(askCayman);
  alert('It is actually true ' + quest1 + '! Does not make any sense, does it?');
}

let askStingray = prompt('Is the following statement true? I have a pet stingray.');
askStingray = askStingray.toLowerCase();

if (askStingray === 'yes') {
  //console.log(askStingray);
  alert('That does not make any sense ' + quest1 + '! But I have petted and kissed many!');
} else if (askStingray === 'y') {
  //console.log(askStingray);
  alert('That does not make any sense ' + quest1 + '! But I have petted and kissed many!');
} else if (askStingray === 'no') {
  //console.log(askStingray);
  alert('You are right ' + quest1 + '! But I have petted and kissed many!');
} else if (askStingray === 'n') {
  //console.log(askStingray);
  alert('You are right ' + quest1 + '! But I have petted and kissed many!');
}

let askBrain = prompt('Is the following statement true? My brain physically hurts when learning JavaScript.');
askBrain = askBrain.toLowerCase();

if (askBrain === 'yes') {
  //console.log(askBrain);
  alert('You are unfortunately right ' + quest1 + '! JS makes parts of my brain that I did not even know I had ache!');
} else if (askBrain === 'y') {
  //console.log(askBrain);
  alert('You are unfortunately right ' + quest1 + '! JS makes parts of my brain that I did not even know I had ache!');
} else if (askBrain === 'no') {
  //console.log(askBrain);
  alert('I wish that was true ' + quest1 + '. I wish that was true...');
} else if (askBrain === 'n') {
  //console.log(askBrain);
  alert('I wish that was true ' + quest1 + '. I wish that was true...');
}

