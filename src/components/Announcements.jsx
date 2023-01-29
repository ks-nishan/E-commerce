import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: firebrick;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcements = () => {
  return <Container>December sale!!! Discounts upto 45%</Container>;
};

export default Announcements;
