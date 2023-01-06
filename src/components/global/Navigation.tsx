import React from 'react'
import udemyLogo from '../../assets/udemy.svg'

// That's will be dynamic from external data soon...
const Categories = [
    { name: 'Developement', href: 'development' },
    { name: 'It & Software', href: 'it&software' },
    { name: 'Health', href: 'health' },
    { name: 'Finance', href: 'finance' },
    { name: 'Office Productivity', href: 'office&productivity' },
    { name: 'Personal Development', href: 'personal-development' },
]

export default function Navigation() {
    return (
        <div>
            <div className="navbar bg-base-100 border-b border-gray-300">
                <div className="flex-1">
                    <div className="w-40">
                        <a href="/">
                            <img src={udemyLogo} className="object-contain  max-h-10 mx-7 my-4" alt="Udemy Logo" />
                        </a>
                    </div>
                    {/* <div className='mx-2'><a href='#'>Categories</a></div> */}
                    <div className="mx-6 w-1/2">
                        <div className="form-control">
                            <input
                                type="text"
                                placeholder="Search for everything"
                                className="rounded-3xl bg-gray-50	 focus:outline-0 input input-bordered border-zinc-700 text-zinc-700"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex-none mr-8">
                    <div className="ml-1">
                        <a href="#" className="hover:text-blue-700 ">
                            My learning
                        </a>
                    </div>
                    {/* Wishlist */}
                    <WhishListDropDown />

                    {/* cart info */}
                    <CartDropDown />

                    {/* notifications info */}
                    <NotificationsDropDown />

                    {/* profile actions */}

                    <UserProfileDropDown />
                </div>
            </div>
            <div className="navbar bg-base-100 shadow">
                <div className="flex-1 container ml-12 ">
                    {Categories.map((category) => (
                        <div>
                            <a className="mr-5" href={category.href}>
                                {category.name}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

const WhishListDropDown = () => (
    <div className="dropdown dropdown-end ml-3 ">
        <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
            </svg>
        </label>
        {/* content of wish */}
        <div
            tabIndex={0}
            className="mt-3 card card-compact dropdown-content bg-base-100 shadow border border-grey-400 w-96 rounded"
        >
            <div className="card-body mt-4 ">
                {/* product 1*/}
                <div className="mb-3">
                    <div className="flex mb-3">
                        <div className="w-20">
                            <img src="https://placeimg.com/80/80/people" />
                        </div>
                        <div className="ml-3">
                            <h3 className="font-bold text-base">
                                <a href="#">Lorem, ipsum dolor sit amet consectetur </a>
                            </h3>
                            <p className="text-gray-400 my-1">Robin jesper</p>
                            <p>
                                {' '}
                                <span className="text-sm font-bold">$ 9.00</span>{' '}
                                <span className="pl-1 line-through text-gray-500">$ 10.00</span>
                            </p>
                        </div>
                    </div>
                    <button className="btn btn-outline rounded w-full">Add to card</button>
                </div>

                {/* actions */}

                <div className="border-t ">
                    <button className="btn btn-dark rounded w-full mt-4">Go to wishlist</button>
                </div>
            </div>
        </div>
    </div>
)

const CartDropDown = () => (
    <div className="dropdown dropdown-end ml-3">
        <label tabIndex={0} className="btn btn-ghost btn-circle">
            <div className="indicator">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                </svg>
                <span className="badge badge-sm badge-primary indicator-item">8</span>
            </div>
        </label>
        {/* content of card */}
        <div
            tabIndex={0}
            className="mt-3  card card-compact  dropdown-content bg-base-100 shadow border border-grey-400 w-96 rounded"
        >
            <div className="card-body mt-4 ">
                {/* product 1*/}
                <div className="flex mb-2">
                    <div className="w-20">
                        <img src="https://placeimg.com/80/80/people" />
                    </div>
                    <div className="ml-3">
                        <h3 className="font-bold text-base">
                            <a href="#">Lorem, ipsum dolor sit amet consectetur </a>
                        </h3>
                        <p className="text-gray-400 my-1">Robin jesper</p>
                        <p>
                            {' '}
                            <span className="text-sm font-bold">$ 9.00</span>{' '}
                            <span className="pl-1 line-through text-gray-500">$ 10.00</span>
                        </p>
                    </div>
                </div>
                {/* actions */}

                <div className="border-t ">
                    <p className="mt-4">
                        <span className="font-bold text-xl">Total : 9.00 $</span>{' '}
                        <span className="pl-1 line-through text-gray-500">$ 10.00</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
)

const NotificationsDropDown = () => (
    <div className="dropdown dropdown-end ml-3">
        <label tabIndex={0} className="btn btn-ghost btn-circle">
            <div className="indicator">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                    />
                </svg>

                <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
        </label>
        <div
            tabIndex={0}
            className="mt-3 card card-compact  dropdown-content bg-base-100 shadow border border-grey-400 w-96 rounded"
        >
            <div className="card-body">
                <div className="flex text-lg">
                    <h1 className="font-bold">Notifications</h1>
                    <h2 className="ml-auto font-bold text-primary">
                        <a href="">Settings</a>
                    </h2>
                </div>
                {/* notifications */}
                <div className=" mt-5">
                    {/* notification 1 */}
                    <div className="flex">
                        <div className="w-20">
                            <img src="https://placeimg.com/80/80/people" className="rounded-full" />
                        </div>
                        <div className="ml-3">
                            <h3 className="font-bold text-base">
                                <a href="#">Lorem, ipsum dolor sit amet consectetur </a>
                            </h3>
                            <p className="text-gray-500 text-sm">15 Hours ago</p>
                        </div>
                    </div>
                </div>

                {/*actions */}
                <div className="mt-4 border-t border-zinc-200 flex justify-between py-2	mb-0">
                    <a href="#" className="font-bold mt-4 ml-2">
                        Mark all as read
                    </a>
                    <a href="#" className="btn btn-outline mt-2 rounded">
                        See all
                    </a>
                </div>
            </div>
        </div>
    </div>
)

const UserProfileDropDown = () => (
    <div className="dropdown dropdown-end ml-3">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
                <img src="https://placeimg.com/80/80/people" />
                <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
        </label>
        <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 border border-grey-400 w-72"
        >
            <li className="border-b border-grey-600">
                <div className="flex-none p-3 ">
                    <div>
                        <img src="https://placeimg.com/80/80/people" className="avatar w-30 rounded-full" />
                    </div>
                    <div>
                        <h1 className="text-lg font-bold">Full Name</h1>
                        <p className="text-gray-500	">email@email.com</p>
                    </div>
                </div>
            </li>
            <li className="border-b border-grey-600">
                <a href="#" className="mt-2">
                    My learning
                </a>
                <a href="#" className="mt-2">
                    My cart
                </a>
                <a href="#" className="mt-2">
                    Wishlist
                </a>
            </li>
            <li className="border-b border-grey-600">
                <a href="#" className="mt-2">
                    Notification
                </a>
                <a href="#" className="mt-2">
                    Messages
                </a>
            </li>
            <li className="border-b border-grey-600">
                <a href="#" className="mt-2">
                    Account settings
                </a>
                <a href="#" className="mt-2">
                    Purchase history
                </a>
            </li>
            <li className="border-b border-grey-600">
                <a href="#" className="mt-2">
                    Edit Profile
                </a>
            </li>
            <li>
                <a href="#" className="mt-2">
                    Logout
                </a>
            </li>
        </ul>
    </div>
)
