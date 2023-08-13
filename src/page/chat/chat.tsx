import Layout from "../../layout/layout.tsx"
import CardChat from './cardChat/cardChat.tsx';
import ChatModal from '../chat/chatModal/chatModal.tsx';


const Chat = () => {
  return (
    <Layout>
      <CardChat/>
      <ChatModal/>
    </Layout>
  )
}

export default Chat