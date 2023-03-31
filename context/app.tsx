import { createContext, useState, useCallback } from "react"
import { AppContextProps } from "./appContext.types";

export const AppContext = createContext<AppContextProps>({} as AppContextProps)

export const ApiProvider = ({ children }: any) => {
  const [page, setPage] = useState<number>(1);
  const [search, setSearch] = useState<string>('');

  const getFavorites = useCallback(() => {
    if (typeof window !== 'undefined') {
      const storedFavorites = localStorage.getItem("favorites");
      return storedFavorites ? JSON.parse(storedFavorites) : [];
    }
    return [];
  }, []);

  const [favorites, setFavorites] = useState<number[]>(getFavorites());



  const handleToggleFavorite = useCallback(
    (id: number) => {
      setFavorites((prevFavorites) => {
        const isFavorite = prevFavorites.includes(id);
        let newFavorites: number[];
        if (isFavorite) {
          newFavorites = prevFavorites.filter((fav) => fav !== id);
        } else {
          newFavorites = [...prevFavorites, id];
        }
        localStorage.setItem("favorites", JSON.stringify(newFavorites));
        return newFavorites;
      });
    },
    [setFavorites]
  );
    

  const resetFilters = () => {
    setSearch('');
    setPage(1);
  }

  return (
    <AppContext.Provider
      value={{
        page,
        setPage,
        search,
        setSearch,
        handleToggleFavorite,
        resetFilters,
        favorites
      }}>
      {children}
    </AppContext.Provider>
  )
}