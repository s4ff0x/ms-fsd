import styled, { css } from "styled-components";
import { SelectSetCardStyled } from "entities/set";
import { TextStyled } from "shared/ui";

export const CategorySetsHandlerStyled = styled.div<{
  nothingSelected: boolean;
}>`
  ${SelectSetCardStyled} {
    &:not(:last-child) {
      margin-bottom: 0.8rem;
    }
  }
  > ${TextStyled} {
    margin-bottom: 1.5rem;
    > span {
      color: var(--accent);
      ${({ nothingSelected }) =>
        nothingSelected &&
        css`
          color: var(--white30);
        `}
    }
  }
`;
