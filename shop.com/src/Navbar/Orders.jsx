import { Box,Flex,Text } from '@chakra-ui/react'
import React from 'react'
import {MdRefresh} from "react-icons/md"

const Orders = () => {
  return (
    <Box>
        <Flex>
        <MdRefresh size={"35px"}/>
        <Text>Orders</Text>
        </Flex>
    </Box>
  )
}

export default Orders
