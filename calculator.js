var readlineSync = require ('readline-sync');

//Read values from the user
var firstNum = readlineSync.questionInt("Please enter first number: ");
var secondNum = readlineSync.questionInt("Please enter second number: ");
var enteredOperation = readlineSync.question("Please enter the operation to perform (add,sub, mul, div): ");

function myAddfunction(num1, num2) {
    return num1 + num2;
}

function mySubtractFunction(num1, num2) {
    return num1 - num2;
}

function myMultiplicationFunction(num1, num2) {
    return num1 * num2;
}

function mydivisionFunction(num1, num2) {
    return num1 / num2;
}

//Function Definition
function jsCalculator(number1, number2, operation){
    if (operation == "add"){
        console.log("Addition of first number (" + number1 + ") with second number (" + number2 + ") The result is: " + myAddfunction(number1, number2));
    }else if (operation == "sub"){
        console.log("Subtraction of first number (" + number1 + ") with second number (" + number2 + ") The result is: " + mySubtractFunction(number1, number2));
    }else if (operation == "mul"){
        console.log("Multiplication of first number (" + number1 + ") with second number (" + number2 + ") The result is: " + myMultiplicationFunction(number1, number2));
    }else if (operation == "div"){
        console.log("Division of first number (" + number1 + ") with second number (" + number2 + ") The result is: " + mydivisionFunction(number1, number2));
    }else{
        console.log("Uknown Operation! Please try again!");
    }
}

//Call the function to run the program
jsCalculator(firstNum, secondNum, enteredOperation );





