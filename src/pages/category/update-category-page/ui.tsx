import React from "react";
import { useParams } from "react-router";
import { UpdateCategory } from "features/category/update-category";
import { categoryStore } from "entities/category";
import { Layout } from "shared/ui";

export const UpdateCategoryPage = () => {
  const params = useParams<{ categoryId: string }>();
  const category = categoryStore.categories.find(
    (category) => category.uid === params.categoryId
  );

  if (!category) return null;
  return (
    <Layout title={"Update Category"} withBackButton>
      <UpdateCategory category={category} />
    </Layout>
  );
};
