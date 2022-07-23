import { Box, Button, Flex,Image,Text } from '@chakra-ui/react'
import React from 'react'
import { AppContext } from '../context/contextapi'
import { useContext } from 'react'
import style from "./styles.module.css"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// import Carousel from 'react-elastic-carousel';
import Slider from "react-slick";
import Jewellary from './Jewellary'
const Medicine = () => {
    const {medicine} = useContext(AppContext)
    
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
              buttons:true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };


   return(
    <Box >
   <Flex>
    <Box w={"70%"}>
    <Slider {...settings}>
    {medicine.map((item)=>(
        <Box >
        <Box boxShadow='2xl' w="300px" h={"470px"}>
            <Flex flexDirection={"column"} alignItems="center">
            <Image src={item.image} w={"300px"} h="300px"/>
            <Flex flexDirection={"column"} alignItems={"start"} marginLeft="12px">
            <Text fontSize={"17px"}>{item.name}</Text>
            <Text>$ {item.price}</Text>
            <Flex justifyContent={"center"}>
                        <Text fontSize={"15px"} fontWeight={"bold"}>2%</Text>
                        <Image src="https://img.shop.com/Image/resources/images/cashback-icon.svg" w={"20px"} />
                        <Text fontSize={"15px"} fontWeight={"bold"}>Cashback</Text>
                    </Flex>
            <Text>rating:{item.rating}</Text>
            </Flex>
            </Flex>
        </Box>
        
       
       </Box>
    ))}
   
    
    </Slider>
   
    </Box>
     <Image  src="https://www.shop.com/feo-cdn/x/s/SS8WICZG0.webp" w="400px" h="400px"/>
     </Flex>
     <Jewellary/>
     </Box>
   )
}

export default Medicine
