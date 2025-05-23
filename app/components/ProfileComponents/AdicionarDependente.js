import { useState } from "react";
import { criarChild } from "../../utils/views";

export default function AdicionarDependente({ userId }) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [escola, setEscola] = useState("");
    const [codigoTurma, setCodigoTurma] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const childId = await criarChild(userId, firstName, lastName, escola, codigoTurma);

        if (childId) {
            alert("Dependente adicionado com sucesso!");
            setFirstName("");
            setLastName("");
            setEscola("");
            setCodigoTurma("");
        } else {
            alert("Erro ao adicionar dependente.");
        }
    };

    return (
        <div className="flex flex-col w-1/2">
            <h3 className="text-xl font-semibold mb-6">
                Adicionar Dependentes
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4 w-full">
                <div>
                    <label className="block text-sm text-gray-600">Nome:</label>
                    <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="w-full px-4 text-sm py-3 border border-gray-500 rounded-full hover:bg-gray-100 focus:outline-none"
                    />
                </div>
                <div>
                    <label className="block text-sm text-gray-600">
                        Sobrenome:
                    </label>
                    <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="w-full px-4 text-sm py-3 border border-gray-500 rounded-full hover:bg-gray-100 focus:outline-none"
                    />
                </div>
                <div>
                    <label className="block text-sm text-gray-600">
                        Escola:
                    </label>
                    <input
                        type="text"
                        value={escola}
                        onChange={(e) => setEscola(e.target.value)}
                        className="w-full px-4 text-sm py-3 border border-gray-500 rounded-full hover:bg-gray-100 focus:outline-none"
                    />
                </div>
                <div>
                    <label className="block text-sm text-gray-600">
                        Código da Turma:
                    </label>
                    <input
                        type="text"
                        value={codigoTurma}
                        onChange={(e) => setCodigoTurma(e.target.value)}
                        className="w-full px-4 text-sm py-3 border border-gray-500 rounded-full hover:bg-gray-100 focus:outline-none"
                    />
                </div>
                <button
                    type="submit"
                    className="mt-6 cursor-pointer bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-full w-full"
                >
                    Salvar
                </button>
            </form>
        </div>
    );
}
