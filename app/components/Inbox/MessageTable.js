export default function MessageTable({ setConversa }) {
    const messages = [
        {
            id: 1, name: "Prof. Iara Magalhães", email: "iara.magalhaes@connect.edu.br", subject: "Português", date: "12 de fev.", newMessages: 1,
            conversation: [
                { message: "Bom dia, professora Iara! Tudo bem? Gostaria de saber como o Joãozinho se comportou hoje na aula.", side: true },
                { message: "Bom dia! Tudo ótimo, e você? O Joãozinho participou muito bem hoje, especialmente nas atividades em grupo!", side: false },
                { message: "Fico muito feliz em saber! Ele estava um pouco nervoso de manhã.", side: true },
                { message: "É normal, mas ele se saiu super bem. Incentivamos bastante a participação de todos e ele se destacou positivamente.", side: false },
                { message: "Que ótimo! Muito obrigado pelo retorno, professora. 😊", side: true },
                { message: "Imagina! Qualquer novidade, mantenho você informado. Tenha um ótimo dia!", side: false }
            ]
        },
        {
            id: 2, name: "Prof. Millaya Oliveira", email: "millaya.oliveira@connect.edu.br", subject: "Direção", date: "12 de fev.", newMessages: 2,

            conversation:[
                { message: "Boa tarde, professora! A Ana comentou que teve uma apresentação hoje. Como ela se saiu?", side: true },
                { message: "Boa tarde! A Ana foi muito bem. Ela estava um pouco tímida no começo, mas depois se soltou e apresentou super bem.", side: false },
                { message: "Que bom ouvir isso! Obrigada pelo apoio de sempre!", side: true },
                { message: "Eu que agradeço a parceria! A Ana é uma ótima aluna.", side: false }
            ]
              
        },
        {
            id: 3, name: "Prof. Alex Joelson", email: "alex.joelson@connect.edu.br", subject: "Matemática", date: "12 de fev.", newMessages: 1,

            conversation:[
                { message: "Oi, professor! Vi que o Gustavo teve prova de matemática hoje. Ele estava um pouco preocupado em casa.", side: true },
                { message: "Oi! O Gustavo foi muito bem, fez a prova com bastante atenção. Estou orgulhoso do desempenho dele.", side: false },
                { message: "Nossa, que alívio! Ele se dedicou bastante estudando.", side: true },
                { message: "Isso fez toda a diferença! Parabéns pelo apoio em casa também.", side: false }
            ]
              
        },
        {
            id: 4, name: "Prof. Augusto Cesar", email: "augusto.reis@connect.edu.br", subject: "História", date: "12 de fev.", newMessages: 1,

            conversation:[
                { message: "Olá, professora! Notei que o Lucas anda um pouco quieto em casa. Está tudo bem na escola?", side: true },
                { message: "Olá! Aqui na escola ele tem estado mais reservado, mas participa normalmente das atividades.", side: false },
                { message: "Entendi, vamos conversar melhor em casa. Obrigada por avisar!", side: true },
                { message: "Claro! Se precisar, estou à disposição para ajudar no que for necessário.", side: false }
            ]
        },
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
                        <tr onClick={() => setConversa(msg)}
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