
"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { Clock, LineChart } from "lucide-react";
import { LineChart as RechartLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { dia: '01', nota: 6.5 },
    { dia: '02', nota: 7 },
    { dia: '03', nota: 7.5 },
    { dia: '04', nota: 6.8 },
    { dia: '05', nota: 8.1 },
    { dia: '06', nota: 9.2 },
    { dia: '07', nota: 7 },
    { dia: '08', nota: 8 },
    { dia: '09', nota: 6.5 },
    { dia: '10', nota: 7.5 },
    // adicione mais dados se quiser
];

export default function Dashboard() {
    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", duration: 0.2, delay: 0 }} className="flex flex-col items-center h-5/6 w-5/6 ">

                <div className="w-full p-6">
                    <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

                    <div className="flex justify-center gap-16 mb-8">
                        <div className="bg-white w-1/4 rounded-2xl shadow-[0_6px_6px_rgba(0,0,0,0.05)] p-5 text-center">
                            <span className="text-gray-500 text-sm">Atividades entregues</span>
                            <h2 className="text-4xl font-bold mt-2">03</h2>
                        </div>

                        <div className="bg-white   w-1/4 rounded-2xl shadow-[0_6px_6px_rgba(0,0,0,0.05)] p-5 text-center">
                            <span className="text-gray-500 text-sm">Atividades pendentes</span>
                            <h2 className="text-4xl font-bold mt-2">07</h2>
                        </div>

                        <div className="bg-white  w-1/4  rounded-2xl shadow-[0_6px_6px_rgba(0,0,0,0.05)] p-5 relative">
                            <span className="text-gray-500 text-sm">Última prova</span>
                            <h3 className="mt-2 font-semibold">12/02/2025</h3>
                            <p className="text-black font-bold">Matemática</p>
                            <p className="text-black font-semibold">Nota: 7/10</p>
                            <div className="absolute top-4 right-4 bg-orange-100 p-2 rounded-full">
                                <Clock className="w-5 h-5 text-orange-500" />
                            </div>
                        </div>

                        <div className="bg-white  w-1/4  rounded-2xl shadow-[0_6px_6px_rgba(0,0,0,0.05)] p-5 relative">
                            <span className="text-gray-500 text-sm">Próxima prova</span>
                            <p className="text-black font-bold mt-2">Biologia</p>
                            <h3 className="text-black text-xl font-extrabold">12/03/2025</h3>
                            <div className="absolute top-4 right-4 bg-green-100 p-2 rounded-full">
                                <LineChart className="w-5 h-5 text-green-500" />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-[0_6px_6px_rgba(0,0,0,0.05)] p-6">
                        <div className="flex justify-between items-start mb-4">
                            <h2 className="text-lg  font-semibold">Matemática</h2>
                            <select className="text-sm text-gray-500 px-3 py-1 rounded-md border border-gray-300">
                                <option>Outubro</option>
                                <option>Setembro</option>
                                <option>Agosto</option>
                            </select>
                        </div>

                        <div className="h-64">
                            <ResponsiveContainer>
                                <RechartLineChart data={data}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="dia" />
                                    <YAxis domain={[6, 10]} />
                                    <Tooltip />
                                    <Line type="monotone" dataKey="nota" stroke="#3B82F6" dot={{ r: 3 }} />
                                </RechartLineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}
