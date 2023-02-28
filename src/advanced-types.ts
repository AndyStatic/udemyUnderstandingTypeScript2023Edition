//Intersection Types

type Admin83 = {
  name: string;
  privilages: string[];
};

type Employee83 = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee83 = Admin83 & Employee83;

const e1L83L: ElevatedEmployee83 = {
  name: "Andy",
  privilages: ["create-server"],
  startDate: new Date(),
};

type CombinableL83 = string | number;
type NumericL83 = number | boolean;

type UniversalL83 = CombinableL83 & NumericL83;

//Type Guards
function addL84(a: CombinableL83, b: CombinableL83) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

type UnknownEmpoyeeL84 = Employee83 | Admin83;

function printEmployeeInformation(emp: UnknownEmpoyeeL84) {
  console.log("Name: " + emp.name);
  if ("privilages" in emp) {
    console.log("Privilages: " + emp.privilages);
  }
  if ("startDate" in emp) {
    console.log("Start Date: " + emp.startDate);
  }
}

printEmployeeInformation(e1L83L);
printEmployeeInformation({ name: "Manu", startDate: new Date() });

class CarL84 {
  drive() {
    console.log("Driving...");
  }
}

class TruckL84 {
  drive() {
    console.log("Driving a truck...");
  }

  loadCargo(amout: number) {
    console.log("Loading cargo... " + amout);
  }
}

type VehicleL84 = CarL84 | TruckL84;

const v1L84 = new CarL84();
const v2L84 = new TruckL84();

function useVehicle(vehicle: VehicleL84) {
  vehicle.drive();
  /*
  if ("loadCargo" in vehicle) {
    vehicle.loadCargo(1000);
  }
  */
  //alternative way
  if (vehicle instanceof TruckL84) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1L84);
useVehicle(v2L84);

//Descriminated Unions
interface BirdL85 {
  flyingSpeed: number;
}

interface HorseL85 {
  runningSpeed: number;
}

type AnimalL85 = BirdL85 | HorseL85;

function moveAnimal(animal: AnimalL85) {
  if ("flyingSpeed" in animal) {
    console.log("Moving with speed: " + animal.flyingSpeed);
  }
  if ("runningSpeed" in animal) {
    console.log("Moving with speed: " + animal.runningSpeed);
  }
}

interface BirdL85b {
  type: "bird";
  flyingSpeed: number;
}

interface HorseL85b {
  type: "horse";
  runningSpeed: number;
}

type AnimalL85b = BirdL85b | HorseL85b;

function moveAnimalL85b(animal: AnimalL85b) {
  let speed: number;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
      break;
  }
  console.log("Moving at speed: " + speed);
}

moveAnimalL85b({ type: "bird", flyingSpeed: 10 });

//Type Casting
const paragraphL86 = document.querySelector("p");
const paragraphL862 = document.getElementById("message-output");

/*
const userInputElementL86 = <HTMLInputElement>(
  document.getElementById("user-input")!
); //<HTMLInputElement> type casting; ! is for specifying that it will be not null
*/

//alternative
const userInputElementL86 = document.getElementById(
  "user-input"
)! as HTMLInputElement;

userInputElementL86.value = "Hi there!";

//Index Properties
interface ErrorContainerL87 {
  [prop: string]: string; //any property with name as string and values as string
}

const errorBagL87: ErrorContainerL87 = {
  email: "Not a valid email!",
  username: "Must start with a capital character!",
};

//Function Overloads
function addL85(a: number, b: number): number;
function addL85(a: string, b: string): string;
function addL85(a: number, b: string): string;
function addL85(a: string, b: number): string;
function addL85(a: CombinableL83, b: CombinableL83) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const resultL88 = addL85(1, 5);
//resultL88.split(''); //errro Property 'split' does not exist on type 'number'
const resultL88b = addL85("Andy", "K");
resultL88b.split("");

//Optional Chaining
const fetchedUserDataL89 = {
  id: "u1",
  name: "Max",
  job: { title: "CEO", description: "My own company" },
};

console.log(fetchedUserDataL89.job.title);

const fetchedUserDataL89b = {
  id: "u1",
  name: "Max",
  //job: { title: "CEO", description: "My own company" },
};

//console.log(fetchedUserDataL89b.job.title); //error Property 'job' does not exist on type '{ id: string; name: string; }'.
//console.log(fetchedUserDataL89b?.job?.title); //can use for API responses when unknow if returned or not

const userInputL90 = null;
const storeDataL90 = userInputL90 || "DEFAULT";
const storeDataL90b = userInputL90 ?? "DEFAULT"; //if null or undefined, not empty string or 0
