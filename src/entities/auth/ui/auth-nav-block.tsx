import React from "react";
import { LinkStyled, TextStyled } from "shared/ui";
import { AuthNavBlockStyled } from "./styles";

export const AuthNavBlock = ({
  text,
  linkText,
  linkRoute,
}: {
  text: string;
  linkText: string;
  linkRoute: string;
}) => {
  return (
    <AuthNavBlockStyled>
      <TextStyled brightness={"3"}>{text}</TextStyled>
      <LinkStyled to={linkRoute}>
        <TextStyled boldness={"3"}>{linkText}</TextStyled>
      </LinkStyled>
    </AuthNavBlockStyled>
  );
};
