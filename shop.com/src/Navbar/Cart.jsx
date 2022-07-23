import { Box, Button, Flex ,FormLabel,Image,Select,Text, useDisclosure} from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import { MdShoppingCart } from 'react-icons/md'
import {    TiDelete } from "react-icons/ti"
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
} from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react'
  import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'
import Subtotal from './Subtotal'
import { useEffect } from 'react'
import { AppContext } from '../context/contextapi'
import axios from 'axios'

const Cart = () => {
    const [size, setSize] = React.useState('')
       const {userid} = useContext(AppContext)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [cartdata,setcart] = useState([])
  const starArray = [...Array(5).keys()].map(i => i + 1)
  const qtyArray = [...Array(10).keys()].map(i => i + 1)
  const handleClick = (newSize) => {
    setSize(newSize)
    onOpen()
  }
  
  const handlecart =async()=>{   
      const cart= await axios.get(`https://myownapitodo.herokuapp.com/User/${userid}`)
      let prevcart= cart.data.cart
      setcart(prevcart)   
      
  }
  
  
  
  const handledelete =async(id,name)=>{

    const getfordel= await axios.get(`https://myownapitodo.herokuapp.com/User/${userid}`)
    let  userdata = getfordel.data
    
  const data=  cartdata.filter((e)=>{
      return e.id!==id && e.name!==name
     })
     
     axios({
      url:`https://myownapitodo.herokuapp.com/User/${userid}`,
      method:"PATCH",
      data: {...userdata,cart: [...data] }
  })

  handlecart()
  setTimeout(() => {
    handlecart()
  }, 0);
  }
  
  const sizes = ['md']
  return (
    <Flex marginRight={"20px"}>
        

        {sizes.map((size) => (
        <Button
          onClick={() => {
            handlecart()
            handleClick(size)
          
          }}
          key={size}
          m={1}
          size={"20px"}
        >{<MdShoppingCart  size={"30px"}/>}</Button>
      ))}

      <Drawer onClose={onClose} isOpen={isOpen} size={size} >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Shooping Cart</DrawerHeader>
          <DrawerBody>
          <Flex justifyContent={"center"}>
                        
                        <Image src="https://img.shop.com/Image/resources/images/cashback-icon.svg" w={"20px"} />
                        <Text fontSize={"15px"} fontWeight={"bold"}>Earned: $1.66 Cashback</Text>
                    </Flex>
                      <Text>Market America</Text>
                      <Slider aria-label='slider-ex-1' defaultValue={30}>
                    <SliderTrack>
                   <SliderFilledTrack />
                  </SliderTrack>
                  <SliderThumb />
                    </Slider>
                    {/* <Text>Add $ {} for free shipping</Text> */}
                     <Box>
      {cartdata && <Box  overflow={"scroll"}   w="500px" h="400px" bg="white"
       sx={
    { 
     '::-webkit-scrollbar':{
          display:'none'
      }
   }
 }
>
      
       {cartdata.map((e)=>(
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
          <Text fontSize={"25px"}>₹ {e.price}</Text>   
          <Text fontSize={"20px"}>Quantity:{e.qty}</Text>
        <Text> Total of {e.category} is :{e.price*e.qty}</Text>
         </Box>
         <Flex flexDirection={"column"}>
         <Text>Qty</Text>
       
          </Flex>

       <Image src={e.image[0]} w="300px" h="150px" maxHeight={"fit-content"} maxWidth="fit-content"/>
         <TiDelete size={"50px"} onClick={()=>handledelete(e.id,e.name)}/>
         </Flex>
        
         </Box>
      ))}
      
     <Box>
      <Subtotal />

     </Box>
      </Box>}

     </Box>
       <Box>
       
        </Box>         
          </DrawerBody>
        </DrawerContent>
      </Drawer>






         <Text>Cart</Text>
    </Flex>

  )
}

export default Cart
