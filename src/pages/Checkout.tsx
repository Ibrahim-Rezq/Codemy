import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { Stripe, StripeCardElement, StripeCardElementChangeEvent, StripeElements } from '@stripe/stripe-js'
import axios from 'axios'
import { FormEvent, FormEventHandler, useEffect, useState } from 'react'

import { Container, PageTitle } from '../components'
import { convertToCurrency } from '../utils/helper'

const CHECKOUT_BASE_URI = 'https://us-central1-saif-d8a42.cloudfunctions.net/app'

const Checkout = () => {
    // const { cartItems } = useSelector(state => state.cart) -- ## This is just an imagination of how we'll get the cart items from redux
    const [error, setError] = useState('')
    const [processing, setProcessing] = useState(false)
    const [disabled, setDisabled] = useState(true)
    const [succeeded, setSucceeded] = useState(false)
    const [clientSecret, setClientSecret] = useState(null)
    const stripe: Stripe | null = useStripe()
    const elements: StripeElements | null = useElements()

    // ## Submit a request to stripe with the clientSecret that contains the amount of order.
    const handleSubmit = async (e: FormEvent<Element>) => {
        e.preventDefault()
        if (stripe && elements && clientSecret) {
            setProcessing(true)
            const { paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: elements?.getElement(CardElement) as StripeCardElement,
                },
            })
            setSucceeded(true)
            setError('')
            setProcessing(false)
            // ## todo: clear the cart store
            if (paymentIntent && paymentIntent?.amount)
                alert(`Your Order has been made successfully --  ${paymentIntent.amount}`)
            // ## todo: redirect to homepage
        }
    }

    // ## Handling whenever you edit credit card details at the <CardElement />
    const handleChange = (e: StripeCardElementChangeEvent) => {
        setDisabled(e.empty)
        setError(e?.error ? e.error?.message : '')
    }

    // ## generate special stripe client secret with the total amount
    useEffect(() => {
        const getClientSecret = async () => {
            const res = await axios.post(
                `${CHECKOUT_BASE_URI}/payment/create`,
                {},
                { params: { total: 120000 } }, // ## total needs to be updated as our cart total
            )

            // Client Secret to be sent to stripe
            setClientSecret(res.data.clientSecret)
        }

        getClientSecret()
    }, []) // ## use effect will have a dependency of [cartItems] as it needs to run every time we change anything in the cart

    return (
        <section className="bg-white w-screen h-screen text-black">
            <Container>
                <div className="w-full flex items-start justify-between">
                    <div className="self-start flex flex-col">
                        <PageTitle title="Checkout" />
                        <h3 className="text-3xl">Payment Method</h3>
                        <PaymentMethodForm
                            handleSubmit={handleSubmit}
                            handleChange={handleChange}
                            processing={processing}
                            error={error}
                            disabled={disabled}
                            succeeded={succeeded}
                        />
                    </div>
                </div>
            </Container>
        </section>
    )
}

interface PaymenyMethodProps
    extends React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> {
    handleSubmit: FormEventHandler<HTMLFormElement>
    handleChange: (event: StripeCardElementChangeEvent) => void
    processing: boolean
    error: string
    disabled: boolean
    succeeded: boolean
}

const PaymentMethodForm = ({
    handleSubmit,
    processing,
    error,
    disabled,
    succeeded,
    handleChange,
}: PaymenyMethodProps) => (
    <form onSubmit={handleSubmit} className={'flex flex-col gap-4 mt-4'}>
        <CardElement className="" onChange={handleChange} />
        <div>
            <button className="bg-violet-500 w-[200px] p-2 text-white" disabled={processing || disabled || succeeded}>
                <span>{processing ? <p>Processing</p> : 'Buy Now'}</span>
            </button>
        </div>
        <div>
            <h3>Order Total : {convertToCurrency(12000)}</h3>
        </div>
        {error && <div>{error}</div>}
    </form>
)

const CompleteCheckout = () => {
    return (
        <></> // The right section in udemy course
    )
}

export default Checkout
