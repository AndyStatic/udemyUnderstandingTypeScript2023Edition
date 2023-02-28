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

//@Logger
@Logger("LOGGING - PERSON")
@WithTemplate("<h1>My Person Object</h1>", "app")
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

class ProductL109 {
  @LogL109
  title: string;
  private _price: number;

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

  getPriceWithTax(tax: number) {
    return this._price * (1 + tax);
  }
}
