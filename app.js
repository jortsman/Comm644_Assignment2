//Part 1

//Step 1 - Create an application that prompts the user for their name. Then, find the length of characters in the person’s name.  Use the alert method to display the result.

// var name = prompt('What is your name fam?');
// alert('Your name is '+ name.length+ ' letters long fam.');

//Step 2 - Create an application that prompts the user for their name. Then, prompt the user for a numeric value so that they can find the letter in the string based on the number they specify. Use the alert method to display the result.

// var name = prompt('What is your name bruuuhh?');
// var numCharacter = prompt('Now enter a number to find a letter in your name fam.');
// numCharacter = parseInt(numCharacter);
// alert('That letter is letter number ' + name.charAt(numCharacter) + ".\n Don't forget about zero index fam, I didn't add a 1..")

//Step 3 - Create an application that prompts the user for their first name. Then, prompt the user for their last name using a second prompt. Use the alert method to display the text "Your name is: " along with the result of the first name and last name concatenated together. You will use a concatenation operator to concatenate the literal string with the result of the String object method’s result.

// var firstName = prompt('What is your first name fam?');
// var lastName = prompt('What is your last name fam?');
// alert('Your name is: '+firstName + " "+lastName);

//Step 4 - Create an application that stores the text “The quick brown fox jumps over the lazy dog” within a variable. Then, find and display within an alert the index of the word “fox”.

// var strZaksGibberishLol = 'The quick brown fox jumps over the lazy dog';
// alert(strZaksGibberishLol.indexOf("fox"));

//Step 5 - Create an application that stores the text “The quick brown fox jumps over the lazy fox” within a variable. Then, find and display within an alert the index of the last instance of the word “fox”.

// var strZaksGibberishAgainLol = 'The quick brown fox jumps over the lazy dog';
// var indxOf = strZaksGibberishAgainLol.lastIndexOf('fox');
// alert(indxOf);

//Step 6 - Create an application that stores the text “The quick brown fox jumped over the lazy dog” within a variable. Then, prompt the user for their full name. Then, replace the text “the lazy dog” in the variable with the name that the user enters within the prompt. Use the alert method to display the result.

// var ohManIJustSawHowManyTimesZakRepeatedTheGibberish = 'The quick brown fox jumps over the lazy dog';
// var name = prompt('What is your name fam?');
// alert(ohManIJustSawHowManyTimesZakRepeatedTheGibberish.replace('the lazy dog',name));

//Step 7 - Create an application that stores the text “The quick brown fox jumps over the lazy dog” within a variable. Then, prompt the user for a word. Next, search for the word within the string that the user enters into the prompt. Use the alert method to display the result.

// var moreGibberish = 'The quick brown fox jumps over the lazy dog';
// var userWord = prompt('I have some secret gibberish that I\'m hiding, enter a word to search the line of text.');
// alert(moreGibberish.search(userWord));

//Step 8 - Create an application that stores the text “The quick brown fox jumps over the lazy dog” within a variable called old_string. Then, use slice(), substr(), or substring() to extract the words “the lazy dog” from the old_string variable and store that result in a second variable called new_string. Use the alert method to display the uppercase result of new_string.

// var old_string = 'The quick brown fox jumps over the lazy dog';
// var new_string = old_string.slice(31,43);
// alert(new_string.toUpperCase());

//Step 9 - Create an application that stores the text “            THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ” within a variable. Make sure to add space before and after the text so that appears very similar to the text here. Use the alert method to display the lowercase result of the variable once the space has been trimmed off.

// var iCantBelieveItButHeresTheSameGibberish = '            THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ';
// var trimText = iCantBelieveItButHeresTheSameGibberish.trim();
// alert(trimText.toLowerCase());

//Step 10 - Create an application that stores the text “the quick brown fox jumps over the lazy dog” within a variable. The user clearly forgot to capitalize the first letter in the sentence. Programmatically capitalize the first letter in the sentence and display the result in an alert.

// var strGibberish = "the quick brown fox jumps over the lazy dog";
// window.alert(strGibberish.charAt(0).toUpperCase() + strGibberish.slice(1));


