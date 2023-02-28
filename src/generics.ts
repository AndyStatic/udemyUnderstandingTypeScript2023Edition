//Generics
const namesL94 = ["Andy", "Manu"];
const namesL94b: any = ["Andy", "Manu"];
const namesL94c: Array<string> = ["Andy", "Manu"]; //Generic type

const promiseL84 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This is done!");
  }, 2000);
});

const promiseL84b: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This is done!");
  }, 2000);
});

//Create a Generic Function

function merge(objA: object, objB: object) {
  return Object.assign(objA, objB);
}

console.log(merge({ name: "Andy" }, { age: 30 }));
const mergedObject = merge({ name: "Andy" }, { age: 30 });
//mergedObject.name; //Property 'name' does not exist on type 'object'.

function mergeL95b<T extends {}, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObjectL95b = mergeL95b(
  { name: "Andy", hobbies: ["Sports"] },
  { age: 30 }
);
console.log(mergedObjectL95b.age);

const mergedObjectL95c = mergeL95b<
  { name: string; hobbies: string[] },
  { age: number }
>({ name: "Andy", hobbies: ["Sports"] }, { age: 35 });
console.log(mergedObjectL95c.age);

//Constraints
function mergeL96<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObjectL96 = mergeL96(
  { name: "Andy", hobbies: ["Sports"] },
  { age: 30 }
);
console.log(mergedObjectL96);

//More Generic Functions
interface Lengthy {
  length: number;
}

function countAndDescribe97<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value.";
  if (element.length === 1) {
    descriptionText = "Got 1 element.";
  } else if (element.length > 1) {
    descriptionText = "Got " + element.length + " elements.";
  }
  return [element, descriptionText];
}

console.log(countAndDescribe97("Hi there!"));
console.log(countAndDescribe97(["Sports", "Cooking"]));
console.log(countAndDescribe97(""));

//keyof Constraint
function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Value: " + obj[key];
}

extractAndConvert({ name: "Andy" }, "name");

//Generic Classes
class StorageL99<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new StorageL99<string>();
//textStorage.addItem(10); //Argument of type 'number' is not assignable to parameter of type 'string'.
textStorage.addItem("Andy");
textStorage.addItem("Manu");
textStorage.removeItem("Andy");
console.log(textStorage.getItems());

const numberStorage = new StorageL99<number>();

//const objectStorage = new StorageL99<object>(); Type 'object' does not satisfy the constraint 'string | number | boolean'.
const objectStorage = new StorageL99<any>();
const andyObjL99 = { name: "Andy" };
objectStorage.addItem(andyObjL99);
objectStorage.addItem({ name: "Manu" });
objectStorage.removeItem(andyObjL99);
console.log(objectStorage.getItems());

//Generic Utility Types
interface CourseGoalL101 {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoalL101 {
  return {
    title: title,
    description: description,
    completeUntil: date,
  };
}

function createCourseGoalb(
  title: string,
  description: string,
  date: Date
): CourseGoalL101 {
  let courseGoal: Partial<CourseGoalL101> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoalL101;
}

const namesL101 = ["Andy", "Candy"];
namesL101.push("Manu");

const namesL101b: Readonly<string[]> = ["Andy", "Candy"];
//namesL101b.push("Manu"); //Property 'push' does not exist on type 'readonly string[]'
