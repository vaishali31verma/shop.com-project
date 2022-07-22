import React from 'react'
import{Box, Flex, Image, Text} from "@chakra-ui/react"
import { useContext } from 'react'
import { AppContext } from '../context/contextapi'
import Slider from "react-slick";
import Summer from './Summer';
const Jewellary = () => {
   const {jewelary} = useContext(AppContext)
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

  return (
    <Box>
    <Flex marginTop={"100px"}>
    <Image src="https://img.shop.com/Image/homepage/Layered_USA-CAN_102262_ENG_Layered_Summer_Holiday_22_Banners_bgsq1657730326533.jpg" w="400px" h="460px"/>
    
    <Box w={"70%"} >
    <Slider {...settings}>
    {jewelary.map((item)=>(
        <Box >
        <Box boxShadow='2xl' w="300px" h={"460px"}>
            <Flex flexDirection={"column"} alignItems="center">
            <Image src={item.image} w={"270px"} h="270px"/>
            <Flex flexDirection={"column"} alignItems={"start"} marginLeft="12px">
            <Text fontSize={"17px"}>{item.title}</Text>
            <Text>$ {item.price}</Text>
            <Flex justifyContent={"center"}>
                        <Text fontSize={"15px"} fontWeight={"bold"}>2%</Text>
                        <Image src="https://img.shop.com/Image/resources/images/cashback-icon.svg" w={"20px"} />
                        <Text fontSize={"15px"} fontWeight={"bold"}>Cashback</Text>
                    </Flex>
             <Text>rating:{item.rating.rate}</Text> 
             <Text color={"teal"} fontSize={"12px"}>Free shipping with $99 orders</Text>
            </Flex>
            </Flex>
        </Box>
        <Box ></Box>
       
       </Box>
    ))}
    </Slider>
    </Box>
     </Flex>
     <Summer />
     </Box>
  )
}

export default Jewellary
