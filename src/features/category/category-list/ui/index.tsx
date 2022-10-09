import { observer } from "mobx-react-lite";
import React from "react";
import { useHistory } from "react-router";
import { categoryStore, NONAME_CATEGORY_TITLE } from "entities/category";
import { getCategoryUpdateRoute, getSetUpdateRoute } from "entities/router";
import { EMPTY_SET_LIST_TITLE, SetCard, setStore } from "entities/set";
import { ScrollableSection } from "shared/ui";
import { CategoryListStyled } from "./styles";

export const CategoryList = observer(() => {
  const history = useHistory();

  // TODO: in what layer this helper can be extracted ? (looks like categoryStore is a great
  //  place, but we can't import ISet in category entity)
  const populatedCategories = categoryStore.categories.map((category) => {
    return {
      ...category,
      sets: setStore.sets.filter((set) => category.setIds.includes(set.uid!)),
    };
  });

  return (
    <CategoryListStyled>
      <ScrollableSection
        title={"Your sets"}
        emptyPlaceholder={EMPTY_SET_LIST_TITLE}
      >
        {setStore.sets.map((set) => (
          <SetCard
            key={set.uid}
            set={set}
            onClick={() => history.push(getSetUpdateRoute(set.uid))}
          />
        ))}
      </ScrollableSection>
      {populatedCategories.map((category) => (
        <ScrollableSection
          key={category.uid}
          title={category.name || NONAME_CATEGORY_TITLE}
          emptyPlaceholder={EMPTY_SET_LIST_TITLE}
          link={{
            text: "Edit",
            to: getCategoryUpdateRoute(category.uid),
          }}
        >
          {category.sets.map((set) => (
            <SetCard
              key={set.uid}
              set={set}
              onClick={() => history.push(getSetUpdateRoute(set.uid))}
            />
          ))}
        </ScrollableSection>
      ))}
    </CategoryListStyled>
  );
});
