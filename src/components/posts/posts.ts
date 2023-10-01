import styled from 'styled-components'

export const PostContainer = styled.section`
  width: 100%;
  height: auto;
  background-color: #fff;
  border-radius: 10px;
  padding: 15px;
  display: grid;
  gap: 10px;
  position: relative;
  .icon{
    position: absolute;
    top: 15px;
    right: 20px;
    cursor: pointer;
    font-size: 30px;
    color: var(--color-text-2);
  }
  .plus{
    position: absolute;
    top: 45px;
    right: -10px;

    width: 160px;
    height: auto;
    background-color: #fff;
    box-shadow: 0px 0px 10px 1px var(--color-text);
    border-radius: 5px;
    // UseRef
    display: none;
    gap: 5px;
    padding: 10px;
    
    i{
      display:flex;
      align-items: center;
      gap: 5px;
      padding: 8px;
      font-size: 16px;
      transition: .4s;
      cursor: pointer;
      
      &:hover{
        background-color: var(--color-base);
        margin-inline: -20px;
        padding-inline: 25px;
        color: white;
        border-radius: 5px;
    }
  }
    .icon_plus{
      font-size: 25px;
    }
}
`
export const PostUser = styled.div`
  width: 100%;
  display: flex;
  gap: 15px;
  align-items: center;
  

  .text_user{
    display: grid;

    .name{
      font-weight: bold;
      font-size: 18px;
      color: #000;
      &:hover{text-decoration: underline 2px;}
    }
    .time{
      font-size: 16px;
    }
  }
`
export const PostText = styled.div`
  width: 100%;
  height: fit-content;
`
export const PostImage = styled.figure`
  width: 100%;
  height: 350px;
  
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
`
export const PostReact = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 10px;
  align-items: center;
  font-size: 23px;

  i{
    padding: 3px 10px;
    border-radius: 10px;
    cursor: pointer;
    color: #000;
    display: flex;
    gap: 15px;
    align-items: center;
    transition: all.4s ease;
    font-size: 18px;

    &:hover{
      color: var(--color-text);
    }
  }
`
export const PostComment = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  align-items: center;

  textarea{
    width: 100%;
    height: 45px;
    font-size: 18px;
    border-radius: 50px;
    text-align: left;
    padding: 10px;
    padding-inline: 20px;
    outline: none;
    border: 1px solid var(--color-text-2);

    resize: none; /* Impede o redimensionamento */
    overflow: auto;
  &:focus{
    border-color: var(--color-base);
    box-shadow: 0px 0px 3px 1px var(--color-base);
  }
  
}

`