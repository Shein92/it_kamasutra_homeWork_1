import axios from 'axios'

export const RequestAPI = {
    changeCheckbox(bool: boolean) {
        return axios.post('https://neko-cafe-back.herokuapp.com/auth/test', {success: bool}, {})
    }
}