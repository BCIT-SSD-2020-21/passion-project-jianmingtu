
import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import Login from '../../components/Login'
import * as network from '../../network'
import jwtDecode from "jwt-decode";
import useLocalStorage from "react-use-localstorage";

export default function LoginPage({setUser}) {
    const history = useHistory()
    const [error, setError] = useState()   
     const [token, setToken] = useLocalStorage("token"); 

    const login = async ({password, type, username, email}) => {                                 
        try {
            if(type === "login") {
                const userData = await network.login({password, username})
                setUser(userData)
            } else {             
                const userData  = await network.signUp({email, password, username})
                setUser(userData)         
            }
            history.push("/")
            setError(null)            
        } catch (error) {
            setUser(null)
            setError(error.message)
        }
    }
    
    return (
        <Login submit={login} close={() => history.push("/")} error = {error}>
 
        </Login>
    )
}
