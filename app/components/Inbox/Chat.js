import { useState } from "react";
import { useEffect } from "react";
import Message from "./ChatMessage";

export default function Chat({ conversa }) {

   const [messages, setMessages] = useState(conversa?.conversation || []);
  const [inputValue, setInputValue] = useState("");
  useEffect(() => {
    setMessages(conversa?.conversation || []);
  }, [conversa]);
  function handleSendMessage() {
    if (inputValue.trim() === "") return;

    const newMessage = { message: inputValue, side: false };

    setMessages([...messages, newMessage]);
    setInputValue("");
  }
  return (
    conversa && (
      <div className="flex flex-col h-full">
        <div className="flex items-center p-2 rounded-lg bg-[#f1f4f9] justify-between mb-2">
          <div className="flex text-sm text-[#202224] justify-between items-center w-full">
            <h1>{conversa.name}</h1>
            <div className="flex justify-between items-center gap-2">
              <div className="bg-yellow-500 w-3 h-3 rounded-full" />
              <span>Online</span>
            </div>
            <div className="flex items-center gap-2">
              <span>{conversa.email}</span>
              <img width="32" height="32" src="https://img.icons8.com/windows/32/menu-2.png" alt="menu-2" />
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          {messages.map((msg, index) => (
            <Message key={index} side={msg.side} message={msg.message} />
          ))}

        </div>

        <div className="flex items-center p-2 gap-3 bg-white">
          <div className="flex items-center w-full max-w-2xl shadow-md px-3 bg-white py-2 border border-gray-300 rounded-full">
            <input
              className="w-full outline-none"
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Escreva aqui..."
            />
            <img width="24" src="https://img.icons8.com/windows/32/attach.png" alt="attach" />
          </div>
          <button
            className="bg-blue-400 shadow-md text-white rounded-full text-sm p-2 px-4 hover:bg-blue-500"
            onClick={handleSendMessage}
          >
            Enviar
          </button>
        </div>
      </div>
    )
  );
}