import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import Badge from "@mui/material/Badge";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import './all.css';

const Container = styled.div`
  height: 70px;
  background-color: #91a2ca;
  ${mobile({ height: "50px" })};
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  background-color: white;
  align-items: center;
  border-radius: 20px;
  margin-left: 25px;
  padding: 5px;
`;

const Img_logo = styled.img`
  width: 50px;
  height: 50px;
  border-top-left-radius: 50% 50%;
  border-top-right-radius: 50% 50%;
  border-bottom-right-radius: 50% 50%;
  border-bottom-left-radius: 50% 50%;
`;

const Input = styled.input`
  border: none;
  border-radius: 20px;
  background-color: white;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  color: #313971;
  font-family: "Italiana", sans-serif;
  ${mobile({ fontSize: "24px" })};
`;

const Logo2 = styled.h1`
  color: #91a2ca;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 20px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <Container>
      <Wrapper>
        <Center>
          <Img_logo src="https://res.cloudinary.com/dvcnzsyt1/image/upload/v1704812882/Picsart_24-01-09_20-09-19-591-removebg-preview_jmqryl.png" />
          <Logo2>_</Logo2>
          <Link className="link" to="/">
            <Logo>AATHIRAI</Logo>
          </Link>
        </Center>
        <Left>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "#333a7e", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Right>
          <Link className="link" to="/register" ><MenuItem>REGISTER</MenuItem></Link>
          <Link className="link" to="/login"><MenuItem>SIGN IN</MenuItem></Link>
          
          <Link to="/cart">
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
