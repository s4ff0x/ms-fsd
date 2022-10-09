import { Controller, useForm } from "react-hook-form";
import { useUpdateCategory } from "features/category/update-category";
import { ICategory } from "entities/category";
import { ButtonStyled, Input } from "shared/ui";
import { defaultValues } from "./config";
import { FormStyled } from "./styles";

export const CategoryForm = ({ category }: { category?: ICategory }) => {
  const isUpdate = !!category;
  const { handleSubmit, control } = useForm({
    defaultValues: !isUpdate ? defaultValues : { name: category.name },
  });

  const { createCategory, updateCategory, deleteCategory } =
    useUpdateCategory();

  const onSubmit = handleSubmit((data: any) => {
    if (isUpdate) return updateCategory(data, category.uid);
    return createCategory(data);
  });

  return (
    <FormStyled>
      <Controller
        name="name"
        control={control}
        render={({ field }) => (
          <Input
            inputProps={{
              type: "text",
              placeholder: "name",
              onIonChange: (e: CustomEvent) => field.onChange(e.detail.value),
            }}
          >
            Name
          </Input>
        )}
      />

      <ButtonStyled onClick={onSubmit}>
        {isUpdate ? "Update category" : "Create category"}
      </ButtonStyled>
      {isUpdate && (
        <ButtonStyled onClick={() => deleteCategory(category.uid)} red>
          Delete category
        </ButtonStyled>
      )}
    </FormStyled>
  );
};
