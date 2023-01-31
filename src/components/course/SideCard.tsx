import { FaClosedCaptioning, FaInfinity, FaMobileAlt, FaRegHeart, FaRegPlayCircle, FaTv } from 'react-icons/fa'

import { convertToCurrency } from '../../utils/helper'

const OnSale = ({ onSale, price, discount }: { onSale?: boolean; price?: number; discount?: number }) => {
    if (onSale) {
        return (
            <>
                <div className="flex items-center">
                    <h2 className="card-title text-3xl pr-3">
                        {convertToCurrency(price && discount ? (price * (discount / 100)) / 100 : 0)}
                    </h2>
                    <h4 className="text-lg text-gray-400 line-through">{convertToCurrency(price ? price / 100 : 0)}</h4>
                </div>
                <p className="text-base font-semibold text-gray-500">{discount}% off</p>
            </>
        )
    }
    return <h2 className="card-title text-2xl pr-3">{convertToCurrency(price ? price / 100 : 0)}</h2>
}

const SideCard = ({
    time,
    onSale,
    price,
    discount,
    imageURL,
}: {
    time?: number
    onSale?: boolean
    price?: number
    discount?: number
    imageURL?: string
}) => {
    return (
        <div className="card w-80 card-compact bg-base-100 shadow-xl rounded-none">
            <figure className="relative">
                <img src={imageURL} alt="Shoes" />
                <button className="absolute text-white flex flex-col items-center justify-center h-full w-full">
                    <FaRegPlayCircle className="w-14 h-14 z-10" />
                    <p className="font-semibold z-10 absolute bottom-2 text-lg">Preview this course</p>
                    <div className="h-full w-full absolute bg-gray-500 opacity-50"></div>
                </button>
            </figure>
            <div className="card-body">
                <OnSale onSale={onSale} price={price} discount={discount} />
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
                        <FaTv className="mr-3" />
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

export default SideCard
