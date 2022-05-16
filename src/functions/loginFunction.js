import axios from "axios";
const baseUrl='http://kivun-survey-server.herokuapp.com'

export async function loginCalc(userData) {
    //cheking the user with server 
   return axios.post(baseUrl+'/api/users/login', userData)
        .then(res => { return res.data })
}
