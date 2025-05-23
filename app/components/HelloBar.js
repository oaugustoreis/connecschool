import { Skeleton } from "@/components/ui/skeleton";
import { useEffect, useState } from "react";
import { getChilds } from "../utils/views";

export default function HelloBar({ userData, loading, setChild, userId }) {
    const [childs, setChilds] = useState([]);

    useEffect(() => {
        const fetchChilds = async () => {
            if (!userId) return; 
            try {
                const res = await getChilds(userId); 
                setChilds(res);
            } catch (error) {
                console.error("Error fetching childs:", error);
            }
        };

        fetchChilds();
    }, [userId]); 

    useEffect(() => {
        if (childs.length > 0) {
            setChild(childs[0]); 
        }
    }, [childs]);

    if (loading) {
        return (
            <div className="flex justify-between w-full items-center h-16 px-8 ">
                <Skeleton className="w-[200px] h-[40px] rounded-full" />
                <Skeleton className="w-[300px] h-[40px] rounded-full" />
            </div>
        );
    }

    return (
        <>
            <div className="flex justify-between w-full items-center h-16 px-8 ">
                <h1 className="text-blue-900 text-xl font-bold">
                    Olá, {userData.firstName}
                </h1>
                <div className="flex items-center text-sm font-[500] text-gray-500 gap-4">
                    <img
                        width="28"
                        src="https://img.icons8.com/external-kmg-design-flat-kmg-design/32/external-notification-user-interface-kmg-design-flat-kmg-design.png"
                        alt="Notification Icon"
                    />
                    <select
                        onChange={(e) => setChild(e.target.value)}
                        name="filhos"
                        id=""
                    >
                        {childs.length > 0 ? (
                            childs.map((child) => (
                                <option key={child.id} value={child.id}>
                                    {child.firstName}
                                </option>
                            ))
                        ) : (
                            <option disabled>
                                Nenhum dependente cadastrado
                            </option>
                        )}
                    </select>
                    <div className="flex items-center gap-4">
                        <img
                            width="32"
                            src="https://img.icons8.com/fluency/48/user-female.png"
                            alt="User  Icon"
                        />
                        <div className="flex gap-4 items-center">
                            <select
                                name="filhos"
                                className="rounded-full flex border border-gray-200 p-2"
                                id=""
                            >
                                <option value="1">{userData.firstName}</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
