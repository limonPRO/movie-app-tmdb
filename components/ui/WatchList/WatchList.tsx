"use client";
import { useEffect, useState } from "react";
import { getWatchlist, removeFromWatchlist } from "@/app/actions/watchlistActions";
import { Movie } from "@/types/MovieTypes";
import MovieCard from "@/components/cards/MovieCard";

const WatchlistPage = () => {
  const [watchlist, setWatchlist] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchWatchlist = () => {
      const movies = getWatchlist();
      setWatchlist(movies);
    };
    fetchWatchlist();
  }, []);

  const handleRemove = (movieId: number) => {
    removeFromWatchlist(movieId);
    setWatchlist((prev) => prev.filter((movie) => movie.id !== movieId));
  };

  return (
    <div className="px-8 w-full mt-[100px] grid grid-cols-5 lg:grid-cols-4 sm:grid-cols-2 lg:gap-1 gap-3">
      {watchlist.length ? (
        watchlist.map((movie: Movie, idx: number) => (
          <MovieCard movie={movie} key={idx} onRemove={handleRemove} isInWatchlist={true} />
        ))
      ) : (
        <div className="col-span-5 text-center"> 
          <p className="text-lg font-semibold">Your watchlist is empty</p>
        </div>
      )}
    </div>
  );
};

export default WatchlistPage;