/////////////////////////////////////Part 2//////////////////////////////////////////////


//Part 1 - Math and Math Functions (5 points)/////

//Problem 1	- Create an application that prompts the user for a number. Regardless of whether they enter a negative or positive number, make sure to display the positive version of that number in the console window. If I enter -15 in the prompt and -15 is displayed in the console window, you did this one wrong.

// var aNumber = prompt("Enter any number fam, you remember numbers right?");
// var aNumberResponse = parseFloat(aNumber);
// console.log(Math.abs(aNumberResponse));

//Problem 2 -	Create an application that prompts the user for a floating point value (decimal). Store the result of that input in a variable and then round it up to the nearest whole number. Display the result within a console window.

// var roundedNumber = prompt("Fam, do you remember decimals? Enter one here.");
// var roundedNumberResponse = parseFloat(roundedNumber);
// console.log(Math.round(roundedNumberResponse));

//Problem 3 -	Create an application that prompts the user for a floating point value (decimal). Store the result of that input in a variable and then round it down to the nearest whole number. Display the result within a console window.

// var decimal = prompt('Fam, enter another decimal number.');
// var decimalReponse = parseFloat(decimal);
// console.log(Math.floor(decimalReponse));

//Problem 4 -	Create an application that prompts the user for 5 numbers. Ask them to comma delimit each number so you get 1,2,3,4,5 for example. Store the result of that input in a variable and then find the largest and smallest numbers in that list. Display both of those numbers within a console window.

// var numbersArray = prompt('Fam, enter 5 numbers that are separated by commas here.');
// var numbersArrayResponse = numbersArray.split(',');
// var firstNumber = parseInt(numbersArrayResponse[0]);
// var secondNumber = parseInt(numbersArrayResponse[1]);
// var thirdNumber = parseInt(numbersArrayResponse[2]);
// var fourthNumber = parseInt(numbersArrayResponse[3]);
// var fifthNumber = parseInt(numbersArrayResponse[4]);
// console.log("This largest number you entered was: " + Math.max(firstNumber,
//   secondNumber, thirdNumber, fourthNumber, fifthNumber) + " and the lowest number you entered was: " + Math.min(firstNumber,
//   secondNumber, thirdNumber, fourthNumber, fifthNumber));

//Problem 5 -	Create an application that prompts the user for a number. Now find the square root of that number and display the result within a console window.

// var number = prompt("Give me a number and I'll give you the square root in the console.");
// console.log(Math.sqrt(number));

//////////////////////Part 2 - Date and Date Functions (6 points)

//Problem 6 -	Create an application that gets the current date. Display that result within the console window.

// var getMyDate = new Date();
// console.log(getMyDate);

//Problem 7 -	Create an application that gets the number of days in a month. Display that result within the console window.

// var daysInMonth = new Date(2017,1,0);
// console.log(daysInMonth.getDate());

//Problem 8 -	Create an application that gets the month name from a particular date. Display that result within the console window.

// var askDate = prompt('Enter a date in the form of MM/DD/YYYY');
// var dateArray = askDate.split('/');
// var month = dateArray[0];
// var displayMonth;
// switch (month) {
//   case '01':
//     displayMonth = "January";
//     break;
//   case '02':
//     displayMonth = "February";
//     break;
//   case '03':
//     displayMonth = "March";
//     break;
//   case '04':
//     displayMonth = "April";
//     break;
//   case '05':
//     displayMonth = "May";
//     break;
//   case '06':
//     displayMonth = "June";
//     break;
//   case '07':
//     displayMonth = "July";
//     break;
//   case '08':
//     displayMonth = "August";
//     break;
//   case '09':
//     displayMonth = "September";
//     break;
//   case '10':
//     displayMonth = "October";
//     break;
//   case '11':
//     displayMonth = "November";
//     break;
//   case '12':
//     displayMonth = "December";
//     break;
//   default:
//     displayMonth = "There seems to be an error, reload the window and try again using the format MM/DD/YYYY and don't forget the zeros!";
// }
// console.log('Your date is a date in ' + displayMonth);

