import { BsCheck } from "react-icons/bs";
import { VscChevronRight } from "react-icons/vsc";
import { TextStyled } from "shared/ui";
import { RadioStyled, SelectSetCardStyled } from "./select-set-card.styles";

export type TSelectSetCardProps = {
  selected?: boolean;
  onClick?: () => void;
  onClickLink?: () => void;
  name: string;
  termCount: number;
};
export const SelectSetCard = ({
  selected,
  onClick,
  onClickLink,
  name,
  termCount,
}: TSelectSetCardProps) => {
  return (
    <SelectSetCardStyled
      selected={selected}
      onClick={onClick}
      hasLinkHandler={Boolean(onClickLink)}
    >
      {selected !== undefined && (
        <RadioStyled>
          <BsCheck />
        </RadioStyled>
      )}
      <TextStyled size={"2"} boldness={"3"} ellipsis>
        {name}
      </TextStyled>
      <TextStyled size={"1"} brightness={"2"}>
        {termCount} cards
      </TextStyled>
      {selected !== undefined && (
        <VscChevronRight
          onClick={(e) => {
            e.stopPropagation();
            onClickLink && onClickLink();
          }}
        />
      )}
    </SelectSetCardStyled>
  );
};
