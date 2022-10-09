import { IonTabs } from "@ionic/react";
import styled from "styled-components";

export const TabsStyled = styled(IonTabs)`
  ion-tab-bar {
    border: none;
    background-color: black;
    ion-tab-button {
      background-color: black;
    }
    ion-icon {
      font-size: 1.3rem;
      color: white;
      opacity: 0.5;
    }
    ion-button {
      --background: none;
      --background-activated: black;
    }
    .tab-selected {
      ion-icon {
        color: white;
        opacity: 1;
      }
    }
  }
`;
