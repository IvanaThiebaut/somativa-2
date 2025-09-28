// ATENÇÃO: Código atualizado para a sintaxe moderna do Firebase v9+
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Suas credenciais do Firebase que você forneceu
const firebaseConfig = {
  apiKey: "AIzaSyBekCMhW5J1ykVbrt8AHgZOe-I6x1jIj-o",
  authDomain: "projetoead-ffb16.firebaseapp.com",
  projectId: "projetoead-ffb16",
  storageBucket: "projetoead-ffb16.appspot.com",
  messagingSenderId: "716955784209",
  appId: "1:716955784209:web:dce456fb63c7072f7f8db0"
};

// Inicializa os serviços do Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);