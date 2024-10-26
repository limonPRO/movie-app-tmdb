"use client";
import React, { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import { useDispatch, useSelector } from "react-redux";
import { handleInput } from "@/features/commonSlice";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Import useRouter for navigation
import SearchForm from "../form/SearchForm";
import { RootState } from "@/config/reduxStoreConfig";
import { doLogout } from "@/app/actions/loginAction";
import { clearUser } from "@/features/userSlice";

const Header = () => {
  const dispatch = useDispatch();


  const {user} = useSelector((state:RootState)=>state.user)
  
  const logOut=()=>{
      doLogout()
      dispatch(clearUser())
  }

  const handleMovieClick = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(handleInput({ text: "" })); // Clear search text to show all movies
    // router.replace("/"); 
    console.log("limon")
  };


  return (
    <header className="header-bg h-[74px] sd-primary fixed top-0 left-0 right-0 z-50 flex items-center">
      <div className="container flex items-center max-w-[82.5rem] justify-between">
        {/* Searchbox */}
        <SearchForm />
        <ul className="flex items-center gap-3">
          <li className="md:block hidden">
            <ThemeToggler />
          </li>
          <li className="md:block hidden">
            <Link onClick={handleMovieClick} href={"/"}>movie</Link>
          </li>
          <li className="md:block hidden">
            <Link href={"/watchlist"}>watchlist</Link>
          </li>
          <li> {user && <button onClick={logOut}>logout </button>}</li>
        </ul>
        {/* Uncomment the logout button if needed */}
       
      </div>
    </header>
  );
};

export default Header;
