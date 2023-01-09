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
<li>tsc app.ts compiles app.ts file into app.js file that we are using for index.html</li>
</ol>
<br />
<h2>How to use examples:</h2>
<ol>
<li><em>tsc app.ts</em> command compiles app.ts file into app.js file that we are using for index.html</li>
<li>open index.html with browser, i.e. Chrome, and see the result</li>
<li>Need to re-compile and re-load pages after every change, if not use <em>npm init<em> (press Enter all the time unti completed) that will generate package.json</li>
<li><em>npm install --save-dev lite-server</em> to install dependencies that are used for the course</li>
<li>after updating package.json with "scripts" - "start" command, you can use <em>npm start</em> to start lite server</li>
<li>Now every file update will reflect in http://localhost:3000/ after <em>tsc app.ts</em></li>
</ol>
<br />