import dotenv from 'dotenv';
import firebase from 'firebase/compat/app';

dotenv.config();

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
};

const initFirebase = firebase.initializeApp(firebaseConfig);

export const appConfig = {
  port: process.env.PORT,
  host: process.env.HOST,
  url: process.env.HOST_URL,
  firebaseConfig,
};

export default initFirebase;
