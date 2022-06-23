import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import styled from 'styled-components'
import Anouncement from '../component/Anouncement';
import Footer from '../component/Footer';
import Navbar from '../component/Navbar';
import NewsLetter from '../component/NewsLetter';
import Products from '../component/Products';
import { mobile } from "../responsive";

const Container = styled.div``;

const Title = styled.h1`
  margin-bottom: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;

const Option = styled.option``;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

export const ProductList = () => {

  const location = useLocation();
  const cat = location.pathname.split("/")[2].toLowerCase();
  const [filter, setFilter] = useState({});
  const [sort, setSort] = useState("newst");

  const handelFilter = (e) => {
      const value = e.target.value;
      setFilter({
        ...filter,
        [e.target.name]:value
      })
  }
  console.log(filter)
  return (
    <Container>
        <Navbar/>
        <Anouncement/>
        <Title>{cat}</Title>
        <FilterContainer>
          <Filter>
            <FilterText>Filter Products:</FilterText>
            <Select name="color" onChange={handelFilter}>
              <Option disabled>
                Color
              </Option>
              <Option defaultValue>White</Option>
              <Option>black</Option>
              <Option>red</Option>
              <Option>blue</Option>
              <Option>yellow</Option>
              <Option>green</Option>
            </Select>
            <Select name="size" onChange={handelFilter}>
              <Option disabled>
                Size
              </Option>
              <Option defaultValue>XS</Option>
              <Option>S</Option>
              <Option>M</Option>
              <Option>L</Option>
              <Option>XL</Option>
            </Select>
          </Filter>
          <Filter>
            <FilterText>Sort Products:</FilterText>
            <Select onChange={(e)=>setSort(e.target.value)}>
              <Option value="Newest">Newest</Option>
              <Option value="Price (asc)">Price (asc)</Option>
              <Option value="Price (desc)">Price (desc)</Option>
            </Select>
          </Filter>
        </FilterContainer>
        <Products cat={cat} filter={filter} sort={sort}/>
        <NewsLetter/>
        <Footer/>
    </Container>
  )
}
