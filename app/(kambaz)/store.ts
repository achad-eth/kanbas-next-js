import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./courses/[cid]/modules/reducer";
import assignmentsReducer from "./courses/[cid]/assignments/reducer";

const store = configureStore({
  reducer: {
    modulesReducer,
    assignmentsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;