import React from "react";
import { CreateSetForm } from "widgets/set/create-set-form";
import { Layout } from "shared/ui";

export const CreateSetPage = () => {
  return (
    <Layout title={"Create Set"} withBackButton>
      <CreateSetForm />
    </Layout>
  );
};
