import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {popularProducts} from "../data"
import Product from './Product';
import axios from 'axios';


const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

function Products({cat,filter,sort}) {
  
  const [products, setProducts] = useState([]);
  const [filteredProduct, setFilteredProduct] = useState([]);

  useEffect(()=>{
    const getProducts = async() =>{
        try {
          const res = await axios.get(cat ? `http://localhost:5000/api/products?category=${cat}` : "http://localhost:5000/api/products" );
          setProducts(res.data)
          // console.log(res)

        } catch (error) {
          console.log("get product error"+error)
        }
    }
    getProducts()
  },[cat]);
  // console.log(filteredProduct)

  useEffect(()=>{

    cat && 
      setFilteredProduct(
        products.filter((item)=>
          Object.entries(filter).every(([key, value])=>
            item[key].includes(value)
          )
        )
      )

  },[cat,filter,products])


  useEffect(()=>{
    if(sort === "newest"){
      setFilteredProduct((prev)=>
        [...prev].sort((a,b)=> a.createdAt - b.createdAt)
      );
    }else if(sort === "asc"){
      setFilteredProduct((prev)=>
        [...prev].sort((a,b)=> a.price - b.price)
      );
    }else{
      setFilteredProduct((prev)=>
        [...prev].sort((a,b)=> b.price - a.price)
      );
    }
  },[sort])

  return (
    <Container>
        {cat ? filteredProduct.map(item=>(
            <Product item={item} key={item._id} />
        )) : products.slice(0,8).map(item=>(
          <Product item={item} key={item._id} />
      ))}
    </Container>
  )
}

export default Products