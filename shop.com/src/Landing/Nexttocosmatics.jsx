import { Box, Flex, Image,Text } from '@chakra-ui/react'
import React from 'react'
import Tableware from './Tableware'

const Nexttocosmatics = () => {
  return (
    <Box marginTop={"40px"} boxShadow="md">
    <Flex marginTop={"50px"} justifyContent="center" gap="30px">
        <Box boxShadow="base">
        <Image src="https://img.shop.com/Image/homepage/motives-usa-eng-101586-gel-ous-gel-v2-smsq1656424038992.jpg" />
        <Flex justifyContent={"center"}>
                        <Text fontSize={"15px"} fontWeight={"bold"}>2%</Text>
                        <Image src="https://img.shop.com/Image/resources/images/cashback-icon.svg" w={"20px"} />
                        <Text fontSize={"15px"} fontWeight={"bold"}>Cashback</Text>
        </Flex >
        </Box >
        <Box boxShadow="base">
        <Image src="https://img.shop.com/Image/homepage/ldv-SHOP-usa-eng-100843-after-sun-glow-renew-banner-smsq1655908018987.jpg" />
        <Flex justifyContent={"center"}>
                        <Text fontSize={"15px"} fontWeight={"bold"}>4%</Text>
                        <Image src="https://img.shop.com/Image/resources/images/cashback-icon.svg" w={"20px"} />
                        <Text fontSize={"15px"} fontWeight={"bold"}>Cashback</Text>
        </Flex>
        </Box>
        <Box boxShadow="base"> 
        <Image src="https://img.shop.com/Image/homepage/ldv-usa-100842-micellar-cleanser-banners-SMSQQ1657117577059.jpg" />
            <Flex justifyContent={"center"}>
                        <Text fontSize={"15px"} fontWeight={"bold"}>2%</Text>
                        <Image src="https://img.shop.com/Image/resources/images/cashback-icon.svg" w={"20px"} />
                        <Text fontSize={"15px"} fontWeight={"bold"}>Cashback</Text>
                    </Flex></Box>
        <Box boxShadow="base">
        <Image src="https://img.shop.com/Image/homepage/ldv-aus-99879-soothe-renew-hydrogel-mask-banner-sq1653319889747.jpg" />
        <Flex justifyContent={"center"}>
                        <Text fontSize={"15px"} fontWeight={"bold"}>3%</Text>
                        <Image src="https://img.shop.com/Image/resources/images/cashback-icon.svg" w={"20px"} />
                        <Text fontSize={"15px"} fontWeight={"bold"}>Cashback</Text>
        </Flex>
        </Box>
    </Flex>
    <Tableware />
    </Box>
  )
}

export default Nexttocosmatics
