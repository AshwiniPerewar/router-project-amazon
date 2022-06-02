import React from 'react'
import { Link } from "react-router-dom"
import { Flex } from '@chakra-ui/react'
const Navbar = () => {
  return (
    <div>
         <Flex justify="flex-start" bgColor="black" height="40px" color="white" padding="10px" gap={30}>
        <Link to="/home">Home</Link>
        <Link to="/mens">Mens</Link>
        <Link to="/womens">Womens</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/contactus">Conatct Us</Link>
        <Link to="/about">About Us</Link>
        <span className="material-icons" style={{color:"white"}}> shopping_cart</span>
        </Flex>
    </div>
  )
}

export default Navbar