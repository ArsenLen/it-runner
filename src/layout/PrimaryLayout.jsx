import React from "react";
import styled from "styled-components";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const MainWrapper = styled.main`
  width: calc(100% - 300px);
  background-color:white;
  box-shadow: 0 0 15px -15px #4b4b4c;
  margin: 16px 0 0 16px;
  border-radius: 14px;
  background: white;
  padding: 40px;
`;

const PrimaryLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Wrapper>
        <Sidebar />
        <MainWrapper>{children}</MainWrapper>
      </Wrapper>
    </>
  );
};

export default PrimaryLayout;
