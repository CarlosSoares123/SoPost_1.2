import styled from 'styled-components'

interface Props {
  send: boolean
}


export const chat_container = styled.div`
  width: 50vw;
  height: 100%;
  background-color: #fff;
  border-radius: 10px;
  padding: 15px;
`
export const chat_friend = styled.div`
  width: 100%;
  height: fit-content;
  
  display: flex;
  gap: 10px;
  align-items: center;
  border-bottom: 1px solid var(--color-text-2);
  padding-bottom: 10px;
  color: var(--color-text);

  .text{
    display: grid;
    gap:5px;

    .name{
      font-weight: bold;
    }
    .email{
      color: var(--color-text-2);
    }
  }
`
export const chat_container_message = styled.div`
  width: 100%;
  height: 410px;
  margin-block: 20px;
  overflow: scroll;
  overflow-x: hidden; /* Esconde a barra de rolagem horizontal */
  overflow-y: scroll; /* Mostra a barra de rolagem vertical */
`
export const message = styled.div<Props>`
  width: 30vw;
  height: fit-content;
  float: ${({send}) => ( send ? 'right' : 'left')};
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 15px;
  background: ${({send}) => (send ? 'linear-gradient(90deg,#0ea5ea, #0bd1d1, #fff)' : 'linear-gradient(90deg, aqua, #fff)')};

`
export const chat_send = styled.div`
  width: 100%;
  height: 45px;
  display: flex;
  align-items: center;
`
export const chat_textarea = styled.textarea`
  width: 90%;
  height: 100%;
  border-radius: 50px 0px 0px 50px;
  background-color: #45454529;
  outline: none;
  font-size: 22px;
  padding-inline: 15px;
  resize: none;
  padding: 10px;
  font-size: 18px;

  border: none;

  ::placeholder{
    padding: 10px;
  }
`
export const chat_button = styled.button`
  width: 10%;
  height: 100%;
  border-radius: 0px 50px 50px 0px;
  background: linear-gradient(90deg,#0ea5ea, #0bd1d1);
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;

  .icon{
    font-size: 25px;
    color: #fff;
  }
`