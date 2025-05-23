import { fireStore } from '../utils/firebase';
import { doc, setDoc, deleteDoc, updateDoc, collection, getDoc, getDocs, query, Timestamp, writeBatch } from "firebase/firestore";

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
export async  function adicionarProfessoresEmLote() {
  const professores = [
  { 
    id: 1, 
    name: 'Iara Magalhães', 
    email: 'iaram.agalhaes@connect.com', 
    materia: "Língua Portuguesa", 
    background: false, 
    escola: 'Colégio Amazonas', 
    graduacao: 'Doutora em Linguística - USP', 
    aulas: 'Ter. - 10h às 12h, Qui. - 14h às 16h' 
  },
  { 
    id: 2, 
    name: 'Adriana de Sousa', 
    email: 'adriana.souza@connect.com', 
    materia: "Língua Portuguesa", 
    background: true, 
    escola: 'Instituto Educacional Fênix', 
    graduacao: 'Mestrado em Educação - UNESP', 
    aulas: 'Seg. - 8h às 10h, Qua. - 10h às 12h' 
  },
  { 
    id: 3, 
    name: 'Millaya Oliveira', 
    email: 'millaya.oliveira@connect.com', 
    materia: "Filosofia", 
    background: false, 
    escola: 'Escola Estadual FAMETRO', 
    graduacao: 'Msc. em Letras - UFAM', 
    aulas: 'Seg. - 14h às 16h, Qua. - 14h às 16h' 
  },
  { 
    id: 4, 
    name: 'Fernando Pinho', 
    email: 'fernando.pinho@connect.com', 
    materia: "Artes", 
    background: true, 
    escola: 'Centro Educacional Horizonte', 
    graduacao: 'Licenciatura em Letras - UFRJ', 
    aulas: 'Ter. - 9h às 11h, Qui. - 9h às 11h' 
  },
  { 
    id: 5, 
    name: 'Alex Joelson', 
    email: 'alex.joelson@connect.com', 
    materia: "Redação", 
    background: false, 
    escola: 'Colégio Saber', 
    graduacao: 'Especialização em Literatura - UFSC', 
    aulas: 'Qua. - 13h às 15h, Sex. - 13h às 15h' 
  },
  { 
    id: 6, 
    name: 'Paulo César', 
    email: 'paulo.cesar@connect.com', 
    materia: "Música", 
    background: true, 
    escola: 'Instituto Alfa', 
    graduacao: 'Doutor em Estudos Linguísticos - UFMG', 
    aulas: 'Seg. - 16h às 18h, Qua. - 16h às 18h' 
  },
  { 
    id: 7, 
    name: 'Mauro Lobato', 
    email: 'mauro.lobato@connect.com', 
    materia: "Língua Estrangeira", 
    background: false, 
    escola: 'Colégio Evolução', 
    graduacao: 'Mestrado em Letras - PUC-Rio', 
    aulas: 'Ter. - 8h às 10h, Qui. - 8h às 10h' 
  },
  { 
    id: 8, 
    name: 'Pedro Vinícius', 
    email: 'pedro.vinicius@connect.com', 
    materia: "Ciências e Biologia", 
    background: true, 
    escola: 'Instituto Cultural Newton', 
    graduacao: 'Especialização em Língua Portuguesa - UFPE', 
    aulas: 'Qua. - 15h às 17h, Sex. - 15h às 17h' 
  },
  { 
    id: 9, 
    name: 'Mardem de Melo', 
    email: 'mardem.melo@connect.com', 
    materia: "Sociologia", 
    background: false, 
    escola: 'Escola Nova Era', 
    graduacao: 'Mestrado em Literatura Brasileira - UFRGS', 
    aulas: 'Seg. - 9h às 11h, Qua. - 9h às 11h' 
  },
  { 
    id: 10, 
    name: 'Augusto Reis', 
    email: 'augusto.reis@connect.com', 
    materia: "Se Virar", 
    background: true, 
    escola: 'Centro de Ensino Dinâmico', 
    graduacao: 'PhD em Show de Bolice - UFSB', 
    aulas: 'Ter. - 13h às 15h, Qui. - 13h às 15h' 
  }
];


  const batch = writeBatch(fireStore);

  professores.forEach((professor) => {
    const docRef = doc(collection(fireStore, "professores"));  // ID aleatório
    batch.set(docRef, professor);
  });

  try {
    await batch.commit();
    console.log("Todos os professores foram adicionados com sucesso!");
  } catch (error) {
    console.error("Erro ao adicionar professores: ", error);
  }
}

export async function buscarProfessores() {
  try {
    const snapshot = await getDocs(collection(fireStore, 'professores'));
    const professores = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    return professores;
  } catch (error) {
    console.error("Erro ao buscar professores:", error);
    return [];
  }
}
