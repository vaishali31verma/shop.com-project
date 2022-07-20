import { Box,Flex,Text,Image, Button } from '@chakra-ui/react'
import React from 'react'
import { css } from "@emotion/core"
import Landingpage2 from './landingpage2'
const Landing = () => {
  return (
   <Box marginTop={"30px"} >
         <Flex alignItems={"center"} justifyContent="center" gap={"30px"} marginBottom={"30px"}>
            <Text color={"grey"} fontSize={"30px"}>$50,063,983</Text>
            <Text fontSize={"20px"}>awarded in </Text>
            <Image src="https://img.shop.com/Image/resources/images/cashback-icon.svg" width={"30px"}/>
            <Text fontSize={"20px"}>Cashback!</Text>
            <Button border={"2px solid black"}  _hover={{ bg: "#202340 !important", color: " white" }}
        _focus={{ boxShadow: "outline" }} borderRadius={"30px"}>Learn More</Button>
        </Flex>
        <Image src="https://www.shop.com/feo-cdn/y/H/p4i0ZnTXA.webp"/>
        <Landingpage2/>
   </Box>
  )
}

export default Landing
