import { FaEye } from 'react-icons/fa'
import { Link } from 'react-router-dom'
function SignIn() {
    return (
        <div className="sign-in ">
            <div className="container ">
                <form className="form w-96 flex flex-col gap-3 items-center mt-48 m-auto">
                    <h2 className="font-bold text-center">Log in to your Codemy account</h2>
                    <div className="box-auth-format">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="32px" height="32px">
                            <path
                                fill="#FFC107"
                                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                            />
                            <path
                                fill="#FF3D00"
                                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                            />
                            <path
                                fill="#4CAF50"
                                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                            />
                            <path
                                fill="#1976D2"
                                d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                            />
                        </svg>

                        <p>Continue with google</p>
                    </div>
                    <div className="box-auth-format">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            viewBox="0,0,256,256"
                            width="32px"
                            height="32px"
                            fillRule="nonzero"
                        >
                            <g
                                fill="#4267b2"
                                fillRule="nonzero"
                                stroke="none"
                                strokeWidth="1"
                                strokeLinecap="butt"
                                strokeLinejoin="miter"
                                strokeMiterlimit="10"
                                strokeDasharray=""
                                strokeDashoffset="0"
                                fontFamily="none"
                                fontWeight="none"
                                fontSize="none"
                                textAnchor="none"
                            >
                                <g transform="scale(5.12,5.12)">
                                    <path d="M25,3c-12.15,0 -22,9.85 -22,22c0,11.03 8.125,20.137 18.712,21.728v-15.897h-5.443v-5.783h5.443v-3.848c0,-6.371 3.104,-9.168 8.399,-9.168c2.536,0 3.877,0.188 4.512,0.274v5.048h-3.612c-2.248,0 -3.033,2.131 -3.033,4.533v3.161h6.588l-0.894,5.783h-5.694v15.944c10.738,-1.457 19.022,-10.638 19.022,-21.775c0,-12.15 -9.85,-22 -22,-22z"></path>
                                </g>
                            </g>
                        </svg>
                        <p>Continue with facebook</p>
                    </div>
                    <div className="box-auth-format">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="32px" height="32px">
                            <path d="M32.5 44c-1.778 0-3.001-.577-4.08-1.086C27.38 42.424 26.481 42 25 42s-2.38.424-3.42.914C20.501 43.423 19.278 44 17.5 44 13.174 44 6 34.071 6 23.5 6 16.49 10.832 11 17 11c2.027 0 3.259.581 4.346 1.093C22.378 12.58 23.27 13 25 13s2.622-.42 3.654-.907C29.741 11.581 30.973 11 33 11c2.664 0 5.033.982 7.042 2.921.338.326.504.793.447 1.26s-.329.88-.735 1.116C37.438 17.644 36 20.499 36 23.75c0 3.661 2.004 6.809 4.986 7.831.391.134.709.423.879.799.171.375.18.805.023 1.188C39.461 39.515 35.424 44 32.5 44zM25.5 10c-.358 0-.708-.128-.984-.368-.363-.316-.554-.788-.51-1.269.012-.123.303-3.045 2.593-5.382l0 0c2.154-2.2 4.251-2.854 4.482-2.922.489-.142 1.017-.026 1.401.308.385.333.574.839.503 1.344-.034.241-.389 2.436-2.232 4.899-1.973 2.636-4.791 3.322-4.91 3.35C25.729 9.987 25.614 10 25.5 10z" />
                        </svg>
                        <p>Continue with apple</p>
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
                    <button className="btn btn-primary rounded-none	normal-case w-full  text-base	">Log In</button>
                </form>
                <p className="text-center mt-4">
                    or
                    <Link className="form-link-style ml-1" to="/user/forgot-password">
                        Forgot Password
                    </Link>
                </p>
                <p className="text-center mt-8">
                    Don`t have an account?
                    <Link to="/join/signup-popup" className="form-link-style ml-1">
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default SignIn
