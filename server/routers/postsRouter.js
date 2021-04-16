const express = require('express')

module.exports = function({database, authorize}) {
  
   console.log(authorize)
   
  const router = express.Router()

  // GET /api/posts
  router.get('/', async (req, res) => {
    const posts = await database.getPosts(req)
    res.send({
      posts
    })
  })
  
  // GET /api/posts/id
  router.get('/:id', async (req, res) => {
      try {
        const postId = req.params.id
        const post = await database.getPost({postId})
        res.send({post})
      } catch (error) {
          console.error(error)
          res.send({error: error.message})
      }
  })
  
  // POST /api/posts
  router.post('/', authorize, async (req, res) => {
    const postDetails = req.body
    const user = req.user
    const post = await database.createPost({postDetails, user})
    res.send({post})
  })
  
  return router
}

