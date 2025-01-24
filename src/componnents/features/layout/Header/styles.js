import styled from "styled-components";
import { Header } from "@primer/react";

export const StyledHeader = styled(Header)`
  background-color: #ffffff;
  padding: 0 10 0 10px;
  width: 100%;
  font-family: "Times New Roman", Times, serif;
`;
export const RedLogo = styled.div`
  height: 10%;
  align-items: center;
  width: 50px;
  display: flex;
  justify-content: baseline;
`;
export const Section = styled.div`
  display: flex;
  height: auto;
  width: 100%;
  padding-left: 100px;
  padding-right: 100px;
`;
export const SubSection = styled.div`
  display: table-column;
  height: auto;
  width: 100%;

  padding-bottom: 0px;
`;
export const StyledLine = styled.div`
  width: 2px;
  height: 45px;
  align-items: center;
  background-color: #000000;
  margin: 0 10px;
`;
export const Container = styled.div`
  color: black;
  font-size: 60px;

  width: 100%;
  align-items: center;
  scroll-behavior: smooth;
`;
export const TopText = styled.h1`
  font-family: "Times New Roman", Times, serif;
  font-size: 17px;
  line-height: 15px;
  margin: 0px;
  padding-bottom: 0px;

  color: #737c81;
`;
export const BottomText = styled.h1`
  font-size: 25px;
  font-family: "Times New Roman", Times, serif;
  margin: 0px;
  font-weight: bold;
  color: #24333a;
`;
export const Links = styled.div`
  align-items: center;
  justify-content: space-between;
  display: flex;
  gap: 30px;
  font-size: 20px;
`;
