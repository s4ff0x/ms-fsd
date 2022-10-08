import { IonItem } from "@ionic/react";
import React from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { SignOut } from "features/auth";
import { CategoryList, useCategoryWatcher } from "entities/category";
import {
  getCategoryUpdateRouteDynamic,
  getSetRouteCreate,
  getSetRouteUpdateDynamic,
} from "entities/router";
import { SetList, useSetWatcher } from "entities/set";
import { Layout } from "shared/ui";

export const Home: React.FC = () => {
  const history = useHistory();
  useSetWatcher();
  useCategoryWatcher();
  return (
    <Layout title={"memoshift"}>
      <h3>home</h3>
      <IonItem>
        <Link to={"/category/create"}>Create category</Link>
      </IonItem>
      <CategoryList
        onClick={(uid) => history.push(getCategoryUpdateRouteDynamic(uid))}
      />
      <IonItem>
        <Link to={getSetRouteCreate()}>Create set</Link>
      </IonItem>
      <SetList onClick={(uid) => history.push(getSetRouteUpdateDynamic(uid))} />
      <SignOut />
    </Layout>
  );
};
