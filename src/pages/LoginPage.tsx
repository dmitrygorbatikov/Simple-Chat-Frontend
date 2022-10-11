import {observer} from "mobx-react-lite";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import AuthStore from '../mobx/auth'
import ChatStore from "../mobx/chat";

const LoginPage = () => {
    const navigate = useNavigate()
    const [room, setRoom] = useState('')

    const loginUser = () => {
        if(room) {
            const cb = (name: string) =>  {
                ChatStore.joinRoom({room, name})
                navigate('/chat', {replace: true})
            }
            AuthStore.loginUser({room, cb}).then()
        }
    }

    return (
        <div>
            <h1>LoginPage</h1>
            <input
                onKeyPress={(e) => e.key === 'Enter' && loginUser()}
                value={room}
                onChange={(e) => setRoom(e.target.value)}
            />
            <button onClick={loginUser}>Login</button>
        </div>
    )
}

export default observer(LoginPage)