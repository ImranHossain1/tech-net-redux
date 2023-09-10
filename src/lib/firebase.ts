import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  // apiKey: import.meta.env.VITE_apiKey,
  // authDomain: import.meta.env.VITE_authDomain,
  // projectId: import.meta.env.VITE_projectId,
  // storageBucket: import.meta.env.VITE_storageBucket,
  // messagingSenderId: import.meta.env.VITE_messagingSenderId,
  // appId: import.meta.env.VITE_appId,
  apiKey: 'AIzaSyADevB7FW3IyGymKyP1zql8cVuAcn01HeA',
  authDomain: 'technet-99796.firebaseapp.com',
  projectId: 'technet-99796',
  storageBucket: 'technet-99796.appspot.com',
  messagingSenderId: '972724879531',
  appId: '1:972724879531:web:2c1b4630296994242437ee',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
