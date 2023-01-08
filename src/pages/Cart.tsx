import { BsX } from 'react-icons/bs'

import { Button, CourseCard, PageTitle } from '../components'
import { Container } from '../components'

type CartProps = {
    cartItems?: number[]
    totalAmount?: number
    total?: number
    discountTotal?: number
    discountCode?: string
}

const Cart = ({
    cartItems = [1],
    totalAmount = 500,
    total = 500,
    discountTotal = 0,
    discountCode = 'NYSALE2EXT3',
}: CartProps) => {
    return (
        <section className="bg-white w-screen h-screen text-black">
            <Container>
                <PageTitle title={'Shopping Cart'} />
                <div className="flex justify-center w-full">
                    <div className="content w-full">
                        <div className="subtitle font-bold">1 Course in Cart</div>
                        <hr className="border-stone-400 border-solid w-full my-4" />
                        {cartItems.map((item) => {
                            return <CourseCard key={item} />
                        })}
                    </div>
                    <CartCheckoutData
                        totalAmount={totalAmount}
                        total={total}
                        discountTotal={discountTotal}
                        discountCode={discountCode}
                    />
                </div>
            </Container>
        </section>
    )
}

const CartCheckoutData = ({ total, discountTotal, discountCode }: CartProps) => {
    return (
        <div className="w-96">
            <div className="prices m-2 ">
                <h4 className="text-lg font-bold text-stone-600">Total:</h4>
                <CartTotal total={total} discountTotal={discountTotal} />
                <Button wide="true">checkout</Button>
                <hr className="border-stone-400 border-solid w-full my-4" />
            </div>
            <CartDiscounts discountCode={discountCode} />
        </div>
    )
}
const CartDiscounts = ({ discountCode }: CartProps) => {
    return (
        <div className="m-2">
            <h4 className="text-lg font-bold">Promotins</h4>
            <div>
                <div className="flex items-center">
                    <a className="link underline-none text-3xl text-light">
                        <BsX />
                    </a>
                    <p className="m-2">
                        <span className="text-stone-500">{discountCode}</span> is applied
                    </p>
                </div>
                <div className="flex items-center mt-2">
                    <input
                        type="text"
                        placeholder="Type here"
                        className="bg-white input input-bordered input-primary w-full max-w-xs rounded-none focus:outline-0 focus:ring-0"
                    />
                    <Button>Add</Button>
                </div>
            </div>
        </div>
    )
}
const CartTotal = ({ discountTotal, total }: CartProps) =>
    discountTotal !== undefined && discountTotal > 0 ? (
        <h1 className="text-md font-bold text-black">
            <p className="text-2xl">E£{total && discountTotal ? (total * (100 - discountTotal)) / 100 : total}</p>
            <span className="line-through text-stone-500">E£{total}</span>
            <p>{discountTotal}% off</p>
        </h1>
    ) : (
        <h1 className="text-md font-bold text-black text-2xl">E£{total}</h1>
    )

export default Cart
