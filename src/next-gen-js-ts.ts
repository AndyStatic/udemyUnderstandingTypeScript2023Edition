const uerName = "Andy";
//uerName = 'Andy2'; //Cannot assign to 'uerName' because it is a constant.

let age = 30;
age = 35;

//var //still exist for compattbility, but don't use it anymore

function addL49(a: number, b: number) {
  var l49Result;
  l49Result = a + b;
  return l49Result;
}

var l49bResult;
function addL49b(a: number, b: number) {
  l49bResult = a + b;
  return l49bResult;
}

//console.log(l49Result); //error, because available only in scope of function
console.log(l49bResult);

//let is applied to block scopes, unlike var, so the code is more cleaner

//Arrow functions:
const add50 = (a: number, b: number) => {
  return a + b;
};

console.log(add50(2, 5));

//if only one expression can remove return
const add50b = (a: number, b: number) => a + b;

console.log(add50b(2, 5));

const printOutputL50 = (output: string | number) => console.log(output);

console.log(printOutputL50(add50(2, 5)));

const printOutputL50b: (output: string | number) => void = (output) =>
  console.log(output);

const buttonL50 = document.querySelector("button");
if (buttonL50) {
  buttonL50.addEventListener("click", (event) => console.log(event));
}

//default values
const addL51 = (a: number, b: number = 1) => a + b;
console.log(addL51(2));

//spread operator
const hobbies = ["Sports", "Cooking"];
console.log(hobbies[0]);

const activeHobbies = ["Hiking"];

activeHobbies.push(hobbies[0], hobbies[1]);
activeHobbies.push(...hobbies); //all elelemnts from hobbies use as arguments to push into activeHobbies

const personL52 = {
  name: "Andy",
  age: 30,
};

const copiedPerson = personL52; //copy of the pointer
const copiedPerson2 = { ...personL52 }; //pulls out all elements out of personL52 and creating new object based of them

//rest parameters
const addL53 = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const addNumbers = addL53(5, 10, 2, 3.7);
console.log(addNumbers);

const addL54 = (...numbers: [number, number, number]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const addNumbers2 = addL54(5, 10, 2);
console.log(addNumbers2);

//Array and Object destructuring
const hobby1 = hobbies[0];
const hobby2 = hobbies[1];

const [hobby12, hobby22] = hobbies; //destructuring same as above
const [hobby13, hobby23, ...remainingHobbies] = hobbies; //destructuring same as above
console.log(hobbies, hobby13, hobby23, remainingHobbies);

const personL54 = {
  nameL54: "Andy",
  ageL54: 30,
};

const { nameL54, ageL54 } = personL54;
const { nameL54: nameL542, ageL54: ageL542 } = personL54;
console.log(nameL542, ageL542);
