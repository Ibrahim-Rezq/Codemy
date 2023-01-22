import { objectTraps } from 'immer/dist/internal'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { register, login } from '../../redux/features/user/userSlice'
import InputField from '../global/InputField'
import Container from '../UI/Container'
import { useDispatch } from 'react-redux'

const SignUp = (props: any) => {
    // retired all vaule in input field in object (searche controlle form react)
    // dispatche for action for register  ->active preload -> sent to

    const [formValue, setFormValue] = useState({ name: '', email: '', password: '' })
    const [formErrors, setFormErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)
    const dispatch = useDispatch()
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        console.log(e.target.value)

        const { name, value } = e.target
        setFormValue({ ...formValue, [name]: value })
    }

    const handleSubmit: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        e.preventDefault()

        if (Object.keys(validate(formValue)).length === 0) {
            dispatch(register(formValue))
        } else {
            setFormErrors(validate(formValue))
        }
    }

    const validate = (values: { name: string; email: string; password: string }) => {
        const errors = {}
        const regex = /^[^s@]+@[^\s@]+\.[^\s@]{2,}$/i
        if (!values.name) {
            errors.name = 'user name is required'
        }
        if (!values.email) {
            errors.email = 'email is required'
        } else if (!regex.test(values.email)) {
            errors.email = 'this is not a valide email'
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
                    <InputField type={'text'} value={formValue.name} onChange={handleChange} label="full name" />
                    <p>{formErrors.name}</p>
                    <InputField type={'email'} value={formValue.email} onChange={handleChange} label="Email" />
                    <p>{formErrors.email}</p>
                    <InputField type={'password'} value={formValue.password} onChange={handleChange} label="Password" />
                    <p>{formErrors.password}</p>
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
