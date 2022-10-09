import { observer } from "mobx-react-lite";
import React from "react";
import {
  CategoryListStyled,
  categoryStore,
  EMPTY_CATEGORY_LIST_TITLE,
} from "entities/category";
import { getCategoryUpdateRouteDynamic } from "entities/router";
import { EMPTY_SET_LIST_TITLE } from "entities/set";
import { Layout, ScrollableSection, TitledBlock } from "shared/ui";

export const HomePage: React.FC = observer(() => {
  return (
    <Layout title={"memoshift"}>
      <TitledBlock title={"Hey, you"} subTitle={"Ready for studying?"} />
      <CategoryListStyled>
        {categoryStore.categories.length
          ? categoryStore.categories.map((category) => (
              <ScrollableSection
                title={category.name}
                emptyPlaceholder={EMPTY_SET_LIST_TITLE}
                link={{
                  text: "Edit",
                  to: getCategoryUpdateRouteDynamic(category.uid),
                }}
              >
                we
              </ScrollableSection>
            ))
          : EMPTY_CATEGORY_LIST_TITLE}
      </CategoryListStyled>
    </Layout>
  );
});
