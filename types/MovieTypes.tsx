import { ItemWithId,  } from "./CommonTypes";

export interface Genre extends ItemWithId {
    name: string;
  }
  
  export interface Movie extends ItemWithId {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }
  
  export interface MovieImage {
    file_path: string;
  }
  
  export interface MovieVideo extends ItemWithId {
    key: string;
    name: string;
    type: string;
  }
