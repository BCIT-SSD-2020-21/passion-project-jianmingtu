# server

## Overview
The goal of the Passion Project module is to provide each student with an opportunity to individually explore and expand their abilities within a hands-on project-based setting.

The student will perform all roles including:
* Product Owner
* Product Designer/Planner
* Project Manager
* Designer
* Dev Ops
* Developer

Students are encouraged to work independantly (or in small groups of 2 or 3 if there is a shared passion). 

Students are able to use the tech stack of their choice. 

## Outcomes
Leading up to this point in our program you were asked to plan, design, and start to develop a product of your choosing. Given your increased experience with web and mobile technologies, you will be provided with class time to perform the tasks necessary to result in the following:

* A deployed main branch of any web based project assets.
* A clearly defined document with installation instructions as well as links and descriptions for all project assets.
* A project board that shows all of your build activitites (GitHub Project, Trello, etc.)
* A 5 minute presentation of the primary use cases for your application.

## Process
* Review your original product plan and design.
* Make changes to your plan/design where necessary to ensure that you can have a completed product for the Passion project demo day.
* Set specific milestones for your project, this will help to ensure that primary use cases are built in priority sequence and functional to a required minimum. (Not all milestones need to be completed...)
* All commits are to be done on a branch other than main and connected to a GitHub "issue". If working alone you can review and merge your own pull requests.

## Essential Features
These are really based on the design of your application and up to you...The only requirements are that each application has:
* some form persistant data that requires a database
* an implementation of a user interface that appropriately ties the app to the persisted data.

All other features should be included on an as needed basis for your application.

## Due Date and Grading
Presentations will take place 1pm-4pm PST April 16th, 2021.

The due date for graded code to be on GitHub is 11:59pm April 18th, 2021.

The passion project accounts for 20% of your SSDP5001 mark. 

**SSDP5001 Weighting**
* Career Success Series (13.33%)
* Passion Project (20%)
* Industry Project (66.67%)


## Server Layer
server - Express (Heroku)
database -MongoDB
- Install
  npm init
    npm install -g nodemon 
    npm i pstree.remy@1.1.0 -D
  npm i express morgan body-parser dotenv mongodb bcryptjs jsonwebtoken
- create server.js, etc.
- deploy
  heroku login
  heroku create
  git remote -v ( check heroku git and my git)
  add PORT, ACCESS_TOKEN_SECRET to .env 
  create the Procfile file and add "web: node server.js"
  add the snippet to package.json
  ```dotnetcli
    "engines": {
    "node" : ">=14.16.0"
  },
  ```
  enable cors
  ```dotnetcli
  npm i cors
  const cors = require("cors");
  app.use(cors());
  ```
  add "start": "node server.js" to package.json
  git add .
  git commit -m "change xxx"
  git subtree push --prefix server heroku master (build https://fathomless-lake-61399.herokuapp.com)
  git branch --show-current
  git push origin 1ServerSetup


https://blog.logrocket.com/5-ways-to-make-http-requests-in-node-js/
-- 5 ways of http requests and I choose the most popular axios

## debug on the express
  run code . the server folder
  click on the `run and debug`
  select Node from the list
  go to the breakpoint and will get the debug interrupt

