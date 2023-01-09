import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const withAuth = (Component: any) => {
    const Auth = (props: any) => {
        const user = null // we will get our user from userSlice later
        const navigate = useNavigate()
        useEffect(() => {
            if (!user) {
                navigate('/join/login-popup')
            }
        })
<<<<<<< HEAD
=======

>>>>>>> e8bd4b907479452e05dc036b357fecf7d540cca6
        return <Component {...props} />
    }

    return Auth
}

export default withAuth
