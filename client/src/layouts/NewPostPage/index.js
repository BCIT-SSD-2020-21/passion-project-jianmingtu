import React, {useState} from 'react'
import NewPost from '../../components/NewPost/NewPost'
import { useHistory } from "react-router-dom"
import * as network from '../../network'

export default function NewPostPage() {
    const history = useHistory()
    const [error, setError] = useState() 

    const submitPost = async (data) => {
        console.log(data)
        try {
            await network.savePost(data);
        } catch (error) {
        setError(error)
        }        
    }

    return (
        <NewPost  
            close={() => history.push("/")} 
            submitPost = {submitPost}
            error = {error} >
        </NewPost>
    )
}
