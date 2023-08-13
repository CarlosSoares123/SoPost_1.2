import * as I from './insert.ts'
import avatar from '/surema.jpg'
import * as GS from '../../../globalStyle.ts'

interface props {
  modal: React.ReactEventHandler
}

const Insert: React.FC<props> = ({modal}) => {
  return (
    <I.insertPost_container>
      <GS.figureImg>
        <img src={avatar} alt=""/>
      </GS.figureImg>

      <I.insertPost_button onClick={modal}>
        <p>O que estas a Pensar, Carlos ?</p>
      </I.insertPost_button>

    </I.insertPost_container>
  )
}

export default Insert