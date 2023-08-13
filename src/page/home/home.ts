import styled from 'styled-components'


interface Props {
  add: boolean
}
interface Open{
open: boolean
}

interface modal {
modalVisible: boolean
}

export const home_container = styled.main`
  width: 100%;
  height: 100%;
  display: grid;
  gap: 15px;
`
export const home_modal_container= styled.div<modal>`
  width: 100%;
  min-height: 100vh;
  background-color: rgba(0,0,0,0.85);
  
  display: ${({modalVisible}) => (modalVisible ? 'grid' : 'none')};
  transition: all .4s;
  place-content: center;

  position: fixed;
  top:0;
  left:0;
  z-index: 1;
`
export const modal_insert = styled.div`
  width: 550px;
  height: 100%;
  background-color: #fff;
  border-radius: 10px;
  padding: 15px;
  padding-top: 0px;
  display: grid;
  gap: 15px;
`
export const modal_insert_header =styled.header`
  width: 100%;
  height: 50px;
  display:flex;
  align-items: center;
  justify-content: center;
  padding-bottom: -10px;
  border-bottom: 1px solid var(--color-text-2);
  position: relative;
  
  h1{
    font-size: 28px;
  }
  .icon_close{
    cursor: pointer;
    position: absolute;
    top: 10px;
    right: -13px;
    display:flex;
    align-items: center;
    font-size: 28px;
    color: var(--color-text-2);
    border-radius: 50%;
    transition: .4s;

    &:hover{
      color: #fff;
      background-color: var(--color-base);
    }
  }
`
export const modal_insert_user = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 10px;

  .text{
    display:grid;
    .name{
      font-weight: bold;
      font-size: 18px;
    }
  }
`
export const modal_insert_form = styled.form`
  display: grid;
  gap: 10px;
  
  .submit{
    width: 100%;
    height: 50px;
    background: none;
    border-radius: 8px;
    font-size: 18px;
    border: none;
    background-color: var(--color-base);
    color: #fff;

    &:hover{
      filter: brightness(1.09)
    }
  }
`
export const modal_insert_textarea = styled.textarea`
  width: 100%;
  height: 15vh;
  font-size: 22px;
  outline: none;
  border-radius: 8px;
  border: none;
  resize: none; /* Impede o redimensionamento */
  overflow: auto;
`
export const modal_insert_button = styled.button<Open>`
  width: 100%;
  height: 55px;
  background-color: #fff;
  color: var(--color-text);
  padding-inline: 10px;
  font-weight: 700;
  font-size: 18px;
  border-radius: 8px;
  border: 1px solid var(--color-base);
  box-shadow: 0px 0px 3px 1px var(--color-base);
  
  display: ${({open}) => ( open ? 'flex' : 'none')};
  align-items: center;
  justify-content: space-between;

  .icon{
    font-size: 35px;
  }
`
export const modal_insert_add = styled.div<Props>`
  width: 100%;
  height: 100%;
  padding: 5px;
  background-color: #fff;
  border: 1px solid var(--color-text-2);
  border-radius: 8px;
  position: relative;

  display: ${({add}) => ( add ? 'grid' : 'none')};
  
  .add_image{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
  }
  .pre-img{ 
    width: 100%;
    height: 270px;//
    border-radius: 10px;
  }

  .icon_close{
    position: absolute;
    top: 3px;
    right: 2px;
    display:flex;
    align-items: center;
    font-size: 25px;
    color: var(--color-text-2);
    cursor: pointer;
  }
  figure{
    width: 100%;
    height: 270px;
    border-radius: 10px;
    overflow: hidden;
    
    position: relative;

    img{
      width: 100%;
      height: 100%;
      
    }

    span{
      position: absolute;
      top: 0;
      left: 0;
      cursor: pointer;
      font-size: 30px;
      z-index: 1;
    }
  }
  .icon_close_img{
    cursor: pointer;
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 10px;
    display:flex;
    align-items: center;
    font-size: 25px;
    color: #fff;
    border-radius: 50%;
    background-color: var(--color-text-2);
  }
`