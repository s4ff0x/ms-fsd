import { IonInput } from "@ionic/react";
import { getTermColor, ITermCardProps } from "entities/set/index";
import { Dot } from "shared/ui";
import { TermCardHeadingStyled, TermCardStyled } from "./term-card.styles";

export const TermCard = ({
  term,
  definition,
  confidence,
  isInitial,
}: ITermCardProps) => {
  return (
    <TermCardStyled>
      <TermCardHeadingStyled>
        <Dot color={getTermColor(confidence, isInitial)} />
        <IonInput placeholder="Term" value={term} />
      </TermCardHeadingStyled>

      <IonInput placeholder="Definition" value={definition} />
    </TermCardStyled>
  );
};
