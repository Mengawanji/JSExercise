//Write a function to reverse a string e.g Hello => olleH
// ------------------Solution----------------------

function backward(word) {
    return word.split('').reverse().join('');
  }
  
  backward("Hello");

//Log a countdown from 100, countdown should stop at 0 and print a message
// ------------------Solution----------------------

for (let i = 100; i>=0; i--){
    console.log(i);
}
 console.log("Countdown Endpoint");  



 //Create a simple function that allows the user to create a profile with
//name, age and email and prints this in the console;
// ------------------Solution----------------------

function createProfile (a,b,c) {
    console.log("User Name: " + a );
    console.log("Age: " + b );
    console.log("Email: " + c );
}
createProfile("Abel", "35","abel@gmail.com");



// Write a function to check if a string is a palindrome
// e.g ara is a palindrome, rat is not a palindrome, 848 is a palindrome
// ------------------Solution----------------------


function isPalindrome(str) {
    let cleaned = str.toLowerCase();
  
    let reversed = cleaned.split('').reverse().join('');
  
    if (cleaned === reversed ){
      console.log(str + " is a is a Palindrome")
    }else{
      console.log(str + " is not a is a Palindrome")
    }
  }
  isPalindrome("yoy");
