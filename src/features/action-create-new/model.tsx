import { useIonActionSheet } from "@ionic/react";
import { useHistory } from "react-router-dom";
import { CATEGORY_CREATE_ROUTE, SET_ROUTE_CREATE } from "entities/router";

export const useActionSheet = () => {
  const history = useHistory();
  const [present] = useIonActionSheet();

  return () =>
    present({
      cssClass: "action-sheet",
      buttons: [
        {
          text: "Set",
          handler: () => {
            history.push(`${SET_ROUTE_CREATE}`);
          },
        },
        {
          text: "Category",
          handler: () => {
            history.push(`${CATEGORY_CREATE_ROUTE}`);
          },
        },
        { text: "Cancel", role: "cancel" },
      ],
      header: "Add new",
    });
};
