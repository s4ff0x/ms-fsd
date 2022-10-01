import { setStore } from "../model/store";
import { observer } from "mobx-react-lite";
import { useHistory } from "react-router";

export const SetList = observer(() => {
  const history = useHistory();
  return (
    <div>
      {setStore.sets.length ? (
        setStore.sets.map((set) => (
          <div
            key={set.uid}
            onClick={() => {
              history.push(`/set/edit/${set.uid}`);
            }}
          >
            <div>{set.name}</div>
            <div>{set.uid}</div>
          </div>
        ))
      ) : (
        <div>There are no sets</div>
      )}
    </div>
  );
});
