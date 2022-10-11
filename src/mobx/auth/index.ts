import {action, makeObservable, observable} from 'mobx'
import AuthService from '../../services/auth'

class AuthStore {
    constructor() {
        makeObservable(this)
    }

    @observable
    public name: string | undefined = undefined

    @observable
    public room: string | undefined = undefined

    @action
    public loginUser = async (props: {room: string, cb: (name: string) => void}) => {
        const {room, cb} = props
        // @ts-ignore
        this.name = await AuthService.login()
        this.room = room
        // @ts-ignore
        cb(this.name)
    }
}

export default new AuthStore()