//Interfaces

interface Person {
  name: string; //can use readonly on interfaces
  age: number;

  greet(phrase: string): void;
}

let user1: Person;

user1 = {
  name: "Andy",
  age: 30,
  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  },
};

user1.greet("Hi there - I am");

//exact same as type
type PersonType = {
  name: string;
  age: number;

  greet(phrase: string): void;
};

let user2: PersonType;

user2 = {
  name: "Andy",
  age: 30,
  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  },
};

user2.greet("Hi there - I am typed");

//differences - interfaces are more clear
interface Greetable {
  name: string;

  greet(phrase: string): void;
}

interface Position {
  position: string;
}

interface ExtGreetable extends Greetable {
  salary: number;
}

//interfaces also quite similar to abstract classes, but no implimintations
class GreetablePerson implements Greetable, Position {
  name: string;
  age: number = 30;
  position: string;

  constructor(n: string, age: number, pos: string) {
    this.name = n;
    this.age = age;
    this.position = pos;
  }

  greet(phrase: string): void {
    throw new Error("Method not implemented.");
  }
}

let user1b: Greetable;

user1b = {
  name: "Andy",
  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  },
};

user1.greet("Hi there - I am greetable");

//Optional
//can add to classes and interfaces, and in construcotrs. Just add checks for empty, i.e if(n) ... assign
//also can be achieved by assigning default value
interface ExtGreetable2 extends Greetable {
  megaSalary?: number;
}
