import * as CH from './cardChat'
import * as GS from '../../../globalStyle'

import avatar from '/avatar.jpg'
import { MdSend } from "react-icons/md";

const CardChat = () => {
  return (
    <CH.chat_container>
      
      <CH.chat_friend>

        <GS.figureImg>
          <img src={avatar} alt='Img Friend'/>
        </GS.figureImg>

        <div className='text'>
          <span className='name'>Laudia Pedro</span>
          <span className='email'>laudiapedro@gmail.com</span>
        </div>
      </CH.chat_friend>

      <CH.chat_container_message>

        <CH.message send={true}>
          <div className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, hic?
          </div>
        </CH.message>

        <CH.message send={false}>
          <div className="">
            Lorem ipsum dolor sit amet ?
          </div>
        </CH.message>

        <CH.message send={false}>
          <div className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, hic?
          </div>
        </CH.message>

        <CH.message send={true}>
          <div className="">
            Lorem ipsum dolor sit amet ?
          </div>
        </CH.message>
        
      </CH.chat_container_message>

      <CH.chat_send>

        <CH.chat_textarea placeholder='Escreve a tua Resposta'/>

        <CH.chat_button><MdSend className='icon'/></CH.chat_button>

      </CH.chat_send>

    </CH.chat_container>
  )
}

export default CardChat