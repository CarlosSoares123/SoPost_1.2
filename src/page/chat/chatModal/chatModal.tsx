import * as CM from './chatModal.js'
import * as GS from '../../../globalStyle.js'

import avatar from '/download.jpg'
import avatar2 from '/avatar.jpg'

export default function ChatModal() { 
  return (
    <CM.chatModal_container>
      <h2>Message</h2>
      
      <CM.chatModal_message>
        
        <CM.chatModal_friend>
          <GS.figureImg>
            <img src={avatar} alt=''/>
          </GS.figureImg>

          <div className='content'>
            <span className='name'>Carlos Soares</span>
            <p className='message'>Ola cheguei até aqui ...</p>
          </div>
        </CM.chatModal_friend>

        <CM.chatModal_friend>
          <GS.figureImg>
            <img src={avatar2} alt=''/>
          </GS.figureImg>

          <div className='content'>
            <span className='name'>Carlos Soares</span>
            <p className='message'>Ola cheguei até aqui ...</p>
          </div>
        </CM.chatModal_friend>

        <CM.chatModal_friend>
          <GS.figureImg>
            <img src={avatar} alt=''/>
          </GS.figureImg>

          <div className='content'>
            <span className='name'>Carlos Soares</span>
            <p className='message'>Ola cheguei até aqui ...</p>
          </div>
        </CM.chatModal_friend>

        <CM.chatModal_friend>
          <GS.figureImg>
            <img src={avatar2} alt=''/>
          </GS.figureImg>

          <div className='content'>
            <span className='name'>Carlos Soares</span>
            <p className='message'>Ola cheguei até aqui ...</p>
          </div>
        </CM.chatModal_friend>

      </CM.chatModal_message>

    </CM.chatModal_container>
  )
}

