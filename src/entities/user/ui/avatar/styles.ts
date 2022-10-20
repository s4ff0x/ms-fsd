import styled from "styled-components";

export const AvatarStyled = styled.div`
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  background-color: var(--white10);
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    height: 3rem;
    width: 3rem;
    object-fit: contain;
    border-radius: 1.1rem;
  }
`;
