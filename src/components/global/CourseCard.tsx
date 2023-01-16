import { convertToCurrency } from '../../utils/helper'
import { Course, course } from '../../utils/tempData'

const CourseCard = () => {
    const { imageURL, instructor, rating, name, price, discount, onSale, bestseller, isWide } = course

    // Wide Version of the card
    const WideVersion = () => (
        <div className={'flex flex-row w-full border-b-2 justify-between p-2 px-4'}>
            <div className="flex flex-row gap-4 items-start">
                <div>
                    <CardImage imageURL={imageURL} name={name} />
                </div>
                <div className="flex flex-col h-full">
                    <CardTitle name={name} />
                    <CardInstructorName instructor={instructor} />
                    <CardRatings rating={rating} />
                    <CardPrice price={price} discount={discount} onSale={onSale} />
                </div>
            </div>
            <div className="flex flex-col items-end">
                <CardPrice price={price} discount={discount} onSale={onSale} />
                {bestseller ? <CardBestSeller /> : null}
            </div>{' '}
        </div>
    )

    if (isWide) return <WideVersion />
    return (
        <div className={'p-2 max-w-[260px] w-full flex flex-col items-start'}>
            <CardImage imageURL={imageURL} name={name} />
            <div className="mt-[0.4rem] mb-[0.1rem]">
                <CardTitle name={name} />
            </div>
            <div className="mb-[0.1rem]">
                <CardInstructorName instructor={instructor} />
            </div>
            <div>
                <CardRatings rating={rating} />
            </div>
            <CardPrice price={price} discount={discount} onSale={onSale} />
            <div className="mt-[24px]">{bestseller ? <CardBestSeller /> : null}</div>
        </div>
    )
}

const CardImage = ({ imageURL, name }: Course) => (
    <img src={imageURL} alt={name} className={'w-full h-[130px] object-cover'} />
)

const CardTitle = ({ name }: Course) => <h1 className="text-lg font-bold text-black ">{name}</h1>

const CardInstructorName = ({ instructor }: Course) => (
    <h1 className="text-md text-gray-400 font-normal">{instructor}</h1>
)

const CardRatings = ({ rating }: Course) => (
    <h1 className="text-sm text-gray-400">
        {
            <>
                <Stars rating={2} /> <>({rating}+)</>
            </>
        }
    </h1>
)

const CardPrice = ({ price, onSale, discount }: Course) =>
    onSale ? (
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
                                name="rating-10"
                                className="bg-yellow-500 mask mask-star-2 mask-half-1"
                                checked={rating * 2 === i}
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
                                checked={rating * 2 === i}
                                disabled
                            />
                        )
                })}
        </div>
    )
}

export default CourseCard
