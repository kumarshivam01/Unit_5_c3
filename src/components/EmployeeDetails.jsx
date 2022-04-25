
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { UserStContext } from "./contexts/UserStContext";
export const EmployeeDetails = () => {
  const {homeinfo,updateInfo}=useContext(UserStContext)
  const id=useParams().id
  const [user,setUser]=useState({})

  useEffect(()=>{
    userData();
  },[])

   const userData=async()=>{
    let res=await fetch(`http://localhost:8080/employee/${id}`)
    let data=await res.json()
    setUser(data)
   }
   const updateStatus=async(data)=>{
     let value;
     if(data==="working"){
       value="terminated"
     }
     else{
       value="working"
     }
       await fetch(`http://localhost:8080/employee/${id}`,{
         method:"PATCH",
         body:JSON.stringify({
           status:value
         }),
         headers:{
          'Content-Type': 'application/json'         
        }
       })
      updateInfo("Total_Terminated",homeinfo.Total_Terminated+1)
       userData();
   }

   const updateTitle=async(title)=>{
     let value;
       if(title==="intern"){
         value="Jr Software Developer"
       }
       else if(title==="Jr Software Developer"){
         value="Sr Software Developer"
       }
       else if(title==="Sr Software Developer"){
         value="Team Lead"
       }
      await fetch(`http://localhost:8080/employee/${id}`,{
        method:"PATCH",
        body:JSON.stringify({
          title:value
        }),
        headers:{
          'Content-Type': 'application/json'         
        }
      })
      updateInfo("Total_Promoted",homeinfo.Total_Promoted+1)
      userData();
   }
  return (
    <div className="user_details">
      <img className="user_image" src={user.image}/>
      <h4 className="user_name">{user.user_name}</h4>
      <span className="user_salary">${user.salary}</span>
      <span className="tasks">
        <li className="task">{user.tasks}</li>
      </span>
      Status: <b className="status">{user.status}</b>
      Title: <b className="title">{user.title}</b>
      {/* Show this button only if user is not already terminated (users status is working) */}
      {user.status==="working" ? <button onClick={()=>updateStatus(user.status)} className="fire">Fire Employee</button>:null}
      {/* Show this button only if user is not already team lead or terminated */}
      {user.status==="terminated" ? null : user.title==="Team Lead" ? null:<button onClick={()=>updateTitle(user.title)} className="promote">promote</button>}
    </div>
  );
};
