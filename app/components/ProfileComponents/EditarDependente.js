import React, { useEffect, useState } from "react";
import { getChilds } from "../../utils/views";

export default function EditarDependente({ userId }) {
  const [childs, setChilds] = useState([]);
  const [selectedChildId, setSelectedChildId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [escola, setEscola] = useState("");
  const [codigoTurma, setCodigoTurma] = useState("");

  useEffect(() => {
    if (!userId) return;

    const fetchData = async () => {
      try {
        const res = await getChilds(userId);
        setChilds(res);
        if (res.length > 0) {
          setSelectedChildId(res[0].id);
        }
      } catch (error) {
        console.error("Erro ao buscar childs:", error);
      }
    };

    fetchData();
  }, [userId]);

  useEffect(() => {
    const selectedChild = childs.find((child) => child.id === selectedChildId);
    if (selectedChild) {
      setFirstName(selectedChild.firstName || "");
      setLastName(selectedChild.lastName || "");
      setEscola(selectedChild.escola || "");
      setCodigoTurma(selectedChild.codigoTurma || "");
    } else {

      setFirstName("");
      setLastName("");
      setEscola("");
      setCodigoTurma("");
    }
  }, [selectedChildId, childs]);

  return (
    <div className="flex flex-col w-1/2">
      <h3 className="text-xl font-semibold mb-6">Editar Dependentes</h3>

      <div className="space-y-4 w-full">
        <div className="flex flex-col items-left justify-center">
          <select
            className="bg-gray-100 rounded-full px-4 py-3 text-sm w-full hover:bg-gray-100 focus:outline-none"
            value={selectedChildId}
            onChange={(e) => setSelectedChildId(e.target.value)}
          >
            {childs.length === 0 && (
              <option>Nenhum dependente encontrado</option>
            )}
            {
            childs.map((child) => (
              <option key={child.id} value={child.id}>
                {child.firstName} {child.lastName}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col items-left justify-center">
          <span className="text-sm text-gray-600">Nome:</span>
          <input
            type="text"
            id="nome"
            name="nome"
            className="w-full px-4 text-sm py-3 border border-gray-500 rounded-full hover:bg-gray-100 focus:outline-none"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm text-gray-700 mb-1">Sobrenome:</label>
          <input
            type="text"
            id="sobrenome"
            name="sobrenome"
            className="w-full px-4 text-sm py-3 border border-gray-500 rounded-full hover:bg-gray-100 focus:outline-none"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm text-gray-700 mb-1">Escola:</label>
          <input
            type="text"
            id="escola"
            name="escola"
            className="w-full px-4 text-sm py-3 border border-gray-500 rounded-full hover:bg-gray-100 focus:outline-none"
            value={escola}
            onChange={(e) => setEscola(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm text-gray-700 mb-1">Código da Turma:</label>
          <input
            type="text"
            id="codigoTurma"
            name="codigoTurma"
            className="w-full px-4 text-sm py-3 border border-gray-500 rounded-full hover:bg-gray-100 focus:outline-none"
            value={codigoTurma}
            onChange={(e) => setCodigoTurma(e.target.value)}
          />
        </div>

        <button className="mt-6 cursor-pointer bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-full w-full">
          Salvar
        </button>
      </div>
    </div>
  );
}
