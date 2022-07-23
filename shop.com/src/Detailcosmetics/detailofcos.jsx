import React, { useContext, useEffect } from 'react'
import { useParams } from "react-router-dom"
import axios from "axios"
import { Box, Button, Flex, Image, Link, Text } from '@chakra-ui/react'
import { useState } from 'react'
// import SimpleImageSlider from "react-simple-image-slider"
import { StarIcon } from '@chakra-ui/icons'
import ImageGallery from 'react-image-gallery'
import {BsPlusLg} from "react-icons/bs"

import "react-image-gallery/styles/css/image-gallery.css"
import { AppContext } from '../context/contextapi'
import { usergetapi } from '../Apitest'
const Detailofcos = () => {
    const [cosdata, setcosdata] = useState([])
    const {isAuth,userid} = useContext(AppContext)
    const [image, setimage] = useState([])
    const [qty,setqty] = useState(1)
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
            x.push({original:e,thumbnail:e})
        })
    }
    const handlecart =async(cosdata)=>{
        if(userid===""){
            alert(`please login first`)
        }
        else{
            let updatedCart = []
            let prevdata =await axios.get(`https://myownapitodo.herokuapp.com/User/${userid}`)
            let prevcart= prevdata.data.cart
            
                     
                        
                      if(prevcart.length > 0){
                        prevcart.map((cartItem)=>{
                           if(cosdata.id!==cartItem.id){
                               updatedCart.push(cartItem)
                           }
                           
                      })   
                      }
                    
           //    })
           //    console.log("updatedcart before"+updatedCart)
              cosdata.qty=qty;
               updatedCart.push(cosdata)
               // console.log("updatedcart after adding cosdata"+updatedCart)
                           axios({
                               url:`https://myownapitodo.herokuapp.com/User/${userid}`,
                               method:"PATCH",
                               data: {cart: [...updatedCart] }
                           })
                       alert(`product added successfully`)            
        }
     
      
    }
    
  
    
    




    const starArray = [...Array(5).keys()].map(i => i + 1)
    

    return (
        <Box marginTop={"30px"} justifyContent={"space-between"} >
            <Flex >
            {
                <Box marginLeft="40px"  w="500px">
                        <ImageGallery items={x} originalWidth="300px" originalHeight={'200px'} />
                </Box>
            }
            <Flex flexDirection={"column"} marginLeft={"20px"}  alignContent={"center"} >
            <Text fontSize={"25px"}  fontWeight={"600"}>{cosdata.name}</Text>
            <Text color="teal" fontSize={"40px"}> ₹ {cosdata.price}</Text>
            <Flex justifyContent={"center"}>
            {starArray.map((i)=>(
                <StarIcon color={i<=Math.abs(cosdata.ratingValue)?"orange" : "lightgrey"}/>
            ))}
            </Flex>
            <Text fontSize={"30px"}>Reviews count :{cosdata.reviewCount}</Text>
            <Text fontSize={"30px"} fontFamily={"monospace"}>{cosdata.category}</Text>
            
            <Flex  flexDirection={"column"} alignItems={"center"} h="600px" justifyContent={"center"}>
              
          
                <Image src="https://www.linkpicture.com/q/Screenshot-96_1.png  "/>
            <Flex   w="130px" gap="15px" >
           
            <Button border={"1px solid black"} _hover={{ bg: "#202340 !important", color: " white" }}
        _focus={{ boxShadow: "outline" }} color="black" bg="white" onClick={()=>setqty(qty+1)}>+</Button>

            <Text fontSize={"30px"}>{qty}</Text>
           
            <Button border={"1px solid black"} _hover={{ bg: "#202340 !important", color: " white" }}
        _focus={{ boxShadow: "outline" }} color="black" bg="white" disabled={qty===1} onClick={()=>setqty(qty-1)}>-</Button>
             
             </Flex>
           <Button _hover={{ bg: "#202340 !important", color: " white" }}
        _focus={{ boxShadow: "outline" }} borderRadius="30px" marginTop={"20px"} color="black" bg="white" border={"2px solid black"} w="200px" onClick={()=>handlecart(cosdata)}>Buy Now</Button>
         <Image  src="https://www.linkpicture.com/q/Screenshot-99_1.png"/>
        
            </Flex>
          </Flex>
          </Flex>
          <Image  src="https://www.linkpicture.com/q/Screenshot-100_1.png"/>
          
        </Box>
          
    )

}

export default Detailofcos
// https://myownapitodo.herokuapp.com/Cosmetics/${params.id_pro}



 //    res.data.map((k)=>{
          
        //        k.cart.map((e)=>{
               
            //     if(e.id!==cosdata.id){
                    
            //         axios({
            //             url:`https://myownapitodo.herokuapp.com/User/${userid}`,
            //             method:"PATCH",
            //             data: {cart: [{...e,...cosdata,qty:qty}] }
            //         })
            //         console.log(e)
            //     }
            //     else{
            //         axios({
            //             url:`https://myownapitodo.herokuapp.com/User/${userid}`,
            //             method:"PATCH",
            //            data: {cart: [{...cosdata,qty:qty}] }
            //         })
                  
            //     }
            //   })
        //     })
           
          
        // })
       