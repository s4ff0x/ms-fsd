import React, {ReactNode} from "react";
import {TextStyled} from "shared";
import { AuthFlexLayoutStyled } from "./styles";

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
