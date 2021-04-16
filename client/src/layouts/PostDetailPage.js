import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom"
import PostDetails from '../components/postDetails/index'
import { getPost, updatePost } from '../network'


export default function PostDetailsPage({user}) {
  const [post, setPost] = useState()
  let { postId } = useParams()

  useEffect(() => {
    (async () => {

        try {
          // Hard code one of your post ids for now, we'll make this dynamic later
          const result = await getPost({postId: postId})
          setPost(result.post)
        } catch (error) {
          console.log(error)
        }
    })()
  }, [])

  const submitPost = async (data) => {
        console.log(data)
        try {
            await updatePost(data);
        } catch (error) {
      
        }        
    }

  const submitComment = async ({postId, text}) => {


  }

  const likeClicked = async data => {
    console.log("Like Clicked", data)
  }

  return (
    <>
    { !post ? // If there's no post, let's just show a loading indicator
      <p>Loading</p>
    :
      <PostDetails 
      post={post} 
      user = {user}
      submitPost={submitPost}
      likeClicked={likeClicked} 
      submitComment={submitComment}
      ></PostDetails>
    }
    </>
  )
}