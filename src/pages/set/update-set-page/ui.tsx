import React from "react";
import { useParams } from "react-router";
import { setStore } from "entities/set";
import { Layout } from "shared/ui";
import { UpdateSetForm } from "widgets/set/update-set-form";

export const UpdateSetPage = () => {
  const params = useParams<{ setId: string }>();
  const set = setStore.sets.find((set) => set.uid === params.setId);

  if (!set) return null;
  return (
    <Layout title={"Update set"} withBackButton>
      <UpdateSetForm set={set} />
    </Layout>
  );
};
