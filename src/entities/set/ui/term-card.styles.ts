import styled from "styled-components";
import { DotStyled, TextStyled } from "shared/ui";

export const TermCardStyled = styled.div`
  border-radius: var(--borderRadius);
  background: var(--dark);
  padding: 0.6rem 1rem;
  position: relative;
  ion-icon {
    position: absolute;
    top: 0.6rem;
    right: 0.6rem;
    font-size: 1.7rem;
    z-index: 1;
    color: var(--white30);
  }
  ion-input {
    &:first-of-type {
      width: 90%;
    }
    font-size: 0.9rem;
    --padding-top: 0.2rem;
    --padding-bottom: 0.2rem;
  }
  ${TextStyled} {
    padding-top: 0.2rem;
    padding-bottom: 0.2rem;
  }
`;

export const TermCardHeadingStyled = styled.div`
  display: flex;
  align-items: center;
  ${DotStyled} {
    margin-right: 0.7rem;
  }
  ion-input {
    margin-right: 1.5rem;
  }
`;
