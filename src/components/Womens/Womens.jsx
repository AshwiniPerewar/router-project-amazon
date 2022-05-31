import React,{useState,useEffect} from 'react'
import { Image,Flex,Grid} from '@chakra-ui/react'
import { Link } from 'react-router-dom';
const Womens = () => {
  const[product,setProduct]=useState([]);

useEffect(()=>
{
  const FetchProducts=async()=>
  {
  let data=await fetch("http://localhost:3004/womens");
  let d=await data.json();
  setProduct(d);
  console.log(product);
  }
  FetchProducts();
},[])

  return (
    <div>
      <Grid templateColumns="repeat(4,1fr)">
      {product.map((p)=>
      (
        <div key={p.id}>
       <Flex direction="column" padding="10px"><Image src={`${p.image}`} height="200px" width="100px" marginLeft="100px"/><Flex direction="column" marginTop="20px"><div>{p.name}</div><div>₹{p.price}</div><Link to={`/Womens/${p.id}`}>More Details</Link></Flex></Flex>
       </div>
      ))}
      </Grid>
    </div>
  )
}

export default Womens