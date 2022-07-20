import { Box, Button, Flex, useDisclosure,Text } from '@chakra-ui/react'
import React from 'react'
import Signin from './Signin'
import { css } from "@emotion/core"
import {
  
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Image,
  } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import Catefories from './Catefories'
import Orders from './Orders'
import Cart from './Cart'
const Navbartwo = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [placement, setPlacement] = React.useState('left')

  return (
  <Box >
   <Flex justifyContent={"space-between"} marginTop={"20px"}>
   <Button colorScheme='blue' onClick={onOpen} bg="white" >
    <HamburgerIcon color={"black"}/>
   </Button>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth='1px' display={"flex"} gap="12px">
            
           <Image  src = "https://img.shop.com/Image/resources/logos/shop-s-logo-icon.svg" width={"30px"}/>
    SHOP.COM</DrawerHeader> 
          <DrawerBody scrollBehavior={"smooth"} >
            <Box >
            <Box boxShadow='2xl' p='6' rounded='md' bg='white'h={"2px"} css={css`
     &:hover {
        color: blue;
      }
  `}>Clothes</Box>
            <Box boxShadow='2xl' p='6' rounded='md' bg='white'h={"2px"} css={css`
     &:hover {
        color: blue;
      }
  `}>Gift Center</Box>
            <Box boxShadow='2xl' p='6' rounded='md' bg='white' h={"2px"}css={css`
     &:hover {
        color: blue;
      }
  `}>SHOP.COM Home Warranties</Box>
           <Box boxShadow='2xl' p='6' rounded='md' bg='white'h={"2px"} css={css`
     &:hover {
        color: blue;
      }
  `}>Onecart Exclusive Deals</Box>
           <Box boxShadow='2xl' p='6' rounded='md' bg='white'h={"2px"} css={css`
     &:hover {
        color: blue;
      }
  `}>Shoes</Box>
           <Box boxShadow='2xl' p='6' rounded='md' bg='white'h={"2px"} css={css`
     &:hover {
        color: blue;
      }
  `}>Beauty</Box>
           <Box boxShadow='2xl' p='6' rounded='md' bg='white'h={"2px"} css={css`
     &:hover {
        color: blue;
      }
  `}>Home</Box>
           <Box boxShadow='2xl' p='6' rounded='md' bg='white'h={"2px"} css={css`
     &:hover {
        color: blue;
      }
  `}>Health & Nutrition</Box>
           <Box boxShadow='2xl' p='6' rounded='md' bg='white'h={"2px"} css={css`
     &:hover {
        color: blue;
      }
  `}>Kids</Box>
           <Box boxShadow='2xl' p='6' rounded='md' bg='white'h={"2px"} css={css`
     &:hover {
        color: blue;
      }
  `}>Pet Supplies</Box>
           <Box boxShadow='2xl' p='6' rounded='md' bg='white'h={"2px"} css={css`
     &:hover {
        color: blue;
      }
  `}>Food & Drink</Box>
           </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <Catefories/>
      <Signin/>
      <Orders/>
      <Cart/>
      </Flex>
  </Box>
  )
    
  
}

export default Navbartwo
