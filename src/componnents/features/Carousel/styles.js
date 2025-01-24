import styled from "styled-components";
import Carousel from "react-bootstrap/Carousel";

export const StyledImage = styled.img`
  display: flex;
  flex-direction: row;
  width: auto;
  height: auto;
`;
export const StyledCarousel = styled(Carousel)`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  overflow: hidden;
`;
