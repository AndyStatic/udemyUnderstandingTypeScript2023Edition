/**
 * Lessons 11-15: Core Types
 *
 * number - 1, 5.3, -10
 * string - "Hi", 'Hi', `Hi`
 * boolean - true, false
 */

function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  //console.log(typeof number1);
  //if (typeof n1 !== 'number' || typeof n2 !== 'number'){
  //    throw new Error('Incorrect input!');
  //}
  const result = n1 + n2;
  if (showResult) {
    //console.log(n1 + n2);
    console.log(phrase + result);
  } else {
    //return n1 + n2;
    return result;
  }
}

const number1 = 5; //5.0
let number1a = 5; //ts understand that it's a number, because it's set to 5 at assignment
let number1b: number; //this is ok, because not assigned yet
const number2 = 2.8;
const printResult = true;
const resultPhrase = "Result is: ";

//const result = add(number1, number2, printResult); //number1 = '5' will not be allowed, as type check is in place
//console.log(result);

add(number1, number2, printResult, resultPhrase);
