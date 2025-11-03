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
import { useNavigate } from "react-router";




export default function Header() {

  const navigate = useNavigate();
  
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
              <nav  onClick = {() => navigate("/Home")}>Home</nav>
              <nav onClick = {() => navigate("/projects")}>Projetos</nav>
              <nav >Serviços</nav>
              <nav >Contato</nav>
            </Links>
          </Section>
        </Container>
      </StyledHeader>
    </>
  );
}
