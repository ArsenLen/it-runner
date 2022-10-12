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
