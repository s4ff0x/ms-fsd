import { Controller, useForm } from "react-hook-form";
import { CategorySetsHandler } from "features/category/category-sets-handler";
import { useUpdateCategory } from "features/category/update-category";
import { ICategory } from "entities/category";
import { ButtonStyled, Input } from "shared/ui";
import { defaultValues } from "../config";
import { FormStyled } from "./styles";

export const CategoryForm = ({ category }: { category?: ICategory }) => {
  const isUpdate = !!category;
  const { handleSubmit, control } = useForm({
    defaultValues: !isUpdate
      ? defaultValues
      : { name: category.name, setIds: category.setIds },
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
              value: field.value,
              placeholder: "name",
              onIonChange: (e: CustomEvent) => field.onChange(e.detail.value),
            }}
          >
            Name
          </Input>
        )}
      />
      <Controller
        name="setIds"
        control={control}
        render={({ field }) => (
          <CategorySetsHandler
            data={field.value}
            setData={(setIds) => field.onChange(setIds)}
          />
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
