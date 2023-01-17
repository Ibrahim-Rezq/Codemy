import { convertToCurrency } from '../../utils/helper'
import { Course } from '../../utils/tempData'

type CourseCardPropsType = {
    course: Course
    wide?: boolean
}

const CardImage = ({ imageURL, title }: { imageURL: string; title: string }) => (
    <img src={imageURL} alt={title} className={'w-full h-[130px] object-cover'} />
)

const CardTitle = ({ title }: { title: string }) => <h1 className="text-lg font-bold text-black capitalize">{title}</h1>

const CardInstructorName = ({ instructorName }: { instructorName: string }) => (
    <h1 className="text-md text-gray-400 font-normal capitalize">{instructorName}</h1>
)

const Stars = ({ rating }: { rating: number }) => {
    return (
        <div className="rating rating-sm rating-half">
            {rating >= 0 &&
                [...Array(10)].map((x, i) => {
                    if (i % 2 === 0) {
                        return (
                            <input
                                key={i}
                                type="radio"
                                name={`rating-${rating}`}
                                className="bg-yellow-500 mask mask-star-2 mask-half-1"
                                checked={Math.floor(rating * 2) === i}
                                disabled
                            />
                        )
                    } else
                        return (
                            <input
                                key={i}
                                type="radio"
                                name="rating-10"
                                className="bg-yellow-500 mask mask-star-2 mask-half-2"
                                checked={Math.floor(rating * 2) === i}
                                disabled
                            />
                        )
                })}
        </div>
    )
}

const CardRatings = ({ totalRatings, starsRating }: { totalRatings: number; starsRating: number }) => (
    <h1 className="text-sm text-gray-400">
        {
            <>
                <Stars rating={starsRating} /> <>({totalRatings}+)</>
            </>
        }
    </h1>
)

const CardPrice = ({ price, isDiscounted, discount }: { price: number; isDiscounted: boolean; discount: number }) =>
    isDiscounted ? (
        <h1 className="text-md font-bold text-black">
            {price && discount ? convertToCurrency((price * (100 - discount)) / 100) : convertToCurrency(price ?? 0)}{' '}
            <span className="line-through text-gray-400 text-md font-light">{convertToCurrency(price ?? 0)}</span>
        </h1>
    ) : (
        <h1 className="text-md font-bold text-black">{convertToCurrency(price ?? 0)}</h1>
    )

const CardBestSeller = () => (
    <h1 className="bg-yellow-200 self-start text-black text-md font-bold p-1 ml-auto">Best Seller</h1>
)

const CourseCard = ({ course, wide = false }: CourseCardPropsType) => {
    // Wide Version of the card
    const { imageURL, title, instructor, rating, starsRating, discount, isDiscounted, price, isBestSeller } = course
    const WideVersion = () => (
        <div className={'flex flex-row w-full border-b-2 justify-between p-2 px-4'}>
            <div className="flex flex-row gap-4 items-start">
                <div>
                    <CardImage imageURL={imageURL} title={title} />
                </div>
                <div className="flex flex-col h-full">
                    <CardTitle title={title} />
                    <CardInstructorName instructorName={instructor} />
                    <CardRatings totalRatings={rating} starsRating={starsRating} />
                    <CardPrice price={price} discount={discount} isDiscounted={isDiscounted} />
                </div>
            </div>
            <div className="flex flex-col items-end">
                <CardPrice price={price} discount={discount} isDiscounted={isDiscounted} />
                {isBestSeller ? <CardBestSeller /> : null}
            </div>{' '}
        </div>
    )

    if (wide) return <WideVersion />
    return (
        <div className={'p-2 max-w-[260px] w-full flex flex-col items-start'}>
            <CardImage imageURL={imageURL} title={title} />
            <div className="mt-[0.4rem] mb-[0.1rem]">
                <CardTitle title={title} />
            </div>
            <div className="mb-[0.1rem]">
                <CardInstructorName instructorName={instructor} />
            </div>
            <div>
                <CardRatings totalRatings={rating} starsRating={starsRating} />
            </div>
            <CardPrice price={price} discount={discount} isDiscounted={isDiscounted} />
            <div className="mt-[24px]">{isBestSeller ? <CardBestSeller /> : null}</div>
        </div>
    )
}

export default CourseCard
