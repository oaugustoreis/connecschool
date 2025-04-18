"use client"
import Link from "next/link";
import { useState } from "react";
import { useRouter } from 'next/navigation'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import logo from '../public/assets/logo-bottom-name.png'
const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      alert("Preencha todos os campos");
    } else if (email === "iara@gmail.com" || password === "12345") {
      alert("Login realizado com sucesso");
      router.push("/main");
    }
  }
  return (
    < >
      <div className="flex border h-screen items-center justify-center">
        <div className="flex flex-col items-center justify-center h-2/4 w-1/4 ">
          <div className="flex items-center justify-center h-1/4 w-full mb-8">
            <Image src={logo} alt="Logo" width={300} />
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-left justify-center h-1/4 mb-2 w-full  ">
              <span className="text-gray-600">email:</span>
              <input onChange={(e) => setEmail(e.target.value)} type="text" id="username" name="username" className="w-full px-3 bg-white py-2 drop-shadow-[0_4px_4px_rgba(0,0,0,0.05)] rounded-full cursor-pointer hover:bg-gray-50 focus:outline-none" />
            </div>
            <div className="flex flex-col items-left justify-center h-1/4 mb-8  w-full  ">
              <span className="text-gray-600">senha:</span>
              <input onChange={(e) => setPassword(e.target.value)} type="password" id="username" name="username" className="w-full px-3 bg-white py-2 drop-shadow-[0_4px_4px_rgba(0,0,0,0.05)] rounded-full cursor-pointer hover:bg-gray-50 focus:outline-none" />
            </div>
            <button onClick={handleSubmit} className={` bg-blue-400 text-white p-2 rounded-full w-full drop-shadow-[0_4px_4px_rgba(0,0,0,0.05)] mb-5 cursor-pointer`}>ENTRAR</button>
            <div className="flex flex-col items-center justify-center h-1/4 w-full">
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
