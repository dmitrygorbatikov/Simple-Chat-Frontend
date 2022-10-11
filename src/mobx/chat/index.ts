import {io} from "socket.io-client";
import {action, observable} from "mobx";
import {BACKEND_URL} from "../../core/constants/env.constants";
import {SocketActionsEnum} from "./types";
import AuthStore from '../auth'
class ChatStore {

    @observable
    public readonly socket = io(BACKEND_URL, {
        transports: ["websocket"]
    })

    @action
    public joinRoom = (props: {room: string, name: string}) => {
        const {room,name} = props

        this.socket.emit(SocketActionsEnum.joinRoom, {room, name})
    }

    @action
    public disconnect = (props: {room: string | undefined, cb: () => void}) => {
        const { room, cb } = props
        AuthStore.room = undefined
        AuthStore.name = undefined
        this.socket.emit('leaveRoom', {room})
        cb()
    }

    @action
    public sendMessage = (props: {value: string, room: string, name: string}) => {
        const {room, name, value} = props

        this.socket.emit(SocketActionsEnum.sendMessage, {value, room, name})
    }


}

export default new ChatStore()