//Problem 9 -	Create an application that tests whether a date is a weekend. Display that result within the console window.

// var askDate = prompt('Enter a date in the form of MM/DD/YYYY');
// var dateArray = askDate.split('/');
// var month = dateArray[0];
// var day = dateArray[1];
// var year = dateArray[2];
// var date = new Date(year, month, day);
// var weekDay = date.getDay(day);
// console.log(weekDay); //checks weekday from 0-6 from day object to corresponding weekday
// if (weekDay == 0 || weekDay == 6) {
//   console.log("Hooray for the freakin' weekend!");
// } else {
//   console.log("Darn...it's another weekday...");
// }

//Problem 10 - Create an application that gets yesterday’s day of the week. For instance, if today is Tuesday, the console window should display Monday.

// var date = new Date();
// var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// console.log(days[date.getDay() - 1]);

//Problem 11 -	Create an application that gets the current day of the week. The twist here is that I want only the first letter of the day. If today is Tuesday, the letter T should be displayed in the console window.

// var date = new Date();
// var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// var today = days[date.getDay()];
// var todaysFirstLetter = today.charAt(0);
// console.log(todaysFirstLetter);

///////////////////////////Part 3 - Conditional Logic and Looping Operations (4 points)

//Problem 12 - Create an application that accepts two integers within two separate prompts. Then, display only the larger of the two within the console window.

// var intFirst = prompt("Type in a number");
// var intSecond = prompt("Type in another number");
// if (intFirst > intSecond) {
//   window.console.log(intFirst + " was the larger number");
// } else if (intFirst < intSecond) {
//   window.console.log(intSecond + " was the larger number");
// } else {
//   window.console.log("Both numbers are the same!");
// }

//Problem 13 - Create an application that records the marks for the following five students. Then, these marks are used to determine the corresponding grade. All 5 students and their grades should be displayed within the console window.

// var strStudents = {
//   name: ["Ursula", "Paul", "Henry", "Tabitha", "Lucy"],
//   grade: [80, 77, 88, 95, 68]
// };
// for (var i = 0; i < 5; i++) {
//   if (strStudents.grade[i] <= 100 && strStudents.grade[i] >= 90) {
//     window.console.log(strStudents.name[i] + " has a final score of " + strStudents.grade[i] + " so the student received an A.");
//   } else if (strStudents.grade[i] < 90 && strStudents.grade[i] >= 80) {
//     window.console.log(strStudents.name[i] + " has a final score of " + strStudents.grade[i] + " so the student received a B.");
//   } else if (strStudents.grade[i] < 80 && strStudents.grade[i] >= 70) {
//     window.console.log(strStudents.name[i] + " has a final score of " + strStudents.grade[i] + " so the student received a C.");
//   } else if (strStudents.grade[i] < 70 && strStudents.grade[i] >= 60) {
//     window.console.log(strStudents.name[i] + " has a final score of " + strStudents.grade[i] + " so the student received a D.");
//   } else {
//     window.console.log(strStudents.name[i] + " has a final score of " + strStudents.grade[i] + " so the student received an F.");
//   }
// }

//Problem 14 - Create a JavaScript for loop that iterates from 1 to 15. Each iteration should check if the current number is odd or even, and display a message within the console window.

// for (var i = 1; i <= 15; i++) {
//   if (i % 2 == 0) {
//     console.log(i + " is even");
//   } else {
//     console.log(i + " is odd");
//   }
// }

//Problem 15 - FizzBuzz Application

// for (var i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

////////////////////////////////Part 4 - The Hitchhiker's Guide to the Galaxy Game

// //Step 1
// var areYouReady = confirm("\'The Hitchhiker's Guide to the Galaxy\'\nAre you ready to play?");
// if (areYouReady == true) {
//   var yey = confirm("Awesome, our hero is waiting!");
// } else {
//   var nay = confirm("Too bad, we’re going to play anyway because our hero desperately needs your help!");
// }
//
// //Step 2
// var storyLine = alert("You are in a dark, dingy, and humid cave searching for the lost treasure of Captain Chingadera. You are disoriented, lost, hungry and extremely thirsty. You see a speck of light in the distance ahead of you, something shimmering to your right, and the sound of running water to your left. Your back is against the wall…");
//
// //Step 3
// var whichDirection = prompt("Which direction would you like to head (please enter forward, left, or right).").toLowerCase();
//
// //Step 4
// switch (whichDirection) {
//   case "forward":
//     alert("You walk about 100 yards and safely make your way out of the cave.");
//     break;
//   case "left":
//     alert("Your thirst has gotten the better of you. You trip on a rock, hit your head, and fall into a pool of water and drown.");
//     break;
//   case "right":
//     alert("You found the gold! You walk into a small room and see thousands of gold coins, jewels, chalices, and more. You jump into the pile of gold in celebration and immediately a hidden door slams down and traps you in the room forever.");
//     break;
//   default:
//     alert("The ghost of Captain Chingadera has condemned you to eternal damnation and you shall now burn in the hot excoriation for lifeless lowlifes for not choosing the correct option...loser.");
// }
//
// //Step 5
// var gameRating = prompt("How did you like my game?\n Please give it a rating from 1-10");
// //var numGameRating = parseInt(gameRating);
// var checkRating = isNaN(gameRating);
// console.log(checkRating); //isNaN check
//
// //Step 6
// if (checkRating || gameRating < 1 || gameRating > 10) {
//   alert("Thank you, we will continue to make improvements to the game!");
// }
//
// //Step 5 Cont..
// if (gameRating >= 6 && gameRating <= 10) {
//   alert("Thank you, we will continue to make improvements to the game!");
// } else if (gameRating >= 1 && gameRating <= 5) {
//   alert("Whatever, you weren’t very good at this game anyway!");
// }



////////////////////////Part 5 - The Coin Flip Game

// //Step 1
// var coinFlip = Math.round(Math.random()); //I rounded this to make it equal odds
// //Step 2
// var choice = prompt("Choose Heads or Tails.").toLowerCase();
// //Step 3
// if (coinFlip == 1) {
//   coinFlip = "tails";
// } else if (coinFlip == 0) {
//   coinFlip = "heads";
// }
// //Step 4
// if (coinFlip == "heads" && choice == "heads") {
//   alert('The flip was heads and you chose heads...you win!');
// }
// //Step 5
// else if (coinFlip == "heads" && choice == "tails") {
//   alert('The flip was heads but you chose tails...you lose!');
// }
// //Step 6
// else if (coinFlip == "tails" && choice == "heads") {
//   alert('The flip was tails but you chose heads...you lose!');
// }
// //Step 7
// else if (coinFlip == "tails" && choice == "tails") {
//   alert('The flip was tails and you chose tails...you win!');
// }
// //Step 8 - I actually did this before reading all of the steps. Check step 2


////////////////////////Part 6 - The Coin Flip Game Redux

// //Step 1
// var coinFlip;
// //Step 2
// for (var i = 0; i < 10; i++) {
//   //Step 3
//   coinFlip = Math.round(Math.random());
//   //Step 4
//   if (coinFlip == 0) {
//     console.log("Heads");
//   } else if (coinFlip == 1) {
//     console.log("Tails");
//   }
// }


///////////////////////////Part 7 - The Coin Flip Streak Game

// //Step 1
// var coinFlip;
//
// //Step 2
// do {
//   //Step 3
//   coinFlip = Math.round(Math.random());
//   //Step 4
//   if (coinFlip == 0) {
//     console.log("Heads");
//   } else if (coinFlip == 1) {
//     console.log("Tails");
//   }
//   //Step 5
// } while (coinFlip != 1);


///////////////////////////Part 8 - Looping a Triangle - This sucked. Took forever to figure out.

// var hash = " ";
// for (var i = 0; i < 7; i++) {
//   hash += "#";
//   console.log(hash);
// }


///////////////////////////////Part 9 - Odd or Even?

// for (var i = 0; i <= 15; i++) {
//   if (i % 2 == 0) {
//     console.log(i + " is even");
//   } else {
//     console.log(i + " is odd");
//   }
// }
