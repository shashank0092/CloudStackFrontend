import { createContext, useContext, useState } from "react";

const GlobalContext=createContext()


export const GlobalContextProvider=({children})=>{
    
    const[FCMToken,setFCMToken]=useState(null)

    return(
        <GlobalContext.Provider value={{FCMToken,setFCMToken}} >  
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext=()=>useContext(GlobalContext);