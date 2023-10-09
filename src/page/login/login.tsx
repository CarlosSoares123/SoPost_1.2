import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import * as L from './login.ts';
import Avatar from '/login/avatar.svg';
import { useState } from 'react';

const Login: React.FC = () => {

  const [inputEmail, setInputEmail] = useState(true);
  const [inputPassword, setInputPassword] = useState(false);
  const [login, setLogin] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [emailSent, setEmailSent] = useState(false); // Novo estado

    const navigate = useNavigate('/')

  const validateEmail = (input: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input);
  };

  const visibleButtonLogin = () => {

      if (!validateEmail(email)) {
        setEmailError('Digite um e-mail válido.');
        return;
      }
      // Enviar o e-mail para o backend
      axios.post('http://localhost:9000/validate_email/', { email })
      .then(((res) => {
        console.log(res.data)

        setEmailSent(true);
        setInputEmail(false);
        setInputPassword(true);
        setLogin(true);
      }))
      .catch((err) => {
        console.log(err.response.data)
      })
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Definir o estado para indicar que o e-mail foi enviado
    setEmailSent(true);
    
    axios.post('http://localhost:9000/validate_password/', {password, email})
    .then((res)=> {
      console.log(res)
      navigate('/home')
    })
    .catch((err) => {
      console.log(err.response)
    })
    
  };

  return (
    <L.LoginContainer>
      <L.LoginContent>
        <L.Text>
          <h1>Olá de volta!</h1>
          <p>Por favor, faça login para continuar.</p>
        </L.Text>

        <L.Header>
          <img src={Avatar} alt="" />
          <span>{}</span>
        </L.Header>

        <L.LoginForm onSubmit={handleSubmit}>
          <L.InputContainer $isvisible={inputEmail}>
            <L.Label htmlFor="email">Email: </L.Label>
            <L.Input
              type="email"
              placeholder="Digite o Email"
              autoComplete="off"
              name="email"
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailError('');
              }}
            />
            {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
          </L.InputContainer>

          <L.InputContainer $isvisible={inputPassword}>
            <L.Label htmlFor="password">Password: </L.Label>
            <L.Input type="password" name='password' autoComplete="off" placeholder="Digite a Senha" onChange={(e) => setPassword(e.target.value)} />
          </L.InputContainer>

          {emailSent && (
            <L.Button type="submit" $isvisible={login}>
              LOGIN
            </L.Button>
          )}

          {!emailSent && (
            <L.Button type='button' $isvisible={!login} onClick={visibleButtonLogin}>
              NEXT
            </L.Button>
          )}

          <p>
            Não és um Membro ? <Link to="/register">Cadastrar</Link>
          </p>
        </L.LoginForm>

      </L.LoginContent>
    </L.LoginContainer>
  );
};

export default Login;
