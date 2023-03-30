export type CharacterProps = {
    id: number;
    name: string;
    status: 'Dead' | 'Alive' | 'unknown';
    species: string;
    type: string;
    gender: string;
    origin: {
        name: string;
        url: string;
    };
    location: {
        name: string
      }
    image: string;
 
}