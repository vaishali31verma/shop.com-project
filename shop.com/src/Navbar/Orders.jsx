import { Box,Flex,Text } from '@chakra-ui/react'
import React from 'react'
import {MdRefresh} from "react-icons/md"
import { css } from "@emotion/core"
const Orders = () => {
  return (
    <Box>
        <Flex>
        <MdRefresh size={"35px"}/>
        <Text
        css={css`
        &:hover {
           color: blue;
         }
     `}>Orders</Text>
        </Flex>
    </Box>
  )
}

export default Orders
