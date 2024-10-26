"use client";
import Link from "next/link";
import Image from "next/image";
import { Movie } from "@/types/MovieTypes";

const MovieCard = ({ movie, onRemove, isInWatchlist }: { movie: Movie; onRemove?: (id: number) => void; isInWatchlist?: boolean }) => {
  if (!movie) {
    return null;
  }

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation(); 
    if (onRemove) {
      onRemove(movie.id); 
    }
  };

  
  return (
    <div className="relative w-full">
      <div className="w-full pr-2">
        <Link href={`movies/${movie.id}`}>
          <div className="w-full lg:h-[280px] xs:h-[240px] h-[350px] rounded-md relative">
            <Image fill sizes="100%" priority style={{ objectFit: "cover" }} alt={movie.title} className="rounded-md" src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} />
            <p className="text-[11px] absolute top-2 right-3 w-[30px] h-[30px] flex justify-center items-center rounded-full bg-indigo-400 text-white font-semibold uppercase">{movie.original_language}</p>
          </div>
          <div className="py-4">
            <h4 className={`text-[12px] w-[80%] whitespace-nowrap text-ellipsis overflow-hidden font-semibold dark:text-white`}>{movie.title}</h4>
            <p className={`text-[11px] flex items-center gap-x-2 font-normal mt-1`}>
              <i className="ri-calendar-line"></i>
              {movie.release_date}
            </p>
          </div>
        </Link>
        {isInWatchlist && (
          <button
            className="absolute top-2 left-2 text-red-500 hover:text-red-700"
            onClick={handleRemove} // Use the handleRemove function
          >
            Remove {/* Replace with your preferred icon */}
          </button>
        )}
      </div>
    </div>
  );
};

export default MovieCard;
