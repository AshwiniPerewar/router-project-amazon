import React,{useState,useEffect} from 'react'
import { Image,Flex} from '@chakra-ui/react'
// import { Link } from 'react-router-dom'
const Home = () => {
  const[product,setProduct]=useState([]);

  useEffect(()=>
  {
    const FetchData=async()=>
    {
      let data=await fetch("http://localhost:3004/mobiles");
      let d=await data.json();
      setProduct(d);
    }
    FetchData();
  },[])

  return (
    <div><Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/Meghana/iQOO/Neo/Today/Watch/Feature/Live/D45583892_iQOO_Neo_Series_DesktopTallHero_3000x1200._CB635956003_.jpg" width="100%" height="600px"/>
    <Flex direction="row" justify="space-around" marginTop="-240px" bg='white.400'>
   {product.map((p)=>(
     <div key={p.id} >
   <Image src={`${p.name}`}></Image>
   </div>
   ))}
   </Flex> 
 </div>
  )
}

export default Home