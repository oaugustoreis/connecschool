"use client"

import logo from '../../public/assets/logo-w-name.png';
import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
export default function Navbar({ setActiveComponent }) {
    
    
    const [activeButton, setActiveButton] = useState("Dashboard");
    const router = useRouter();

    const handleButtonClick = (component, name) => {
        setActiveButton(name);
        setActiveComponent(component);
    };
    const logout = ( ) => {
        try {
            signOut(auth);
            router.push("/");
            return true;
        }
        catch (error) {
            console.error("Error logging out user:", error);
            alert(error.message);
            return false;
        }
    };
    const items = [
        { id: 1, name: 'Dashboard', icon: 'https://img.icons8.com/windows/32/dashboard.png', component: 'dashboard' },
        { id: 2, name: 'Painel', icon: 'https://img.icons8.com/windows/32/microsoft--v2.png', component: 'painel' },
        { id: 3, name: 'Inbox', icon: 'https://img.icons8.com/windows/32/chat.png', component: 'inbox' },
        { id: 4, name: 'Atividades', icon: 'https://img.icons8.com/windows/32/todo-list.png', component: 'atividades' },
        { id: 5, name: 'Calendario', icon: 'https://img.icons8.com/windows/32/calendar.png', component: 'calendar' },
        { id: 6, name: 'Lista de afazeres', icon: 'https://img.icons8.com/windows/32/inspection.png', component: 'todo' },
        { id: 7, name: 'Contatos', icon: 'https://img.icons8.com/windows/32/user-group-man-man--v1.png', component: 'contacts' },
        { id: 8, name: 'Desempenho', icon: 'https://img.icons8.com/windows/32/bar-chart.png', component: 'main' },
        { id: 9, name: 'Meu Perfil', icon: 'https://img.icons8.com/windows/32/gender-neutral-user.png', component: 'profile' },
    ];
    return (
        <>
            <nav className=" h-screen w-full flex flex-col items-center bg-white shadow-lg">
                <div className="flex pt-3 items-center justify-center h-24 w-full mb-8">
                    <Image priority src={logo} alt='logo' width={200} />
                </div>
                <div className="flex flex-col justify-between h-full w-full">
                    {items.map((item) => (
                        <div key={item.id} className="flex items-center">
                            <AnimatePresence>
                                {activeButton === item.name && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ type: "spring", duration: 0.2, delay: 0 }}
                                        className="mr-3 left-0 h-full w-2 bg-[#60A5FA] rounded-full"
                                    />
                                )}
                            </AnimatePresence>
                            <button
                                onClick={() => handleButtonClick(item.component, item.name)}
                                className={`my-1 flex items-center gap-8 p-4 relative z-10 ${activeButton === item.name
                                    ? "w-full rounded-full bg-[#60A5FA] text-white"
                                    : "w-full hover:bg-gray-200 text-black"
                                    }  cursor-pointer`}
                            >
                                <img
                                    width={`${activeButton === item.name ? "28" : "24"}`}
                                    height="24"
                                    src={item.icon}
                                    alt={item.name}
                                    className={`${activeButton === item.name ? "invert" : ""}`}
                                />
                                <h1 className={`${activeButton === item.name ? "text-[1rem] font-[500]" : "text-[.8rem]"}`}>
                                    {item.name}
                                </h1>
                            </button>
                        </div>
                    ))}
                    <div className="flex flex-col items-center border-t border-gray-200 ">
                        <div className="flex px-3 justify-center items-center gap-8 p-4 w-full my-1 cursor-pointer hover:bg-gray-200">
                            <img width="24" height="24" src="https://img.icons8.com/windows/32/settings--v1.png" alt="settings--v1" />
                            <h2 className="text-lg text-[.8rem] font-[500] text-black"> Configurações</h2>
                        </div>
                        <button onClick={logout} className="flex px-3 justify-center  items-center gap-8 p-4 w-full my-1 cursor-pointer hover:bg-gray-200">
                            <img width="24" height="24" src="https://img.icons8.com/windows/32/shutdown.png" alt="shutdown" />
                            <h2 className="text-lg text-[.8rem] font-[500] text-black"> Sair</h2>
                        </button>
                    </div>
                </div>
            </nav>
        </>
    )
}