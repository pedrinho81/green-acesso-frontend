import { useContext } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { AppContext } from 'context/app'
import { CharacterCardProps } from './characterCard.types'
import * as C from './styles'
import { IoStarOutline } from 'react-icons/io5'
export const CharacterCard: React.FC<CharacterCardProps> = ({ character, isFavorite, noButtonDetails }) => {
  const { handleToggleFavorite } = useContext(AppContext)
  const { name, image, location, id } = character
  return (
    <C.Card>
      <h1>{name}</h1>
      <C.Star
        onClick={() => handleToggleFavorite(id)}
        isFavorite={isFavorite}><IoStarOutline /></C.Star>
      <Image src={image}
        alt={name}
        width={270}
        height={250}
        placeholder='blur'
        unoptimized
        blurDataURL='https://abstackwp.khingars.com/wp-content/uploads/2021/09/image-blur-placeholder.png'
      />

      <C.ContainerDetails>
        <div>
          <span>Última localização:</span>
          <h1>{location?.name}</h1>
        </div>
        {!noButtonDetails && 
        <Link color='black' href={`/character/${name}/${id}`}>
          <button>Detalhes</button>
        </Link>}
        
      </C.ContainerDetails>
    </C.Card>
  )
}