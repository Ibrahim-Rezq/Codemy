import { useState } from 'react'
import { FaClosedCaptioning, FaGlobe, FaInfoCircle } from 'react-icons/fa'
import { useParams } from 'react-router-dom'

import { Alert, Categories, CourseContent, Loading, Rating, SideCard, Subtitles, WhatYouWellLearn } from '../components'
import { useGetCourseQuery } from '../redux/features/course/courseApiSlice'
import { formatNumber } from '../utils/helper'

const BestSeller = () => (
    <div className="badge bg-amber-300 text-black rounded-none font-semibold text-xs mr-3">Bestseller</div>
)

export default function Course() {
    const [showAllSubtitles, setShowAllSubtitles] = useState(false)
    const { slug } = useParams()
    const { data: course, isFetching, isError, error } = useGetCourseQuery(slug ?? '')

    if (isFetching) return <Loading />
    if (isError) return <Alert message={error.message} />

    return (
        <>
            <div className="bg-black px-10 py-10">
                <div className="w-2/3 px-10">
                    <Categories categories={course?.categories} />
                    <h1 className="text-white text-3xl font-bold">{course?.title}</h1>
                    <p className="text-white text-lg py-3">{course?.description}</p>
                    <div className="flex items-center mb-2">
                        {course?.isBestSeller ? <BestSeller /> : null}
                        <Rating rating={course?.rating} ratingStars={course?.starsRating} />
                        <span className="text-white text-sm">{formatNumber(course?.students)} students</span>
                    </div>
                    <div className="text-white text-sm mb-3">
                        Created by <span className="text-purple-400 underline">{course?.instructor}</span>
                    </div>

                    <div className="flex text-white text-sm">
                        <div className="flex items-center">
                            <FaInfoCircle />
                            <span className="pl-2">
                                Last Updated{' '}
                                {course?.updated_at != null
                                    ? new Date(course.updated_at).toLocaleString('en-US', {
                                          month: 'numeric',
                                          year: 'numeric',
                                      })
                                    : null}
                            </span>
                        </div>
                        <div className="flex items-center ml-5">
                            <FaGlobe />
                            <span className="pl-2">{course?.language}</span>
                        </div>
                        {showAllSubtitles == false && (
                            <Subtitles subtitle={course?.subtitle} showSubtitles={setShowAllSubtitles} />
                        )}
                    </div>
                    {showAllSubtitles && (
                        <div className="flex items-center text-white">
                            <FaClosedCaptioning />
                            <span className="pl-2">{course?.subtitle.join(', ')}</span>
                        </div>
                    )}
                </div>
            </div>
            <div className="flex mt-5">
                <div className="w-2/3 px-14">
                    <WhatYouWellLearn whatYouWellLearn={course?.whatYouWellLearn} />
                    <div className="border p-5 mt-6">
                        <h3 className="font-bold">Top companies offer this course to their employees</h3>
                        <p className="text-sm">
                            This course was selected for our collection of top-rated courses trusted by businesses
                            worldwide. <p className="underline text-purple-400">Learn more</p>
                        </p>
                    </div>
                    <CourseContent lectures={course?.lectures} time={course?.time} />
                    <div>
                        <h1 className="text-2xl font-bold my-3">Requirements</h1>
                        <ul className="list-disc list-inside">
                            {course?.requirements.map((requirement: string, index: number) => (
                                <li key={index}>{requirement}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="w-1/3">
                    <SideCard
                        time={course?.time}
                        onSale={course?.onSale}
                        price={course?.price}
                        discount={course?.discount}
                        imageURL={course?.imageURL}
                    />
                </div>
            </div>
        </>
    )
}
