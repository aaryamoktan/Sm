import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';

const Login = () => {
const [username,setusername] = useState();
const [ password,setpassword] = useState();
const nevigate = useNavigate()
const submit = async()=>
{
  try{
    nevigate("/home")
  }
  catch(err)
  {
    console.log(err)
  }
}
  return (
    <div className='loginContainer'>
      <div className='loginInnerContainer'>
      <div className='loginInput'>
        <input type="text" placeholder="username...." onChange={(e)=>setusername(e.target.value)}/>
        <input type="password" placeholder="password....." onChange={(e)=>setpassword(e.target.value)}/>
        <button onClick={submit} >Login</button>
        <hr/>
        <p>If you don't have account</p>
        <button ><Link to="/registraion" style={{color:"black",textDecoration:"none"}}>Registration</Link></button>
        </div>
      </div>
    </div>
  )
}

export default Login