import { StyledCarousel, StyledImage } from "./styles";
import {
  CarouselSlide1,
  CarouselSlide2,
  CarouselSlide3,
} from "../../../assets/index";

export default function HomeCarousel() {
  return (
    <>
      <StyledCarousel controls={false} indicators={false} slide={true}>
        <StyledCarousel.Item interval={1000} slide={true}>
          <StyledImage src={CarouselSlide1} alt="First slide" />
        </StyledCarousel.Item>
        <StyledCarousel.Item interval={500} slide={true}>
          <StyledImage src={CarouselSlide2} alt="Second slide" />{" "}
        </StyledCarousel.Item>
        <StyledCarousel.Item slide={true} interval={1000}>
          <StyledImage src={CarouselSlide3} alt="Third slide" />{" "}
        </StyledCarousel.Item>
      </StyledCarousel>
    </>
  );
}
