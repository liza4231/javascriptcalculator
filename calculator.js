//Array to store the users calculation history
let history = [];

//function to save the user history in the array as an object
function saveHistory(a, b, symbol, result) {
    history.push({
        num1: a,
        num2: b,
        operation: symbol,
        result: result
    });
}

//Arithmatic calculation fuctions
//Funtion for addition
function add(a, b) {
    let result = a + b;
    saveHistory(a, b, '+', result);
    return result;
}

//console.log(add(5, 6))

//Function for subtraction
function subtract(a, b) {
    let result = a - b;
    saveHistory(a, b, '-', result);
    return result;
}

//console.log(subtract(5, 6))

//Function for multiplication
function multiply(a, b) {
    let result = a * b;
    saveHistory(a, b, '*', result);
    return result;
}

//console.log(multiply(5, 6))

//Function for divission
function divide(a, b) {
    let result 
    if (b === 0) {
        result = 'Error';
    } else {
        result = a / b;
    }
    saveHistory(a, b, '/', result);
    return result;

}


//console.log(divide(5, 0))

//Function to diplay the users history
function displayHistory() {
    console.log('Calculation History:');
    if (history.length === 0) {
        console.log('No calculation history');
    } else {
        for (let i = 0; i < history.length; i++) {
        let calculation = history[i]; 
        //console.log(calculation);
        console.log(`${calculation.num1} ${calculation.operation} ${calculation.num2} = ${calculation.result}`);
        }       
    }
}
    

/*
add(5, 6);
subtract(5 ,6);
multiply(5, 6);
divide(5, 0);
*/
displayHistory();
