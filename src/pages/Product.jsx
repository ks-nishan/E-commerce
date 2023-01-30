import React from "react";
import styled from "styled-components";
import Announcements from "../components/Announcements";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";

import watch from "../images/watch3.png";

import DoDisturbOnOutlinedIcon from "@mui/icons-material/DoDisturbOnOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;
const ImageContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;

const Img = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
`;

const Title = styled.h1`
  font-weight: 300;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 500;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterBrand = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterBrandOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;

  &:hover {
    background-color: teal;
    font-weight: 6000;
    transition: all 0.5s ease;
  }
`;

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcements />
      <Wrapper>
        <ImageContainer>
          <Img src={watch} />
        </ImageContainer>
        <InfoContainer>
          <Title>Samsung Smart Watch</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
            repudiandae odit, voluptate quaerat suscipit praesentium doloribus
            dolorem eos? Error excepturi et odit pariatur ad temporibus
            aspernatur obcaecati laudantium voluptate possimus?
          </Desc>
          <Price>Rs.22 500</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="brown" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Brand</FilterTitle>
              <FilterBrand>
                <FilterBrandOption>Apple</FilterBrandOption>
                <FilterBrandOption>Samsung</FilterBrandOption>
                <FilterBrandOption>Casio</FilterBrandOption>
              </FilterBrand>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <DoDisturbOnOutlinedIcon />
              <Amount>1</Amount>
              <AddCircleOutlineOutlinedIcon />
            </AmountContainer>
            <Button>Add to cart</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
