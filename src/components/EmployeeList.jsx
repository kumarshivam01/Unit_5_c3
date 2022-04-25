import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export const EmployeeList = () => {
  const [employeeList,setList]=useState([])
  const navigate=useNavigate()
   useEffect(()=>{
     getData()
   },[])
   const getData=async()=>{
     let res=await fetch("http://localhost:8080/employee")
     let data=await res.json()
     setList(data)
   }
   
   const goTo=(id)=>{
      navigate(`/employeedetails/${id}`)
   }

  return (
    <div className="list_container">
      {/* On clicking this card anywhere, user goes to user details */}
      {employeeList.map((e)=>{
           return  <div key={e.id} onClick={()=>goTo(e.id)} className="employee_card">
             <img className="employee_image" src={e.image} alt=""/>
             <span className="employee_name">{e.employee_name}</span>
             <span className="employee_title">{e.title}</span>
           </div>
      })
      
}
    </div>
      
  );
};
