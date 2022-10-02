import React from "react";
import { Layout } from "shared/ui";
import { CreateSetForm } from "widgets/set/create-set-form";

export const CreateSetPage = () => {
  return (
    <Layout title={"Create Set"} withBackButton>
      <CreateSetForm />
    </Layout>
  );
};
