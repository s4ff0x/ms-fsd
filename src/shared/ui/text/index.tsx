import { ReactNode } from "react";
import styled, { css } from "styled-components";
import { Level } from "../lib";

export type TextProps = {
  children?: ReactNode;
  size?: Level;
  brightness?: Level;
  boldness?: Level;
  ellipsis?: boolean;
  onClick?: () => void;
};

const sizeMap = {
  "1": "0.8rem",
  "2": "1.125rem",
  "3": "1.25rem",
  "4": "1.6rem",
  "5": "1.75rem",
};
const brightnessMap = {
  "1": "var(--white20)",
  "2": "var(--white30)",
  "3": "var(--white60)",
  "4": "var(--white80)",
  "5": "var(--white100)",
};
const boldnessMap = {
  "1": "400",
  "2": "500",
  "3": "600",
  "4": "700",
  "5": "900",
};

export const TextStyled = styled.div<TextProps>`
  ${({ size = "1" }) =>
    size &&
    css`
      font-size: ${sizeMap[size]};
    `}
  ${({ brightness = "5" }) =>
    brightness &&
    css`
      color: ${brightnessMap[brightness]};
    `}
  ${({ boldness = "1" }) =>
    boldness &&
    css`
      font-weight: ${boldnessMap[boldness]};
    `}
  ${({ ellipsis }) =>
    ellipsis &&
    css`
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    `}
`;
