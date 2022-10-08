import { spy, toJS } from "mobx";

export const initStoreLogger = () => {
  if (process.env.NODE_ENV === "development") {
    spy((event) => {
      if (event.type === "action") {
        console.log(
          `${toJS(event.name)} with args:`,
          toJS(event.arguments),
          toJS(event.object)
        );
      }
    });
  }
};
