import Chat from './Inbox/Chat';
import MessageTable from './Inbox/MessageTable';
export default function Inbox() {
    return (
        <div className="w-full h-full">
            <div className="flex items-center h-full shadow-[0_6px_6px_rgba(0,0,0,0.05)] bg-white rounded-lg justify-between mb-4 ">
                <div className='p-3 w-2/4 h-full'>
                    <MessageTable />
                </div>
                <div className='p-3 bg-white w-2/4 h-full'>
                    <Chat />
                </div>
            </div>
        </div>
    )
}