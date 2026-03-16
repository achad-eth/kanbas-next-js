"use client";

import { ReactNode } from "react";
import { Provider } from "react-redux";
import KambazNavigation from "./Navigation";
import "./styles.css";
import store from "./store";

export default function KambazLayout({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      <div id="wd-kambaz">
        <div className="d-flex">
          <KambazNavigation />
          <div className="wd-main-content-offset p-3 flex-fill">
            {children}
          </div>
        </div>
      </div>
    </Provider>
  );
}