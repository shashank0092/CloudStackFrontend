import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home/Home";
import Register from "./Pages/Register/Register";
import { useEffect, useState } from "react";
import { getFMCToken, messaging, onMessageListener } from "./firebase"
import Login from "./Pages/Login/Login";
import Profile from "./Pages/Profile/Profile";
import { useGlobalContext } from "./Pages/context/Store";




const App = () => {

  const { setFCMToken } = useGlobalContext()



  

  useEffect(() => {
    NotificationPermission()
  }, [])

  const NotificationPermission = async () => {

    if ('Notification' in window) {
      try {
        const permission = await Notification.requestPermission();



        if (permission === 'granted') {

          const token=await getFMCToken();
          setFCMToken(token)
          console.log("this is token in app",token)
        } else if (permission === 'denied') {
          alert('You Denied Message Permission');
        }
      } catch (error) {
        console.error('Error requesting notification permission:', error);
      }
    }
  };
  return (
    <>


      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App;