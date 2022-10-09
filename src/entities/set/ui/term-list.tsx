import { Children, ReactNode } from "react";
import { EMPTY_SET_TITLE } from "../config";
import { TermListStyled } from "./term-list.styles";

export const TermList = ({ children }: { children: ReactNode }) => {
  return (
    <TermListStyled>
      {Children.toArray(children).length ? children : EMPTY_SET_TITLE}
    </TermListStyled>
  );
};
