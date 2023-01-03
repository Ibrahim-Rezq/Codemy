// main page seen on website open -> path : /

import React from 'react'
import { Helmet } from 'react-helmet-async'
import udemyLogo from '../assets/udemy.svg'
import { useSelector, useDispatch } from 'react-redux'
import { selectUser } from '../redux/features/user/userSlice'

export default function Home() {
    const state = useSelector(selectUser)
    const dispatch = useDispatch()
    console.log(state.user)

    return (
        <div className='flex justify-center items-center min-h-screen text-center'>
            <Helmet>
                <title>page1</title>
            </Helmet>
            <div>
                <div className='avatar online'>
                    <div className='w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2'>
                        <img
                            src={udemyLogo}
                            style={{ objectFit: 'contain' }}
                            alt='Udemy Logo'
                        />
                    </div>
                </div>
                <h1 className='m-2'>Udemy{state.user.h}</h1>
                <label htmlFor='my-modal' className='btn'>
                    open modal
                </label>

                <input type='checkbox' id='my-modal' className='modal-toggle' />
                <div className='modal'>
                    <div className='modal-box'>
                        <h3 className='font-bold text-lg'>
                            Congratulations Udemy Clone User!
                        </h3>
                        <p className='py-4 '>
                            You've been selected to be on the Team developing
                            Udemy Clone
                        </p>
                        <div className='modal-action'>
                            <label htmlFor='my-modal' className='btn'>
                                Yay!
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
