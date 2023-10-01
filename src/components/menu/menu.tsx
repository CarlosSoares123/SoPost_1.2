import * as M from './menu'
import * as GS from '../../globalStyle'
import avatar from '/surema.jpg'
import { MdOtherHouses, MdForum, MdNotificationsNone, MdOutlineLogout } from "react-icons/md";
import { Link } from 'react-router-dom';


const Menu = () => {
  return (
    
    <M.menu_container>

    <Link to="/profile" className="profile">
      <GS.figureImg>
        <img src={avatar} alt=''/>
      </GS.figureImg>
      <div className="text">
      <Link to="/profile">Carlos Soares</Link>
      <span>@Carlos ck</span>
      </div>

    </Link>

      <M.menu>
        <h2>Notificação</h2>
        <M.menu_nav>
          <ul>
            <Link to="/" className='link'><MdOtherHouses/> <li>Home</li> </Link>
            <Link to="/chat" className='link'><MdForum/><li >Chat</li></Link>
            <Link to="/notification" className='link'><MdNotificationsNone/><li>Notificação</li></Link>
            <Link to="#" className='link'><MdOutlineLogout/><li>Logout</li></Link>
          </ul>
        </M.menu_nav>
      </M.menu>
    </M.menu_container>
    
  )
}

export default Menu