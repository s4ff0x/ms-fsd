import styled from "styled-components";

export const DotStyled = styled.div<{ color: string }>`
  width: 0.438rem;
  height: 0.438rem;
  border-radius: 50%;
  background-color: ${({ color }) => color};
`;
