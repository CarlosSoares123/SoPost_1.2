import styled,{ createGlobalStyle } from "styled-components";

export const StyledGlobal = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root{
  --color-text: #454545;
  --color-text-2: #acacac;
  --color-bg: #55a4f31c;
  --color-base: #3280fd;
}

body{
  background-color: var(--color-bg);
  color: var(--color-text);
  font-family: sans-serif;
}

a{
  text-decoration: none;
  color: none;
}

li{
  list-style: none;
}

button{
  cursor: pointer;
}

`

// Estilizacoes que se encontram em mais de um componente

export const figureImg = styled.figure`
  width: 55px;
  height: 55px;
  clip-path: circle();
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
`

export const header = styled.h2`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 7px;
  padding-left: 15px;
  font-size: 45px;
  color: var(--color-text-2);
  background-color: #fff;
  border-radius: 10px;
`