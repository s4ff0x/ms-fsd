import { IonItem } from "@ionic/react";
import React from "react";
import { Link } from "react-router-dom";
import { SignOut } from "features/auth";
import { SetList } from "entities/set";
import { Layout } from "shared/ui/layout/layout";
import { useSetsState } from "features/set/fb-watcher";
import { useCategoriesState } from "features/category/fb-watcher/use-watcher";
import { CategoryList } from "entities/category";

const Home: React.FC = () => {
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
        <Link to={"/set/create"}>Create set</Link>
      </IonItem>
      <SetList />
      <SignOut />
    </Layout>
  );
};

export default Home;
