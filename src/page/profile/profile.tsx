import Layout from "../../layout/layout.tsx"
import * as P from './profile.ts'
import surema from '/surema.jpg'

import Posts from '../../components/posts/posts.tsx'
import avatar from '/avatar.jpg'
import img_1 from '/01.jpeg'


const Profile = () => {
  return (
    <Layout>
      <P.container>

      <P.profile>

        <P.profile_bg/>

        
        <P.profile_container>

          <P.profile_content>
            
          <P.profile_user>
            <figure>
              <img src={surema} alt="#"/>
            </figure>

            <div className="user_info">
              <span className="name">Surema Amado</span>
              <span className="email">suremaAmado20@gmail.com</span>
            </div>
          </P.profile_user>

          <P.profile_menu>
            <button>Posts</button>
            <button>About</button>
            
          </P.profile_menu>

          </P.profile_content>


        </P.profile_container>
        
      </P.profile>

        <P.container_menu>
        <Posts 
        name='Carlos Soares' 
        hours='2 hours Ago' 
        src={img_1} 
        user_img={avatar} 
        text='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem ea enim dolor fugit, asperiores quam ut vero facere sed excepturi veniam quas fugiat, delectus incidunt eaque ratione dolore provident debitis.'
        />
        </P.container_menu>

      </P.container>

    </Layout>
  )
}

export default Profile