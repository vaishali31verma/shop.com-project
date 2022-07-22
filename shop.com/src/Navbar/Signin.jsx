import { Box, Button, Flex ,Input,Text, useDisclosure} from '@chakra-ui/react'
import React from 'react'
import {FaUserCircle,FaUserAlt} from "react-icons/fa"
import {TbBus} from "react-icons/tb"
import {RiMoneyDollarCircleFill} from "react-icons/ri"
import {BiHelpCircle,BiUserPlus} from "react-icons/bi"
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'
import { useNavigate } from "react-router-dom"

const Signin = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  const navigation = useNavigate();


  return (
    <Box>
        <Flex gap={"7px"}>
       <FaUserCircle size={"35px"}  ref={btnRef} colorScheme='teal' onClick={onOpen}/>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader> 
          <Flex><FaUserCircle/> Account</Flex> 
          <Text fontSize={"15px"}>Your Shop Consultant is SHOP.COM</Text>
          <Flex marginTop="30px" gap="20px" onClick={()=>(navigation("/login"))}><FaUserAlt size={"20px"}/><Text fontSize={"15px"} >Sign in</Text></Flex>
          <Flex marginTop="30px" gap="20px"><TbBus size={"20px"}/><Text fontSize={"15px"} >Track Orders</Text></Flex>
          <Flex marginTop="30px" gap="20px"><RiMoneyDollarCircleFill size={"20px"}/><Text fontSize={"15px"} >Cash Backprogram</Text></Flex>
          <Flex marginTop="30px" gap="20px"><BiHelpCircle size={"20px"}/><Text fontSize={"15px"} >Help</Text></Flex>
          <Flex marginTop="30px" gap="20px" onClick={()=>(navigation("/Acc"))}><BiUserPlus size={"20px"}/><Text fontSize={"15px"} >Create Account</Text></Flex>
          <Flex marginTop="30px" gap="20px" onClick={()=>(navigation("/login"))}><FaUserCircle size={"20px"}/><Text fontSize={"15px"} >My Account</Text></Flex>
          
          </DrawerHeader>

          <DrawerBody>



          </DrawerBody>
        </DrawerContent>
      </Drawer>

       <Text fontSize={"20px"}>Signin</Text>
        </Flex>
    </Box>
  )
}

export default Signin
