//Node.js

console.log("Something...");

/**
 * Use npm init to get package.json
 * Use tsc --init to get tsconfig.json
 * Uncomment "moduleResolution": "node", from tsconfig.json
 * npm install --save express body-parser
 * npm install --save-dev nodemon
 * npm install --save-dev @types/node
 * npm install --save-dev @types/express
 *
 * run in 1st cmd: tsc -w
 * update packaje.json - scripts
 * "startnodemon": "nodemon dist/app.js"
 * run in 2nd cmd: npm run startnodemon
 *
 * URL will be http://localhost:3000/
 *
 * For testing can use Postman
 * POST http://localhost:3000/todos/
 * with JSON body
 * {
 * "text": "Finish the course!"
 * }
 *
 * will get you a response with id
 *
 * For testing can use Postman
 * GET http://localhost:3000/todos/
 *
 * will get you a response with all created ids
 *
 * For testing can use Postman
 * PATCH http://localhost:3000/todos/0.6350862221147835
 * with JSON body
 * {
 * "text": "Updated the course!"
 * }
 *
 * will get you a response with id
 *
 * For testing can use Postman
 * DELETE http://localhost:3000/todos/0.6350862221147835
 *
 * will get you a response with text
 */

import express, { Request, Response, NextFunction } from "express";
import { json } from "body-parser";

import todoRoutes from "./nodejs-section/routes/todos";

const app = express();

app.use(json());

app.use("/todos", todoRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

app.listen(3000);

//Can look at next.js for node+typescript backend
