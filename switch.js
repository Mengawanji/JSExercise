//Create a function calculate(a, operator, b) that supports +, -, *, and /
//

function calculate (a, operator , b) {
    switch(operator){
        case '+' :
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
    }
    
}