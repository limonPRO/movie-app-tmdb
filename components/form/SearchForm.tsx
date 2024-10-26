import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { debounce } from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { handleInput } from "@/features/commonSlice";
import { useRouter } from "next/navigation";
import { RootState } from "@/config/reduxStoreConfig"; // Adjust this import based on your setup

const searchSchema = z.object({
  search: z.string().min(3, "Minimum length is 3 characters"),
});

type SearchFormInputs = z.infer<typeof searchSchema>;

const SearchForm = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const searchText = useSelector((state: RootState) => state.common.text); // Access searchText from the store
  
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchSchema),
  });

  const [showError, setShowError] = useState(false);

  // Debounced function to handle search input
  const debouncedSearch = debounce((query: string) => {
    handleSearchSubmit(query);
  }, 300);

  const onSubmit = (data: SearchFormInputs) => {
    setShowError(false); 
    debouncedSearch(data.search);
  };

  const onError = () => {
    setShowError(true); 
  };

  const handleSearchSubmit = (query: string) => {
    dispatch(handleInput({ text: query }));
    router.push("/");
  };

  // Clear the search field when searchText in the store is empty
  useEffect(() => {
    if (!searchText) {
      setValue("search", ""); // Clear input field
    }
  }, [searchText, setValue]);

  return (
    <div className="flex flex-col">
      <form onSubmit={handleSubmit(onSubmit, onError)} className="flex">
        <input
          type="text"
          placeholder="Search movies..."
          {...register("search")}
          className="border border-gray-300 rounded-md py-2 px-4 w-full md:w-60 lg:w-80 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="ml-2 bg-blue-500 text-white rounded-md py-2 px-4"
        >
          Search
        </button>
      </form>
      {errors.search && (
        <span className="mt-2 text-red-500 text-xs">{errors.search.message}</span>
      )}
    </div>
  );
};

export default SearchForm;
