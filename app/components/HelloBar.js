export default function HelloBar({ userData, loading }) {
    if (loading) {
        return (
            <div className="flex justify-between w-full items-center h-16 px-8 ">
                <h1 className="text-blue-900 text-xl font-bold">Carregando...</h1>
            </div>
        )
    }    
    return (
        <>
            <div className="flex justify-between w-full items-center h-16 px-8 ">
                <h1 className="text-blue-900 text-xl font-bold">Olá, {userData.firstName} </h1>
                <div className=" flex items-center text-sm font-[500] text-gray-500 gap-4">
                    <img width="28" src="https://img.icons8.com/external-kmg-design-flat-kmg-design/32/external-notification-user-interface-kmg-design-flat-kmg-design.png" alt="external-notification-user-interface-kmg-design-flat-kmg-design" />
                    <select name="filhos" id="">
                        
                        <option value="1">Angelina</option>
                        <option value="1">Joana</option>
                    </select>
                    <div className="flex items-center gap-4">
                        <img width="32" src="https://img.icons8.com/fluency/48/user-female.png" alt="user-female" />
                        <div className="flex gap-4 items-center">
                            <select name="filhos" className="rounded-full flex border border-gray-200 p-2" id="">
                                <option value="1">{userData.firstName}</option>
                            </select>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}