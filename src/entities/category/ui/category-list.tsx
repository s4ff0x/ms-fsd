import { observer } from "mobx-react-lite";
import { EMPTY_CATEGORY_LIST_TITLE } from "entities/category";
import { categoryStore } from "../model";

export const CategoryList = observer(
  ({ onClick }: { onClick: (uid: string) => void }) => {
    return (
      <div>
        {categoryStore.categories.length ? (
          categoryStore.categories.map((category) => (
            <div
              key={category.uid}
              onClick={() => {
                onClick(category.uid);
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
  }
);
