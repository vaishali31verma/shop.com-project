import { Box,Text, useDisclosure } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import axios from "axios"
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,Button
  } from '@chakra-ui/react'
import { AppContext } from '../context/contextapi'
import { Navigate, useNavigate } from 'react-router-dom'
const Subtotal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const {userid} =  useContext(AppContext)
   const [totals,settotal] = useState(0)
   const navigation = useNavigate()
    
    
    const handlecart =async()=>{  
        
        const cart= await axios.get(`https://myownapitodo.herokuapp.com/User/${userid}`)
        let prevcart= cart.data.cart
        const total=  prevcart.reduce((acc,e)=>{
            return acc+e.price*e.qty
        },0)
        
         settotal(total)
        console.log(totals)
        
    }
    useEffect(()=>{
        handlecart()
    },[totals])
     console.log(totals)
    
     

  return (
    <Box >
      <Button onClick={onOpen}>SEE Your TOTAL </Button>

<Modal isOpen={isOpen} onClose={onClose}>
  <ModalOverlay />
  <ModalContent>
    <ModalHeader>YOUR TOTAL IS:{totals}</ModalHeader>
    <ModalCloseButton />
    <ModalBody>
     <Text>We are happy to serve You🤗🤗</Text>
   
    </ModalBody>
     
    <ModalFooter>
      <Button colorScheme='blue' mr={3} onClick={onClose}>
        Close
      </Button>
      <Button variant='ghost'onClick={()=>(navigation("/proceed"))}>Proceed to Checkout</Button>
    </ModalFooter>
  </ModalContent>
</Modal>

     
    </Box>
  )
}

export default Subtotal
