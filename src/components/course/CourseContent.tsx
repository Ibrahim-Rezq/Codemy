import { FaPlayCircle } from 'react-icons/fa';
import { minutesToHoursMinutes } from '../../utils/helper';

const CourseContent = ({ lectures, time }: {lectures? : Lecture[], time?: number}) => {
    return (
        <div>
            <h1 className="text-2xl font-bold my-3">Course content</h1>
            <div className="flex justify-between">
                <span className="text-base mb-1">
                    0 sections • {lectures?.length} lectures • {minutesToHoursMinutes(time)} total length
                </span>
                <button type="button" className="text-base font-semibold text-purple-700">
                    Expand all sections
                </button>
            </div>
            <div>
                <div className="collapse collapse-arrow border border-base-300 bg-base-100">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title text-lg font-semibold bg-gray-100 text-black">
                        <div className="flex justify-between items-center">
                            <span>Welcome</span>
                            <span className="text-sm font-normal">3 Lectures. 45min</span>
                        </div>
                    </div>
                    <div className="collapse-content">
                        <ul className="pt-3 text-sm text-gray-700">
                            {lectures?.map((lecture) => (
                                <li key={lecture.id} className="flex justify-between mb-3">
                                    <div className="flex items-center">
                                        <FaPlayCircle className="mr-3" /> <span>{lecture.name}</span>
                                    </div>
                                    <span>{minutesToHoursMinutes(lecture.time, true)}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseContent;