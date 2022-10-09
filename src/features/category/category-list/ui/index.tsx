import { observer } from "mobx-react-lite";
import React from "react";
import { categoryStore } from "entities/category";
import { getCategoryUpdateRoute } from "entities/router";
import { EMPTY_SET_LIST_TITLE } from "entities/set";
import { ScrollableSection } from "shared/ui";
import { CategoryListStyled } from "./styles";

export const CategoryList = observer(() => {
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
          we
        </ScrollableSection>
      ))}
    </CategoryListStyled>
  );
});
