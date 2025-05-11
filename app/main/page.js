"use client"
import { useState, useEffect } from "react";
import Profile from "../components/Profile";
import Navbar from "../components/DashboardMenu";
import Calendar from "../components/Calendar";
import Contatos from "../components/Contatos";
import Inbox from "../components/Inbox";
import Painel from "../components/Painel";
import Atividades from "../components/Atividades";
import Dashpage from "../components/Dashboard";
import HelloBar from "../components/HelloBar";
import Todo from "../components/ToDo";
import { auth } from "../utils/firebase";
import { get_user } from "../utils/views";

export default function Dashboard() {
  const [userId, setUserId] = useState(null);
  const [userData, setUserData] = useState(null);
  const [activeComponent, setActiveComponent] = useState('dashboard');
  const [child, setChild] = useState("seu filho");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const uid = user.uid;
        setUserId(uid);
        try {
          const res = await get_user(uid);
          console.log("User:", res);
          setUserData(res);
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      } else {
        setUserId(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const renderComponent = () => {
    switch (activeComponent) {
      case 'profile':
        return <Profile userId={userId} userData={userData} />;
      case 'calendar':
        return <Calendar />;
      case 'painel':
        return <Painel />;
      case 'inbox':
        return <Inbox />;
      case 'atividades':
        return <Atividades child={child} />;
      case 'contacts':
        return <Contatos />;
      case 'todo':
        return <Todo />;
      case 'dashboard':
      default:
        return <Dashpage />;
    }
  };

  return (
    <div className="flex flex-row w-full h-screen">
      <div className="w-1/5">
        <Navbar setActiveComponent={setActiveComponent} />
      </div>
      <div className="flex flex-col items-center justify-center h-screen w-full bg-gray-100">
        <div className="flex mb-5 w-5/6 bg-white rounded-lg shadow-[0_6px_6px_rgba(0,0,0,0.05)]">
          {userData ? (
              <HelloBar userData={userData} setChild={setChild}  />
            ) : (
                <HelloBar userData={userData} loading={true} />
          )}
        </div>
        <div className="flex flex-col items-center h-5/6 w-5/6">
          {renderComponent()}
        </div>
      </div>
    </div>
  )
}
