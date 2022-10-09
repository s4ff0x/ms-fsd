import styled, { css } from "styled-components";
import { TextStyled } from "shared/ui";
import { TSelectSetCardProps } from "./select-set-card";

export const RadioStyled = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  border: 2px solid var(--white60);
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  flex-shrink: 0;
  svg {
    display: none;
  }
`;
export const SelectSetCardStyled = styled.div<
  Omit<TSelectSetCardProps, "name" | "termCount"> & { hasLinkHandler: boolean }
>`
  padding: 1.3rem 1rem;
  border-radius: var(--borderRadius);
  background-color: var(--white3);
  display: flex;
  align-items: center;
  justify-content: space-between;
  > svg {
    font-size: 1.2rem;
    flex-shrink: 0;
  }

  ${RadioStyled} {
    margin-right: 1rem;
  }

  ${TextStyled} {
    ${({ hasLinkHandler }) =>
      hasLinkHandler !== undefined &&
      css`
        margin-right: 1rem;
      `}
    flex-shrink: 0;
    margin-left: 1rem;
  }
  ${({ selected }) =>
    selected &&
    css`
      > svg {
        color: var(--accent);
      }
      ${RadioStyled} {
        background-color: var(--accent);
        border-color: var(--accent);
        color: var(--dark);
        svg {
          font-size: 1.1rem;
          display: block;
          color: var(--dark);
        }
      }
    `}
`;
