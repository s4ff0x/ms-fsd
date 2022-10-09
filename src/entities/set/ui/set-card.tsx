import { TextStyled } from "shared/ui";
import { ISet } from "../model";
import { SetCardStyled } from "./set-card.styles";

type TSetCardProps = { set: ISet } & { onClick?: () => void };

export const SetCard = ({ set, onClick }: TSetCardProps) => {
  return (
    <SetCardStyled onClick={onClick}>
      <TextStyled size={"2"} boldness={"2"} ellipsis>
        {set.name}
      </TextStyled>
      <TextStyled size={"1"} boldness={"2"} brightness={"2"}>
        {set.terms.length} Terms
      </TextStyled>
    </SetCardStyled>
  );
};
