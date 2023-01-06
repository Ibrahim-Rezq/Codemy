import { Link } from 'react-router-dom'
import apple from '../../assets/apple.svg'
import facebook from '../../assets/facebook.svg'
import google from '../../assets/google.svg'
import InputField from '../global/InputField'
function SignIn() {
    return (
        <div className="sign-in ">
            <div className="container ">
                <form className="form w-96 flex flex-col gap-3 items-center mt-48 m-auto">
                    <h2 className="font-bold text-center">Log in to your Codemy account</h2>
                    <div className="border border-black font-bold items-center flex gap-3 py-2 pl-4 h-fit justify-start w-full cursor-pointer hover:bg-slate-100">
                        <img src={google} alt="" />
                        <p>Continue with google</p>
                    </div>
                    <div className="border border-black font-bold items-center flex gap-3 py-2 pl-4 h-fit justify-start w-full cursor-pointer hover:bg-slate-100">
                    <img src={facebook} alt="" />
                        <p>Continue with facebook</p>
                    </div>
                    <div className="border border-black font-bold items-center flex gap-3 py-2 pl-4 h-fit justify-start w-full cursor-pointer hover:bg-slate-100">
                    <img src={apple} alt="" />
                        <p>Continue with apple</p>
                    </div>
                    <InputField type={'email'} />
                    <InputField type={'password'} />
                    <button className="btn btn-primary rounded-none	normal-case w-full  text-base	">Log In</button>
                </form>
                <p className="text-center mt-4">
                    or
                    <Link
                        className="underline underline-offset-4 text-violet-800 font-bold ml-1"
                        to="/user/forgot-password"
                    >
                        Forgot Password
                    </Link>
                </p>
                <p className="text-center mt-8">
                    Don`t have an account?
                    <Link
                        to="/join/signup-popup"
                        className="underline underline-offset-4 text-violet-800 font-bold ml-1"
                    >
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    )
}
export default SignIn
