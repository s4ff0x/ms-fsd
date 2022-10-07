import React from "react";
import { TextStyled } from "shared/ui";
import { AuthNavBlockStyled } from "./styles";

export const AuthNavBlock = ({
  text,
  linkText,
  linkHandler,
}: {
  text: string;
  linkText: string;
  linkHandler: () => void;
}) => {
  return (
    <AuthNavBlockStyled>
      <TextStyled brightness={"3"}>{text}</TextStyled>
      <TextStyled boldness={"3"} onClick={linkHandler}>
        {linkText}
      </TextStyled>
    </AuthNavBlockStyled>
  );
};
