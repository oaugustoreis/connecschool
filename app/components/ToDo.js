import UploadButton from './AtividadesComponents/UploadButton';
import { motion, AnimatePresence } from 'framer-motion';
export default function Todo() {
    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", duration: 0.2, delay: 0 }} className="w-full h-full">
                <div className="p-5 flex flex-col h-full shadow-[0_6px_6px_rgba(0,0,0,0.05)] bg-white rounded-lg mb-4 ">
                    <div className='flex items-center justify-between'>
                        <h1 className="text-2xl font-bold mb-6">Tarefas a fazer.</h1>
                        <div className='flex justify-center items-center w-1/5'>
                            <UploadButton buttonText="Adicionar Tarefas" />
                        </div>
                    </div>
                    <div className='flex w-fit border border-gray-300 rounded  items-center mb-3'>
                        <div className=' cursor-pointer hover:bg-gray-100 p-2 font-semibold' >
                            Pendentes
                        </div>
                        <div className='bg-[#60a5fa] cursor-pointer hover:bg-blue-300 text-white  font-semibold p-2'>
                            Concluídos
                        </div>
                    </div>
                    <div className=' overflow-y-auto'>


                        <div className='flex items-center'>

                            <div className=" mx-auto cursor-pointer  w-full p-3">
                                <div className='flex p-3 justify-between '>
                                    <h1 className='font-bold'>Prof. Alex J.</h1>
                                </div>
                                <div className='flex flex-col p-3 bg-[#f7f7f7] rounded hover:bg-[#f1f1f1] '>
                                    <div className='flex w-full justify-between'>
                                        <h1 className='font-regular'>Trabalho de Ciências</h1>
                                        <div className='border pr-2 rounded flex gap-2 items-center mr-5'>
                                            <span className='p-2 text-white text-sm bg-[#7fdd53] rounded'>Prazo OK</span>
                                            <h1 className='font-regular'>28 de Jun</h1>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='flex w-full justify-between'>
                                            <div className='flex gap-2  items-center'>
                                                <div className='w-2/6 h-full justify-start flex flex-col '>
                                                    <h1 className='font-regular'>Objetivo:</h1>
                                                    <p className=' text-sm'>Compreender o funcionamento do ciclo da água na natureza, identificando suas etapas (evaporação, condensação, precipitação e infiltração) e reconhecendo sua importância para a vida no planeta.</p>
                                                </div>
                                                <div className='w-3/6 h-full justify-start flex flex-col  '>
                                                    <h1 className='font-regular'>Atividades:</h1>
                                                    <ul className='list-disc list-inside text-sm'>
                                                        <li>Pesquisa sobre o ciclo da água em livros, sites confiáveis e vídeos educativos.</li>
                                                        <li>Elaboração de um cartaz ilustrando as etapas do ciclo da água.</li>
                                                        <li>Produção de uma pequena maquete demonstrando o ciclo da água, utilizando materiais simples como algodão, papelão, tinta, entre outros.</li>
                                                    </ul>
                                                </div>
                                                <div className='w-1/6 h-full justify-start flex  gap-2 items-center '>
                                                    <div className='flex gap-1 items-center flex flex-col'>
                                                        <p>Concluir</p>
                                                        <button className='bg-[#7fdd53] p-2 w-fit rounded-full cursor-pointer hover:bg-[#60bcfa]'>
                                                            <img className='invert' width="32" src="https://img.icons8.com/windows/32/checkmark--v1.png" alt="checkmark--v1" />
                                                        </button>
                                                    </div>
                                                    <div className='flex gap-1 items-center flex flex-col'>
                                                        <p>Excluir</p>
                                                        <button className='bg-red-500 p-2 w-fit rounded-full cursor-pointer hover:bg-red-300'>
                                                            <img className='invert' width="32" height="32" src="https://img.icons8.com/windows/32/trash.png" alt="trash" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>

                        </div>
                        <hr className='border-gray-200 w-full mx-auto' />
                        <div className='flex items-center'>

                            <div className=" mx-auto cursor-pointer  w-full p-3">
                                <div className='flex p-3 justify-between '>
                                    <h1 className='font-bold'>Prof. Iara M.</h1>
                                </div>
                                <div className='flex flex-col p-3  rounded hover:bg-[#f1f1f1] '>
                                    <div className='flex w-full justify-between'>
                                        <h1 className='font-regular'>Trabalho de Biologia</h1>
                                        <div className='border pr-2 rounded flex gap-2 items-center mr-5'>
                                            <span className='p-2 text-white text-sm bg-red-500 rounded'>Prazo Próximo</span>
                                            <h1 className='font-regular'>28 de Mai</h1>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='flex w-full justify-between'>
                                            <div className='flex gap-2  items-center'>
                                                <div className='w-2/6 h-full justify-start flex flex-col '>
                                                    <h1 className='font-regular'>Objetivo:</h1>
                                                    <p className=' text-sm'>Compreender o funcionamento do ciclo da água na natureza, identificando suas etapas (evaporação, condensação, precipitação e infiltração) e reconhecendo sua importância para a vida no planeta.</p>
                                                </div>
                                                <div className='w-3/6 h-full justify-start flex flex-col  '>
                                                    <h1 className='font-regular'>Atividades:</h1>
                                                    <ul className='list-disc list-inside text-sm'>
                                                        <li>Pesquisa sobre o ciclo da água em livros, sites confiáveis e vídeos educativos.</li>
                                                        <li>Elaboração de um cartaz ilustrando as etapas do ciclo da água.</li>
                                                        <li>Produção de uma pequena maquete demonstrando o ciclo da água, utilizando materiais simples como algodão, papelão, tinta, entre outros.</li>
                                                    </ul>
                                                </div>
                                                <div className='w-1/6 h-full justify-start flex  gap-2 items-center '>
                                                    <div className='flex gap-1 items-center flex flex-col'>
                                                        <p>Concluir</p>
                                                        <button className='bg-[#7fdd53] p-2 w-fit rounded-full cursor-pointer hover:bg-[#60bcfa]'>
                                                            <img className='invert' width="32" src="https://img.icons8.com/windows/32/checkmark--v1.png" alt="checkmark--v1" />
                                                        </button>
                                                    </div>
                                                    <div className='flex gap-1 items-center flex flex-col'>
                                                        <p>Excluir</p>
                                                        <button className='bg-red-500 p-2 w-fit rounded-full cursor-pointer hover:bg-red-300'>
                                                            <img className='invert' width="32" height="32" src="https://img.icons8.com/windows/32/trash.png" alt="trash" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>

                        </div>
                        <div className='flex items-center'>
                            <div className=" mx-auto cursor-pointer  w-full p-3">
                                <div className='flex p-3 justify-between '>
                                    <h1 className='font-bold'>Prof. Iara M.</h1>
                                </div>
                                <div className='flex flex-col p-3 bg-[#f7f7f7] rounded hover:bg-[#f1f1f1] '>
                                    <div className='flex w-full justify-between'>
                                        <h1 className='font-regular'>Trabalho de Português</h1>
                                        <div className='border pr-2 rounded flex gap-2 items-center mr-5'>
                                            <span className='p-2 text-white text-sm bg-red-500 rounded'>Prazo Próximo</span>
                                            <h1 className='font-regular'>28 de Mai</h1>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='flex w-full justify-between'>
                                            <div className='flex gap-2  items-center'>
                                                <div className='w-2/6 h-full justify-start flex flex-col '>
                                                    <h1 className='font-regular'>Objetivo:</h1>
                                                    <p className=' text-sm'>Compreender o funcionamento do ciclo da água na natureza, identificando suas etapas (evaporação, condensação, precipitação e infiltração) e reconhecendo sua importância para a vida no planeta.</p>
                                                </div>
                                                <div className='w-3/6 h-full justify-start flex flex-col  '>
                                                    <h1 className='font-regular'>Atividades:</h1>
                                                    <ul className='list-disc list-inside text-sm'>
                                                        <li>Pesquisa sobre o ciclo da água em livros, sites confiáveis e vídeos educativos.</li>
                                                        <li>Elaboração de um cartaz ilustrando as etapas do ciclo da água.</li>
                                                        <li>Produção de uma pequena maquete demonstrando o ciclo da água, utilizando materiais simples como algodão, papelão, tinta, entre outros.</li>
                                                    </ul>
                                                </div>
                                                <div className='w-1/6 h-full justify-start flex  gap-2 items-center '>
                                                    <div className='flex gap-1 items-center flex flex-col'>
                                                        <p>Concluir</p>
                                                        <button className='bg-[#7fdd53] p-2 w-fit rounded-full cursor-pointer hover:bg-[#60bcfa]'>
                                                            <img className='invert' width="32" src="https://img.icons8.com/windows/32/checkmark--v1.png" alt="checkmark--v1" />
                                                        </button>
                                                    </div>
                                                    <div className='flex gap-1 items-center flex flex-col'>
                                                        <p>Excluir</p>
                                                        <button className='bg-red-500 p-2 w-fit rounded-full cursor-pointer hover:bg-red-300'>
                                                            <img className='invert' width="32" height="32" src="https://img.icons8.com/windows/32/trash.png" alt="trash" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <div className=" mx-auto cursor-pointer  w-full p-3">
                                <div className='flex p-3 justify-between '>
                                    <h1 className='font-bold'>Prof. Augusto R.</h1>
                                </div>
                                <div className='flex flex-col p-3 rounded hover:bg-[#f1f1f1] '>
                                    <div className='flex w-full justify-between'>
                                        <h1 className='font-regular'>Trabalho de Português</h1>
                                        <div className='border pr-2 rounded flex gap-2 items-center mr-5'>
                                            <span className='p-2 text-white text-sm bg-red-500 rounded'>Prazo Próximo</span>
                                            <h1 className='font-regular'>28 de Mai</h1>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='flex w-full justify-between'>
                                            <div className='flex gap-2  items-center'>
                                                <div className='w-2/6 h-full justify-start flex flex-col '>
                                                    <h1 className='font-regular'>Objetivo:</h1>
                                                    <p className=' text-sm'>Compreender o funcionamento do ciclo da água na natureza, identificando suas etapas (evaporação, condensação, precipitação e infiltração) e reconhecendo sua importância para a vida no planeta.</p>
                                                </div>
                                                <div className='w-3/6 h-full justify-start flex flex-col  '>
                                                    <h1 className='font-regular'>Atividades:</h1>
                                                    <ul className='list-disc list-inside text-sm'>
                                                        <li>Pesquisa sobre o ciclo da água em livros, sites confiáveis e vídeos educativos.</li>
                                                        <li>Elaboração de um cartaz ilustrando as etapas do ciclo da água.</li>
                                                        <li>Produção de uma pequena maquete demonstrando o ciclo da água, utilizando materiais simples como algodão, papelão, tinta, entre outros.</li>
                                                    </ul>
                                                </div>
                                                <div className='w-1/6 h-full justify-start flex  gap-2 items-center '>
                                                    <div className='flex gap-1 items-center flex flex-col'>
                                                        <p>Concluir</p>
                                                        <button className='bg-[#7fdd53] p-2 w-fit rounded-full cursor-pointer hover:bg-[#60bcfa]'>
                                                            <img className='invert' width="32" src="https://img.icons8.com/windows/32/checkmark--v1.png" alt="checkmark--v1" />
                                                        </button>
                                                    </div>
                                                    <div className='flex gap-1 items-center flex flex-col'>
                                                        <p>Excluir</p>
                                                        <button className='bg-red-500 p-2 w-fit rounded-full cursor-pointer hover:bg-red-300'>
                                                            <img className='invert' width="32" height="32" src="https://img.icons8.com/windows/32/trash.png" alt="trash" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    )
}