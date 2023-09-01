import React from 'react'
import MobileHeader from '../../components/MobileHeader'
import MobileFooter from '../../components/MobileFooter'
import { Outlet } from 'react-router-dom'



export default function MobileRoot() {
  return (
   <>
    <MobileHeader/>
    <Outlet/>
    <MobileFooter/>
   </>
  )
}
