import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const withAuth = (Component: typeof React.Component) => {
    const Auth = (props: JSX.IntrinsicAttributes) => {
        const user = null // we will get our user from userSlice later
        const navigate = useNavigate()

        useEffect(() => {
            if (!user) {
                navigate('/join/login-popup')
            }
        })

        return <Component {...props} />
    }

    return Auth
}

export default withAuth
