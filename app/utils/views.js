import { fireStore } from '../utils/firebase';
import { doc, setDoc, deleteDoc, updateDoc, collection, getDoc, query, Timestamp } from "firebase/firestore";
export async function cadastrarInfos(userId, firstName, lastName, email) {
    try {
        await setDoc(doc(fireStore, 'users', userId), {
            firstName,
            lastName,
            email,
            registrationDate: new Date()
        });
        return true;
    } catch (error) {
        console.error("Error registering user:", error);
        alert(error.message);
        return false;
    }

}

export async function get_user(userId) {
    try {
        const userRef = doc(fireStore, "users", userId);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
            return userSnap.data()
        } else {
            console.log("Usuário não encontrado");
            return null;
        }
    } catch (error) {
        console.error("Erro ao buscar usuário:", error);
        return false;
    }
}