import React from 'react'
import { Redirect } from "react-router-dom"

export default function SignOutPage({setUser}) {

    setUser(null)

    return (
        <Redirect to='/' />
    )
}
