import React from 'react'
import {Routes,Route} from "react-router-dom"
import Account from './Navbar/Account'
import Landing from './Landing/landing'
import Login from './Navbar/Login'
import Detailofcos from './Detailcosmetics/detailofcos'
const Routerss = () => {
  return (
   
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/:id_pro' element={<Detailofcos/>}/>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/Acc" element={<Account/>}></Route>
      </Routes>
  )
}

export default Routerss
