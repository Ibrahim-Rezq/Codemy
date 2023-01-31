import { Link } from 'react-router-dom'

import InputField from '../global/InputField'
import Container from '../UI/Container'

function ForgotPassword() {
    return (
        <Container>
            <div className="forgot-password">
                <form className="form w-96 flex flex-col gap-3 items-center mt-16 m-auto">
                    <h2 className="font-bold text-center">Forgot Password</h2>
                    <InputField type={'email'} name="email" inputlabel="Email" />
                    <button className="btn btn-primary rounded-none	normal-case w-full text-base">Reset Password</button>
                </form>
                <p className="text-center mt-4">
                    or{' '}
                    <Link className="underline underline-offset-4 text-violet-800 font-bold" to={'/join/login-popup'}>
                        Log in
                    </Link>
                </p>
            </div>
        </Container>
    )
}

export default ForgotPassword
