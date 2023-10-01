import styled from "styled-components";

interface Props {
  isVisible: boolean
}

export const LoginContainer = styled.div`
  width: 100vw;
  height: 100vh;

  display: grid;
  place-content: center;
`
export const LoginContent = styled.div`
  width: 350px;
  
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Header = styled.div`
  width: 150px;
  height: 150px;
  display: grid;
  place-content: center;
  border-radius: 50%;
  margin-top: 15px;
  
  // substituir pela imagem de avatar
  background-color: var(--color-bg);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    clip-path: circle();
  }
`

export const LoginForm = styled.form`
  padding-top: 15px;
  display: grid;
  place-content: center;
  gap: 15px;

  
  `
export const InputContainer = styled.div<Props>`

  display: ${({ isVisible}) => (isVisible) ? 'flex' : 'none'};
  flex-direction: column;
  gap: 3px;
`
export const Label = styled.label`
  font-weight: 600;
`
export const Input = styled.input`
  background-color: whitesmoke;
  padding: 10px;
  border-radius: 10px;
  font-size: 16px;
  box-shadow: 1px 0px 5px rgba(0, 0, 0, 0.25);
`
export const Button = styled.button<Props>`
  padding: 8px;
  border-radius: 5px;

  display: ${({isVisible}) => (isVisible) ? 'initial' : 'none'};

  // variavel
  font-weight: 600;
  color: #fff;
  background-color: var(--color-base);

`
