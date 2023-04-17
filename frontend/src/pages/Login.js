import React,{useState} from 'react'
import axios from "axios"
function Login() {
    const [user,setUser]=useState({
        username:"",
        password:""
    })
    const {username,password}=user
    const handleChange=(e)=>{
        e.preventDefault()
        setUser({...user, [e.target.name] : e.target.value})
    }

    const handleSubmit=async(e)=>{
        e.preventDefault()
        const user =await axios.post("/api/register",{username,password}).then((res)=>{
        setUser({username:"",password:""})
        }).catch((err)=>{
            console.log(err)
            if(err.response.data==="User already exists"){
                console.log("User exists")
            }
        })

    }
  return (
    <>
    <form>
        <label>Username
            <input value={username} name="username" id="username" onChange={handleChange} type="text" placeholder="Please enter username"/>
        </label>
        <label>Password
            <input value={password} name="password" id="password" onChange={handleChange} type="password" placeholder="Please enter password"/>
        </label>
      <button onClick={handleSubmit}>Submit</button>\
       
</form>
<div>

</div>
</>
  )

}

export default Login