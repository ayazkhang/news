import { configureStore } from "@reduxjs/toolkit";
import preferencesReducer from "./preferencesSlice";
import { newsApi } from "../api/newApi";

export const store = configureStore({
  reducer: {
    preferences: preferencesReducer,
    [newsApi.reducerPath]: newsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(newsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
