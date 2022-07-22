import React, { useState } from 'react'
import{Box, Flex, Image, Text} from "@chakra-ui/react"
import { useContext } from 'react'
import { AppContext } from '../context/contextapi'
import Slider from "react-slick";
import Nexttocosmatics from './Nexttocosmatics';
import {useNavigate} from "react-router-dom"


const Cosmetics = () => {
    const {cosmetics} = useContext(AppContext)
    

    let navigate = useNavigate();
    const handledeteilofcos =(id)=>{
      navigate(`/${id}`)
     


    }
    
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
    
    <Box marginTop={"100px"}>
        <Text fontSize={"40px"} marginTop={"30px"} marginRight={"780px"}>Hot Summer Beauty Products</Text>
    <Flex >
    <Image src="https://img.shop.com/Image/homepage/SHOP_USA_100162_ENG_Summer_Beauty_Banners_bgsq1655839103149.jpg" w="400px" h="440px"/>
    
    <Box w={"70%"} >
    <Slider {...settings}>
    {cosmetics.map((item)=>(
        <Box >
        <Box boxShadow='2xl' w="300px" h={"440px"} onClick={()=>handledeteilofcos(item.id)}>
            <Flex flexDirection={"column"} alignItems="center">
            <Image src={item.image[0]} w={"270px"} h="270px"/>
            <Flex flexDirection={"column"} alignItems={"start"} marginLeft="12px">
            <Text fontSize={"17px"}>{item.name}</Text>
            <Text>$ {item.price}</Text>
            <Flex justifyContent={"center"}>
                        <Text fontSize={"15px"} fontWeight={"bold"}>2%</Text>
                        <Image src="https://img.shop.com/Image/resources/images/cashback-icon.svg" w={"20px"} />
                        <Text fontSize={"15px"} fontWeight={"bold"}>Cashback</Text>
                    </Flex>
             <Text>rating:{item.ratingValue}</Text> 
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
     <Nexttocosmatics />
     </Box>
)
}

export default Cosmetics
