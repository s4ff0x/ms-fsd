import React from "react";
import { CategoryList } from "features/category/category-list";
import { Layout, TitledBlock } from "shared/ui";

export const HomePage: React.FC = () => {
  return (
    <Layout title={"memoshift"}>
      <TitledBlock title={"Hey, you"} subTitle={"Ready for studying?"} />
      <CategoryList />
    </Layout>
  );
};
