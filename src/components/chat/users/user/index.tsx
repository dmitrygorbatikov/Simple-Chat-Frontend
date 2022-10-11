import {FC} from "react";
import {observer} from "mobx-react-lite";
import {IUser} from "../../../../mobx/chat/types";

interface IUserComponentProps {
    user: IUser
    index: number
}

const UserComponent: FC<IUserComponentProps> = (props: IUserComponentProps) => {
    const {user, index} = props
    return (
        <div>
            {index + 1}: {user.name}
        </div>
    )
}

export default observer(UserComponent)