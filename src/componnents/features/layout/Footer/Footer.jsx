import { WhiteLogo } from "../../../../assets/index";
import {
  AnyTitle,
  Container,
  FooterContainer,
  FooterText,
  StyledFooter,
  StyledLine,
  TituloES,
  TituloGrad,
  UFMG,
} from "./styles";

export default function Footer() {
  return (
    <>
      <StyledFooter>
        <Container>
          <FooterContainer>
            <TituloGrad>Graduação em</TituloGrad>
            <TituloES>Engenharia de Sistemas</TituloES>
            <FooterText>
              Av. Antônio Carlos, 6627 - Pampulha Belo Horizonte/MG - Brasil CEP
              31270-901
            </FooterText>
            <StyledLine />
            <UFMG>
              <img src={WhiteLogo} alt="Logo UFMG" />
            </UFMG>
          </FooterContainer>
          <FooterContainer>
            <AnyTitle>Colegiado</AnyTitle>
            <FooterText>(31) 3409-3556</FooterText>
            <FooterText>eng-colgradsis@ufmg.br</FooterText>
            <FooterText>Escola de Engenharia - Bloco 3</FooterText>
            <FooterText>Sala 3035</FooterText>
          </FooterContainer>
          <FooterContainer>
            <AnyTitle>Grêmio</AnyTitle>
            <FooterText>contato@geesufmg.com</FooterText>
            <FooterText>Escola de Engenharia - Bloco 3</FooterText>
            <FooterText>Hall dos Grêmios - Sala T028</FooterText>
          </FooterContainer>
        </Container>
      </StyledFooter>
    </>
  );
}
