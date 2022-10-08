import { Children, ReactNode } from "react";
import styled from "styled-components";
import { EMPTY_SET_TITLE } from "../config";

export const TermListStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const TermList = ({ children }: { children: ReactNode }) => {
  return (
    <TermListStyled>
      {Children.toArray(children).length ? children : EMPTY_SET_TITLE}
    </TermListStyled>
  );
};
