import React from 'react'
import { Box, Flex, Image,Text } from '@chakra-ui/react'
const Nexttotableware = () => {
  return (
    <Box marginTop={"40px"} boxShadow="md">
    <Flex marginTop={"50px"} justifyContent="center" gap="30px">
        <Box boxShadow="base">
        <Image src="https://www.shop.com/feo-cdn/_/q/Wl3UVZsfc.webp" />
        <Flex justifyContent={"center"}>
                        <Text fontSize={"15px"} fontWeight={"bold"}>2%</Text>
                        <Image src="https://img.shop.com/Image/resources/images/cashback-icon.svg" w={"20px"} />
                        <Text fontSize={"15px"} fontWeight={"bold"}>Cashback</Text>
        </Flex >
        </Box >
        <Box boxShadow="base">
        <Image src="https://www.shop.com/feo-cdn/U/m/dXg8iOwhY.webp" />
        <Flex justifyContent={"center"}>
                        <Text fontSize={"15px"} fontWeight={"bold"}>4%</Text>
                        <Image src="https://img.shop.com/Image/resources/images/cashback-icon.svg" w={"20px"} />
                        <Text fontSize={"15px"} fontWeight={"bold"}>Cashback</Text>
        </Flex>
        </Box>
        <Box boxShadow="base"> 
        <Image src="https://www.shop.com/feo-cdn/k/F/-5dDL0Zwc.webp" />
            <Flex justifyContent={"center"}>
                        <Text fontSize={"15px"} fontWeight={"bold"}>2%</Text>
                        <Image src="https://img.shop.com/Image/resources/images/cashback-icon.svg" w={"20px"} />
                        <Text fontSize={"15px"} fontWeight={"bold"}>Cashback</Text>
                    </Flex></Box>
        <Box boxShadow="base">
        <Image src="https://www.shop.com/feo-cdn/5/r/B2jtYJmG0.webp" />
        <Flex justifyContent={"center"}>
                        <Text fontSize={"15px"} fontWeight={"bold"}>3%</Text>
                        <Image src="https://img.shop.com/Image/resources/images/cashback-icon.svg" w={"20px"} />
                        <Text fontSize={"15px"} fontWeight={"bold"}>Cashback</Text>
        </Flex>
        </Box>
    </Flex>
    
    </Box>
  )
}

export default Nexttotableware
