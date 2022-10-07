// TODO: remove important and make dependent on prop
import { IonItem } from "@ionic/react";
import styled from "styled-components";

export const InputItemStyled = styled(IonItem)`
  --background: none;
  --highlight-color-focused: white;
  --border-color: white;
  ion-label {
    --color: var(--white60) !important;
  }
  ion-input {
    --color: white;
    --placeholder-color: white;
  }
`;
