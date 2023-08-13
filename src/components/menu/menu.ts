import styled from 'styled-components'


export const menu_container = styled.div`
  width: 25vw;
  height: 100%;
  display: grid;
  gap: 15px;

  .profile{
  background-color: white;
  border-radius: 10px;
  display: flex;
  gap: 15px;
  align-items: center;
  padding: 10px;
  }
  .text{
    display: grid;
    gap: 5px;

    a{
      font-weight: bold;
      font-size: 18px;
      color: #000;
    }
    span{
      color: var(--color-text-2);
      font-weight: 700;
    }
  }
`
export const menu = styled.div`
  border-radius: 10px;
  background-color: white;
  padding: 15px 25px;
  display: grid;
  gap: 15px;

  h2{
    font-weight: 500;
    color: var(--color-text-2);
  }
`
export const menu_nav = styled.nav`
  ul{
    display: grid;
    gap: 5px;
  }

  .link{
  padding: 15px 0px;
  color: var(--cor);
  font-size: 22px;
  display:flex;
  gap: 15px;
  align-items: center;
  transition: .4s;
  a{
    color:var(--color-text);
  }

  &:hover{
  background-color: var(--color-base);
  margin-inline: -35px;
  padding-inline: 25px;
  color: white;
  border-radius: 5px;
  
  a{
  color: white;
  }
}
  }
`