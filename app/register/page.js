"use client"

import Link from "next/link";
import { useState } from "react";
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import logo from '../../public/assets/logo-bottom-name.png'
export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "" || confirmPassword === "" || name === "" || surname === "" || phone === "") {
      alert("Preencha todos os campos");
    } else  {
      alert("Login realizado com sucesso");
      router.push("/main");
    }
  }
  return (
    < >
      <div className="flex border h-screen items-center justify-center">
        <div className="flex flex-col items-center justify-center h-2/4 w-1/4 ">
          <div className="flex flex-col items-center justify-center h-1/4 w-full mb-8">
            <Image src={logo} alt="Logo" width={300} />
          </div>
          <span className="mb-8">Cadastre-se para ter acesso</span>


          <div className="flex flex-col items-center w-5/6 justify-center">
            <div className="flex gap-3 justify-center ">
              <div className="flex flex-col items-left justify-center h-1/4 mb-3 w-full  ">
                <span className="text-gray-600">nome:</span>
                <input onChange={(e) => setName(e.target.value)} type="text" id="username" name="username" className="w-full px-3 bg-white py-2 drop-shadow-[0_4px_4px_rgba(0,0,0,0.05)] rounded-full cursor-pointer hover:bg-gray-50 focus:outline-none" />
              </div>
              <div className="flex flex-col items-left justify-center h-1/4 w-full  ">
                <span className="text-gray-600" >sobrenome:</span>
                <input onChange={(e) => setSurname(e.target.value)} type="text" id="username" name="username" className="w-full px-3 bg-white py-2 drop-shadow-[0_4px_4px_rgba(0,0,0,0.05)] rounded-full cursor-pointer hover:bg-gray-50 focus:outline-none" />
              </div>
            </div>
            <div className="flex gap-3 mb-3 justify-center">
              <div className="flex flex-col items-left justify-center h-1/4 w-full  ">
                <span className="text-gray-600" >email:</span>
                <input onChange={(e) => setEmail(e.target.value)} type="text" id="username" name="username" className="w-full px-3 bg-white py-2 drop-shadow-[0_4px_4px_rgba(0,0,0,0.05)] rounded-full cursor-pointer hover:bg-gray-50 focus:outline-none" />
              </div>
              <div className="flex flex-col items-left justify-center h-1/4  w-full  ">
                <span className="text-gray-600" >telefone:</span>
                <input onChange={(e) => setPhone(e.target.value)} type="text" id="username" name="username" className="w-full px-3 bg-white py-2 drop-shadow-[0_4px_4px_rgba(0,0,0,0.05)] rounded-full cursor-pointer hover:bg-gray-50 focus:outline-none" />
              </div>
            </div>
            <div className="flex gap-3 justify-center">
              <div className="flex flex-col items-left justify-center h-1/4 w-full  ">
                <span className="text-gray-600" >senha:</span>
                <input onChange={(e) => setPassword(e.target.value)} type="password" id="username" name="username" className="w-full px-3 bg-white py-2 drop-shadow-[0_4px_4px_rgba(0,0,0,0.05)] rounded-full cursor-pointer hover:bg-gray-50 focus:outline-none" />
              </div>
              <div className="flex flex-col items-left justify-center h-1/4  w-full  ">
                <span className="text-gray-600" >confirmar senha:</span>
                <input onChange={(e) => setConfirmPassword(e.target.value)} type="password" id="username" name="username" className="w-full px-3 bg-white py-2 drop-shadow-[0_4px_4px_rgba(0,0,0,0.05)] rounded-full cursor-pointer hover:bg-gray-50 focus:outline-none" />
              </div>
            </div>


            <button onClick={handleSubmit} className={` bg-blue-400 text-white p-2 drop-shadow-[0_4px_4px_rgba(0,0,0,0.05)] rounded-full w-2/4 mb-5 font-md cursor-pointer`}>CADASTRAR</button>
            <div className="flex flex-col items-center justify-center h-1/4 w-full">
              <Link href="../">
                Já tem uma conta? Clique aqui
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
