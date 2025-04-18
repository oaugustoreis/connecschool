"use client"
import { useState } from "react";
import Profile from "../components/Profile";
import Navbar from "../components/DashboardMenu";
import Calendar from "../components/Calendar";
import Inbox from "../components/Inbox";
import Atividades from "../components/Atividades";
import Dashpage from "../components/Dashboard";
import HelloBar from "../components/HelloBar";
export default function Dashboard() {
    const [activeComponent, setActiveComponent] = useState('dashboard');
    const renderComponent = () => {
        switch (activeComponent) {
            case 'profile':
                return <Profile />;
            case 'calendar':
                return <Calendar />;
            case 'inbox':
                return <Inbox />;
            case 'atividades':
                return <Atividades />;
            case 'dashboard':
                return <Dashpage />;
            default:
                return <Dashpage />;
        }
    };
    return (
        <>
            <div className="flex flex-row w-full h-screen ">
                <div className="w-1/5">
                    <Navbar setActiveComponent={setActiveComponent} />
                </div>
                <div className="flex flex-col items-center justify-center h-screen w-full bg-gray-100">
                    <div className="flex mb-5 w-5/6 bg-white rounded-lg shadow-[0_6px_6px_rgba(0,0,0,0.05)]">
                        <HelloBar />
                    </div>
                    <div className="flex flex-col items-center h-5/6 w-5/6 ">
                        {renderComponent()}
                    </div>
                </div>
            </div>
        </>
    )
}