import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDQQbnq6UluAC7ODwpfX36Bun2StrNYuxk",
  authDomain: "vue-3-2022-33f5f.firebaseapp.com",
  projectId: "vue-3-2022-33f5f",
  storageBucket: "vue-3-2022-33f5f.appspot.com",
  messagingSenderId: "737078303853",
  appId: "1:737078303853:web:33d6cdc019aeefa7f23364"
};

initializeApp(firebaseConfig);
const auth = getAuth();

export {auth};