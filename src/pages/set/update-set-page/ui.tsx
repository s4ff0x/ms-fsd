import React from "react";
import { useParams } from "react-router";
import { SetForm } from "widgets/set-form";
import { setStore } from "entities/set";
import { Layout, TitledBlock } from "shared/ui";

export const UpdateSetPage = () => {
  const params = useParams<{ setId: string }>();
  const set = setStore.sets.find((set) => set.uid === params.setId);

  if (!set) return null;
  return (
    <Layout title={"Update set"} withBackButton>
      <TitledBlock title={"Update set"} subTitle={"With new terms"} />
      <SetForm set={set} />
    </Layout>
  );
};
