
import { motion, AnimatePresence } from 'framer-motion';
export default function Calendar() {
    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "Spring", duration: 0.2, delay: 0 }} className="w-full h-full">
                <div className="flex items-center h-full shadow-[0_6px_6px_rgba(0,0,0,0.05)] bg-white rounded-lg justify-between mb-4 ">
                    <h1>Calendario</h1>
                </div>
            </motion.div>
        </AnimatePresence>
    )
}