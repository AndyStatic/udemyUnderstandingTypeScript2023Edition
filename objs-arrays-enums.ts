//Objects {age: 30}

const person = {
  name: "Andy",
  age: 30,
};

const person2: object = {
  name: "Andy",
  age: 30,
};

const person3: {
  name: string;
  age: number;
} = {
  name: "Andy",
  age: 30,
};

console.log(person);
//console.log(person.nickname); //error
console.log(person3.name); //has autocomplete now

//Array [1,2,3]

const person4: {
  name: string;
  age: number;
  hobbies: string[];
} = {
  name: "Andy",
  age: 30,
  hobbies: ["Sports", "Cooking"],
};

for (const hobby of person4.hobbies) {
  console.log(hobby.toUpperCase());
  //console.log(hobby.map()); //error: Property 'map' does not exist on type 'string'
}

let favouriteActivities: string[];
//favouriteActivities = 'Sports'; //error
favouriteActivities = ["Sports"];
//favouriteActivities = ['Sports', 1]; //error

let favouriteActivities2: any[];
favouriteActivities2 = ["Sports", 1];

//Tuple [1,2] - fixed length and fixed type array

const person5: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; //tuple - special array with exactly 2 element, first is number and second is string
} = {
  name: "Andy",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
};

person5.role.push("admin");
//person5.role[1]=10; //error Type 'number' is not assignable to type 'string
person5.role = [0, "admin"];
//person5.role = [0, "admin", 'user']; //error Source has 3 element(s) but target allows only 2

//Enums enum {NEW, OLD} - enumerated list

//const ADMIN = 0;
//const READ_ONLY = 1;
//const AUTHOR = 2;

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

enum RoleWithOtherIds {
  ADMIN = 5,
  READ_ONLY = "READ_ONLY",
  AUTHOR = 200,
}

const person6: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; //tuple - special array with exactly 2 element, first is number and second is string
  enumRole: Role;
} = {
  name: "Andy",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
  enumRole: Role.AUTHOR,
};

if (person6.enumRole === Role.AUTHOR) {
  console.log("is author");
}

//Any type * - most flexible type, can store anything in it
//Dont use much, as all idea of TS is to use other types

