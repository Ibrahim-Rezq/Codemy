import { useState } from 'react'
import { BsFacebook } from 'react-icons/bs'
import { BsApple } from 'react-icons/bs'
import { FcGoogle } from 'react-icons/fc'
import { Link } from 'react-router-dom'

import InputField from '../global/InputField'
import Container from '../UI/Container'

const authBoxArr = [
    { icon: FcGoogle, type: 'google' },
    { icon: BsFacebook, type: 'facebook', fill: '#1877f2' },
    { icon: BsApple, type: 'apple' },
]

function SignIn() {
    const [passwordShown, setPasswordShown] = useState(false)
    return (
        <div className="sign-in ">
            <Container>
                <form className="form w-96 flex flex-col gap-3 items-center mt-16 m-auto">
                    <h2 className="font-bold text-center">Log in to your Codemy account</h2>
                    {authBoxArr.map((box) => (
                        <div
                            key={box.type}
                            className="border border-black font-bold items-center flex gap-3 py-2 pl-4 h-fit justify-start w-full cursor-pointer hover:bg-slate-100"
                        >
                            <box.icon className="text-5xl" fill={box.fill} />
                            <p>Continue with {box.type}</p>
                        </div>
                    ))}
                    <InputField type={'email'}  />
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
            </Container>
        </div>
    )
}
export default SignIn
