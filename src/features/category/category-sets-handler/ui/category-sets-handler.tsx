import { observer } from "mobx-react-lite";
import React from "react";
import { useHistory } from "react-router-dom";
import { getSetUpdateRoute } from "entities/router";
import { SelectSetCard, setStore } from "entities/set";
import { TextStyled } from "shared/ui";
import { CategorySetsHandlerStyled } from "./styles";
export type TermHandlerProps = {
  data: string[];
  setData: (data: string[]) => void;
};

export const CategorySetsHandler = observer(
  ({ data, setData }: TermHandlerProps) => {
    const history = useHistory();
    if (!data) return null;
    const checkSelected = (uid: string) =>
      !!data.find((setId: string) => setId === uid);
    const { sets } = setStore;
    const selectedCount = sets.filter((set) => checkSelected(set.uid)).length;

    return (
      <CategorySetsHandlerStyled nothingSelected={selectedCount === 0}>
        <TextStyled size={"4"} boldness={"4"}>
          Selected sets <span>{selectedCount}</span> / {sets.length}
        </TextStyled>
        {sets.map((set) => (
          <SelectSetCard
            key={set.uid}
            termCount={set.terms.length}
            name={set.name}
            selected={checkSelected(set.uid)}
            onClick={() => {
              if (data.find((uid) => uid === set.uid))
                setData(data.filter((uid) => uid !== set.uid));
              else setData([...data, set.uid!]);
            }}
            onClickLink={() => history.push(getSetUpdateRoute(set.uid))}
          />
        ))}
      </CategorySetsHandlerStyled>
    );
  }
);
