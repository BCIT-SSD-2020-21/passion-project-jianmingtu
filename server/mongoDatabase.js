const { MongoClient, ObjectId} = require('mongodb')
const bcrypt = require('bcryptjs')

const url = 'mongodb+srv://team8:team8@cluster0.kgzz2.mongodb.net/petsFound'
const dbName = 'petsFound'
const client = new MongoClient(url, {useUnifiedTopology: true, useNewUrlParser: true})

module.exports = async function() {

  await client.connect()

  const db = client.db(dbName)
  const posts = db.collection('posts')
  const users = db.collection('users')
  const comments = db.collection('comments')

  async function getPosts(search) {
    return await db.collection('posts')
    .find({})
    .limit(20)
    .sort({ "timestamp": -1 })
    .toArray()
  }

  async function createPost({ postDetails, user }) {
  const result = await db.collection('posts').insertOne({
    imageUrl: postDetails.imageUrl,
    description: postDetails.description,
    totalLikes: 0,
    totalComments: 0,
    timestamp: Date.now(),
    user: { 
      _id: ObjectId(user._id),       
      username: user.username 
    }
  })
  return result.ops[0]
}



  async function createUser({email, username, password}) {
     const encrypted = await bcrypt.hash(password, 12)
     const user = await db.collection('users').findOne({ $or: [{ username }, { email }] })
    if (user) {
        throw Error("username or email already taken")
    }
    const result = await db.collection('users').insertOne({ email, username, password: encrypted, timestamp: Date.now()})

    return result.ops[0]
  }

  async function getUser({username, password}) {
    const user = await db.collection('users').findOne({ username: username })
    if (!user) {
        throw Error("Invalid username")
    }

    const same = await bcrypt.compare(password, user.password)
    if(!same) {
      throw Error("incorrect password")
  }   
  
  return user;
  }

  async function getPost({ postId }) {
  const results = await db.collection('posts').aggregate([
    {
      $match: {
        _id: ObjectId(postId),
      }
    },
    {
      $lookup: {
        from: 'comments',
        localField: '_id',
        foreignField: 'postId',
        as: 'comments',
      }
    }
  ]).limit(1).toArray()
  return results[0]
}

  async function getPostComments({postId}) {
    
  }

async function createComment({ commentDetails, postId, user }) {

  const session = client.startSession()
  session.startTransaction()
  try {
    const result = await db.collection('comments').insertOne({
      ...commentDetails,
      postId: ObjectId(postId),
      user: { username: user.username, _id: ObjectId(user.id) },
      timestamp: Date.now()
    })

    const update = {
      $inc: {
        "totalComments": 1
      }
    }

    await db.collection('posts').findOneAndUpdate({ "_id": ObjectId(postId) }, update)
    await session.commitTransaction()
    return result.ops[0]
  } catch (error) {
    await session.abortTransaction()
    throw error
  } finally {
    await session.endSession()
  }
}

  return {
      getPosts,
      createPost,
      getUser,
      createUser,
      createComment,
      getPostComments,
      getPost
  }
}