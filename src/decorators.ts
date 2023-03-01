//Decorators
/**
 * In tsconfig.json shoud uncomment
 * "experimentalDecorators": true,
 *
 * compilerOptions should have based on course:
 *  "target": "es6"
 * but also works when set to:
 *  "target": "es2016"
 */

//this is decorator
/*
function Logger(constructor: Function) {
  console.log("Logging...");
  console.log(constructor);
}
*/

//Decorator Factory
function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  return function (constructor: any) {
    console.log("Rendering template");
    const hookEl = document.getElementById(hookId);
    const p = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector("h1")!.textContent = p.name; //similar to Angular
    }
  };
}

function WithTemplateL112(template: string, hookId: string) {
  console.log("TEMPLATE FACTORY");
  return function <T extends { new (...args: any[]): { name: string } }>(
    originalConstructor: T
  ) {
    return class extends originalConstructor {
      constructor(..._: any[]) {
        super();
        console.log("Rendering template");
        const hookEl = document.getElementById(hookId);
        const p = new originalConstructor();
        if (hookEl) {
          hookEl.innerHTML = template;
          hookEl.querySelector("h1")!.textContent = this.name;
        }
      }
    };
  };
}

//@Logger
@Logger("LOGGING - PERSON")
//@WithTemplate("<h1>My Person Object</h1>", "app")
@WithTemplateL112("<h1>My Person Object</h1>", "app")
class PersonL105 {
  name = "Andy";

  constructor() {
    console.log("Creating person object...");
  }
}

const persL105 = new PersonL105();
console.log(persL105);

function LogL109(target: any, propertyName: string | Symbol) {
  console.log("Property decorator!");
  console.log(target, propertyName);
}

function Log110(target: any, name: any, descriptor: PropertyDescriptor) {
  console.log("Accessor decorator!");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log110b(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log("Method decorator!");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log110c(target: any, name: string | Symbol, position: number) {
  console.log("Parameter decorator!");
  console.log(target);
  console.log(name);
  console.log(position);
}

class ProductL109 {
  @LogL109
  title: string;
  private _price: number;

  @Log110
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error("Invalid price - should be positive!");
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  @Log110b
  getPriceWithTax(@Log110c tax: number) {
    return this._price * (1 + tax);
  }
}

const p1L111 = new ProductL109("Book", 19);
const p2L111 = new ProductL109("Book 2", 29);

function AutobindL114(_: any, _2: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    },
  };
  return adjDescriptor;
}

class PrinterL114 {
  message = "This works!";

  @AutobindL114
  showMessage() {
    console.log(this.message);
  }
}

const pL114 = new PrinterL114();

const buttonL114 = document.querySelector("button")!;
//buttonL114.addEventListener("click", pL114.showMessage.bind(pL114)); //without decorator
buttonL114.addEventListener("click", pL114.showMessage);

interface ValidatorConfigL116 {
  [property: string]: {
    [validatableProp: string]: string[]; // ['required','positive']
  };
}

const registeredValidatorsL116: ValidatorConfigL116 = {};

function RequiredL115(target: any, propName: string) {
  registeredValidatorsL116[target.constructor.name] = {
    ...registeredValidatorsL116[target.constructor.name],
    [propName]: [
      ...(registeredValidatorsL116[target.constructor.name]?.[propName] ?? []),
      "required",
    ],
  };
}

function PositiveNumberL115(target: any, propName: string) {
  registeredValidatorsL116[target.constructor.name] = {
    ...registeredValidatorsL116[target.constructor.name],
    [propName]: [
      ...(registeredValidatorsL116[target.constructor.name]?.[propName] ?? []),
      "positive",
    ],
  };
}

function validateL115(obj: any) {
  const objValidatorConfig = registeredValidatorsL116[obj.constructor.name];
  if (!objValidatorConfig) {
    return true;
  }
  let isValid = true;
  for (const prop in objValidatorConfig) {
    for (const validator of objValidatorConfig[prop]) {
      switch (validator) {
        case "required":
          isValid = isValid && !!obj[prop];
          break;
        case "positive":
          isValid = isValid && obj[prop] > 0;
          break;
      }
    }
  }
  return isValid;
}
class CourseL115 {
  @RequiredL115
  title: string;
  @PositiveNumberL115
  price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }
}

const courseFormL115 = document.querySelector("form")!;
courseFormL115.addEventListener("submit", (event) => {
  event.preventDefault();
  const titleEl = document.getElementById("title") as HTMLInputElement;
  const priceEl = document.getElementById("price") as HTMLInputElement;

  const title = titleEl.value;
  const price = +priceEl.value;

  if (title.trim().length > 0) {
  }

  const createdCourse = new CourseL115(title, price);

  if (!validateL115(createdCourse)) {
    alert("Invalid input, please try again!");
    return;
  }
  console.log(createdCourse);
});

//https://www.typescriptlang.org/docs/handbook/decorators.html
