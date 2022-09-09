import React,{useState} from 'react'
import { ResetPassword } from '../../components/password-reset/ResetPassword'
import { Login } from '../login/Login'
import './entrypage.css'

export const EntryPage = () => {
  const [show, setShow] = useState(true)
  const handleOnClick=()=>{
    setShow(!show)
  }
  return (
   <div className=" entry-page">
    <div className="jumbotron form-box">
      {show ? <Login handleOnClick={handleOnClick}/> : <ResetPassword handleOnClick={handleOnClick}/> }
    
    </div>
   </div>

  )
}
