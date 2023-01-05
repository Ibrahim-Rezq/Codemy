// main page seen on website open -> path : /

import React from 'react'
// import udemyLogo from '../assets/udemy.svg';
import { useDispatch, useSelector } from 'react-redux'

import { SEOHead } from '../components'
import { selectUser } from '../redux/features/user/userSlice'
export default function Home() {
    const state = useSelector(selectUser)
    const dispatch = useDispatch()

    return (
        <div className="flex justify-center items-center min-h-screen text-center">
            <SEOHead title="Main" />
            <div>
                <div className="avatar online">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={'udemyLogo'} style={{ objectFit: 'contain' }} alt="Udemy Logo" />
                    </div>
                </div>
                <h1 className="m-2">{state.user.name}</h1>
                <label htmlFor="my-modal" className="btn">
                    open modal
                </label>
                <input type="checkbox" id="my-modal" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Congratulations Udemy Clone {state.user.name}!</h3>
                        <p className="py-4 ">You have been selected to be on the Team developing Udemy Clone</p>
                        <div className="modal-action">
                            <label htmlFor="my-modal" className="btn">
                                Yay!
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
