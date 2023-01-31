import { FaCheck } from 'react-icons/fa'

const WhatYouWellLearn = ({ whatYouWellLearn }: { whatYouWellLearn?: { id: string; text: string }[] }) => {
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

export default WhatYouWellLearn
