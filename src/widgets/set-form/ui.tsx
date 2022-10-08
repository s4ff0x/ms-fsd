import { Controller, useForm } from "react-hook-form";
import styled from "styled-components";
import { TermEditor } from "features/set/term-editor";
import { useUpdateSet } from "features/set/update-set";
import { ISet, ITerm } from "entities/set";
import { ButtonStyled, Input } from "shared/ui";
import { defaultValues } from "./config";

export const UpdateSetFormStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  > ${ButtonStyled} {
    width: auto;
    margin-right: auto;
  }
`;

export const SetForm = ({ set }: { set?: ISet }) => {
  const isUpdate = !!set;
  const { handleSubmit, control } = useForm({
    defaultValues: !isUpdate
      ? defaultValues
      : { name: set.name, terms: set.terms },
  });

  const { createSet, updateSet, deleteSet } = useUpdateSet();

  const onSubmit = handleSubmit((data: any) => {
    if (isUpdate) return updateSet(data, set.uid);
    return createSet(data);
  });

  return (
    <UpdateSetFormStyled>
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

      <Controller
        name="terms"
        control={control}
        render={({ field }) => (
          <TermEditor
            terms={field.value}
            setTerms={(terms: ITerm[]) => field.onChange(terms)}
          />
        )}
      />
      <ButtonStyled onClick={onSubmit}>
        {isUpdate ? "Update set" : "Create set"}
      </ButtonStyled>
      {isUpdate && (
        <ButtonStyled onClick={() => deleteSet(set.uid)} red>
          Delete set
        </ButtonStyled>
      )}
    </UpdateSetFormStyled>
  );
};
