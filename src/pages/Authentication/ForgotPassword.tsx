import { Link } from 'react-router-dom'

function ForgotPassword() {
    return (
        <div className="sign-in ">
            <div className="container ">
                <form className="form w-96 flex flex-col gap-3 items-center mt-48 m-auto">
                    <h2 className="font-bold text-center">Forgot Password</h2>
                    <div className="input-style">
                        <input
                            className="w-full  pt-6 h-16 pl-4 focus:outline-0 "
                            type="email"
                            name="email"
                            id="email"
                            placeholder=" "
                        />
                        <label htmlFor="email">Email</label>
                    </div>
                    <button className="btn btn-primary rounded-none	normal-case w-full  text-base	">
                        Reset Password
                    </button>
                </form>
                <p className="text-center mt-4">
                    or{' '}
                    <Link className="form-link-style" to={'/join/login-popup'}>
                        Log in
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default ForgotPassword
