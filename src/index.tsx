import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import { AppRoutes } from "./router";
import { RouterProvider } from "react-router-dom";
import { RecoilRoot } from "recoil";

export const MyContext = React.createContext({ username: "" });

const element = document.getElementById("hello-example");
createRoot(element).render(
  <RecoilRoot>
    <Suspense>
      <MyContext.Provider value={{ username: "Andrestone" }}>
        <React.StrictMode>
          <RouterProvider router={AppRoutes} />
        </React.StrictMode>
      </MyContext.Provider>
    </Suspense>
  </RecoilRoot>
);
