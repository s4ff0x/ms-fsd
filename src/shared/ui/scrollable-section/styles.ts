import styled from "styled-components";
import { LinkStyled, TextStyled } from "shared/ui/text";

export const ContentStyled = styled.div`
  overflow: auto;
  display: flex;
  > * {
    margin-right: 0.7rem;
  }
`;
export const HeadingStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  > * {
    margin-right: 0.7rem;
  }
`;
export const ScrollableSectionStyled = styled.div`
  ${HeadingStyled} {
    margin-bottom: 1rem;
    ${LinkStyled} {
      color: var(--accent);
    }
  }
  > ${TextStyled} {
    margin-top: 1.5rem;
  }
`;
