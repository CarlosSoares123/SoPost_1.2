import Layout from "../../layout/layout.tsx"

import * as GS from '../../globalStyle.ts'
import * as PS from './postSaved.ts'

const PostSaved = () => {
  return (
    <Layout>
      <PS.saved_container>
        <GS.header>Saved Posts</GS.header>
        <PS.saved>
          
        </PS.saved>
      </PS.saved_container>
    </Layout>
  )
}

export default PostSaved