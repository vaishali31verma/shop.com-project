import { Box, Button, Flex, Image } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import { useNavigate } from "react-router-dom"
import {
    FormControl,
    FormLabel,
    FormHelperText,Input,Text
  } from '@chakra-ui/react'
import { AppContext } from '../context/contextapi'
const Login = () => {
    const navigation = useNavigate();
    const {Checkuser,isAuth} = useContext(AppContext)
  
    const [login,setlogin] = useState({
        email:"",
        password:""
    }) 
     const handleInput =(e)=>{
        const {value,name} = e.target
        setlogin({
            ...login,
            [name] :value
        })
     }
    
     const handlelogin =()=>{
       Checkuser(login)
       if(isAuth===true){
        navigation("/")   
       }
       
     }



  return (
    <Box >
       <Flex>
       <FormControl w="300px" marginLeft={"300px"} marginTop={"100px"}>
       <Text fontSize={"30px"} fontWeight="extrabold">Sign IN </Text>
  <FormLabel fontSize={"15px"}>Enter your Email</FormLabel>
  <Input type='email' placeholder='yourname@xample.com' name="email"  onChange={handleInput} value={login.email}/>
  <FormLabel fontSize={"15px"}>Enter your Password</FormLabel>
  <Input type='password' placeholder='Enter your password' name="password" onChange={handleInput} value={login.password}/>
  <FormHelperText>We'll never share your email.</FormHelperText>
  <Text fontSize={"13px"}>Forgot your password</Text>
  <Button  bg="#202340 !important" color="white" borderRadius="30px" marginTop={"20px"} onClick={handlelogin}>Sign-In</Button>
</FormControl>

<Box marginTop={"150px"} marginLeft="70px">
    <Image src="https://i.im.ge/2022/07/20/F1B0rX.png"/>
    <Button _hover={{ bg: "#202340 !important", color: " white" }}
        _focus={{ boxShadow: "outline" }} borderRadius="30px" marginTop={"20px"} onClick={()=>(navigation("/Acc"))}>Create your new Account</Button>
</Box>
</Flex>

</Box>
  )
}

export default Login
