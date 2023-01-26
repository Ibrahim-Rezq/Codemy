import { FaRegTimesCircle } from "react-icons/fa";

const Alert = ({message} : {message: any}) => (
    <div className='flex justify-center mt-10'>
        <div className="alert alert-error shadow-lg max-w-md">
            <div>
                <FaRegTimesCircle />
                <span>{message}</span>
            </div>
        </div>
    </div>
)

export default Alert;