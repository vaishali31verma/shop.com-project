import { Box, Button, Flex, Image, Link, Select, Text } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import { AppContext } from '../context/contextapi'
import {useNavigate} from "react-router-dom"
import { StarIcon } from '@chakra-ui/icons'
import { Checkbox, CheckboxGroup,Stack } from '@chakra-ui/react'
const Alldata = () => {
  const {cosmeticsdata,handlesort,page,handlepage,handlesortbyrating} = useContext(AppContext)
  let navigate = useNavigate();
  const handledeteilofcos =(id)=>{
    navigate(`/${id}`)
  }
  const starArray = [...Array(5).keys()].map(i => i + 1)
  const pageArray = [...Array(4).keys()].map(i => i + 1)
  return (
   <Box>
  
    <Flex h="100px" border={"2px solid Black"} >
     <Box>
        <Text>Sort By Price</Text>
     <Select w="200px" onChange={(e)=>handlesort(e.target.value,"price")}>
        <option disabled="true" >Sort by price</option>
        <option value={"asc"} >low to high</option>
        <option value={"desc"}>high to low</option>
     </Select>
     </Box>
      <Box w="500px"  marginTop={"40px"}>
        {pageArray.map((e)=>(
            <Button disabled={page===e} onClick={()=>handlepage(e)}>{e}</Button>
        ))}
      </Box>
      <Box>
        <Text>sort By Rating</Text>
      <Select w="200px" onChange={(e)=>handlesortbyrating(e.target.value,"ratingValue")}>
       
        <option disabled="true" >Sort by Rating</option>
        <option value={"asc"} >low to high</option>
        <option value={"desc"}>high to low</option>
     </Select>
     </Box>
  

    </Flex>
    <Box w={"100%"}  display={"grid"} gridTemplateColumns="repeat(4,1fr)" gridTemplateRows={"auto"} margin="auto" gap="10px" marginTop="200px">
    
    {cosmeticsdata.map((item)=>(
        <Flex >
        <Box >
         
        <Box boxShadow='2xl' w="300px" h={"440px"} onClick={()=>handledeteilofcos(item.id)}>
            <Flex flexDirection={"column"} alignItems="center">
            <Image src={item.image[0]} w={"270px"} h="270px" />
            <Flex flexDirection={"column"} alignItems={"start"} marginLeft="12px">
            <Text fontSize={"17px"}>{item.name}</Text>
            <Text>$ {item.price}</Text>
            <Flex justifyContent={"center"}>
            {starArray.map((i)=>(
                <StarIcon color={i<=Math.abs(item.ratingValue)?"orange" : "lightgrey"}/>
            ))}
            </Flex>
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
       </Flex>
    ))}
 
    </Box>
    </Box>
  )
}

export default Alldata
