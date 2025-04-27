"use client"; // se estiver usando Next 13+

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Inbox() {
    const contatos = [
        { id: 1, name: 'Iara Magalhães', email: 'iaram.agalhaes@connect.com', materia:"Língua Portuguesa", background: false, escola: 'Colégio Amazonas', graduacao: 'Doutora em Linguística - USP', aulas: 'Ter. - 10h às 12h, Qui. - 14h às 16h' },
        { id: 2, name: 'Adriana de Sousa', email: 'adriana.souza@connect.com', materia:"Língua Portuguesa", background: true, escola: 'Instituto Educacional Fênix', graduacao: 'Mestrado em Educação - UNESP', aulas: 'Seg. - 8h às 10h, Qua. - 10h às 12h' },
        { id: 3, name: 'Millaya Oliveira', email: 'millaya.oliveira@connect.com', materia:"Filosofia", background: false, escola: 'Escola Estadual FAMETRO', graduacao: 'Msc. em Letras - UFAM', aulas: 'Seg. - 14h às 16h, Qua. - 14h às 16h' },
        { id: 4, name: 'Fernando Pinho', email: 'fernando.pinho@connect.com', materia:"Artes", background: true, escola: 'Centro Educacional Horizonte', graduacao: 'Licenciatura em Letras - UFRJ', aulas: 'Ter. - 9h às 11h, Qui. - 9h às 11h' },
        { id: 5, name: 'Alex Joelson', email: 'alex.joelson@connect.com', materia:"Redação", background: false, escola: 'Colégio Saber', graduacao: 'Especialização em Literatura - UFSC', aulas: 'Qua. - 13h às 15h, Sex. - 13h às 15h' },
        { id: 6, name: 'Paulo César', email: 'paulo.cesar@connect.com', materia:"Música", background: true, escola: 'Instituto Alfa', graduacao: 'Doutor em Estudos Linguísticos - UFMG', aulas: 'Seg. - 16h às 18h, Qua. - 16h às 18h' },
        { id: 7, name: 'Mauro Lobato', email: 'mauro.lobato@connect.com', materia:"Língua Estrangeira", background: false, escola: 'Colégio Evolução', graduacao: 'Mestrado em Letras - PUC-Rio', aulas: 'Ter. - 8h às 10h, Qui. - 8h às 10h' },
        { id: 8, name: 'Pedro Vinícius', email: 'pedro.vinicius@connect.com', materia:"Ciências e Biologia", background: true, escola: 'Instituto Cultural Newton', graduacao: 'Especialização em Língua Portuguesa - UFPE', aulas: 'Qua. - 15h às 17h, Sex. - 15h às 17h' },
        { id: 9, name: 'Mardem de Melo', email: 'mardem.melo@connect.com', materia:"Sociologia", background: false, escola: 'Escola Nova Era', graduacao: 'Mestrado em Literatura Brasileira - UFRGS', aulas: 'Seg. - 9h às 11h, Qua. - 9h às 11h' },
        { id: 10, name: 'Augusto Reis', email: 'augusto.reis@connect.com', materia:"Se Virar", background: true, escola: 'Centro de Ensino Dinâmico', graduacao: 'PhD em Show de Bolice - UFSB', aulas: 'Ter. - 13h às 15h, Qui. - 13h às 15h' },
    ]
    

    const [selectedContato, setSelectedContato] = useState(contatos[0]); // Começa com o primeiro contato

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", duration: 0.2, delay: 0 }}
                className="w-full h-full"
            >
                <div className="flex items-center h-full shadow-[0_6px_6px_rgba(0,0,0,0.05)] bg-white rounded-lg justify-around mb-4">
                    
                    {/* Lista de Contatos */}
                    <div className='w-1/2 h-full'>
                        <h1 className='font-bold text-xl p-4 mb-4'>Contatos</h1>
                        <div className='p-3 flex flex-col items-center justify-center'>
                            <div className="flex items-center shadow-md w-4/5 max-w-2xl px-3 bg-white py-2 border border-gray-300 rounded-full">
                                <input
                                    className="w-full outline-none"
                                    type="text"
                                    placeholder="Pesquisar..."
                                />
                                <img width="24" src="https://img.icons8.com/windows/32/search--v1.png" alt="search--v1" />
                            </div>
                        </div>

                        <div className="mx-auto cursor-pointer w-full p-3">
                            <h1 className='font-bold mb-4'>Meus Contatos</h1>
                            {contatos.map((contato) => (
                                <div
                                    key={contato.id}
                                    className={`${contato.background ? "bg-[#f7f7f7]" : "bg-[#ffff]"} flex p-4 text-sm justify-left rounded hover:bg-[#f1f1f1] transition-all duration-150`}
                                    onClick={() => setSelectedContato(contato)}
                                >
                                    <h1 className='font-regular w-1/2'>{contato.name}</h1>
                                    <h1 className='font-regular w-1/2'>{contato.email}</h1>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Perfil do Contato Selecionado */}
                    <div className='w-1/2 flex items-center justify-center h-full'>
                        <div className="flex flex-col items-center p-6 max-w-md mx-auto my-auto bg-white rounded-2xl">

                            {/* Foto e Nome */}
                            <div className="flex flex-col items-center mb-6">
                                <div className='rounded-full w-16 h-16 bg-gray-100'></div>
                                <h1 className="text-xl font-semibold mt-4">{selectedContato.name}</h1>
                                <p className="text-gray-500 text-sm">Prof. de {selectedContato.materia}</p>
                            </div>

                            {/* Informações */}
                            <div className="w-80 bg-gray-50 rounded-xl p-4 mb-6 text-sm">
                                <p><strong>Escola:</strong> {selectedContato.escola}</p>
                                <p><strong>Graduação:</strong> {selectedContato.graduacao}</p>
                                <p className="mt-2"><strong>Aulas:</strong></p>
                                <p>{selectedContato.aulas}</p>
                            </div>

                            {/* Avaliações - (Você pode melhorar futuramente para que cada professor tenha suas próprias avaliações, agora é fixo) */}
                            <div className="w-full mb-6">
                                <h2 className="text-gray-600 text-sm font-semibold mb-2">AVALIAÇÕES</h2>

                                <div className="mb-4">
                                    <div className="flex justify-between text-sm mb-1">
                                        <span>Avaliação dos pais</span>
                                        <span>95% Aprovação</span>
                                    </div>
                                    <div className="h-2 bg-gray-200 rounded-full">
                                        <div className="h-full bg-blue-400 rounded-full" style={{ width: "95%" }}></div>
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <div className="flex justify-between text-sm mb-1">
                                        <span>Mensagens Respondidas</span>
                                        <span>98% Respondidas</span>
                                    </div>
                                    <div className="h-2 bg-gray-200 rounded-full">
                                        <div className="h-full bg-blue-400 rounded-full" style={{ width: "98%" }}></div>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex justify-between text-sm mb-1">
                                        <span>Tempo médio de resposta</span>
                                        <span>Até 2h</span>
                                    </div>
                                    <div className="h-2 bg-gray-200 rounded-full">
                                        <div className="h-full bg-blue-400 rounded-full" style={{ width: "100%" }}></div>
                                    </div>
                                </div>
                            </div>

                            {/* Pendências */}
                            <div className="w-full">
                                <h2 className="text-gray-600 text-sm font-semibold mb-2">PENDÊNCIAS</h2>

                                <div className="mb-4">
                                    <div className="flex justify-between text-sm mb-1">
                                        <span>Frequência de Feedbacks</span>
                                        <span>28%</span>
                                    </div>
                                    <div className="h-2 bg-gray-200 rounded-full">
                                        <div className="h-full bg-yellow-400 rounded-full" style={{ width: "28%" }}></div>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex justify-between text-sm mb-1">
                                        <span>Retorno de atividades</span>
                                        <span>35%</span>
                                    </div>
                                    <div className="h-2 bg-gray-200 rounded-full">
                                        <div className="h-full bg-yellow-400 rounded-full" style={{ width: "35%" }}></div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </motion.div>
        </AnimatePresence>
    );
}
