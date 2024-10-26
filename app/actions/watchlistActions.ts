import { Movie } from "@/types/MovieTypes";

// Add to Watchlist
export const addToWatchlist = (movie: Movie): void => {
  const watchlist = JSON.parse(localStorage.getItem("watchlist") || "[]");
  if (!watchlist.some((item: Movie) => item.id === movie.id)) {
    watchlist.push(movie);
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  }
};

// Remove from Watchlist
export const removeFromWatchlist = (movieId: number): void => {
  const watchlist = JSON.parse(localStorage.getItem("watchlist") || "[]");
  const updatedWatchlist = watchlist.filter(
    (movie: Movie) => movie.id !== movieId
  );
  localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist));
};

// Get Watchlist
export const getWatchlist = (): Movie[] => {
  return JSON.parse(localStorage.getItem("watchlist") || "[]");
};

