import Image from 'next/image'
import Link from 'next/link'
import { CharacterCardProps } from './CharacterCard.types'
import * as C from './styles'
export const CharacterCard: React.FC<CharacterCardProps> = ({ character} ) => {
  const { name, image, location, status, id } = character
  return (
    <C.Card>
      <h1>{name}</h1>
      <Image src={image}
        alt={name}
        width={270}
        height={250}
      />
      {status !== 'unknown' &&
        <C.Alive status={status}>{status}</C.Alive>
      }
      <C.ContainerDetails> 
        <div>
          <span>Última localização:</span>
          <h1>{location?.name}</h1>
        </div>
        <Link color='black' href={`/character/${name}/${id}`}>
          <button>Detalhes</button>
        </Link>
      </C.ContainerDetails>
    </C.Card>
  )
}