import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD35PZquD8Fvrl9AOx_8T8PNUtBwHLuEPk",
    authDomain: "petadoption-35e41.firebaseapp.com",
    projectId: "petadoption-35e41",
    storageBucket: "petadoption-35e41.appspot.com",
    messagingSenderId: "716262090039",
    appId: "1:716262090039:web:0eab55ca4d813417f626b2"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;