import { useState } from "react";
import { useContext } from "react";
import { UserStContext } from "./contexts/UserStContext";
export const Admin = () => {
  const {homeinfo,updateInfo}=useContext(UserStContext)
  const [createUser,setUser]=useState({
    
      employee_name: "",
      employee_id: "",
      title: "intern",
      salary: "",
      image: "http://dummyimage.com/185x177.png/ff4444/ffffff",
      username: "",
      password: "",
      tasks: [],
      status: "",
      team: ""
  });

  const updateUser=(data)=>{
    if(data.name==='tasks'){
      setUser({
        ...createUser,
        [data.name]:[data.value]
      })
    }
    else{
     setUser({
       ...createUser,
       [data.name]:data.value

     })
    }
  }
  const postData=async()=>{
    
    if(createUser.employee_name==="" || createUser.image==="" || createUser.password==="" || createUser.salary==="" || createUser.employee_id==="" || createUser.status==="" || createUser.tasks===[] || createUser.title==="" || createUser.username===""){
      return alert("all fields are required")
    }
    else{
      let res=await fetch("http://localhost:8080/employee",{
        method:"POST",
        body:JSON.stringify(createUser),
        headers:{
          'Content-Type': 'application/json' 
        }
     })
     let data=await res.json()
     updateInfo("Total_New",homeinfo.Total_new+1)
    }
  }
  return (
    <form className="createEmployee">
      <input onChange={(e)=>updateUser(e.target)} type="text" placeholder="Employee Name" name="employee_name" />
      <input onChange={(e)=>updateUser(e.target)} type="text" placeholder="Employee id" name="employee_id" />
      <select onChange={(e)=>updateUser(e.target)} name="title">
        <option value="intern">Intern</option>
        <option value="Jr Software Developer">Jr Software Developer</option>
        <option value="Sr Software Developer">Sr Software Developer</option>
        <option value="Team Lead">Team Lead</option>
      </select>
      <input onChange={(e)=>updateUser(e.target)} type="number" placeholder="Salary" name="salary" />
      <input onChange={(e)=>updateUser(e.target)} type="text" placeholder="Image" name="image" />
      <input onChange={(e)=>updateUser(e.target)} type="text" placeholder="User Name" name="username" />
      <input onChange={(e)=>updateUser(e.target)} type="password" placeholder="Password" name="password" />
      <input
        type="text"
        placeholder="Enter tasks separated by commas"
        name="tasks"
        onChange={(e)=>updateUser(e.target)}
      />
      <select onChange={(e)=>updateUser(e.target)} name="status" id="status">
        <option value="">Select Status</option>
        <option value="terminated">Terminated</option>
        <option value="working">Working</option>
      </select>
      <select onChange={(e)=>updateUser(e.target)} name="team" id="team">
        <option value="">Select team</option>
        <option value="frontend">Frontend</option>
        <option value="backend">Backend</option>
        <option value="qa">QA</option>
      </select>
      <input onClick={(e)=>{e.preventDefault(); postData()}} className="createUser" type="submit" value={"submit"} />
    </form>
  );
};
