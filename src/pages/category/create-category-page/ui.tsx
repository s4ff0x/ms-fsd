import React from "react";
import { CreateCategory } from "features/category/create-category";
import { Layout } from "shared/ui";

export const CreateCategoryPage = () => {
  return (
    <Layout title={"Create Category"} withBackButton>
      <CreateCategory />
    </Layout>
  );
};
