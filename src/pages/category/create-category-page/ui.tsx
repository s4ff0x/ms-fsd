import React from "react";
import { Layout } from "shared/ui/layout/layout";
import { CreateCategory } from "features/category/create-category/ui";

export const CreateCategoryPage = () => {
  return (
    <Layout title={"Create Set"} withBackButton>
      <CreateCategory />
    </Layout>
  );
};
