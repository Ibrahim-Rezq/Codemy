import { useState } from 'react'
import { Link } from 'react-router-dom'

import { useUser } from '../../utils/user/useUser'
import InputField from '../global/InputField'
import Container from '../UI/Container'

const SignUp = () => {
    const [formValue, setFormValue] = useState({ name: '', email: '', password: '' })
    const [formErrors, setFormErrors] = useState({ name: '', email: '', password: '' })
    const { SignUp: signUpFunc } = useUser()
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        console.log(e.target.value)
        const { name, value } = e.target
        setFormValue({ ...formValue, [name]: value })
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()
        const validation = validate(formValue)
        if (!validation.name && !validation.email && !validation.password) {
            signUpFunc(formValue)
        } else {
            setFormErrors(validate(formValue))
        }
    }

    const validate = (values: { name: string; email: string; password: string }) => {
        const errors = { name: '', email: '', password: '' }
        if (!values.name) {
            errors.name = 'user name is required'
        }
        if (!values.email) {
            errors.email = 'email is required'
        }
        if (!values.password) {
            errors.password = 'password  is required'
        }
        return errors
    }

    return (
        <div className="sign-up">
            <Container>
                <form className="form w-96 flex flex-col gap-3 items-center mt-16 mb-8 m-auto " onSubmit={handleSubmit}>
                    <h2 className="font-bold text-center">Sign up and start learning</h2>
                    <InputField
                        type={'text'}
                        name="name"
                        value={formValue.name}
                        onChange={handleChange}
                        inputlabel="full name"
                    />
                    <p>{formErrors?.name ?? ''}</p>
                    <InputField
                        type={'email'}
                        name="email"
                        value={formValue.email}
                        onChange={handleChange}
                        inputlabel="Email"
                    />
                    <p>{formErrors?.email ?? ''}</p>
                    <InputField
                        type={'password'}
                        name="password"
                        value={formValue.password}
                        onChange={handleChange}
                        inputlabel="Password"
                    />
                    <p>{formErrors?.password ?? ''}</p>
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

                    <button className="btn btn-primary rounded-none	 w-full normal-case text-base" type="submit">
                        Sign Up
                    </button>
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
