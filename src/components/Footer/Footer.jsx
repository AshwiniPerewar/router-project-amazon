import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Flex } from '@chakra-ui/react'
const Footer = () => {
  return (
    <div>
        <Flex gap={10}   marginTop="60px" marginLeft="40%">
       <TwitterIcon backgroundColor='white'/>
       <FacebookIcon/>
       <InstagramIcon/>
       <YouTubeIcon/>
       </Flex>
    </div>
  )

}

export default Footer