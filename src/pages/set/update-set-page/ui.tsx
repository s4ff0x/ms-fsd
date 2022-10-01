import React from "react";
import { UpdateSet } from "features/set/update-set";
import { useParams } from "react-router";
import { setStore } from "entities/set";
import { Layout } from "shared/ui/layout/layout";

export const UpdateSetPage = () => {
  const params = useParams<{ setId: string }>();
  const set = setStore.sets.find((set) => set.uid === params.setId);

  if (!set) return null;
  return (
    <Layout title={"Update set"} withBackButton>
      <UpdateSet set={set} />
    </Layout>
  );
};
