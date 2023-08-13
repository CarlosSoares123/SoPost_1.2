//Styles
import * as H from './home.ts'
import * as GS from '../../globalStyle.ts'
import Layout from '../../layout/layout.tsx'
import Insert from './components/insert.tsx'
import Posts from '../../components/posts/posts.tsx'
//Image
import avatar from '/surema.jpg'
import avatar_2 from '/avatar.jpg'
import img_1 from '/01.jpeg'
import img_2 from '/02.jpeg'
//Icons
import { MdClear, MdImage } from "react-icons/md";
// Hook
import { useState } from 'react'

const Home: React.FC = () => {
  
  const [visible, setVisible] = useState(false)
  const [addImg, setAddImg] = useState(false)
  const [openAdd, setOpenAdd] = useState(true)
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const post = () => {
    console.log("Publicar")
  }
  // Abrir o input file
  const add_img = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setAddImg(true)
    setOpenAdd(false)
  }
  //Fechar o input
  const close_add_img = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setAddImg(false)
    setOpenAdd(true)
    setSelectedImage(null)
  }
  // Abrir modal
  const open = () => {
    setVisible(true)
  }
  // Fechar modal
  const close = () => {
    setVisible(false)
    setAddImg(false)
    setOpenAdd(true)
    setSelectedImage(null)
  }
  
  // testando
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  const file = event.target.files?.[0];
  if (file) {
    const reader = new FileReader();
    reader.onloadend = () => {
      setSelectedImage(reader.result as string);
    };
    reader.readAsDataURL(file);
  }
};

  return (
    <>
    <Layout>
      <H.home_container>
        <Insert modal={open}/>
        <Posts 
        name='Carlos Soares' 
        hours='2 hours Ago' 
        src={img_1} 
        user_img={avatar} 
        text='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem ea enim dolor fugit, asperiores quam ut vero facere sed excepturi veniam quas fugiat, delectus incidunt eaque ratione dolore provident debitis.'
        />
        <Posts 
        name='Laudia Pedro' 
        hours='1 min Ago' 
        src={img_2} 
        user_img={avatar_2}
        text='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem ea enim dolor fugit, asperiores quam ut vero facere sed excepturi veniam quas fugiat, delectus incidunt eaque ratione dolore provident debitis.'
        />
      </H.home_container>
    </Layout>

    {/* Modal Insert */}
    <H.home_modal_container modalVisible={visible}>
      <H.modal_insert>
        <H.modal_insert_header>
          <h1>Criar Publicacao</h1>
          <MdClear className='icon_close' onClick={close}/>
        </H.modal_insert_header>

        <H.modal_insert_user>
          
          <GS.figureImg>
            <img src={avatar} alt=''/>
          </GS.figureImg>

          <div className='text'> 
            <span className='name'>Carlos Soares</span>
            <span className='email'>carlossoares@gmail.com</span>
          </div>

        </H.modal_insert_user>

        <H.modal_insert_form>
        <H.modal_insert_textarea placeholder="Em que estas a pensar, Carlos Soares"/>
        
        <H.modal_insert_button onClick={add_img} open={openAdd}>
        <p>Adicionar uma Imagem</p>
        <MdImage className="icon"/>
        </H.modal_insert_button>

        <H.modal_insert_add add={addImg}>
          
          <input type="file" className='add_image' onChange={handleImageChange} />
          {selectedImage ? (
            <figure>
              <img src={selectedImage} alt="Uploaded" className="add_image_preview" />
              <label>Ola mundo</label>
            </figure>
          ) : (
            <MdImage className="icon pre-img" />
          )}
          
          <MdClear className='icon_close_img' onClick={close_add_img}/>

        </H.modal_insert_add>

        <button type='submit' className="submit" onClick={post}>Publicar</button>

        </H.modal_insert_form>

      </H.modal_insert>
    </H.home_modal_container>

    </>
  )
}

export default Home