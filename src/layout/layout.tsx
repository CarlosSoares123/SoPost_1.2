import { ReactNode } from 'react'
import * as L from './layout.ts'
import Menu from '../components/menu/menu.tsx'

interface Props{
  children: ReactNode
}

const Layout: React.FC<Props> = ({children}) => {
  return (
    <L.layoutContainer>
      <Menu/>
      {children}
    </L.layoutContainer>
  )
}

export default Layout