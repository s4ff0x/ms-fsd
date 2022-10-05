import { observer } from "mobx-react-lite";
import { useHistory } from "react-router";
import { getSetRouteUpdateDynamic } from "../";
import { EMPTY_SET_LIST_TITLE } from "../config";
import { setStore } from "../model";

export const SetList = observer(() => {
  const history = useHistory();
  return (
    <div>
      {setStore.sets.length ? (
        setStore.sets.map((set) => (
          <div
            key={set.uid}
            onClick={() => {
              history.push(getSetRouteUpdateDynamic(set.uid));
            }}
          >
            <div>{set.name}</div>
            <div>{set.uid}</div>
          </div>
        ))
      ) : (
        <div>{EMPTY_SET_LIST_TITLE}</div>
      )}
    </div>
  );
});
