import { IonInput } from "@ionic/react";
import { useState } from "react";
import { ICategory } from "entities/category";
import { ButtonStyled } from "shared";
import { useUpdateCategory } from "../model";

export const UpdateCategory = ({ category }: { category: ICategory }) => {
  const [name, setName] = useState(category.name);
  const { updateCategory, deleteCategory } = useUpdateCategory();
  return (
    <div>
      <IonInput
        value={name}
        type="text"
        placeholder={"name"}
        onIonChange={(e: CustomEvent) => setName(e.detail.value)}
      />
      <ButtonStyled
        onClick={() => updateCategory({ name, setIds: [] }, category.uid)}
      >
        Update category
      </ButtonStyled>
      <ButtonStyled onClick={() => deleteCategory(category.uid)}>
        Delete category
      </ButtonStyled>
    </div>
  );
};
