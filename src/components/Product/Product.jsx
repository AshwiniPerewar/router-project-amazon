import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom';
import { Image,Flex,Grid,Button} from '@chakra-ui/react'

const Product = () => {
    const[product,setProduct]=useState({});
    const {id,gen}=useParams();


useEffect(()=>
{
    if(id)
    {
        fetch(`http://localhost:3004/${gen}/${id}`)
        .then((r)=>r.json())
        .then((d)=>setProduct(d));
    }
},[id])

  return (
    <div>
        <Flex direction="column" marginTop={30}>
        <Image src={`${product.image}`} height="200px" width="200px" marginTop="30px" marginLeft="43%"/>
    Product ID:{id}
   <div>{product.name}  </div><div>  ${product.price}  </div>
   <div>{product.details}</div>
   </Flex><Button colorScheme='blue' variant='solid' width="200px" marginTop={10}>
    Add To Cart
  </Button></div>
  )
}

export default Product