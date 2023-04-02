import Link from "next/link";
import { Container } from "./styles";
type ErrorMessageProps = {
  message: string
}
const ErrorMessage:React.FC<ErrorMessageProps> = ({message}) => {
  return ( 
    <Container>

    <h1>{message}</h1>
    <Link href={'/'}><button>Voltar para a Home</button></Link> 
    </Container>
  )
}

export {ErrorMessage}