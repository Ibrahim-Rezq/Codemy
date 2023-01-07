import { convertToCurrency } from '../../utils/helper'

type CourseCardPropsType = {
    imageURL?: string
    title?: string
    instructorName?: string
    totalRatings?: number
    price?: number
    isBestSeller?: boolean
    isDiscount?: boolean
    discount?: number
    wide?: boolean
}

const CourseCard = ({
    imageURL = 'https://reactjs.org/logo-og.png',
    title = 'React Udemy Clone',
    instructorName = 'Saif Mohamed',
    totalRatings = 1200.0,
    price = 1200,
    isBestSeller = true,
    isDiscount = true,
    discount = 10,
    wide = true,
}: CourseCardPropsType) => {
    // Wide Version of the card
    const WideVersion = () => (
        <div className={'flex flex-row max-w-[720px] w-full border-2 justify-between p-2'}>
            <div className="flex flex-row gap-4 items-start">
                <div>
                    <CardImage imageURL={imageURL} title={title} />
                </div>
                <div className="flex flex-col h-full">
                    <CardTitle title={title} />
                    <CardInstructorName instructorName={instructorName} />
                    <CardRatings totalRatings={totalRatings} />
                    <CardPrice price={price} discount={discount} isDiscount={isDiscount} />
                </div>
            </div>
            {isBestSeller ? <CardBestSeller /> : null}
        </div>
    )

    if (wide) return <WideVersion />
    return (
        <div className={'border-2 p-2 max-w-[240px] w-full flex flex-col items-start'}>
            <CardImage imageURL={imageURL} title={title} />
            <CardTitle title={title} />
            <CardInstructorName instructorName={instructorName} />
            <CardRatings totalRatings={totalRatings} />
            <CardPrice price={price} discount={discount} isDiscount={isDiscount} />
            {isBestSeller ? <CardBestSeller /> : null}
        </div>
    )
}

const CardImage = ({ imageURL, title }: CourseCardPropsType) => (
    <img src={imageURL} alt={title} className={'w-full h-[130px] object-cover'} />
)

const CardTitle = ({ title }: CourseCardPropsType) => (
    <h1 className="text-lg font-bold text-black mt-[0.4rem] mb-[0.1rem]">{title}</h1>
)

const CardInstructorName = ({ instructorName }: CourseCardPropsType) => (
    <h1 className="text-md text-gray-400 font-normal mb-[0.1rem]">{instructorName}</h1>
)

const CardRatings = ({ totalRatings }: CourseCardPropsType) => (
    <h1 className="text-sm text-gray-400">stars -- ({totalRatings}+)</h1>
)

const CardPrice = ({ price, isDiscount, discount }: CourseCardPropsType) =>
    isDiscount ? (
        <h1 className="text-md font-bold text-black">
            {price && discount ? convertToCurrency((price * (100 - discount)) / 100) : convertToCurrency(price ?? 0)}{' '}
            <span className="line-through text-gray-400 text-md font-light">{convertToCurrency(price ?? 0)}</span>
        </h1>
    ) : (
        <h1 className="text-md font-bold text-black">{convertToCurrency(price ?? 0)}</h1>
    )

const CardBestSeller = () => <h1 className="bg-yellow-200 self-start text-black text-md font-bold p-1">Best Seller</h1>

export default CourseCard
