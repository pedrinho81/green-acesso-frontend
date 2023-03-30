import { useRouter } from "next/router";
import { CharacterProps } from "pages/character/[name]/CharacterProps.types"
import { CharacterCard } from '@/components/CharacterCard'
import { Container, Table } from "./styles"
import Link from "next/link";
export const CharacterDetail: React.FC<CharacterProps> = (details: CharacterProps) => {
  const router = useRouter();
  const { id } = router.query;
  const data = Object.entries(details)
  return (
    <Container>
      <h1>
        {details.name}
      </h1>
      <CharacterCard character={details} />
      <div>
        <Table>
          <thead>
            <tr>
              {data.map(([key]) => (
                <th>{key.toLocaleUpperCase()}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {data.map(([key, value]) => (
                <td>
                  <tr>
                    {key.toLocaleUpperCase()}
                  </tr>
                  {typeof value === 'object' ?
                    value.name
                    : value ? value : 'N/A'}
                </td>
              ))}
            </tr>
          </tbody>
        </Table>
        <Link href={'/'}>
          <button>
            voltar
          </button>
        </Link>
      </div>
    </Container>
  )
}