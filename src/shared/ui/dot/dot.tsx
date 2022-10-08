import { DotStyled } from "./dot.styles";

export type DotProps = {
  color: string;
};
export const Dot = ({ color }: DotProps) => {
  return <DotStyled color={color} />;
};
