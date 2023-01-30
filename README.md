# udemyUnderstandingTypeScript2023Edition

Understanding TypeScript - 2023 Edition<br />
This is a code learned as part of Understanding TypeScript - 2023 Edition Udemy course by Maximilian Schwarzmüller<br />
[https://www.udemy.com/course/understanding-typescript](https://www.udemy.com/course/understanding-typescript)<br />
Code is used only as a learning notes, so all credits goes to course instructor and Udemy platform<br />
<br />

## Setup

<ol>
<li> Download https://nodejs.org/en/ </li>
<li> Verify in cmd after install as <em>node --version</em> </li>
<li> Also verify:
<ol>
<li><em>npm --version</em> </li>
<li><em>npx --version</em> </li>
</ol>
</li>
</ol>
<br />
<h2>Can use this command to install typescript:</h2>
<ol>
<li><em>npm install -g typescript</em></li>
</ol>
<br />
<h2>How to use examples:</h2>
<ol>
<li><em>tsc app.ts</em> command compiles app.ts file into app.js file that we are using for index.html</li>
<li>open index.html with browser, i.e. Chrome, and see the result</li>
<li>Need to re-compile and re-load pages after every change, if not use <em>npm init</em> (press Enter all the time until completed) that will generate package.json</li>
<li><em>npm install --save-dev lite-server</em> to install dependencies that are used for the course</li>
<li>after updating package.json with "scripts" - "start" command, you can use <em>npm start</em> to start lite server</li>
<li>Now every file update will reflect in http://localhost:3000/ after <em>tsc app.ts</em></li>
</ol>
<br />
<h2>Add Watch Mode:</h2>
<ol>
<li><em>tsc app.ts --watch</em> or <em>tsc app.ts -w</em> command compiles app.ts file on file save</li>
<li>Now every file update will reflect in http://localhost:3000/ after file is saved</li>
</ol>
<br />
<h2>Watch Mode for entire project (multiple files)</h2>
<ol>
<li>You can have more than one script referenced in index.html</li>
<li><em>tsc --init</em> will create tsconfig.json file</li>
<li><em>tsc</em> will now compile all .tsc files that are in the same folder as tsconfig.json file</li>
<li><em>tsc --watch</em> or <em>tsc -w</em> will compile all .tsc files that are in the same folder as tsconfig.json file on file save</li>
<li>Now every file update will reflect in http://localhost:3000/ after any of files were saved</li>
</ol>
<br />
<h2>tsconfig.json file</h2>
<ol>
<li>You can exclude files like <em>,"exclude": ["analytics.ts", "*.dev.ts", "**/*.dev2.ts"]</em> (you need to delete .js file as well if it was compiled before)</li>
<li>For sure can exclude <em>,"exclude": ["node_modules"]</em> as we don't need to touch 3rd party libs, but it's excluded by default without even specifying</li>
<li>You can include files like <em>,"include": ["analytics.ts", "*.dev.ts", "**/*.dev2.ts"]</em> (you need to include everything you need to compile</li>
</ol>
<br />
<h2>tsconfig.json compiler options</h2>
<ol>
<li><em>"target": "es2016"</em> - for which js version you want to compile the code, as browsers supports different versions</li>
<li><em>"lib": []</em> - if not set, defaults depend on "target"</li>
</ol>
<br />
<h2>sourceMap compiler options</h2>
<ol>
<li><em>"sourceMap": true</em> - helps with debugging and development</li>
<li>will generate .map files that will be available to debug via Chrome console</li>
</ol>
<br />
<h2>rootDir and outDir options</h2>
<ol>
<li><em>"rootDir": "./"</em> - to store .ts files, i.e. src</li>
<li><em>"outDir": "./"</em> - where .js files should be stored, i.e. dist</li>
<li>will need to change html file references accordingly</li>
</ol>
<br />
<h2>removeComments option</h2>
<ol>
<li><em>"removeComments": true</em> - will remove comments from compiled .js files</li>
</ol>
<br />
<h2>noEmitOnError option</h2>
<ol>
<li><em>"noEmitOnError": true</em> - will not create .js files on .ts compile error (false by default)</li>
</ol>
<br />
<h2>strict option</h2>
<ol>
<li><em> "strict": true</em> - enables all strict type-checking options</li>
</ol>
