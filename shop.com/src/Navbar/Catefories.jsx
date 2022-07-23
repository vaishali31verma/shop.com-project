import React from 'react'
import {Box, color, Flex, Image, Input, Select, Stack,Text} from "@chakra-ui/react"
import { useNavigate } from 'react-router-dom'

const Catefories = () => {
  const navigates = useNavigate()
  return (
   <Box>
      <Flex gap={"20px"}>
        <Text >Exclusive Brand</Text>
        <Text onClick={()=>navigates("/allcosmetics")}>Beauty Stores</Text>
        <Text >Deals</Text>
        <Text >SHOP Travel</Text>
        <Text >Departments</Text>
        <Text >ShopBuddy</Text>
        <Text >SHOP Local</Text>
      </Flex>
     
   </Box>
  )
}

export default Catefories
