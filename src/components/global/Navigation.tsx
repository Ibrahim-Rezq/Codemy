import React, { Children } from 'react'
import { BsBellFill, BsCart, BsFillSuitHeartFill, BsHeart } from 'react-icons/bs'

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
                                className="rounded-3xl bg-gray-50 focus:outline-0 input input-bordered border-zinc-700 text-zinc-700"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex-none mr-8">
                    <div className="ml-1">
                        <a href="/" className="navbarLinkAnimate">
                            My learning
                        </a>
                    </div>
                    <WhishListDropDown />
                    <CartDropDown />
                    {/* <NotificationsDropDown /> */}
                    <UserProfileDropDown />
                </div>
            </div>
            <div className="navbar bg-base-100 shadow">
                <div className="flex-1 container ml-12 ">
                    {Categories.map((category) => (
                        <div key={category.name}>
                            <a className="navbarLinkAnimate mr-5" href={category.href}>
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
    <Dropdown icon={BsHeart}>
        <button
            tabIndex={0}
            className="mt-3 card card-compact dropdown-content bg-base-100 shadow border border-grey-400 w-96 rounded"
        >
            <div className="card-body mt-4 ">
                <div className="mb-3">
                    <div className="flex mb-3">
                        <div className="w-20">
                            <img src="https://placeimg.com/80/80/people" alt="Course name" />
                        </div>
                        <div className="ml-3">
                            <h3 className="font-bold text-base">
                                <a className="navbarLinkAnimate" href="/">
                                    Lorem, ipsum dolor sit amet consectetur{' '}
                                </a>
                            </h3>
                            <p className="text-gray-400 my-1">Robin jesper</p>
                            <p>
                                {' '}
                                <span className="text-sm font-bold">$ 9.00</span>{' '}
                                <span className="pl-1 line-through text-gray-500">$ 10.00</span>
                            </p>
                        </div>
                    </div>
                    <button className="btn bg-white active:bg-white hover:bg-white text-stone-800 rounded w-full">
                        Add to card
                    </button>
                </div>
                <div className="border-t ">
                    <button className="btn btn-dark rounded w-full mt-4">Go to wishlist</button>
                </div>
            </div>
        </button>
    </Dropdown>
)

const CartDropDown = () => (
    <Dropdown icon={BsCart}>
        <button
            tabIndex={0}
            className="mt-3  card card-compact  dropdown-content bg-base-100 shadow border border-grey-400 w-96 rounded"
        >
            <div className="card-body mt-4 ">
                <div className="flex mb-2">
                    <div className="w-20">
                        <img src="https://placeimg.com/80/80/people" alt="course Cart Card" />
                    </div>
                    <div className="ml-3">
                        <h3 className="font-bold text-base">
                            <a className="navbarLinkAnimate" href="/">
                                Lorem, ipsum dolor sit amet consectetur{' '}
                            </a>
                        </h3>
                        <p className="text-gray-400 my-1">Robin jesper</p>
                        <p>
                            {' '}
                            <span className="text-sm font-bold">$ 9.00</span>{' '}
                            <span className="pl-1 line-through text-gray-500">$ 10.00</span>
                        </p>
                    </div>
                </div>
                <div className="border-t ">
                    <p className="mt-4">
                        <span className="font-bold text-xl">Total : 9.00 $</span>{' '}
                        <span className="pl-1 line-through text-gray-500">$ 10.00</span>
                    </p>
                </div>
            </div>
        </button>
    </Dropdown>
)

// const NotificationsDropDown = () => (
//     <Dropdown {...{ icon: BsBellFill }}>
//         <button
//             tabIndex={0}
//             className="mt-3 card card-compact  dropdown-content bg-base-100 shadow border border-grey-400 w-96 rounded"
//         >
//             <div className="card-body">
//                 <div className="flex text-lg">
//                     <h1 className="font-bold">Notifications</h1>
//                     <h2 className="ml-auto font-bold text-primary">
//                         <a href="/">Settings</a>
//                     </h2>
//                 </div>
//                 {/* notifications */}
//                 <div className=" mt-5">
//                     {/* notification 1 */}
//                     <div className="flex">
//                         <div className="w-20">
//                             <img src="https://placeimg.com/80/80/people" alt="notification" className="rounded-full" />
//                         </div>
//                         <div className="ml-3">
//                             <h3 className="font-bold text-base">
//                                 <a className="navbarLinkAnimate" href="/">
//                                     Lorem, ipsum dolor sit amet consectetur{' '}
//                                 </a>
//                             </h3>
//                             <p className="text-gray-500 text-sm">15 Hours ago</p>
//                         </div>
//                     </div>
//                 </div>

//                 {/*actions */}
//                 <div className="mt-4 border-t border-zinc-200 flex justify-between py-2	mb-0">
//                     <a href="/" className="font-bold mt-4 ml-2 navbarLinkAnimate">
//                         Mark all as read
//                     </a>
//                     <a href="/" className="btn btn-outline mt-2 rounded">
//                         See all
//                     </a>
//                 </div>
//             </div>
//         </button>
//     </Dropdown>
// )

const UserProfileDropDown = () => (
    <Dropdown>
        <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 border border-grey-400 w-72">
            <li className="border-b border-grey-600">
                <div className="flex-none p-3 ">
                    <div>
                        <img
                            src="https://placeimg.com/80/80/people"
                            alt="for now"
                            className="avatar w-30 rounded-full"
                        />
                    </div>
                    <div>
                        <h1 className="text-lg font-bold">Full Name</h1>
                        <p className="text-gray-500	">email@email.com</p>
                    </div>
                </div>
            </li>
            <li className="border-b border-grey-600">
                {['My Learning', 'My Cart', 'Wishlist'].map((item) => (
                    <a key={item} href="/" className="mt-2">
                        {item}
                    </a>
                ))}
            </li>
            <li className="border-b border-grey-600">
                {['Notifications', 'Messages'].map((item) => (
                    <a key={item} href="/" className="mt-2">
                        {item}
                    </a>
                ))}
            </li>
            <li className="border-b border-grey-600">
                {['Account Settings', 'Payment Methods'].map((item) => (
                    <a key={item} href="/" className="mt-2">
                        {item}
                    </a>
                ))}
            </li>
            <li className="border-b border-grey-600">
                {['Edit Profile'].map((item) => (
                    <a key={item} href="/" className="mt-2">
                        {item}
                    </a>
                ))}
            </li>
            <li>
                {['Logout'].map((item) => (
                    <a key={item} href="/" className="mt-2">
                        {item}
                    </a>
                ))}
            </li>
        </ul>
    </Dropdown>
)

const Dropdown = ({ children, icon }: any) => {
    const Icon = icon
    return (
        <div className="dropdown dropdown-end ml-3">
            <button tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full ">
                    <p className="flex justify-center items-center w-full h-full text-lg">
                        {Icon !== undefined ? <Icon /> : <img src="https://placeimg.com/80/80/people" alt="for now" />}
                    </p>
                </div>
            </button>
            {Children.map(children, (child) => (
                <>{child}</>
            ))}
        </div>
    )
}
