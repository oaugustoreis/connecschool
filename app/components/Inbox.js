"use client"
import { useState } from 'react';
import Chat from './Inbox/Chat';

import { motion, AnimatePresence } from 'framer-motion';
import MessageTable from './Inbox/MessageTable';
export default function Inbox() {
    const [conversa, setConversa] = useState();

    console.log(conversa);
    
    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "Spring", duration: 0.2, delay: 0 }} className="w-full h-full">
                <div className="flex items-center h-full shadow-[0_6px_6px_rgba(0,0,0,0.05)] bg-white rounded-lg justify-between mb-4 ">
                    <div className='p-3 w-2/4 h-full'>
                        <MessageTable setConversa={setConversa} />
                    </div>
                    <div className='w-0.5 h-full bg-gray-100'></div>
                    <div className='p-3 bg-white w-2/4 h-full'>
                        <Chat conversa={conversa} />
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    )
}