import { IonIcon, IonInput } from "@ionic/react";
import { closeOutline } from "ionicons/icons";
import { getTermColor, ITermCardEditableProps } from "entities/set/index";
import { Dot } from "shared/ui";
import { TermCardHeadingStyled, TermCardStyled } from "./term-card.styles";

export const TermCardEditable = ({
  term,
  definition,
  confidence,
  isInitial,
  onChange = () => {},
  onDelete = () => {},
}: ITermCardEditableProps) => {
  return (
    <TermCardStyled>
      <IonIcon slot="icon-only" icon={closeOutline} onClick={onDelete} />
      <TermCardHeadingStyled>
        <Dot color={getTermColor(confidence, isInitial)} />
        <IonInput
          placeholder="Term"
          value={term}
          onIonChange={(e: CustomEvent) => onChange(e.detail.value, definition)}
        />
      </TermCardHeadingStyled>

      <IonInput
        placeholder="Definition"
        value={definition}
        onIonChange={(e: CustomEvent) => onChange(term, e.detail.value)}
      />
    </TermCardStyled>
  );
};
