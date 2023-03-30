
export type CharacterCardProps = {
  character: {
    id: number,
    name: string;
    status: 'Dead' | 'Alive' | 'unknown';
    image: string;
    species: string
    location: {
      name: string
    }
  }
}