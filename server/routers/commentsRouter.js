const express = require('express')
const {currentUser} = require('./usersRouter')

module.exports = function({database, authorize}) {
    const router = express.Router({mergeParams:true})

    //  GET /api/posts/id/comments
    router.get('/', authorize, async (req, res) => {
      try {
          const postId = req.params.id
          const comments = await database.getPostComments({postId}) 
          res.send(comments)
      } catch (error) {
          console.error(error)
          res.send({error: error.message})
      }
    })

    // POST /api/posts/id/comments
    router.post('/', authorize, async (req, res) => {
      try {
        const commentDetails = req.body.text
        const postId = req.body.postId
        const user = req.user
        const comment =await database.createComment({ commentDetails, postId, user })
        res.send({comment})
      } catch (error) {
          console.error(error)
          res.send({error: error.message})
      }
    })    

    return router

}