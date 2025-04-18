export default function MessageTable() {
    const messages = [
        { name: "Prof. Iara Magalhães", subject: "Português", date: "12 de fev.", newMessages: 1 },
        { name: "Prof. Millaya Oliveira", subject: "Direção", date: "12 de fev.", newMessages: 2 },
        { name: "Prof. Alex Joelson", subject: "Matemática", date: "12 de fev.", newMessages: 1 },
        { name: "Prof. Augusto Cesar", subject: "História", date: "12 de fev.", newMessages: 1 },
    ];

    return (
        <div className="overflow-x-auto rounded-lg">
            <div className='flex gap-2 justify-between w-full p-3 rounded-lg'>
                <h1 className="font-bold text-lg">Inbox</h1>
                <select className="text-sm text-gray-500 border rounded-md border-gray-300" name="chat" id="">
                    <option value="recentes">Recentes</option>
                    <option value="recentes">Mais antigos</option>
                </select>
            </div>
            <table className="min-w-full table-auto">
                <thead>
                    <tr className="bg-[#f1f4f9] text-left text-sm font-semibold text-gray-700">
                        <th className=" rounded-md px-6 py-3">Nome</th>
                        <th className="px-6 py-3">Matéria</th>
                        <th className="px-6 py-3">Data</th>
                        <th className="rounded-md px-6 py-3"></th>
                    </tr>
                </thead>
                <tbody className="text-sm text-gray-700">
                    {messages.map((msg, idx) => (
                        <tr
                            key={idx}
                            className={` cursor-pointer hover:bg-gray-50 transition duration-200 ease-in-out`}
                        >
                            <td className="px-6 py-4">{msg.name}</td>
                            <td className="px-6 py-4">{msg.subject}</td>
                            <td className="px-6 py-4">{msg.date}</td>
                            <td className="px-6 py-4 flex items-center gap-2">
                                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                                    {msg.newMessages}
                                </span>
                                <span className="font-semibold text-sm text-gray-800">Novas mensagens</span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}