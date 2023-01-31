import { formatNumber } from '../../utils/helper'

const RatingElement = ({ checked }: { checked: boolean }) => (
    <input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" defaultChecked={checked} disabled />
)

const Rating = ({ rating, ratingStars }: { rating?: number; ratingStars?: number }) => {
    const stars = Math.floor(ratingStars ?? 0)

    return (
        <div className="rating rating-sm mr-3">
            <span className="text-orange-400 font-semibold text-sm mr-1">{ratingStars}</span>
            {[...Array(6)].map((_, i) => {
                if (i != 0) {
                    return <RatingElement key={i} checked={i % stars == 0} />
                }
            })}
            <p className="text-purple-400 ml-3 text-sm">({formatNumber(rating)})</p>
        </div>
    )
}

export default Rating
