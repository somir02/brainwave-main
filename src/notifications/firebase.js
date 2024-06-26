import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";


const firebaseConfig = {
    apiKey: "AIzaSyCDx1apFpmrt6RiGXMdLHOT-ljjrBNicXs",
    authDomain: "brainwave-d44c1.firebaseapp.com",
    projectId: "brainwave-d44c1",
    storageBucket: "brainwave-d44c1.appspot.com",
    messagingSenderId: "116064552680",
    appId: "1:116064552680:web:0513fa9458661b2b26eb5d",
    measurementId: "G-VZVTDG47TV"
  };

export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);

export const generateToken = async () => {
  const permission = await Notification.requestPermission();
  console.log(permission);
  if(permission ==="granted"){
    const token = await getToken(messaging, {
      vapidKey: "BJz9wKngbag463GK6upLK2v9N_WgmF-dRvBlwV7oqx9Ee-y_fAB4IsEjw_chO1unRIxsxL9vYnMtochKlV-HfXk",
    });
    console.log(token);

  }
  
};

