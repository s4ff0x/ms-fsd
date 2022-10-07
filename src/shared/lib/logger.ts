import { autorun, toJS } from "mobx";

interface ILoggerItem {
  label: string;
  data: any;
}

export const initLogger = (items: ILoggerItem[]) => {
  if (process.env.NODE_ENV === "development")
    autorun(() => {
      items.forEach((item) => {
        console.log(`\n ${item.label}:`, toJS(item.data));
      });
    });
};
