"use client";

import { setUser } from "@/features/userSlice";
import { useSession } from "next-auth/react";
import React, { ReactNode, useEffect } from "react";
import { useDispatch } from "react-redux";

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const session = useSession();
  const dispatch = useDispatch();
  useEffect(() => {
    if (session.data?.user) {
      const { user } = session.data as any;
      dispatch(
        setUser({
          user: user
        })
      );
    } 
  }, [session, dispatch]);
  return <>{children}</>;
};

export default AuthProvider