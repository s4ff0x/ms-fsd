import { IonContent, IonToolbar } from "@ionic/react";
import styled from "styled-components";

export const LayoutContentStyled = styled(IonContent)`
  --background: var(--gradient-1);
  --padding-top: 2rem;
  --padding-bottom: 1.2rem;
  --padding-start: 1.2rem;
  --padding-end: 1.2rem;
  position: relative;
`;

export const LayoutToolbarStyled = styled(IonToolbar)`
  --background: var(--bgToolbar);
  ion-back-button {
    --color: var(--white100);
    --icon-font-size: 1.4rem;
    --icon-margin-start: 0.5rem;
    --icon-margin-end: 0.25rem;
  }
  ion-button {
    --color: var(--white100);
    --icon-font-size: 1.4rem;
  }
  ion-buttons[slot="primary"] {
    svg {
      font-size: 1.4rem;
    }
  }
`;
