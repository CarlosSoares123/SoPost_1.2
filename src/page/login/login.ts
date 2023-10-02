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
  width: 380px;
  padding: 30px 90px;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`
export const Text = styled.div`
  text-align: center;
  display: grid;
  gap: 7px;

  h1{
    color: #000;
  }
`

export const Header = styled.div`
  width: 150px;
  height: 150px;
  display: grid;
  place-content: center;
  border-radius: 50%;
  margin-top: 15px;
  box-shadow: 1px 4px 10px  rgba(0, 0, 0, 0.45);
  
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
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  `
export const InputContainer = styled.div<Props>`
  width: 100%;
  height: 100%;
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
  width: 100%;
  padding: 8px;
  border-radius: 5px;

  display: ${({isVisible}) => (isVisible) ? 'initial' : 'none'};

  // variavel
  font-weight: 600;
  color: #fff;
  background-color: var(--color-base);
`
