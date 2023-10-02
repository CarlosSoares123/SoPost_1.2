import * as R from './register.ts'
import { Link } from 'react-router-dom'

import Avatar from '/login/avatar.svg'
import { useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone';  

const Register: React.FC = () => {
const [urlImagem, setUrlImagem] = useState<string>(Avatar);

  const onDrop = useCallback((arquivos) => {
    // Certifique-se de que há pelo menos um arquivo
    if (arquivos.length > 0) {
      const imagem = arquivos[0];

      // Usar FileReader para ler o conteúdo da imagem e obter o URL base64
      const leitor = new FileReader();
      leitor.onload = () => {
        const urlDaImagem = leitor.result as string;
        setUrlImagem(urlDaImagem);
        console.log('URL da imagem:', urlDaImagem);

      };
      leitor.readAsDataURL(imagem);
    }
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return(
    <R.RegisterContainer>
      <R.RegisterContent>
      
        {/* Texto introdutorio */}
        <R.Text>
        <h1>Bem-vindo! </h1>
        <p>Estamos felizes em tê-lo conosco.</p>
        </R.Text>

        {/* Input type:file */}
        <R.Header  {...getRootProps()}>
          <img src={urlImagem} alt="UserAvatar"/>
          <input type="file" id="imageInput" className="hidden-input" accept="image/*"  {...getInputProps()} />
          
        </R.Header>

        {/* Corpo do Formulario em geral */}
        <R.RegisterForm>
          
          {/* Container dos nomes */}
          <R.InputsName>
            <R.InputContainer>
              <R.Input type="text" 
              placeholder='Digite seu Nome'/>
            </R.InputContainer>

            <R.InputContainer>
              <R.Input type="text" 
              placeholder='Digite seu Sobrenome'/>
            </R.InputContainer>
          </R.InputsName>

          {/* Container email */}
          <R.InputContainer>
            <R.Input type="email" 
            placeholder='Digite seu Email' autoComplete='off' />
          </R.InputContainer>

          {/* Container password */}
          <R.InputContainer>
            <R.Input type="password" placeholder='Digite sua Senha'/>
          </R.InputContainer>
          
          <R.Button type='submit'>Registrar</R.Button>
          <p>Já possui uma conta ? <Link to='/'>Cadastrar</Link></p>
          
        </R.RegisterForm>
      </R.RegisterContent>
    </R.RegisterContainer>
  )
}


export default Register