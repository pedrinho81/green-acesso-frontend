import Image from 'next/image'
import { CharacterProps } from './Character.types'
import * as C from './styles'
export const Character: React.FC<CharacterProps> = ({character}) => {
  const {name, status, image} = character
  return (
      <C.Card>
        <h1>{name}</h1>
        <h1>{status}</h1>
        <Image src={image} 
        alt={name}
        width={270}
        height={250}/>
      </C.Card>
  )
}