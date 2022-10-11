import {observer} from "mobx-react-lite";
import AuthStore from '../mobx/auth'
import AppRoutes from "../core/routes";

function App() {
    const { name } = AuthStore
    return (
        <div>
            <AppRoutes isAuth={!!name}/>
        </div>
    )
}

export default observer(App)