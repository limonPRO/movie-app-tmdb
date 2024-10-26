"use client";
import React, { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import { useDispatch, useSelector } from "react-redux";
import { handleInput } from "@/fetures/commonSlice";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Import useRouter for navigation
import SearchForm from "../form/SearchForm";
import { RootState } from "@/config/reduxStoreConfig";
import { doLogout } from "@/app/actions/loginAction";

const Header = () => {
  const dispatch = useDispatch();
  const router = useRouter(); // Initialize the router
  const [searchText, setSearchText] = useState(""); // Local state for search input

  const handleSearchSubmit = (query: string) => {
    if (query) {
      dispatch(handleInput({ text: query }));
      router.push("/"); // Navigate to the home route
    }
  };

  const {user} = useSelector((state:RootState)=>state.user)


  return (
    <header className="header-bg h-[74px] sd-primary fixed top-0 left-0 right-0 z-50 flex items-center">
      <div className="container flex items-center max-w-[82.5rem] justify-between">
        {/* Searchbox */}
        <SearchForm onSearch={handleSearchSubmit} />
        <ul className="flex items-center gap-3">
          <li className="md:block hidden">
            <ThemeToggler />
          </li>
          <li className="md:block hidden">
            <Link href={"/"}>movie</Link>
          </li>
          <li className="md:block hidden">
            <Link href={"/watchlist"}>watchlist</Link>
          </li>
        </ul>
        {/* Uncomment the logout button if needed */}
        {user && <button onClick={doLogout}>logout </button>}
      </div>
    </header>
  );
};

export default Header;
