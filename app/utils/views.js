import { fireStore } from "../utils/firebase";
import {
    doc,
    setDoc,
    deleteDoc,
    updateDoc,
    addDoc,
    Timestamp,
    collection,
    getDoc,
    getDocs,
    query,
    writeBatch,
} from "firebase/firestore";
export async function cadastrarInfos(userId, firstName, lastName, email) {
    try {
        await setDoc(doc(fireStore, "users", userId), {
            firstName,
            lastName,
            email,
            registrationDate: new Date(),
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
            return userSnap.data();
        } else {
            console.log("Usuário não encontrado");
            return null;
        }
    } catch (error) {
        console.error("Erro ao buscar usuário:", error);
        return false;
    }
}

export async function buscarProfessores() {
    try {
        const snapshot = await getDocs(collection(fireStore, "professores"));
        const professores = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        return professores;
    } catch (error) {
        console.error("Erro ao buscar professores:", error);
        return [];
    }
}

export async function listarActivities(userId, childId) {
    try {
        const querySnapshot = await getDocs(
            collection(
                fireStore,
                "users",
                userId,
                "childs",
                childId,
                "activities"
            )
        );
        return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
        console.error("Erro ao listar activities:", error);
        return [];
    }
}

export async function listarFaltas(userId, childId) {
    try {
        const querySnapshot = await getDocs(
            collection(fireStore, "users", userId, "childs", childId, "faltas")
        );
        return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
        console.error("Erro ao listar faltas:", error);
        return [];
    }
}

export async function listarNotas(userId, childId) {
    try {
        const querySnapshot = await getDocs(
            collection(fireStore, "users", userId, "childs", childId, "notas")
        );
        return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
        console.error("Erro ao listar notas:", error);
        return [];
    }
}

export async function editarChild(userId, childId, novosDados) {
    try {
        const childRef = doc(fireStore, "users", userId, "childs", childId);
        await updateDoc(childRef, novosDados);
        console.log("Child atualizado com sucesso!");
        return true;
    } catch (error) {
        console.error("Erro ao editar child:", error);
        return false;
    }
}

export async function criarChild(userId, firstName, lastName, escola, codigoTurma) {
    try {
        const childData = {
            firstName,
            lastName,
            escola,
            codigoTurma,
            createdAt: new Date(),
        };
        const childRef = await addDoc(
            collection(fireStore, "users", userId, "childs"),
            childData
        );
        console.log("Child criado com sucesso! ID:", childRef.id);
        return childRef.id;
    } catch (error) {
        console.error("Erro ao criar child:", error);
        return null;
    }
}


export async function getChilds(userId) {
  try {
    const childsRef = collection(fireStore, "users", userId, "childs");

    const querySnapshot = await getDocs(childsRef);

    const childs = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    return childs;
  } catch (error) {
    console.error("Erro ao buscar childs:", error);
    return [];
  }
}