import { Box, Flex, Text, Image } from '@chakra-ui/react'
import React from 'react'
import Medicine from './Medicine'

const Landingpage3 = () => {
    return (
        <Box>
            <Text fontSize={"3xl"} fontFamily="serif" marginLeft={"300px"}>Popular Brands</Text>
            <Flex margin={"12px"}>
                <Image src="https://www.shop.com/feo-cdn/d/b/zT4i8COrg.webp" width={"400px"} marginRight="70px" />
                <Box>
                    <Flex gap={"10px"}>
                        <Box bg={"RGBA(0, 0, 0, 0.06)"} h="120px" w="172px"> <Image margin={"auto"} paddingTop={"20px"} src="https://www.shop.com/feo-cdn/A/p/ONaGbc0Sw.webp" h={"100px"} w="150px" /></Box>
                        <Box bg={"RGBA(0, 0, 0, 0.06)"} h="120px" w="172px">  <Image margin={"auto"} paddingTop={"20px"} h={"100px"} w="150px" src="https://www.shop.com/feo-cdn/W/F/MSQneTOF8.webp" /></Box>
                        <Box bg={"RGBA(0, 0, 0, 0.06)"} h="120px" w="172px">   <Image margin={"auto"} paddingTop={"20px"} h={"100px"} w="150px" src="https://www.shop.com/feo-cdn/b/M/ihVmpQaZE.webp" /></Box>
                        <Box bg={"RGBA(0, 0, 0, 0.06)"} h="120px" w="172px"> <Image margin={"auto"} paddingTop={"20px"} h={"100px"} w="150px" src="https://www.shop.com/feo-cdn/0/K/gWuirwaLk.webp" /></Box>
                        <Box bg={"RGBA(0, 0, 0, 0.06)"} h="120px" w="172px"><Image margin={"auto"} paddingTop={"20px"} h={"100px"} w="150px" src="https://www.shop.com/feo-cdn/l/I/USB2Cic44.webp" /></Box>
                    </Flex>
                    <Flex justifyContent={"space-around"} alignItems={"center"} marginTop={"30px"}>
                        <Image src="https://www.shop.com/feo-cdn/L/6/4sMQp52O0.webp" />
                        <Image src="https://www.shop.com/feo-cdn/3/K/NjwdecovA.webp" />
                    </Flex>
                </Box>
            </Flex>
            <Image w="150px" src="https://img.shop.com/Image/resources/homepage/shop-homepage-icon-gold.svg" margin={"auto"} />
            <Flex justifyContent={"space-around"} marginBottom="30px" >
                <Box><Image src="https://www.shop.com/feo-cdn/v/X/sW3POHeMQ.webp" />
                    <Flex justifyContent={"center"}>
                        <Text fontSize={"15px"} fontWeight={"bold"}>6%</Text>
                        <Image src="https://img.shop.com/Image/resources/images/cashback-icon.svg" w={"20px"} />
                        <Text fontSize={"15px"} fontWeight={"bold"}>Cashback</Text>
                    </Flex>
                    <Text fontSize={"10px"} fontWeight={"bold"}>10% off with Promo code SHOPLOLE10</Text>
                </Box>
                <Box><Image src="https://www.shop.com/feo-cdn/K/X/32EFiyNvE.webp" />
                    <Flex justifyContent={"center"}>
                        <Text fontSize={"15px"} fontWeight={"bold"}>upto 4%</Text>
                        <Image src="https://img.shop.com/Image/resources/images/cashback-icon.svg" w={"20px"} />
                        <Text fontSize={"15px"} fontWeight={"bold"}>Cashback</Text>
                    </Flex>

                </Box>
                <Box><Image src="https://www.shop.com/feo-cdn/0/C/A6yJeUcUE.webp" />
                    <Flex justifyContent={"center"}>
                        <Text fontSize={"15px"} fontWeight={"bold"}>up to 4%</Text>
                        <Image src="https://img.shop.com/Image/resources/images/cashback-icon.svg" w={"20px"} />
                        <Text fontSize={"15px"} fontWeight={"bold"}>Cashback</Text>
                    </Flex>

                </Box>
                <Box><Image src="https://www.shop.com/feo-cdn/C/r/NIDMytUo0.jpg" />
                    <Flex justifyContent={"center"}>
                        <Text fontSize={"15px"} fontWeight={"bold"}>2%</Text>
                        <Image src="https://img.shop.com/Image/resources/images/cashback-icon.svg" w={"20px"} />
                        <Text fontSize={"15px"} fontWeight={"bold"}>Cashback</Text>
                    </Flex>
                    <Text fontSize={"10px"} fontWeight={"bold"}>SHOP.COM Exclusive - $15 off with code: SHOPDOTCOM15</Text>
                </Box>
            </Flex>
            <Medicine/>
        </Box>
    )
}

export default Landingpage3
