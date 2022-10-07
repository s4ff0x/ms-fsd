import { IonInput, IonLabel } from "@ionic/react";
import { InputItemStyled } from "./styles";

type InputProps = {
  labelProps?: any; // TODO: remove any
  inputProps?: any; // TODO: remove any
  children?: string;
};

export const Input = ({ labelProps, inputProps, children }: InputProps) => {
  return (
    <InputItemStyled mode={"md"}>
      <IonLabel position={"floating"} {...labelProps} children={children} />
      <IonInput
        clearInput
        {...inputProps}
        placeholder={inputProps?.placeholder || children}
      />
    </InputItemStyled>
  );
};
