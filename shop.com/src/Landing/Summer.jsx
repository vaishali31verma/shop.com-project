import { Box, Text ,Image, Flex} from '@chakra-ui/react'
import React, { useContext } from 'react'
import { Grid, GridItem } from '@chakra-ui/react'
import { AppContext } from '../context/contextapi'
import Cosmetics from './Cosmetics'
const Summer = () => {
    const {Clothes} = useContext(AppContext)
  return (
    <Box >
    <Box h="600px" bg="rgba(51, 181, 229, 0.4)" marginTop={"70px"}>
        <Text fontSize={"50px"}>Summer Essentials</Text>
        <Grid templateColumns='repeat(5, 1fr)' templateRows='repeat(5, 1fr)' gap={10} marginTop={"40px"} >
       {Clothes.map((e)=>(
             <GridItem w='100%' h='200px'  >
                <Image src={e.image}  w="200px" h="200px" borderRadius={"50%"} marginLeft="30px" border={"12px solid #A0AEC0"}/>
             <Text>{e.category}</Text>
               
             </GridItem>
       ))}</Grid>
     </Box>
    <Flex marginTop={"50px"} justifyContent="center" gap="30px">
        <Box>
        <Image src="https://img.shop.com/Image/homepage/SA-usa-102138-Peanut-Butter-Blueberry-Dog-Treats-media1657026033093.jpg" />
        <Flex justifyContent={"center"}>
                        <Text fontSize={"15px"} fontWeight={"bold"}>2%</Text>
                        <Image src="https://img.shop.com/Image/resources/images/cashback-icon.svg" w={"20px"} />
                        <Text fontSize={"15px"} fontWeight={"bold"}>Cashback</Text>
        </Flex>
        </Box>
        <Box>
        <Image src="https://img.shop.com/Image/homepage/isotonix-usa-eng-102129-peak-perf-blend-banner-media1656708341835.jpg" />
        <Flex justifyContent={"center"}>
                        <Text fontSize={"15px"} fontWeight={"bold"}>4%</Text>
                        <Image src="https://img.shop.com/Image/resources/images/cashback-icon.svg" w={"20px"} />
                        <Text fontSize={"15px"} fontWeight={"bold"}>Cashback</Text>
        </Flex>
        </Box>
        <Box>
        <Image src="https://img.shop.com/Image/homepage/friction-free-usa-64454-3000-fuel-enhancer-banner-media1657744574779.jpg" />
            <Flex justifyContent={"center"}>
                        <Text fontSize={"15px"} fontWeight={"bold"}>2%</Text>
                        <Image src="https://img.shop.com/Image/resources/images/cashback-icon.svg" w={"20px"} />
                        <Text fontSize={"15px"} fontWeight={"bold"}>Cashback</Text>
                    </Flex></Box>
        <Box>
        <Image src="https://img.shop.com/Image/homepage/tls-us-eng-102958-acts-label-banner_media1657744616285.jpg" />
        <Flex justifyContent={"center"}>
                        <Text fontSize={"15px"} fontWeight={"bold"}>3%</Text>
                        <Image src="https://img.shop.com/Image/resources/images/cashback-icon.svg" w={"20px"} />
                        <Text fontSize={"15px"} fontWeight={"bold"}>Cashback</Text>
        </Flex>
        </Box>
    </Flex>
    <Cosmetics/>

    </Box>
  )
}

export default Summer
