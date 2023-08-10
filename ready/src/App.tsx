import { useState } from 'react'
import { BsFillEyeFill } from "react-icons/bs";
import { BsFillEyeSlashFill } from "react-icons/bs";
import { FcApproval } from "react-icons/fc";
import {FcHighPriority} from "react-icons/fc"
import {FcMediumPriority} from "react-icons/fc"

import './App.css'

function App() {

  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
 

  function handleShow(){

    if(showPassword == false){
      setShowPassword(true)
    }else{
      setShowPassword(false)
    }

  }

  
  return (
    <>
      <main>
          <div className='contaier'>

              <h1 className='title'>ReadyApp</h1>


              { 
                password.length < 1 ? <p className='paragrafo'>Digite sua senha <FcMediumPriority/></p>: 
                password.length > 7 ? <p className='paragrafo'>Senha aceita <FcApproval/></p> : 
                <p className='paragrafo'>Senha curta <FcHighPriority/></p>
              }

              <input 
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
                placeholder='digite sua senha'  
                className='input'
              />

              <div className="divShow">
                <span className='showPassword' onClick={handleShow}>
                  {showPassword ?  <BsFillEyeSlashFill/> : < BsFillEyeFill/>  }
                </span>
              </div>

         </div>
      </main>
    </>
  )
}

export default App
