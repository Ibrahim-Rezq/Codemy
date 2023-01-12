import { useState } from 'react'
import { FaEye } from 'react-icons/fa'

function InputField({ type }: { type: string }) {
    const [passwordShown, setPasswordShown] = useState(false)

    return (
        <div className="relative w-full flex border border-black">
            <input
                className="w-full  pt-6 h-16 pl-4 focus:outline-0 peer"
                type={!passwordShown ? (type == 'name' ? 'text' : type) : 'text'}
                name={type}
                id={type}
                placeholder=""
            />
            {type == 'password' && (
                <FaEye
                    onClick={() => setPasswordShown((prev) => !prev)}
                    className="font-bold text-xl mt-5 mr-4 cursor-pointer"
                />
            )}
            <label
                htmlFor={type}
                className="absolute text-xs top-1/2 font-bold -translate-y-6 -translate-x-1 left-0 pl-4 duration-100 
                peer-focus:-translate-y-6 peer-focus:-translate-x-1 peer-focus:text-xs 
                peer-placeholder-shown:-translate-y-1/2 
                peer-placeholder-shown:font-bold
                peer-placeholder-shown:text-sm"
            >
                {type == 'name' ? 'Full Name' : type.slice(0, 1).toUpperCase() + type.slice(1)}
            </label>
        </div>
    )
}

export default InputField
