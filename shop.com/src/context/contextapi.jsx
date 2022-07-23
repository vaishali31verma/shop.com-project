import { useEffect } from 'react'
import { createContext} from 'react'
import { useState } from 'react'
import axios from "axios"

import { usergetapi,userpostapi } from '../Apitest'

export const AppContext = createContext()





const Contextapiprovider = ({children}) => {
  const [medicine,setmedicine] = useState([])
  const [jewelary,setjewelary] = useState([])
  const [Clothes,setclothing] = useState([])
  const [tableware,settableware] = useState([])
  const [isAuth,setisAuth] = useState(false)
  const [cosmetics,setcosmetics] = useState([])
     const [cosmeticsdata,setcosmeticsdata] = useState([])
     const [userid,setuserid] = useState("")
     const [username,setusername] = useState("")
     const [sort,setsort] = useState("asc")
     const [page,setpage] = useState(1)
     const [fieldof,setfieldof] = useState("")
  // const [detailoofcos,setdetailofcos] =useState([])
   
  useEffect(()=>{
    axios.get(`https://myownapitodo.herokuapp.com/medicines`).then((res)=>{
     setmedicine(res.data)
      
    })
  },[])
  useEffect(()=>{
    axios.get(`https://myownapitodo.herokuapp.com/jewelary`).then((res)=>{
        setjewelary(res.data)
    })
  },[])
  useEffect(()=>{
    axios.get(`https://myownapitodo.herokuapp.com/clothing`).then((res)=>{
      setclothing(res.data)
    })
  },[])
  
  useEffect(()=>{
    axios.get(`https://myownapitodo.herokuapp.com/tableware`).then((res)=>{
      settableware(res.data)
    })
  },[])
  useEffect(()=>{
    axios.get(`https://myownapitodo.herokuapp.com/Cosmetics`).then((res)=>{
      setcosmetics(res.data)
    })
  },[])
  
  const handlecosmetics =(s,p,y)=>{
    console.log(y)
    axios({
      url:`https://myownapitodo.herokuapp.com/Cosmetics/`,
      method:"GET",
      params:{
        _order:s,
        _page:p,
        _limit:8,
        _sort:y
      }
    } 
    ).then((res)=>{
      setcosmeticsdata(res.data)
    })
  }


  useEffect(()=>{
    handlecosmetics(sort,page,fieldof)
  },[sort,page,fieldof])

  const handlesort =(x,y)=>{
   
    setsort(x)
    setfieldof(y)
    
  }
  const handlepage =(p)=>{
       setpage(p)
       
  }
  const handlesortbyrating =(m,k)=>{
    setfieldof(k)
    setsort(m)
  }
 

  const Adduser =(data)=>{
    usergetapi().then((res)=>{
      let update = res.data.filter((e)=>{
        return (e.email===data.email)
      })
      if(update.length>0){
       
        alert(`user already exist`)
      }
      else{
        userpostapi(data)    
        
      }
  })

  }
  const Checkuser =(user)=>{
        usergetapi().then((res)=>{
          let logged = res.data.filter((e)=>{
            return (e.email===user.email && e.password ===user.password)
          })

          if(logged.length>0){
            setisAuth(true)
            usergetapi().then((res)=>{
              res.data.map((r)=>{
                if(user.email===r.email){
                   setuserid(r.id)
                   setusername(r.name)
                   return userid
                }
              })
            })
            alert(`YOU are Logged IN`)
             
          }
          else{
              alert(`user doesn't exist`)
          }
        })
  }

  return (
    <div>
      <AppContext.Provider value ={{handlesortbyrating,page,handlepage,handlesort,cosmeticsdata,username,userid,isAuth,tableware,medicine,Adduser,Checkuser,jewelary,Clothes,cosmetics}} > 
        {children}
      </AppContext.Provider>
    </div>
  )
}

export default Contextapiprovider

