"use client";

import Link from "next/link";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../utils/firebase";
import { useRouter } from "next/navigation";
import { cadastrarInfos } from "../utils/views";

import styles from "./Register.module.css"
import Image from "next/image";
import logo from "../../public/assets/logo-bottom-name.png";
export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !email ||
      !password ||
      !confirmPassword ||
      !name ||
      !surname ||
      !phone
    ) {
      alert("Preencha todos os campos");
      return;
    }

    if (password !== confirmPassword) {
      alert("As senhas não coincidem");
      return;
    }

    try {
      console.log(email, password, confirmPassword, name, surname, phone);
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      await cadastrarInfos(user.uid, name, surname, email, phone);
      console.log("Usuário cadastrado com sucesso:", user);
      console.log(user);

      router.push("/main");
      return { success: true };
    } catch (error) {
      alert(`Erro: ${error.message}`);
      return {
        success: false,
        errorCode: error.code,
        errorMessage: error.message,
      };
    }
  };

  return (
    <>
      <div className="flex border h-screen items-center justify-center">
        <div className="flex flex-col items-center justify-center h-2/4 ">
          <div className="flex flex-col items-center justify-center h-1/4 w-full mb-8">
            <Image src={logo} alt="Logo" width={300} />
          </div>
          <span className="mb-8">Cadastre-se para ter acesso</span>

          <div className="flex flex-col items-center w-full  justify-center">
            <div className={`${styles.register} gap-3 justify-center mb-3`}>
              <div className="flex flex-col items-left justify-center w-full  ">
                <span className="text-gray-600">nome:</span>
                <input
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  id="nome"
                  name="nome"
                  className="w-full px-3 bg-white py-2 drop-shadow-[0_4px_4px_rgba(0,0,0,0.05)] rounded-full cursor-pointer hover:bg-gray-50 focus:outline-none"
                />
              </div>
              <div className="flex flex-col items-left justify-center  w-full">
                <span className="text-gray-600">sobrenome:</span>
                <input
                  onChange={(e) => setSurname(e.target.value)}
                  type="text"
                  id="sobrenome"
                  name="sobrenome"
                  className="w-full px-3 bg-white py-2 drop-shadow-[0_4px_4px_rgba(0,0,0,0.05)] rounded-full cursor-pointer hover:bg-gray-50 focus:outline-none"
                />
              </div>
            </div>
            <div className={`${styles.register} gap-3 justify-center mb-3`}>
              <div className="flex flex-col items-left justify-center  w-full  ">
                <span className="text-gray-600">email:</span>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  id="email"
                  name="email"
                  className="w-full px-3 bg-white py-2 drop-shadow-[0_4px_4px_rgba(0,0,0,0.05)] rounded-full cursor-pointer hover:bg-gray-50 focus:outline-none"
                />
              </div>
              <div className="flex flex-col items-left justify-center  w-full  ">
                <span className="text-gray-600">telefone:</span>
                <input
                  onChange={(e) => setPhone(e.target.value)}
                  type="text"
                  id="telefone"
                  name="telefone"
                  className="w-full px-3 bg-white py-2 drop-shadow-[0_4px_4px_rgba(0,0,0,0.05)] rounded-full cursor-pointer hover:bg-gray-50 focus:outline-none"
                />
              </div>
            </div>
            <div className={`${styles.register} gap-3 justify-center mb-3`}>
              <div className="flex flex-col items-left justify-center  w-full  ">
                <span className="text-gray-600">senha:</span>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  id="senha"
                  name="senha"
                  className="w-full px-3 bg-white py-2 drop-shadow-[0_4px_4px_rgba(0,0,0,0.05)] rounded-full cursor-pointer hover:bg-gray-50 focus:outline-none"
                />
              </div>
              <div className="flex flex-col items-left justify-center w-full  ">
                <span className="text-gray-600">confirmar senha:</span>
                <input
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  type="password"
                  id="confirmar"
                  name="confirmar"
                  className="w-full px-3 bg-white py-2 drop-shadow-[0_4px_4px_rgba(0,0,0,0.05)] rounded-full cursor-pointer hover:bg-gray-50 focus:outline-none"
                />
              </div>
            </div>


            {
              loading ?
                <button disabled onClick={handleSubmit} className={` bg-blue-400 text-white p-2 drop-shadow-[0_4px_4px_rgba(0,0,0,0.05)] rounded-full w-2/4 mb-5 mt-5 font-md cursor-pointer`}>
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
                <button
                  onClick={handleSubmit}
                  className={` bg-blue-400 text-white p-2 drop-shadow-[0_4px_4px_rgba(0,0,0,0.05)] rounded-full w-2/4 mb-5 mt-5 font-md cursor-pointer`}
                >
                  CADASTRAR
                </button>
            }
            <div className="flex flex-col items-center justify-center h-1/4 w-full">
              <Link href="../">Já tem uma conta? Clique aqui</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
