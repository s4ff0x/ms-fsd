import { IonButton } from "@ionic/react";
import { ReactNode } from "react";
import styled, { css } from "styled-components";

export type ButtonProps = {
  onClick?: (data: any) => void;
  children?: ReactNode;
  disabled?: boolean;
  outline?: boolean;
  type?: any; // TODO: remove any
  red?: boolean;
  square?: boolean;
  small?: boolean;
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

  ${({ outline }) =>
    outline &&
    css`
      color: white;
      --background: transparent;
      --border-width: 2px;
      --border-style: solid;
      --border-color: var(--white10);
    `}

  ${({ red, outline }) =>
    red &&
    css`
      --background: var(--red);
      ${outline &&
      css`
        --border-color: var(--red);
        color: var(--red);
        --background: transparent;
      `}
    `}
  ${({ square }) =>
    square &&
    css`
      --border-radius: var(--borderRadiusL);
    `}

  ${({ small }) =>
    small &&
    css`
      font-size: 14px;
      height: 32px;
      font-weight: 600;
      --padding-start: 1.25rem;
      --padding-end: 1.25rem;
    `}
`;
