import React,{useState,useEffect} from 'react'
import { Image,Flex,Grid} from '@chakra-ui/react'
import { Link } from 'react-router-dom';
const Mens = () => {
  const[product,setProduct]=useState([]);

useEffect(()=>
{
  const FetchProducts=async()=>
  {
  let data=await fetch("http://localhost:3004/mens");
  let d=await data.json();
  setProduct(d);
  console.log(product);
  }
  FetchProducts();
},[])

  return (
    <div>
      <Grid templateColumns="repeat(6,1fr)" >
      {product.map((p)=>
      (
        <div key={p.id} gen="mens">
       <Flex direction="column" padding="10px"><Image src={`${p.image}`} height="200px" width="100%" /><Flex direction="column" marginTop="20px" marginLeft="-30px"><div>{p.name}</div><div>₹{p.price}</div><Link to={`/mens/${p.id}`}>More Details</Link></Flex></Flex>
       </div>
      ))}
      </Grid>
    </div>
  )
}

export default Mens