import React, { useEffect } from 'react'
import { useParams } from "react-router-dom"
import axios from "axios"
import { Box, Button, Flex, Image, Link, Text } from '@chakra-ui/react'
import { useState } from 'react'
import SimpleImageSlider from "react-simple-image-slider"
import { StarIcon } from '@chakra-ui/icons'
import {BsPlusLg} from "react-icons/bs"
const Detailofcos = () => {
    const [cosdata, setcosdata] = useState([])
    const [image, setimage] = useState([])
    const x = []
    const params = useParams()
    useEffect(() => {
        axios.get(`https://myownapitodo.herokuapp.com/Cosmetics/${params.id_pro}`).then((res) => {
            setcosdata(res.data)
            setimage(res.data.image)
        })
    })
    if (image.length > 0) {
        image.map((e) => {
            x.push(e)
        })
    }
    const starArray = [...Array(5).keys()].map(i => i + 1)
    

    return (
        <Box marginTop={"30px"} justifyContent={"space-between"} >
            <Flex >
            {
                <Box marginLeft="40px">
                    <SimpleImageSlider
                        width={500}
                        height={500}
                        images={x}
                        showBullets={true}
                        showNavs={true}
                        autoPlay={true}/>
                </Box>
            }
            <Flex flexDirection={"column"} marginLeft={"20px"} border="2px solid blue" >
            <Text fontSize={"30px"} fontFamily="fantasy" fontWeight={"30px"}>{cosdata.name}</Text>
            <Text color="teal" fontSize={"40px"}> ${cosdata.price}</Text>
            <Flex justifyContent={"center"}>
            {starArray.map((i)=>(
                <StarIcon color={i<cosdata.ratingValue?"orange" : "lightgrey"}/>
            ))}
            </Flex>
            <Text fontSize={"30px"}>Reviews count :{cosdata.reviewCount}</Text>
            <Text fontSize={"30px"} fontFamily={"monospace"}>{cosdata.category}</Text>
            <Flex marginLeft="50px" marginTop="40px" border={"1px solid black"} w="130px" gap="15px" alignItems={"center"}>
            <Button border={"1px solid black"}>+</Button>
            <Text fontSize={"30px"}>1</Text>
            <Button border={"1px solid black"} >-</Button>
           
           </Flex>
           <Button _hover={{ bg: "#202340 !important", color: " white" }}
        _focus={{ boxShadow: "outline" }} borderRadius="30px" marginTop={"20px"} color="red" w="200px">Buy Now</Button>
            </Flex>
            <Image src="https://i.im.ge/2022/07/21/Fd33XL.png"  w="300px" marginLeft={"50px"}/>
          </Flex>
         
          <Link fontSize={"20px"}>{cosdata.route}</Link>
          
        </Box>

    )

}

export default Detailofcos
// https://myownapitodo.herokuapp.com/Cosmetics/${params.id_pro}