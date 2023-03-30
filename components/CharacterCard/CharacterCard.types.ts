
export type CharacterProps = {
  character: {
    name: string;
    status: 'Dead' | 'Alive' | 'unknown';
    image: string;
    species: string
    location: {
      name: string
    }
  }
}