import { IonButton } from "@ionic/react";
import { ReactNode } from "react";
import styled from "styled-components";

export type ButtonProps = {
  onClick?: (data: any) => void;
  children?: ReactNode;
  outline?: boolean;
  type?: any;
  disabled?: boolean;
};

export const ButtonStyled = styled(IonButton)<ButtonProps>`
  --padding-start: 2rem;
  --padding-end: 2rem;
  --color: var(--dark);
  --background: var(--buttonGradient);
  --background-activated-opacity: 0;
  --border-radius: var(--borderRadiusButton);
  flex-shrink: 0;

  height: 3.3rem;
  font-size: 1rem;
  display: inline-flex;
  font-weight: 700;
  align-items: center;
  justify-content: center;
  letter-spacing: normal;
  text-transform: none;

  &:active {
    opacity: 0.7;
  }
`;
