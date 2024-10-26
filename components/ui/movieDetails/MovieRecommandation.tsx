import MovieCard from "@/components/cards/MovieCard";
import SectionTitle from "@/components/common/SectionTitle";
import { Movie } from "@/types/MovieTypes";
import React from "react";

const MovieRecommandation = ({ data }: { data: Movie[] }) => {

  return (
    <div className="w-full ">
      <SectionTitle title="Recommandation" />
      <div className="mt-4 grid grid-cols-5 lg:grid-cols-4 sm:grid-cols-2 lg:gap-1 gap-3">
        {data?.map((movie: Movie, idx: number) => (
          <MovieCard movie={movie} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default MovieRecommandation;
