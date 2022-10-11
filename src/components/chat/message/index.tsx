import {observer} from "mobx-react-lite";
import moment from 'moment'
import {IMessage} from "../../../mobx/chat/types";
import {FC} from "react";
import AuthStore from '../../../mobx/auth'

interface IMessageComponentProps {
    message: IMessage
}
const MessageComponent: FC<IMessageComponentProps> = (props: IMessageComponentProps) => {
    const {message} = props
    const {name} = AuthStore
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 10
            }}
        >
            <div>
                {message.type === 'notification'
                    ? message.value
                    : message.name === name
                        ? (<>
                            <span style={{fontWeight: 700}}>{name}[Me]:</span>
                            <span>{message.value}</span>
                           </>
                        )
                        : `${message.name}: ${message.value}`}
            </div>
            <div style={{fontSize: '10px'}}>
                {moment(message.date.toString()).calendar().toString().split('t')[1] || ''}
            </div>
        </div>
    )
}

export default observer(MessageComponent)