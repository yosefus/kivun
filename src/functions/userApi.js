import axios from 'axios'

export async function addNewUser(newUserData) {
    try {
        const res = await axios.post('http://survey-workin.herokuapp.com/api/users/register', newUserData)
        return res

    } catch (error) {
        console.log(error.message || 'something went wrong');
    }
}

export async function showUsers() {
    try {
        const res = await axios.get('https://survey-workin.herokuapp.com/api/users')
        return res.data
    } catch (error) {
        console.log(error);
    }
}
export async function changeUser(_id, data) {
    try {
        const res = await axios.put(`https://survey-workin.herokuapp.com/api/users/${_id}`, data)
        return res.data
    } catch (error) {
        console.log(error);
    }
}
export function getToken(jwt) {
    axios.defaults.headers.Authorization = jwt
}
