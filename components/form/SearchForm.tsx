import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { debounce } from "lodash";

const searchSchema = z.object({
  search: z.string().min(3, "Minimum length is 3 characters"),
});

type SearchFormInputs = z.infer<typeof searchSchema>;

const SearchForm = ({ onSearch }: { onSearch: (query: string) => void }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchSchema),
  });

  const [showError, setShowError] = useState(false); // State to control error visibility

  // Debounced function to handle search input
  const debouncedSearch = debounce((data: SearchFormInputs) => {
    onSearch(data.search);
  }, 300);

  const onSubmit = (data: SearchFormInputs) => {
    setShowError(false); // Reset error visibility on submit
    debouncedSearch(data);
  };

  const onError = (errors: any) => {
    setShowError(true); // Show error if validation fails
  };

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
        <span className="text-red-500 text-sm">{errors.search.message}</span>
      )}
    </div>
  );
};

export default SearchForm;
