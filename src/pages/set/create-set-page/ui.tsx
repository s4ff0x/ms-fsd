import React from "react";
import { CreateSet } from "features/set/create-set";
import { Layout } from "shared/ui";

export const CreateSetPage = () => {
  return (
    <Layout title={"Create Set"} withBackButton>
      <CreateSet />
    </Layout>
  );
};
