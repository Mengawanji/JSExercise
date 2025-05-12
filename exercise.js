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
