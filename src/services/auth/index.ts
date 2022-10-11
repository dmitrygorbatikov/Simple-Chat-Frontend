import axios from 'axios'
import {BACKEND_URL} from "../../core/constants/env.constants";

class AuthService {
    public baseUrl = BACKEND_URL + '/public/login'

    public login = () => {
        return axios.post(this.baseUrl)
            .then(result => {
                return result.data.name
            }).catch((e: any) => e.message)
    }
}

export default new AuthService()