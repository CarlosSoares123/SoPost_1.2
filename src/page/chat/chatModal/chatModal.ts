import styled from 'styled-components'

export const chatModal_container = styled.div`
  width: 350px;
  height: fit-content;
  border-radius: 10px;
  background-color: white;
  padding: 15px 25px;
  display: grid;
  gap: 15px;
  cursor: pointer;

  h2{
    font-weight: 500;
    color: var(--color-text-2);
  }
`

export const chatModal_message = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  gap: 10px;
  
`
export const chatModal_friend =styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  cursor: pointer;

  padding: 5px 0px;
  color: var(--cor);
  font-size: 22px;
  transition: .4s;
  

  .name{
    font-weight:bold;
  }
  .message{
    font-size:14px;
    color: var(--color-text-2);
  }

  &:hover{
  background: linear-gradient(90deg,#0ea5ea, #0bd1d1);;
  margin-inline: -35px;
  padding-inline: 25px;
  color: white;
  border-radius: 5px;

  .message{
    color: var(--color-text);
  }
  }

`