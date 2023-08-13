import styled from "styled-components";

export const insertPost_container = styled.section`
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  background-color: #fff;
  display: flex;
  gap: 10px;
`
export const insertPost_button = styled.button`
  width: 100%;
  position: relative;
  border: none;
  transition: .2s;
  border-radius: 5px;
  background: #fff;
  p{
    position: absolute;
    top: 18px;
    left: 10px;
    font-size: 18px;
    color: var(--color-text-2)
  }
`