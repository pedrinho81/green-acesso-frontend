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
    font-size: 2rem;
    color: #24a66b;
    height: 1.5rem;
    animation: ${BounceAnimation} 0.5s alternate-reverse infinite;
  }
`
type dotProps = {
  delay: string
}
export const Dot = styled.div<dotProps>`
  background-color: #fff;
  border-radius: 50%;
  width: 0.75rem;
  height: 0.75rem;
  margin: 0 0.25rem;
  animation: ${BounceAnimation} 0.5s linear infinite;
  animation-delay: ${({delay}) => delay};
`
