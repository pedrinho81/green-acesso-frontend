import { useRouter } from "next/router";
import { CharacterProps } from "pages/character/[name]/CharacterProps.types"
import { CharacterCard } from '@/components/CharacterCard'
import { Container, Table } from "./styles"
import Link from "next/link";
export const CharacterDetail: React.FC<CharacterProps> = (details: CharacterProps) => {

  function getDefault() {
    return 'N/A';
  }

  function getValue(value: any) {
    switch (typeof value) {
      case 'object':
        return value.name || getDefault();
      case 'boolean':
        return value ? 'Yes' : 'No';
      case 'string':
        return value || getDefault();
      case 'number':
        return value || getDefault();
      default:
        return getDefault();
    }
  }
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
                <td key={key}>
                  <p>{key.toLocaleUpperCase()}</p>
                  {getValue(value)}
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