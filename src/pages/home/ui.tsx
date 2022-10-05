import { IonItem } from "@ionic/react";
import React from "react";
import { Link } from "react-router-dom";
import { SignOut } from "features/auth";
import { useCategoriesState } from "features/category/fb-watcher";
import { useSetsState } from "features/set/fb-watcher";
import { CategoryList } from "entities/category";
import { getSetRouteCreate, SetList } from "entities/set";
import { Layout } from "shared/ui";

export const Home: React.FC = () => {
  useSetsState();
  useCategoriesState();
  return (
    <Layout title={"home"}>
      <h3>home</h3>
      <IonItem>
        <Link to={"/category/create"}>Create category</Link>
      </IonItem>
      <CategoryList />
      <IonItem>
        <Link to={getSetRouteCreate()}>Create set</Link>
      </IonItem>
      <SetList />
      <SignOut />
    </Layout>
  );
};
