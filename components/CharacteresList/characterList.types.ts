export type CharacterListProps = {
  info?: {
    pages: number
  prev: string,
  next: string
  } | null | undefined,
  results: {
    id: number;
    name: string;
    isFavorite: boolean;
    status: "Dead" | "Alive" | "unknown";
    image: string;
    species: string
    location: {
      name: string
    }
  }[] | null | undefined | 
  {
    id: number;
    name: string;
    isFavorite: boolean;
    status: "Dead" | "Alive" | "unknown";
    image: string;
    species: string
    location: {
      name: string
    }
  }
  isLoading:boolean;
  error?: boolean
}

