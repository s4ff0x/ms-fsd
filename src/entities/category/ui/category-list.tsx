import { categoryStore } from "../model/store";
import { observer } from "mobx-react-lite";
import { useHistory } from "react-router";

export const CategoryList = observer(() => {
  const history = useHistory();
  return (
    <div>
      {categoryStore.categories.length ? (
        categoryStore.categories.map((category) => (
          <div
            key={category.uid}
            onClick={() => {
              history.push(`/category/edit/${category.uid}`);
            }}
          >
            <div>{category.name}</div>
            <div>{category.uid}</div>
          </div>
        ))
      ) : (
        <div>There are no categories</div>
      )}
    </div>
  );
});
