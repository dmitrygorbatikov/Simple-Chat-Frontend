import {FC} from "react";
import MessageComponent from "./message";
import {IMessage} from "../../mobx/chat/types";
import {observer} from "mobx-react-lite";

interface IChatComponentProps {
    room: string | undefined
    sendMessage: () => void
    message: string
    setMessage: (message: string) => void
    leaveRoom: () => void
    messages: IMessage[]
}

const ChatComponent: FC<IChatComponentProps> = (props) => {
    const { leaveRoom, room, message, setMessage, sendMessage, messages } = props
    return (
        <div style={{maxWidth: 600}}>
            <div>
                <h1>Room: {room}</h1>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <div>
                    <input
                        onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                        placeholder={'Write a text...'}
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                    />
                </div>
                <div>
                    <button onClick={sendMessage}>SEND</button>
                    <button style={{marginLeft: '10px'}} onClick={leaveRoom}>LEAVE ROOM</button>
                </div>
            </div>
            <div style={{marginTop: 10}}>
                {messages.length > 0 && messages.map((message, index) => {
                    return (
                        <div key={index}>
                            <MessageComponent message={message} />
                        </div>
                    )
                })}
            </div>
        </div>

    )
}

export default observer(ChatComponent)