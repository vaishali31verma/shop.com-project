import React from 'react'
import {Box, Flex, Image, Input, Select, Stack,Text,Button} from "@chakra-ui/react"
import axios from "axios"
import {SearchIcon} from "@chakra-ui/icons"
import Navbartwo from './Navbar2'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import { Usedebounce } from './Usedebouncing'
import { StarIcon } from '@chakra-ui/icons'
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
    setloading(true)
    axios.get(`https://myownapitodo.herokuapp.com/Cosmetics?q=${query}`).then((res)=>{
       setdata(res.data)
       setloading(false)
    })
  }
  const handlecross =()=>{
    setdata([])
    setsearchtext("")
  }
  const starArray = [...Array(5).keys()].map(i => i + 1)

  return (
    
    

    <Box >
     
  <Box  boxShadow='dark-lg'  >
    <Stack bg={"#202340 !important"} color={"white"}>
    <Text fontSize='lg'>1st time customers save 25% on SHOP.COM exclusive brands using code FIRST25OFF. Max $25 discount. Terms Apply.</Text>
    </Stack>
   <Flex marginTop={"10px"} paddingTop={"10px"} justifyContent={"space-around"} marginBottom={"0px"} border={"1px solid grey"} height={"80px"}  >
    <Box boxSize='250px' >
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
     <Flex flexDirection={"column"} justifyContent="space-between">
     <Input placeholder='Search Shop.com...' width={"500px"}  borderRadius={"0px 0px 0px 0px"} onChange={(e)=>{setsearchtext(e.target.value)} } value={searchtext}  />
    
     <Box>
     {data.length>0&&<Box zIndex={"9999"} position="absolute" overflow={"scroll"}   w="500px" h="400px" bg="white" sx={
     { 
    '::-webkit-scrollbar':{
           display:'none'
       }
    }
  }>
      
      {data.map((e)=>(
      <Box>
        <Flex justifyContent={"space-between"} border={"1px solid black"}>
        <Box  w="300px">
       
        <Text fontSize={"18px"} fontWeight="500" color="grey">{e.name}</Text>
        <Text fontSize={"18px"} fontWeight="500">{e.category}</Text>
        <Flex justifyContent={"center"}>
            {starArray.map((i)=>(
                <StarIcon color={i<e.ratingValue?"orange" : "lightgrey"}/>
            ))}
            </Flex>
        </Box>
        <Image src={e.image[1]} w="150px" h="100px" maxHeight={"fit-content"} maxWidth="fit-content"/>
        </Flex>
        </Box>
      ))}
      
      
      
      </Box>}
     </Box>
     </Flex>
    {data.length>0?<Button onClick={handlecross} bg="none">X</Button>:<></>}
    {/* {loading?<><Image src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921"/></>:<></>} */}
  
     
     <Box bg={"#202340 !important"} color={"white"} width={"40px"}  h={"40px"} borderRadius={"0px 30px 30px 0px"}>
      {loading?<><Image w={"40px"} h="40px" src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921"/></>:<SearchIcon marginTop={"10px"} w={"40px"} />}
   
   
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
