import { Controller, useForm } from "react-hook-form";
import styled from "styled-components";
import { useUpdateCategory } from "features/category/update-category";
import { ICategory } from "entities/category";
import { ButtonStyled, Input } from "shared/ui";
import { defaultValues } from "./config";

export const FormStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  > ${ButtonStyled} {
    width: auto;
    margin-right: auto;
  }
`;

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
