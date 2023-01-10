import React from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeUser } from "../../store/authSlice";
function Navbar() {
  let navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  let user = useSelector((state) => state.auth);

  const handleClick = () => {
    if (location.pathname === "/dummy") {
      dispatch(removeUser(null));
      navigate("/");
    } else {
      if (user === null) navigate("/login");
      else navigate("/dummy");
    }
  };
  return (
    <Wrapper>
      <ImageWrapper>
        <img
          className="image"
          src="https://superblog.supercdn.cloud/site_cuid_ckucmy84h97811nplkx3qfbgx/images/logo-clapingo-1633352936111.png"
          alt="clapingo"
          height={37}
          onClick={() => navigate("/")}
        />
      </ImageWrapper>
      <FeaturesWrapper>
        <h3>Plans & Pricing</h3>
        <h3>Teach With us</h3>
        <h3>Affiliate Programs</h3>
        <h3>Kids</h3>
      </FeaturesWrapper>
      <ButtonWrapper>
        <Button
          onClick={handleClick}
          style={{
            height: 35,
            width: 100,
            borderRadius: 20,
            backgroundColor: "#19c0a6",
            color: "#ffffff",
          }}
        >
          <PermIdentityIcon style={{ height: 30 }} />
          <h3>{location.pathname === "/dummy" ? "logout" : "Login"}</h3>
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 100%;
  height: 90px;
  left: 0px;
  top: 0px;
  background: rgba(255, 255, 255, 0.85);
  box-shadow: 0px 2px 22px rgba(82, 164, 154, 0.08),
    inset 0px -1px 0px rgba(0, 0, 0, 0.06);
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: row;
`;
const ImageWrapper = styled.div`
  width: 30%;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  .image {
    cursor: pointer;
  }
`;
const FeaturesWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 40%;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  letter-spacing: -0.01em;
  color: #060606;
`;
const ButtonWrapper = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default Navbar;
