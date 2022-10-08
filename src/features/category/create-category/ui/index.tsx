import { IonInput } from "@ionic/react";
import { useState } from "react";
import { ButtonStyled } from "shared/ui";
import { useCreateCategory } from "../model";

export const CreateCategory = () => {
  const [name, setName] = useState("");

  const resetForm = () => {
    setName("");
  };

  const createCategory = useCreateCategory(resetForm);
  return (
    <div>
      <IonInput
        value={name}
        type="text"
        placeholder={"name"}
        onIonChange={(e: CustomEvent) => setName(e.detail.value)}
      />
      <ButtonStyled onClick={() => createCategory({ name, setIds: [] })}>
        Create category
      </ButtonStyled>
    </div>
  );
};
