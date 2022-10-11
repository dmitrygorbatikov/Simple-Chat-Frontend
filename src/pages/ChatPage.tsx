import { observer } from 'mobx-react-lite'
import {useEffect, useState} from "react";
import AuthStore from '../mobx/auth'
import ChatStore from '../mobx/chat'
import {IMessage, IUser, SocketActionsEnum} from "../mobx/chat/types";
import {useNavigate} from "react-router-dom";
import ChatComponent from "../components/chat";
import UsersComponent from "../components/chat/users";

const ChatPage = () => {
    const { room, name } = AuthStore
    const { socket } = ChatStore
    const navigate = useNavigate()

    const [messages, setMessages] = useState<IMessage[]>([])
    const [users, setUsers] = useState<IUser[]>([])
    const [message, setMessage] = useState('')

    const sendMessage = () => {
        if(message && room && name) {
            ChatStore.sendMessage({value: message, room, name})
            setMessage('')
        }
    }

    const leaveRoom = () => {
        const cb = () => navigate('/login', {replace: true})
        ChatStore.disconnect({room, cb})
        setMessage('')
        navigate('/login', {replace: true})
    }

    useEffect(() => {

        socket.on(SocketActionsEnum.joinRoom, ({room}) => {
            const { messages, users } = room
            setMessages(messages)
            setUsers(users)
        })
        socket.on(SocketActionsEnum.sendMessage, ({room}) => {
            const { messages, users } = room
            setMessages(messages)
            setUsers(users)
        })

    }, [])

    return (
        <div style={{display: "flex"}}>
            <ChatComponent
                room={room}
                leaveRoom={leaveRoom}
                message={message}
                setMessage={setMessage}
                sendMessage={sendMessage}
                messages={messages}
            />
            <UsersComponent users={users} />
        </div>
    )
}

export default observer(ChatPage)