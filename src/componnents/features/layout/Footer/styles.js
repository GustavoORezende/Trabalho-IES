import styled from "styled-components";
import { MDBFooter } from "mdb-react-ui-kit";

export const Container = styled.div`
  padding-top: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: flex-start;
  font-size: 60px;
`;
export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  width: 100%;
  align-items: flex-start;
  font-size: 60px;
`;
export const StyledLine = styled.div`
  width: 1px;
  height: 2px;
  align-items: center;
  background-color: #ffffff;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 20%;
  padding-left: 15%;
`;
export const StyledFooter = styled(MDBFooter)`
  background-color: #1a1a1a;
  width: 100%;
`;
export const TituloGrad = styled.div`
  padding-top: 1%;
  padding-left: 20%;

  font-family: Arial, Helvetica, sans-serif;
  font-weight: 3px;
  font-size: 15px;
  color: #f9f6f6;
`;
export const TituloES = styled.div`
  padding-left: 20%;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 3px;
  font-size: 20px;
  font-weight: bold;
  color: #ffffff;
`;
export const AnyTitle = styled.div`
  margin-bottom: 5px;
  padding-left: 20%;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 3px;
  font-size: 15px;
  font-weight: bold;
  color: #fffffe;
`;
export const FooterText = styled.div`
  padding-left: 20%;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 3px;
  font-size: 15px;
  color: #979d9c;
`;
export const UFMG = styled.div`
  margin-left: 20%;
  height: auto;
  width: 80px;
  display: flex;
  justify-content: center;
`;
