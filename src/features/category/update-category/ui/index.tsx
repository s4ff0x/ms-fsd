import { useState } from "react";
import { IonButton, IonInput } from "@ionic/react";
import { ICategory } from "entities/category";
import { useUpdateCategory } from "features/category/update-category/model";

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
      <IonButton
        onClick={() => updateCategory({ name, setIds: [] }, category.uid)}
      >
        Update category
      </IonButton>
      <IonButton onClick={() => deleteCategory(category.uid)}>
        Delete category
      </IonButton>
    </div>
  );
};
