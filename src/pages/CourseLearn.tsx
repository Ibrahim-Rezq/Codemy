import { BsFillStarFill, BsSearch } from "react-icons/bs";
import { GiTrophyCup } from "react-icons/gi";



const LeaveRating = () =>{
    return(
       <div>
                 <input type="checkbox" id="my-modal" className="modal-toggle" />
                <div className="modal">

                    <div className="modal-box">
                    <label htmlFor="my-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                          <div className="text-center ">
                             <h2 className="text-xl font-bold">How would you rate this course ?</h2>
                             <h3 className="text-lg font-semibold my-5">
                                Good
                             </h3>
                                <div className="rating block mb-3">
                                    <input type="radio" name="rating-1" className="mask mask-star bg-amber-500" />
                                    <input type="radio" name="rating-1" className="mask mask-star  bg-amber-500"  />
                                    <input type="radio" name="rating-1" className="mask mask-star  bg-amber-500" />
                                    <input type="radio" name="rating-1" className="mask mask-star  bg-amber-500" />
                                    <input type="radio" name="rating-1" className="mask mask-star  bg-amber-500" />
                                </div>
                                <textarea className="textarea textarea-primary w-full" placeholder="Tell us about your own personal experience taking this course. Was it a good match for you?"></textarea>
                                <div className="modal-action">
                                     <label htmlFor="my-modal" className="btn">Save and Continue</label>
                                  </div>

                          </div>
                   
                    </div>

                </div>
        </div>
    );
}


const SearchIncourse= ()=>{
       return(
         <div id="search" className="mt-10">
                {/* search input */}
                <div className="text-center">
                     <input type="text" placeholder="Search course content " className="input w-1/2 input-bordered border-black	" />
                        <button className="btn btn-dark ml-2">
                              <BsSearch/>
                        </button>
                        <div className="my-7">
                            <h1 className="text-2xl font-bold">
                                Start a new search
                            </h1>
                            <p>
                                 To find lectures or resources
                            </p>
                        </div>
                </div>
                <div>
                    <p className="text-lg">Results for "s" (87 lectures)</p>
                </div>
         </div>
       )
}

const Reviews = ()=>{}

const CourseContent = ()=>{

}

const Notes = ()=>{}
const Overview = ()=>{}

function CourseLearn() {
    return ( 
        <div className="container  mx-auto mt-3">
           <div>
                  <div className="flex py-3">
                        <h1 className="w-3/5 font-bold text-2xl">The title of the course</h1>
                        <div className="w-2/5 flex  justify-end text-slate-500 font-light pt-2">
                            <label className="mr-6 flex mt-1 cursor-pointer"  htmlFor="my-modal"> <BsFillStarFill className="mr-1 mt-1"/> Leaving rating</label>
                            
                            <div className="tooltip tooltip-bottom cursor-pointer" data-tip="1 of 118 complete.
                                Finish course to get your certificate">

                                <p className="mr-3 flex">
                                    <div className="radial-progress mr-2" style={{"--value":"70","--size":"2rem"}  as React.CSSProperties}><GiTrophyCup/></div>
                                    <p className="mt-1">  Your progress</p>

                                </p>

                            </div>

                        </div>
                  </div>
                  {/* video */}

                  <div className="mt-2 h-96">
                        <video className="w-full h-full"  controls>
                            <source src="" type="video/mp4"/>
                        </video>
                        <h3 className="ml-4 font-bold text-lg my-4">
                            Title of the video
                        </h3>
                  </div>

                  {/* tabs */}
                 
           
                    <div className="tabs mt-12 justify-center">
                        <a className="tab tab-lg tab-bordered tab-active mr-2" href="./:id#search"><BsSearch/></a> 
                        <a className="tab  tab-lg tab-bordered  mr-2" href="./:id#overview">Overview</a> 
                        <a className="tab tab-lg tab-bordered  mr-2"  href="./:id#content">Course Content</a> 
                        <a className="tab tab-lg tab-bordered  mr-2"  href="./:id#notes">Q & A</a>

                        <a className="tab tab-lg tab-bordered  mr-2"  href="./:id#notes">Notes</a>
                        <a className="tab tab-lg tab-bordered  mr-2"  href="./:id#reviews">Reviews</a>
                    </div>
           

                <div className=" my-6" >
                    <SearchIncourse/>
     
                 </div> 
           </div>

           <LeaveRating/>
        
        </div>
     );
}

export default CourseLearn;