import { Link } from 'react-router-dom'
import * as L from './login.ts'

import Avatar from '/login/avatar.svg'

//Hooks
import { useState } from 'react'

const Login: React.FC  = () => {

  const [inputEmail, setInputEmail] = useState(true)
  const [inputPassword, setInputPassword] = useState(false)
  const [next, setNext] = useState(true)
  const [login, setLogin] = useState(false)
  //  Estado para armazenar email e mensagem de erro
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('');
  // Estado para armazenar a Senha
  const [senha, setSenha] = useState('')

  // Função que envia os dados ao backend
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(senha)
    console.log("Clicado e redirecionado ao Home")
  }

  const visibleButtonLogin = (e: React.FormEvent) => {
    e.preventDefault()

     // Lógica para validar o e-mail
    if (!validateEmail(email)) {
      console.log("Este Email: ("+email+")não é valido")
      console.log("Por favor Insira um email valido")
      setEmailError('Digite um e-mail válido.');
      return;
    } else {
      setInputEmail(false)
      setInputPassword(true)
      setNext(false)
      setLogin(true)
      console.log(email)
    }
       // Logica de buscar a Imagem no backend e substituir antes do Input Password
        
       // Logica para poder permitir o acesso do usuario a pagina home
    }
    // Funcao que valida se o email e valido ou nao
  const validateEmail = (input: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input);
  }

  return(
  <L.LoginContainer>

    <L.LoginContent>

    <L.Text>
      <h1>Olá de volta!</h1>
      <p> Por favor, faça login para continuar.</p>
    </L.Text>

    <L.Header>
      <img src={Avatar} alt="" />
    </L.Header>

    <L.LoginForm  onSubmit={handleSubmit}>
      
      <L.InputContainer isVisible={inputEmail}>
        <L.Label htmlFor="email">Email: </L.Label>
        <L.Input type="email" 
        placeholder='Digite o Email' 
        autoComplete='off'
        name='email'
        onChange={(e) => {
                setEmail(e.target.value);
                setEmailError(''); // Limpar mensagem de erro ao digitar
              }}
        />
                    {emailError && <p style={{'color': 'red'}}>{emailError}</p>}
      </L.InputContainer>

      <L.InputContainer isVisible={inputPassword}>
        <L.Label htmlFor="password">Password: </L.Label>
        <L.Input type="password" 
        placeholder='Digite a Senha'
        onChange={e => setSenha(e.target.value)}
        />
      </L.InputContainer>

      <L.Button isVisible={next} onClick={visibleButtonLogin}>NEXT</L.Button>
      <L.Button type='submit' isVisible={login}>LOGIN</L.Button>
      
      <p>Não és um Membro ? <Link to ='/registar'>Cadastrar</Link></p>
      
    </L.LoginForm>

    </L.LoginContent>

  </L.LoginContainer>
  )
}

export default Login