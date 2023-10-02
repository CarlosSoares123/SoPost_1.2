import * as R from './register.ts'
import { Link } from 'react-router-dom'

import Avatar from '/login/avatar.svg'

const Register: React.FC = () => {
  return(
    <R.RegisterContainer>
      <R.RegisterContent>
        <R.Text>
      <h1>Bem-vindo! </h1>
      <p>Estamos felizes em tê-lo conosco.</p>
    </R.Text>

    <R.Header htmlFor="imageInput" className="custom-label">
      <img src={Avatar} alt="" />
      <input type="file" id="imageInput" className="hidden-input" accept="image/*"></input>
    </R.Header>

    <R.RegisterForm>
      
      <R.InputContainer>
        <R.Label htmlFor="nome">Nome: </R.Label>
        <R.Input type="text" 
        placeholder='Digite o Nome'/>
      </R.InputContainer>

      <R.InputContainer>
        <R.Label htmlFor="email">Email: </R.Label>
        <R.Input type="email" 
        placeholder='Digite o Email' autoComplete='off' />
      </R.InputContainer>

      <R.InputContainer>
        <R.Label htmlFor="password">Password: </R.Label>
        <R.Input type="password" placeholder='Digite a Senha'/>
      </R.InputContainer>
      
      <R.Button type='submit'>Registrar</R.Button>
      
      <p>Já possui uma conta ? <Link to ='/'>Cadastrar</Link></p>
      
    </R.RegisterForm>
      </R.RegisterContent>
    </R.RegisterContainer>
  )
}


export default Register