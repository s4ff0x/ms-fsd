import styled from "styled-components";
import { ButtonStyled, TextStyled } from "shared";

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

export const AuthNavBlockStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const AuthBottomBlockStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  ${ButtonStyled} {
    min-width: 200px;
    margin: 0 auto;
  }
`;
