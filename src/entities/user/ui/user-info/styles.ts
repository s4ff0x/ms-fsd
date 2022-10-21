import styled from "styled-components";
import { AvatarStyled } from "../avatar";

export const UserInfoStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${AvatarStyled} {
    margin-bottom: 2rem;
  }
`;
