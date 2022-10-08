import { spy, toJS } from "mobx";

export const initStoreLogger = () => {
  if (process.env.NODE_ENV === "development") {
    spy((event) => {
      if (event.type === "action") {
        console.log(
          `%c${toJS(event.name)}:`,
          "color: #fc9403; font-family:sans-serif; font-weight: bold;",
          toJS(event.arguments),
          toJS(event.object)
        );
      }
    });
  }
};
