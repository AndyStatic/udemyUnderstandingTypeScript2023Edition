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
<li>Now every file update will reflect in http://localhost:3000/ after any of files is saved</li>
</ol>
<br />
<h2>tsconfig.json file</h2>
<ol>
<li>You can exclude files like ,"exclude": ["analytics.ts", "*.dev.ts", "**/*.dev2.ts"] (you need to delete .js file as well if it was compiled before)</li>
</ol>