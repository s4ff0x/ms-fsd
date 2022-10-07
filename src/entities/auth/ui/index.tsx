import React, { ReactNode } from "react";
import styled from "styled-components";
import { TextStyled } from "shared";

export const AuthFlexLayoutStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  position: relative;

  > ${TextStyled}:first-child {
    text-align: center;
  }
`;

export const AuthFlexLayout = ({ children }: { children: ReactNode }) => {
  return (
    <AuthFlexLayoutStyled>
      <TextStyled size={"3"} boldness={"4"}>
        memoshift
      </TextStyled>
      {children}
    </AuthFlexLayoutStyled>
  );
};
