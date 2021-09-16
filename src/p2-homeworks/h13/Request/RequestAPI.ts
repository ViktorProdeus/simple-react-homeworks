import axios from 'axios';

export const requestAPI = {
    post(checkboxValue: boolean) {
       return axios({
            method: 'post',
            url: 'https://neko-cafe-back.herokuapp.com/auth/test',
            data: {success: checkboxValue}
        })
    }


}
