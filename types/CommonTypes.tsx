export type Maybe<T> = T | null | undefined;

export type ID = number;

export interface ItemWithId {
    id: ID;
  }
  
  export type DateString = string;
  
  export interface PaginationResponse<Data> {
    results: Data[];
    page: number;
    total_pages: number;
    total_results: number;
  }