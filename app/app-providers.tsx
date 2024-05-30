"use client";

import { Provider } from "react-redux";
import { store } from "@/store/feature/store";
export function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,1,0"
      />
{children}</Provider>
    </>
  );
}
