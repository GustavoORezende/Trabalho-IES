import {
  BottomText,
  Container,
  RedLogo,
  Section,
  StyledHeader,
  StyledLine,
  SubSection,
  TopText,
  Links,
} from "./styles";
import { RedM } from "../../../../assets/index.js";

export default function Header() {
  return (
    <>
      <StyledHeader>
        {" "}
        <Container>
          <Section>
            <RedLogo>
              <img src={RedM} />
            </RedLogo>
            <StyledLine />
            <SubSection>
              <TopText>Graduação em </TopText>
              <BottomText> Engenharia de Sistemas</BottomText>
            </SubSection>{" "}
            <Links>
              <a href="#home">Home</a>
              <a href="#about">Sobre</a>
              <a href="#services">Serviços</a>
              <a href="#contact">Contato</a>
            </Links>
          </Section>
        </Container>
      </StyledHeader>
    </>
  );
}
