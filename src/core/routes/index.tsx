import { Route, Routes } from 'react-router-dom'

import routes from '../constants/routes.constants'
import LoginPage from '../../pages/LoginPage'
import ChatPage from '../../pages/ChatPage'
import {observer} from "mobx-react-lite";

interface IAppRoutes {
    isAuth: boolean
}

const AppRoutes = (props: IAppRoutes) => {
    const { isAuth } = props

    if (isAuth) {
        return (
            <Routes>
                <Route path={routes.chat} element={<ChatPage />}/>
                <Route path="*" element={<LoginPage />} />
            </Routes>
        )
    }

    return (
        <Routes>
            <Route path={routes.login} element={<LoginPage />} />
            <Route path="*" element={<LoginPage />} />
        </Routes>
    )
}

export default observer(AppRoutes)