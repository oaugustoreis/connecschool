"use client"
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Alterar from './ProfileComponents/AlterarSenha';
import EditarDependente from './ProfileComponents/EditarDependente';
import AdicionarDependente from './ProfileComponents/AdicionarDependente';
export default function Profile({ userData }) {
    const [activeComponent, setActiveComponent] = useState('dashboard');
    const haldlesubmit = (action) => {
        console.log(action);
        setActiveComponent(action);
    }
    const renderComponent = () => {
        switch (activeComponent) {
            case 'alterar-senha':
                return <Alterar />;
            case 'adicionar-dependente':
                return <AdicionarDependente />;
            case 'editar-dependente':
                return <EditarDependente />;
            default:
        }
    };
    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "Spring", duration: 0.2, delay: 0 }} className="w-full h-full">
                <div className="flex items-center h-full shadow-[0_6px_6px_rgba(0,0,0,0.05)] bg-white rounded-lg justify-between mb-4 ">
                    <div className='h-full w-1/2 flex flex-col items-center justify-center'>
                        <div className='mb-8 flex items-center justify-center mb-4 gap-3'>
                            <div className='rounded-full w-16 h-16 bg-gray-100'></div>
                            <div>
                                <h1 className="text-gray-900 text-xl font-bold">{userData.firstName} {userData.lastName}</h1>
                                <h2 className="text-gray-900 text-ml ">{userData.email}</h2>
                            </div>
                        </div>

                        <div className=' w-2/4 mb-4'>
                            <h2 className="text-gray-900 text-xl mb-4 font-bold">Informações da Conta</h2>
                            <div className="flex flex-col items-left justify-center mb-2">
                                <span className="text-gray-600 text-sm">nome:</span>

                                <div className='w-full flex justify-between px-4 text-sm bg-white py-3 border border-gray-300 rounded-full cursor-pointer hover:bg-gray-50'>
                                    <input type="text" id="email" name="email" defaultValue={`${userData.firstName} ${userData.lastName}`} className="w-full outline-none" />
                                    <img width="20" src="https://img.icons8.com/windows/32/edit--v1.png" alt="edit--v1" />
                                </div>
                            </div>
                            <div className="flex flex-col items-left justify-center">
                                <span className="text-sm text-gray-600">email:</span>
                                <input type="text" id="email" name="email" readOnly value={userData.email} className="w-full px-4 text-sm  py-3 border border-gray-300 rounded-full bg-gray-100 focus:outline-none" />
                            </div>
                        </div>
                        <div className='w-2/4 mb-4 p3'>
                            <h2 className="text-gray-900 text-xl mb-4 font-bold">Configurações da Conta</h2>
                            <div className="flex flex-col items-left justify-center mb-2">
                                <button onClick={() => haldlesubmit("alterar-senha")} type="text" id="email" name="alterarSenha" value={`${userData.firstName} ${userData.lastName}`} className="w-full justify-between px-4 flex text-sm bg-white py-3 border border-gray-300 rounded-full cursor-pointer hover:bg-gray-50 focus:outline-none" >
                                    <span className="text-gray-600 text-sm">Alterar senha</span>
                                    <img width="18" src="https://img.icons8.com/windows/32/forward.png" alt="forward" />
                                </button>
                            </div>
                        </div>
                        <div className='w-2/4 mb-4'>
                            <h2 className="text-gray-900 text-xl mb-4 font-bold">Configurações de dependentes</h2>
                            <div className="flex flex-col items-left justify-center mb-2">
                                <button onClick={() => haldlesubmit("adicionar-dependente")} type="text" id="email" name="email" value={`${userData.firstName} ${userData.lastName}`} className="w-full justify-between px-4 flex text-sm bg-white py-3 border border-gray-300 rounded-full cursor-pointer hover:bg-gray-50 focus:outline-none" >
                                    <span className="text-gray-600 text-sm">Adicionar dependentes</span>
                                    <img width="18" src="https://img.icons8.com/windows/32/forward.png" alt="forward" />
                                </button>
                            </div>
                            <div className="flex flex-col items-left justify-center">
                                <button onClick={() => haldlesubmit("editar-dependente")} type="text" id="email" name="email" value={`${userData.firstName} ${userData.lastName}`} className="w-full justify-between px-4 flex text-sm bg-white py-3 border border-gray-300 rounded-full cursor-pointer hover:bg-gray-50 focus:outline-none" >
                                    <span className="text-gray-600 text-sm">Editar dependentes</span>
                                    <img width="18" src="https://img.icons8.com/windows/32/forward.png" alt="forward" />
                                </button>
                            </div>
                        </div>

                    </div>
                    {/* div 2 */}
                    <div className='w-0.5 h-5/6 bg-gray-100 rounded-full'>

                    </div>
                    <div className='h-full w-1/2 flex items-center justify-center'>
                        {renderComponent()}
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    )
}