import React from 'react'
import {Box, color, Flex, Image, Input, Select, Stack,Text} from "@chakra-ui/react"
import { css } from "@emotion/core"
const Catefories = () => {
  return (
   <Box>
      <Flex gap={"20px"}>
        <Text css={css`
     &:hover {
        color: blue;
      }
  `}>Exclusive Brand</Text>
        <Text css={css`
     &:hover {
        color: blue;
      }
  `}>Stores</Text>
        <Text css={css`
     &:hover {
        color: blue;
      }
  `}>Deals</Text>
        <Text css={css`
     &:hover {
        color: blue;
      }
  `}>SHOP Travel</Text>
        <Text css={css`
     &:hover {
        color: blue;
      }
  `}>Departments</Text>
        <Text css={css`
     &:hover {
        color: blue;
      }
  `}>ShopBuddy</Text>
        <Text css={css`
     &:hover {
        color: blue;
      }
  `}>SHOP Local</Text>
      </Flex>
     
   </Box>
  )
}

export default Catefories
