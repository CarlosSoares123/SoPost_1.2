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
  gap: 10px;
  align-items: center;

  .name{
    font-weight:bold;
  }
  .message{
    font-size:14px;
    color: var(--color-text-2);
  }
`