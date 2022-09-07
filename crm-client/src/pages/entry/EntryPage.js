import React from 'react'
import { Login } from '../login/Login'
import './entrypage.css'

export const EntryPage = () => {
  return (
   <div className="bg-info entry-page">
    <div className="jumbotron form-box">
    <Login/>
    </div>
   </div>

  )
}
