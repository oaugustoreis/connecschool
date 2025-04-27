import { useRef } from "react";

export default function UploadButton() {
    const fileInputRef = useRef(null);

    function handleButtonClick() {
        fileInputRef.current.click(); // Simula o clique no input de arquivos
    }

    function handleFileChange(event) {
        const file = event.target.files[0];
        if (file) {
            console.log("Arquivo selecionado:", file.name);
            // Aqui você pode fazer upload, mostrar preview, etc.
        }
    }

    return (
        <div className='flex justify-center items-center w-1/5'>
            {/* Botão */}
            <button
                onClick={handleButtonClick}
                className='bg-[#60a5fa] p-2 px-5 rounded-full cursor-pointer hover:bg-[#60bcfa]'
            >
                <span className='text-white'>Enviar</span>
            </button>

            {/* Input de arquivo escondido */}
            <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
            />
        </div>
    );
}
