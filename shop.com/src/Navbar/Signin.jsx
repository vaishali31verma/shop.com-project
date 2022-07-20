import { Box, Flex ,Text} from '@chakra-ui/react'
import React from 'react'
import {FaUserCircle} from "react-icons/fa"
import { css } from "@emotion/core"
const Signin = () => {
  return (
    <Box>
        <Flex gap={"7px"}>
       <FaUserCircle size={"35px"}/>
       <Text fontSize={"20px"} css={css`
     &:hover {
        color: blue;
      }
  `}>Signin</Text>
        </Flex>
    </Box>
  )
}

export default Signin
