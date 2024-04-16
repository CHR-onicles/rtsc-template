import React from "react";
import ReactDOM from "react-dom/client";
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { StyleSheetManager } from "styled-components";

import { App } from "./App";


const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error: any, query) => {
      //  errorToast("Something went really wrong: " + error.message);
      import.meta.env.DEV && console.error(error);

      // 🎉 only show error toasts if we already have data in the cache
      // which indicates a failed background update
      if (query.state.data !== undefined) {
        // toast.error(`Something went wrong: ${error.message}`);
        import.meta.env.DEV && console.error("Background update:", error);
      }
    },
  }),

  defaultOptions: {
    queries: {
      staleTime: Infinity,
      refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <StyleSheetManager enableVendorPrefixes>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
        <App />
      </QueryClientProvider>
    </StyleSheetManager>
  </React.StrictMode>
);
