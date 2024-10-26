"use client";

import React, { ReactNode } from "react";
import { ThemeProvider } from "next-themes";

const NextThemeProvider = ({ children }: { children: ReactNode }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default NextThemeProvider;