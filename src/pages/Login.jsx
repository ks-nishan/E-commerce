import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://img4.goodfon.com/wallpaper/nbig/7/17/chasy-palto-ochki-devushka-cherno-beloe.jpg")
      center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 30px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  background-color: teal;
  color: white;
  cursor: pointer;
  padding: 15px 20px;
  margin: 10px 0px;
`;

const Link = styled.a`
  font-size: 14px;
  margin: 5px 10px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Sign In</Title>
        <Form>
          <Input placeholder="Email Address" />
          <Input placeholder="Password" />

          <Button>Login</Button>
          <Link>Forgot password?</Link>
          <Link>Create An Account?</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
