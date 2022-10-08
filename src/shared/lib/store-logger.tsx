import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { JSONTree } from "react-json-tree";

interface ILoggerItem {
  label: string;
  data: any;
}

const MobxStoreVisualizer = ({ data }: any) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{
        zIndex: 1000,
        position: "fixed",
        top: 0,
        paddingTop: 20,
        right: 0,
      }}
    >
      <button
        onClick={() => setOpen((open) => !open)}
        style={{
          width: 20,
          height: 20,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "orange",
          position: "absolute",
          right: 0,
          top: 0,
        }}
      >
        M
      </button>
      {open && <JSONTree data={data} />}
    </div>
  );
};

export const initStoreLogger = (items: ILoggerItem[]) => {
  if (process.env.NODE_ENV === "development") {
    const domContainer = document.createElement("div");
    domContainer.id = "__mobx_visualizer__";

    document.body.appendChild(domContainer);

    const container = document.getElementById("__mobx_visualizer__");
    const root = createRoot(container!);
    root.render(
      <MobxStoreVisualizer
        data={items.reduce(
          (acc, item) => ({ ...acc, [item.label]: item.data }),
          {}
        )}
      />
    );
  }
};
