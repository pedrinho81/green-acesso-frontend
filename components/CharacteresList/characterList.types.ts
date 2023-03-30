export type CharacterListProps = {
  info: {
    pages: number
  prev: string,
  next: string
  } | null,
  results: {
    id: number;
    name: string;
    status: "Dead" | "Alive" | "unknown";
    image: string;
    species: string
    location: {
      name: string
    }
  }[] | null 
  isLoading:boolean;
}

