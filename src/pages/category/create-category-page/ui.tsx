import React from "react";
import { Layout } from "shared/ui";
import { CreateCategory } from "features/category/create-category";

export const CreateCategoryPage = () => {
  return (
    <Layout title={"Create Category"} withBackButton>
      <CreateCategory />
    </Layout>
  );
};
