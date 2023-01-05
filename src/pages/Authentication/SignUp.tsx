import { FaEye } from 'react-icons/fa'
import { Link } from 'react-router-dom'
function SignUp() {
    return (
        <div className="sign-in ">
            <div className="container ">
                <form className="form w-96 flex flex-col gap-3 items-center mt-48 mb-8 m-auto ">
                    <h2 className="font-bold text-center">Sign up and start learning</h2>
                    <div className="input-style">
                        <input
                            className="w-full  pt-6 h-16 pl-4 focus:outline-0 "
                            type="name"
                            name="name"
                            id="name"
                            placeholder=" "
                        />
                        <label htmlFor="email">Full name</label>
                    </div>
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
                    <div className="input-style">
                        <input
                            className="w-full  pt-6 h-16 pl-4 focus:outline-0 "
                            type="password"
                            name="password"
                            id="password"
                            placeholder=" "
                        />
                        <FaEye className="font-bold text-xl mt-5 mr-4 cursor-pointer" />
                        <label htmlFor="password">Password</label>
                    </div>

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
                    <Link to="/terms" className="mx-1 form-link-style">
                        Terms of Use
                    </Link>
                    and
                    <Link to="/terms/privacy" className="ml-1 form-link-style">
                        Privacy Policy..
                    </Link>
                </p>
                <p className=" w-fit m-auto  pb-4 px-4">
                    Already have an account?
                    <Link to="/join/login-popup" className="ml-1 form-link-style">
                        Log in
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default SignUp
