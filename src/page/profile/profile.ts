import styled from 'styled-components'

export const container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  gap: 20px;
`

export const profile = styled.div`
  width: 100%;
  height: 400px;
  display: grid;
  border-radius: 10px;
  box-shadow: 0px 2px 6px 0px var(--color-text);
  overflow: hidden;
`

export const profile_bg = styled.figure`
  width: 100%;
  height: 200px;

  background-image: url('/bg-fundo.jpg');
  background-size: cover; /* Ajusta o tamanho da imagem para cobrir o elemento */
  background-position: center center; /* Centraliza a imagem no elemento */
  background-repeat: no-repeat; /* Evita repetições da imagem */

`

export const profile_container = styled.div`
  width: 100%;
  height: fit-content;
  padding-inline: 15px;
  display: grid;
  gap: 10px;
  background: #fff;

  position: relative;
  
`

export const profile_content = styled.div`
  width: 100%;
  height: 100%;
  padding-inline: 15px;
  display: grid;
  gap: 25px;
  background-color: violet;

  position: absolute;
  top: -150px;
  left: 0;
`

export const profile_user = styled.div`
  display: flex;
  align-items:center;
  gap: 35px;
  
  figure{
    width: 185px;
    height: 185px;
    
    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 50%;
    }
  }

  .user_info{
    display: grid;
    .name{
      font-size: 45px;
      font-weight: 600;
      color: var(--color-text)
    }
  }

`

export const profile_menu = styled.div`
  display: flex;
  gap: 15px;
  padding-inline: 25px;

  button{
    background: none;
    border: none;
    font-size: 20px;
    font-weight: 600;
    transition: .4s;
    color: var(--color-text);
    
    &:hover{
      color: var(--color-base);
    }
  }
`

export const container_menu = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;

`