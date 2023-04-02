import { CharacterProps } from "./CharacterProps.types"
import { CharacterCard } from '@/components/CharacterCard'
import { Container, Table } from "./styles"
import Link from "next/link";
import { formatResult } from "utils/formatResultsTable";
import { copyToClipboard } from "utils/copyToClipboard";
export const CharacterDetail: React.FC<CharacterProps> = (details: CharacterProps) => {

  const data = Object.entries(details)
  return (
    <Container>
      <h1>
        {details.name}
      </h1>
      <CharacterCard
        character={details}
        isFavorite={details.isFavorite}
      />
      <div>
        <Table>
          <thead>
            <tr>
              {data.map(([key]) => (
                <th key={key}>{key.toLocaleUpperCase()}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {data.map(([key, value]) => (
                <td key={key} onClick={() => copyToClipboard(formatResult(value))}>
                  <p>{key.toLocaleUpperCase()}</p>
                  {formatResult(value)}
                </td>
              ))}
            </tr>
          </tbody>
        </Table>
        <Link href={'/'}>
          <button>
            Voltar
          </button>
        </Link>
      </div>
    </Container>
  )
}