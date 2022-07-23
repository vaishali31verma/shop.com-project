import React from 'react'
import {Box, Flex,Text,Image, Button} from "@chakra-ui/react"
import Landingpage3 from './Landingpage3'
const Landingpage2 = () => {
  return (
    <Box >
       <Flex>
         <Box margin={"20px"} boxShadow='dark-lg'>
            <Text display={"block"} textAlign={"left"} >Recently Viewed</Text>
            <Image src= "https://img.shop.com/Image/240000/243300/243380/products/1454255903.jpg?plain&size=1600x1600" width={"340px"} h={"400px"}/>
            <Text display={"block"} textAlign={"left"}>Browsering History</Text>
         </Box>
         <Box margin={"20px"} boxShadow='dark-lg'>
            <Text display={"block"} textAlign={"left"} >Your Favorite Departments</Text>
            <Image src= "https://img.shop.com/Image/departments/Beauty.jpg" width={"340px"} h={"400px"}/>
            <Text display={"block"} textAlign={"left"}>Beauty</Text>
         </Box>
         <Box margin={"20px"} boxShadow='dark-lg'>
         <Text display={"block"} textAlign={"left"} >Featured One Cart Stores</Text>
         <Box bg={"RGBA(0, 0, 0, 0.06)"} width={"340px"} height={"50px"} marginTop={"20px"}>
            <Image src="https://img.shop.com/Image/topbrands/nmlogos_114426.gif" paddingTop={"10px"} margin={"auto"} w={"150px"}/>
         </Box>
         <Box bg={"RGBA(0, 0, 0, 0.06)"} width={"340px"} height={"50px"} marginTop={"20px"}>
            <Image src="https://img.shop.com/Image/topbrands/nmlogos_107913.gif" paddingTop={"10px"} margin={"auto"} w={"150px"}/>
         </Box>
         <Box bg={"RGBA(0, 0, 0, 0.06)"} width={"340px"} height={"50px"} marginTop={"20px"}>
            <Image src="https://img.shop.com/Image/topbrands/nmlogos_125496.gif" paddingTop={"10px"} margin={"auto"} w={"150px"}/>
         </Box>
         <Box bg={"RGBA(0, 0, 0, 0.06)"} height={"90px"}  marginTop={"20px"}>
            <Image src="https://img.shop.com/Image/topbrands/nmlogos_138557.gif" paddingTop={"10px"} margin={"auto"} w={"150px"}/>
         </Box>
         <Text textDecor={"underline"} fontSize={"15px"} textAlign={"left"} marginTop={"75px"}>See More Stories</Text>
         </Box>
         
         <Box margin={"20px"} >
            <Box  boxShadow='dark-lg' marginTop={"30px"} marginBottom={"35px"} h={"80px"}>
                <Text fontStyle={"italic"}>Sign in for the best experience</Text>
                <Button w={"90%"} borderRadius={"30px"} bg={"#202340 !important"} color={"white"}  h={"40px"}>Sing In</Button>
            </Box>
        
            <Image w={"300px"} src="https://img.shop.com/Image/homepage/Rastellis_MA_MidSummer22_600x600-img_CTA1657723097922.png"/> 
            </Box>


       </Flex>
       <Landingpage3/>
    </Box>
  )
}

export default Landingpage2
