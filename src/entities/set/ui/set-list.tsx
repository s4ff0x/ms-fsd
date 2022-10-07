import { observer } from "mobx-react-lite";
import { EMPTY_SET_LIST_TITLE } from "../config";
import { setStore } from "../model";

export const SetList = observer(
  ({ onClick }: { onClick: (uid: string) => void }) => {
    return (
      <div>
        {setStore.sets.length ? (
          setStore.sets.map((set) => (
            <div key={set.uid} onClick={() => onClick(set.uid)}>
              <div>{set.name}</div>
              <div>{set.uid}</div>
            </div>
          ))
        ) : (
          <div>{EMPTY_SET_LIST_TITLE}</div>
        )}
      </div>
    );
  }
);
