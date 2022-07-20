import React from 'react'
import {Routes,Route} from "react-router-dom"
import Landing from './Landing/landing'
const Routerss = () => {
  return (
   
      <Routes>
        <Route path='/' element={<Landing/>}/>
      </Routes>
  )
}

export default Routerss
