import styled from "styled-components";
import { ButtonStyled } from "shared/ui";

export const FormStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  > ${ButtonStyled} {
    width: auto;
    margin-right: auto;
  }
`;
