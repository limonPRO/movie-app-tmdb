"use client";
import {
  addToWatchlist,
  getWatchlist,
  removeFromWatchlist,
} from "@/app/actions/watchlistActions";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdFavoriteBorder, MdOutlineFavorite } from "react-icons/md";

const MovieDetails = ({ data }: any) => {
  const [isInWatchlist, setIsInWatchlist] = useState(false);

  useEffect(() => {
    const checkWatchlist = async () => {
      const watchlist = await getWatchlist();
      setIsInWatchlist(watchlist.some((item) => item.id === data.id));
    };
    checkWatchlist();
  }, [data.id]);

  const handleToggleWatchlist = async () => {
    if (isInWatchlist) {
      await removeFromWatchlist(data.id);
    } else {
      await addToWatchlist(data);
    }
    setIsInWatchlist(!isInWatchlist);
  };

  return (
    <div
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${data?.backdrop_path}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
      className="w-full h-[100vh] xs:py-5 xs:overflow-y-scroll relative"
    >
      <div className="w-full h-full bg-gray-900/50 flex justify-center items-center">
        <div className="max-w-[80%] lg:max-w-[90%] sm:max-w-full sm:px-3 flex-row sm:items-center flex items-start gap-x-7">
          <Image
            width={250}
            height={400}
            className="rounded-md"
            src={`https://image.tmdb.org/t/p/original/${data?.poster_path}`}
            alt={data?.title}
          />

          <div className="flex-1 sm:mt-7">
            <h2 className="text-xl font-bold text-white">{data?.title}</h2>
            <div className="flex mt-2 items-center gap-x-3">
              <p className="flex items-center gap-x-2 text-[13px] text-white">
                <i className="ri-timer-2-line text-[16px]"></i>
                {data?.runtime} minutes
              </p>
              <p className="flex items-center gap-x-2 text-[13px] text-white">
                <i className="ri-exchange-dollar-line text-[16px]"></i>
                {new Intl.NumberFormat("en-US", {
                  currency: "USD",
                  style: "currency",
                }).format(data?.revenue)}{" "}
              </p>
              <p className="flex items-center gap-x-2 text-[13px] text-white">
                <i className="ri-funds-line text-[16px]"></i>
                {Math.ceil(data?.vote_average)}
              </p>
            </div>
            <p className="text-[12px] mt-3 text-white mb-5">{data?.overview}</p>
            <div className="max-w-[55%] lg:max-w-full  grid grid-cols-4 gap-2">
              {data?.genres?.map((item: any, idx: number) => (
                <div className="w-full block" key={idx}>
                  <button className="bg-indigo-400 w-full text-[12px] font-semibold p-2 rounded-full text-white">
                    {item?.name}
                  </button>
                </div>
              ))}
            </div>
            <div>
            <button onClick={handleToggleWatchlist}>
              {isInWatchlist ? <MdOutlineFavorite size={40} /> : <MdFavoriteBorder size={40}/>}
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
