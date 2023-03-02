// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We declare a variable called name and set the value to 'Dane' as a string.
// Then we create an if statement testing to see if the value of name is equal to 'Mary'.
// If name is equal to 'Mary' we console.log 'Hi, Mary!'
// If name is not equal to 'Mary' we console.log 'How do you do?'
// If we were to run this code, we would currently expect to see an output in the console of 'How do you do?' due to the current value of name.

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We declare a variable titled secret, no value is set at this time.
// We declare a variable called code and sett the value to 123 as a number.
// Then we create an if statement which tests if code is equal to 123 then sets the value of secret to 'super' as a string and code equal to code multiplied by 2.
// Then we create a separate if statement setting the value of secret to 'duper' if code is greater than 250.
// We finish off the code with a console.log of secret, which we would expect to give a value of 'super' due to the value of code currently being 246.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We declare a variable of isStudent and set it equal to true, as a boolean.
// We declare a variable of age and set it equal to 34 as a number.
// We declare a variable of zip and set it equal to 55407 as a number.
// Then we create an if/else if statement, the first test it goes through is if isStudent is equal to true AND zip is greater than 80000, then it would console.log 'You're a student on the West Coast!'
// The next step it tests is if isStudent is equal to false OR if age is less than 30, then it would console.log 'What are your hobbies?'
// The next step it tests is if isStudent is equal to true, then it would console.log 'Welcome to Prime!'
// The final step states that if none of the above are true, then it would console.log 'How about the weather?'
// If we were to run this code, we would expect to see an output of 'Welcome to Prime!' due to the first and second if statements not being met but the third one is due to the value of isStudent.

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
  // Fix - colorOne = 'red' but the instructions state this should be 'blue'
  // Should be - colorOne = 'blue'
let colorOne = 'red';
  // Fix - colorTwo = 'blue', but the instructions state this should be 'red'
  // Should be - colorTwo = 'red'
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
    // Fix - missing setting the value of colorTwo equal to purple based on the instructions
    // Should add in - colorTwo = 'purple'
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

  // Fix - if line, current statement checks if temp is greater than 39 OR if time is greater or equal to 4, but instructions state this should be if both are true.
  // Should be - if(temp > 39 && time >= 4)
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

if(minAge <= age) {
    // Fix - console.log('no entry'), this will log 'no entry' if age is greater than or equal to minAge, but the instructions state this should log 'enter' if this is true
    // Should be - console.log('enter')
  console.log('no entry');
} else {
    // Fix - console.log('enter'), this will log 'enter' if the first statement is not met (or age is less than minAge), but the instructions state this should log if age is greater than or equal to minAge and not the reverse.
    // Should be - console.log('no entry') - This is assuming that we want a log if the first statement is not met, however the instructions above do not explicitly state that.
    // OR
    // Should be removed entirely starting at the else statement, due to this not being mentioned explicitly in the initial instructions.
  console.log('enter');
}
*/