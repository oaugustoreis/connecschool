import Message from "./ChatMessage"
export default function Chat() {
    return (
        <div>
            <div className="flex items-center p-2 rounded-lg bg-[#f1f4f9] h-full justify-between mb-4 ">
                <div className='flex text-sm text-[#202224] justify-between items-center w-full'>
                    <h1>
                        Prof. Iara Magalhães
                    </h1>
                    <div className="flex justify-between items-center gap-2">
                        <div className="bg-yellow-500 w-3 h-3 rounded-full">
                        </div>
                        <span>Online</span>
                    </div>
                    <div className="flex items-center">
                        <span>
                            iaradasilva@connect.com
                        </span>
                        <img width="32" height="32" src="https://img.icons8.com/windows/32/menu-2.png" alt="menu-2" />
                    </div>
                </div>
            </div>
            <div>
                <Message side={true} message={"Oi, professora Iara! Tudo bem? A Jadna comentou que teve uma atividade em grupo hoje. Ela ficou um pouco insegura queria saber como ela se saiu."}/>
                <Message side={false} message={"Aproveitando, queria agradecer pelo apoio que você tem dado a ela. Tem feito muita diferença, viu?"}/>
                <Message side={true} message={" Oi, Dona Abigail! Tudo ótimo, obrigada. A Jadna participou sim e se saiu muito bem! No início estava tímida, mas depois colaborou com ótimas ideias."}/>
                <Message side={false} message={" Fico muito feliz em saber que o apoio está fazendo diferença. Estamos juntas nesse processo! Qualquer coisa, me chama por aqui."}/>
            </div>
        </div>
    )
}