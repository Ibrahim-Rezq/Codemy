import {
    FaCheck,
    FaClosedCaptioning,
    FaInfinity,
    FaInfoCircle,
    FaLanguage,
    FaMobileAlt,
    FaPlayCircle,
    FaRegHeart,
    FaRegPlayCircle,
    FaTv,
} from 'react-icons/fa'
import { useParams } from 'react-router-dom'

import { convertToCurrency, formatNumber, minutesToHoursMinutes } from '../utils/helper'
import { course, Lecture } from '../utils/tempData'

type CoursePropsType = {
    onSale?: boolean
    rating?: number
    lectures?: Lecture[]
    time?: number
    ratingStars?: number
    whatYouWellLearn?: { id: string; text: string }[]
}

const OnSale = ({ onSale }: CoursePropsType) => {
    if (onSale) {
        return (
            <>
                <div className="flex items-center">
                    <h2 className="card-title text-3xl pr-3">
                        {convertToCurrency((course.price * (course.discount / 100)) / 100)}
                    </h2>
                    <h4 className="text-lg text-gray-400 line-through">{convertToCurrency(course.price / 100)}</h4>
                </div>
                <p className="text-base font-semibold text-gray-500">{course.discount}% off</p>
            </>
        )
    }
    return <h2 className="card-title text-2xl pr-3">{convertToCurrency(course.price / 100)}</h2>
}

const SideCard = ({ time }: CoursePropsType) => {
    return (
        <div className="card w-80 card-compact bg-base-100 shadow-xl rounded-none">
            <figure className="relative">
                <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
                <button className="absolute text-white flex flex-col items-center justify-center h-full w-full">
                    <FaRegPlayCircle className="w-14 h-14 z-10" />
                    <p className="font-semibold z-10 absolute bottom-2 text-lg">Preview this course</p>
                    <div className="h-full w-full absolute bg-gray-500 opacity-50"></div>
                </button>
            </figure>
            <div className="card-body">
                <OnSale onSale={course.onSale} />
                <div className="card-actions justify-between">
                    <button className="btn btn-primary flex-1 rounded-none">Add to cart</button>
                    <button className="border p-4 hover:bg-gray-100">
                        <FaRegHeart />
                    </button>
                </div>
                <button className="btn btn-block btn-outline rounded-none">Buy Now</button>
                <p className="text-xs text-gray-600 text-center">30-Day Money-Back Guarantee</p>
                <h6 className="font-semibold mt-3">This Course includes:</h6>
                <ul>
                    <li className="flex items-center mb-2">
                        <FaTv className="mr-3" />{' '}
                        <span>{time != null ? Math.floor(time / 60) : null} hours on-demand video</span>
                    </li>
                    <li className="flex items-center mb-2">
                        <FaInfinity className="mr-3 " /> <span>Full lifetime access</span>
                    </li>
                    <li className="flex items-center mb-2">
                        <FaMobileAlt className="mr-3" /> <span>Access on mobile and TV</span>
                    </li>
                    <li className="flex items-center mb-2">
                        <FaClosedCaptioning className="mr-3" /> <span>Closed captions</span>
                    </li>
                </ul>
                <div className="flex justify-between">
                    <p className="text-sm font-semibold">Share</p>
                    <p className="text-sm font-semibold">Gift this course</p>
                    <p className="text-sm font-semibold">Apply Coupon</p>
                </div>
            </div>
        </div>
    )
}

const RatingElement = ({ checked }: { checked: boolean }) => (
    <input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" defaultChecked={checked} disabled />
)

const Rating = ({ rating, ratingStars }: CoursePropsType) => {
    const stars = Math.floor(ratingStars ?? 0)

    return (
        <div className="rating rating-sm mr-3">
            <span className="text-orange-400 font-semibold text-sm mr-1">{ratingStars}</span>
            {[...Array(6)].map((_, i) => {
                if (i != 0) {
                    return <RatingElement key={i} checked={i % stars == 0} />
                }
            })}
            <p className="text-purple-500 ml-3 text-sm">({formatNumber(rating)})</p>
        </div>
    )
}

const WhatYouWellLearn = ({ whatYouWellLearn }: CoursePropsType) => {
    return (
        <div className="border p-5">
            <h1 className="text-2xl font-bold mb-3">What you&apos;ll learn</h1>
            <ul className="text-sm flex flex-wrap">
                {whatYouWellLearn?.map((data) => (
                    <li key={data.id} className="flex items-baseline w-1/2">
                        <FaCheck className="mr-3 min-w-min mb-1" /> {data.text}
                    </li>
                ))}
            </ul>
        </div>
    )
}

const CourseContent = ({ lectures, time }: CoursePropsType) => {
    return (
        <div>
            <h1 className="text-2xl font-bold my-3">Course content</h1>
            <div className="flex justify-between">
                <span className="text-base mb-1">
                    11 sections • {lectures?.length} lectures • {minutesToHoursMinutes(time)} total length
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
                                    <span>{lecture.time}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

const BestSeller = () => (
    <div className="badge bg-amber-300 text-black rounded-none font-semibold text-xs mr-3">Bestseller</div>
)

export default function Course() {
    const { id } = useParams()

    return (
        <>
            <div className="bg-black px-10 py-10">
                <div className="w-2/3 px-10">
                    <div className="text-sm breadcrumbs">
                        <ul className="text-purple-500 font-semibold">
                            <li>
                                <p>Development</p>
                            </li>
                            <li>
                                <p>Web Development</p>
                            </li>
                            <li>
                                <p>Javascript</p>
                            </li>
                        </ul>
                    </div>
                    <h1 className="text-white text-3xl font-bold">{course.title}</h1>
                    <p className="text-white text-lg py-3">{course.description}</p>
                    <div className="flex items-center mb-2">
                        {course.isBestSeller ? <BestSeller /> : null}

                        <Rating rating={course.rating} ratingStars={course.starsRating} />

                        <span className="text-white text-sm">{formatNumber(course.students)} students</span>
                    </div>
                    <div className="text-white text-sm mb-3">
                        Created by <p className="text-purple-500 underline">{course.instructor}</p>
                    </div>

                    <div className="flex text-white text-sm">
                        <div className="flex items-center">
                            <FaInfoCircle />
                            <span className="pl-2">Last Updated {course.updated_at}</span>
                        </div>
                        <div className="flex items-center ml-5">
                            <FaLanguage />
                            <span className="pl-2">English</span>
                        </div>
                        <div className="flex items-center ml-5">
                            <FaClosedCaptioning />
                            <span className="pl-2">
                                English [CC], Arabic[Auto], <p className="text-purple-500 underline">13 more</p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex mt-5">
                <div className="w-2/3 px-14">
                    <WhatYouWellLearn whatYouWellLearn={course.whatYouWellLearn} />

                    <div className="border p-5 mt-6">
                        <h3 className="font-bold">Top companies offer this course to their employees</h3>
                        <p className="text-sm">
                            This course was selected for our collection of top-rated courses trusted by businesses
                            worldwide. <p className="underline text-purple-500">Learn more</p>
                        </p>
                    </div>

                    <CourseContent lectures={course.lectures} time={course.time} />

                    <div>
                        <h1 className="text-2xl font-bold my-3">Requirements</h1>
                        <ul className="list-disc list-inside">
                            {course.requirements.map((requirement, i) => (
                                <li key={i}>{requirement}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="w-1/3">
                    <SideCard time={course.time} />
                </div>
            </div>
        </>
    )
}
