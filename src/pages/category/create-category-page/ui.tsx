import React from "react";
import { CategoryForm } from "widgets/category-form";
import { Layout } from "shared/ui";

export const CreateCategoryPage = () => {
  return (
    <Layout title={"Create Category"} withBackButton>
      <CategoryForm />
    </Layout>
  );
};
