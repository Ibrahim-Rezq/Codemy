// the navigation bar for the app
import udemyLogo from '../../assets/udemy.svg'

export default function Navigation() {
    return (<div className="navbar bg-base-100">
                <div className="flex-1">
                     <div className='w-40'>
                        <a href="/" >
                            <img
                                    src={udemyLogo}
                                    className="object-contain  max-h-10 mx-7 my-4"
                                    alt='Udemy Logo'
                                />
                        </a>
                     </div>
                     <div className='mx-2'><a href='#'>Categories</a></div>
                     <div className='mx-6 w-1/2'> 
                            <div class="form-control">
                              <input type="text" placeholder="Search for everything" class="rounded-3xl bg-gray-50	 focus:outline-0 input input-bordered border-zinc-700 text-zinc-700" />
                          </div>
                     </div>
                </div>
                <div className="flex-none mr-8">
                    <div className='ml-1'><a href='#'>My learning</a></div>
                    <div class="dropdown dropdown-end ml-3">
                         <label tabindex="0" class="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                            </svg>
                          </label>
                        <div tabindex="0" class="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                            <div class="card-body">
                               <p>
                                ksksksksd kdskdskds
                               </p>
                            </div>
                       </div>
                    </div>


                    <div class="dropdown dropdown-end ml-3">
                         <label tabindex="0" class="btn btn-ghost btn-circle">
                            <div class="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                            </svg>
                                    <span class="badge badge-sm badge-primary indicator-item">8</span>
                            </div>
                          </label>
                        <div tabindex="0" class="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                            <div class="card-body">
                                <span class="font-bold text-lg">8 Items</span>
                                <span class="text-info">Subtotal: $999</span>
                                <div class="card-actions">
                                    <button class="btn btn-primary btn-block">View cart</button>
                                </div>
                            </div>
                       </div>
                    </div>
                    <button class="btn btn-ghost btn-circle ml-3">
                        <div class="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
</svg>

                            <span class="badge badge-xs badge-primary indicator-item"></span>
                        </div>
                     </button>
                     <div class="dropdown dropdown-end ml-3">
                        <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                            <div class="w-10 rounded-full">
                            <img src="https://placeimg.com/80/80/people" />
                            </div>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                            <a class="justify-between">
                                Profile
                                <span class="badge">New</span>
                            </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                      </div>
                 </div>
            </div>)
}
