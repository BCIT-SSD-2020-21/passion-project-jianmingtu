# Server Side Install, Debug and Deployment

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
  git subtree push --prefix server heroku master (build https://fathomless-lake-61399.herokuapp.com) => push to Heroku Github
  git branch --show-current
  git push origin 1ServerSetup => My Personal GitHub


https://blog.logrocket.com/5-ways-to-make-http-requests-in-node-js/
-- 5 ways of http requests and I choose the most popular axios

## Debug on the local Express
  run code . the server folder
  CTRL+SHIFT+D -> Select 'Run and Debug' -> Choose Node.js -> It will run into breakpoints

## Debug on Heroku (the CLI will keep an alive logging)
  heroku login
  heroku logs --app=fathomless-lake-61399 --tail

