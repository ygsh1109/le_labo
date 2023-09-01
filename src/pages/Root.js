import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
//import MainLayout from './MainLayout'

export default function Root() {
  return (
    <div>
      
      <Header/>
     
        <Outlet/>
     
      <Footer/> 
    </div>
  )
}
