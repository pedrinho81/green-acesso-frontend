import styled, {keyframes} from "styled-components";


export const BounceAnimation = keyframes`
  0% { 
    margin-bottom: 0; 
  }

  50% { 
    margin-bottom: 1rem;
  }

  100% { 
    margin-bottom: 0;
  }
`

export const LoadingWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  h3{
    font-size: 1.3rem;
    color: var(--green);
    height: 1.5rem;
    animation: ${BounceAnimation} 0.5s alternate-reverse infinite;
  }
`
type dotProps = {
  delay: string
}
export const Dot = styled.div<dotProps>`
  background-color: var(--white);
  border-radius: 50%;
  width: 0.6rem;
  height: 0.6rem;
  margin: 0 0.25rem;
  animation: ${BounceAnimation} 0.5s linear infinite;
  animation-delay: ${({delay}) => delay};
`
