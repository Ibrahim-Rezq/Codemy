import { Dispatch, SetStateAction } from "react";
import { FaClosedCaptioning } from "react-icons/fa";

const Subtitles = ({subtitle, showSubtitles}: {subtitle?: string[], showSubtitles: Dispatch<SetStateAction<boolean>>}) => (
    <div className="flex items-center ml-5">
        <FaClosedCaptioning />
        <span className="pl-2">
            {subtitle?.slice(0, 2).join(', ')}
            {' '}
            {subtitle != undefined && subtitle.length > 2 ? (
                <button
                    onClick={() => showSubtitles(true)}
                    className="text-purple-400 underline">
                    {subtitle.length - 2} more
                </button>
            )
                : null}
        </span>
    </div>
)

export default Subtitles;