import axios from "axios";

export const RequestsAPI = {
    createRequest(success: boolean) {
        return axios.post('https://neko-cafe-back.herokuapp.com/auth/test', {success: success})
    }
}