
// Assignments: Write a program to print prime numbers from 1 -100

// --------- solution-------------

for (let num = 2; num <= 100; num++) {
    let primeNum = true;
    let i = 2;
  
    while (i * i <= num) {
      if (num % i === 0) {
        primeNum = false;
        break;
      }
      i++;
    }
  
    if (primeNum) {
      console.log(num);
    }
  }