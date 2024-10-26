import apiClient from "@/lib/tmdbClient";
import { cache } from "react";

export const fetchSearchMovie  = async (searchParams:string,pageParam: any) => {
    try {
      const { data } = await apiClient.get(`/search/movie?query=${searchParams}&page=${pageParam}&per_page=20`);
      if (data) {
        const { results } = data;
        return results;
      }
    } catch (err: any) {
      const {
        response: { data },
      } = err;
      throw new Error(data.message);
    }
  };


  export const fetchExploreMovie = async (pageParam: any) => {
    try {
      const { data } = await apiClient.get(`/movie/popular?page=${pageParam}&per_page=20`);
      if (data) {
        const { results } = data;
        return results;
      }
    } catch (err: any) {
      const {
        response: { data },
      } = err;
      throw new Error(data.message);
    }
  };



  export const fetchMovieDetails = cache(async (endpointURL:string) => {
    const API_URL = process.env.API_URL || "";
    const API_KEY = process.env.API_KEY || "";
  
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
  
    try {
      const URL = `${API_URL}${endpointURL}?api_key=${API_KEY}`;
      
      const response = await fetch(URL, {
        ...requestOptions,
        next: { revalidate: 60 }, // Enable ISR with 60-second revalidation
      });
  
      if (!response.ok) {
        console.error(`Failed to fetch: ${response.statusText}`);
        return null;
      }
  
      const data = await response.json();
      // console.log(data)
      return data;
    } catch (error) {
      console.error("Error fetching movie details:", error);
      return null;
    }
  });
  
