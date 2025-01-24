/*
Esse carrossel não quer funcionar, por algum motivo. Depois dar um jeito de arrumar.
*/

import { StyledCarousel, StyledImage } from "./styles";
import {
  CarouselSlide1,
  // CarouselSlide2,
  //CarouselSlide3,
} from "../../../assets/index";

export default function HomeCarousel() {
  return (
    <>
      <StyledCarousel controls={false} indicators={false} slide={true}>
        <StyledCarousel.Item interval={1000} slide={true}>
          <StyledImage src={CarouselSlide1} alt="First slide" />
        </StyledCarousel.Item>
      </StyledCarousel>
    </>
  );
}
