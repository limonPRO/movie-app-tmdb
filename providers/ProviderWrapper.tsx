"use client";

import React, { ReactNode, useEffect } from "react";
import NextThemeProvider from "./NextThemeProvider";
import ProgressBarProvider from "./ProgressBarProvider";
import ReactQueryProvider from "./ReactQueryProvider";
import { store } from "@/config/reduxStoreConfig";
import { Provider } from "react-redux";
import AuthProvider from "./AuthProvider";
import { SessionProvider } from "next-auth/react";

const ProviderWrapper = ({ children  }: { children: ReactNode }) => {
  
  return (
    <Provider store={store}>
       <SessionProvider refetchOnWindowFocus={true}>
      <AuthProvider>
        <ReactQueryProvider>
          <NextThemeProvider>
            <ProgressBarProvider>{children}</ProgressBarProvider>
          </NextThemeProvider>
        </ReactQueryProvider>
        </AuthProvider>
        </SessionProvider>
    </Provider>
  );
};

export default ProviderWrapper;
