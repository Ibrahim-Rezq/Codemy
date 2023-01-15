import { Link } from 'react-router-dom'

import InputField from '../global/InputField'
import Container from '../UI/Container'

function SignUp() {
    return (
        <div className="sign-up">
            <Container>
                <form className="form w-96 flex flex-col gap-3 items-center mt-16 mb-8 m-auto ">
                    <h2 className="font-bold text-center">Sign up and start learning</h2>
                    <InputField type={'text'} />
                    <InputField type={'email'} />
                    <InputField type={'password'} />
                    <ul className="password-strength flex gap-2 justify-start mr-auto">
                        <li className="w-12 bg-slate-300 h-1 rounded-full"></li>
                        <li className="w-12 bg-slate-300 h-1 rounded-full"></li>
                        <li className="w-12 bg-slate-300 h-1 rounded-full"></li>
                        <li className="w-12 bg-slate-300 h-1 rounded-full"></li>
                    </ul>
                    <label htmlFor="checkbox" className="cursor-pointer text-sm flex items-start gap-2 py-4">
                        <input
                            type="checkbox"
                            id="checkbox"
                            className="mt-1 outline-1 outline indeterminate:bg-white checked:bg-red"
                        />
                        <span> Send me special offers, personalized recommendations, and learning tips.</span>
                    </label>

                    <button className="btn btn-primary rounded-none	 w-full normal-case text-base	">Sign Up</button>
                </form>
                <p className="text-xs  w-fit m-auto  border-b pb-4 px-4 mb-4">
                    By signing up, you agree to our
                    <Link to="/terms" className="mx-1 underline underline-offset-4 text-violet-800 font-bold">
                        Terms of Use
                    </Link>
                    and
                    <Link to="/terms/privacy" className="ml-1 underline underline-offset-4 text-violet-800 font-bold">
                        Privacy Policy..
                    </Link>
                </p>
                <p className=" w-fit m-auto  pb-4 px-4">
                    Already have an account?
                    <Link
                        to="/join/login-popup"
                        className="ml-1 underline underline-offset-4 text-violet-800 font-bold"
                    >
                        Log in
                    </Link>
                </p>
            </Container>
        </div>
    )
}

export default SignUp
