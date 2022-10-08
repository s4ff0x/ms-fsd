import React from "react";
import { SetForm } from "widgets/set-form";
import { Layout, TitledBlock } from "shared/ui";

export const CreateSetPage = () => {
  return (
    <Layout title={"Create Set"} withBackButton>
      <TitledBlock title={"Create a set"} subTitle={"With terms"} />
      <SetForm />
    </Layout>
  );
};
