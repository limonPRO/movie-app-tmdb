
import { Person } from "@/types/CastTypes";
import Image from "next/image";

const ActorCard = ({ actor }:{actor:Person}) => {
  return (
    <div className="w-full pr-4 sm:pr-3">
      <div className="w-full h-[300px] lg:h-[250px] xs:h-[240px] relative">
        <Image priority style={{ objectFit: "cover" }} className="rounded-md" fill src={`https://image.tmdb.org/t/p/original/${actor.profile_path}`} alt={actor.name} />
      </div>
      <div className="py-4">
        <h4 className={`text-[12px] w-[80%] whitespace-nowrap text-ellipsis overflow-hidden font-semibold dark:text-white `}>{actor.name}</h4>
        <p className="text-[11px] text-gray-400 mt-1 font-normal">as {actor?.character}</p>
      </div>
    </div>
  );
};

export default ActorCard;