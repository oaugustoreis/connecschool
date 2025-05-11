import { useRef } from "react";

export default function UploadButton({buttonText}) {
    const fileInputRef = useRef(null);

    function handleButtonClick() {
        fileInputRef.current.click();
    }

    function handleFileChange(event) {
        const file = event.target.files[0];
        if (file) {
            console.log("Arquivo selecionado:", file.name);
        }
    }

    return (
        <div className='flex justify-center items-center '>

            <button
                onClick={handleButtonClick}
                className='bg-[#60a5fa] p-2 px-5 rounded-full cursor-pointer hover:bg-[#60bcfa]'
            >
                <span className='text-white'>{buttonText}</span>
            </button>

            <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
            />
        </div>
    );
}
