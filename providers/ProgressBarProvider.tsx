"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const ProgressBarProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <ProgressBar
        height="3px"
        color="#10cb61"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
};

export default ProgressBarProvider;
