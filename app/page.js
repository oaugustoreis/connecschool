"use client"
import Link from "next/link";
import { useState } from "react";
import { useRouter } from 'next/navigation'
import { Inter } from 'next/font/google'
import { auth } from './utils/firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
import Image from 'next/image'
import logo from '../public/assets/logo-bottom-name.png'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [loading, setLoading] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (email === "" || password === "") {
      alert("Preencha todos os campos");
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      localStorage.setItem("userId", user.uid);
      router.push("/main");
      setLoading(false);
    } catch (error) {
      console.error("Login failed:", error.code, error.message);
      alert("Erro ao fazer login: " + error.message);
      return false;
    } 
  };

  return (
    < >
      <div className="flex border h-screen items-center justify-center">
        <div className="flex flex-col items-center justify-center h-2/4 w-2/4 ">
          <div className="flex items-center justify-center h-1/4 mb-8">
            <Image src={logo} alt="Logo" width={300} />
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-left justify-center h-1/4 mb-2 w-full  ">
              <span className="text-gray-600">email:</span>
              <input onChange={(e) => setEmail(e.target.value)} type="text" id="email" name="email" className="w-full px-3 bg-white py-2 drop-shadow-[0_4px_4px_rgba(0,0,0,0.05)] rounded-full cursor-pointer hover:bg-gray-50 focus:outline-none" />
            </div>
            <div className="flex flex-col items-left justify-center h-1/4 mb-8  w-full  ">
              <span className="text-gray-600">senha:</span>
              <input onChange={(e) => setPassword(e.target.value)} type="password" id="senha" name="senha" className="w-full px-3 bg-white py-2 drop-shadow-[0_4px_4px_rgba(0,0,0,0.05)] rounded-full cursor-pointer hover:bg-gray-50 focus:outline-none" />
            </div>
            {
              loading ?
                <button disabled onClick={handleSubmit} className={` bg-blue-400 text-white p-2 rounded-full w-full drop-shadow-[0_4px_4px_rgba(0,0,0,0.05)] mb-5 cursor-pointer`}>
                  <div
                    role="status"
                    className="inline-block h-3 w-3 mr-2 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                  >
                    <span
                      className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                    >
                      Loading...
                    </span>
                  </div>
                </button>
                :
                <button onClick={handleSubmit} className={` bg-blue-400 text-white p-2 rounded-full w-full drop-shadow-[0_4px_4px_rgba(0,0,0,0.05)] mb-5 cursor-pointer`}>
                Entrar
                </button>
            }
            <div className="flex flex-col text-center items-center justify-center h-1/4 w-full">
              <a href="#" className="underline underline-offset-4 ">Recuperar senha</a>
              <Link href="/register">
                Não tem uma conta? Clique aqui
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
