import React, { useState } from 'react';
export default function Alterar() {

    return (
        <div>
            <div className="flex flex-col w-full p-6 bg-white rounded-lg mt-6 md:mt-0">
                <h3 className="text-lg font-semibold mb-6">Trocar Senha</h3>

                <div className="space-y-4">
                    <div>
                        <label className="block text-sm text-gray-700 mb-1">Senha atual:</label>
                        <input
                            type="password"
                            className="w-full outline-none px-4 py-2 border border-gray-500 rounded-full"
                        />
                    </div>

                    <div>
                        <label className="block text-sm text-gray-700 mb-1">Nova senha:</label>
                        <input
                            type="password"
                            className="w-full outline-none px-4 py-2 border  border-gray-500 rounded-full"
                        />
                    </div>

                    <div>
                        <label className="block text-sm text-gray-700 mb-1">Confirmar nova senha:</label>
                        <input
                            type="password"
                            className="w-full outline-none px-4 py-2 border border-gray-500 rounded-full"
                        />
                    </div>

                    <button
                        className="mt-6 cursor-pointer bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-full w-full"
                    >
                        Salvar
                    </button>
                </div>
            </div>
        </div>

    )
}