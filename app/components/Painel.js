
import { motion, AnimatePresence } from 'framer-motion';
export default function Calendar() {
    const notas = [
        { materia: 'Matemática', nota: '9,0 / 10' },
        { materia: 'Português', nota: '9,0 / 10' },
        { materia: 'Ciências', nota: '8,5 / 10' },
    ];
    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "Spring", duration: 0.2, delay: 0 }} className="w-full h-full">
                <div className="p-5 flex flex-col h-full shadow-[0_6px_6px_rgba(0,0,0,0.05)] bg-white rounded-lg mb-4 ">
                    <h1 className="text-2xl font-bold mb-6">Aqui está um resumo sobre o que está acontecendo com Jadna.</h1>
                    <div className='flex items-center'>
                        <div className='p-3 w-2/5 h-full  flex flex-col '>
                            <div className='h-full'>
                                <div className='flex flex-col h-1/2 p-4 items-center justify-around  w-full'>
                                    <span className='font-regular text-xl'>Frequência</span>
                                    <h1 className='text-6xl font-light'>92%</h1>
                                    <span className='text-xl'>2 faltas justificadas</span>
                                </div>
                                <hr className='border-gray-200' />

                                <div className='flex flex-col h-1/2  items-center justify-center  w-full'>
                                    <span className='font-regular text-xl font-bold mb-2'>Próximos Eventos</span>
                                    <div className='flex flex-col gap-2 text-center'>
                                        <span>Simulado de Mat... - 02/03</span>
                                        <span>Apresentação de artes - 02/04</span>
                                        <span>Apresentação de Port... - 08/04</span>
                                    </div>
                                    <a href="#" className='p-2 font-semibold underline'>Ver Mais</a>
                                </div>
                            </div>
                        </div>
                        <div className='w-full'>
                            <div className=" mx-auto  cursor-pointer  w-5/6 p-3">
                                <div className='flex p-3 justify-between'>
                                    <h1 className='font-bold'>Notas Recentes</h1>
                                    <h1 className='font-bold'>Nota</h1>
                                </div>
                                <div className='flex p-3 bg-[#f7f7f7] rounded hover:bg-[#f1f1f1] justify-between'>
                                    <h1 className='font-regular'>Português</h1>
                                    <h1 className='font-regular'>9.0/10</h1>
                                </div>
                                <div className='flex p-3 bg-[#fff] rounded hover:bg-[#f1f1f1] justify-between'>
                                    <h1 className='font-regular'>Ciências</h1>
                                    <h1 className='font-regular'>9.0/10</h1>
                                </div>
                                <div className='flex p-3 bg-[#f7f7f7] rounded hover:bg-[#f1f1f1] justify-between'>
                                    <h1 className='font-regular'>Matemática</h1>
                                    <h1 className='font-regular'>9.0/10</h1>
                                </div>

                            </div>
                            <hr className='border-gray-200 w-5/6 mx-auto' />
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

                    </div>
                    <hr className='border-gray-200 w-5/6 mx-auto' />
                    <div className=" mx-auto cursor-pointer w-5/6 p-3">
                        <h1 className='font-bold mb-4'>Últimas mensagens</h1>
                        <div className='flex p-3 justify-left bg-[#f7f7f7] rounded '>
                            <h1 className='font-bold w-1/4'>Últimas mensagens</h1>
                            <h1 className='font-bold w-1/4'>Matéria</h1>
                            <h1 className='font-bold w-1/4'>Data</h1>
                        </div>
                        <div className='flex p-4 text-sm  justify-left rounded '>
                            <h1 className='font-light w-1/4'>Prof. Iara Magalhães</h1>
                            <h1 className='font-light w-1/4'>Português</h1>
                            <h1 className='font-light w-1/4'>12 de fev.</h1>
                            <h1 className='font-light w-1/4'>Fico muito feliz em saber que o...</h1>
                        </div>
                        <hr className='border-gray-200 w-full mx-auto' />
                        <div className='flex p-4 text-sm justify-left rounded '>
                            <h1 className='font-light w-1/4'>Prof. Millaya Oliveira</h1>
                            <h1 className='font-light w-1/4'>Direção</h1>
                            <h1 className='font-light w-1/4'>12 de fev.</h1>
                            <h1 className='font-light w-1/4'>Fico muito feliz em saber que o...</h1>
                        </div>

                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    )
}