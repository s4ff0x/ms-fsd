import { observer } from "mobx-react-lite";
import React from "react";
import { useHistory } from "react-router";
import { categoryStore } from "entities/category";
import { getCategoryUpdateRoute, getSetUpdateRoute } from "entities/router";
import { EMPTY_SET_LIST_TITLE, SetCard, setStore } from "entities/set";
import { ScrollableSection } from "shared/ui";
import { CategoryListStyled } from "./styles";

export const CategoryList = observer(() => {
  const history = useHistory();
  return (
    <CategoryListStyled>
      {categoryStore.categories.map((category) => (
        <ScrollableSection
          title={category.name}
          emptyPlaceholder={EMPTY_SET_LIST_TITLE}
          link={{
            text: "Edit",
            to: getCategoryUpdateRoute(category.uid),
          }}
        >
          {setStore.sets.map((set) => (
            <SetCard
              set={set}
              onClick={() => history.push(getSetUpdateRoute(set.uid))}
            />
          ))}
        </ScrollableSection>
      ))}
    </CategoryListStyled>
  );
});
