import { Box, Button, Flex, Image } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import {
  FormControl,
  FormLabel,
  FormHelperText,Input,Text
} from '@chakra-ui/react'
import { AppContext } from '../context/contextapi'
const Account = () => {
  const {Adduser} = useContext(AppContext)
  const [formdata,setformdata] = useState(
    {
      name:"",
      lname:"",
      email:"",
      password:"",

    }
  )
  
  const handleInput =(e)=>{
    const {value,name} = e.target
    setformdata({
      ...formdata,
      [name]:value
    })
  }
  const handleSubmit =()=>{
    Adduser(formdata)
    alert(`User is created`)
    
  }

  return (
   <Box marginTop={"100px"}>
     <Text fontSize={"30px"} fontWeight="extrabold" marginBottom={"40px"}>Create Your Account</Text>
     <FormControl w="1000px"   display={"block"} margin="auto">
      <Flex gap="40px"  justifyContent="space-between" margin={"40px"} >
      <Box  w="400px">
      <FormLabel>Your First Name</FormLabel>
      <Input placeholder='First name' onChange={handleInput} name="name" value={formdata.name}/>
      </Box>
       
      <Box w="400px">
      <FormLabel>Your Last Name</FormLabel>
      <Input placeholder='Last name' onChange={handleInput} name="lname" value={formdata.lname}/>
      </Box>
     </Flex>

     <Flex gap="40px"  justifyContent="space-between" margin={"40px"}>
      <Box  w="400px">
      <FormLabel>Your Email</FormLabel>
      <Input placeholder='Email@emaple.com' onChange={handleInput} name="email" value={formdata.email} type="email"/>
      </Box>
       
      <Box w="400px">
      <FormLabel>Your Password</FormLabel>
      <Input placeholder='.....' onChange={handleInput} name="password" value={formdata.password} type="password"/>
      </Box>
     </Flex>
     <Image src="https://i.im.ge/2022/07/20/F2TNw6.png" />
     </FormControl>
     <Button  bg="#202340 !important" color="white" borderRadius="30px" marginTop={"20px"} value="Create Account" w="300px" onClick={handleSubmit}>Create Account </Button>
   </Box>
  )
}

export default Account
