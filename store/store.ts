import { configureStore } from "@reduxjs/toolkit";
import vendingMachineReducer from "./slices/vendingMachineSlice";

export const store = configureStore({
  reducer: {
    vendingMachine: vendingMachineReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
