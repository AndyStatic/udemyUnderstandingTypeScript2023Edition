//Unknown type
let userInput: unknown;
let userInputAsAny: any;
let userName: string;

userInput = 5;
userInput = "Max";

//userName = userInput; //error Type 'unknown' is not assignable to type 'string'
userName = userInputAsAny; //any not so strict as 'unknown'

if (typeof userInput === "string") {
  userName = userInput;
}

//Never type
function generateError(message: string, code: number) {
  throw { message: message, errorCode: code };
}

const result = generateError("An error occured!", 500);
console.log(result); //will not return any result, so never return anything. Just crashes script
//infinite loop also will be a function that never returns
