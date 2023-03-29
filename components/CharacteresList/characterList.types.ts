import { CharacterProps } from "../Character/Character.types";
export type CharacterListProps = {
  results: {
    name: string;
    status: "Dead" | "Alive" | "unknown";
    image: string;
    species: string
    location: {
      name: string
    }
  }[] | null 
}

