import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from "firebase/messaging";




const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId
};


initializeApp(firebaseConfig);
const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);

export const getFMCToken = (setTokenFound) => {
  

  return getToken(messaging, {vapidKey: process.env.REACT_APP_VAPID_KEY}).then((currentToken) => {
    if (currentToken) {
      // console.log('current token for client: ', currentToken);
      
      setTokenFound(currentToken)
    } else {
      console.log('No registration token available. Request permission to generate one.');
      setTokenFound(null)
     
    }
  }).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
   
  });
}

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
});