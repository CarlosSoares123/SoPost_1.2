import Layout from "../../layout/layout.tsx"
import * as P from './profile.ts'
import surema from '/surema.jpg'

const Profile = () => {
  return (
    <Layout>
      <P.profile>
        
        <P.profile_bg>
          
        </P.profile_bg>

        
        <P.profile_container>

          <P.profile_content>
            
          <P.profile_user>
            <figure>
              <img src={surema} alt="#"/>
            </figure>

            <div className="user_info">
              <span className="name">Carlos Soares</span>
              <span className="email">carlossoares20@gmail.com</span>
            </div>
          </P.profile_user>

          <P.profile_menu>
            <button>Posts</button>
            <button>About</button>
            
          </P.profile_menu>

          </P.profile_content>


        </P.profile_container>
        


      </P.profile>
    </Layout>
  )
}

export default Profile