import { BsFillStarFill } from "react-icons/bs";
import { GiTrophyCup } from "react-icons/gi";
function CourseLearn() {
    return ( 
        <div className="container flex ml-auto ">
           <div className="w-4/5 border">
                  <div className="flex py-3">
                        <h1 className="w-3/5 font-bold text-2xl">The title of the course</h1>
                        <div className="w-2/5 flex border justify-end text-slate-500 font-light pt-2">
                            <p className="mr-6 flex mt-1"><BsFillStarFill className="mr-1 mt-1"/> Leaving rating</p>

                            <p className="mr-3 flex">
                              <div className="radial-progress mr-2" style={{"--value":"70","--size":"2rem"}  as React.CSSProperties}><GiTrophyCup/></div>

                              <p className="mt-1">  Your progress</p>
                            </p>

                        </div>
                  </div>
                  {/* video */}
                  <div className="mt-2 h-96">
                        <video className="w-full h-full"  controls>
                            <source src="" type="video/mp4"/>
                        </video>
                  </div>
                  <p>sjsjsdjjjsd</p>
                  <p>sjsjsdjjjsd</p>
                  <p>sjsjsdjjjsd</p>
                  <p>sjsjsdjjjsd</p>
                  <p>sjsjsdjjjsd</p>
                  <p>sjsjsdjjjsd</p>
                  <p>sjsjsdjjjsd</p>
                  <p>sjsjsdjjjsd</p>
                  <p>sjsjsdjjjsd</p>
                  <p>sjsjsdjjjsd</p>
                  <p>sjsjsdjjjsd</p>
                  <p>sjsjsdjjjsd</p>
                  <p>sjsjsdjjjsd</p>
                  <p>sjsjsdjjjsd</p>
                  <p>sjsjsdjjjsd</p>
                  <p>sjsjsdjjjsd</p>
                  <p>sjsjsdjjjsd</p>
           </div>
           <div className="w-1/6 border ml-6 sticky right-0  top-0" >
            
                Course content
         
           </div>
        </div>
     );
}

export default CourseLearn;