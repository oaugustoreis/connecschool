export default function AdicionarDependente() {
    return (
            <div className="flex flex-col  w-1/2 ">
                <h3 className="text-xl font-semibold mb-6">Adicionar Dependentes</h3>

                <div className="space-y-4 w-full ">
                    <div className="flex flex-col items-left justify-center">
                        <span className="text-sm text-gray-600">nome:</span>
                        <input type="text" id="nome" name="nome" className="w-full px-4 text-sm  py-3 border border-gray-500 rounded-full hover:bg-gray-100 focus:outline-none" />
                    </div>

                    <div>
                        <label className="block text-sm text-gray-700 mb-1">sobrenome:</label>
                        <input type="text" id="nome" name="nome" className="w-full px-4 text-sm  py-3 border border-gray-500 rounded-full hover:bg-gray-100 focus:outline-none" />

                    </div>

                    <div>
                        <label className="block text-sm text-gray-700 mb-1">Escola:</label>
                        <input type="text" id="nome" name="nome" className="w-full px-4 text-sm  py-3 border border-gray-500 rounded-full hover:bg-gray-100 focus:outline-none" />

                    </div>
                    <div>
                        <label className="block text-sm text-gray-700 mb-1">Código da Turma:</label>
                        <input type="text" id="nome" name="nome" className="w-full px-4 text-sm  py-3 border border-gray-500 rounded-full hover:bg-gray-100 focus:outline-none" />

                    </div>

                    <button
                        className="mt-6 cursor-pointer bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-full w-full"
                    >
                        Salvar
                    </button>
                </div>
        </div>
    )
}