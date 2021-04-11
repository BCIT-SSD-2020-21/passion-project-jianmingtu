const mongoDatabase = require('./mongoDatabase')
const express = require('express')
require('dotenv').config()

const app = express()
app.use(express.json())


const makePostsRouter = require('./routers/postsRouter')
const {makeUsersRouter} = require('./routers/usersRouter')
const makeCommentsRouter = require('./routers/commentsRouter')

const jwt = require('./jwt')

mongoDatabase().then(database => {

   console.log(jwt.authenticateJWT)

  const postsRouter = makePostsRouter({database, authorize: jwt.authorize})
  app.use("/api/posts", postsRouter)
  
  const usersRouter = makeUsersRouter({database, generateToken: jwt.generateToken})
  app.use('/api/users', usersRouter)

  const commentsRouter = makeCommentsRouter({database, authorize: jwt.authorize})
  app.use('/api/posts/:id/comments', commentsRouter)  
})


const port = process.env.PORT
app.listen(port, () => {
  console.log(`listening on port ${port}`)
})