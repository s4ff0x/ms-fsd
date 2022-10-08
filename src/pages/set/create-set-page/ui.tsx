import React from "react";
import { CreateSetForm } from "widgets/set/create-set-form";
import { Layout, TitledBlock } from "shared/ui";

export const CreateSetPage = () => {
  return (
    <Layout title={"Create Set"} withBackButton>
      <TitledBlock title={"Create a set"} subTitle={"With terms"} />
      <CreateSetForm />
    </Layout>
  );
};
