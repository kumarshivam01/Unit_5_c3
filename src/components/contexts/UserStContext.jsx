import { createContext, useEffect, useState } from "react";

export const UserStContext=createContext()
 
export const UserStContextProvider=({children})=>{
   

    useEffect(()=>{
        const fun=async()=>{
            let res=await fetch("http://localhost:8080/employee")
              let data=await res.json()
              console.log(data.length)
              setHomeinfo({
                  ...homeinfo,
                  Total_Employees:data.length
              })
        }
        fun()
    },[])
    
    const [homeinfo,setHomeinfo]=useState({
        Total_Employees:0,
        Total_Terminated:0,
        Total_Promoted:0,
        Total_New:0,
    
      })
    
      const updateInfo=(value,data)=>{
          setHomeinfo({
              ...homeinfo,
               [value]:data
          })
      }
    return <UserStContext.Provider value={{homeinfo,updateInfo}}>{children}</UserStContext.Provider>
}