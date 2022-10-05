import { observer } from "mobx-react-lite";
import { useHistory } from "react-router";
import {
  EMPTY_CATEGORY_LIST_TITLE,
  getCategoryUpdateRouteDynamic,
} from "entities/category";
import { categoryStore } from "../model";

export const CategoryList = observer(() => {
  const history = useHistory();
  return (
    <div>
      {categoryStore.categories.length ? (
        categoryStore.categories.map((category) => (
          <div
            key={category.uid}
            onClick={() => {
              history.push(getCategoryUpdateRouteDynamic(category.uid));
            }}
          >
            <div>{category.name}</div>
            <div>{category.uid}</div>
          </div>
        ))
      ) : (
        <div>{EMPTY_CATEGORY_LIST_TITLE}</div>
      )}
    </div>
  );
});
