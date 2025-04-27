import UploadButton from './AtividadesComponents/UploadButton';
import { motion, AnimatePresence } from 'framer-motion';
export default function Atividades() {
    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "Spring", duration: 0.2, delay: 0 }} className="w-full h-full">
                <div className="p-5 flex flex-col h-full shadow-[0_6px_6px_rgba(0,0,0,0.05)] bg-white rounded-lg mb-4 ">
                    <h1 className="text-2xl font-bold mb-6">Aqui está um resumo sobre o que está acontecendo com Jadna.</h1>
                    <div className='flex items-center'>

                        <div className=" mx-auto cursor-pointer  w-5/6 p-3">
                            <div className='flex p-3 justify-between '>
                                <h1 className='font-bold'>Tarefas em andamento</h1>
                                <h1 className='font-bold'>Prazo</h1>
                            </div>
                            <div className='flex p-3 bg-[#f7f7f7] rounded hover:bg-[#f1f1f1] justify-between'>
                                <h1 className='font-regular'>Trabalho de Ciências</h1>
                                <h1 className='font-regular'>28 de Mai</h1>
                            </div>
                            <div className='flex p-3 bg-[#fff] rounded hover:bg-[#f1f1f1] justify-between'>
                                <h1 className='font-regular'>Trabalho de Artes</h1>
                                <h1 className='font-regular'>21 de Mai</h1>
                            </div>
                            <div className='flex p-3 bg-[#f7f7f7] rounded hover:bg-[#f1f1f1] justify-between'>
                                <h1 className='font-regular'>Ciências</h1>
                                <h1 className='font-regular'>23 de Mai</h1>
                            </div>

                        </div>

                    </div>
                    <hr className='border-gray-200 w-5/6 mx-auto' />
                    <div className=" mx-auto cursor-pointer w-5/6 p-3 overflow-y-auto">
                        <h1 className='font-bold mb-4'>Últimas atividades</h1>
                        <div className='flex p-3 justify-left bg-[#f7f7f7] rounded '>
                            <h1 className='font-bold w-1/5'>Atividade</h1>
                            <h1 className='font-bold w-1/5'>Matéria</h1>
                            <h1 className='font-bold w-1/5'>Data</h1>
                            <h1 className='font-bold w-1/5'>Entrega</h1>
                        </div>
                        <div className='flex p-4 text-sm items-center justify-left rounded '>
                            <h1 className='font-light w-1/5'>Atividades de fixação</h1>
                            <h1 className='font-light w-1/5'>Português</h1>
                            <h1 className='font-light w-1/5'>12 de fev.</h1>
                            <h1 className='font-light w-1/5'>12 de abr.</h1>
                            <div className='flex justify-center items-center w-1/5'>
                                <UploadButton />
                            </div>
                        </div>
                        <hr className='border-gray-200 w-full mx-auto' />
                        <div className='flex p-4 text-sm items-center justify-left rounded '>
                            <h1 className='font-light w-1/5'>Atividades de fixação</h1>
                            <h1 className='font-light w-1/5'>Português</h1>
                            <h1 className='font-light w-1/5'>12 de fev.</h1>
                            <h1 className='font-light w-1/5'>12 de abr.</h1>
                            <div className='flex justify-center items-center w-1/5'>
                            <UploadButton />
                            </div>
                        </div>
                        <hr className='border-gray-200 w-full mx-auto' />
                        <div className='flex p-4 text-sm items-center justify-left rounded '>
                            <h1 className='font-light w-1/5'>Atividades de fixação</h1>
                            <h1 className='font-light w-1/5'>Artes</h1>
                            <h1 className='font-light w-1/5'>12 de fev.</h1>
                            <h1 className='font-light w-1/5'>12 de abr.</h1>
                            <div className='flex justify-center items-center w-1/5'>
                            <UploadButton />
                            </div>
                        </div>
                        <hr className='border-gray-200 w-full mx-auto' />
                        <div className='flex p-4 text-sm items-center justify-left rounded '>
                            <h1 className='font-light w-1/5'>Atividades de fixação</h1>
                            <h1 className='font-light w-1/5'>Inglês</h1>
                            <h1 className='font-light w-1/5'>12 de fev.</h1>
                            <h1 className='font-light w-1/5'>12 de abr.</h1>
                            <div className='flex justify-center items-center w-1/5'>
                            <UploadButton />
                            </div>
                        </div>
                        <hr className='border-gray-200 w-full mx-auto' />
                        <div className='flex p-4 text-sm items-center justify-left rounded '>
                            <h1 className='font-light w-1/5'>Atividades de fixação</h1>
                            <h1 className='font-light w-1/5'>Ciências</h1>
                            <h1 className='font-light w-1/5'>12 de fev.</h1>
                            <h1 className='font-light w-1/5'>12 de abr.</h1>
                            <div className='flex justify-center items-center w-1/5'>
                                <UploadButton />
                            </div>

                        </div>


                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    )
}