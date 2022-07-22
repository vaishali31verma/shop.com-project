import { Grid, GridItem } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { Box, Text ,Image, Flex} from '@chakra-ui/react'
import { AppContext } from '../context/contextapi'
 import SimpleImageSlider from "react-simple-image-slider"

// import 'react-slideshow-image/dist/styles.css'
import Nexttotableware from './nexttotableware'
const Tableware = () => {
    const {tableware} = useContext(AppContext)
  return (
    <Box >
    <Box h="500px" boxShadow='dark-lg' marginTop={"70px"}>
        <Text fontSize={"30px"} fontWeight="bold">Set your Table</Text>
        <Grid templateColumns='repeat(5, 1fr)' templateRows='repeat(5, 1fr)' gap={1} marginTop={"40px"} marginLeft={"100px"}>
       {tableware.map((e)=>(
             <GridItem w='100%' h='200px' >
            <SimpleImageSlider
                 width={150}
                  height={150}
                  images={e.images}
                 showBullets={true}
                  showNavs={false}  
                  autoPlay={true}
                  /> 
        
         
             <Text marginLeft={"-90px"}>{e.title}</Text>
               
             </GridItem>
       ))}</Grid>
     </Box>
     <Nexttotableware/>
        </Box>
   
   

   
  )
}

export default Tableware
