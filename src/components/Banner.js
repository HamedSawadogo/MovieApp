import React from "react";
import styled from "styled-components";

const BannerStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Banner = ({ children }) => {
  return <BannerStyled>{children}</BannerStyled>;
};

export default Banner;
