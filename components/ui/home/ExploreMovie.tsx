"use client";

import { fetchExploreMovie, fetchSearchMovie } from "@/config/fetcher";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import LoadingSpinner from "../../common/LodingSpinner";
import MovieCard from "../../cards/MovieCard";
import { useSelector } from "react-redux";
import { RootState } from "@/config/reduxStoreConfig";
import { Movie } from "@/types/MovieTypes";

const ExploreMovie = () => {
  const { inView, ref } = useInView();
  const searchText = useSelector((state: RootState) => state.common.text);

  // @ts-ignore
  const { data, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ["get-movies", searchText], 
    queryFn: ({ pageParam = 1 }) => {
      return searchText
        ? fetchSearchMovie(searchText, pageParam) 
        : fetchExploreMovie(pageParam); 
    },
    staleTime: 1000 * 24,
    getNextPageParam: (lastPage:any, allPages) => {
      return lastPage && lastPage?.length > 0 ? allPages.length + 1 : undefined;
    },
  });

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage, isFetchingNextPage]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  // Flatten the pages into a single array of movies
  const movies = data?.pages.flatMap((page) => page) || [];

  return (
    <div className="px-8 w-full mt-[100px]">
      <div className="w-full mt-4 grid grid-cols-5 lg:grid-cols-4 sm:grid-cols-2 xs:grid-cols-2 lg:gap-1 gap-3">
        {searchText && movies.length === 0 ? (
          <div className="col-span-5 text-center">
            <p>No data found for the search.</p>
          </div>
        ) : (
          movies.map((movie: any, idx) => <MovieCard movie={movie} key={idx} />)
        )}
      </div>

      {hasNextPage && (
        <div className="text-center mt-5">
          <button
            disabled={isFetchingNextPage}
            onClick={() => fetchNextPage()}
            className={`bg-indigo-400 text-[12px] font-semibold rounded-full py-3 px-5 text-white ${isFetchingNextPage && "cursor-not-allowed"}`}
          >
            {isFetchingNextPage ? "Loading..." : "Load More"}
          </button>
        </div>
      )}
      <div ref={ref}></div>
    </div>
  );
};

export default ExploreMovie;
