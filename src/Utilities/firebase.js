import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzN3UzHM7fJdSgw6B3BccaMKZ8n51b6O8",
  authDomain: "mazu-store.firebaseapp.com",
  projectId: "mazu-store",
  storageBucket: "mazu-store.appspot.com",
  messagingSenderId: "1091831215165",
  appId: "1:1091831215165:web:8262d1892a04968b5aa654",
  measurementId: "G-9P4MEXK2Z6"
};

const app = initializeApp(firebaseConfig);

export default app

export const firestore = getFirestore(app);

export const storage = getStorage(app);