const express = require('express')

 function makeUsersRouter({database, generateToken}) {
  
  const router = express.Router()

  router.get('/', async (req, res) => {
    const users = await database.getUsers()
    res.send({users: users.map(user => ({ username: user.username, email: user.email}))})
  })
  
  // POST /api/users/login
  router.post('/login', async function(req, res) {
    
    try {
      const userDetails = req.body
      const user = await database.getUser(userDetails)

      // Create an jwt from the user details and send the token back to the client
      const accessToken = generateToken({_id: user._id, email: user.email, username: user.username})
      res.send({ accessToken: accessToken })
    } catch (error) {
      console.log(error)
      res.status(401).send({error: error.message})
    }
  })

   // POST /api/users
  // Create a new user
  router.post('/', async function(req, res) {
    const {username, password, email} = req.body
  
    try {
      const user = await database.createUser( {username, password, email})

      // Create an jwt from the user details and send the token back to the client
      const accessToken = generateToken({_id: user._id, email: user.email, username: user.username})
      res.send({ accessToken: accessToken })

    } catch (error) {
      console.error(error)
      res.status(401).send({error: error.message})
    }
  })
  
  return router
}

module.exports = {
    makeUsersRouter,
};

