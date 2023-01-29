import React from "react";
import styled from "styled-components";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";

import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import LocalPostOfficeOutlinedIcon from "@mui/icons-material/LocalPostOfficeOutlined";

const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.h1`
  display: flex;
`;

const SocialIcon = styled.h1`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: ${(props) => props.bg === "facebook" && "#4267B2"};
  color: ${(props) => props.bg === "instagram" && "#fb3958"};
  color: ${(props) => props.bg === "twitter" && "#1DA1F2"};
  color: ${(props) => props.bg === "youtube" && "#FF0000"};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0px;
  padding: 0px;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0px;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Nisha's.</Logo>
        <Desc>
          There are many varites of watches are available.but the majority have
          suffered alternation in some form.
        </Desc>
        <SocialContainer>
          <SocialIcon bg="facebook">
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon bg="instagram">
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon bg="twitter">
            <TwitterIcon />
          </SocialIcon>
          <SocialIcon bg="youtube">
            <YouTubeIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Usefull Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Man watches</ListItem>
          <ListItem>HoWoman Wotchesme</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact Us.</Title>
        <ContactItem>
          <LocationOnOutlinedIcon style={{ marginRight: "10px" }} />
          No - 277, Main street, Passara
        </ContactItem>
        <ContactItem>
          <LocalPhoneOutlinedIcon style={{ marginRight: "10px" }} />
          0552288468 | 0771946228
        </ContactItem>
        <ContactItem>
          <LocalPostOfficeOutlinedIcon style={{ marginRight: "10px" }} />
          nisshascontact@gmail.com
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
