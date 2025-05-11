//Write a function to reverse a string e.g Hello => olleH

function backward(word) {
    return word.split('').reverse().join('');
  }
  
  backward("Hello");