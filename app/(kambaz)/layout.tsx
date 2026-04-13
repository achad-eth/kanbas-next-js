"use client";

import { ReactNode, useEffect } from "react";
import { Provider, useDispatch } from "react-redux";
import KambazNavigation from "./Navigation";
import "./styles.css";
import store from "./store";
import * as accountClient from "./account/client";
import { setCurrentUser } from "./account/reducer";

function SessionRestorer() {
  const dispatch = useDispatch();
  useEffect(() => {
    accountClient.profile()
      .then((user) => dispatch(setCurrentUser(user)))
      .catch(() => {});
  }, []);
  return null;
}

export default function KambazLayout({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      <SessionRestorer />
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
