// Styles
import * as P from './posts.ts'
import * as GS from '../../globalStyle.ts'
// Image
import avatar from '/surema.jpg'
//Icons
import { MdInsertComment, MdTurnedInNot, MdClear, MdOutlineFavorite, MdOutlineMoreHoriz } from "react-icons/md";
import { FaHeart, FaRegHeart } from "react-icons/fa";

import {Link} from 'react-router-dom'
import { useState } from 'react';

// Tipagem para as props que serao enviadas
interface Props {
  name: string,
  hours: string,
  src: string,
  user_img: string,
  text: string
}


const Posts: React.FC<Props> = ({name, hours, src, user_img, text}) => {
  
  const [isLiked, setIsLiked] = useState(false)
  

  // Funcao QUE COLOCA COR E TIRA 
  const handleLike = () => {
    setIsLiked(!isLiked)
  }

  
  return (
    <P.PostContainer>
      
      {/* Tres pontos */}
      <MdOutlineMoreHoriz className='icon' />

      {/* Mini menu para os usuarios que clicarem no tres pontos */}
      <div className='plus'>
        <i><MdTurnedInNot className='icon_plus'/> <span>Save Post</span></i>
        <i><MdClear className='icon_plus'/> <span>Ocult Post</span></i>
        <i><MdOutlineFavorite className='icon_plus'/> <span>Delete Post</span></i>
      </div>

      {/* header aonde fica a informacao basica do usuario que fez o post */}
      <P.PostUser>

      <GS.figureImg>
        <img src={user_img} alt='Imagem do avatar' />
      </GS.figureImg>

      <div className="text_user">
        <Link to="/profile" className='name'>{name}</Link>
        <span className='time'>{hours}</span>
      </div>

      </P.PostUser>

      {/* Texto do Post */}
      <P.PostText>
        <p>{text}</p>
      </P.PostText>

      {/* Imagem do Post */}
      <P.PostImage>
        <img src={src} alt='Image post' />
      </P.PostImage>

      
      <P.PostReact>

        <i onClick={handleLike}>
          { isLiked ? <FaHeart style={{color: 'red'}}/> : <FaRegHeart/>}
          <span>Gostei</span>
        </i>

        <i onClick={() => {console.log('Clicado com sucesso')}}>
          <MdInsertComment/>
          <span>Comentar</span>
        </i>
        
      </P.PostReact>

      <P.PostComment>
        <GS.figureImg>
          <img src={avatar} alt="Image User"/>
        </GS.figureImg>

        <textarea placeholder='Deixe o seu comentario ...'>
        </textarea>
      </P.PostComment>

    </P.PostContainer>
  )
}

export default Posts