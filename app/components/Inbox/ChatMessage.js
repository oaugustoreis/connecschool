export default function Message({ side, message }) {
    return (
        <>
            <div className={`flex items-center gap-2 mb-4 " ${side === true ? "justify-start" : "justify-end"}`}>
                <div className="max-w-2/4 px-2">
                    <div className="text-gray-800 wfull h-full rounded-lg p-2 border border-[#e4e7ec]">
                        <span className="text-[.9rem] font-regular">
                            {message}
                        </span>
                    </div>
                    <div className="flex justify-between items-center gap-2">
                        <span className="text-[.7rem] text-gray-500 font-semibold">
                            17:30
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}