import React, { createContext, useState, ReactNode, useContext } from "react";

// Define the shape of your search context
interface SearchContextProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

// Create the search context
const SearchContext = createContext<SearchContextProps | undefined>(undefined);

// Create a custom hook to access the search context
const useSearchContext = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error(
      "useSearchContext must be used within a SearchContextProvider"
    );
  }
  return context;
};

// Create the search context provider component
interface SearchContextProviderProps {
  children: ReactNode;
}

const SearchContextProvider: React.FC<SearchContextProviderProps> = ({
  children,
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </SearchContext.Provider>
  );
};

export { SearchContext, useSearchContext, SearchContextProvider };
