//Union Type
function combine(input1: number | string, input2: number | string) {
  let resultNum: number;
  let resultStr: string;
  if (typeof input1 === "number" && typeof input2 === "number") {
    return (resultNum = input1 + input2);
  } else typeof input1 === "string" && typeof input2 === "string";
  {
    return (resultStr = input1.toString() + input2.toString());
  }

  //return result; //if use as in example, will return 3026
}

const combinedAges = combine(30, 26);
console.log(combinedAges);

const combinedNames = combine("Max", "Anna");
console.log(combinedNames);

//Literal Types
function combineWithResult(
  input1: number | string,
  input2: number | string,
  resultConversion: string
) {
  let resultNum: number;
  let resultStr: string;
  if (typeof input1 === "number" && typeof input2 === "number") {
    if (resultConversion === "as-number") {
      return (resultNum = input1 + input2);
    } else if (resultConversion === "as-text") {
      return (resultStr = input1.toString() + input2.toString());
    }
  } else typeof input1 === "string" && typeof input2 === "string";
  {
    if (resultConversion === "as-number") {
      return (resultNum = +input1 + +input2);
    } else if (resultConversion === "as-text") {
      return (resultStr = input1.toString() + input2.toString());
    }
  }

  //return result; //if use as in example, will return 3026
}

const combinedAgesWithResult = combineWithResult(30, 26, "as-number");
console.log("combinedAgesWithResult - ", combinedAgesWithResult);

const combineStringAgesWithResult = combineWithResult("30", "26", "as-number");
console.log("combinedAgesWithResult - ", combineStringAgesWithResult);

const combinedNamesWithResult = combineWithResult("Max", "Anna", "as-text");
console.log("combinedNamesWithResult - ", combinedNamesWithResult);

const combinedNumNamesWithResult = combineWithResult(
  "Max",
  "Anna",
  "as-number"
);
console.log("combinedNamesWithResult - ", combinedNumNamesWithResult); //NaN

function combineWithResult2(
  input1: number | string,
  input2: number | string,
  resultConversion: "as-number" | "as-text" //literal types
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
    return result;
  } else
    (typeof input1 === "string" && typeof input2 === "string") ||
      resultConversion === "as-text";
  {
    result = input1.toString() + input2.toString();
    return result;
  }
}

const combinedAgesWithResult2 = combineWithResult2(30, 26, "as-number");
console.log("combinedAgesWithResult2 - ", combinedAgesWithResult2);

const combineStringAgesWithResult2 = combineWithResult2(
  "30",
  "26",
  "as-number"
);
console.log("combinedAgesWithResult2 - ", combineStringAgesWithResult2);

const combinedNamesWithResult2 = combineWithResult2("Max", "Anna", "as-text");
console.log("combinedNamesWithResult2 - ", combinedNamesWithResult2);

const combinedNumNamesWithResult2 = combineWithResult2(
  "Max",
  "Anna",
  "as-number"
);
console.log("combinedNamesWithResult2 - ", combinedNumNamesWithResult2); //NaN

//Type Aliases / Custom Types
//type keyword
type Combinable = number | string;
type ConversionDescriptor = "as-number" | "as-text"; //literal types

function combineWithResult3(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
    return result;
  } else
    (typeof input1 === "string" && typeof input2 === "string") ||
      resultConversion === "as-text";
  {
    result = input1.toString() + input2.toString();
    return result;
  }
}

//Functions
function add2(n1: number, n2: number) {
  return n1 + n2;
}

function printResult2(num: number) {
  //return type is void
  console.log("Result: ", num);
}

printResult2(add2(5, 12));

let someValue: undefined;
//let combineValues: Function; //just function type check
let combineValues: (a: number, b: number) => number;
combineValues = add2;
//combineValues = printResult2; //error Type 'void' is not assignable to type 'number' (for printResult2)
//combineValues = 5; //error Type 'number' is not assignable to type 'Function'
console.log(combineValues(8, 8));

//Callbacks
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(10, 20, (result) => {
  console.log("Result addAndHandle: ", result);
});
