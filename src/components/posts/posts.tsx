// Styles
import * as P from './posts.ts'
import * as GS from '../../globalStyle.ts'
// Image
import avatar from '/surema.jpg'
//Icons
import { MdOutlineFavoriteBorder, MdInsertComment, MdTurnedInNot, MdClear, MdOutlineFavorite, MdOutlineMoreHoriz } from "react-icons/md";

import {Link} from 'react-router-dom'

interface Props {
  name: string,
  hours: string,
  src: string,
  user_img: string,
  text: string
}

const Posts: React.FC<Props> = ({name, hours, src, user_img, text}) => {
  
  
  return (
    <P.posts_container>
      
      <MdOutlineMoreHoriz className='icon'/>

      <div className='plus'>
        <i><MdTurnedInNot className='icon_plus'/> <span>Save Post</span></i>
        <i><MdClear className='icon_plus'/> <span>Ocult Post</span></i>
        <i><MdOutlineFavorite className='icon_plus'/> <span>Delete Post</span></i>
      </div>

      <P.posts_user>

      <GS.figureImg>
        <img src={user_img} alt='Imagem do avatar' />
      </GS.figureImg>

      <div className="text_user">
        <Link to="/profile" className='name'>{name}</Link>
        <span className='time'>{hours}</span>
      </div>

      </P.posts_user>

      <P.posts_text>
        <p>{text}</p>
      </P.posts_text>

      <P.posts_image>
        <img src={src} alt='Image post' />
      </P.posts_image>

      <P.posts_react>
        <div><MdOutlineFavoriteBorder/> <span>12</span> </div>
        <div><MdInsertComment/> <span>2</span></div>
      </P.posts_react>

      <P.posts_comment>
        <GS.figureImg>
          <img src={avatar} alt="Image User"/>
        </GS.figureImg>

        <textarea placeholder='Deixe o seu comentario ...'>
        </textarea>
      </P.posts_comment>

    </P.posts_container>
  )
}

export default Posts