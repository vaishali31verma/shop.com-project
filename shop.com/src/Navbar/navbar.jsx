import React from 'react'
import {Box, Flex, Image, Input, Select, Stack,Text} from "@chakra-ui/react"
import axios from "axios"
import {SearchIcon} from "@chakra-ui/icons"
import Navbartwo from './Navbar2'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import { Usedebounce } from './Usedebouncing'

const Navbar = () => {
  const navigates = useNavigate()
  const [searchtext,setsearchtext] = useState("")
  const debouncesearch = Usedebounce(searchtext,200)
  const [data,setdata] = useState([])
  const [loading,setloading] = useState(false)
  const [error,seterror] = useState(false)
 
  useEffect(()=>{
    if(debouncesearch){
      fetchapiofcos(debouncesearch)
    }else{
        setdata([])
    }
  },[debouncesearch])
  
  const fetchapiofcos=(query)=>{
    axios.get(`https://myownapitodo.herokuapp.com/Cosmetics?q=${query}`).then((res)=>{
       setdata(res.data)
    })
  }



  return (
    
    

    <Box >
     
  <Box  boxShadow='dark-lg'  >
    <Stack bg={"#202340 !important"} color={"white"} >
    <Text fontSize='lg'>1st time customers save 25% on SHOP.COM exclusive brands using code FIRST25OFF. Max $25 discount. Terms Apply.</Text>
    </Stack>
   <Flex marginTop={"20px"} justifyContent={"space-around"} marginBottom={"0px"} border={"1px solid grey"} height={"80px"}>
    <Box boxSize='250px'>
  <Image src='https://img.shop.com/Image/resources/logos/shop-logo-us.svg' alt='Dan Abramov' onClick={()=>navigates("/")}/>
     </Box>
     <Box display={"flex"} >
     <Select placeholder='All departments' width={"200px"} borderRadius={"30px 0px 0px 30px"}>
  <option value='option1'>Auto</option>
  <option value='option2'>Baby</option>
  <option value='option3'>Books</option>
  <option value='option3'>Business</option>
  <option value='option3'>Camera</option>
  <option value='option3'>Clothes</option>
  <option value='option3'>Beauty</option>
</Select>
     <Flex flexDirection={"column"} >
     <Input placeholder='Search Shop.com...' width={"500px"} borderRadius={"0px 0px 0px 0px"} onChange={(e)=>setsearchtext(e.target.value) } value={searchtext}/>
     
     {data.length>0?<Box border={"2px solid red"} w="500px" h="400px">{data.map((e)=>(<Box>{e.name}</Box>))}</Box>:<></>}

     </Flex>
     <Box bg={"#202340 !important"} color={"white"} width={"50px"}  h={"50px"} borderRadius={"0px 30px 30px 0px"}>
    <SearchIcon marginTop={"10px"} w={"50px"}/>
   
    </Box>
   
     </Box>
     <Image src="https://img.shop.com/Image/header2013/headergel1657134373464.png" w={"300px"} h={"50px"}></Image>
    </Flex> 
   
     <Navbartwo />
  </Box>
  </Box>
  )
}

export default Navbar
