import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {auth,db} from "../../firebase.js"
import {createUserWithEmailAndPassword} from "firebase/auth"
import {addDoc,collection, getDoc} from "firebase/firestore"
const Registration = () => {
  const  [fullName,SetFullname ] = useState()
  const  [gender,setSex ] = useState()
  const  [date,setDate] = useState()
  const  [email,setEmail ] = useState()
  const  [password,setPasswprd] = useState()
  const nevigate = useNavigate()
  const collectionref = collection(db,"mpp")
  const registreation = async()=>
  {
    console.log("clcicked")
    try{
       const reg = await addDoc(collectionref,{email:email,password:password,fullname:fullName,Date_of_birth:date})
       if(reg)
       {
        nevigate("/")
       }
    }
    catch(err)
    {
      console.log(err)
    }
    
  }
  return (
    <>
      <div className='registrationContainer'>
        <div className='registrationInner'>
          <div className='registrationInput'>
          <label className="username">Username</label><br/> 
            <input type="text" onChange={(e)=> SetFullname(e.target.value)} placeholder="userfullname" />
            <br/> 
            <label>Sex</label>
            <br/> 
            <select name="gender" onChange={(e)=> setSex(e.target.value)} id="gender">
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="others">Others</option>
            </select>
            <br/> 
            <label>Date Of Birth:</label>
            <br/> 
            <input type="date" onChange={(e)=>setDate(e.target.value)}/>
            <br/> 
            <label>Email</label>
            <br/> 
            <input type="email" onChange={(e)=>setEmail(e.target.value)}/><br/> 
            <label>Password:</label><br/> 
            <input type="password" onChange={(e)=>setPasswprd(e.target.value)}/>
            <button type="submit" onClick={registreation}>Registration</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Registration