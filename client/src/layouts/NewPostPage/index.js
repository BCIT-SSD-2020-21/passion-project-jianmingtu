import React, {useState} from 'react'
import NewPost from '../../components/NewPost/NewPost'
import { useHistory } from "react-router-dom"
import * as network from '../../network'

export default function NewPostPage() {
    const history = useHistory()
    const [error, setError] = useState() 

    const submit = async ({type, imageUrl, description}) => {
        await network.savePost({type, imageUrl, description});
    }

    return (
        <NewPost 
            submit = {submit} 
            close={() => history.push("/")} 
            error = {error} >
        </NewPost>
    )
}
