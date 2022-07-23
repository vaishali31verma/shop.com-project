import React from 'react'
import { useState,useEffect } from 'react'


const Usedebounce = (value,delay) =>{
    const [debounce,setdebounce] = useState("")

    useEffect(()=>{
        const handler =setTimeout(() => {
            setdebounce(value)
        }, delay);
        return ()=>{
            clearTimeout(handler)
        }
    },[value,delay])
    return debounce
}

export {Usedebounce}
