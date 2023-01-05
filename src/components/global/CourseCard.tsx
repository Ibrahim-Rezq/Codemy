import React from 'react'

type CourseCardPropsType = {
    imageURL?: string
    title?: string
    instructorName?: string
    totalRatings?: number
    price?: number
    isBestSeller?: boolean
    isDiscount?: boolean
    discount?: number
}

const CourseCard = ({
    imageURL = 'https://reactjs.org/logo-og.png',
    title = 'React Udemy Clone',
    instructorName = 'Saif Mohamed',
    totalRatings = 120000,
    price = 1200,
    isBestSeller = true,
    isDiscount = true,
    discount = 50,
}: CourseCardPropsType) => {
    return (
        <div className="border-2 p-2 max-w-[320px] w-full flex flex-col items-start gap-2">
            <CardImage imageURL={imageURL} />
            <CardTitle title={title} />
            <CardInstructorName instructorName={instructorName} />
            <CardRatings totalRatings={totalRatings} />
            <CardPrice price={price} discount={discount} isDiscount={isDiscount} />
            {isBestSeller ? <CardBestSeller /> : null}
        </div>
    )
}

const CardImage = ({ imageURL }: CourseCardPropsType) => (
    <img src={imageURL} className={'w-full h-[180px] object-cover'} />
)

const CardTitle = ({ title }: CourseCardPropsType) => <h1 className="text-lg font-bold text-black">{title}</h1>

const CardInstructorName = ({ instructorName }: CourseCardPropsType) => (
    <h1 className="text-sm text-gray-400">{instructorName}</h1>
)

const CardRatings = ({ totalRatings }: CourseCardPropsType) => (
    <h1 className="text-sm font-bold text-gray-400">{totalRatings}</h1>
)

const CardPrice = ({ price, isDiscount, discount }: CourseCardPropsType) =>
    isDiscount ? (
        <h1 className="text-md font-bold text-black">
            EGP {price && discount ? (price * discount) / 100 : price}{' '}
            <span className="line-through text-gray-400 text-md font-light">{price}</span>
        </h1>
    ) : (
        <h1 className="text-md font-bold text-black">EGP {price}</h1>
    )

const CardBestSeller = () => <h1 className="bg-orange-500 text-black text-md font-bold p-1">Best Seller</h1>

export default CourseCard
