import { Children, useEffect } from 'react'
import { IconType } from 'react-icons'
import { BsCart, BsHeart } from 'react-icons/bs'
import { useSelector } from 'react-redux'
import { Link, Navigate, useNavigate } from 'react-router-dom'

import udemyLogo from '../../assets/udemy.svg'
import { selectUser } from '../../redux/features/user/userSlice'
import { User } from '../../utils/user/userTypes'
import Container from '../UI/Container'

const categories = [
    { name: 'Developement', href: 'development' },
    { name: 'It & Software', href: 'it&software' },
    { name: 'Health', href: 'health' },
    { name: 'Finance', href: 'finance' },
    { name: 'Office Productivity', href: 'office&productivity' },
    { name: 'Personal Development', href: 'personal-development' },
]
const profileData = [
    [
        { name: 'My Learning', path: '/my-learning' },
        { name: 'My Cart', path: '/cart' },
        { name: 'Wishlist', path: '' },
    ],
    [
        { name: 'Notifications', path: '' },
        { name: 'Messages', path: '' },
    ],
    [
        { name: 'Account Settings', path: '' },
        { name: 'PaymMethodsent ', path: '' },
    ],
    [{ name: 'Edit Profile', path: '/user/edit' }],
    [{ name: 'Logout', path: '' }],
]

export default function Navigation() {
    const navigate = useNavigate()

    const state = useSelector(selectUser)
    useEffect(() => {
        if (state.user.uid) navigate('/')
    }, [state])

    return (
        <div>
            <Container wide>
                <div className="navbar bg-base-100 border-b border-gray-300">
                    <div className="flex-1">
                        <div className="w-[10rem]">
                            <NavigationLink path={'/'}>
                                <img src={udemyLogo} className="object-contain  max-h-10 mx-7 my-4" alt="Udemy Logo" />
                            </NavigationLink>
                        </div>
                        <div className="mx-6 w-full">
                            <div className="form-control">
                                <input
                                    type="text"
                                    placeholder="Search for everything"
                                    className="rounded-3xl bg-gray-50 focus:outline-0 input input-bordered border-zinc-700 text-zinc-700"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mr-8">
                        {state.user.uid && (
                            <div className="ml-1">
                                <NavigationLink path={'/'}>My learning</NavigationLink>
                            </div>
                        )}
                        {state.user.uid && <WhishListDropDown />}
                        <CartDropDown />
                        {/* <NotificationsDropDown /> */}
                        {state.user.uid && <UserProfileDropDown userData={state.user} />}
                        {!state.user.uid && (
                            <>
                                <NavigationLink path={'/join/login-popup'}>Login </NavigationLink>{' '}
                                <NavigationLink path={'/join/signup-popup'}>Signup </NavigationLink>
                            </>
                        )}
                    </div>
                </div>
                <div className="navbar bg-base-100 shadow p-0">
                    <div className="mx-12 flex justify-evenly w-full">
                        {categories.map((category) => (
                            <div key={category.name}>
                                <NavigationLink path={category.href}>{category.name} </NavigationLink>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
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
                            <img src="https://placeimg.com/80/80/tech" alt="Course name" />
                        </div>
                        <div className="ml-3">
                            <h3 className="font-bold text-base">
                                <NavigationLink path={'/'}>Lorem, ipsum dolor sit amet consectetur</NavigationLink>
                            </h3>
                            <p className="text-gray-400 my-1">Robin jesper</p>
                            <p>
                                {' '}
                                <span className="text-sm font-bold">$ 9.00</span>{' '}
                                <span className="pl-1 line-through text-gray-500">$ 10.00</span>
                            </p>
                        </div>
                    </div>
                    <a
                        role="button"
                        className="btn bg-white active:bg-white hover:bg-white text-stone-800 rounded w-full"
                    >
                        Add to card
                    </a>
                </div>
                <div className="border-t ">
                    <Link to="/cart" className="btn btn-dark rounded w-full mt-4">
                        Go to wishlist
                    </Link>
                </div>
            </div>
        </button>
    </Dropdown>
)

const CartDropDown = () => (
    <Dropdown icon={BsCart}>
        <button
            tabIndex={0}
            className="mt-3 card card-compact dropdown-content bg-base-100 shadow border border-grey-400 w-96 rounded"
        >
            <div className="card-body mt-4 ">
                <div className="flex mb-2">
                    <div className="w-20">
                        <img src="https://placeimg.com/80/80/tech" alt="course Cart Card" />
                    </div>
                    <div className="ml-3">
                        <h3 className="font-bold text-base">
                            <NavigationLink path={'/cart'}>Lorem, ipsum dolor sit amet consectetur</NavigationLink>
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
                <div className="border-t ">
                    <Link to="/cart" className="btn btn-dark rounded w-full mt-4">
                        Go to Cart
                    </Link>
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
//                             <img src="https://placeimg.com/80/80/tech" alt="notification" className="rounded-full" />
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

const UserProfileDropDown = ({ userData }: { userData: User }) => {
    return (
        <Dropdown imgUrl={userData.photoURL ?? ''}>
            <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 border border-grey-400 w-72">
                <li className="border-b border-grey-600">
                    <div className="flex-none p-3 ">
                        <div>
                            <img
                                src={userData.photoURL ?? ''}
                                alt="for now"
                                style={{ width: 80, height: 80, objectFit: 'cover' }}
                                className="avatar w-30 rounded-full"
                            />
                        </div>
                        <div>
                            <h1 className="text-lg font-bold">{userData.displayName}</h1>
                            <p className="text-gray-500	">{userData.email}</p>
                        </div>
                    </div>
                </li>
                {profileData.map((section) => {
                    return (
                        <li key={String(section)} className="border-b border-grey-600">
                            {section.map((item) => (
                                <NavigationLink key={item.name} path={item.path}>
                                    {item.name}
                                </NavigationLink>
                            ))}
                        </li>
                    )
                })}
            </ul>
        </Dropdown>
    )
}

const Dropdown = ({
    children,
    icon,
    imgUrl,
}: React.HTMLAttributes<HTMLElement> & { icon?: IconType; imgUrl?: string }) => {
    const Icon = icon
    return (
        <div className="dropdown dropdown-end ml-3">
            <button tabIndex={0} className="peer btn border-2 btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full ">
                    <p className="flex justify-center items-center w-full h-full text-lg">
                        {Icon !== undefined ? <Icon /> : <img src={imgUrl} alt="for now" />}
                    </p>
                </div>
            </button>
            {Children.map(children, (child) => (
                <>{child}</>
            ))}
        </div>
    )
}
const NavigationLink = ({ path, children }: React.HTMLAttributes<HTMLElement> & { path: string }) => {
    return (
        <Link className="hover:text-violet-500 transition-all duration-200 bg-transparent" to={path}>
            {Children.map(children, (child) => (
                <>{child}</>
            ))}
        </Link>
    )
}
