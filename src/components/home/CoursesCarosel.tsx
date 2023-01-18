import { Course } from '../../utils/tempData'
import CourseCard from '../global/CourseCard'
import PageTitle from '../UI/PageTitle'

const CoursesCarosel = ({ courses }: { courses: Course[] }) => {
    return (
        <>
            <PageTitle title={'It & G'} />
            <div className="grid grid-cols-5 gap-2 my-10">
                {courses.map((course) => {
                    return <CourseCard key={course.id} course={course} />
                })}
            </div>
        </>
    )
}

export default CoursesCarosel
