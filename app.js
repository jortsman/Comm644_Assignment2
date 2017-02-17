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
  // //var intConversion = parseInt(numbersArrayResponse);
  // var numbersArrayFinal = (Number(numbersArrayResponse));
  // console.log("The largest number you entered was: " + Math.max(numbersArrayFinal) + "\nThe lowest number you entered was: " + Math.min(numbersArrayFinal));


//Problem 5 -	Create an application that prompts the user for a number. Now find the square root of that number and display the result within a console window.

// var number = prompt("Give me a number and I'll give you the square root in the console.");
// console.log(Math.sqrt(number));

//Part 2 - Date and Date Functions (6 points)
//Problem 6 -	Create an application that gets the current date. Display that result within the console window.



//Problem 7 -	Create an application that gets the number of days in a month. Display that result within the console window.
//Problem 8 -	Create an application that gets the month name from a particular date. Display that result within the console window.
//Problem 9 -	Create an application that tests whether a date is a weekend. Display that result within the console window.
//Problem 10 - Create an application that gets yesterday’s day of the week. For instance, if today is Tuesday, the console window should display Monday.
//Problem 11 -	Create an application that gets the current day of the week. The twist here is that I want only the first letter of the day. If today is Tuesday, the letter T should be displayed in the console window.
