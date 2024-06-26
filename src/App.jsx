import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";
import { useEffect } from "react";
import { generateToken, messaging } from "./notifications/firebase";
import { onMessage } from "firebase/messaging";
// import toast, { Toaster } from "react-hot-toast";
// import { messaging } from "./notifications/firebase";
// import { getMessaging, getToken } from "firebase/messaging";


const App = () => {
  useEffect(() => {
    generateToken();
    onMessage(messaging, (payload) => {
      console.log(payload);
      toast(payload.notification.body);
    });
  }, [])



  // async function requestPermission(){
  //   const permission = await Notification.requestPermission();
  //   if(permission === 'granted'){
  //     //generate token
  //       const token = await getToken(messaging, {vapidKey: 'BJz9wKngbag463GK6upLK2v9N_WgmF-dRvBlwV7oqx9Ee-y_fAB4IsEjw_chO1unRIxsxL9vYnMtochKlV-HfXk'});
  //       console.log("Token Generated", token);  
  //   }else if(permission ==='denied'){
  //     alert("You denied for the notification");
  //   }else{

  //   }
  // }

  // useEffect(() => {
  //   //request user for notification permission
  //   requestPermission();
  // }, []);

  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        {/* <Toaster position="top-right" /> */}
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Pricing />
        <Roadmap />
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
