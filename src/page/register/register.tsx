import * as R from './register.ts'
import { Link } from 'react-router-dom'
import axios from 'axios'

import Avatar from '/login/avatar.svg'
import { useState } from 'react'

const Register: React.FC = () => {
  
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData, [e.target.name]: e.target.value
    })
    
  } 

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const response = await axios.post('http://localhost:9000/register', formData)
      console.log(response.data)
      alert('Criado')
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
    }
  }
  
  return(
    <R.RegisterContainer>
      <R.RegisterContent>
      
        {/* Texto introdutorio */}
        <R.Text>
        <h1>Bem-vindo! </h1>
        <p>Estamos felizes em tê-lo conosco.</p>
        </R.Text>

        <R.Header >
          <img src={Avatar} alt="UserAvatar"/>          
        </R.Header>

        {/* Corpo do Formulario em geral */}
        <R.RegisterForm onSubmit={handleSubmit}>
          
          <R.InputContainer>
            <R.Input 
            type="text" 
            name= 'username'
            value={formData.username}
            onChange={handleInputChange}
            placeholder='Digite seu Nome'/>
          </R.InputContainer>
            
          {/* Container email */}
          <R.InputContainer>
            <R.Input 
            type="email" 
            name= 'email'
            value={formData.email}
            onChange={handleInputChange}
            placeholder='Digite seu Email' autoComplete='off' />
          </R.InputContainer>

          {/* Container password */}
          <R.InputContainer>
            <R.Input 
            type="password" 
            name= 'password'
            value={formData.password}
            onChange={handleInputChange}
            placeholder='Digite sua Senha'/>
          </R.InputContainer>
          
          <R.Button type='submit'>Registrar</R.Button>
          <p>Já possui uma conta ? <Link to='/'>Cadastrar</Link></p>
          
        </R.RegisterForm>
      </R.RegisterContent>
    </R.RegisterContainer>
  )
}


export default Register