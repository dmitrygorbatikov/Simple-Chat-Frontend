import {FC} from "react";
import UserComponent from "./user";
import {observer} from "mobx-react-lite";
import {IUser} from "../../../mobx/chat/types";

interface IUsersComponentProps {
    users: IUser[]
}

const UsersComponent: FC<IUsersComponentProps> = (props) => {
    const {users} = props
    return (
        <div style={{maxWidth: 250, marginLeft: 50}}>
            <h1>Users. Online: {users.length}</h1>
            <div>
                {
                    users.map((user: any, index) => {
                        return (
                            <div key={user.name}>
                                <UserComponent user={user} index={index}/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default observer(UsersComponent)