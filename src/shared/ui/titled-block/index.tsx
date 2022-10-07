import { ReactNode } from "react";
import { TextStyled } from "shared/ui/text";
import { TitledBlockStyled } from "./styles";

export const TitledBlock = ({
  title,
  subTitle,
  children,
}: {
  title: string;
  subTitle: string;
  children: ReactNode;
}) => {
  return (
    <TitledBlockStyled>
      <TextStyled size={"5"} boldness={"3"}>
        {title}
      </TextStyled>
      <TextStyled size={"5"} boldness={"1"} brightness={"1"}>
        {subTitle}
      </TextStyled>
      {children}
    </TitledBlockStyled>
  );
};
