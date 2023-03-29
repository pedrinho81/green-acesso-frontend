import Image from 'next/image'
import { CharacterProps } from './Character.types'
import * as C from './styles'
export const Character: React.FC<CharacterProps> = ({character}) => {
  const {name, image, location, status} = character
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
        
        <span>Última localização:</span>
        <h1>{location.name}</h1>
      </C.Card>
  )
}