import { RouterProvider } from "react-router-dom";
import { ReactLenis } from "@studio-freight/react-lenis";

import { GlobalStyles } from "@styles/global-styles.styled";

import { router } from "./router";


export const App = () => {
  return (
    <>
      <GlobalStyles />
      <ReactLenis root>
        <RouterProvider router={router} />
      </ReactLenis>
    </>
  );
};
