//Add libraries
/**
 * Lodash - js lib
 * npm i --save lodash
 * import _ from 'lodash'
 * you will get errors, but it still works
 *
 * can install version adjusted for TS
 * npm install --save-dev @types/lodash
 */

//import _ from 'lodash'
//console.log(_.shuffle([1,2,3]));

//declare var GLOBAL: string;
/**
 * when have something like this in index.html
 * <body>
 * <script>
 * var GLOBAL = 'THIS IS SET';
 * </script>
 * </body>
 */
//console.log(GLOBAL);

import { Product } from "./product.model";

const productsL164 = [
  { title: "A Carpet", price: 22.99 },
  { title: "A Book", price: 10.99 },
];

const p1L164 = new Product("A book", 12.99);

console.log(p1L164.getInformation());

const loadProducts = productsL164.map((prod) => {
  return new Product(prod.title, prod.price);
});

for (const prod of loadProducts) {
  console.log(prod.getInformation());
}

//class transformer package
/**
 * https://www.npmjs.com/package/class-transformer
 * npm install class-transformer --save
 * npm install reflect-metadata --save
 */

import "reflect-metadata";
import { plainToClass } from "class-transformer";

const loadProductsL164b = plainToClass(Product, productsL164);
for (const prod of loadProductsL164b) {
  console.log(prod.getInformation());
}

//class validator
/**
 * https://www.npmjs.com/package/class-validator
 * npm install class-validator --save\
 * how to work with it is in src\product.model.ts file
 */
import { validate } from "class-validator";
const newProdL165 = new Product("", -5.99);
validate(newProdL165).then((errors) => {
  if (errors.length > 0) {
    console.log("VALIDATION ERRORS!");
    console.log(errors);
  } else {
    console.log(newProdL165.getInformation());
  }
});
