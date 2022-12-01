import { initializeApp } from "firebase/app";

// apiKey: process.env.REACT_APP_API_KEY,
// console.log(process.env.REACT_APP_API_KEY);

const App = initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  // databaseURL: "https://quiz-application-dev-95bbd-default-rtdb.firebaseio.com",
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_SENDERID,
  appId: process.env.REACT_APP_APP_ID,
});

export default App;
