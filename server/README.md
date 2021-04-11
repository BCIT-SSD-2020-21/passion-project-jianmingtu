# Server


## Install
npm init
    npm install -g nodemon  (nodemon server.js)
    npm i pstree.remy@1.1.0 -D
npm i express morgan body-parser dotenv
npm i mongodb
npm i mongoose
npm i passport passport-local passport-local-mongoose express-session

boilerplate
server.js
---------------------------
const express = require('express')
require('dotenv').config()
const jwt = require('./jwt')

const app = express()
app.use(express.static"public")
app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));




const { MongoClient, ObjectId} = require('mongodb')
const bcrypt = require('bcryptjs')

const url = 'mongodb://localhost:27017'
const dbName = 'socialSomething'
const client = new MongoClient(url, {useUnifiedTopology: true, useNewUrlParser: true})

  await client.connect()

  const db = client.db(dbName)
  const posts = db.collection('posts')
  const users = db.collection('users')
  const comments = db.collection('comments')



https://blog.logrocket.com/5-ways-to-make-http-requests-in-node-js/
-- 5 ways of http requests and I choose the most popular axios


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


## App Layer
client - React (Netlify)

server - Express (Heroku)

database -MongoDB
