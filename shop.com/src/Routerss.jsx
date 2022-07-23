import React from 'react'
import {Routes,Route} from "react-router-dom"
import Account from './Navbar/Account'
import Landing from './Landing/landing'
import Login from './Navbar/Login'
import Detailofcos from './Detailcosmetics/detailofcos'
import Proceed from './Landing/Proceed'
import Alldata from './Alldata/Alldata'
const Routerss = () => {
  return (
   
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/:id_pro' element={<Detailofcos/>}/>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/Acc" element={<Account/>}></Route>
        <Route path="/proceed" element={<Proceed/>}></Route>
        <Route path="/allcosmetics" element={<Alldata/>}></Route>
      </Routes>
  )
}

export default Routerss
